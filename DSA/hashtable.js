class HashTable {
    constructor() {
        this.table = new Array(100);
        this.size = 0;
    }

    _hash(key) {
        let hash = 0;
        for(let char of key) {
            hash += char.charCodeAt(0);
        }

        return hash % this.table.length;
    }

    set(key,value) {
        let index = this._hash(key);

        if(this.table[index]) {
            for(let i=0;i<this.table[index].length;i++) {
                if(this.table[index][i][0] == key) {
                    this.table[index][i][1] = value;
                }
            }
            this.table[index].push([key,value]);
        }else{
            this.table[index] = [];
            this.table[index].push([key,value]);
        }
    } 

    get(key) {
        let index = this._hash(key);

        if(this.table[index]) {
            for(let i=0;i<this.table[index].length;i++) {
                if(this.table[index][i][0] == key){
                    return this.table[index][i][1];
                }
            }

            return -1;
        }

        return -1;
    }

    remove(key) {
        let index = this._hash(key);

        if(this.table[index]) {
            for(let i=0;i<this.table[index].length;i++) {
                if(this.table[index][i][0] == key) {
                    this.table[index].splice(i,1);
                    return true;
                }
            }

            return -1;
        }

        return -1;
    }
}


const a = new HashTable();
a.set('name',"salim");
a.set('place',"kochi");
console.log(a.get("place"))
console.log(a)