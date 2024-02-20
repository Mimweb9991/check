var cakeprice = 50;
var packedWell = true;
var icecreamprice = 20;
var Biskitprice = 10;
var myBudget = 11;


if(cakeprice < myBudget){
    if(packedWell == false ){
        console.log('icecream ami khabo na');
    }else{
        console.log("biskit diya cha khabo");
    }
    
}
else if(cakeprice <= myBudget && icecream < myBudget){  
    console.log('biskit, diya cha khabo')
}else if(icecream <myBudget){
    console.log('biskit diya cha khabo')
}
else{
    console.log("biskit diya cha khabo")
}