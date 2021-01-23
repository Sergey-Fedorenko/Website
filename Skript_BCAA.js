var n="\n";
var summ = 0;
var list = " ";
var cena = 0;
var dat;
var id="";
var id1="";
var count = 0;

let imgG = new Array('картинка3.jpg','картинка01.png','111.jpg');
let nameG = new Array('BCAA-порошок','BCAA-таблетки','BCAA-капсулы');
let priceG = new Array(1000,1200,300);

$(document).ready(function() {
for(let i=0;i<imgG.length;i++)
{
$('#mrk').append("<div class = 'sv' id='"+i+"' >"+"<section class ='"+i+"' id='"+i+"'>"+"<p>"+nameG[i]+"</p>"+ 
        "<img src = '"+imgG[i]+"'/>"+
        "<p>Цена: "+priceG[i]+"</p>"+ '<OPTION  VALUE="0">Выберите производителя и кол-во товара: </OPTION>' + listGenForAppend(i) + listAppend(i) +
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

  var src_img = imgG[idt];
cena = priceG[idt];
summ += cena;
list = nameG[idt];

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
var lists = {
tov1: [
{ text: "Universal Nutrition", valSP: 5},
{ text: "MuscleTech", valSP: 4},
{ text: "BSN", valSP: 3}

],
tov2: [
{ text: "Universal Nutrition", valSP: 5},
{ text: "MuscleTech", valSP: 4},
{ text: "BSN", valSP: 3}

],
tov3: [
{ text: "Universal Nutrition", valSP: 5},
{ text: "MuscleTech", valSP: 4},
{ text: "BSN", valSP: 3}

]
};

var lists1 = {
tov4: [
{ text: "1", valSP: 9},
{ text: "2", valSP: 8},
{ text: "3", valSP: 7}
],
tov5: [
{ text: "1", valSP: 9},
{ text: "2", valSP: 8},
{ text: "3", valSP: 7}
],
tov6: [
{ text: "1", valSP: 9},
{ text: "2", valSP: 8},
{ text: "3", valSP: 7}
]
};

function listGenForAppend(nomer)
{
var keys = Object.keys(lists);
var toHTML;
var topSelect;
var endSelect = '</SELECT>';

topSelect = '<SELECT id = "chose '+ nomer +'">';
for (var key in lists) {
if(key == keys[nomer])
{
for(var i=0; i < lists[key].length; i++)
toHTML += '<OPTION VALUE = "' + lists[key][i].valSP + '">' + lists[key][i].text + '</OPTION>';

}
}
return topSelect+toHTML+endSelect;
}
/*Выпадающий список кол-во товара*/
function listAppend(nomer)
{
var keys = Object.keys(lists1);
var toHTML;
var topSelect;
var endSelect = '</SELECT>';

topSelect = '<SELECT id = "chose '+ nomer +'">';
for (var key in lists1) {
if(key == keys[nomer])
{
for(var i=0; i < lists1[key].length; i++)
toHTML += '<OPTION VALUE = "' + lists1[key][i].valSP + '">' + lists1[key][i].text + '</OPTION>';

}
}
return topSelect+toHTML+endSelect;
}