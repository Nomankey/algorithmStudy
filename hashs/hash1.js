const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = 	["stanko", "ana", "mislav"];

participant.sort();
completion.sort();

for(let i = 0; i < participant.length; i++) {
    if(participant[i] !== completion[i]) {
        return participant[i]
    }
}