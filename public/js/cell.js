/*jshint esversion: 6*/

function Cell(width, height, color){
  this.width=width || 100;
  this.height=height || 100;
  this.color=color || 'red'; //default parameters
}

Cell.prototype.toHtml= function(){
  const div = document.createElement('div');
  div.style.height = `${this.height}px`;
  div.style.display = 'inline-block';
  div.style.width = `${this.width}px`;
  div.style.border = '0.25px solid black';
  div.style.backgroundColor = this.color;
  return div;
};
// const Cell = {
//   width: 100,
//   height: 100,
//   color: 'red'
// };
// this is a factory function.
// function createCell(width, height, color){
//   const Cell = {
//     width: width,
//     height: height,
//     color: color,
//   };
//   return Cell;
// }

// Constructor Function
