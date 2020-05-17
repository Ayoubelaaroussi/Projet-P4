import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PagecasqueaudioComponent } from './component/pagecasqueaudio/pagecasqueaudio.component';
import { PageclavierComponent } from './component/pageclavier/pageclavier.component';
import { PagemontresComponent } from './component/pagemontres/pagemontres.component';
import { PageordinateurComponent } from './component/pageordinateur/pageordinateur.component';
import { PagepanelComponent } from './component/pagepanel/pagepanel.component';
import { PagesourisComponent } from './component/pagesouris/pagesouris.component';
import { PageteleComponent } from './component/pagetele/pagetele.component';
import { RegisterComponent } from './component/register/register.component';


import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    PagecasqueaudioComponent,
    PageclavierComponent,
    PagemontresComponent,
    PageordinateurComponent,
    PagepanelComponent,
    PagesourisComponent,
    PageteleComponent,
    RegisterComponent
  ],


  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
