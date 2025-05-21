import { Injectable } from '@nestjs/common';

export interface Aluno {
  id: string,
  nome: string,
  sobrenome: string
}

@Injectable()
export class AppService {

  private alunos: Aluno[] = [
      {
        id: '1',
        nome: "Lucas",
        sobrenome: "Lopes"
      },
      {
        id: '2',
        nome: "Ítalo",
        sobrenome: "Guilherme"
      }
  ]

  getHello(): string {
    return 'Hello World!';
  }

  getAlunos(): Aluno[] {
    return this.alunos;
  }

  getAlunoById(id: string): Aluno | undefined {
    return this.alunos.find((aluno) => aluno.id === id)
  }
}