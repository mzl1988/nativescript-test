"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var feedback_routing_module_1 = require("./feedback-routing.module");
var feedback_component_1 = require("./feedback.component");
var components_1 = require("../../components");
var FeedbackModule = /** @class */ (function () {
    function FeedbackModule() {
    }
    FeedbackModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                feedback_routing_module_1.FeedbackRoutingModule,
                components_1.HeaderBarModule
            ],
            declarations: [
                feedback_component_1.FeedbackComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], FeedbackModule);
    return FeedbackModule;
}());
exports.FeedbackModule = FeedbackModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2subW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVlZGJhY2subW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSxxRUFBa0U7QUFDbEUsMkRBQXlEO0FBQ3pELCtDQUFtRDtBQWVuRDtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQWIxQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QiwrQ0FBcUI7Z0JBQ3JCLDRCQUFlO2FBQ2xCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHNDQUFpQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtBQUFsQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgRmVlZGJhY2tSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZmVlZGJhY2stcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEZlZWRiYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVlZGJhY2suY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIZWFkZXJCYXJNb2R1bGUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50c1wiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBGZWVkYmFja1JvdXRpbmdNb2R1bGUsXG4gICAgICAgIEhlYWRlckJhck1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEZlZWRiYWNrQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrTW9kdWxlIHsgfVxuIl19