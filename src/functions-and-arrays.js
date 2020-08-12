// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1,num2){
  return Math.max(num1,num2);
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(names){
  if (names.length == 0) return null;
  else if (names.length == 1) {
    return names[0];
  } else { }
  n = names.length;
  for (i = 0; i < n - 1; i++) {
    for (j = i + 1; j < n; j++) {
      if (names[i].length < names[j].length) {
        var temp = names[i];
        names[i] = names[j];
        names[j] = temp;
      }
    }
  }
if (names[0].length > names[1].length) return names[0];
  else return names[0];
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
  sum = 0;
  if (numbers.length == 0) return 0;
  else{
    for(i=0; i< numbers.length;i++)sum +=numbers[i];
    return sum;
  }
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg){
  sum = 0;
  if (numbersAvg.length == 0) return null;
  else {
    for (i = 0; i < numbersAvg.length; i++) sum += numbersAvg[i];
    return sum / numbersAvg.length;
  }
}


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  sum = 0;
  if (wordsArr.length == 0) return null;
  else {
    for (i = 0; i < wordsArr.length; i++) {
      sum += wordsArr[i].length;
    }
    return sum / wordsArr.length;
  }
}
function add(mixedArr) {
  sum = 0;
  let flag = 0;
  for (i = 0; i < mixedArr.length; i++) {
    flag = 0;
    if (typeof mixedArr[i] === "object") {
      flag = 1;
      break;
    }
  }
  if (mixedArr.length == 0) return 0;
  else if (flag == 1) {
    throw new Error("Unsupported data type sir or ma'am");
  } else {
    for (i = 0; i < mixedArr.length; i++) {
      if (typeof mixedArr[i] === "number") sum += mixedArr[i];
      else if (typeof mixedArr[i] === "string") sum += mixedArr[i].length;
      else if (typeof mixedArr[i] === "boolean") {
        if (mixedArr[i] == true) sum += 1;
        else sum += 0;
      } else continue;
    }
    return sum;
  }
}
function avg(mixedArr) {
  sum = 0;
  let avgs = 0;
  let flag = 0;
  for (i = 0; i < mixedArr.length; i++) {
    flag = 0;
    if (typeof mixedArr[i] === "object") {
      flag = 1;
      break;
    }
  }
  if (mixedArr.length == 0) return null;
  else if (flag == 1) {
    throw new Error("Unsupported data type sir or ma'am");
  } else {
    for (i = 0; i < mixedArr.length; i++) {
      if (typeof mixedArr[i] === "number") sum += mixedArr[i];
      else if (typeof mixedArr[i] === "string") sum += mixedArr[i].length;
      else if (typeof mixedArr[i] === "boolean") {
        if (mixedArr[i] == true) sum += 1;
        else sum += 0;
      } else continue;
    }
    avgs = sum / mixedArr.length;
    avgs = avgs.toFixed(2);
    avgs = parseFloat(avgs);
    return avgs;
  }
}

  

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordsUnique) {
  var uniq = [];
  k = 0;
  var flag = 0;
  if (wordsUnique.length == 0) return null;
  else {
    for (i = 0; i < wordsUnique.length; i++) {
      for (j = i + 1; j < wordsUnique.length; j++) {
        if (wordsUnique[i] == wordsUnique[j]) {
          wordsUnique[j] = "null";
        }
      }
    }
    for (i = 0; i < wordsUnique.length; i++) {
      if (wordsUnique[i] == "null") continue;
      else {
        uniq[k++] = wordsUnique[i];
      }
    }
    return uniq;
  }
  }
  // Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind,findWord){
  let flag = 0;
  if (wordsFind.length == 0) return null;
  else {
    for (i = 0; i < wordsFind.length; i++) {
      flag = 0;
      if (wordsFind[i] == findWord) {
        flag = 1;
        break;
      }
    }
    if (flag == 1) return true;
    else return false;
  }
}


// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(words,search){
    var c = 0;
      for(var i=0;i<words.length;i++)
      {if(words[i]==search)
      {c+=1
      }
      }
    return c;
    }
  

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix) {
      return 1;
    }
