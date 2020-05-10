import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentHomeComponent } from './component-home/component-home.component';

const routes: Routes = [ { path: 'collections', component: ComponentHomeComponent } ];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class CollectionsRoutingModule {}
