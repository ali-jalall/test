import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { CreateDepartmentComponent } from './components/create-department/create-department.component';
import { EditDepartmentComponent } from './components/edit-department/edit-department.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainSectionComponent,
    DepartmentsComponent,
    CreateDepartmentComponent,
    EditDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
