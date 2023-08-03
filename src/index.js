module.exports = function reverse (n) {
    let str = '';
    n = String(n);
    if (n[0] === '-') {
        n = n.slice(1);
    }
    for (let i = 0; i < n.length; i++) {
      str = n[i] + str;
    }
    let i = 0;
    while (str[i] === 0) {
        str = str.slice(1);
        i += 1;
    }
    return Number(str);
}
