import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { DestnationComponent } from './components/destnation/destnation.component';
import { ManagmentComponent } from './components/managment/managment.component';



@NgModule({
  declarations: [
    AppComponent,
    DestnationComponent,
    ManagmentComponent,


],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
