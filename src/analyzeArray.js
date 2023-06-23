function analyzeArray(array) {
    console.log(this);

    return {
        avg: array.reduce((acc, val) => acc + val, 0)/array.length,
        min: array.reduce((val1, val2) => val1 > val2 ? val2 : val1, 999999),
        max: array.reduce((val1, val2) => val1 < val2 ? val2 : val1, -999999),
        length: array.length,
    }
}

export default analyzeArray;