"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BottomTabsComponent = /** @class */ (function () {
    function BottomTabsComponent() {
        this.selectTabIndex = 0;
        this.selectTabEvent = new core_1.EventEmitter();
    }
    BottomTabsComponent.prototype.ngOnInit = function () {
    };
    BottomTabsComponent.prototype.onTabItemTap = function (index) {
        this.selectTabIndex = index;
        this.selectTabEvent.emit(index);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BottomTabsComponent.prototype, "selectTabIndex", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], BottomTabsComponent.prototype, "selectTabEvent", void 0);
    BottomTabsComponent = __decorate([
        core_1.Component({
            selector: "BottomTabs",
            moduleId: module.id,
            templateUrl: "./bottom-tabs.component.html",
            styleUrls: ["./bottom-tabs.component.scss"]
        }),
        __metadata("design:paramtypes", [])
    ], BottomTabsComponent);
    return BottomTabsComponent;
}());
exports.BottomTabsComponent = BottomTabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXRhYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm90dG9tLXRhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBUS9FO0lBSUk7UUFIUyxtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNsQixtQkFBYyxHQUF5QixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUdoRSxDQUFDO0lBRUwsc0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCwwQ0FBWSxHQUFaLFVBQWEsS0FBYTtRQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBYlE7UUFBUixZQUFLLEVBQUU7OytEQUFvQjtJQUNsQjtRQUFULGFBQU0sRUFBRTtrQ0FBaUIsbUJBQVk7K0RBQThCO0lBRjNELG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDOUMsQ0FBQzs7T0FDVyxtQkFBbUIsQ0FlL0I7SUFBRCwwQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJCb3R0b21UYWJzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2JvdHRvbS10YWJzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2JvdHRvbS10YWJzLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHNlbGVjdFRhYkluZGV4ID0gMDtcbiAgICBAT3V0cHV0KCkgc2VsZWN0VGFiRXZlbnQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBvblRhYkl0ZW1UYXAoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNlbGVjdFRhYkluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuc2VsZWN0VGFiRXZlbnQuZW1pdChpbmRleCk7XG4gICAgfVxufVxuIl19