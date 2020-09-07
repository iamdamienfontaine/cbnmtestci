import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MapModule } from './map/map.module';
import { AppService } from '../app.service';

// import { ValidationModule } from './validation/validation.module';


@NgModule({
  imports: [
    CommonModule,

    // MapModule,    
    // AuthModule,
    // ValidationModule,
  ],
  exports: [
    // MapModule,
    // ValidationModule,
  ],
  providers: [ 
    AppService, 
    // AuthGuardService, AuthService 
  ]
})
export class CoreModule {}
