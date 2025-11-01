function isEven (num){
    function minus (num){
        if (num>0)return minus(num-2);
        if (num<0)return false;
        if (num==0)return true;

    }
    return minus (num);
}
let num=Number(prompt("输入一个数字，判断是不是偶数"));
console.log(isEven(num));