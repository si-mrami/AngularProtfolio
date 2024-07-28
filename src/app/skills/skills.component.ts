import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  activeTab: string = 'frontend';

  frontendSkills: Skill[] = [
    {
      name: 'HTML',
      level: 90,
      icon: 'https://cdn-icons-png.flaticon.com/128/1051/1051277.png',
    },
    {
      name: 'CSS',
      level: 80,
      icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968242.png',
    },
    {
      name: 'Sass',
      level: 60,
      icon: 'https://cdn-icons-png.flaticon.com/128/919/919831.png',
    },
    {
      name: 'JavaScript',
      level: 80,
      icon: 'https://cdn-icons-png.flaticon.com/128/1199/1199124.png',
    },
    {
      name: 'React JS',
      level: 70,
      icon: 'https://cdn-icons-png.flaticon.com/128/1126/1126012.png',
    },
    {
      name: 'Angular',
      level: 70,
      icon: 'https://t4.ftcdn.net/jpg/05/83/61/63/240_F_583616371_W9KH0DLLoQHB10osgeR6ABpDCADZNPTu.jpg',
    },
  ];

  backendSkills: Skill[] = [
    {
      name: 'Java',
      level: 60,
      icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968282.png',
    },
    {
      name: 'Servlet JEE',
      level: 40,
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8jgHbhJ_A_8PhIoASxMSmdMGnHd8DRsox6Q&usqp=CAU',
    },
    {
      name: 'Node.js',
      level: 70,
      icon: 'https://t3.ftcdn.net/jpg/03/52/67/82/240_F_352678266_NFcwIwhhY76mkQItT4lCxyxcCTP3LgvY.jpg',
    },
    {
      name: 'Express.js',
      level: 70,
      icon: 'https://i.pinimg.com/564x/cd/12/12/cd1212c949eb07ebdd18db8f8cbb350b.jpg',
    },
  ];

  databaseSkills: Skill[] = [
    {
      name: 'MySQL',
      level: 60,
      icon: 'https://cdn-icons-png.flaticon.com/128/1199/1199128.png',
    },
    {
      name: 'MongoDB',
      level: 70,
      icon: 'https://cdn-icons-png.flaticon.com/512/1104/1104982.png',
    },
  ];

  getSkills(): any {
    switch (this.activeTab) {
      case 'frontend':
        return this.frontendSkills;
      case 'backend':
        return this.backendSkills;
      case 'database':
        return this.databaseSkills;
    }
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
