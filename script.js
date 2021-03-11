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
    if (!(arr instanceof Array) || arr.some(item => !(typeof item === 'number')) || typeof firstValueOfInterval !== 'number' || typeof secondValueOfInterval !== 'number') {
        throw new Error('error message');
    }

    let result = [];
    const startOfInterval = (firstValueOfInterval < secondValueOfInterval) ? firstValueOfInterval : secondValueOfInterval;
    const endOfInterval = (firstValueOfInterval < secondValueOfInterval) ? secondValueOfInterval : firstValueOfInterval;

    result = arr.filter(item => item > startOfInterval && item <= endOfInterval);

    return result;
}

const myIterable = {
    from: 5,
    to: 10,
    [Symbol.iterator]: function () {
        if (myIterable.from > myIterable.to || (typeof myIterable.from !== 'number') || (typeof myIterable.to !== 'number')) {
            throw new Error('Ошибка!');
        }
        let i = myIterable.from;
        return {
            next: function () {
                if (i <= myIterable.to) {
                    return { value: i++, done: false };
                } else {
                    return { done: true };
                }
            }
        }
    }
}