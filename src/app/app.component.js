"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var app = require("tns-core-modules/application");
var platform_1 = require("tns-core-modules/platform");
var services_1 = require("./services");
var AppComponent = /** @class */ (function () {
    function AppComponent(globalService, _changeDetectionRef) {
        var _this = this;
        this.globalService = globalService;
        this._changeDetectionRef = _changeDetectionRef;
        this.globalService.rootSideDrawerEvent.subscribe(function (value) {
            if (value === 'openDrawer') {
                _this.openDrawer();
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
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    AppComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    AppComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
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
        __metadata("design:paramtypes", [services_1.GlobalService,
            core_1.ChangeDetectorRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFDL0YsOERBQTRFO0FBRTVFLGtEQUFvRDtBQUNwRCxzREFBbUQ7QUFDbkQsdUNBQTJDO0FBUzNDO0lBR0ksc0JBQ1ksYUFBNEIsRUFDNUIsbUJBQXNDO1FBRmxELGlCQVNDO1FBUlcsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUU5QyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQWE7WUFDM0QsSUFBSSxLQUFLLEtBQUssWUFBWSxFQUFFO2dCQUN4QixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDckI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCwrQkFBUSxHQUFSO1FBQ0ksSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLGlCQUFNLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtZQUMxQyxJQUFJLFFBQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNuRCxRQUFNLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckMsSUFBSSxTQUFTLEdBQUcsUUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3RDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsNEJBQTRCO2dCQUM5QywyREFBMkQ7a0JBQ3pELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdDQUFnQztnQkFDcEQsd0RBQXdEO2dCQUN4RCxzREFBc0Q7a0JBQ3BELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUN0RCxDQUFDO1NBQ0w7SUFFTCxDQUFDO0lBRUQsc0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFHRCxpQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsdUNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBekNrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7eURBQUM7SUFEekUsWUFBWTtRQU54QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0FLNkIsd0JBQWE7WUFDUCx3QkFBaUI7T0FMekMsWUFBWSxDQTJDeEI7SUFBRCxtQkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgR2xvYmFsU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzXCI7XG5kZWNsYXJlIGxldCBhbmRyb2lkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vYXBwLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICApIHtcbiAgICAgICAgdGhpcy5nbG9iYWxTZXJ2aWNlLnJvb3RTaWRlRHJhd2VyRXZlbnQuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICdvcGVuRHJhd2VyJykge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbkRyYXdlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmIChhcHAuYW5kcm9pZCAmJiBkZXZpY2Uuc2RrVmVyc2lvbiA+PSAnMjEnKSB7XG4gICAgICAgICAgICBsZXQgd2luZG93ID0gYXBwLmFuZHJvaWQuc3RhcnRBY3Rpdml0eS5nZXRXaW5kb3coKTtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRTdGF0dXNCYXJDb2xvcigweDAwMDAwMDAwKTtcbiAgICAgICAgICAgIGxldCBkZWNvclZpZXcgPSB3aW5kb3cuZ2V0RGVjb3JWaWV3KCk7XG4gICAgICAgICAgICBkZWNvclZpZXcuc2V0U3lzdGVtVWlWaXNpYmlsaXR5KFxuICAgICAgICAgICAgICAgIGFuZHJvaWQudmlldy5WaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9TVEFCTEVcbiAgICAgICAgICAgICAgICAvL3wgYW5kcm9pZC52aWV3LlZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgICAgICAgIHwgYW5kcm9pZC52aWV3LlZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0ZVTExTQ1JFRU5cbiAgICAgICAgICAgICAgICAvLyB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfSElERV9OQVZJR0FUSU9OIC8vIGhpZGUgbmF2IGJhclxuICAgICAgICAgICAgICAgIC8vIHwgVmlldy5TWVNURU1fVUlfRkxBR19GVUxMU0NSRUVOIC8vIGhpZGUgc3RhdHVzIGJhclxuICAgICAgICAgICAgICAgIHwgYW5kcm9pZC52aWV3LlZpZXcuU1lTVEVNX1VJX0ZMQUdfSU1NRVJTSVZFX1NUSUNLWVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG5cbiAgICBvcGVuRHJhd2VyKCkge1xuICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgb25DbG9zZURyYXdlclRhcCgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICB9XG59XG4iXX0=