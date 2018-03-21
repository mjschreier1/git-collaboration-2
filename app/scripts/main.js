const objects = [
    {
        name: "Michael",
        age: 26
    },{
        name: "Seth",
        age: NaN
    },{
        name: "Old Greg",
        age: 89
    }
]

const numbers = [1, 3, 5, 65, 78]

function findSum(numbers) {
    let sum = 0
    for(let i = 0; i >= numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}

findSum()
