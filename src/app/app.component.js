"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var nativescript_ui_sidedrawer_1 = require("nativescript-ui-sidedrawer");
var app = require("tns-core-modules/application");
var platform_1 = require("tns-core-modules/platform");
var color_1 = require("tns-core-modules/color");
var services_1 = require("./services");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, globalService, _changeDetectionRef) {
        var _this = this;
        this.router = router;
        this.globalService = globalService;
        this._changeDetectionRef = _changeDetectionRef;
        this.allowEdgeSwipe = false;
        this.statusHeight = 0;
        this.globalService.rootSideDrawerEvent.subscribe(function (value) {
            if (value === 'openDrawer') {
                _this.openDrawer();
            }
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                console.log(event);
                event.urlAfterRedirects.indexOf('/home') > -1 ? _this.allowEdgeSwipe = true : _this.allowEdgeSwipe = false;
            }
        });
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
            this.statusHeight = 26;
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this.drawer.drawerTransition = new nativescript_ui_sidedrawer_1.RevealTransition();
        this.drawer.shadowColor = new color_1.Color('#203d5afe');
        this._changeDetectionRef.detectChanges();
    };
    AppComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    AppComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    AppComponent.prototype.toPage = function () {
        this.onCloseDrawerTap();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], AppComponent.prototype, "drawerComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html",
            styleUrls: ["./app.component.scss"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            services_1.GlobalService,
            core_1.ChangeDetectorRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFDL0YsMENBQXdEO0FBQ3hELDhEQUE0RTtBQUM1RSx5RUFBNkU7QUFDN0Usa0RBQW9EO0FBQ3BELHNEQUFtRDtBQUNuRCxnREFBK0M7QUFDL0MsdUNBQTJDO0FBUzNDO0lBTUksc0JBQ1ksTUFBYyxFQUNkLGFBQTRCLEVBQzVCLG1CQUFzQztRQUhsRCxpQkFpQkM7UUFoQlcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFObEQsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFPYixJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQWE7WUFDM0QsSUFBSSxLQUFLLEtBQUssWUFBWSxFQUFFO2dCQUN4QixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDckI7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQVU7WUFDcEMsSUFBSSxLQUFLLFlBQVksc0JBQWEsRUFBRTtnQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2FBQzVHO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsK0JBQVEsR0FBUjtRQUNJLElBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxpQkFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDMUMsSUFBSSxRQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkQsUUFBTSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JDLElBQUksU0FBUyxHQUFHLFFBQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QyxTQUFTLENBQUMscUJBQXFCLENBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDRCQUE0QjtnQkFDOUMsMkRBQTJEO2tCQUN6RCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0M7Z0JBQ3BELHdEQUF3RDtnQkFDeEQsc0RBQXNEO2tCQUNwRCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FDdEQsQ0FBQztZQUNGLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1NBQzFCO0lBRUwsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSw2Q0FBZ0IsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksYUFBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBR0QsaUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHVDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBM0RrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7eURBQUM7SUFEekUsWUFBWTtRQU54QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0FRc0IsZUFBTTtZQUNDLHdCQUFhO1lBQ1Asd0JBQWlCO09BVHpDLFlBQVksQ0E2RHhCO0lBQUQsbUJBQUM7Q0FBQSxBQTdERCxJQTZEQztBQTdEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIsIFJldmVhbFRyYW5zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XG5pbXBvcnQgeyBHbG9iYWxTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXNcIjtcbmRlY2xhcmUgbGV0IGFuZHJvaWQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9hcHAuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gICAgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xuICAgIGFsbG93RWRnZVN3aXBlID0gZmFsc2U7XG4gICAgc3RhdHVzSGVpZ2h0ID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICApIHtcbiAgICAgICAgdGhpcy5nbG9iYWxTZXJ2aWNlLnJvb3RTaWRlRHJhd2VyRXZlbnQuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICdvcGVuRHJhd2VyJykge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbkRyYXdlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzLmluZGV4T2YoJy9ob21lJykgPiAtMSA/IHRoaXMuYWxsb3dFZGdlU3dpcGUgPSB0cnVlIDogdGhpcy5hbGxvd0VkZ2VTd2lwZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmIChhcHAuYW5kcm9pZCAmJiBkZXZpY2Uuc2RrVmVyc2lvbiA+PSAnMjEnKSB7XG4gICAgICAgICAgICBsZXQgd2luZG93ID0gYXBwLmFuZHJvaWQuc3RhcnRBY3Rpdml0eS5nZXRXaW5kb3coKTtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRTdGF0dXNCYXJDb2xvcigweDAwMDAwMDAwKTtcbiAgICAgICAgICAgIGxldCBkZWNvclZpZXcgPSB3aW5kb3cuZ2V0RGVjb3JWaWV3KCk7XG4gICAgICAgICAgICBkZWNvclZpZXcuc2V0U3lzdGVtVWlWaXNpYmlsaXR5KFxuICAgICAgICAgICAgICAgIGFuZHJvaWQudmlldy5WaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9TVEFCTEVcbiAgICAgICAgICAgICAgICAvL3wgYW5kcm9pZC52aWV3LlZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgICAgICAgIHwgYW5kcm9pZC52aWV3LlZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0ZVTExTQ1JFRU5cbiAgICAgICAgICAgICAgICAvLyB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfSElERV9OQVZJR0FUSU9OIC8vIGhpZGUgbmF2IGJhclxuICAgICAgICAgICAgICAgIC8vIHwgVmlldy5TWVNURU1fVUlfRkxBR19GVUxMU0NSRUVOIC8vIGhpZGUgc3RhdHVzIGJhclxuICAgICAgICAgICAgICAgIHwgYW5kcm9pZC52aWV3LlZpZXcuU1lTVEVNX1VJX0ZMQUdfSU1NRVJTSVZFX1NUSUNLWVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzSGVpZ2h0ID0gMjY7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgICAgICB0aGlzLmRyYXdlci5kcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFJldmVhbFRyYW5zaXRpb24oKTtcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hhZG93Q29sb3IgPSBuZXcgQ29sb3IoJyMyMDNkNWFmZScpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuXG4gICAgb3BlbkRyYXdlcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIG9uQ2xvc2VEcmF3ZXJUYXAoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxuXG4gICAgdG9QYWdlKCkge1xuICAgICAgICB0aGlzLm9uQ2xvc2VEcmF3ZXJUYXAoKTtcbiAgICB9XG59XG4iXX0=