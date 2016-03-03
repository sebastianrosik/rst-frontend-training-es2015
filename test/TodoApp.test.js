import chai from 'chai';
import TodoApp from '../src/lib/TodoApp.js';

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

      expect(todoApp.getItems()).to.have.length(0);
      
      let i = todoApp.createItem(itemTitle);
      expect(i).to.equal(0);
      expect(todoApp.getItems()).to.have.length(1);
      
      expect(todoApp.getItemByIndex(i).title).to.equal(itemTitle);
   });
   
   it('get item by index', () => {
      var itemTitle = "some title";
      var i = todoApp.createItem(itemTitle);
      expect(todoApp.getItemByIndex(0)).not.to.be.undefined;
   });
   
   it("removes item", () => {
      var itemTitle = "some title";
      
      var i = todoApp.createItem(itemTitle);
      expect(todoApp.getItems()).to.have.length(1);
      todoApp.removeItemByIndex(i);
      expect(todoApp.getItems()).to.have.length(0);
   });
   
   it("returns number of items", () => {
      todoApp.createItem("first item");
      todoApp.createItem("second item");
      
      expect(todoApp.itemsCount()).to.equal(2);
   });
   
   it("filters out done items", () => {
      let firstItemIndex = todoApp.createItem("first item");
      let secondItemIndex = todoApp.createItem("second item");
      
      todoApp.toggleItemStatus(firstItemIndex);
      expect(todoApp.itemsCount()).to.equal(2);
      todoApp.removeDoneItems();
      expect(todoApp.itemsCount()).to.equal(1);
   });
   
   it("returns false on removal of not existing item", function() {
      var result = todoApp.removeItemByIndex(5432543626226);
      
      expect(result).to.equal(false);
   });
});
