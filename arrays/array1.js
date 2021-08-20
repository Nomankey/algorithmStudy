//https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
//get the number k when the array is sliced from i to j and sorted.
//for example if the array is [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3
//when the array is sliced from i to k it's [5, 2, 6, 3]
//when it's sorted it's [2, 3, 5, 6]
// number k is 5



const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];



function solution1(array, commands) {
    let answer = [];
    for(let i = 0; i < commands.length; i++) {
        let arr = array.slice(commands[i][0]-1, commands[i][1]);
        arr.sort((a,b) => a-b );
        answer.push(arr[commands[i][2]-1])
    }
    return answer
}

function solution2(array, commands) {
    let answer = [];
    commands.forEach(command => {
        let arr = array.slice(command[0]-1, command[1]);
        arr.sort((a, b) => a-b);
        answer.push(arr[command[2]-1])        
    });
    return answer
}

console.log("solution1: ",solution1(array, commands));
console.log("solution2: ",solution2(array, commands));
