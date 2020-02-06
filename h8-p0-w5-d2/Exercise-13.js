function sorting(arrNumber) {
  // code di sini
  for(i=0; i<arrNumber.length - 1 ; i++) {
    for(j=1; j<arrNumber.length-i; j++) {
      if (arrNumber[j-1] > arrNumber[j]) {
        let temp = arrNumber[j-1];
        arrNumber[j-1] = arrNumber[j];
        arrNumber[j] = temp;
      }
    }
  }
  return arrNumber;
}

function getTotal(arrNumber) {
  console.log(arrNumber);
  let size = arrNumber.length;
  let highest = arrNumber[size - 1];
  let count = 0;
  for((i=arrNumber.length - 1); i>=0; i--){
    if(arrNumber[i] === highest) {
      count++;
    }
    else {
      break;
    }
  }
  return `angka paling besar adalah ${highest} dan jumlah kemunculan sebanyak ${count} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
