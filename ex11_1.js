// Задача 11 вариант 1

var rect = {
	a: 5,
	b: 6
};
var s = prompt('Введите площадь:', 0);

function finda(rect) {
  rect.a = s / rect.b;
}

if (s >= 0) {
  finda( rect );
  alert( 'a: ' + rect.a + '\n' + 'b: ' + rect.b ); 
} else {
	alert( 'Нужно ввести неотрицательное число!');
}
