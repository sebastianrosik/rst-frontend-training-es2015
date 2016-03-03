import chai from 'chai';
import TodoItem from '../src/lib/TodoItem.js';

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
   
   it('has rendered title', () => {
      let expectedTitle = 'my fancy title';
      todoItem = new TodoItem(expectedTitle);
      
      const txt = todoItem.toString();
      expect(txt).to.contain(expectedTitle);
      expect(txt).to.contain(']');
      expect(txt).to.contain('[');
   });
   
   describe('has rendered the right status', () => {
      beforeEach(() => {
         let expectedTitle = 'my fancy title';
         todoItem = new TodoItem(expectedTitle);
      });
      it('when it is done', () => {
         todoItem.markAsDone();
         expect(todoItem.toString()).to.contain('[✔]');
      });
      it('when it is not done', () => {
         todoItem.markAsNotDone();
         expect(todoItem.toString()).to.contain('[ ]');
      });
   });
   
   it('changes status', () => {
      expect(todoItem.isDone()).to.eq(false);
      
      todoItem.markAsDone();
      
      expect(todoItem.isDone()).to.eq(true);
      
      todoItem.markAsNotDone();
      
      expect(todoItem.isDone()).to.eq(false);
   });
   
   it('toggles status', () => {
      expect(todoItem.isDone()).to.eq(false);
      
      todoItem.toggleStatus();
      
      expect(todoItem.isDone()).to.eq(true);
      
      todoItem.toggleStatus();
      
      expect(todoItem.isDone()).to.eq(false);
   });
});