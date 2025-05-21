export interface Aluno {
    id: string;
    nome: string;
    sobrenome: string;
}
export declare class AppService {
    private alunos;
    getHello(): string;
    getAlunos(): Aluno[];
    getAlunoById(id: string): Aluno | undefined;
}
