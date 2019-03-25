function changeVocals (str) {
  //code di sini
  var arrStr = str.split('');
  var alfabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var hurufVokal = 'aiueoAIUEO';
  var indeks;
  var hasil = [];
  
  for (let i = 0; i < arrStr.length; i++) {
    for (let j = 0; j < hurufVokal.length; j++) {
      if (arrStr[i] === hurufVokal[j]) {
        indeks = alfabet.indexOf(arrStr[i]) + 1;
        arrStr[i] = alfabet[indeks];
      }
    }
    hasil.push(arrStr[i]);
  }
  
  return hasil;
}

function reverseWord (str) {
  //code di sini
  var balik = [];
  
  for (let i = str.length - 1; i >=0; i--) {
    balik.push(str[i]);
  }
  
  return balik;
}

function setLowerUpperCase (str) {
  //code di sini
  
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
  var lower = 'abcdefghijklmnopqrstuvwxyz ';
  var temp = '';
  
  for (var i=0; i<str.length; i++) {
	  for (var j=0; j<=26; j++) {
	    if (str[i]===upper[j]) {
			   temp+=lower[j];
			}
			else if (str[i]===lower[j]) {
				temp+=upper[j];
			}
		}
	}
	return temp;
}

function removeSpaces (str) {
  //code di sini
  var arrstr = [];
  for (var i=0; i<str.length; i++) {
    if (str[i]!==' ') {
      arrstr.push(str[i]);
    }
  }
  str=arrstr.join('');
  return str;
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  } else {
    var ubahHurufVokal = changeVocals(name);
    var balikKata = reverseWord(ubahHurufVokal);
    var balikLowerUpper = setLowerUpperCase(balikKata);
    var hapusSpasi = removeSpaces(balikLowerUpper);
    return hapusSpasi;
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'