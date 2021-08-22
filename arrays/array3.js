//https://programmers.co.kr/learn/courses/30/lessons/42747?language=javascript
//h-index refers the productivity and influence of a scientist
//The h-index is calculated by counting the number of publications for which an author has been cited by other authors at least that same number of times.

const citations = [3, 0, 6, 1, 5];

function solution(citations) {
    citations.sort((a, b) => b - a);
    
    for(let hIndex = 0; hIndex < citations.length; hIndex++) {
       if(hIndex >= citations[hIndex]) return hIndex 
    }
}

console.log(solution([47, 42, 32, 28, 24, 22, 17, 15, 10, 10, 8]));//output: 10
console.log(solution([3, 0, 6, 1, 5]));//output:3

