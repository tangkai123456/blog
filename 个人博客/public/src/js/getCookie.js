/**
 * 从cookie字符串的键值对中获取指定的值
 * @param  {string} cookies 源字符串
 * @param  {string} key 键
 * @return {string} value 值
 */
function getCookie(cookies,key){
	var value="";
	if(cookies.match(key)){
		value=cookies.split(key+"=")[1].trim();
		/*如果key后面还有其他键，则用；分割*/
		if(value.match(";")){
			value=value.split(";")[0].trim();
		}
	}
	return value
}

module.exports=getCookie