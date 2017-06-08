import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { GizmoStoreService } from './model/gizmo-store';
import { GizmoLoadService } from './services/gizmo.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [
    GizmoStoreService,
    GizmoLoadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
