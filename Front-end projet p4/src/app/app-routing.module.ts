import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PageteleComponent } from './component/pagetele/pagetele.component';
import { PagepanelComponent } from './component/pagepanel/pagepanel.component';
import { PageordinateurComponent } from './component/pageordinateur/pageordinateur.component';
import { PagemontresComponent } from './component/pagemontres/pagemontres.component';
import { PagesourisComponent } from './component/pagesouris/pagesouris.component';
import { PagecasqueaudioComponent } from './component/pagecasqueaudio/pagecasqueaudio.component';
import { PageclavierComponent } from './component/pageclavier/pageclavier.component';


const routes: Routes = [


  { path: '', 'component': HomeComponent },
  { path: 'contact', 'component': ContactComponent},
  { path: 'login', 'component': LoginComponent},
  { path: 'register', 'component': RegisterComponent },
  { path: 'pagetele', 'component': PageteleComponent},
  { path: 'pagepanel', 'component': PagepanelComponent},
  { path: 'Pageordinateur', 'component': PageordinateurComponent },
  { path: 'pagemontres', 'component': PagemontresComponent},
  { path: 'pagesouris', 'component': PagesourisComponent},
  { path: 'pagecasque', 'component': PagecasqueaudioComponent},
  { path: 'pageclavier', 'component': PageclavierComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
