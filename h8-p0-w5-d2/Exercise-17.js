function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var stringNum = angka.toString();
  let multi = 1;
  for(i=0; i<stringNum.length; i++) {
    multi *= parseInt(stringNum[i]);
  }
  return multi.toString().length === 1 ? multi : kaliTerusRekursif(multi);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
