import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllergensComponent } from './features/allergens/allergens.component';
import { HomeComponent } from './features/home/home.component';
import { MenuComponent } from './features/menu/menu.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryMenuComponent } from './features/category-menu/category-menu.component';
import { MenuPageComponent } from './features/menu/menu-page.component';
import { DetailsComponent } from './features/details/details.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
	MenuPageComponent,
	CategoryMenuComponent,
    MenuComponent,
    HomeComponent,
	DetailsComponent,
    AllergensComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
