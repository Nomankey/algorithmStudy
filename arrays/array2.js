//https://programmers.co.kr/learn/courses/30/lessons/42746
//0 or a positive integer is given
// make the biggest integer you can by combining numbers in the array
// for example in an array [6, 10, 2] the biggest number is 6102
// another example in an array [3, 30, 34, 5, 9] the biggest number is 9534330
// the answer you return must be a string in case it's too big

const numbers = [3, 30, 34, 5, 9];

function solution(numbers) {
    var answer = numbers.map(number => String(number)).sort((a, b) => b+a - (a+b)).join("");
    return answer[0] === "0"? "0":answer
}

//changed ever numbers in to strings and if the string which is connected is bigger than the string is connected in reverse the order remains

console.log(solution(numbers))
