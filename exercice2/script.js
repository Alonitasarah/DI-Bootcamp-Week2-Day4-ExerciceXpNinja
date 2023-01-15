const capitalize = (word) => {
    let tabWord = word.split("");
    let tabWordEven = [];
    let tabWordAdd = [];
    for (let i = 0; i < tabWord.length; i++) {
      if (i % 2 == 0 || i == 0) {
        tabWordEven[i] = tabWord[i].toUpperCase();
      } else {
        tabWordEven[i] = tabWord[i].toLowerCase();
      }
      if (i % 2 == 0 || i == 0) {
        tabWordAdd[i] = tabWord[i].toLowerCase();
      } else {
        tabWordAdd[i] = tabWord[i].toUpperCase();
      }
    }
    tabWord = [tabWordAdd.join(""), tabWordEven.join("")];
    return tabWord;
  }
  
  console.log(capitalize("hello"));