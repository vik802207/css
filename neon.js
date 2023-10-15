var a=document.getElementById("a")
a.addEventListener('mousemove',function(e){
    a.style.setProperty('--x',e.clientX + 'px');
    a.style.setProperty('--y',e.clientY + 'px');


})