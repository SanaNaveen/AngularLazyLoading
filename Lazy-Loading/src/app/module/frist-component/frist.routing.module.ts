import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { FristComponentComponent } from "./frist-component.component";

const routes : Routes= [
    {path :'',component: FristComponentComponent}
]

@NgModule({
    imports :[RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class FristRoutingModule {

}