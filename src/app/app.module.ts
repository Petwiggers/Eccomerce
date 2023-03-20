import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimplesComponent } from './layouts/simples/simples.component';
import { CompletoComponent } from './layouts/completo/completo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { LoginComponent } from './paginas/login/login.component';
import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './paginas/home/home.component';
import { PipeNomeUsuarioPipe } from './servicos/pipe-nome-usuario.pipe';
import { ListaProdutosComponent } from './paginas/produtos/lista-produtos/lista-produtos.component';
import { CadastroProdutosComponent } from './paginas/produtos/cadastro-produtos/cadastro-produtos.component';


@NgModule({
  declarations: [
    AppComponent,
    SimplesComponent,
    CompletoComponent,
    CadastroComponent,
    LoginComponent,
    FormularioLoginComponent,
    MenuComponent,
    HomeComponent,
    PipeNomeUsuarioPipe,
    ListaProdutosComponent,
    CadastroProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PipeNomeUsuarioPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
