import CONSTANTS from './constants.js';

/**
 * TodoItem class.
 */
export default class TodoItem {
    
    /**
     * @param {String} title
     */
    constructor(title) {
        /** @type {string} */
        this.title = title;
        
        /** @type {boolean} */
        this.status = CONSTANTS.NOT_DONE;
    }

    /**
     * @return {Boolean}
     */
    isDone() {
        return this.status === CONSTANTS.DONE;
    }
    
    /**
     * Changes this object status to DONE.
     */
    markAsDone() {
        this.status = CONSTANTS.DONE;
    }
    
    /**
     * Changes this object status to NOT_DONE.
     */
    markAsNotDone() {
        this.status = CONSTANTS.NOT_DONE;
    }
    
    /**
     * Changes this object status depend on current one.
     */
    toggleStatus() {
        if (! this.isDone()) {
            this.markAsDone();
        } else {
            this.markAsNotDone();
        }
    }
    
    /**
     * @example: my item title [done]
     * @example: another item [new]
     * 
     * @return {String}
     */
    toString() {
        let status = this.isDone() ? 'done' : 'new';
        return `${this.title} [${status}]`;
    }
}