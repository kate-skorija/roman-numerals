//$(document).ready(function() {
//  //Business Logic
//
//  let output
//
//  function translator(string) {
//    if (string === "1"){
//      return output = "I";
//    };
//  };
//
//  console.log(translator("1"))
//
//  //User Interface
//
//
//});













//(777) array.length 1 + (2) [5, 1, 1] [V, I, I]
//forloop --- (i=numbnerString.length - 1, i >= 0, i--){
//  positionCounter=0
//
//  
//  if (posCounter = 3){
//    +000
//  } else if posCounter = 2{
//    +00
//  } else if posCounter = 1{
//    +0
//  }
//
//
//  first loop --> 3 --> III
//  positionCoutner += 1 [1]
//  second loop --> 2 --> 20 --> XX
//  positionCoutner += 1 [2]
//  third loop --> 5 --> 500 --> D
//}


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

function test(int) {
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
      tensArray = arrayBuilder(int[i]);
    } else if (posCount === 2) {
      //hundreds
      hundredsArray = arrayBuilder(int[i]);
    } else if (posCount === 3) {
      //thousands
      thousandsArray = arrayBuilder(int[i]);
    };
    posCount += 1
  }; 

return onesArray
};

console.log(test("3774"))

