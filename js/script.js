/*global document, window, alert, console, require*/

var question1 = "What is the temperature today?";
var tempFahr = prompt(question1);

var question2 = "Type of event?";
var eventType = prompt(question2);

var tempFahr;
var eventType;
var result = "Since it is " + tempFahr + " degrees and you are going to " + eventType + " event ";

if (tempFahr <= 54 && eventType === "casual") {
  console.log(result + " you should wear a something comfy and a coat.");
} else if (tempFahr >= 54 && tempFahr <= 70  && eventType === "casual") {
  console.log(result + " you should wear something comfy and a jacket.");
} else if (tempFahr >= 70 && eventType === "casual") {
  console.log(result + " you should wear a something comfy and no jacket.");
}

if (tempFahr <= 54 && eventType === "semi-formal") {
  console.log(result + " you should wear a polo and a coat.");
}else if (tempFahr >= 54 && tempFahr <= 70  && eventType === "semi-formal") {
  console.log(result + " you should wear a polo and a jacket.");
}else if (tempFahr >= 70 && eventType === "semi-formal") {
  console.log(result + " you should wear a polo and no jacket.");
}
if (tempFahr <= 54 && eventType === "formal") {
  console.log(result + " you should wear a suit and a coat.");
}else if (tempFahr >= 54 && tempFahr <= 70  && eventType === "formal") {
  console.log(result + " you should wear a suit and a jacket.");
}else if (tempFahr >= 70 && eventType === "formal") {
  console.log(result + " you should wear a suit and no jacket.");
}
