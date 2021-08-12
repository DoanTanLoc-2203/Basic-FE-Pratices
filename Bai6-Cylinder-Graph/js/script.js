function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color, color_stk){
  ctx.fillStyle = color;
  ctx.strokeStyle = color_stk;
  ctx.beginPath();
  ctx.moveTo(centerX,centerY);
  ctx.ellipse(centerX, centerY, radius , radius/3, 0, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}
function drawLine(ctx, startX, startY, endX, endY, color){
  ctx.beginPath();
  ctx.moveTo(startX,startY);
  ctx.lineTo(endX,endY);
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.stroke();
}
function drawGraph2D(x, y, radius , complete, weight, color1, color2, nd1, nd2, ten, scl1, scl2){/* complete <= 100 */
  const cylinderGraph = document.getElementById("cylinder-graph");
  const ctx = cylinderGraph.getContext("2d");
  let subx = 0;
  let suby = 0;
  for(let i = 1; i <= weight; i += 0.1){
    if(complete >= 0 && complete < 25){
      subx = 10;
      suby = 0;
    }
    else if(complete >= 25 && complete < 50){
      subx = 5;
      suby = 5;
    }
    else if(complete == 50){
      subx = 0;
      suby = 5;
    }
    else if(complete > 50 && complete < 75){
      subx = -5;
      suby = 5;
    }
    else if(complete == 75){
      subx = 0;
      suby = 0;
    }
    else{
      subx = -5;
      suby = 0;
    }
    if(complete > 0)
      drawPieSlice(ctx, x + subx,y - i + suby,radius, 0, (2*(complete/100)*Math.PI), color1, scl1);/* #456AA4 */
    if(complete == 0)
      drawPieSlice(ctx, x,y - i,radius,0, 2*Math.PI, color2, scl2);
    if(complete < 100)
      drawPieSlice(ctx, x,y - i,radius, (2*(complete/100)*Math.PI), 0, color2, scl2);
  }
  /* Draw complete label */
  let lastX_complete = x  + (radius/2)*Math.cos(1.5*(complete/100)*Math.PI);
  let lastY_complete = y - weight + (radius/6)*Math.sin(1.5*(complete/100)*Math.PI);
  drawLine(ctx, lastX_complete, lastY_complete , lastX_complete - 100, lastY_complete - 100,  scl1);
  drawLine(ctx, lastX_complete - 100, lastY_complete - 100, lastX_complete - 250, lastY_complete - 100, scl1);
  ctx.font = "20px Arial";
  ctx.fillStyle = "black"
  ctx.fillText(complete + "% " + nd1,  lastX_complete - 250, lastY_complete - 110); 
  /* Draw in-complete label */
  lastX_complete = x + radius/2;
  lastY_complete = y - weight - (100 - complete)*0.3;
  drawLine(ctx, lastX_complete, lastY_complete , lastX_complete + 100, lastY_complete - 100,  scl2);
  drawLine(ctx, lastX_complete + 100, lastY_complete - 100, lastX_complete + 250, lastY_complete - 100,  scl2);
  ctx.fillText(100 -complete + "% " + nd2,  lastX_complete + 100, lastY_complete - 110); 
  /* Draw name of graph */
  ctx.fillStyle = "black";
  ctx.textAlign = "center"; 
  ctx.fillText(ten, x , y + 150); 
}

function cleargraph(){
  const cylinderGraph = document.getElementById("cylinder-graph");
  const ctx = cylinderGraph.getContext("2d");
  ctx.clearRect(0, 0, cylinderGraph.width, cylinderGraph.height);
}
export{drawGraph2D,drawLine,drawPieSlice,cleargraph};
// drawGraph2D(400,400,150,30,50,"#0490d6", "#00cb33","Đã đạt", "Chưa đạt", "Biểu đồ thể hiện năng lực");