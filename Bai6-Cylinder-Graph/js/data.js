import {drawGraph2D, drawLine, drawPieSlice, cleargraph} from "./script.js";
let name = document.getElementsByName("tenbieudo")[0].value;
let nd1 = document.getElementsByName("nd1")[0].value;
let nd2 = document.getElementsByName("nd2")[0].value;
let value = document.getElementsByName("giatri")[0].value;
let color1 = "red";
let color2 = "#2bf338";
let scl1 = '#940505';
let scl2 = '#017a09';
drawGraph2D(400,400,150,value,50,color1, color2,nd1, nd2, name, scl1, scl2);

$( "input" ).change(function() {
  cleargraph();
  name = document.getElementsByName("tenbieudo")[0].value;
  nd1 = document.getElementsByName("nd1")[0].value;
  nd2 = document.getElementsByName("nd2")[0].value;
  value = document.getElementsByName("giatri")[0].value;
  drawGraph2D(400,400,150,value,50,color1, color2,nd1, nd2, name, scl1, scl2);
});
$( ".controller__color__nd1 .controller__color__item" ).click(function() {
  color1 = $(this).css( "background-color" );
  scl1 = $(this).css("color");
  cleargraph();
  drawGraph2D(400,400,150,value,50,color1, color2,nd1, nd2, name, scl1, scl2);
});
$( ".controller__color__nd2 .controller__color__item" ).click(function() {
  cleargraph();
  color2 = $( this ).css( "background-color" );
  scl2= $(this).css("color");
  drawGraph2D(400,400,150,value,50,color1, color2,nd1, nd2, name, scl1, scl2);
});