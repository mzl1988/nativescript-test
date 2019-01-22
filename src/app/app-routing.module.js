"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    {
        path: "login",
        loadChildren: "~/app/pages/login/login.module#LoginModule"
    },
    {
        path: "home",
        loadChildren: "~/app/pages/home/home.module#HomeModule"
    },
    {
        path: "feedback",
        loadChildren: "~/app/pages/feedback/feedback.module#FeedbackModule"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3BEO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixZQUFZLEVBQUUsNENBQTRDO0tBQzdEO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsTUFBTTtRQUNaLFlBQVksRUFBRSx5Q0FBeUM7S0FDMUQ7SUFDRDtRQUNJLElBQUksRUFBRSxVQUFVO1FBQ2hCLFlBQVksRUFBRSxxREFBcUQ7S0FDdEU7Q0FDSixDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaG9tZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5tb2R1bGUjTG9naW5Nb2R1bGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcImhvbWVcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3BhZ2VzL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiZmVlZGJhY2tcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3BhZ2VzL2ZlZWRiYWNrL2ZlZWRiYWNrLm1vZHVsZSNGZWVkYmFja01vZHVsZVwiXG4gICAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=