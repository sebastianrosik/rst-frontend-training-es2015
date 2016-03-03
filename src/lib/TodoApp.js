import TodoItem from './TodoItem.js';

/**
 * Some description.
 * 
 * @type {WeakMap}
 */
let db = new WeakMap();

/**
 * TodoApp Class
 */
export default class TodoApp {

    /**
     * @param {Array} [itemList]
     */    
    constructor(itemList = []) {
        db.set(this, itemList);
    }
    
    /**
     * Return array of items
     * @return {Array} List of ToDo items
     */
    getItems() {
        return [...db.get(this)];
    }

    /**
     * Creates item with given title.
     * 
     * @param {String} itemTitle
     * @return index
     */
    createItem(itemTitle) {
        let itemList = db.get(this);
        let item = new TodoItem(itemTitle);
        itemList.push(item);
        return itemList.length - 1;
    }
    
    /**
     * Removed item by its index.
     * 
     * @param {Number} index - Index of the item in list 
     */
    removeItemByIndex(index) {
        let itemList = db.get(this);
        if (!itemList[index]) {
            return false;
        }
        itemList.splice(index, 1);
        return true;
    }
    
    /**
     * Removes items that have DONE status.
     */
    removeDoneItems() {
        let itemList = db.get(this);
        itemList = itemList.filter(
            item => item.isDone()
        );
        db.set(this, itemList);
    }
    
    /**
     * Toggles status of the item from DONE to NOT_DONE and vice-versa. 
     * 
     * @param {Number} index - Index of the item in list 
     */
    toggleItemStatus(index) {
        let itemList = db.get(this);
        itemList[index].toggleStatus();
    }
    
    /**
     * Returns items count
     * @return {Number}
     */
    itemsCount() {
        let itemList = db.get(this);
        return itemList.length;
    }
}