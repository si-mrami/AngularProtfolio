import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'], // Corrected here
})
export class ProjectsComponent implements OnInit {
  repositories: any[] = [
    // {
    //   name: 'منصة التجارة الإلكترونية (شبيهة بنون وأمازون)',
    //   avatar_url: '',
    //   html_url: '',
    //   technologies: [
    //     'React.js',
    //     'Node.js',
    //     'Express.js',
    //     'MongoDB',
    //     'Socket.io',
    //   ],
    //   features: [
    //     'نظام تسجيل التجار',
    //     'إدارة وتتبع الطلبات',
    //     'وظيفة الدردشة في الوقت الحقيقي',
    //     'تكامل بوابة الدفع',
    //   ],
    // },
    // {
    //   name: 'منصة قانونية للمحامين',
    //   html_url:'',
    //   avatar_url: '',
    //   technologies: ['Flutter', 'Firebase', 'لوحة تحكم Angular'],
    //   features: [
    //     'بحث في القضايا النشطة',
    //     'إدارة ملفات العملاء والتفاعلات',
    //     'إجراء مكالمات صوتية وفيديو',
    //     'الدردشة في الوقت الحقيقي وإرفاق الملفات',
    //   ],
    // },
    {
      name: 'موقع لبيع الهواتف واجهزة البلايتيشن',
      avatar_url: 'assets/images/phon.png',
      html_url: '',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      features: [
        'نظام إدراج الهواتف',
        'خدمة التوصيل للمنازل',
        'ضمان العودة خلال 24 ساعة',
        'طلب خدمات الإصلاح المنزلية',
      ],
    },
    {
      name: 'منصة السياحة التطوعية (شبيهة بـ Workaway)',
      avatar_url: 'assets/images/vulounter.png',
      html_url: '',
      technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB'],
      features: [
        'البحث عن فرص تطوعية',
        'إنشاء حسابات للمتطوعين والمضيفين',
        'نظام تقييم للمستخدمين',
        'الدردشة بين المضيفين والمتطوعين',
      ],
    },
    {
      name: 'منصة تعليمية عبر الإنترنت',
      avatar_url: 'assets/images/eductaion.png',
      html_url: '',
      technologies: ['Angular', 'Firebase', 'WebRTC'],
      features: [
        'نظام إدارة الدروس',
        'تسجيل الطلاب والتقييمات',
        'دعم الفيديو والصوت للدروس الحية',
        'التفاعل المباشر بين الطلاب والمدرسين',
      ],
    },
    {
      name: 'إدارة حسابات TikTok',
      avatar_url: 'assets/images/tik.png',
      html_url: '',
      technologies: ['Node.js', 'Express.js', 'Serverless', 'MongoDB'],
      features: [
        'إدارة حسابات TikTok متعددة في نفس الوقت',
        'تخزين بيانات تسجيل الدخول بأمان لإعادة الاتصال التلقائي',
        'تنفيذ تفاعلات آلية (إعجابات، تعليقات، متابعة) على المنشورات',
        'جدولة المهام لتنفيذ التفاعلات في أوقات محددة لمحاكاة النشاط البشري',
        'تحليل أداء الحسابات عن طريق جمع البيانات حول التفاعلات والمشاركات',
        'لوحة تحكم سهلة الاستخدام لإدارة الحسابات وجدولة الأنشطة',
      ],
    },
  ];

  constructor(private githubService: GithubService) {}

  ngOnInit() {}
}
