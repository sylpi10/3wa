function f (x, y = 7, z = 42) {
    return x , y , z;
}
console.log(f(10));
console.log(f(10, 12));
console.log(f(10, 7, 444));
