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
    let result = [];

    

    return result;
}