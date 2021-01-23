var count = 0;
$(document).ready(function(){
var count = sessionStorage.getItem('count');
for (var i=0; i<count; i++){
$('.korzy').append('<div class="container1" id="' + i + '">'  /*'<div class = "sektion" id="draggable">'*/
					+ "<p><img src = '"+sessionStorage.getItem('img' + i)+"' width= 200 height = 160 >" 
					+ '<li>' + sessionStorage.getItem('list' + i) + '</li>' 
					+ '<li>' + sessionStorage.getItem('cena' + i) + '</li>' 
					+ '<button onclick="del('+i+')">Удалить</button>' + '</div>' + '</div>');
		$("#"+i).draggable({ revert: true });  
		
}
$('.korzy').append('<div class = "container1" id="itog">' +  '<p>' + 'Итог: ' + sessionStorage.getItem('summ') + ' руб.' + '</p>' + '</div>');


});



function del(ind){
	$("."+ind).remove();
	count = parseInt(sessionStorage.getItem('count')) - 1;
	sessionStorage.setItem('count', count);
	
	
	summ = parseInt(sessionStorage.getItem('summ')) - parseInt(sessionStorage.getItem('cena' + ind));
	sessionStorage.setItem('summ', summ);
	
		
		
		$( ".container1" ).remove( "#"+ind );
		$(".container1").remove('#itog');
		$('.korzy').append('<div class = "container1" id="itog">' +  '<p>' + 'Итог:' + sessionStorage.getItem('summ') + ' руб.'+ '</p>' + '</div>');
	

sessionStorage.removeItem('list'+ind);
sessionStorage.removeItem('img'+ind);
sessionStorage.removeItem('cena'+ind);

	


}

var $snaptarget = $( "#snaptarget" );
$snaptarget.droppable({
drop:function(event, ui){
var draggableId = ui.draggable.attr("id");
del(draggableId);
}
});
/*Чек*/
function download(name,ft) {
	let listSumm = sessionStorage.getItem('summ') + ' руб.';
	count = sessionStorage.getItem('count');
	let check = "";

	for (let i = 1; i<=count; i++){
		LNAP = sessionStorage.getItem(i + 'list');
		check += LNAP;
	}
	check += listSumm;

  let chek = document.getElementById("chek");
  let file = new Blob([check], {ft: ft});
  chek.href = URL.createObjectURL(file);
  chek.download = name;
}