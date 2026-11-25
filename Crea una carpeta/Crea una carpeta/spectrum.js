(function(){
var cells=[
 {p:[[110,.55],[220,.9],[300,.4],[470,.75],[620,.5]],n:"Cell A: five peaks, the tallest being the second."},
 {p:[[90,.4],[190,.6],[350,.95],[430,.5],[560,.8],[700,.45]],n:"Cell B: six peaks, with the maximum at the third."},
 {p:[[150,.85],[260,.5],[380,.7],[600,.9]],n:"Cell C: four widely spaced peaks."},
 {p:[[100,.7],[170,.45],[240,.8],[330,.5],[520,.65],[660,.9],[740,.4]],n:"Cell D: seven peaks, the densest signature."}
];
var peaks=document.getElementById('peaks'),bars=document.getElementById('bars'),desc=document.getElementById('specdesc');
var NS='http://www.w3.org/2000/svg';
function el(n,a){var e=document.createElementNS(NS,n);for(var k in a)e.setAttribute(k,a[k]);return e}
function draw(i){
 peaks.innerHTML='';bars.innerHTML='';
 var d='M20 120';
 cells[i].p.forEach(function(q){
  var x=q[0],h=q[1]*100;
  d+=' L'+(x-14)+' 120 Q'+x+' '+(120-h*2)+' '+(x+14)+' 120';
  peaks.appendChild(el('line',{x1:x,x2:x,y1:120,y2:120-h,stroke:'#9b86ff','stroke-width':2,'stroke-opacity':.35}));
 });
 d+=' L780 120';
 peaks.appendChild(el('path',{d:d,fill:'none',stroke:'#9b86ff','stroke-width':2.5,'class':'peak'}));
 cells[i].p.forEach(function(q){
  bars.appendChild(el('rect',{x:q[0]-2+(q[1]*6),y:136,width:2+q[1]*6,height:30,fill:'#f0a43a','class':'peak'}));
 });
 desc.textContent=cells[i].n;
}
var btns=document.querySelectorAll('.chips button');
btns.forEach(function(b){b.addEventListener('click',function(){
 btns.forEach(function(o){o.setAttribute('aria-pressed','false')});
 b.setAttribute('aria-pressed','true');draw(+b.dataset.i);
})});
draw(0);
})();
