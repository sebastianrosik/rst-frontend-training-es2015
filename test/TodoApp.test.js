import chai from 'chai';
import TodoApp from '../src/TodoApp.js';

let expect = chai.expect;


describe('TodoApp', () => {
   var todoApp;
   
   beforeEach(() => {
      todoApp = new TodoApp();
   });
   
   it('creates new instance', () => {
      expect(todoApp).to.be.an.instanceof(TodoApp);
   });
   
   it('adds item', () => {
      var itemTitle = "some title";

      expect(todoApp.list()).to.have.length(0);
      let id = todoApp.add(itemTitle);
      expect(id).to.equal(0);
      expect(todoApp.list()).to.have.length(1);
      expect(todoApp.list()[0].title).to.equal(itemTitle);
   });
   
   it("removes item", () => {
      var itemTitle = "some title";
      
      var id = todoApp.add(itemTitle);
      expect(todoApp.list()).to.have.length(1);
      todoApp.remove(id);
      expect(todoApp.list()).to.have.length(0);
   });
   
   it("returns number of items", () => {
      todoApp.add("first item");
      todoApp.add("second item");
      expect(todoApp.itemsLength()).to.equal(2);
   });
   
   it("filter out done items", () => {
      let firstItem = todoApp.add("first item");
      let secondItem = todoApp.add("second item");
      
      todoApp.toggle(firstItem);
      expect(todoApp.itemsLength()).to.equal(2);
      todoApp.clearDoneItems();
      expect(todoApp.itemsLength()).to.equal(1);
   });
});
