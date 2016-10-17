/**
 * Created by tangkai on 2016/10/11.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city=document.getElementById("aqi-city-input");
    var val=document.getElementById("aqi-value-input");
    city=city.value.trim();
    val=val.value.trim();
    if((city.match(/[a-zA-Z]+/))&&val.match(/[0-9]{1,3}/)) {
        aqiData[city] = val;
    }else{
        alert("请重新输入");
    }
    console.log(aqiData);
}
/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var str="";
    for(var i in aqiData){
        str+="<tr><td>城市</td><td>"+i+"</td><td>空气质量</td><td>"+aqiData[i]+"</td><td><button class=\"delate\">删除</button></td></tr>";
    }
    var tab=document.getElementById('aqi-table');
    tab.innerHTML=str;
    var del=document.getElementsByClassName('delate');
    del=Array.prototype.slice.call(del,0);
    /*for(var i=0;i<del.length;i++){
        del[i].onclick=delBtnHandle;
    }*/
    del.forEach(function(e,i){
        e.onclick=delBtnHandle;........................................................................................................................z
    })
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
    // do sth.
    var de=document.getElementsByClassName('delate');
    var cityName=this.parentNode.parentNode.childNodes[1].innerText;
    delete aqiData[cityName];
    renderAqiList();
}

function init() {
    var bt=document.getElementById('add-btn')
    bt.onclick=addBtnHandle;
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
