let num=1;
for(let i=1;i<=100;i+=1)
{
    if(num%3==0)console.log("Fizz");
    else if (num%5==0)console.log("Buzz");
    else console.log(num);
    num+=1;
}