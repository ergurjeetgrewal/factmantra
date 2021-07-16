"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddTodoComponent = void 0;
var core_1 = require("@angular/core");
var AddTodoComponent = /** @class */ (function () {
    function AddTodoComponent() {
        this.todoAdd = new core_1.EventEmitter();
    }
    AddTodoComponent.prototype.ngOnInit = function () {
    };
    AddTodoComponent.prototype.onSubmit = function () {
        var todo = {
            sno: 1,
            title: this.title,
            desc: this.desc,
            active: true
        };
        this.todoAdd.emit(todo);
    };
    __decorate([
        core_1.Output()
    ], AddTodoComponent.prototype, "todoAdd");
    AddTodoComponent = __decorate([
        core_1.Component({
            selector: 'app-add-todo',
            templateUrl: './add-todo.component.html',
            styleUrls: ['./add-todo.component.css']
        })
    ], AddTodoComponent);
    return AddTodoComponent;
}());
exports.AddTodoComponent = AddTodoComponent;
