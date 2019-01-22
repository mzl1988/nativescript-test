import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

const routes: Routes = [
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

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }