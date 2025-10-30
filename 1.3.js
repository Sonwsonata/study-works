let height=Number(prompt("height"));
let width=Number(prompt("width"));
let row="";
let s=1;
if (width%2==1)
{
    for (let i=1;i<=height*width+height;i+=1)
    {   
        if (i%width==0)
        {
            row=row+"\n"
        }
        else if (i%2==0)row=row+" ";
        else if (i%2==1)row=row+"#";
        
    }
}
else 
{
     for (let i=1;i<=height*width+height;i+=1)
    {   if(s%2==1)
        {

            if (i%width==0)
            {
                row=row+"\n";
                s+=1
            }
            else if (i%2==0)row=row+" ";
            else if (i%2==1)row=row+"#";
        }
        else 
        {
            if (i%width==0)
            {
                row=row+"\n";
                s+=1;
            }
            else if (i%2==0)row=row+"#";
            else if (i%2==1)row=row+" ";
        }
    }
}
console.log(row);
