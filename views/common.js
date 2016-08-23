module.exports = {
	ajax: function(url,type,data,sucFunc,errFunc,async){
		if (!url) return;

		$.ajax({
			'type': type || 'post',
			'url': url,
			'contentType': 'application/json;charset=utf-8',
			'data': JSON.stringify({params: data}),
			success: sucFunc || jQuery.noop(),
			async: async || true,
			error: errFunc || jQuery.noop()
		})
	},
	stopDefault: function(e){
		if ( e && e.preventDefault ) 
		    e.preventDefault(); 
		else
		    window.event.returnValue = false; 
	}
}