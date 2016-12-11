export default function() {
	var xmlHttpReq;
	if (window.XMLHttpRequest) {
		xmlHttpReq = new XMLHttpRequest();
	} else {
		xmlHttpReq = new ActiveXObject('Microsoft.XMLHTTP');
	}
	return xmlHttpReq
}