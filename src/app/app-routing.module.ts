import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { ViewAgeComponent } from './view-age/view-age.component';

const routes: Routes = [
  {path: 'routerDemo', component: RoutingDemoComponent},
  {path: 'age/:id', component: ViewAgeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
