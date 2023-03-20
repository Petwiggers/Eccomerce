import { TestBed } from '@angular/core/testing';

import { VereficarUsuarioService } from './vereficar-usuario.service';

describe('VereficarUsuarioService', () => {
  let service: VereficarUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VereficarUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
