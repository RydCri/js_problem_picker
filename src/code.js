function getLowestNumber(num1, num2, num3){
    if (Number(num1, num2, num3))
    // if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
    //     return false;
    // } else if(typeof num1 === 'boolean' || typeof num3 === 'boolean' || typeof num2 === 'boolean'){
    //     return false;
    // } else if(num1 === null || num2 === null || num3 === null ){
    //     return false;
    return Math.min(num1, num2, num3);

}