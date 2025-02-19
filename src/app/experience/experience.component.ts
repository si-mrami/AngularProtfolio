import {NgFor, NgIf} from '@angular/common';
import {Component} from '@angular/core';

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
      title: 'مطور Full Stack',
      company: 'فريلانسر . عن بُعد',
      period: 'مايو 2024 - الحاضر',
      description:
        'أنا مطور Full Stack فريلانسر، مسؤول عن تصميم وتطوير ونشر وحل المشكلات في التطبيقات الإلكترونية والموبايل بالكامل. أتعامل مع المهام المتعلقة بالواجهة الأمامية والخلفية، وأدير قواعد البيانات، وأحل المشاكل التقنية، وأضمن تكاملًا سلسًا بين الواجهات الأمامية والوظائف الخلفية، بالإضافة إلى نشر المشاريع على منصات السحابة لتجربة مستخدم سلسة.',
    },
    {
      title: 'مطور إدارة حسابات TikTok',
      company: 'مشروع مستقل . عن بُعد',
      period: '2024',
      description:
        'طورت نظامًا لإدارة حسابات TikTok متعددة، يتضمن تفاعلات آلية مثل الإعجابات، التعليقات، والمتابعات. استخدمت Node.js و Express.js و MongoDB لتنفيذ هذه الميزة، حيث يمكن للمستخدمين جدولة التفاعلات، وتحليل أداء الحسابات. يتضمن المشروع لوحة تحكم سهلة الاستخدام لإدارة الحسابات وجدولة الأنشطة، مما يتيح مراقبة الحسابات بشكل فعال. النظام يضمن تخزين بيانات تسجيل الدخول بأمان لإعادة الاتصال التلقائي.',
    },
    {
      title: 'مطور Backend',
      company: 'فريلانسر . السعودية · عن بُعد',
      period: 'فبراير 2024 - أبريل 2024',
      description:
        "باستخدام Node.js و Express.js، قمت بتطوير واجهة برمجة تطبيقات قوية لتشغيل خلفية موقع ويب ديناميكي تم بناءه باستخدام Angular للواجهة الأمامية. شمل هذا المشروع تحويل موقع ويب ثابت إلى منصة ديناميكية بالكامل من خلال التعاون السلس بين الفرق الخلفية والأمامية.",
    },
    {
      title: 'مطور Frontend',
      company: 'E-AMBITION . المغرب · عن بُعد',
      period: 'نوفمبر 2023 - أبريل 2024',
      description: `كـ مطور Front-End في E-AMBITION، كانت مسؤولياتي تشمل:
    - تصميم وتنفيذ واجهات مستخدم تفاعلية باستخدام Angular.
    - تطوير مكونات قابلة لإعادة الاستخدام لهيكل واجهة أمامية قوية.
    - دمج ميزات الواجهة الأمامية مع خدمات خلفية باستخدام Java/Spring Boot.
    - إدارة حالة التطبيق والملاحة باستخدام NgRx و Angular router.
    - كتابة اختبارات للوحدات والدمج لضمان موثوقية الكود.
    - تحسين الأداء وضمان الوصولية والتوافق عبر المتصفحات.
    - توثيق الكود وعمليات التطوير لتسهيل التعاون الفعال.`,
    },
    {
      title: 'مطور Node.js و Web Scraping',
      company: 'Jumia Group . عن بُعد',
      period: '2023',
      description:
        'طورت حلًا من الصفر لمقارنة أسعار المنتجات عالميًا باستخدام تقنيات الزحف على الويب وتحليل البيانات. عملت على كتابة حالات اختبار TDD باستخدام Jest و Mocha، وتطوير برنامج زاحف متعدد الخيوط باستخدام Node.js و Cheerio لجمع البيانات من مواقع التجارة الإلكترونية المختلفة. كما استخدمت Sequelize (أو TypeORM) مع MySQL لتخزين البيانات بشكل فعال، وقمت بتطوير واجهة مستخدم بسيطة باستخدام Electron.js لتمكين المستخدمين من التفاعل مع الزاحف.',
    },
    {
      title: 'مطور MERN Stack',
      company: 'FI Leadder . فرنسا · عن بُعد',
      period: 'أبريل 2022 - يوليو 2022',
      description:
        'كـ متدرب في تطوير MERN Stack في FI Leadder، كان لي الفرصة للمساهمة في تطوير تطبيق ويب يركز على أتمتة عملية تدقيق القيود المحاسبية. باستخدام مهاراتي في Node.js و React.js وغيرها من التقنيات ذات الصلة، تعاونت مع الفريق لإتمام هذا المشروع. ساعدت هذه التجربة في تعزيز مهاراتي في تطوير الويب وحل المشكلات أثناء العمل في بيئة عن بُعد.',
    },

  ];


}
