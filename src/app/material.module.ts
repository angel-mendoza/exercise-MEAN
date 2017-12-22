import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  imports: modules,
  exports: modules
})

export class MaterialModule {}
