"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZWFkZXItYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsZ0NBQStCO0FBQy9CLHNEQUFtRDtBQVFuRDtJQUtJLDRCQUNZLGdCQUFrQyxFQUNsQyxJQUFVO1FBRFYscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBTmIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixVQUFLLEdBQUcsT0FBTyxDQUFDO0lBTXJCLENBQUM7SUFFTCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ25ELENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQWhCUTtRQUFSLFlBQUssRUFBRTs7MERBQW9CO0lBQ25CO1FBQVIsWUFBSyxFQUFFOztxREFBaUI7SUFGaEIsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUM3QyxDQUFDO3lDQU9nQyx5QkFBZ0I7WUFDNUIsV0FBSTtPQVBiLGtCQUFrQixDQWtCOUI7SUFBRCx5QkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBzY3JlZW4gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIZWFkZXJCYXJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaGVhZGVyLWJhci5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9oZWFkZXItYmFyLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgaGlkZGVuQmFjayA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHRpdGxlID0gJ1RpdGxlJztcbiAgICBzY3JlZW5XaWR0aDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcbiAgICB9XG5cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG59XG4iXX0=