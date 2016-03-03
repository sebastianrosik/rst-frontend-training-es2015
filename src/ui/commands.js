import TodoApp from '../lib/TodoApp';
import fs from 'fs';

const defaultFileName = 'todo-db.json';


/**
 * @todo add "--db" support
 */
export default (cmd, args) => {
    
    let itemList;
    let fileName = defaultFileName;
    
    if (fs.existsSync(fileName)) {
        try {
            let content = fs.readFileSync(fileName, 'utf8');
            itemList = JSON.parse(content);
        } catch (err) {
           console.error(err);
        }
    }
    
    const app = new TodoApp(itemList);
    
    const cmds = {
        ls: () => {
            // @TODO: move readuce to TodoApp
            app.getItems()
                .reduce((res, item, index) => {
                    if(!item.isDone()) {
                        res.push({item, index});
                    }
                    return res;
                }, [])
                .forEach(({item, index}) => {
                    console.log('%d: %s', index, item.toString());
                });
        },
        all: () => {
            app.getItems().forEach((item, index) => {
               console.log('%d: %s', index, item.toString());
            });
        },
        add: (title) => {
            if (! title) {
                return;
            }
            app.createItem(title);
        },
        rm: (index) => {
            app.removeItemByIndex(index);
        },
        ok: (index) => {
            let item = app.getItemByIndex(index);
            if (item) {
                item.markAsDone();
            }
        },
        not: (index) => {
            let item = app.getItemByIndex(index);
            if (item) {
                item.markAsNotDone();
            }
        }
    }
    
    cmds[cmd](...args);
    fs.writeFileSync(
        fileName,
        JSON.stringify(app.getItems(), null, ' '),
        'utf8'
    );
}