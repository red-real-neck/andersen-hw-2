function makeObjectDeepCopy(obj) {

    if (obj instanceof Object) {
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
            } else if (typeof obj[key] === 'function') {
                result[key] = obj[key];
            } else if (obj[key] instanceof Object) {
                result[key] = makeObjectDeepCopy(obj[key]);
            } else {
                result[key] = obj[key];
            }

        }

        return result;
    } else {
        return obj;
    }


}

const kekObj = {
    'instanceOfFunction': new Function('return "test"'),
    'undefiendCheck': undefined,
    0: null,
    1: 'one',
    2: 'two',
    foo: n =>  {
        return n;
    },
    nestedObjects: {
        nastedArrays: [[0, 1, 2], [3, 4, {objInArray: 12334}], {nike: 'sneakers'}],
        nestedFunction: {
            prostoPrivet: function () {
                return 'test';
            }
        }
    }
}

const newObj = makeObjectDeepCopy(kekObj);
console.log(newObj);