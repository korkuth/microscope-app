import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MicroscopeDetailsComponent } from './microscope-details/microscope-details.component';
import { MicroscopeListComponent } from './microscope-list/microscope-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'microscopes', pathMatch: 'full' },
  { path: 'microscopes', component: MicroscopeListComponent },
  { path: 'details/:id', component: MicroscopeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
