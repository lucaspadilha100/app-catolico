import json,subprocess,sys,os
os.chdir(sys.argv[1])
q=json.load(open('quadros.json')); i0=q['inicio']; fim=q['fim']; fr=q['quadros']
k=max([j for j,(n,t) in enumerate(fr) if t<=i0] or [0]); lst=fr[k:]; lin=[]
for j,(n,t) in enumerate(lst):
  a=max(t,i0); b=lst[j+1][1] if j+1<len(lst) else fim
  lin+=[f"file '{n}'",f"duration {max(b-a,0.001):.4f}"]
lin.append(f"file '{lst[-1][0]}'")
open('q.txt','w').write("\n".join(lin)+"\n")
subprocess.run(['ffmpeg','-y','-v','error','-f','concat','-safe','0','-i','q.txt','-vf','fps=30,format=yuv420p','-c:v','libx264','-crf','14','-preset','fast','tela.mp4'],check=True)
