import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculo',
  imports: [],
  templateUrl: './curriculo.component.html',
  styleUrl: './curriculo.component.scss'
})
export class CurriculoComponent {
  phoneNumber: string = '+55 (19) 99522-1659';
  email: string = 'diegopimenta.ds@hotmail.com';
  location: string = 'Sumaré/SP';
  linkedin: string = 'https://github.com/diegods26';
  education: string = 'Análise e Desenvolvimento de Sistemas';
  college: string = 'UNIVERSIDADE PAULISTA UNIP - 2023'
  skills: string[] = [
    `HTML5  --  CSS3  --  JAVA  --  Spring Boot  --  JavaScript  --  TypeScript  --
    Angular  --  React.js  --  C# ASP .NET Core  --  SQL Server  --
    Scrum  --  Kanban  --  SOLID Principles  --  DDD -- Clean Architecture  --
    Microservices  --  Git  --  Git Flow  --  Github Actions  --  Azure Devops  --  CI/CD  --  TDD`
  ]
  certifications: string[] = ['Microsoft AZ-900']
}
