import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ContasService } from './contas.service';
import { Contas } from './model/contas.interface';
import { ContaCorrente } from './model/contaCorrente';
import { ContaPoupanca } from './model/contaPoupanca';

@Controller('contas')
export class ContasController {
    constructor(private readonly contaService: ContasService) {}

  @Post()
  criarConta(@Body('tipo') tipo: string,@Body('clienteId') clienteId:string, @Body('saldo') saldo:number): Contas|ContaCorrente|ContaPoupanca {
    return this.contaService.criarConta(tipo,clienteId,saldo);
  }
  
  @Get()
  findAll() {
    return this.contaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contaService.findById(+id);
  }

  @Delete(':id')
  removerConta(@Param('id') id: number) {
    return this.contaService.removerConta(+id);
  }
   /* @Patch(':id/atualizar-saldo')
  atualizarSaldo(@Param('id') id: number, @Body("saldo") newSaldo: number) {
    return this.contaService.atualizarSaldo();
  } */

}
