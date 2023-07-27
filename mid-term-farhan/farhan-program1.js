/*Write a function in J.S that will display all the numbers that are completely divisible by 5
between 0 &amp; 100.*/

var N = 100;
       function result(N)
{
    for (let num = 0; num < 100; num++)
    {
        if (num % 5 == 0 ){
            console.log( num+ " ");}
    }
}


result(N);


 

