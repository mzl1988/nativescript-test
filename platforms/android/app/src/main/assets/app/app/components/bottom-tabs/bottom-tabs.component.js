"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BottomTabsComponent = /** @class */ (function () {
    function BottomTabsComponent() {
        this.selectTabIndex = 0;
    }
    BottomTabsComponent.prototype.ngOnInit = function () {
    };
    BottomTabsComponent.prototype.onTabItemTap = function (index) {
        this.selectTabIndex = index;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BottomTabsComponent.prototype, "selectTabIndex", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXRhYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm90dG9tLXRhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBUXpEO0lBR0k7UUFGUyxtQkFBYyxHQUFHLENBQUMsQ0FBQztJQUd4QixDQUFDO0lBRUwsc0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCwwQ0FBWSxHQUFaLFVBQWEsS0FBYTtRQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBWFE7UUFBUixZQUFLLEVBQUU7OytEQUFvQjtJQURuQixtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzlDLENBQUM7O09BQ1csbUJBQW1CLENBYS9CO0lBQUQsMEJBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJCb3R0b21UYWJzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2JvdHRvbS10YWJzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2JvdHRvbS10YWJzLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHNlbGVjdFRhYkluZGV4ID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgb25UYWJJdGVtVGFwKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RUYWJJbmRleCA9IGluZGV4O1xuICAgIH1cbn1cbiJdfQ==