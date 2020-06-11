$(document).ready(function() {
  //Business Logic

  function arrayBuilder(int) {
    let array = []
    if (int >= 5){
      array.push("5")
      if (int - 5 === 4){
        array.push("1", "1", "1", "1")
      } else if (int - 5 === 3){
        array.push("1", "1", "1")
      } else if (int - 5 === 2){
        array.push("1", "1")
      } else if (int - 5 === 1) {
        array.push("1")
      };
    } else if (int < 5) {
      if (int === "4"){
        array.push("1", "1", "1", "1")
      } else if (int === "3"){
        array.push("1", "1", "1")
      } else if (int === "2"){
        array.push("1", "1")
      } else if (int === "1") {
        array.push("1")
      };
    };
    return array
  };

  function translator(int) {
    let onesArray = []
    let tensArray = []
    let hundredsArray = []
    let thousandsArray = []

    posCount = 0
    for (i=int.length - 1; i >= 0; i--){
      if (posCount === 0) {
        //ones
        onesArray = arrayBuilder(int[i]);
      } else if (posCount === 1) {
        //tens
        for (const element of arrayBuilder(int[i])){
          tensArray.push(element + "0")
        };
      } else if (posCount === 2) {
        //hundreds
        for (const element of arrayBuilder(int[i])){
          hundredsArray.push(element + "00")
        };
      } else if (posCount === 3) {
        //thousands
        for (const element of arrayBuilder(int[i])){
          thousandsArray.push(element + "000")
        };
      };
      posCount += 1
    }; 

    output = thousandsArray + hundredsArray + tensArray + onesArray

    return converter(output)
  };

  function converter(array){
    newArray =[]
    for (const element of array){
      if (element === "1000"){
        newArray.push("M")
      }
    }
    return newArray
  }

  console.log(translator("3774"))

  //User Interface


});