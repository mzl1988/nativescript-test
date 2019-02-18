"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../../services");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(globalService) {
        this.globalService = globalService;
        this.title = 'Home';
        this.hiddenBack = true;
        this.selectTabIndex = 0;
        this.items = new Array({ id: 0, name: "feedback", router: "/feedback" });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent.prototype.openDrawer = function () {
        this.globalService.rootSideDrawerEvent.emit("openDrawer");
    };
    HomeComponent.prototype.tabTap = function (index) {
        this.selectTabIndex = index;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.scss"]
        }),
        __metadata("design:paramtypes", [services_1.GlobalService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQUNqRSwyQ0FBK0M7QUFPL0M7SUFTSSx1QkFDWSxhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVJ4QyxVQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ2YsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixVQUFLLEdBQUcsSUFBSSxLQUFLLENBQ2IsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUNuRCxDQUFDO0lBS0YsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsdUNBQWUsR0FBZjtJQUNBLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxLQUFhO1FBQ2hCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUExQlEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0FXNkIsd0JBQWE7T0FWL0IsYUFBYSxDQTJCekI7SUFBRCxvQkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR2xvYmFsU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlc1wiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gICAgZHJhd2VyQ29tcG9uZW50OiBhbnk7XG4gICAgdGl0bGUgPSAnSG9tZSc7XG4gICAgaGlkZGVuQmFjayA9IHRydWU7XG4gICAgc2VsZWN0VGFiSW5kZXggPSAwO1xuICAgIGl0ZW1zID0gbmV3IEFycmF5PGFueT4oXG4gICAgICAgIHsgaWQ6IDAsIG5hbWU6IFwiZmVlZGJhY2tcIiwgcm91dGVyOiBcIi9mZWVkYmFja1wiIH1cbiAgICApO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB9XG5cbiAgICBvcGVuRHJhd2VyKCkge1xuICAgICAgICB0aGlzLmdsb2JhbFNlcnZpY2Uucm9vdFNpZGVEcmF3ZXJFdmVudC5lbWl0KFwib3BlbkRyYXdlclwiKTtcbiAgICB9XG5cbiAgICB0YWJUYXAoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNlbGVjdFRhYkluZGV4ID0gaW5kZXg7XG4gICAgfVxufVxuIl19