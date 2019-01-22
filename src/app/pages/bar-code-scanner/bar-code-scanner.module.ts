import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BarCodeScannerRoutingModule } from "./bar-code-scanner-routing.module";
import { BarCodeScannerComponent } from "./bar-code-scanner.component";
import { HeaderBarModule } from "../../components";
import { BarcodeScanner } from "nativescript-barcodescanner";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BarCodeScannerRoutingModule,
        HeaderBarModule
    ],
    declarations: [
        BarCodeScannerComponent
    ],
    providers: [BarcodeScanner],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BarCodeScannerModule { }
