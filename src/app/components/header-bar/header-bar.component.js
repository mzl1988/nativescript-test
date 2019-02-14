"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var app = require("tns-core-modules/application");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZWFkZXItYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsaURBQWdEO0FBQ2hELGtEQUFvRDtBQUNwRCxzREFBMkQ7QUFPM0Q7SUFNSSw0QkFDWSxnQkFBa0MsRUFDbEMsSUFBVTtRQURWLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVBiLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUV6QixpQkFBWSxHQUFHLENBQUMsQ0FBQztJQUtiLENBQUM7SUFFTCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQy9DLElBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxpQkFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDMUMsSUFBSSxRQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkQsMENBQTBDO1lBQzFDLFFBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQXZCUTtRQUFSLFlBQUssRUFBRTs7MERBQW9CO0lBQ25CO1FBQVIsWUFBSyxFQUFFOztxREFBaUI7SUFGaEIsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUM3QyxDQUFDO3lDQVFnQyx5QkFBZ0I7WUFDNUIsV0FBSTtPQVJiLGtCQUFrQixDQXlCOUI7SUFBRCx5QkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgc2NyZWVuLCBkZXZpY2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSGVhZGVyQmFyXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hlYWRlci1iYXIuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaGVhZGVyLWJhci5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIGhpZGRlbkJhY2sgPSBmYWxzZTtcbiAgICBASW5wdXQoKSB0aXRsZSA9ICdUaXRsZSc7XG4gICAgc2NyZWVuV2lkdGg6IG51bWJlcjtcbiAgICBzdGF0dXNIZWlnaHQgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcbiAgICAgICAgaWYgKGFwcC5hbmRyb2lkICYmIGRldmljZS5zZGtWZXJzaW9uID49ICcyMScpIHtcbiAgICAgICAgICAgIGxldCB3aW5kb3cgPSBhcHAuYW5kcm9pZC5zdGFydEFjdGl2aXR5LmdldFdpbmRvdygpO1xuICAgICAgICAgICAgLy8gc2V0IHRoZSBzdGF0dXMgYmFyIHRvIENvbG9yLlRyYW5zcGFyZW50XG4gICAgICAgICAgICB3aW5kb3cuc2V0U3RhdHVzQmFyQ29sb3IoMHgwMDAwMDApO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXNIZWlnaHQgPSAyNjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cbn1cbiJdfQ==