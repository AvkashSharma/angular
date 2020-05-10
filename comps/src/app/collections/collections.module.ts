import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { ComponentHomeComponent } from './component-home/component-home.component';

@NgModule({
	declarations: [ ComponentHomeComponent ],
	imports: [ CommonModule, CollectionsRoutingModule ],
	exports: []
})
export class CollectionsModule {}
