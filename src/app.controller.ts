import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Aluno } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/alunos')
  createAluno(@Body() aluno: Aluno) {
    return this.appService.createAluno(aluno);
  }

  @Get('/alunos')
  getAlunos(): Aluno[] {
    return this.appService.getAlunos();
  }

  @Get('/alunos/:id/detalhes')
  getAlunoById(@Param('id') id: string): Aluno | undefined {
    return this.appService.getAlunoById(id);
  }
}