// Задача 11
// Напишите функцию, которая на вход будет принимать массив чисел 
// и изменять его так, чтобы каждое число в этом массиве было увеличено на единицу

var arr = [1,2,3,4,5];

function incarr(arr) {
  for (var i = 0; i < arr.length; i++) {
  arr[i]++;
  }
}

incarr(arr); 
alert(arr);