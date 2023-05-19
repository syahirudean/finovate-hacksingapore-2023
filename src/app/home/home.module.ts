import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SavingStatComponent } from '../saving-stat/saving-stat.component';

@NgModule({
  declarations: [HomeComponent, SavingStatComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
