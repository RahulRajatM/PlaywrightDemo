/*
function primeNumber(num: number) {

    if (num <= 1) {
        console.log(`${num} is not prime`)
    }
    let isPrime: boolean = true;
    for (let i = 2; i <= num / 2; i++) {

        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${num}  is a prime`);
    } else {
        console.log(`${num}  is not a prime`);
    }
} */

    function primeNumber(num: number) {

    if (num <= 1) {
        console.log(`${num} is not prime`);
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(`${num} is not prime`);
            return;
        }
    }

    console.log(`${num} is prime`);
}

primeNumber(11);

primeNumber(9);