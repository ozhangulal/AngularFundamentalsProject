import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {FormsModule} from '@angular/forms'; //buraya da ekledik two way binding olayı için filtered by kısmında.
import {HttpClientModule} from '@angular/common/http'; //Sending HTTPRequest
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
//import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe'; //kendi pipemizi kullanabilmek için ihtiyaç duyuyoruz.
//import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    //ProductListComponent,
    //ConvertToSpacesPipe, //kendi pipemizi kullanmak için ihtiyaç duyuyoruz.
    //StarComponent, 
    //ProductDetailComponent,    //kendi star componentimizi kullanabilmek için bu kısma bunu yazmamız gerekmekte.
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule, //two way binding filter yapabilmek icin yaptik 
    HttpClientModule, //sendind HTTPRequest
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ]), ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
