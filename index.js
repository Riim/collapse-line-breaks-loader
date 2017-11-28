module.exports = function(content) {
	this.cacheable();
	return content.replace(/[\r\n]+/g, '\n');
};
