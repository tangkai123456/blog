/**
 * Created by tangkai on 2016/10/7.
 */
window.onscroll=function(){
    var scr=document.documentElement.scrollTop||document.body.scrollTop;
    var nav=document.getElementsByTagName('nav')[0];
    if(scr>44){
        nav.style.position="fixed";
        nav.style.top="-20px";
        nav.style.zIndex="20";
    }
    else{
        nav.style.position="relative";
        nav.style.top="0";
    }
};