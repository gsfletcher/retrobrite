/*jshint esversion: 6*/

function Cell(width, height, color){
  this.width=width || 100;
  this.height=height || 100;
  this.color=color || 'red'; //default parameters
}
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
