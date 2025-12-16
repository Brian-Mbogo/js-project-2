// 8. Factorial
function factorial(n) {
    if(n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// 9. Prime Number Check
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// 10. Fibonacci Sequence (up to n terms)
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n); // in case n is 1
}
// 11. GCD (Greatest Common Divisor)
function gcd(a, b) {
    while (b) { 
        [a, b] = [b, a % b];
    }
    return a;
}
// 12. LCM (Least Common Multiple)
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}           