var comment = {};
comment.hot = [];
comment.gen = [];

var hot = document.getElementsByClassName("comments-table");
for (var i = 0, len = hot.length; i < len; i++) {
	var god = {};
	god.userid = hot[i].getElementsByTagName("a")[0].href.split("/")[4];
	god.userhead = hot[i].getElementsByTagName("img")[0].src.trim();
	god.username = hot[i].getElementsByTagName("a")[1].innerText.trim();
	god.usersex = hot[i].getElementsByClassName("articleGender")[0].className.split("articleGender ")[1];
	god.userage = hot[i].getElementsByClassName("articleGender")[0].innerText.trim();
	god.comment = hot[i].getElementsByClassName("main-text")[0].innerText.trim();
	god.hotsum = hot[i].getElementsByClassName("likenum")[0].innerText.trim();
	comment.hot.push(god);
}
var gen = document.getElementsByClassName("comment-block");
for (var i = 0, len = gen.length; i < len; i++) {
	var g = {};
	g.userid = gen[i].getElementsByTagName("a")[0].href.split("/")[4];
	g.userhead = gen[i].getElementsByTagName("img")[0].src.trim();
	g.username = gen[i].getElementsByClassName("userlogin")[0].innerText.trim();
	g.comment = gen[i].getElementsByClassName("body")[0].innerText.trim();
	g.id = gen[i].getElementsByClassName("report")[0].innerText.trim();
	comment.gen.push(g);
}


document.write(JSON.stringify(comment))