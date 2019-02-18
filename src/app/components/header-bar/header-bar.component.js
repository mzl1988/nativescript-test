"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var app = require("tns-core-modules/application");
var platform_1 = require("tns-core-modules/platform");
var services_1 = require("../../services");
var HeaderBarComponent = /** @class */ (function () {
    function HeaderBarComponent(routerExtensions, page, globalService) {
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.globalService = globalService;
        this.hiddenBack = false;
        this.hiddenMenu = true;
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
    HeaderBarComponent.prototype.openMenu = function () {
        this.globalService.rootSideDrawerEvent.emit("openDrawer");
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HeaderBarComponent.prototype, "hiddenBack", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HeaderBarComponent.prototype, "hiddenMenu", void 0);
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
            page_1.Page,
            services_1.GlobalService])
    ], HeaderBarComponent);
    return HeaderBarComponent;
}());
exports.HeaderBarComponent = HeaderBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZWFkZXItYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsaURBQWdEO0FBQ2hELGtEQUFvRDtBQUNwRCxzREFBMkQ7QUFDM0QsMkNBQStDO0FBTy9DO0lBT0ksNEJBQ1ksZ0JBQWtDLEVBQ2xDLElBQVUsRUFDVixhQUE0QjtRQUY1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVQvQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUV6QixpQkFBWSxHQUFHLENBQUMsQ0FBQztJQU1iLENBQUM7SUFFTCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQy9DLElBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxpQkFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDMUMsSUFBSSxRQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkQsMENBQTBDO1lBQzFDLFFBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBN0JRO1FBQVIsWUFBSyxFQUFFOzswREFBb0I7SUFDbkI7UUFBUixZQUFLLEVBQUU7OzBEQUFtQjtJQUNsQjtRQUFSLFlBQUssRUFBRTs7cURBQWlCO0lBSGhCLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDN0MsQ0FBQzt5Q0FTZ0MseUJBQWdCO1lBQzVCLFdBQUk7WUFDSyx3QkFBYTtPQVYvQixrQkFBa0IsQ0ErQjlCO0lBQUQseUJBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IHNjcmVlbiwgZGV2aWNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IEdsb2JhbFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXNcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhlYWRlckJhclwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9oZWFkZXItYmFyLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hlYWRlci1iYXIuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBoaWRkZW5CYWNrID0gZmFsc2U7XG4gICAgQElucHV0KCkgaGlkZGVuTWVudSA9IHRydWU7XG4gICAgQElucHV0KCkgdGl0bGUgPSAnVGl0bGUnO1xuICAgIHNjcmVlbldpZHRoOiBudW1iZXI7XG4gICAgc3RhdHVzSGVpZ2h0ID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcbiAgICAgICAgaWYgKGFwcC5hbmRyb2lkICYmIGRldmljZS5zZGtWZXJzaW9uID49ICcyMScpIHtcbiAgICAgICAgICAgIGxldCB3aW5kb3cgPSBhcHAuYW5kcm9pZC5zdGFydEFjdGl2aXR5LmdldFdpbmRvdygpO1xuICAgICAgICAgICAgLy8gc2V0IHRoZSBzdGF0dXMgYmFyIHRvIENvbG9yLlRyYW5zcGFyZW50XG4gICAgICAgICAgICB3aW5kb3cuc2V0U3RhdHVzQmFyQ29sb3IoMHgwMDAwMDApO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXNIZWlnaHQgPSAyNjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cblxuICAgIG9wZW5NZW51KCkge1xuICAgICAgICB0aGlzLmdsb2JhbFNlcnZpY2Uucm9vdFNpZGVEcmF3ZXJFdmVudC5lbWl0KFwib3BlbkRyYXdlclwiKTtcbiAgICB9XG59XG4iXX0=