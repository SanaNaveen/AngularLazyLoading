import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";


const route : Routes =[
    {path : '',loadChildren :()=> import('./module/frist-component/frist.module').then(m => m.FristModule)},
    {path : 'component2',loadChildren :()=> import('./module/second-component/second.module').then(m=>m.SecondModule)},
    {path :'componet3',loadChildren : ()=> import('./module/third-component/third.module').then(m=>m.ThirdModule)}
];

@NgModule({
    imports : [RouterModule.forRoot(route)],
    exports : [RouterModule]
})
export class AppRoutingModule {

}