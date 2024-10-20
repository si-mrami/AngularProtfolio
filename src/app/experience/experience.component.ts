import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  activeTab: string = 'frontend';

  myExp: Experience[] = [
    {
      title: 'Full Stack Developer',
      company: 'Ferrelacer . Remote',
      period: 'May 2024 - Present',
      description:
        'I m a Full Stack Developer freelancer, responsible for designing, developing, deploying, and troubleshooting complete web and mobile applications. I handle both frontend and backend tasks, manage databases, fix technical issues, and ensure seamless integration between client-side interfaces and server-side functionality, deploying projects to cloud platforms for a smooth user experience',
    },
    {
      title: 'Backend Developer',
      company: 'Ferrelacer . Saudi Arabia · Remote',
      period: 'Feb 2024 - Apr 2024',
      description:
        "Using Node.js and Express.js, I've developed a robust API to power the backend of a dynamic website built with Angular for the front end. This project involved transforming a static website into a fully dynamic platform through seamless collaboration between the backend and front-end teams.",
    },
    {
      title: 'Frontend Developer',
      company: 'E-AMBITION . Morocco · Remote',
      period: 'Nov 2023 - Apr 2024 ',
      description: `As a Front-End Developer on E-AMBITION, my responsibilities included:
- Designing and implementing interactive user interfaces using Angular.
- Developing reusable components for a robust frontend architecture.
- Integrating frontend features with Java/Spring Boot backend services.
- Managing application state and navigation using NgRx and Angular router.
- Writing unit and integration tests to ensure code reliability.
- Optimizing performance and ensuring accessibility and cross-browser compatibility.
- Documenting code and development processes for effective collaboration.`,
    },
    {
      title: 'MERN Stack Developer',
      company: 'FI Leadder . France · Remote',
      period: 'Apr 2022 - Jul 2022',
      description:
        'As a MERN Stack Developer Intern at FI Leadder, I had the opportunity to contribute to the development of a web application focused on automating the auditing process of accounting entries. Leveraging my skills in Node.js, React.js, and other relevant technologies, I collaborated with the team to bring this project to fruition. This experience further honed my abilities in web development and problem-solving while working in a remote environment.',
    },
  ];
}
