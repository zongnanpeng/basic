export function sayHi() {
    let animail = arguments[0];
    if (typeof animail === 'undefined') {
        console.log('请输出动物名称!');
        return false;
    }

    switch (animail) {
        case 'dog':
            console.log('wang wang');
            break;
        case 'cat':
            console.log('miao miao');
            break;
        default:
            console.log('there is not the animail you want');
            break;
    }
}

export function sum() {
    let sum = 0;
    [...arguments].forEach(element => {
        sum += Number(element);
    });

    return sum;
}


export function toTraditional() {
    let nums = arguments[0].toString();
    let temp = [];
    for (let i = 0; i < nums.length; i++) {
        const element = Number(nums[i]);
        switch (element) {
            case 0:
                temp.unshift('零');
                break;
            case 1:
                temp.unshift('一');
                break;
            case 2:
                temp.unshift('二');
                break;
            case 3:
                temp.unshift('三');
                break;
            case 4:
                temp.unshift('四');
                break;
            case 5:
                temp.unshift('五');
                break;
            case 6:
                temp.unshift('六');
                break;
            case 7:
                temp.unshift('七');
                break;
            case 8:
                temp.unshift('八');
                break;
            case 9:
                temp.unshift('九');
                break;
            default:
                console.log('error');
                break;
        }

    }
    temp = temp.join(',').replace(/\,/g, '');
    return temp;
}

/**
 * 
 * @param {递归} n 
 */

//  阶乘
export function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}


// 递归 斐波那契数列  
 
export function F(n) {

    // 出口 
    if (n === 1 || n === 2) {
        return 1;
    }

    // 规律
    return F(n - 1) + F(n - 2);
}

