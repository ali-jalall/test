import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainSectionComponent } from './components/main-section/main-section.component'
import { CreateDepartmentComponent } from './components/create-department/create-department.component'
import { EditDepartmentComponent } from './components/edit-department/edit-department.component'


const routes: Routes = [
    { path: '', pathMatch: 'full', component: MainSectionComponent, },
    { path: 'create', component: CreateDepartmentComponent, },
    { path: 'create/:index', component: EditDepartmentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }