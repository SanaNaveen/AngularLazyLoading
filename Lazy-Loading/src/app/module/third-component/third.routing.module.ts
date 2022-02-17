import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
import { ThirdComponentComponent } from "./third-component.component";

const routes : Routes = [
    {path :'page1',component:ThirdComponentComponent},
    {path :'page2',component : Page1Component},
    {path :'page3',component : Page2Component},
]

@NgModule({
    imports :[RouterModule.forChild(routes)],
    exports :[RouterModule]
})
export class ThirdRoutingModule {

}