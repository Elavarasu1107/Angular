import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostFormComponent } from './post-form/post-form.component';
import { DirectivesComponent } from './directives/directives.component';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import { AppendPipe } from './pipes/custom.pipe';
import { ServiceDemo } from './pipes/services/pipes.services';
import { FormsComponent } from './forms/forms.component';
import { CustomValidatorsComponent } from './custom-validators/custom-validators.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { RouterModule } from '@angular/router';
import { ViewAgeComponent } from './view-age/view-age.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostFormComponent,
    DirectivesComponent,
    PipesComponent,
    AppendPipe,
    FormsComponent,
    CustomValidatorsComponent,
    RoutingDemoComponent,
    ViewAgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    CommonModule,
  ],
  providers: [ServiceDemo],
  bootstrap: [AppComponent]
})
export class AppModule { }
