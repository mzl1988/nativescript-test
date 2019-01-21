"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var app = require("application");
var platform_1 = require("tns-core-modules/platform");
var HeaderBarComponent = /** @class */ (function () {
    function HeaderBarComponent(routerExtensions, page) {
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.hiddenBack = false;
        this.title = 'Title';
        this.statusHeight = 0;
    }
    HeaderBarComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.screenWidth = platform_1.screen.mainScreen.widthDIPs;
        if (app.android && platform_1.device.sdkVersion >= '21') {
            var window_1 = app.android.startActivity.getWindow();
            // set the status bar to Color.Transparent
            window_1.setStatusBarColor(0x000000);
            this.statusHeight = 26;
        }
    };
    HeaderBarComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HeaderBarComponent.prototype, "hiddenBack", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HeaderBarComponent.prototype, "title", void 0);
    HeaderBarComponent = __decorate([
        core_1.Component({
            selector: "HeaderBar",
            moduleId: module.id,
            templateUrl: "./header-bar.component.html",
            styleUrls: ["./header-bar.component.scss"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            page_1.Page])
    ], HeaderBarComponent);
    return HeaderBarComponent;
}());
exports.HeaderBarComponent = HeaderBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZWFkZXItYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsZ0NBQStCO0FBQy9CLGlDQUFtQztBQUNuQyxzREFBMkQ7QUFPM0Q7SUFNSSw0QkFDWSxnQkFBa0MsRUFDbEMsSUFBVTtRQURWLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVBiLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUV6QixpQkFBWSxHQUFHLENBQUMsQ0FBQztJQUtiLENBQUM7SUFFTCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQy9DLElBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxpQkFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDMUMsSUFBSSxRQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkQsMENBQTBDO1lBQzFDLFFBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQXZCUTtRQUFSLFlBQUssRUFBRTs7MERBQW9CO0lBQ25CO1FBQVIsWUFBSyxFQUFFOztxREFBaUI7SUFGaEIsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUM3QyxDQUFDO3lDQVFnQyx5QkFBZ0I7WUFDNUIsV0FBSTtPQVJiLGtCQUFrQixDQXlCOUI7SUFBRCx5QkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBzY3JlZW4sIGRldmljZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIZWFkZXJCYXJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaGVhZGVyLWJhci5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9oZWFkZXItYmFyLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgaGlkZGVuQmFjayA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHRpdGxlID0gJ1RpdGxlJztcbiAgICBzY3JlZW5XaWR0aDogbnVtYmVyO1xuICAgIHN0YXR1c0hlaWdodCA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xuICAgICAgICBpZiAoYXBwLmFuZHJvaWQgJiYgZGV2aWNlLnNka1ZlcnNpb24gPj0gJzIxJykge1xuICAgICAgICAgICAgbGV0IHdpbmRvdyA9IGFwcC5hbmRyb2lkLnN0YXJ0QWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgICAgICAgICAvLyBzZXQgdGhlIHN0YXR1cyBiYXIgdG8gQ29sb3IuVHJhbnNwYXJlbnRcbiAgICAgICAgICAgIHdpbmRvdy5zZXRTdGF0dXNCYXJDb2xvcigweDAwMDAwMCk7XG4gICAgICAgICAgICB0aGlzLnN0YXR1c0hlaWdodCA9IDI2O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxufVxuIl19