import * from './constants.js';

export default class TodoApp {
    constructor(itemList = []) {
        this._itemList = itemList;
    }
    
    list() {
        return [].concat(this._itemList);
    }
    
    add(itemTitle) {
        let item = new TodoItem(itemTitle);
        this._itemList.push(item);
        return this._itemList.length - 1;
    }
    
    remove(index) {
        this._itemList.splice(index, 1);
    }
    
    clearDoneItems() {
        this._itemList = this._itemList.filter(item => item.status === NOT_DONE);
    }
    
    toggle(index) {
        this._itemList[index].toggle();
    }
    
    itemsLength() {
        return this._itemList.length;
    }
}