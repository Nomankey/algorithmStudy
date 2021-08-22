const hashStringToInt = (string, tableSize) => {
    let hash = 17;
  
    for (let i = 0; i < string.length; i++) {
      hash = (13 * string.charCodeAt(i)) % tableSize;
    }
  
    return hash;
};

class HashTable {

    table = new Array(3);
    numItems = 0;

    resize = () => {
        const newTable = new Array(this.table.length * 2);
        this.table.forEach(item => {
            item.forEach(([key, value]) => {
                const index = hashStringToInt(key, newTable.length);
                newTable[index]? newTable[index].push([key, value]) : newTable[index] = [[key, value]];
            });   
        });
        this.table = newTable;
    };

    setItem = (key, value) => {
        this.numItems++;
        const loadTracker = this.numItems / this.table.length;
        if (loadTracker > .8) this.resize();
        const index = hashStringToInt(key, this.table.length);
        this.table[index]? this.table[index].push([key, value]) : this.table[index] = [[key, value]];
    };

    getItem = key => {
        const index = hashStringToInt(key, this.table.length);
        return !this.table[index]? null : this.table[index].find(x => x[0] === key)[1];
    }; 
}

const myTable = new HashTable();

myTable.setItem("firstName", "bob");
myTable.setItem("lastName", "park");
myTable.setItem("age", "46");
myTable.setItem("dateOfBirth", "25/AUG/1975");
myTable.setItem("hobby", "read");
myTable.setItem("colorOfEyes", "brown");

myTable.getItem("firstName");
myTable.getItem("lastName");
myTable.getItem("age");
myTable.getItem("dateOfBirth");
myTable.getItem("hobby");
myTable.getItem("colorOfEyes");

console.log(myTable.table.length)
console.log(myTable.table)
console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
console.log(myTable.getItem("age"));
console.log(myTable.getItem("dateOfBirth"));
console.log(myTable.getItem("hobby"));
console.log(myTable.getItem("colorOfEyes"));
