var NoteConstants = require('../constants/NoteConstants');

var NoteActionts = {
	create: function(text){console.log(text)
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: "/note/create",
			data: {'text':text,'aaa':'sss'},
			success: function(res){
				console.log('res',res);
			},
			async: true,
			err: function(err){
				alert('记录失败');
			}
		})
	}
}

module.exports = NoteActionts;