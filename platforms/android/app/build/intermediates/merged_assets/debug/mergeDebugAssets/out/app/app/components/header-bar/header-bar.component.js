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
    }
    HeaderBarComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.screenWidth = platform_1.screen.mainScreen.widthDIPs;
        if (app.android && platform_1.device.sdkVersion >= '21') {
            var window = app.android.startActivity.getWindow();
            // set the status bar to Color.Transparent
            window.setStatusBarColor(0x000000);
            // var decorView = window.getDecorView();
            // decorView.setSystemUiVisibility(
            //     View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            //     | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
            //     | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            //     // | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION // hide nav bar
            //     // | View.SYSTEM_UI_FLAG_FULLSCREEN // hide status bar
            //     | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZWFkZXItYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsZ0NBQStCO0FBQy9CLGlDQUFtQztBQUNuQyxzREFBMkQ7QUFRM0Q7SUFLSSw0QkFDWSxnQkFBa0MsRUFDbEMsSUFBVTtRQURWLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQU5iLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsVUFBSyxHQUFHLE9BQU8sQ0FBQztJQU1yQixDQUFDO0lBRUwscUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUMvQyxJQUFJLEdBQUcsQ0FBQyxPQUFPLElBQUksaUJBQU0sQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO1lBQzFDLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25ELDBDQUEwQztZQUMxQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFbkMseUNBQXlDO1lBQ3pDLG1DQUFtQztZQUNuQyx3Q0FBd0M7WUFDeEMsbURBQW1EO1lBQ25ELDhDQUE4QztZQUM5QywrREFBK0Q7WUFDL0QsNkRBQTZEO1lBQzdELCtDQUErQztTQUNsRDtJQUVMLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQS9CUTtRQUFSLFlBQUssRUFBRTs7MERBQW9CO0lBQ25CO1FBQVIsWUFBSyxFQUFFOztxREFBaUI7SUFGaEIsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUM3QyxDQUFDO3lDQU9nQyx5QkFBZ0I7WUFDNUIsV0FBSTtPQVBiLGtCQUFrQixDQWlDOUI7SUFBRCx5QkFBQztDQUFBLEFBakNELElBaUNDO0FBakNZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBzY3JlZW4sIGRldmljZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhlYWRlckJhclwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9oZWFkZXItYmFyLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hlYWRlci1iYXIuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBoaWRkZW5CYWNrID0gZmFsc2U7XG4gICAgQElucHV0KCkgdGl0bGUgPSAnVGl0bGUnO1xuICAgIHNjcmVlbldpZHRoOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xuICAgICAgICBpZiAoYXBwLmFuZHJvaWQgJiYgZGV2aWNlLnNka1ZlcnNpb24gPj0gJzIxJykge1xuICAgICAgICAgICAgdmFyIHdpbmRvdyA9IGFwcC5hbmRyb2lkLnN0YXJ0QWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgICAgICAgICAvLyBzZXQgdGhlIHN0YXR1cyBiYXIgdG8gQ29sb3IuVHJhbnNwYXJlbnRcbiAgICAgICAgICAgIHdpbmRvdy5zZXRTdGF0dXNCYXJDb2xvcigweDAwMDAwMCk7XG4gICAgIFxuICAgICAgICAgICAgLy8gdmFyIGRlY29yVmlldyA9IHdpbmRvdy5nZXREZWNvclZpZXcoKTtcbiAgICAgICAgICAgIC8vIGRlY29yVmlldy5zZXRTeXN0ZW1VaVZpc2liaWxpdHkoXG4gICAgICAgICAgICAvLyAgICAgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfU1RBQkxFXG4gICAgICAgICAgICAvLyAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9ISURFX05BVklHQVRJT05cbiAgICAgICAgICAgIC8vICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0ZVTExTQ1JFRU5cbiAgICAgICAgICAgIC8vICAgICAvLyB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfSElERV9OQVZJR0FUSU9OIC8vIGhpZGUgbmF2IGJhclxuICAgICAgICAgICAgLy8gICAgIC8vIHwgVmlldy5TWVNURU1fVUlfRkxBR19GVUxMU0NSRUVOIC8vIGhpZGUgc3RhdHVzIGJhclxuICAgICAgICAgICAgLy8gICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZKTtcbiAgICAgICAgfVxuICAgICBcbiAgICB9XG5cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG59XG4iXX0=