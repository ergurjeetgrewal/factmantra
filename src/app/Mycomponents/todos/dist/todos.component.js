"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TodosComponent = void 0;
var core_1 = require("@angular/core");
var TodosComponent = /** @class */ (function () {
    function TodosComponent() {
        this.localItem = localStorage.getItem("todos");
        if (this.localItem == null) {
            this.todos = [];
        }
        else {
            this.todos = JSON.parse(this.localItem);
        }
    }
    TodosComponent.prototype.ngOnInit = function () { };
    TodosComponent.prototype.deleteTodo = function (todo) {
        var index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(this.todos));
    };
    TodosComponent.prototype.addTodo = function (todo) {
        console.log('todo add');
        this.todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(this.todos));
    };
    TodosComponent.prototype.toggleTodo = function (todo) {
        console.log('todo toggle');
        var index = this.todos.indexOf(todo);
        this.todos[index].active = !this.todos[index].active;
        localStorage.setItem('todos', JSON.stringify(this.todos));
    };
    TodosComponent = __decorate([
        core_1.Component({
            selector: 'app-todos',
            templateUrl: './todos.component.html',
            styleUrls: ['./todos.component.css']
        })
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
