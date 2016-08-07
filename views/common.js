module.exports = {
	ajax: function(url,type,data,sucFunc,errFunc){
		if (!url) return;

		$.ajax({
			'type': type || 'post',
			'url': url,
			'contentType':'text/html;charset=utf-8',
			'data':data,
			success: sucFunc || jQuery.noop(),
			async: true,
			error: errFunc || jQuery.noop()
		})
	}
}