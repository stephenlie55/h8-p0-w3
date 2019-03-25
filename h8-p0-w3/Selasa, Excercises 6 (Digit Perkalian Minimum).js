function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var terkecil = Number.MAX_SAFE_INTEGER;
  panjangfaktor = '';
  for (var i=1; i<=Math.round(Math.sqrt(angka)); i++) {
    if (angka%i==0) {
      var faktor1 = String(i);
      var faktor2 = String(angka/i);
      var panjangfaktor = (faktor1+faktor2).length;
      if (terkecil > panjangfaktor) {
        terkecil = panjangfaktor;
      }
    }
  }
  return terkecil;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2