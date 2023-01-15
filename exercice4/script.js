const biggestNumberInArray = (arrayNumber) => {
    let biggestNumber = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
      if (isNaN(arrayNumber[i])) {
        continue;
      }
      if (arrayNumber[i] > biggestNumber) {
        biggestNumber = arrayNumber[i];
      }
    }
    return biggestNumber;
  }
  
  console.log(biggestNumberInArray(["a", 3, "n", 4, 2, "c", 10]));
  