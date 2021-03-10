function makeObjectDeepCopy(obj) {

    if (!(obj instanceof Object)) {
        return obj;
    }

    let result;
    obj instanceof Array ? result = [] : result = {};

    for (key in obj) {
        if (obj[key] instanceof Array) {
            result[key] = obj[key].map((item, index, arr) => {
                if (!(arr[index] instanceof Array) && !(arr[index] instanceof Object)) {
                    return item;
                } else {
                    return makeObjectDeepCopy(item);
                }
            });
        } else if (obj[key] instanceof Object) {
            result[key] = makeObjectDeepCopy(obj[key]);
        } else {
            result[key] = obj[key];
        }

    }

    return result;

}

function selectFromInterval(arr, firstValueOfInterval, secondValueOfInterval) {
    if ( !(arr instanceof Array) || arr.includes(/\D+/) || typeof firstValueOfInterval !== 'number' || typeof secondValueOfInterval !== 'number') {
        throw new Error('error message');
    }

    let result;
    const startOfInterval = (firstValueOfInterval < secondValueOfInterval) ? firstValueOfInterval : secondValueOfInterval;
    const endOfInterval = (firstValueOfInterval < secondValueOfInterval) ? secondValueOfInterval : firstValueOfInterval;

    result = arr.filter(item => item > startOfInterval && item <= endOfInterval);

    return result;
}

const test = selectFromInterval([1, 2, 3, 4, 5, 6, 7], 1, 4);
const test2 = selectFromInterval([1,3,5], 5, 2);
const test3 = selectFromInterval([-2, -15, 0, 4], -13, -5);
const test4 = selectFromInterval(['aaa'], 2, 3);


console.log(test);
console.log(test2);
console.log(test3);
console.log(test4);