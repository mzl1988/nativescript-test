"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'Home';
        this.hiddenBack = true;
        this.hiddenMenu = false;
        this.selectTabIndex = 0;
        this.items = new Array({ id: 0, name: "feedback", router: "/feedback" });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
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
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQU9qRTtJQVVJO1FBUkEsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUNmLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixVQUFLLEdBQUcsSUFBSSxLQUFLLENBQ2IsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUNuRCxDQUFDO0lBSUYsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsdUNBQWUsR0FBZjtJQUNBLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sS0FBYTtRQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBdEJRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7O09BQ1csYUFBYSxDQXVCekI7SUFBRCxvQkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gICAgZHJhd2VyQ29tcG9uZW50OiBhbnk7XG4gICAgdGl0bGUgPSAnSG9tZSc7XG4gICAgaGlkZGVuQmFjayA9IHRydWU7XG4gICAgaGlkZGVuTWVudSA9IGZhbHNlO1xuICAgIHNlbGVjdFRhYkluZGV4ID0gMDtcbiAgICBpdGVtcyA9IG5ldyBBcnJheTxhbnk+KFxuICAgICAgICB7IGlkOiAwLCBuYW1lOiBcImZlZWRiYWNrXCIsIHJvdXRlcjogXCIvZmVlZGJhY2tcIiB9XG4gICAgKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB9XG5cbiAgICB0YWJUYXAoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNlbGVjdFRhYkluZGV4ID0gaW5kZXg7XG4gICAgfVxufVxuIl19