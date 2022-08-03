import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartCadastroComponent } from './pages/addons/chart-cadastro/chart-cadastro.component';
import { PieChartsComponent } from './pages/addons/pie-charts/pie-charts.component';
import { CadastroProdutoComponent } from './pages/components/cadastro-produto/cadastro-produto.component';
import { HeaderComponent } from './pages/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroProdutoComponent,
    ChartCadastroComponent,
    PieChartsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    NgChartsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
