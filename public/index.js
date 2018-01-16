function addBook(book) {
	console.log(book)
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