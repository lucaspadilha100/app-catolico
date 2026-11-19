import json,subprocess,sys,os
TRILHA=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','reel','trilha.m4a')
os.chdir(sys.argv[1])
d=json.load(open('duracoes.json')); P=0.4; L=0.3; n=len(d)
ini=[sum(d[:i])+P*i+L for i in range(n)]
troca=ini[-1]-L-0.3; total=ini[-1]+d[-1]+0.9
ent=['-t',str(troca+0.6),'-i','tela.mp4','-loop','1','-t',str(total),'-i','fundo.png','-loop','1','-t',str(total-troca),'-i','fecho.png']
for i in range(n): ent+=['-i',f'fala{i}.wav']
ent+=['-stream_loop','-1','-i',TRILHA]
fc=[f"color=c=0xFBF0DD:s=1080x1920:r=30:d={total}[bg]",
 "[0:v]fps=30,scale=654:1414:flags=lanczos,setpts=PTS-STARTPTS[tel]",
 "[bg][tel]overlay=213:318:eof_action=repeat[a1]","[a1][1:v]overlay=0:0,format=yuv420p,trim=0:%f,setpts=PTS-STARTPTS[cena]"%(troca+0.5),
 "[2:v]fps=30,format=yuv420p,setpts=PTS-STARTPTS[fc]",
 f"[cena][fc]xfade=transition=fade:duration=0.5:offset={troca}[v]"]
vo=[]
for i in range(n):
  ms=int(ini[i]*1000); fc.append(f"[{3+i}:a]aresample=48000,adelay={ms}|{ms}[f{i}]"); vo.append(f"[f{i}]")
fc.append("".join(vo)+f"amix=inputs={n}:normalize=0[voz]")
fc.append(f"[{3+n}:a]aresample=48000,volume=0.22,atrim=0:{total},afade=t=in:d=1.5,afade=t=out:st={total-2.5}:d=2.5[mus]")
fc.append("[voz][mus]amix=inputs=2:normalize=0,alimiter=limit=0.95[au]")
subprocess.run(['ffmpeg','-y','-v','error',*ent,'-filter_complex',';'.join(fc),'-map','[v]','-map','[au]','-t',str(total),'-c:v','libx264','-preset','medium','-crf','19','-pix_fmt','yuv420p','-c:a','aac','-b:a','160k','-ac','2','-movflags','+faststart',sys.argv[2]],check=True)
print(round(total,1))
