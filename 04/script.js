
const arr = createArr(10, 200)
const largest = getLargest(arr)
const average = getAvg(largest)

console.log(arr, largest, average)


function createArr(min, max) {
    const arr = []
    for(let i=0; i<20; i++) {
        const num = Math.round((Math.random() * (max - min)) + min)

        arr.push(num)
    }

    return arr;

}
//console.log(createArr(1, 20))

function getLargest(arr) {
    arr.sort(function (a, b) {
    return b - a
});

    //console.log(arr)
     return arr.slice(0, 10)
}

//console.log(getLargest(createArr(1, 20)))


function getAvg(arr) {
    if(arr.length === 0){
        return 0
    };

    const sum = arr.reduce(function(acc, curr) {
        return acc + curr
    }, 0);

    return sum / arr.length

}

