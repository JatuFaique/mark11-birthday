var birthday = document.querySelector('#birthday')
var luckyNum = document.querySelector('#lnum')
var submitBtn = document.querySelector('#submit-btn')
var outpurEl = document.querySelector('#output-area')



submitBtn.addEventListener('click', calculateLuck);

function calculateSumofDigit(bdigits){
    let sum=0;
    for(let index=0;index<bdigits.length;index++){
        sum = sum+Number(bdigits.charAt(index));
    }
    console.log(sum)
    return sum;
}


function calculateLuck(){
    
    var bday = birthday.value;
    var lnum = luckyNum.value;
    console.log("Bday",bday)
    if(bday && lnum) {
        console.log(birthday.value)
        for(let digit of birthday.value){
            console.log(digit)
        } 
        
        bdigits = bday.replaceAll('-','')
        console.log(bdigits)

        var sumOfD = calculateSumofDigit(bdigits);

        if(sumOfD%Number(lnum)==0){
            console.log('Yasss')
        }
        else{
            console.log('Nayyy')
        }
    }
    else{
        outpurEl.innerHTML = "Pleas ente valid field"
    }

}