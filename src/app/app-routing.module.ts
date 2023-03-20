import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletoComponent } from './layouts/completo/completo.component';
import { SimplesComponent } from './layouts/simples/simples.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { LoginComponent } from './paginas/login/login.component';
import { CadastroProdutosComponent } from './paginas/produtos/cadastro-produtos/cadastro-produtos.component';
import { ListaProdutosComponent } from './paginas/produtos/lista-produtos/lista-produtos.component';
import { GuardaLoginGuard } from './servicos/guarda-login.guard';




const routes: Routes = [
  {path: '', redirectTo: 'login',pathMatch: 'full'},
  {path: '', component: SimplesComponent,children:[
    {path:'cadastro',component: CadastroComponent},
    {path:'login',component: LoginComponent}
  ]
  },
  {path:'home',component: CompletoComponent, canActivate: [GuardaLoginGuard],children:[
    {path:'produtos', component : ListaProdutosComponent},
    {path:'cadastrarProdutos', component: CadastroProdutosComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
