function deleteHtmlElement(htmlElementId) {
  if (htmlElementId != null) {
    let htmlElement = document.getElementById(htmlElementId);
    if(htmlElement != null) {
      htmlElement.remove();
    } 
    else {
      console.log("The element you are trying to delete does not exists");
    }
  }
  else {
    console.log("Something went wrong");
  }  
}


function createAndAppendEmojiElement(numberOfTimes){
  if (numberOfTimes != null && !isNaN(numberOfTimes)){
    const element = document.createElement("p");
    let text = "";
    for (let i = 0; i <numberOfTimes; i++) {
      text += "🐶" ;
    }
    element.innerText = text;
    const numberOutput = document.getElementById("numberOutput");
    numberOutput.appendChild(element);
  }
  else {
    console.log("Something went wrong");
  }
}


function backgroudColourChange(htmlElementId) {
  if (htmlElementId != null) {
    let htmlElement = document.getElementById(htmlElementId);
    if(htmlElement != null) {
      //generate random number
      const min = 100000;
      const max = 999999;
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      const randomColour = "#" + randomNumber.toString();
      console.log(randomColour);
      htmlElement.style.backgroundColor = randomColour;
    } 
    else {
      console.log("The element you are trying to change the background colour of does not exists");
    }
  }
  else {
    console.log("Something went wrong");
  } 
}
