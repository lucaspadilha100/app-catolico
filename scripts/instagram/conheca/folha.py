import subprocess,sys
from PIL import Image
v,saida=sys.argv[1],sys.argv[2]
dur=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',v]))
T=[dur*(i+0.5)/10 for i in range(10)]; ims=[]
for i,t in enumerate(T):
  f=f'{saida}.{i}.png'; subprocess.run(['ffmpeg','-y','-v','error','-ss',str(t),'-i',v,'-frames:v','1','-vf','scale=324:576',f],check=True); ims.append(Image.open(f))
o=Image.new('RGB',(324*5,576*2),'white')
for i,im in enumerate(ims): o.paste(im,(324*(i%5),576*(i//5)))
o.save(saida)
import os
for i in range(10): os.remove(f'{saida}.{i}.png')
