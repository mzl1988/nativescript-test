"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var bar_code_scanner_routing_module_1 = require("./bar-code-scanner-routing.module");
var bar_code_scanner_component_1 = require("./bar-code-scanner.component");
var components_1 = require("../../components");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var BarCodeScannerModule = /** @class */ (function () {
    function BarCodeScannerModule() {
    }
    BarCodeScannerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                bar_code_scanner_routing_module_1.BarCodeScannerRoutingModule,
                components_1.HeaderBarModule
            ],
            declarations: [
                bar_code_scanner_component_1.BarCodeScannerComponent
            ],
            providers: [nativescript_barcodescanner_1.BarcodeScanner],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], BarCodeScannerModule);
    return BarCodeScannerModule;
}());
exports.BarCodeScannerModule = BarCodeScannerModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNvZGUtc2Nhbm5lci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXItY29kZS1zY2FubmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUscUZBQWdGO0FBQ2hGLDJFQUF1RTtBQUN2RSwrQ0FBbUQ7QUFDbkQsMkVBQTZEO0FBZ0I3RDtJQUFBO0lBQW9DLENBQUM7SUFBeEIsb0JBQW9CO1FBZGhDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDZEQUEyQjtnQkFDM0IsNEJBQWU7YUFDbEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0RBQXVCO2FBQzFCO1lBQ0QsU0FBUyxFQUFFLENBQUMsNENBQWMsQ0FBQztZQUMzQixPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLG9CQUFvQixDQUFJO0lBQUQsMkJBQUM7Q0FBQSxBQUFyQyxJQUFxQztBQUF4QixvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IEJhckNvZGVTY2FubmVyUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2Jhci1jb2RlLXNjYW5uZXItcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEJhckNvZGVTY2FubmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vYmFyLWNvZGUtc2Nhbm5lci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhlYWRlckJhck1vZHVsZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgQmFyQ29kZVNjYW5uZXJSb3V0aW5nTW9kdWxlLFxuICAgICAgICBIZWFkZXJCYXJNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBCYXJDb2RlU2Nhbm5lckNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbQmFyY29kZVNjYW5uZXJdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQmFyQ29kZVNjYW5uZXJNb2R1bGUgeyB9XG4iXX0=