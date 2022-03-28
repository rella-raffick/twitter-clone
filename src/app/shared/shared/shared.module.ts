import { FormsModule } from '@angular/forms';
import { SideNavComponent } from './../../components/side-nav/side-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SideNavComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SideNavComponent]
})
export class SharedModule { }
