const participants = ["mislav", "stanko", "mislav", "ana"];
const completions = 	["stanko", "ana", "mislav"];

participant.sort();
completion.sort();

function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let i = 0; i < participant.length; i++){
        if(participant[i] !== completion[i]) return participant[i];
    }
}