function makanTerusRekursif(waktu) {
    var count = 0;
    
    if (waktu === 0) {
        return count;
    } else if (waktu > 0 && waktu <= 15) {
        return 1;
    } else {
        count += 1;
        return count + makanTerusRekursif(waktu-15);
    }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0