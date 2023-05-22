let markEL = document.getElementById("mark")
let displayEL = document.getElementById("display")

function list() {
    console.log(markEL.value)
    
    if( markEL.value >=91 && markEL.value <= 100)
    {
        displayEL.textContent = "A+";
    }
    else if(markEL.value > 80 && markEL.value <= 90){
        displayEL.textContent = "A";
    }
    else if(markEL.value > 70 && markEL.value <= 80){
        displayEL.textContent = "B+";
    }
    else if(markEL.value > 60 && markEL.value <= 70){
        displayEL.textContent = "B";
    }
    else if(markEL.value > 50 && markEL.value <= 60){
        displayEL.textContent = "C+";
    }
    else if(markEL.value > 40 && markEL.value <= 50){
        displayEL.textContent = "C";
    }
    else if( markEL.value <= 40) {
        displayEL.textContent = "fail";
        
    }
    else{
        displayEL.textContent = "invalid ";
    }
 
}




