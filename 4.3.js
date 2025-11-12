function arrayToList(array){
    let List={
        value:array[array.length-1],
        rest: null
    };
    for (let i=array.length-2;i>=0;i--){
        List={
            value:array[i],
            rest:List
        }
    };
    return List
}
console.log(arrayToList([1,2,3]));

function ListToarray(list){
    let array=[];
    while(list){
        array.push(list.value);
        list=list.rest;
    }
    return array;
}
console.log(ListToarray(arrayToList([1,2,3])));

function prepend(v,list){
    list={
        value:v,
        rest:list
    };
    return list;
}

console.log(prepend(1,arrayToList([2,3,4])));

function nth (list,num){
    for(let i=0;i<num;i++){
        list=list.rest;
    }
    return list.value;
}
console.log(nth(arrayToList([0,1,2,3,4,5]),2));
