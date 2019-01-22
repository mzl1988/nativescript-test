import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FeedbackRoutingModule } from "./feedback-routing.module";
import { FeedbackComponent } from "./feedback.component";
import { HeaderBarModule } from "../../components";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FeedbackRoutingModule,
        HeaderBarModule
    ],
    declarations: [
        FeedbackComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FeedbackModule { }
