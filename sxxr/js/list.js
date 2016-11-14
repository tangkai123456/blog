$(document).ready(function () {
    (function () {
        $.ajax({
            url: "yan.json",
            type: "get",
            cache: true,
            dataType: "json",
            success: function (res) {
                createTable(res);
                loadSum();
                var inp = $(".content input");
                for (var i = 0, len = inp.length; i < len; i++) {
                    changeSelectPrice(inp[i]);
                }
                changeAside();
                changeBabge();
                for (var k = 0, len1 = inp.length; k < len1; k++) {
                    outRound(inp[k]);
                }
                $(inp).on("keyup", function () {
                    outRound(this);
                    changeST(this);
                    changeSelectPrice(this);
                    changeAside(this);
                    pdAll();
                });
                $(inp).on("blur", function () {
                    outRound(this);
                    changeBabge();
                });
                $(".del").on("click", function () {
                    del(this);
                });
                $(".selectType button").on("click", function () {
                    addOrRemove(this);
                    selectType();
                });
                $(".sub").on("click", function () {
                    toGouwuche(res);
                });
                pdAll();
            }
        });
        $(".submit").on("click", tijiao);
        $("#search").on("keyup", search);
        $(".toggleC").on("click", closeFix);
    })();
    /*提交购物车*/
    function tijiao() {
        var arr = getBuyList();
        $.ajax({
            url: "http://192.168.1.254/jsonp/getJson.php?callback=?",
            type: "post",
            dataType: "json",
            data: {
                id: arr.id,
                num: arr.num
            },
            success: function (res, status) {
                console.log(res);
                console.log(status);
            }
        })
    }

    /*获得总价*/
    function getZongjia() {
        var list = getBuyList();
        var allPrice = num = 0;
        var data = {};
        list.forEach(function (one, i) {
            allPrice += one.allPrice;
            num += one.num;
        });
        return data = {
            allPrice: allPrice,
            num: num
        }
    }

    /*修改徽章值*/
    function changeBabge() {
        var y = j = c = q = 0;
        var gwc = getBuyList();
        for (var i = 0, len = gwc.length; i < len; i++) {
            switch (gwc[i].type) {
                case "烟":
                    y++;
                    break;
                case "酒":
                    j++;
                    break;
                case "茶":
                    c++;
                    break;
                case "其他":
                    q++;
                    break;
            }
        }
        $(".bYan").text(y);
        $(".bJiu").text(j);
        $(".bCha").text(c);
        $(".bQita").text(q);
    }

    /*打开购物列表*/
    function toGouwuche(data) {
        var gwc = getBuyList();
        var str = "";
        gwc.forEach(function (each, i) {
            str += "<tr><td>" + (i + 1) + "</td><td>" + data[i].name + "</td><td>" + each.num + "</td><td>" + each.allPrice + "</td></tr>"
        });
        $(".gwcList").html(str);
        $(".zongjia").text(getZongjia().allPrice);
    }

    /*获取购物清单*/
    function getBuyList() {
        var tr = $("tr:not(.th)");
        var gouwuche = [];
        for (var i = 0, len = tr.length; i < len; i++) {
            var value = $(tr[i]).find(".select").text();
            if (value != 0) {
                var each = {};
                var inp = $(tr[i]).find("input");
                each.id = +inp.attr("name");
                each.num = +inp.val();
                each.allPrice = +value;
                each.type = $(tr[i]).find(".zhonglei").text().trim();
                gouwuche.push(each);
            }
        }
        return gouwuche;
    }

    /*输入超出范围*/
    function outRound(thi) {
        if (+thi.value > +thi.parentNode.parentNode.childNodes[2].innerText) {
            var pos = $(thi).position();
            var cc = $(".cc");
            $(cc).removeClass("hide");
            $(thi).parent().append($(cc));
            $(thi).addClass("red");
            $(thi.parentNode.parentNode).find(".select").addClass("red");
        } else {
            $(thi).removeClass("red");
            $(thi.parentNode.parentNode).find(".select").removeClass("red");
            $(".cc").addClass("hide");
        }
    }

    /*判断所有输入是否有非法的*/
    function pdAll() {
        var b = Array.prototype.every.call($(".content input"), function (one, i) {
            return !$(one).hasClass("red")
        });
        if (b) {
            $(".sub").removeClass("disabled");
        } else {
            $(".sub").addClass("disabled");
        }
    }

    /*侧边栏的缩小与放大*/
    function closeFix() {
        $(".buy").toggleClass("hide");
        $(".btnFixed").toggleClass("hide");
    }

    /*选择和取消*/
    function addOrRemove(thi) {
        $(thi).toggleClass("btn-primary");
    }

    /*种类选择*/
    function selectType() {
        var sel = [];
        var bt = $(".selectType button");
        for (var i = 0; i < 4; i++) {
            if ($(bt).eq(i).hasClass("btn-primary")) {
                sel.push($(bt).eq(i).text().trim().split(" ")[0]);
            }
        }
        var tr = $("tr:not(.th)");
        tr.addClass("hide");
        if (sel.length != 0) {
            for (var j = 0, len = sel.length; j < len; j++) {
                for (var k = 0, len1 = tr.length; k < len1; k++) {
                    if ($(tr[k]).text().match(sel[j])) {
                        $(tr[k]).removeClass("hide");
                    }
                }
            }
        } else {
            tr.removeClass("hide");
        }
    }

    /*关闭某列*/
    function del(thi) {
        var n = findInd(thi.parentNode);
        $("th").eq(n).addClass("hide");
        var tr = $(".content tr:not(.th)");
        for (var i = 0, len = tr.length; i < len; i++) {
            tr[i].childNodes[n].style.display = "none";
        }
    }

    /*找到元素所在父级的索引*/
    function findInd(tag) {/*tag必须时jsDOM获取的*/
        var par = $(tag).parent();
        var t = $(par).children("*");
        for (var i = 0, len = t.length; i < len; i++) {
            if (t[i] == tag) {
                return i
            }
        }
    }

    /*修改已选价格*/
    function changeSelectPrice(th) {
        var i = th.parentNode.parentNode.childNodes[1].innerText;
        var j = th.value;
        th.parentNode.parentNode.children[4].innerText = i * j;
    }

    /*修改aside中的值*/
    function changeAside() {
        var data = getZongjia();
        $(".allPrice").text(data.allPrice);
        $(".sum").text(data.num);
    }

    /*加载购买框数字，刷新不消失，关闭页面才消失*/
    function loadSum() {
        var inp;
        inp = $(".table input");
        for (var j = 0, len = inp.length; j < len; j++) {
            sessionStorage[inp[j].name] = sessionStorage[inp[j].name] || 0;
            inp[j].value = sessionStorage[inp[j].name];
            outRound(inp[j]);
        }
    }

    /*打开网页时创建表格*/
    function createTable(res) {
        res.sort(function (a, b) {
            return a.sum - b.sum
        });
        var table = $(".content");
        var html = $(table).html();
        res.forEach(function (each, i) {
            html += "<tr><td class='mingzi'><div class='hide'>" + each.pinyin + "</div>" + each.name + "</td><td class='jiage'>" + (each.price - each.vPrice) + "</td><td class='yuliang'>" + each.sum + "</td><td class='shuru'><input type='number' max='" + each.sum + "' name='" + each.id + "'/></td><td class='select '></td><td class='hidden-xs zhonglei'>" + each.type + "</td><td class='caozuo'><button class='btn btn-info hidden-xs'>查看详情</button></td></tr>"
        });
        $(table).html(html);
    }

    /*输入框修改时改变session的值*/
    function changeST(th) {
        sessionStorage[th.name] = $(th).val();
    }

    /*搜索框*/
    function search() {
        var tr = $("tr:not(.th)");
        var val = this.value;
        for (var i = 0, len = tr.length; i < len; i++) {
            if (!$(tr[i]).text().match(val)) {
                $(tr[i]).addClass("hide");
            } else {
                $(tr[i]).removeClass("hide");
            }
        }
    }
});

