import { NgModule } from "@angular/core";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
import { ThirdComponentComponent } from "./third-component.component";
import { ThirdRoutingModule } from "./third.routing.module";

@NgModule({
    declarations : [
        ThirdComponentComponent,
        Page1Component,
        Page2Component
    ],
    imports : [
        ThirdRoutingModule
    ]

})
export class ThirdModule {

}