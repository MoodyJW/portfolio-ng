export interface AboutSection {
  header: string;
  content: string[];
  expandedContent: string[] | null;
  openState: 'closed' | 'open';
  rotatedState: 'default' | 'rotated';
}

export const ABOUT_SECTIONS: AboutSection[] = [
  {
    header: 'languages & frameworks',
    content: [
      'JavaScript / TypeScript / Python',
      'Angular / RxJS / NgRx / Material',
      'CSS3 / HTML5 / Sass',
    ],
    expandedContent: null,
    openState: 'closed',
    rotatedState: 'default',
  },
  {
    header: 'work experience',
    content: [
      'SEP 2014 - FEB 2019',
      'Resource Analyst II',
      'Alfa Insurance - Montgomery, AL',
    ],
    expandedContent: null,
    openState: 'closed',
    rotatedState: 'default',
  },
];
