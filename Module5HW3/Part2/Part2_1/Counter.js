function counter(n) {
    let value = 0;

    return function(n) {
        value += n;
        console.log(value);
    }
}

let func = counter();

for(let i = 0; i < 5; i++) {
    func(3);
    func(-1);
}