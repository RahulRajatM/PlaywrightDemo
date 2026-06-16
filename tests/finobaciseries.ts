
function fibonacciSeries(num1: number, num2: number, limit:number) {
    // console.log(num1);
    // console.log(num2);
    process.stdout.write(num1+" ");
    process.stdout.write(num2+" ");
    let sum:number= num1+num2;
    while (sum < limit) {
     //   console.log(sum);
     process.stdout.write(sum+" "+ '');
        num1 = num2;
        num2 = sum;
        sum= num1+num2;
    }
}
fibonacciSeries(1,2,1000);