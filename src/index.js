module.exports = function reverse(n) {
    if (n < 0) {
        n = n * -1;
        return +n.toString().split("").reverse().join("");
    } else {
        return +n.toString().split("").reverse().join("");
    }
};
