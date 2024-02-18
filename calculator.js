let outputScreen = document.getElementById("output-screen");

function display(input){
    outputScreen.value += input;
}

function calculateall(){
    try{
        outputScreen.value=eval(outputScreen.value);
    }
    catch(err){
        outputScreen.value ="Error";
    } 
}

function clearall(){
  outputScreen.value = "";
}