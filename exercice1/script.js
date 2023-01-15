const RandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 100);
    let evenNumber = [];
    let j = 0;
    for (let i = 0; i < randomNumber; i++) {
      if (i % 2 == 0) {
        evenNumber[j] = i;
        j++;
      }
    }
    console.log(evenNumber);
  }
  
  RandomNumber();