// Задача 4
// Напишите функцию, принимающую на вход целое число, которая выводитTrue​, 
// если переданное значение попадает в интервал(−15,12]∪(14,17)∪[19,+∞)​ 
// и ​False​ в противном случае

var n = prompt('Введите число:', 0);

function checkinclusion(n) {
  if ((n > -15 && n <= 12) || (n > 14 && n <17) || (n >=19)) {
    alert( 'True' );
  } else {
	alert( 'False');
  } 
}

checkinclusion(n); 