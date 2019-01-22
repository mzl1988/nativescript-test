"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'Home';
        this.hiddenBack = true;
        this.selectTabIndex = 1;
        this.items = new Array({ id: 0, name: "feedback", router: "/feedback" });
    }
    HomeComponent.prototype.ngOnInit = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQVFsRDtJQVFJO1FBUEEsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUNmLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsVUFBSyxHQUFHLElBQUksS0FBSyxDQUNiLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUMsQ0FDbEQsQ0FBQztJQUlGLENBQUM7SUFFRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxLQUFhO1FBQ2hCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFqQlEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzs7T0FDVyxhQUFhLENBa0J6QjtJQUFELG9CQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHRpdGxlID0gJ0hvbWUnO1xuICAgIGhpZGRlbkJhY2sgPSB0cnVlO1xuICAgIHNlbGVjdFRhYkluZGV4ID0gMTtcbiAgICBpdGVtcyA9IG5ldyBBcnJheTxhbnk+KFxuICAgICAgICB7IGlkOiAwLCBuYW1lOiBcImZlZWRiYWNrXCIsIHJvdXRlcjogXCIvZmVlZGJhY2tcIn1cbiAgICApO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgdGFiVGFwKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RUYWJJbmRleCA9IGluZGV4O1xuICAgIH1cbn1cbiJdfQ==