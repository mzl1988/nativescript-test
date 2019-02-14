"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var platform_1 = require("tns-core-modules/platform");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        if (app.android && platform_1.device.sdkVersion >= '21') {
            var window_1 = app.android.startActivity.getWindow();
            window_1.setStatusBarColor(0x00000000);
            var decorView = window_1.getDecorView();
            decorView.setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                //| android.view.View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | android.view.View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                // | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION // hide nav bar
                // | View.SYSTEM_UI_FLAG_FULLSCREEN // hide status bar
                | android.view.View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsa0RBQW9EO0FBQ3BELHNEQUFtRDtBQVFuRDtJQUNJO0lBQ0ksQ0FBQztJQUNMLCtCQUFRLEdBQVI7UUFDSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLElBQUksaUJBQU0sQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO1lBQzFDLElBQUksUUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25ELFFBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyQyxJQUFJLFNBQVMsR0FBRyxRQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEMsU0FBUyxDQUFDLHFCQUFxQixDQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyw0QkFBNEI7Z0JBQzlDLDJEQUEyRDtrQkFDekQsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0NBQWdDO2dCQUNwRCx3REFBd0Q7Z0JBQ3hELHNEQUFzRDtrQkFDcEQsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQ3RELENBQUM7U0FDTDtJQUVMLENBQUM7SUFsQlEsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7U0FDdEMsQ0FBQzs7T0FDVyxZQUFZLENBbUJ4QjtJQUFELG1CQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5kZWNsYXJlIGxldCBhbmRyb2lkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICApIHsgfVxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAoYXBwLmFuZHJvaWQgJiYgZGV2aWNlLnNka1ZlcnNpb24gPj0gJzIxJykge1xuICAgICAgICAgICAgbGV0IHdpbmRvdyA9IGFwcC5hbmRyb2lkLnN0YXJ0QWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgICAgICAgICB3aW5kb3cuc2V0U3RhdHVzQmFyQ29sb3IoMHgwMDAwMDAwMCk7XG4gICAgICAgICAgICBsZXQgZGVjb3JWaWV3ID0gd2luZG93LmdldERlY29yVmlldygpO1xuICAgICAgICAgICAgZGVjb3JWaWV3LnNldFN5c3RlbVVpVmlzaWJpbGl0eShcbiAgICAgICAgICAgICAgICBhbmRyb2lkLnZpZXcuVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfU1RBQkxFXG4gICAgICAgICAgICAgICAgLy98IGFuZHJvaWQudmlldy5WaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9ISURFX05BVklHQVRJT05cbiAgICAgICAgICAgICAgICB8IGFuZHJvaWQudmlldy5WaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9GVUxMU0NSRUVOXG4gICAgICAgICAgICAgICAgLy8gfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0hJREVfTkFWSUdBVElPTiAvLyBoaWRlIG5hdiBiYXJcbiAgICAgICAgICAgICAgICAvLyB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfRlVMTFNDUkVFTiAvLyBoaWRlIHN0YXR1cyBiYXJcbiAgICAgICAgICAgICAgICB8IGFuZHJvaWQudmlldy5WaWV3LlNZU1RFTV9VSV9GTEFHX0lNTUVSU0lWRV9TVElDS1lcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cbiJdfQ==