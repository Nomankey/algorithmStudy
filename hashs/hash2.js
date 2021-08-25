//https://programmers.co.kr/learn/courses/30/lessons/42578?language=javascript
//Spies camouflage themselves by wearing different combinations of clothes every day. 
//For example, if the spy has the clothes below, and the spy wears round glasses, a long coat, and a blue T-shirt today, 
//the next day he has to wear extra jeans or black sunglasses instead of round glasses.
//Write a solution function to return the number of different combinations of clothes given a 2D array of clothes that the spy has.

const clothes = [
    ["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]
];

function solution(clothes) {
    let answer = 1;
    let closet = {}            
    clothes.forEach((style) => {
        closet[style[1]] >= 1? closet[style[1]] +=1 : closet[style[1]] = 1
    })
    for(let style in closet)
        answer *= (closet[style]+1)
    return answer-1;
}


console.log(solution(clothes))