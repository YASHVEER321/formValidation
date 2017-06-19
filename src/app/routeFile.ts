import {Routes,RouterModule} from '@angular/router'
import {ModuleWithProviders} from '@angular/core'
import {AppComponent3} from './mdf.component'
import {AppComponent2} from './tdf.component'
import {AppComponent4} from './success.component'
// import {AppComponent3} from './component3'

const appRoutes:Routes=[
    {path:'TDF',component:AppComponent2},
    {path:'MDF',component:AppComponent3},
    {path:'success',component:AppComponent4}
]

export const AppRoutingModule:ModuleWithProviders=RouterModule.forRoot(appRoutes);