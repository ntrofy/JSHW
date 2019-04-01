// Задача 6
// Площадь фигур

var fig = prompt('Фигура?', '');
var sizes = prompt('Размеры?', '');

function calcarea(fig, sizes) {
  var s = 0;
  var arr = sizes.split(', ');
  if ( fig == 'прямоугольник') {
	s = +arr[0]*+arr[1];
  } else if ( fig == 'треугольник') {
	  var p = (+arr[0] + +arr[1] + +arr[2]) / 2;
	  s = Math.sqrt(p * (p - +arr[0]) * (p - +arr[1]) * (p - +arr[2]));	
  } else if ( fig == 'круг') {
	  s = 3.14 * +sizes * +sizes;
  } 
  if ( s == 0) {
	alert ( 'Вы что-то напутали!' );
  } else {
	  alert( s );
  }
}

calcarea(fig, sizes); 