/**
 * Created by Jaime on 10/05/2017.
 */
// Define a Todo Model
let count=0;
console.log("hello world");
var Todo = Backbone.Model.extend({
    initialize: function(){
        count++;
        console.log('This model has been initialized. '+count);

    },
    defaults:{
        title:'',
        completed:false
    }
});

// We can then create our own concrete instance of a (Todo) model
// with no values at all:
var todo1 = new Todo();
// Following logs: {}
console.log(JSON.stringify(todo1));
console.log(todo1.get('title')); // empty string
console.log(todo1.get('completed')); // false
// or with some arbitrary data:
var todo2 = new Todo({
    title: 'Check the attributes of both model instances in the console.',
    completed: true
});

// Following logs: {"title":"Check the attributes of both model instances in the console.","completed":true}
console.log(JSON.stringify(todo2));
// logs: {"title":"Try these examples and check results in console.","completed":true}
console.log(todo2.toJSON());
// Setting the value of attributes via instantiation
var myTodo = new Todo({
    title: "Set through instantiation."
});
console.log('Todo title: ' + myTodo.get('title')); // Todo title: Set through instantiation.
console.log('Completed: ' + myTodo.get('completed')); // Completed: false

// Set single attribute value at a time through Model.set():
myTodo.set("title", "Title attribute set through Model.set().");
console.log('Todo title: ' + myTodo.get('title')); // Todo title: Title attribute set through Model.set().
console.log('Completed: ' + myTodo.get('completed')); // Completed: false

// Set map of attributes through Model.set():
myTodo.set({
    title: "Both attributes set through Model.set().",
    completed: true
});
console.log('Todo title: ' + myTodo.get('title')); // Todo title: Both attributes set through Model.set().
console.log('Completed: ' + myTodo.get('completed')); // Completed: true