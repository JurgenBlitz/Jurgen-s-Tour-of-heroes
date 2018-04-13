import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ RegisterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
