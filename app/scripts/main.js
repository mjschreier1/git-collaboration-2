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

function multiplyTogether(numbers) {
    let sum = 1
    for(let i = 0; i > numbers.length; i++) {
        sum * numbers[i]
    }
    return sum
}

function findSum(numbers) {
    let sum = 0
    for(let i = 0; i >= numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}

findSum()

const moreObjects = [
    {
        name: "Chance",
        age: 30
    },{
        name: "Roberto",
        age: 30
    },{
        name: "Will",
        age: 26
    }
]

const findProduct = numbers => numbers.reduce((acc, num) => acc * num, 1)

findProduct(numbers)

const evenMoreObjects = [
    {
        name: "Milo",
        age: 30
    },{
        name: "Jordan",
        age: 25
    },{
        name: "Owen",
        age: 20
    }
]