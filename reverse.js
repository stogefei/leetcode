const reverse = function(x) {
    const y = x > 0 ? x : -x; // 1.先判断是否为蒸熟 不是则取反
    const arr = y.toString().split(''); // 2.转换为数组
    let result = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) { // 3.反转数组
        result[i] = arr[len - 1 - i];
    }
    // 4.数组转换为数字
    const res = x > 0 ? parseInt(result.join('')) : -parseInt(result.join(''));
    // 5.判断是否超出范围  幂函数 Math.pow(2, 31) - 1
    return res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31) ? 0 : res;
};

console.log(reverse('123'), '321');
console.log(reverse(-123), '-321');
console.log(reverse('120'), '21');
console.log(reverse(1534236469), '0');
