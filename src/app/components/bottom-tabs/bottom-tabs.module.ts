import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { BottomTabsComponent } from "./bottom-tabs.component";

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
        BottomTabsComponent
    ],
    exports: [
        BottomTabsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BottomTabsModule { }