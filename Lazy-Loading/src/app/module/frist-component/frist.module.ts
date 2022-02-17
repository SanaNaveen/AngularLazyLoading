import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FristComponentComponent } from "./frist-component.component";

import { FristRoutingModule } from "./frist.routing.module";


@NgModule({
    declarations : [
        FristComponentComponent
    ],
    imports : [        
        CommonModule,
        FristRoutingModule
    ],
    providers :[]
})

export class FristModule {

}