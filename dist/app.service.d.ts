export interface Aluno {
    id: string;
    nome: string;
    turma: string;
}
export declare class AppService {
    private alunos;
    getHello(): string;
    createAluno(aluno: Aluno): void;
    getAlunos(): Aluno[];
    getAlunoById(id: string): Aluno | undefined;
}
