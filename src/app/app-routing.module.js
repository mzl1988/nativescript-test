"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    {
        path: "login",
        loadChildren: "~/app/pages/login/login.module#LoginModule"
    },
    {
        path: "home",
        loadChildren: "~/app/pages/home/home.module#HomeModule"
    },
    {
        path: "bar-code-scanner",
        loadChildren: "~/app/pages/bar-code-scanner/bar-code-scanner.module#BarCodeScannerModule"
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3JEO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixZQUFZLEVBQUUsNENBQTRDO0tBQzdEO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsTUFBTTtRQUNaLFlBQVksRUFBRSx5Q0FBeUM7S0FDMUQ7SUFDRDtRQUNJLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsWUFBWSxFQUFFLDJFQUEyRTtLQUM1RjtDQUNKLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9sb2dpblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5tb2R1bGUjTG9naW5Nb2R1bGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcImhvbWVcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3BhZ2VzL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiYmFyLWNvZGUtc2Nhbm5lclwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46IFwifi9hcHAvcGFnZXMvYmFyLWNvZGUtc2Nhbm5lci9iYXItY29kZS1zY2FubmVyLm1vZHVsZSNCYXJDb2RlU2Nhbm5lck1vZHVsZVwiXG4gICAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=