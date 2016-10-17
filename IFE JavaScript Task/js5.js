/**
 * Created by tangkai on 2016/10/12.
 */
/* 数据格式演示
 var aqiSourceData = {
 "北京": {
 "2016-01-01": 10,
 "2016-01-02": 10,
 "2016-01-03": 10,
 "2016-01-04": 10
 }
 };
 */

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = ''
    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}

var aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
};
/**
 * 渲染图表
 */
function renderChart(sum,n) {//sum是周期，n是字体，还用来控制字的位置
    var div=document.getElementsByClassName('aqi-chart-wrap')[0];
    div.innerHTML="";//初始化图表
    var city=document.getElementById('city-select').value;
    var width=sum*10+"px";
    var pingjun;
    var list=keys(aqiSourceData[city]);
    for(var i= 0,cishu=~~(91/sum);i<cishu;i++){
        pingjun=diguiAdd(i,i+sum-1,aqiSourceData[city],list);
        pingjun/=sum;
        div.innerHTML+="<div class=\"randomColor\"></div>";
        var ranDiv=div.lastElementChild;
        ranDiv.innerText=~~pingjun;
        ranDiv.style.fontSize=n+"px";
        ranDiv.style.width=width;
        ranDiv.style.height=pingjun+"px";
        ranDiv.style.background="#"+color();
    }
}
/*获取aqiSourceData的所有属性名*/
function keys(obj){
    var keys=[];
    for(var i in obj){
        keys.push(i);
    }
    return keys;
}
/*递归加*/
function diguiAdd(i,j,aqi,list){//i是算平均值起始日期，j是结束日期，aqi是下拉列表选择的城市的对象，zhouqi是统计周期，list是城市对象的所有日期属性名的集合

    if(j==i)
        return aqi[list[i]];
    else
        return aqi[list[j]]+diguiAdd(i,j-1,aqi,list);
}
/*随机颜色*/
function color(){
    var co=(~~(Math.random()*(2<<23))).toString(16);
    for(var j= 0,len1=6-co.length;j<len1;j++){
        co="0"+co;
    }
    return co;
}
/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange(th) {
    // 确定是否选项发生了变化
    var d1=+new Date();
    var sum,n;
    sum=th;
    switch (sum){
        case "day":
            sum=1;
            n=12;
            break;
        case "week":
            sum=7;
            n=20;
            break;
        case "month":
            sum=30;
            n=30;
    }
    // 设置对应数据
    renderChart(sum,n);
    // 调用图表渲染函数
    var d2=+new Date();
    console.log(d2-d1);
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
    // 确定是否选项发生了变化
    var sel=document.getElementById('city-select');
    // 设置对应数据
    // 调用图表渲染函数
    var rad=document.getElementsByName('gra-time');
    for(var i= 0,len=rad.length;i<len;i++){
        if(rad[i].checked){
            graTimeChange(rad[i].value);
        }
    }
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
    var rad=document.getElementsByName('gra-time');
    for(var i= 0,len=rad.length;i<len;i++){
        rad[i].setAttribute("onchange","graTimeChange(this.value)");
    }
    for(i= 0,len=rad.length;i<len;i++){
        if(rad[i].checked){
            graTimeChange(rad[i].value);
        }
    }
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
    // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
    var city=keys(aqiSourceData);
    var sel=document.getElementById('city-select');
    // 给select设置事件，当选项发生变化时调用函数citySelectChange
    for(var i= 1,len=city.length;i<len;i++){
        sel.innerHTML+="<option>"+city[i]+"</option>";
    }
    sel.onchange=citySelectChange;
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
    // 将原始的源数据处理成图表需要的数据格式
    // 处理好的数据存到 chartData 中
}

/**
 * 初始化函数
 */
function init() {
    initGraTimeForm();
    initCitySelector();
    initAqiChartData();
}

init();