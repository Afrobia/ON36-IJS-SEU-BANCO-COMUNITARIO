import { Module } from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { GerenteController } from './gerente.controller';

@Module({
  controllers: [GerenteController],
  providers: [GerenteService],
})
export class GerenteModule {}
