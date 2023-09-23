function createSortedList(){
    const list = {
        items: [],
        size:0,
        add(element){
            this.items.push(element);
            this.items.sort((a,b) => a-b);
            this.size++;

        },
        remove(index){
            if (index < 0 || index >= this.items.length){
                return
            }
            this.items.splice(index,1);
            this.items.sort((a,b) => a-b);
            this.size--;
        },
        get(index){
            if(index < 0 || index > this.items.length){
                return
            }
            return this.items[index];
        },
    }
    return list;

}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
