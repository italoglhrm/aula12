"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    alunos = [
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
    ];
    getHello() {
        return 'Hello World!';
    }
    createAluno(aluno) {
        const existAluno = this.alunos.find((a) => a.nome === aluno.nome);
        if (existAluno) {
            throw new common_1.BadRequestException('Aluno já existe.');
        }
        this.alunos.push(aluno);
    }
    getAlunos() {
        return this.alunos;
    }
    getAlunoById(id) {
        return this.alunos.find((aluno) => aluno.id === id);
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map