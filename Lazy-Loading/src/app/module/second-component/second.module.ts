import { NgModule } from "@angular/core";
import { SecondComponentComponent } from "./second-component.component";
import { SecondRoutingModule } from "./second.routing.module";

@NgModule({
    declarations :[SecondComponentComponent],
    imports:[
        SecondRoutingModule
    ]
})
export class SecondModule {

}