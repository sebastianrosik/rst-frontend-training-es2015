import CONSTANTS from './constants.js';

export default class TodoItem {
    constructor(title) {
        this.title = title;
        this.status = CONSTANTS.NOT_DONE;
    }
    
    isDone() {
        return this.status === CONSTANTS.DONE;
    }
    
    markAsDone() {
        this.status = CONSTANTS.DONE;
    }
    
    markAsNotDone() {
        this.status = CONSTANTS.NOT_DONE;
    }
    
    toggle() {
        this.status = this.isDone() ? CONSTANTS.NOT_DONE : CONSTANTS.DONE;
    }
    
    toString() {
        let status = this.isDone() ? 'done' : 'new';
        return `${this.title} [${status}]`;
    }
}