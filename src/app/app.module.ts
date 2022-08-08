import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgApexchartsModule } from 'ng-apexcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmountGraphicComponent } from './pages/addons/amount-graphic/amount-graphic.component';
import { InputOutputGraphicComponent } from './pages/addons/input-output-graphic/input-output-graphic.component';
import { ProviderGraphicsComponent } from './pages/addons/provider-graphics/provider-graphics.component';
import { FormProductComponent } from './pages/components/form-product/form-product.component';
import { FormProviderComponent } from './pages/components/form-provider/form-provider.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { HomeComponent } from './pages/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormProductComponent,
    FormProviderComponent,
    HomeComponent,
    InputOutputGraphicComponent,
    AmountGraphicComponent,
    ProviderGraphicsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
