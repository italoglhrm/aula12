import { BadRequestException, Injectable } from '@nestjs/common';

export interface Aluno {
  id: string,
  nome: string,
  turma: string
}

@Injectable()
export class AppService {

  private alunos: Aluno[] = [
    {
      id: '1',
      nome: 'italo',
      turma: '7974'
    },
    {
      id: '2',
      nome: 'julia',
      turma: '7974'
    },
    {
      id: '3',
      nome: 'bruno',
      turma: '7974'
    },
    {
      id: '4',
      nome: 'matheus',
      turma: '7974'
    }
  ]

  getHello(): string {
    return 'Hello World!';
  }

  createAluno(aluno: Aluno) {
    const existAluno = this.alunos.find((a) => a.nome === aluno.nome);

    if (existAluno) {
      throw new BadRequestException('Aluno já existe.');
    }

    this.alunos.push(aluno);
  }

  getAlunos(): Aluno[] {
    return this.alunos;
  }

  getAlunoById(id: string): Aluno | undefined {
    return this.alunos.find((aluno) => aluno.id === id)
  }
}