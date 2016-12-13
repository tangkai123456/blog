/**
 * Created by tangkai on 2016/10/4.
 */


function fangda(x){
    var tuji=document.getElementsByClassName('tuji');
    var hero=document.getElementsByClassName('hero');
    var fangyu=document.getElementsByClassName('fangyu');
    var zhongzhuang=document.getElementsByClassName('zhongzhuang');
    var zhiyuan=document.getElementsByClassName('zhiyuan');
    var i=0;
    var j=0;
    switch (x){
        case 0:
            for(j=0;j<hero.length;j++){
                hero[j].style.opacity="1";
                hero[j].style.transform="scale(1)";
                hero[j].style.zIndex="2";
            }
            break;
        case 1:
            for(j=0;j<22;j++){
                hero[j].style.transform="scale(.5)";
            }
            for(i=0;i<tuji.length;i++){
                tuji[i].style.opacity="1";
                tuji[i].style.transform="scale(1.2)";
                tuji[i].style.zIndex="2";
            }
            break;
        case 2:
            for(j=0;j<22;j++){
                hero[j].style.transform="scale(.5)";
            }
            for(i=0;i<fangyu.length;i++){
                fangyu[i].style.opacity="1";
                fangyu[i].style.transform="scale(1.2)";
                fangyu[i].style.zIndex="2";
            }
            break;
        case 3:
            for(j=0;j<22;j++){
                hero[j].style.transform="scale(.5)";
            }
            for(i=0;i<zhongzhuang.length;i++){
                zhongzhuang[i].style.opacity="1";
                zhongzhuang[i].style.transform="scale(1.2)";
                zhongzhuang[i].style.zIndex="2";
            }
            break;
        case 4:
            for(j=0;j<22;j++){
                hero[j].style.transform="scale(.5)";
            }
            for(i=0;i<zhiyuan.length;i++){
                zhiyuan[i].style.opacity="1";
                zhiyuan[i].style.transform="scale(1.2)";
                zhiyuan[i].style.zIndex="2";
            }
            break;
    }
}