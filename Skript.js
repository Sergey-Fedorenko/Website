var n="\n";
var summ = 0;
var list = " ";
var cena = 0;
var dat;
var id="";
var id1="";
var count = 0;

let imgG = new Array('картинка1.png','картинка01.png','картинка4.png');
let nameG = new Array('Креатин','BCAA','Гейнер');
let priceG = new Array(800,500,1200);

$(document).ready(function() {
for(let i=0;i<imgG.length;i++)
{
$('#mrk').append("<div class = 'sv' id='"+i+"' >"+"<section class ='"+i+"' id='"+i+"'>"+"<p>"+nameG[i]+"</p>"+ 
        "<img src = '"+imgG[i]+"'/>"+
        "<p>Цена: "+priceG[i]+"</p>"+ '<OPTION  VALUE="0">Выберите производителя и количество товара: </OPTION>' + listAppend(i) + listGenForAppend(i) +
        "</section>"+"</div>");
 $("#"+i).draggable({ revert:"invalid", revert:"vaid" });
 
 
} 
});

$(document).ready(function(){
$("#Chumbucket").droppable({
  drop:function(event, ui){
	  $(this)
	  .addClass("ui-state-highLight")
	  .find("p")
	  .html("Dropped!");
    var id = ui.draggable.attr('id');
    c1(id);
  }
  });
});


function c1(idt) {
if (sessionStorage.getItem('count') !=null)
{
summ = parseInt(sessionStorage.getItem('summ'));
count = sessionStorage.getItem('count');
}
	var selind2 = document.getElementById("chose"+ idt).options.selectedIndex;   
   var txt2= document.getElementById("chose"+ idt).options[selind2].text;
   var val= parseInt(document.getElementById("chose"+ idt).options[selind2].value);
   
   
   
   var selind3 = document.getElementById("chose1"+ idt).options.selectedIndex;   
   var txt3= document.getElementById("chose1"+ idt).options[selind3].text;
   var val3= parseInt(document.getElementById("chose1"+ idt).options[selind3].value);


  var src_img = imgG[idt];
cena = priceG[idt] ;
summ += cena * val;
list = nameG[idt] + " " + txt2 + " " + txt3;
sessionStorage.setItem('summ', summ);
sessionStorage.setItem('cena'+count, cena);
sessionStorage.setItem('list'+count, list);
sessionStorage.setItem('img'+count, src_img);
count++;
sessionStorage.setItem('count', count);
}


function Clear() {
summ = 0;
list = "";
var count = sessionStorage.getItem('count');
for (var i=0; i<count; i++)
{
sessionStorage.removeItem('list'+i);
sessionStorage.removeItem('img'+i);
sessionStorage.removeItem('cena'+i);
}
sessionStorage.removeItem('summ');
summ = 0;
sessionStorage.removeItem('count');
count = 0;
}
/*Списки*/
var lists2 = {
	tov1: [
	{ text: "1 шт.", valSP: 1},
    { text: "2 шт.", valSP: 2},
    { text: "3 шт.", valSP: 3}

	],
	tov2: [
	{ text: "1 шт.", valSP: 1},
    { text: "2 шт.", valSP: 2},
    { text: "3 шт.", valSP: 3}

	],
	tov3: [
	{ text: "1 шт.", valSP: 1},
    { text: "2 шт.", valSP: 2},
    { text: "3 шт.", valSP: 3}

	],
};

var lists = {
	tov1: [
	{ text: "Universal Nutrition", valSP: 1},
    { text: "MuscleTech", valSP: 2},
    { text: "BSN", valSP: 3}

	],
	tov2: [
	{ text: "Universal Nutrition", valSP: 1},
    { text: "MuscleTech", valSP: 2},
    { text: "BSN", valSP: 3}

	],
	tov3: [
	{ text: "Universal Nutrition", valSP: 1},
    { text: "MuscleTech", valSP: 2},
    { text: "BSN", valSP: 3}

	],
};



function listGenForAppend(nomer)
{
var keys = Object.keys(lists2);
var toHTML;
var topSelect;
var endSelect = '</SELECT>';

   topSelect = '<SELECT id = "chose'+ nomer +'">';
for (var key in lists2) {
	if(key == keys[nomer])
	{
	for(var i=0; i < lists2[key].length; i++)
 toHTML += '<OPTION VALUE = "' + lists2[key][i].valSP + '">' + lists2[key][i].text + '</OPTION>';

 }
}
return topSelect+toHTML+endSelect;
}


function listAppend(nomer)
{
var keys = Object.keys(lists);
var toHTML;
var topSelect;
var endSelect = '</SELECT>';

   topSelect = '<SELECT id = "chose1'+ nomer +'">';
for (var key in lists) {
	if(key == keys[nomer])
	{
	for(var i=0; i < lists[key].length; i++)
 toHTML += '<OPTION VALUE = "' + lists[key][i].valSP + '">' + lists[key][i].text + '</OPTION>';

 }
}
return topSelect+toHTML+endSelect;
}