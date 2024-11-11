
function convertDollarToRubl(_rubl,_dollar){
    let result=75*_dollar+_rubl;
    console.log("Result"+" "+"="+" "+result+" "+"rubl");
    
}

let rubl=1200;
let dollar=20;
convertDollarToRubl(rubl,dollar);       //numberToText


function numberToText(num){

    // let numStr = num.toString();

    if (num<1 || num>99) {
        console.log("Enter a number between 1 and 99!");  
    }
    else{
        let decimals=Math.floor(num/10); //or numStr[0]
        let singularities=num%10;   //or numStr[1]

        let decimalWords="";
        if (decimals===1) {
            decimalWords="On";   
        } else if(decimals===2){
            decimalWords="Iyirmi";
        } else if(decimals===3){
            decimalWords="Otuz";
        } else if(decimals===4){
            decimalWords="Qırx";
        } else if(decimals===5){
            decimalWords="Əlli";
        } else if(decimals===6){
            decimalWords="Altmış";
        } else if(decimals===7){
            decimalWords="Yetmis";
        } else if(decimals===8){
            decimalWords="Seksen";
        } else if(decimals===9){
            decimalWords="Doxsan";
        }

        let singularWords="";
        if (singularities===1) {
            singularWords="bir";   
        } else if(singularities===2){
            singularWords="iki";
        } else if(singularities===3){
            singularWords="uc";
        } else if(singularities===4){
            singularWords="dord";
        } else if(singularities===5){
            singularWords="bes";
        } else if(singularities===6){
            singularWords="altı";
        } else if(singularities===7){
            singularWords="yeddi";
        } else if(singularities===8){
            singularWords="sekkiz";
        } else if(singularities===9){
            singularWords="doqquz";
        }

        if (singularities===0) {
            console.log(decimalWords);
            
        } else {
            console.log(decimalWords+" "+singularWords);    
        }
    }
}

let num=+prompt("Please enter a number between 1 and 99");      //Task2
numberToText(num);