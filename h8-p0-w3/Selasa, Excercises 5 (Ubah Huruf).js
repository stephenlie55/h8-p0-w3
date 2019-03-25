function ubahHuruf(kata) {
  // you can only write your code here!
  var huruf = 'abcdefghijklmnopqrstuvwxyz';
  var temp = '';
  for (i=0; i<kata.length; i++) {
    for (j=0; j<=25; j++) {
      if ((kata[i]===huruf[j])&&(j!==25)) {
        temp+=huruf[j+1];
      } else if (kata[i]===huruf[25]) {
        temp+=huruf[0];
      }
    }
  }
  return temp;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu