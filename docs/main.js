(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Elnatan nitzan\Desktop\course\Todo\todo-list\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FlD/":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-item/todo-item.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TodoItemComponent {
    constructor() {
        this.deleteThisItem$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](null);
    }
    deleteItem(itemId) {
        this.deleteThisItem$.emit(itemId);
    }
    toggleDone() {
        this.itemToDisplay.completed = !this.itemToDisplay.completed;
    }
}
TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) { return new (t || TodoItemComponent)(); };
TodoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoItemComponent, selectors: [["app-todo-item"]], inputs: { itemToDisplay: "itemToDisplay" }, outputs: { deleteThisItem$: "deleteThisItem$" }, decls: 6, vars: 6, consts: [[1, "list-item"], [1, "details"], ["type", "checkbox", 3, "id", "checked", "change"], [3, "for"], [3, "click"]], template: function TodoItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TodoItemComponent_Template_input_change_2_listener() { return ctx.toggleDone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_button_click_5_listener() { return ctx.deleteItem(ctx.itemToDisplay.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("completed", ctx.itemToDisplay.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.itemToDisplay.id)("checked", ctx.itemToDisplay.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.itemToDisplay.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.itemToDisplay.title);
    } }, styles: ["@charset \"UTF-8\";\n.list-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n.list-item.completed[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.list-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: relative;\n  left: 40px;\n}\n.list-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before {\n  margin: 0 10px 0 -40px;\n  position: absolute;\n}\n.list-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.list-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]::before {\n  content: \"\uD83D\uDD18\";\n}\n.list-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::before {\n  content: \"\uD83D\uDD35\";\n}\n.list-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: rgba(0, 0, 0, 0);\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.list-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::before {\n  content: \"\u274C\";\n  font-size: 20px;\n}\n.list-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: rotate(20deg) scale(1.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0b2RvLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQUVKO0FBQUk7RUFDSSxpQkFBQTtBQUVSO0FBT0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFMUjtBQU1RO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQUpaO0FBU0k7RUFBeUIsYUFBQTtBQU43QjtBQVFRO0VBQ0ksYUFBQTtBQU5aO0FBVVE7RUFDSSxhQUFBO0FBUlo7QUFZSTtFQU9JLFNBQUE7RUFDQSw0QkFBQTtFQU9BLG9CQUFBO0VBQ0EsZUFBQTtBQXRCUjtBQU9RO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFMWjtBQW1CUTtFQUNJLG1DQUFBO0FBakJaIiwiZmlsZSI6InRvZG8taXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5saXN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubGlzdC1pdGVtLmNvbXBsZXRlZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxpc3QtaXRlbSBsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNDBweDtcbn1cbi5saXN0LWl0ZW0gbGFiZWw6OmJlZm9yZSB7XG4gIG1hcmdpbjogMCAxMHB4IDAgLTQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5saXN0LWl0ZW0gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxpc3QtaXRlbSBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsOjpiZWZvcmUge1xuICBjb250ZW50OiBcIvCflJhcIjtcbn1cbi5saXN0LWl0ZW0gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xuICBjb250ZW50OiBcIvCflLVcIjtcbn1cbi5saXN0LWl0ZW0gYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxpc3QtaXRlbSBidXR0b246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4p2MXCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5saXN0LWl0ZW0gYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpIHNjYWxlKDEuMik7XG59Il19 */"] });


/***/ }),

/***/ "IRHt":
/*!***********************************************************!*\
  !*** ./src/app/components/add-item/add-item.component.ts ***!
  \***********************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class AddItemComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.taskTitle$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](null);
        this.createId$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](null);
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            task: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)]]
        });
    }
    addTask() {
        this.form.valid ? this.taskTitle$.emit(this.form.value.task) : alert('add task first!');
        this.form.reset();
    }
    createId(createIdFrom) {
        this.createId$.emit(createIdFrom);
    }
}
AddItemComponent.ɵfac = function AddItemComponent_Factory(t) { return new (t || AddItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AddItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddItemComponent, selectors: [["add-item"]], inputs: { createIdFrom: "createIdFrom" }, outputs: { taskTitle$: "taskTitle$", createId$: "createId$" }, decls: 4, vars: 1, consts: [[3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "task", "required", "required", "placeholder", "Type new Task..."], ["type", "submit", 3, "click"]], template: function AddItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddItemComponent_Template_form_ngSubmit_0_listener() { return ctx.addTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddItemComponent_Template_button_click_2_listener() { return ctx.createId(ctx.createIdFrom); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["form[_ngcontent-%COMP%] {\n  margin: 40px 0 20px 0;\n  display: flex;\n  justify-content: space-between;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #000000;\n  padding: 7px;\n  border-radius: 10px;\n  border: 1px solid #000000;\n  width: 100%;\n  font-size: 20px;\n}\nform[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%] {\n  border: 2px solid orange;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #2247ac;\n  color: #ffffff;\n  border: none;\n  padding: 10px;\n  border-radius: 7px;\n  margin: 0 0 0 10px;\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 18px;\n  outline: none;\n  white-space: nowrap;\n  box-shadow: 0 9px 8px -3px rgba(0, 0, 0, 0.6);\n  transition: box-shadow 0.2s ease;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: scale(99.9%);\n  box-shadow: 0 9px 8px -5px rgba(0, 0, 0, 0.6);\n  background: #1e3e97;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBQ0o7QUFDSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ1I7QUFDUTtFQUNJLHdCQUFBO0FBQ1o7QUFHSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdDQUFBO0FBRFI7QUFHUTtFQUNJLHVCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtBQURaIiwiZmlsZSI6ImFkZC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBtYXJnaW46IDQwcHggMCAyMHB4IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgXHJcbiAgICAmIGlucHV0IHtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgICAgICAgJi5lcnJvciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjI0N2FjO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDlweCA4cHggLTNweCByZ2JhKDAsIDAsIDAsIC42KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4ycyBlYXNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDk5LjklKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA5cHggOHB4IC01cHggcmdiYSgwLCAwLCAwLCAuNik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigjMjI0N2FjLCA1JSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "RPnm":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo-item/todo-item.component */ "FlD/");




function TodoListComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-todo-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteThisItem$", function TodoListComponent_li_1_Template_app_todo_item_deleteThisItem__1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemToDisplay", item_r1);
} }
class TodoListComponent {
    constructor() {
        this.deleteThisItem$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](null);
    }
    deleteItem(itemId) {
        this.deleteThisItem$.emit(itemId);
    }
}
TodoListComponent.ɵfac = function TodoListComponent_Factory(t) { return new (t || TodoListComponent)(); };
TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoListComponent, selectors: [["app-todo-list"]], inputs: { listToDisplay: "listToDisplay" }, outputs: { deleteThisItem$: "deleteThisItem$" }, decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "itemToDisplay", "deleteThisItem$"]], template: function TodoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoListComponent_li_1_Template, 2, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listToDisplay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_2__["TodoItemComponent"]], styles: ["ul[_ngcontent-%COMP%] {\n  margin: 3rem auto;\n  padding: 0;\n  overflow: hidden;\n  border-radius: 8px;\n  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column-reverse;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.8);\n  list-style: none;\n  margin: 0;\n  font-size: 20px;\n  padding: 10px;\n  transition: all 0.2s ease-in-out;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgba(221, 221, 221, 0.8);\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd):hover {\n  background: #dddddd;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: white;\n  transform: scale(101%);\n  box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUNFO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBQ0o7QUFBSTtFQUNFLG9DQUFBO0FBRU47QUFETTtFQUFVLG1CQUFBO0FBSWhCO0FBREk7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkNBQUE7QUFHTiIsImZpbGUiOiJ0b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgbWFyZ2luOiAzcmVtIGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDIwcHggNDBweCAtMTBweCByZ2JhKDAsMCwwLC41KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICBcclxuICBsaSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlLCAuOCk7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAmOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjEsIDIyMSwgMjIxLCAuOCk7XHJcbiAgICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDIyMSwgMjIxLCAyMjEpOyB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxMDElKTtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDQwcHggLTEwcHggcmdiYSgwLDAsMCwuNyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.service */ "deWt");
/* harmony import */ var _components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-item/add-item.component */ "IRHt");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "RPnm");




class AppComponent {
    constructor(coreService) {
        this.coreService = coreService;
        this.todoList = [];
        this.idNumber = 200;
    }
    ngOnInit() {
        this.subTodos();
    }
    subTodos() {
        this.getTodosFromServer = this.coreService.getTodos().subscribe((data) => {
            this.todoList = localStorage.getItem('items') ? [...JSON.parse(localStorage.getItem('items'))] : [...this.todoList, ...data];
            this.saveToLocaleStorage();
        });
    }
    addNewTask(event) {
        this.todoList.push({
            userId: 1,
            id: this.idNumber++,
            title: event,
            completed: false
        });
        this.saveToLocaleStorage();
    }
    deleteItem($event) {
        this.idNumber = $event;
        this.todoList = this.todoList.filter((item) => item.id !== $event);
        this.saveToLocaleStorage();
    }
    saveToLocaleStorage() {
        localStorage.setItem('items', JSON.stringify(this.todoList));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service__WEBPACK_IMPORTED_MODULE_1__["CoreService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 2, consts: [[3, "createIdFrom", "taskTitle$"], [3, "listToDisplay", "deleteThisItem$"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ToDo's App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ToDo app using Angular EventEmitter, Output & Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "add-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("taskTitle$", function AppComponent_Template_add_item_taskTitle__5_listener($event) { return ctx.addNewTask($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-todo-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteThisItem$", function AppComponent_Template_app_todo_list_deleteThisItem__6_listener($event) { return ctx.deleteItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("createIdFrom", ctx.idNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listToDisplay", ctx.todoList);
    } }, directives: [_components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_2__["AddItemComponent"], _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"]], styles: ["div[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n}\ndiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQUFTLGtCQUFBO0FBRWIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBkaXYge1xyXG4gICAgbWF4LXdpZHRoOiA2NDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgXHJcbiAgICBoMSwgaDMgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuICB9Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-item/add-item.component */ "IRHt");
/* harmony import */ var _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/todo-item/todo-item.component */ "FlD/");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "RPnm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_2__["AddItemComponent"],
        _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_3__["TodoItemComponent"],
        _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();


/***/ }),

/***/ "deWt":
/*!*********************************!*\
  !*** ./src/app/core.service.ts ***!
  \*********************************/
/*! exports provided: CoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CoreService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'https://jsonplaceholder.typicode.com/';
        this.todosList = [];
    }
    getTodos() {
        return this.httpClient.get(`${this.baseUrl}todos`);
    }
    postTodo(item) {
        return this.httpClient.post(`${this.baseUrl}posts`, item);
    }
}
CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map