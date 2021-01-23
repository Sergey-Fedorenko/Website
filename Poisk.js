var searchInput = '';
var variable = '';
var items = ['Креатин','BCAA','Гейнер'];

function hiding(){
	$(document).ready(function() {
		for (var i=0; i<=2; i++)
			{
			$("."+i).hide();
			}
	});
}
hiding();

$('#Poisk1').keyup(function() {
	for (var i = 0; i<=2; i++)
		{
			var searchlength = $("#Poisk1").val().length;

			if (searchlength > 1)
			{
				if (items[i].includes($("#Poisk1").val()))
				{
				
					$("."+i).show();
				}
			}
			else
			{
				hiding();
			}
		}
});