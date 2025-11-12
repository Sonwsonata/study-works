function reserveArray(a){
    let b=new Array();
    for (let entry of a){
        b.unshift(entry);
    }
    return b;
}
let myArray = ["A","B","C"];
console.log(reserveArray(myArray));
let hisArray=[1,2,3,4,5];
console.log(reserveArray(hisArray));
