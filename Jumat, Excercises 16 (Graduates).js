function graduates (students) {
  // Code disini
  var listKelas = [];
  var kelas = [];
  var hasil = {};
  
  if (students.length === 0) {
    console.log('');
    return hasil;
  }

  for (let a = 0; a < students.length; a++) {
    var kelasAwal = students[a].class;
    
    if (listKelas.includes(kelasAwal)) {
      continue;
    } else {
      listKelas.push(kelasAwal);
    }
  }
  
  for (let i = 0; i < listKelas.length; i++) {
    var arrKelas = [];

    for (let j = 0; j < students.length; j++) {
      var objStudent = {};
      if (listKelas[i] === students[j].class && students[j].score > 75) {
        objStudent.name = students[j].name;
        objStudent.score = students[j].score;
        arrKelas.push(objStudent);
      }
    }

    hasil[listKelas[i]] = arrKelas;
  }
  
  console.log('');
  return hasil;

}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }


console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  },
  {
    name: 'Rem',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Rem2',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Rem3',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Rem4',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Rem5',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Rem6',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Rem7',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Rem8',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Rem9',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Rem10',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Rem11',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Los',
    score: 100,
    class: 'wolves'
  },
  {
    name: 'Los2',
    score: 100,
    class: 'wolves'
  },
  {
    name: 'Los3',
    score: 100,
    class: 'wolves'
  },
  {
    name: 'Los4',
    score: 100,
    class: 'wolves'
  },
  {
    name: 'Los5',
    score: 100,
    class: 'wolves'
  },
  {
    name: 'Los6',
    score: 100,
    class: 'wolves'
  },
  {
    name: 'Los7',
    score: 100,
    class: 'wolves'
  },
  {
    name: 'Los8',
    score: 100,
    class: 'wolves'
  },
  {
    name: 'Los9',
    score: 100,
    class: 'wolves'
  },
  {
    name: 'Los10',
    score: 100,
    class: 'wolves'
  },
  {
    name: 'Los11',
    score: 100,
    class: 'wolves'
  },
  {
    name: 'Sin',
    score: 100,
    class: 'tigers'
  },
  {
    name: 'Sin2',
    score: 100,
    class: 'tigers'
  },
  {
    name: 'Sin3',
    score: 100,
    class: 'tigers'
  },
  {
    name: 'Sin4',
    score: 100,
    class: 'tigers'
  },
  {
    name: 'Sin5',
    score: 100,
    class: 'tigers'
  },
  {
    name: 'Sin6',
    score: 100,
    class: 'tigers'
  },
  {
    name: 'Sin7',
    score: 100,
    class: 'tigers'
  },
  {
    name: 'Sin8',
    score: 100,
    class: 'tigers'
  }
]));
console.log(graduates([])); //{}
