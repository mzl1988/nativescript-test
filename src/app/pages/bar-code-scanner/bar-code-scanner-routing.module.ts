import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BarCodeScannerComponent } from "./bar-code-scanner.component";

const routes: Routes = [
    { path: "", component: BarCodeScannerComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BarCodeScannerRoutingModule { }