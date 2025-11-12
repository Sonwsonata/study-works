//深度比较
function deepEqual(a,b){
    // if(Object.keys(a)!==Object.keys(b)){
    //     return false;
    // }
    if(a===b){
        return true;
    }
    else if(typeof(a)!==typeof(b)){
        return false;
    }
    else if(a===null  &&   b!==null){
        return false;
    }
    else if(a!==null  &&   b===null){
        return false;
    }
    for (let i of Object.keys(a) ){
        if( !Object.keys(b).includes(i) || !deepEqual(a[i],b[i])){
            return false;
        }

    }
    return true;

}
let list1={
    value:1,
    rest:{
        value:2,
        rest:null
    }
};
let list2={
    data:1,
    rest:{
        data:2,
        rest:null
    }
};

// let obj = {here: {is: "an"}, object: 2};
// console.log(Object.keys(list1));
// console.log(Object.keys(list2));
// console.log(list2);
// console.log(list2.rest);
// console.log(list2.data);
// console.log(list2["rest"]);
console.log(deepEqual(list1,list2));
console.log(deepEqual(list1,list1));

// console.log(Object.keys(obj));