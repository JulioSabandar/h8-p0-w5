function changeVocals (str) {
  //code di sini
  let alpha = 'aeiouAEIOUbfjpvBFJPV';
  let string = '';
  for(i=0; i<str.length; i++) {
    for(j=0; j < alpha.length/2; j++) {
      if (str[i] === alpha[j]) {
        string += alpha[j+10];
        break;
      }
      if (j === alpha.length/2 -1 ) {
        string += str[i];
      }
    }
  }
  return string;
}

function reverseWord (str) {
  //code di sini
  let string = '';
  for(i=str.length-1; i>=0; i--) {
    string += str[i];
  }
  return string;
}

function setLowerUpperCase (str) {
  //code di sini
  var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let string = '';
  for(i=0; i<str.length; i++) {
    for(j=0; j<alpha.length; j++) {
      if (str[i] === alpha[j]) {
        j<25? string += alpha[j+26] : string += alpha[j-26]
      }
    }
  }
  return string;
}

function removeSpaces (str) {
  //code di sini
  let string = '';
  for (i=0; i<str.length; i++) {
    if (str[i] !== ' '){
      string += str[i];
    }
  }
  return string;
}

function passwordGenerator (name) {
  //code di sini
  return name.length >= 5? removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name)))) : 'Minimal karakter yang diinputkan adalah 5 karakter';
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
