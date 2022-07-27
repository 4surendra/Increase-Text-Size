function scrollDocument(){
    if(document.body.srcollTo>100 || document.documentElement.scrollTop>100
        ){
        document.getElementById("scrollText").style.fontSize="200px"
        document.body.style.background="pink";
    }else{
        document.getElementById("scrollText").style.fontSize="100px"
        document.body.style.background="blue";
    }

}
window.onscroll=function(){
    scrollDocument();
};