import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasModule } from './module/contas.module';
import { GerenteController } from './controller/gerente.controller';
import { ClienteService } from './service/cliente.service';
import { GerenteService } from './service/gerente.service';
import { ContasFactory } from './factory/contas.factory';
import { GerenteModule } from './module/gerente.module';
import { ClienteModule } from './module/cliente.module';
import { ContasService } from './service/contas.service';
import { ContasController } from './controller/contas.controller';
import { ClienteController } from './controller/cliente.controller';
import { ClienteFactory } from './factory/cliente.factory';
import { CepValidatorAdapter } from './cep/adapter/input/cep-validator,adapter';


@Module({
  imports: [AppModule, ContasModule, GerenteModule, ClienteModule],
  controllers: [
    AppController,
    GerenteController,
    ContasController,
    ClienteController,
  ],
  providers: [
    AppService,
    ClienteService,
    ClienteFactory,
    GerenteService,
    ContasFactory,
    ContasService,
    CepValidatorAdapter,
  ],
  exports: [CepValidatorAdapter],
})
export class AppModule {}
