import * as T from './vendor/three.module.js';
export const chapters=[
{id:'plates',icon:'⇆',title:'حرکت ورقه‌ها',group:'inner',category:'عوامل درونی / زمین‌ساخت',description:'ورقه‌های زمین‌ساختی با سرعت بسیار کم حرکت می‌کنند و در طول میلیون‌ها سال چهره زمین را تغییر می‌دهند.',note:'نرم‌کره عمدتاً جامد است و در زمان طولانی تغییر شکل می‌دهد؛ جریان‌ها نمایشی‌اند، نه دریایی از ماگما.',steps:['حرکت آهسته در نرم‌کره','دور شدن دو ورقه','بالا آمدن ماگما در شکاف','سرد شدن و تشکیل پوسته تازه']},
{id:'collision',icon:'⋀',title:'برخورد و کوه‌زایی',group:'inner',category:'عوامل درونی / چین‌خوردگی',description:'برخورد ورقه‌های قاره‌ای باعث فشرده شدن و چین‌خوردگی لایه‌های سنگی و تشکیل رشته‌کوه‌ها می‌شود.',note:'این مدل برخورد دو قاره را نشان می‌دهد؛ کوه‌زایی در این صحنه بر اثر فوران آتشفشانی نیست.',steps:['نزدیک شدن دو ورقه','فشرده شدن لایه‌ها','چین‌خوردگی و بالا آمدن','شکل‌گیری رشته‌کوه']},
{id:'fault',icon:'⌁',title:'شکستگی و گسل',group:'inner',category:'عوامل درونی / گسل عادی',description:'وقتی سنگ‌های پوسته می‌شکنند و دو سوی شکستگی جابه‌جا می‌شوند، گسل ایجاد می‌شود.',note:'نمونهٔ این صحنه گسل عادی ناشی از کشش است. خط نارنجی، سطح شکستگی را مشخص می‌کند.',steps:['کشش در دو جهت','گسترش شکستگی','لغزش یک بلوک به پایین','جابه‌جایی لایه‌های هم‌سن']},
{id:'volcano',icon:'♨',title:'فعالیت آتشفشانی',group:'inner',category:'عوامل درونی / آتشفشان',description:'ماگما از درون زمین بالا می‌آید. گدازه و مواد آتشفشانی در پیرامون دهانه انباشته می‌شوند و مخروط را می‌سازند.',note:'مادهٔ مذاب درون زمین «ماگما» و پس از خروج «گدازه» نام دارد. بخشی از مدل برداشته شده تا درون آن دیده شود.',steps:['ماگما در مخزن','بالا آمدن از مجرا','خروج مواد از دهانه','جریان گدازه روی دامنه','انباشت و رشد مخروط']},
{id:'weather',icon:'◇',title:'هوازدگی سنگ',group:'outer',category:'عوامل بیرونی / هوازدگی فیزیکی',description:'آب در شکاف سنگ یخ می‌زند و منبسط می‌شود. تکرار این فرایند سنگ را در همان محل خرد می‌کند.',note:'اینجا انتقال به محل دور رخ نمی‌دهد؛ هوازدگی با حمل مواد در فرسایش تفاوت دارد.',steps:['سنگ و شکاف‌های کوچک','ورود آب به شکاف','یخ‌زدگی و گسترش ترک','خرد شدن سنگ در محل']},
{id:'water',icon:'≈',title:'فرسایش آبی',group:'outer',category:'عوامل بیرونی / آب جاری',description:'آب، خاک و سنگ را می‌فرساید و به پایین‌دست می‌برد. فرسایش رودخانه می‌تواند دره‌ای V شکل بسازد.',note:'برداشت مواد در بالادست و رسوب‌گذاری در پایین‌دست دو بخش متفاوت این فرایندند.',steps:['بارش و رواناب','حمل ذرات در رودخانه','عمیق شدن دره V شکل','رسوب‌گذاری در پایین‌دست']},
{id:'wind',icon:'≋',title:'فرسایش بادی',group:'outer',category:'عوامل بیرونی / باد',description:'باد ذرات سست را برمی‌دارد و جابه‌جا می‌کند. با کاهش توان حمل باد، ماسه‌ها انباشته و تپهٔ ماسه‌ای تشکیل می‌شود.',note:'ذرات در این مدل با جهش‌های کوتاه حرکت می‌کنند. تپهٔ ماسه‌ای نتیجهٔ رسوب‌گذاری است.',steps:['وزش باد روی سطح خشک','برداشت ذرات سست','حمل و جهش ماسه‌ها','انباشت و پیدایش تپه ماسه‌ای']},
{id:'ice',icon:'❄',title:'فرسایش یخچالی',group:'outer',category:'عوامل بیرونی / یخچال طبیعی',description:'یخچال طبیعی با حرکت آهسته، کف و دیواره‌های دره را می‌فرساید و می‌تواند دره‌ای پهن و U شکل بسازد.',note:'در پایان مدل، یخ برای آشکار شدن شکل دره کنار می‌رود؛ فرسایش اصلی هنگام حرکت یخ رخ داده است.',steps:['یخ در درهٔ کوهستانی','حرکت آهستهٔ یخچال','فرسایش کف و دیواره‌ها','آشکار شدن دره U شکل']},
{id:'age',icon:'◭',title:'کوه جوان و پیر',group:'compare',category:'مقایسه / اثر فرسایش در گذر زمان',description:'با گذشت زمان و فرسایش، قله‌های تیز می‌توانند گردتر، ارتفاع کمتر و دامنه‌ها ملایم‌تر شوند. مدل مرجع ثابت را با مدل متغیر مقایسه کنید.',note:'شکل U دره معمولاً حاصل فرسایش یخچالی است و به‌تنهایی سن کوه را نشان نمی‌دهد. این مدل مسیر ساده‌شدهٔ فرسایش است.',steps:['کوه مرتفع و نوک‌تیز','فرسایش قله و دامنه','کاهش ارتفاع و باز شدن دره‌ها','کوه کم‌ارتفاع‌تر و گردتر']}
];
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
const smooth=x=>{x=clamp(x);return x*x*(3-2*x)};
const phase=(p,a,b)=>smooth((p-a)/(b-a));
const V=(x,y,z)=>new T.Vector3(x,y,z);
const mat=(c,opts={})=>new T.MeshStandardMaterial({color:c,roughness:.87,metalness:0,...opts});
const stone=['#765843','#a47c53','#d4b179','#75926b'];
function mesh(g,m,parent,pos=[0,0,0]){let o=new T.Mesh(g,m);o.position.set(...pos);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o}
function box(parent,w,h,d,c,pos,opts={}){return mesh(new T.BoxGeometry(w,h,d),mat(c,opts),parent,pos)}
function ball(parent,r,c,pos,opts={}){return mesh(new T.SphereGeometry(r,20,14),mat(c,opts),parent,pos)}
function arrow(parent,from,to,c='#d49150'){const a=new T.ArrowHelper(V(...to).sub(V(...from)).normalize(),V(...from),V(...to).distanceTo(V(...from)),c,.3,.18);parent.add(a);return a}
function line(parent,pts,c,width=1){const o=new T.Line(new T.BufferGeometry().setFromPoints(pts.map(p=>V(...p))),new T.LineBasicMaterial({color:c,linewidth:width}));parent.add(o);return o}
function strata(parent,w,d,pos=[0,0,0]){const g=new T.Group();parent.add(g);g.position.set(...pos);stone.forEach((c,i)=>box(g,w,.36,d,c,[0,-1.08+i*.36,0]));return g}
// A deformable solid terrain: top surface, four geological side bands, and bottom.
function terrain(parent,w,d,n=64,m=48,base=-1.4,color='#91a36b'){
 const group=new T.Group();parent.add(group);const geo=new T.BufferGeometry(),pos=new Float32Array((n+1)*(m+1)*3),colors=new Float32Array(pos.length),idx=[];
 for(let j=0;j<=m;j++)for(let i=0;i<=n;i++){let k=j*(n+1)+i;pos[k*3]=(i/n-.5)*w;pos[k*3+2]=(j/m-.5)*d;}
 for(let j=0;j<m;j++)for(let i=0;i<n;i++){let a=j*(n+1)+i,b=a+1,c=a+n+1,e=c+1;idx.push(a,c,b,b,c,e)}
 geo.setAttribute('position',new T.BufferAttribute(pos,3));geo.setAttribute('color',new T.BufferAttribute(colors,3));geo.setIndex(idx);mesh(geo,mat(color,{vertexColors:true}),group);
 const edge=[];for(let i=0;i<=n;i++)edge.push(i);for(let j=1;j<=m;j++)edge.push(j*(n+1)+n);for(let i=n-1;i>=0;i--)edge.push(m*(n+1)+i);for(let j=m-1;j>=1;j--)edge.push(j*(n+1));edge.push(0);
 const walls=[];for(let layer=0;layer<4;layer++){const g=new T.BufferGeometry(),a=new Float32Array(edge.length*6),ids=[];for(let i=0;i<edge.length-1;i++)ids.push(i*2,i*2+1,i*2+2,i*2+1,i*2+3,i*2+2);g.setAttribute('position',new T.BufferAttribute(a,3));g.setIndex(ids);mesh(g,mat(stone[layer],{side:T.DoubleSide}),group);walls.push(g)}
 box(group,w,.08,d,'#705840',[0,base-.04,0]);
 const tint=new T.Color();
 function update(fn){for(let k=0;k<pos.length/3;k++){let x=pos[k*3],z=pos[k*3+2],y=fn(x,z);pos[k*3+1]=y;const shade=clamp(.80+y*.09,.72,1.12);tint.setRGB(shade,shade,shade);colors[k*3]=tint.r;colors[k*3+1]=tint.g;colors[k*3+2]=tint.b;}geo.attributes.position.needsUpdate=true;geo.attributes.color.needsUpdate=true;geo.computeVertexNormals();geo.computeBoundingSphere();for(let l=0;l<4;l++){let a=walls[l].attributes.position.array;edge.forEach((k,i)=>{let top=pos[k*3+1];for(let v=0;v<2;v++){a[i*6+v*3]=pos[k*3];a[i*6+v*3+1]=base+(top-base)*(l+v)/4;a[i*6+v*3+2]=pos[k*3+2];}});walls[l].attributes.position.needsUpdate=true;walls[l].computeVertexNormals();walls[l].computeBoundingSphere();}}
 return {group,update,geometry:geo};
}
function particles(parent,count,color,r=.055){const inst=new T.InstancedMesh(new T.SphereGeometry(r,6,5),mat(color),count);inst.instanceMatrix.setUsage(T.DynamicDrawUsage);parent.add(inst);const temp=new T.Object3D();inst.frustumCulled=false;return{object:inst,update(fn){for(let i=0;i<count;i++){const a=fn(i,count);temp.position.set(a[0],a[1],a[2]);temp.scale.setScalar(a[3]??1);temp.updateMatrix();inst.setMatrixAt(i,temp.matrix);}inst.instanceMatrix.needsUpdate=true;}}}
const rand=i=>{const v=Math.sin(i*127.1+311.7)*43758.5453;return v-Math.floor(v)};
export function createModel(id){
 const root=new T.Group(),labels=[];let animate=()=>{};let bounds=12;
 const label=(text,position)=>labels.push({text,position:V(...position)});
 if(id==='plates'){
  box(root,11.8,1.05,5.3,'#a27855',[0,-1.85,0]);
  const left=strata(root,4.8,5,[-2.4,0,0]),right=strata(root,4.8,5,[2.4,0,0]);
  const fresh=box(root,1,.20,5,'#595e4c',[0,.08,0]);
  const magma=box(root,.26,1.5,4.6,'#ea8a38',[0,-.9,0],{emissive:'#ba4719',emissiveIntensity:.4});
  const a1=arrow(root,[-2.1,.6,1],[-3.6,.6,1]),a2=arrow(root,[2.1,.6,1],[3.6,.6,1]);
  const convection=particles(root,42,'#f1b369',.057);
  for(const sign of [-1,1]){const pts=[];for(let i=0;i<=64;i++){let a=i/64*Math.PI*2;pts.push([sign*2.7+Math.cos(a)*1.8,-1.85+Math.sin(a)*.30,2.71])}line(root,pts,'#c9a170');}
  label('پوسته زمین',[-3.1,.37,2.2]);label('ورقه زمین‌ساختی',[2.8,.37,-1.4]);label('نرم‌کره',[2.4,-1.85,2.8]);label('پوسته تازه',[0,.37,1.5]);
  animate=p=>{let s=phase(p,.15,.95);left.position.x=-2.4-s*.8;right.position.x=2.4+s*.8;fresh.scale.x=Math.max(.002,1.6*phase(p,.5,1));fresh.material.color.set(p>.75?'#68735b':'#c36e3b');magma.scale.y=Math.max(.005,phase(p,.2,.55));magma.position.y=-1.65+.75*magma.scale.y;a1.position.x=-2.1-s*.5;a2.position.x=2.1+s*.5;convection.update(i=>{let sign=i<21?-1:1,a=(i%21)/21*Math.PI*2+sign*p*8;return[sign*2.7+Math.cos(a)*1.8,-1.85+Math.sin(a)*.30,2.76,1]});};
 }else if(id==='collision'){
  const t=terrain(root,10,5.4,90,40,-1.5,'#8ca66a');
  const a1=arrow(root,[-5.5,.2,3],[-3.5,.2,3]),a2=arrow(root,[5.5,.2,3],[3.5,.2,3]);
  label('ورقه قاره‌ای',[-3.7,.4,1.3]);label('ورقه قاره‌ای',[3.7,.4,1.3]);label('لایه‌های چین‌خورده',[0,1.7,2.85]);
  animate=p=>{const fold=phase(p,.18,1);t.group.scale.x=1-.17*p;t.update((x,z)=>.15+fold*(2.4*Math.exp(-x*x/3.7)*(.65+.35*Math.cos(x*4+z*.65))+.12*Math.cos(z*2+x)));a1.position.x=-5.5+p*.7;a2.position.x=5.5-p*.7;labels[2].position.y=.6+fold*2.4;};
 }else if(id==='fault'){
  // Complementary sloping fault faces, aligned layers before displacement.
  const blocks=[];for(let sign of [-1,1]){let g=new T.Group();root.add(g);for(let l=0;l<4;l++){let y0=-1.2+l*.38,y1=y0+.38;
   const x0=-y0*.48,x1=-y1*.48,outer=sign*5;let verts=[outer,y0,-2.5,x0,y0,-2.5,x1,y1,-2.5,outer,y1,-2.5,outer,y0,2.5,x0,y0,2.5,x1,y1,2.5,outer,y1,2.5];let geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(verts,3));geo.setIndex([0,2,1,0,3,2,4,5,6,4,6,7,0,1,5,0,5,4,3,7,6,3,6,2,1,2,6,1,6,5,0,4,7,0,7,3]);geo.computeVertexNormals();mesh(geo,mat(stone[l],{side:T.DoubleSide}),g);}
   blocks.push(g);
  }
  const crack=line(root,[[.58,-1.2,2.54],[-.16,.33,2.54]],'#e48e47');
  arrow(root,[-2.9,.8,-.5],[-4.5,.8,-.5]);arrow(root,[2.9,.8,-.5],[4.5,.8,-.5]);label('بلوک بالاتر',[-2.9,.7,1]);label('بلوک فرونشسته',[3,.7,1]);label('سطح گسل',[.6,-.3,2.7]);
  animate=p=>{const slip=phase(p,.32,1);blocks[1].position.set(.48*slip,-slip,0);crack.visible=p>.18;crack.geometry.setDrawRange(0,p>.3?2:1);labels[1].position.y=.7-slip;};
 }else if(id==='volcano'){
  bounds=11;
  // 270-degree open cone; the removed quadrant exposes the conduit and reservoir.
  const base=box(root,8,.55,6,'#a78358',[0,-1.7,0]);
  const crust=mesh(new T.CylinderGeometry(3.6,3.6,1.45,64,1,false,Math.PI/2,Math.PI*1.5),mat('#aa8960',{side:T.DoubleSide}),root,[0,-.725,0]);
  for(let a of [0,Math.PI/2]){const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute([0,-1.45,0,Math.sin(a)*3.6,-1.45,Math.cos(a)*3.6,Math.sin(a)*3.6,0,Math.cos(a)*3.6,0,0,0],3));g.setIndex([0,1,2,0,2,3]);g.computeVertexNormals();mesh(g,mat('#b5976e',{side:T.DoubleSide}),root);}
  const cone=new T.Group();root.add(cone);
  const coneMeshes=[];
  for(let l=0;l<5;l++){let shape=new T.CylinderGeometry(0.35+(4-l)*.48,.35+(5-l)*.48,.48,64,1,false,Math.PI/2,Math.PI*1.5);let o=mesh(shape,mat(l%2?'#a5845d':'#8c7557',{side:T.DoubleSide}),cone,[0,.24+l*.48,0]);coneMeshes.push(o);}
  // End faces fill each cut edge, retaining colored strata in the exposed section.
  for(let a of [0,Math.PI/2])for(let l=0;l<5;l++){let y0=l*.48,y1=(l+1)*.48,r0=.35+(5-l)*.48,r1=.35+(4-l)*.48;let g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute([0,y0,0,Math.sin(a)*r0,y0,Math.cos(a)*r0,Math.sin(a)*r1,y1,Math.cos(a)*r1,0,y1,0],3));g.setIndex([0,1,2,0,2,3]);g.computeVertexNormals();mesh(g,mat(l%2?'#b89368':'#c5a57a',{side:T.DoubleSide}),cone);}
  const chamber=ball(root,.85,'#eb9236',[0,-.85,0],{emissive:'#cc4316',emissiveIntensity:.4});chamber.scale.set(1.5,.65,1);
  const pipe=mesh(new T.CylinderGeometry(.18,.22,3.6,20),mat('#765341'),root,[0,.85,0]);
  const molten=mesh(new T.CylinderGeometry(.13,.18,1,20),mat('#ffae42',{emissive:'#f46b18',emissiveIntensity:.5}),root);
  const lava=particles(root,100,'#ff9d31',.073),sparks=particles(root,34,'#ed752e',.06);
  label('مخزن ماگما',[1.4,-.9,1.3]);label('مجرای آتشفشان',[.65,.8,.5]);label('دهانه',[0,3,0]);label('مخروط آتشفشانی',[-2,1.1,1.1]);
  animate=p=>{let growth=.68+.32*phase(p,.5,1),height=2.4*growth;cone.scale.y=growth;pipe.scale.y=(height+.85)/3.6;pipe.position.y=(height-.85)/2;let rise=phase(p,.1,.44);molten.scale.y=Math.max(.001,(height+.85)*rise);molten.position.y=-.85+molten.scale.y/2;chamber.scale.y=.65+.025*Math.sin(p*30);labels[2].position.y=height+.5;lava.object.visible=p>=.38;lava.update(i=>{let u=clamp((p-.38)*2.1-i/100*.4),a=2.1+(i%5)*.66,r=.35+u*2.4;return[Math.sin(a)*r,height*(1-u)+.06,Math.cos(a)*r,clamp(u*18)*(.5+rand(i)*.8)]});sparks.object.visible=p>.32&&p<.95;sparks.update(i=>{let q=(p*5+i/34)%1,a=i*2.4;return[Math.sin(a)*q*.85,height+Math.sin(q*Math.PI)*1.1,Math.cos(a)*q*.85,1-q]});};
 }else if(id==='weather'){
  box(root,8,.35,6,'#c1ae80',[0,-1.3,0]);
  const pieces=[];for(let x=0;x<3;x++)for(let y=0;y<2;y++)for(let z=0;z<2;z++){let o=box(root,1.08,1.05,1.16,['#a29178','#b4a085','#9b8a71'][(x+y+z)%3],[(x-1)*1.08,y*1.05-.55,(z-.5)*1.16]);pieces.push({o,x:x-1,y,z:z-.5});}
  const fissure=box(root,.028,2.03,2.36,'#56b5cb',[-.54,-.025,0],{transparent:true,opacity:.6});
  label('آب و یخ در شکاف',[-.45,1.2,1.3]);label('قطعات سنگ در همان محل',[2.1,-.7,1.6]);
  animate=p=>{let spread=phase(p,.45,1),wet=phase(p,.13,.4);fissure.visible=p>.12&&p<.88;fissure.scale.x=1+phase(p,.35,.6)*7;fissure.material.color.set(p>.35?'#c4f2f8':'#399bbf');fissure.material.opacity=.25+.55*wet;pieces.forEach(({o,x,y,z},i)=>{o.position.set(x*1.08+x*spread*.6,y*1.05-.55-y*spread*.54,z*1.16+z*spread*.7);o.rotation.set(spread*(rand(i)-.5)*.35,spread*(rand(i+8)-.5)*.32,spread*x*.13);});};
 }else if(id==='water'){
  const t=terrain(root,9,8,76,72,-1.25,'#8caa70');
  const riverGeo=new T.PlaneGeometry(.25,8,1,72);riverGeo.rotateX(-Math.PI/2);const river=mesh(riverGeo,mat('#6bb9c5',{transparent:true,opacity:.85,roughness:.28}),root);
  const rain=particles(root,100,'#6aacc4',.03),sediment=particles(root,65,'#aa8452',.055),runoff=particles(root,50,'#84bec6',.035);
  const bed=(x,z,p)=>{let v=1.55-Math.abs(z+4)*.14;const depth=.2+1.5*phase(p,.16,.92);return .05+v-depth*Math.max(0,1-Math.abs(x)/1.8)+.2*Math.sin(x*1.7)**2+phase(p,.7,1)*.38*Math.exp(-x*x/2-((z-3.3)**2)/1.5)};
  label('بارش و رواناب',[-2.3,3,-2]);label('دره V شکل',[.1,1.3,-.4]);label('رسوب‌گذاری',[1.1,.65,3.4]);
  animate=p=>{t.update((x,z)=>bed(x,z,p));let arr=riverGeo.attributes.position;for(let i=0;i<arr.count;i++){let x=arr.getX(i),z=arr.getZ(i);arr.setY(i,bed(x,z,p)+.027);}arr.needsUpdate=true;riverGeo.computeVertexNormals();riverGeo.computeBoundingSphere();rain.object.visible=p>.02&&p<.8;rain.update(i=>{let x=(rand(i)-.5)*8,z=(rand(i+100)-.5)*6-1;return[x,bed(x,z,p)+((1-((p*8+rand(i+200))%1))*3.2),z,1]});sediment.object.visible=p>.12;sediment.update(i=>{let q=(p*2.3+rand(i))%1,z=-3.8+q*7.6,x=(rand(i+100)-.5)*.21;return[x,bed(x,z,p)+.09,z,.8]});runoff.object.visible=p>.06&&p<.86;runoff.update(i=>{let q=(p*2+rand(i))%1,sign=i%2?1:-1,x=sign*(1-q)*4,z=-3+rand(i+55)*5+q*.6;return[x,bed(x,z,p)+.06,z,1]});labels[1].position.y=bed(0,0,p)+.65;};
 }else if(id==='wind'){
  const t=terrain(root,11,6,85,44,-.8,'#d8bd7a'),dust=particles(root,165,'#bb9453',.04);
  label('برداشت ذرات',[-3.4,.75,1.7]);label('جهت باد',[0,1.6,-1.6]);label('تپه ماسه‌ای',[3,1.8,1.5]);arrow(root,[-2.3,1.3,-1],[2.3,1.3,-1],'#b49a64');
  animate=p=>{let acc=phase(p,.25,1);t.update((x,z)=>.12+.10*Math.sin(z*3+x)*Math.sin(x*.8)+(.45-.33*acc)*Math.exp(-((x+3.3)**2)/2-z*z/7)+acc*1.5*Math.exp(-((x-3)**2)/(x<3?2.4:.65)-z*z/5));dust.object.visible=p>.02;dust.update(i=>{let q=(p*3+rand(i))%1,x=-4.8+q*8.2,z=(rand(i+400)-.5)*4.6;return[x,.18+Math.abs(Math.sin(q*Math.PI*7))*(.25+rand(i+8)*.45)+acc*1.4*Math.exp(-((x-3)**2)/2-z*z/5),z,1]});labels[2].position.y=.7+acc*1.5;};
 }else if(id==='ice'){
  const t=terrain(root,9,8,76,65,-1.4,'#a9aca0'),iceGeo=new T.BoxGeometry(2.3,1.3,3.7,5,2,12);
  const glacier=mesh(iceGeo,mat('#b7e0e3',{transparent:true,opacity:.85,roughness:.32}),root,[0,.8,-1.8]);
  const lines=[];for(let i=0;i<7;i++){let z=-1.6+i*.48;const l=line(glacier,[[-1.05,.66,z],[-.5,.58,z+.14],[.1,.65,z-.04],[.7,.58,z+.1],[1.06,.65,z]],'#6dabbc');lines.push(l);}
  const rubble=particles(root,48,'#797970',.09);
  const cross=(x,z,p)=>{let q=phase(p,.15,.83),old=.25+Math.abs(x)*.68,newY=.14+2.65*smooth((Math.abs(x)-1.05)/2.1);return old*(1-q)+newY*q+(4-z)*.055;};
  label('یخچال طبیعی',[0,2.3,-.8]);label('سنگ‌های همراه یخ',[1.4,.3,2.6]);label('دره U شکل',[-2.2,2,3]);
  animate=p=>{t.update((x,z)=>cross(x,z,p));glacier.position.z=-2+phase(p,.05,.83)*3.8;glacier.position.y=.95+(.2-p*.2);glacier.scale.x=1+phase(p,.15,.8)*.08;glacier.material.opacity=.85*(1-phase(p,.8,1));glacier.visible=p<.995;lines.forEach(l=>{l.visible=p<.93});rubble.update(i=>{let z=-2.6+rand(i)*5+phase(p,.05,.8)*1.6;z=Math.min(3.7,z);let x=(i%2?1:-1)*(1.1+rand(i+20)*.35);return[x,cross(x,z,p)+.1,z,.5+rand(i+77)*.7]});labels[0].position.z=glacier.position.z;labels[0].position.y=glacier.visible?2.3:-9;};
 }else if(id==='age'){
  const young=terrain(root,4.8,5.5,56,48,-.7,'#9baf79'),old=terrain(root,4.8,5.5,56,48,-.7,'#9baf79');young.group.position.x=-3.05;old.group.position.x=3.05;
  function shape(x,z,p){const a=Math.max(0,1-Math.abs(x+.6)/1.5-Math.abs(z+.5)/3)*2.8,b=Math.max(0,1-Math.abs(x-.9)/1.2-Math.abs(z-.4)/2.7)*2.2;let sharp=Math.max(a,b);let rounded=1.18*Math.exp(-((x+.25)**2)/2.1-z*z/6)+.32*Math.exp(-((x-1.3)**2)-z*z/5);return .04+sharp*(1-p)+rounded*p;}
  young.update((x,z)=>shape(x,z,0));label('کوه جوان · مرجع ثابت',[-3,3.3,0]);label('کوه در گذر زمان',[3,3.3,0]);
  animate=p=>{old.update((x,z)=>shape(x,z,p));labels[1].position.y=3.3-p*1.4;};
 }
 animate(0);
 return {root,labels,bounds,update:animate,dispose(){const gs=new Set(),ms=new Set();root.traverse(o=>{if(o.geometry)gs.add(o.geometry);if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>ms.add(m));if(o.isInstancedMesh)o.dispose();});gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());}};
}
