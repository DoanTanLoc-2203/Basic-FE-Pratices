import {drawGraphCol, cleargraph} from "./script.js"
/* Selector and variable */
let color = "green";
let namebd = document.getElementsByName("namebd")[0].value;
let nameda = document.getElementsByName("nameda")[0].value;
let namegt = document.getElementsByName("namegt")[0].value;
let maxy = document.getElementsByName("maxy")[0].value;
let maxx = document.getElementsByName("maxx")[0].value;
let ycont = [5, 6, 1, 2, 4, 7, 3, 9, 2, 0, 0, 0];

/* Initial */
render_value_col();
drawGraphCol(150, 150, maxy, maxx, color, namebd, nameda, namegt, ycont);

/* Render column value */
function render_value_col(){
  let sel = document.getElementsByClassName("controller__input__col")[0];
  let value ="";
  maxx = document.getElementsByName("maxx")[0].value;
  for(let i = 1; i <= 12; i++){
    value+= `<div class="controller__input__col__item">
              <label for="">Cột ${i}:</label>
              <input name="colnum" type="number" min="1" max="12" value="${ycont[i-1]}">
            </div>`;
    sel.innerHTML = value;
  }
}
/* Update data column */
function update_col_value(){
  maxx = document.getElementsByName("maxx")[0].value;
  for(let i = 0; i < 12; i++){
    let va = parseInt(document.getElementsByName("colnum")[i].value);
    if(va > maxy){
      document.getElementsByName("maxy")[0].value = va;
      maxy = va;
      cleargraph();
      drawGraphCol(150, 150, maxy, maxx, color, namebd, nameda, namegt,ycont);
    }
    ycont[i] = parseInt(document.getElementsByName("colnum")[i].value);

  }
  console.log(ycont);
}

/* Jquery*/
$('input[name="colnum"]').change(function () { 
  update_col_value();
  cleargraph();
  drawGraphCol(150, 150, maxy, maxx, color, namebd, nameda, namegt,ycont);
});

$('input[name="namebd"]').change(function () { 
  namebd = document.getElementsByName("namebd")[0].value;
  cleargraph();
  drawGraphCol(150, 150, maxy, maxx, color, namebd, nameda, namegt,ycont);
});

$('input[name="nameda"]').change(function () { 
  nameda = document.getElementsByName("nameda")[0].value;
  cleargraph();
  drawGraphCol(150, 150, maxy, maxx, color, namebd, nameda, namegt,ycont);
});

$('input[name="namegt"]').change(function () { 
  namegt = document.getElementsByName("namegt")[0].value;
  cleargraph();
  drawGraphCol(150, 150, maxy, maxx, color, namebd, nameda, namegt,ycont);
});

$('input[name="maxy"]').change(function () { 
  maxy = document.getElementsByName("maxy")[0].value;
  cleargraph();
  drawGraphCol(150, 150, maxy, maxx, color, namebd, nameda, namegt,ycont);
});

$('input[name="maxx"]').change(function () { 
  maxx = document.getElementsByName("maxx")[0].value;
  cleargraph();
  drawGraphCol(150, 150, maxy, maxx, color, namebd, nameda, namegt,ycont);
});

$(".controller__color__item").click(function () { 
  color = $(this).css( "background-color" );
  cleargraph();
  drawGraphCol(150, 150, maxy, maxx, color, namebd, nameda, namegt,ycont);
});

$("#dropdown").click(function () { 
  let sel = $(".controller__input__col").css("display"); 
  if(sel == "none")
    $(".controller__input__col").css("display", "block");
  else
    $(".controller__input__col").css("display", "none");
});

