function addBook(book) {
	console.log("add",book);
	var title = $(book).attr("data-title");
	var cover = $(book).attr("data-cover");
	var author = $(book).attr("data-author");
	var data ={
		title: title,
		coverurl: cover,
		name: author
	};

	$.ajax({
		url: "/book/newbook",
		type: "POST",
		dataType: "application/json",
		data: data,
		success: function(result) {
			$(book).attr("value", "Saved!");
			$(book).removeAttr("onclick");
		}
	});
}

$('.delete').on('click', function(e) {
  	e.preventDefault();
	var bookElement= $(this);
	var bookUrl = bookElement.attr('href');
	$.ajax({
		method: 'DELETE',
		url: bookUrl
	}).done(function(data){
		console.log(data);
		bookElement.remove();
	});
});