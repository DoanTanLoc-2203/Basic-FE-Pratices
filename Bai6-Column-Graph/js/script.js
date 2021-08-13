function drawText(ctx,centerX, centerY, text, fontsize, center = 0, italic = 0){
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(centerX,centerY);
  ctx.fillStyle = "black";
  if(italic == 1)
    ctx.font = "italic "+ fontsize + "px Arial";
  else
  ctx.font = fontsize + "px Arial";
  if(center == 1)
    ctx.textAlign = "center"; 
  else
    ctx.textAlign = "right"; 
  ctx.fillText(text, centerX, centerY);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}
function drawVerText(ctx,centerX, centerY, text, fontsize){
  ctx.save();
  ctx.font = "italic "+ fontsize + "px Arial";
  ctx.fillStyle = "black";
  ctx.translate(centerX,centerY);
  ctx.rotate(-0.5*Math.PI);
  ctx.fillText(text , 0, 0);
  ctx.restore();
}
function drawLine(ctx, startX, startY, endX, endY){
  ctx.beginPath();
  ctx.moveTo(startX,startY);
  ctx.lineTo(endX,endY);
  ctx.lineWidth = 1;
  ctx.stroke();
}
function drawRect(ctx,startX, startY, endX, endY, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.fillRect(startX, startY, endX, endY);
  ctx.stroke();
}
function drawGraphCol(posx, posy, numy, numx, color, namebd, nameda, namegt, ycont) {
  const colGraph = document.getElementById("col-graph");
  const ctx = colGraph.getContext("2d");
  const xcont = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
  drawText(ctx, posx + numx*100/2, posy - 50, namebd, 20, 1);
  drawVerText(ctx, posx - 50, posy + numy*50/2, namegt, 20);
  drawText(ctx, posx + numx*100/2, posy + numy*50 + 60, nameda, 20, 1,1);
  drawRect(ctx, posx +50 + numx*100, posy, 80, 30, color);
  drawText(ctx, posx +50 + numx*100 + 180, posy + 22, namegt, 20, 1);
  for(let i =  0; i <= numy; i++){/* draw y axis */
    drawText(ctx, posx, posy + i*50, numy - i, 15); 
    drawLine(ctx, posx + 20, posy + i*50, posx + 20 + numx*100, posy + i*50);
  }
  for(let i = 0; i < numx; i++){
    drawText(ctx, posx +50 + i*100, posy + numy*50 + 30, xcont[i],15);
    drawRect(ctx, posx + 20 + i*100, posy + (numy - ycont[i])*50, 50, ycont[i]*50,color);
  }
}
function cleargraph(){
  const colGraph = document.getElementById("col-graph");
  const ctx = colGraph.getContext("2d");
  ctx.clearRect(0, 0, colGraph.width, colGraph.height);
}

export{drawGraphCol, cleargraph}