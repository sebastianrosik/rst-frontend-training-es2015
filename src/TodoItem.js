import * from './constants.js';

export default class TodoItem {
    constructor(title) {
        this.title = title;
        this.status = NOT_DONE;
    }
    
    isDone() {
        return this.status === DONE;
    }
    
    markAsDone() {
        this.status = DONE;
    }
    
    markAsNotDone() {
        this.status = NOT_DONE;
    }
    
    toggle() {
        this.status = this.isDone() ? NOT_DONE : DONE;
    }
    
    toString() {
        let status = this.isDone() ? 'done' : 'new';
        return `${this.title} [${status}]`;
    }
}