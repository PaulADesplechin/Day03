let temp = 0;
function getAngryDog(numberOfWoofs) {
    let str = "";
    temp = 0;  
    while (temp < numberOfWoofs) {
        temp += 1;
        str = str + "woof ";
    }
    return str.trim(); 
}

var result = getAngryDog(3);
displayResult(result); 