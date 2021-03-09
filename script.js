const obj = {
    a: 1,
    b: 2,
    c: {
        kek: 'lol',
        chik: 'chirik',
        arr: [1, 2, 3,],
        anotherArr: [{ jepa: 'da' }, { popa: 'net' }]
    }
}

const obj1 = {
    a: {
        b: {
            c: [[{lol: 'kek'}, {kek: 'lol'}], [['lopa']]]
        }
    }
}

function makeObjectDeepCopy(obj) {
    const result = {};

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

const newObj = makeObjectDeepCopy(obj);
console.log(newObj)