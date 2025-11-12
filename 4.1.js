function range (start,end,step){
    let a=[];
    if (step==null){
        return 123;
    }
    else {
        for (let i=start;i<=end;i+=step){
            a.push(i);
        }
        return a;
    }
}
console.log(range(1,10,2));
function sum (a){
    let add=0;
    for (let num of a){
        add+=num;
        
    }
    return add;
}
console.log(sum(range(1,10,2)));
