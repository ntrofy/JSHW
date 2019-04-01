// Задача 2
// Високосный год

var n = prompt('Введите год?', 0);

function checkleap(year) {
  if (year >= 1900 && year <= 3000) {
    if (year % 4 == 0 && year % 100 != 0) {
      alert( 'Високосный' );
	} else if (year % 400 == 0) {
		alert( 'Високосный');
	} else {
		alert( 'Обычный' );
    }		
  
  } else {
	  alert( 'Я проверяю года с 1900 до 3000' );
  }
}

checkleap(n); 