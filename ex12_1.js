// Задача 12 вариант 1

var rect = {
	a: 5,
	b: 6
};
var k = prompt('Введите коэффициент пропорциональности:', 0);

function findprop(rect) {
  rect.a = rect.a * k;
  rect.b = rect.b * k;
}

if (k >= 0) {
  findprop( rect );
  alert( 'a: ' + rect.a + '\n' + 'b: ' + rect.b ); 
} else {
	alert( 'Нужно ввести неотрицательное число!');
} 
