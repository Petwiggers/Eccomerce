import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeNomeUsuario'
})
export class PipeNomeUsuarioPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }
    const resposta = value.split('@');
    console.log(resposta);
    
    return resposta[0];
  }

}
