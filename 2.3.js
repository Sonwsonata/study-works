/*function countBs(strings){
    let count=0;
    for(i=0;i<strings.length;i+=1){
        if (strings[i]=="B")count+=1;
    }
    return count;
}
console.log(countBs("BOB"));*/
function counts(strings,countchar){
    let count=0;
    for(i=0;i<strings.length;i+=1){
        if (strings[i]==countchar)count+=1;
    }
    return count;
}
console.log(counts("akkakak","k"));
