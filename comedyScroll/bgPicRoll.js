window.onload=function(){
    var oBg=document.getElementById("bg");
    var aLi=oBg.getElementsByTagName("li");
    oBg.innerHTML+=oBg.innerHTML;
    oBg.style.width=aLi[0].offsetWidth*aLi.length+"px";
    setInterval(function(){
        oBg.style.left=oBg.offsetLeft-2+"px";
        if (oBg.offsetLeft<=-oBg.offsetWidth/2) {
            oBg.style.left=0;
        };
    }, 30)
}