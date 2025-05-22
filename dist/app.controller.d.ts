import { AppService } from './app.service';
import { Aluno } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    createAluno(aluno: Aluno): void;
    getAlunos(): Aluno[];
    getAlunoById(id: string): Aluno | undefined;
}
