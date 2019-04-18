/* 
    Create a function to transform arabic numbers to roman numbers. 	
*/


module.exports = function (number){

    // solution 01
    // var romanNum = '';
    // switch (number) {
    //     case 1:
    //         romanNum = "I";
    //         break;
    //     case 5:
    //         romanNum = "V";
    //         break;
    //     case 20:
    //         romanNum = "XX";
    //         break;
        
    //     case 2017:
    //         romanNum = "MMXVII";
    //         break;
    //     default:
    //     // code block
    // } 
    // return romanNum;

    //solution 2
    let listObject = {
        "0":"",
        "1": "I",
        "2": "II" ,
        "3": "III" ,
        "4": "IV",
        "5": "V" ,
        "6": "VI" ,
        "7": "VII" ,
        "8": "VIII" ,
        "9": "IX" ,
        "10": "X" ,
        "50": "L" ,
        "100": "C" ,
        "500": "D" ,
        "1000": "M"
    }

    let resultRoman = '';
    let restNumber = number;

    if(number / 1000 > 1 ) {
        resultRoman += "M".repeat(Math.floor(number / 1000));
    
        restNumber = number - (Math.floor(number / 1000) * 1000);
    }

    if (restNumber / 500 > 1) {
        resultRoman += "D";
        restNumber = restNumber - 500;
    }

    if (restNumber / 100 > 1) {
        resultRoman += "C".repeat(Math.floor(restNumber / 100));

        restNumber = restNumber - (Math.floor(restNumber / 100) * 100);
    }

    if (restNumber / 50 > 1) {
        resultRoman += "L";
        restNumber = restNumber - 50;
    }

    if (restNumber / 10 > 1) {
        resultRoman += "X".repeat(Math.floor(restNumber / 10));

        restNumber = restNumber - (Math.floor(restNumber / 10) * 10);
    }

    resultRoman += listObject[restNumber];
    console.log("restNumber", restNumber);
    console.log("resultRoman", resultRoman);
    console.log("value of object", listObject[restNumber]);

    return resultRoman;

}


