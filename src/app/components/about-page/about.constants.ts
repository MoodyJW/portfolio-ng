export interface AboutSection {
  header: string;
  content: {
    jobTitle: string;
    moreInfo: {
      title: string;
      details: string[];
      date: string;
    };
  }[];
}

export const ABOUT_SECTIONS: AboutSection[] = [
  {
    header: 'languages & frameworks',
    content: [
      {
        jobTitle: `JavaScript / TypeScript / Python
          Angular / RxJS / NgRx / Material
          CSS3 / HTML5 / Sass`,
        moreInfo: {
          title: '',
          details: [],
          date: '',
        },
      },
    ],
  },
  {
    header: 'coding experience',
    content: [
      {
        jobTitle: 'Application Development Engineer',
        moreInfo: {
          title: 'NOV',
          date: 'DEC 2019 - Present',
          details: [
            `Refactor one of the company’s oldest applications into a modern,
            responsive Angular application`,
            `Collaborate with non-technical colleagues
            and UI/UX to streamline development in a fully remote setting`,
            `Create and
            instruct training workshops for peers`,
            `Perform code review, paired coding,
            & mentor peers in an agile environment`,
          ],
        },
      },
    ],
  },
  {
    header: 'other experience',
    content: [
      {
        jobTitle: 'Resource Analyst II',
        moreInfo: {
          title: 'Alfa Insurance',
          date: 'SEP 2014 - FEB 2019',
          details: [
            `Assisted company representatives with software related issues
            across a variety of web and mobile applications`,
            `Provided technical assistance for customer-facing applications, as
            well as additional support for regular call-center operations`,
            `Leveraged expansive knowledge of best practices to train new
            employees and create training documents`,
          ],
        },
      },
      {
        jobTitle: 'Internet Sales Consultant',
        moreInfo: {
          title: 'Capitol Hyundai',
          date: 'FEB 2014 - SEP 2014',
          details: [
            `Created promotional events at various locations to generate new
            sales leads`,
            `Automated tasks such as e-mail blasts for the company`,
            `Communicated
            both remotely and in-person with clients`,
          ],
        },
      },
      {
        jobTitle: 'Writing in the Disciplines Intern',
        moreInfo: {
          title: 'Auburn University Montgomery',
          date: 'AUG 2012 - MAY 2013',
          details: [
            `Tutored undergraduate students taking APA writing-intensive
            classes`,
            `Trained students in core educational skills
            such as time management`,
            `Led APA style workshops and provided content 
            for the department website`,
            `Worked independently, scheduling appointments 
            with students and professors as needed`,
          ],
        },
      },
      {
        jobTitle: 'Psychological Operations Specialist',
        moreInfo: {
          title: 'US Army',
          date: 'JUL 2002 - JUL 2006',
          details: [
            `Operated and evaluated a prototype remotely piloted aircraft
            system`,
            `Conducted target audience analysis and synthesized gathered
            information into reports`,
            `Designed, created, and disseminated print and radio media`,
            `Exercised a lot`,
            `Cleaned things that didn't need cleaning`,
          ],
        },
      },
      {
        jobTitle: 'Bartender || Bar Manager',
        moreInfo: {
          title: 'Various Locations',
          date: 'JUL 2006 - FEB 2014',
          details: [
            `Mixed drinks`,
            `Planned events such as concerts`,
            `Ruined my sleep schedule`,
            `Inhaled second-hand smoke`,
            `Listened to the life stories of strangers`,
            `Pointed out people for the bouncers to remove`,
            `Sometimes removed people by myself because security is tOo EXpeNsIve`,
            `Realized I didn't want to do this forever and paid my way through college`,
            `Goofed and got a degree in psychology`,
          ],
        },
      },
    ],
  },
  {
    header: 'education',
    content: [
      {
        jobTitle: 'Fullstack Programming',
        moreInfo: {
          title: 'Byte Academy - Houston, TX',
          date: 'JUL 2019 - NOV 2019',
          details: [
            `Studied Python, Django, and various libraries like NumPy, TensorFlow, and Pandas`,
            `Created fullstack applications using Django and React`,
            `Passed all evaluations in one attempt`,
            `Placed second at Climathon 2019 in Houston, TX`,
            `Attended Developer Week in Austin, TX`,
          ],
        },
      },
      {
        jobTitle: 'BS in Psychology',
        moreInfo: {
          title: 'Auburn University Montgomery',
          date: 'JAN 2010 - MAY 2013',
          details: [
            `3.9 GPA`,
            `Psychology Student Marshall`,
            `Student of the Year`,
          ],
        },
      },
      {
        jobTitle: 'Korean Language and Culture',
        moreInfo: {
          title: 'Special Warfare Center',
          date: 'MAY 2003 - NOV 2003',
          details: [
            `Studied Korean five days a week, eight or more hours a day`,
            `Traveled to Korea and realized I spoke like a toddler`,
          ],
        },
      },
    ],
  },
];
