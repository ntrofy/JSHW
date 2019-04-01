// Задача 13
// Кодирование ДНК

var s = prompt('Введите строку:', '');

function zipdna(s) {
  var ch = s[0];
  var n = 0;
  var szip = '';
  for (var i = 0; i < s.length+1; i++) {
    if (s[i] == ch) {
		n++;
	} else {
	  szip = szip + ch + n;
	  ch = s[i];
	  n = 1;
	}
  }
  return szip  
}

alert( s + '\n' + zipdna(s) ); 