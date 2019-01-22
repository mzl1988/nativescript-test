import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

const routes: Routes = [
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

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }