function checkAB(num) {
  // you can only write your code here!
  var arr = num.split('');
  var arr2 = [];
  
  for (var i=0; i<num.length; i++) {
    if (arr[i]!==' ') {
      arr2.push(arr[i]);
    }
  }

  for (var j=0; j<num.length; j++) {
    if (arr2[j]==='a') {
      for (var k=j; k<=j+3; k++) {
        if (arr2[k]==='b') {
          return true;
        }
      }
    } 
  }

  return false;

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false