import chai from 'chai';
import {TodoItem} from '../index';

let expect = chai.expect;

describe('TodoItem', () => {
   var todoItem;
   
   beforeEach(() => {
      todoItem = new TodoItem(`my item ${Math.ceil(Math.random() * 100)}`);
   });
   
   it('creates new instance', () => {
      expect(todoItem).to.be.an.instanceof(TodoItem);
      expect(todoItem).to.be.defined;
   });
   
   it('has specific title', () => {
      let expectedTitle = 'my fancy title';
      todoItem = new TodoItem(expectedTitle);
      
      expect(todoItem.toString()).to.contain(expectedTitle);
      expect(todoItem.toString()).to.contain('[new]');
   });
   
   it('changes status', () => {
      expect(todoItem.isDone()).to.eq(false);
      
      todoItem.markAsDone();
      
      expect(todoItem.isDone()).to.eq(true);
      
      todoItem.markAsNotDone();
      
      expect(todoItem.isDone()).to.eq(false);
   });
   
   it('toogles status', () => {
      expect(todoItem.isDone()).to.eq(false);
      
      todoItem.toggle();
      
      expect(todoItem.isDone()).to.eq(true);
      
      todoItem.toggle();
      
      expect(todoItem.isDone()).to.eq(false);
   });
});