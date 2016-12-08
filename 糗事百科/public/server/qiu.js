/*[{
	userid,
	userhead,
	username,
	usersex,
	userage
}]*/
/*[{
	contentid,
	contentuserid,
	content,
	contentfuny,
	contentcomment,
	contentgod: [{
		contentgodUser,
		content,
		contentgodGood
	}]
}]*/

var user = [];
var content = [];

var article = document.getElementsByClassName("article");
for (var i = 0, len = article.length; i < len; i++) {
	var u = {};
	u.userid = article[i].getElementsByTagName("a")[0].href.split("/")[4];
	console.log(article[i].getElementsByTagName("a")[0].href.split("/")[4])
	u.userhead = article[i].getElementsByTagName("img")[0].src.trim();
	u.username = article[i].getElementsByTagName("a")[1].innerText.trim();
	u.usersex = article[i].getElementsByClassName("articleGender")[0].className.split("articleGender ")[1];
	u.userage = article[i].getElementsByClassName("articleGender")[0].innerText;
	user.push(u);
	var c = {};
	c.contentid = i;
	c.contentuserid = u.userid;
	c.content = article[i].getElementsByClassName("content")[0].innerText.trim();
	c.contentfuny = article[i].getElementsByClassName("number")[0].innerText.trim();
	c.contentcomment = article[i].getElementsByClassName("number")[1].innerText.trim();
	c.contentgod = [];
	content.push(c)
}


console.log(user);
console.log(content)
document.write(JSON.stringify(content))