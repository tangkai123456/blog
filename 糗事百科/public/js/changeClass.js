function removeClass(node, cName) {
	node.className = "";
}

function addClass(node, cName) {
	node.className = cName;
}

export {
	removeClass,
	addClass
}