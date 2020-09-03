import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './shared/routing/app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'

// Firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
// Auth service
import { AuthService } from "./shared/services/auth.service";
import { MemeDashboardComponent } from './components/meme-dashboard/meme-dashboard.component';
import { MemeDetailComponent } from './components/meme-detail/meme-detail.component';
import { MemeListComponent } from './components/meme-list/meme-list.component';
import { ColorChromeModule } from 'ngx-color/chrome';

const routes: Routes = [
  { path: 'list-memes', component: MemeListComponent },
  { path: 'list-memes/:id', component: MemeDetailComponent },
  { path: 'create-memes', component: MemeDashboardComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    MemeDashboardComponent,
    MemeDetailComponent,
    MemeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
    ColorChromeModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // Required for everything
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
