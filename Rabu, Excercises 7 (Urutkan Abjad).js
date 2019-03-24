function urutkanAbjad(str) {
  // you can only write your code here!
  var temp = [];
  var temporary = 0;
  var temphuruf = '';
  var huruf = 'abcdefghijklmnopqrstuvwxyz';

  // membuat array yang berisikan urutan index dari setiap abjad
  for (var i=0; i<str.length; i++) {
    for (var j=0; j<=25; j++) {
      if (str[i]===huruf[j]) {
        temp.push(j);
      }
    }
  }

  // melakukan sorting untuk mengurutkan urutan index dari kecil ke besar
  for (var k=0; k<temp.length; k++) {
    for (var l=0; l<temp.length-k; l++) {
      if (temp[k]>temp[k+l]) {
        temporary = temp[k];
        temp[k] = temp[k+l];
        temp[k+l] = temporary;
      }
    }
  }

  // mengembalikan index yang sudah disorting menjadi huruf ke sebuah variabel baru (temphuruf)
  for (var m=0; m<temp.length; m++) {
    for (var n=0; n<huruf.length; n++) {
      if (temp[m]==n) {
        temphuruf+=huruf[n];
      }
    }
  }
  return temphuruf;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'