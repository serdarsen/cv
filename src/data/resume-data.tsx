import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Serdar ŞEN",
  initials: "SŞ",
  location: "Cincinnati, OHIO",
  locationLink: "https://www.google.com/maps/place/Cincinnati",
  about:
    "Software Developer | MSIT@UC | React | Java | Angular | C# | Python | JSON | PostgreSQL | MongoDB | Tailwind CSS | SCSS | REST | JavaScript | TypeScript",
  summary:
    "Results-driven **Software Developer** with expertise in **Java, C#, Python, JavaScript, and TypeScript**, specializing in backend, frontend, and database optimization. Experienced in developing scalable web and mobile applications using frameworks like **React, Angular, .NET Core, and Spring Boot**. Proven ability to enhance codebase stability, security, and performance, achieving measurable improvements such as a **20% increase in application efficiency and a 80% boost in report readability**. Passionate about mentoring, open-source contributions, and delivering user-centric solutions.",
  avatarUrl: "https://avatars.githubusercontent.com/u/26231317?v=4",
  personalWebsiteUrl: "https://serdarsen.com",
  contact: {
    email: "serdarsendev@gmail.com",
    tel: "+105134883854",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/serdarsen",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/serdarsen/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/serdarsendev",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Cincinnati, School of Information Technology, Ohio",
      degree: "Master's Degree: Master of Science: Information Technology",
      grade: "GPA: 3.9 / 4.0",
      date: "Expected Graduation: December 2025",
    },
    {
      school: "Adnan Menderes University, College of Education, Turkey",
      degree: "Bachelor's Degree: Bachelor of Computer Education and Instructional Technology",
      grade: "GPA: 3.4 / 4.0",
      date: "September 2013 - June 2017"
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      skills: [
        "Java", "C#", "Python", "JavaScript", "TypeScript", "Spring Boot", ".Net Core", "JSON"
      ]
    },
    {
      category: "Software",
      skills: [
        "Discord", "Slack", "Visual Studio Code", "IntelliJ IDEA", "GitHub", "Gitlab", "JIRA"
      ]
    },
    {
      category: "Design Frameworks",
      skills: [
        "React", "Redux", "Vite", "Angular", "Figma", "Tailwind CSS", "SCSS", "DOM", "HTML", "Bootstrap", "Ant Design", "UI", "UX"
      ]
    },
    {
      category: "Project Management",
      skills: [
        "Agile", "Scrum", "QA Testing", "Git", "Webpack", "Npm", "Pnpm", "Yarn", "Eslint", "Prettier", "Documentation", "Deployment"
      ]
    },
    {
      category: "Databases",
      skills: [
        "PostgreSQL", "MongoDB"
      ]
    },
    {
      category: "Operating Systems",
      skills: [
        "MacOS", "Ubuntu", "Kali", "Windows"
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        "Communication", "Teamwork", "Problem-solving"
      ]
    }
  ],
  certifications: [
    "English Proficiency | Duolingo | August 2023",
    "The Nuts and Bolts of OAuth 2.0 | Udemy | July 2023",
    "Advanced React | Coursera | March 2023",
    "Programming with JavaScript | Coursera | August 2022",
    "React: Design Patterns | LinkedIn | 2022",
    "Design Patterns in Java | Pluralsight | August 2020",
    "Encapsulation and SOLID | Pluralsight | August 2020",
    "SOLID Software Design Principles in Java | Pluralsight | August 2020"
  ],
  work: [
    {
      company: "Myliba",
      link: "https://www.linkedin.com/company/myliba/",
      badges: ["Turkey"],
      title: "Software Developer",
      logo: "",
      date: "February 2024 - August 2024",
      items: [
        "Collaborated as a team member on an object-key-result management system, contributing to backend, frontend, and database optimization using Angular, Tailwind CSS, SCSS, C#, .Net Core, and MongoDB.",
        "Increased **authentication security by 20%** by resolving identified vulnerabilities.",
        "Developed an audit log feature improving **customer engagement by 80%.**"
      ]
    },
    {
      company: "Hubtic",
      link: "https://www.linkedin.com/company/hubticde/",
      badges: ["Turkey"],
      title: "Software Developer",
      logo: "",
      date: "October 2022 - January 2023",
      items: [
        "Collaborated as a team member on a logistics management system, contributing to frontend using React, Redux, TypeScript, and Tailwind CSS.",
        "Enhanced **codebase stability by 20%** through upgrading and optimizing dependencies.",
        "Improved the invoice report system through UI and API optimization."
      ]
    },
    {
      company: "Krontech",
      link: "https://www.linkedin.com/company/krontech/",
      badges: ["Turkey"],
      title: "Software Developer",
      logo: "",
      date: "September 2019 - April 2022",
      items: [
        "Collaborated as a team member on a server management system, contributing to backend, frontend, and database optimization using React, SCSS, Java, Spring Boot, REST, JSON, and PostgreSQL.",
        "Enhanced application **efficiency by 20%** by fixing and refactoring redundant code elements.",
        "Optimized the server status report system, enhancing both the codebase and report **readability by 80%**.",
        "Debugged and enhanced the project, resolving issues and reducing **JIRA tickets by 60%**.",
        "**Mentored** new team members by teaching programming fundamentals and sharing business expertise."
      ]
    },
    {
      company: "Parknet",
      link: "",
      badges: ["Turkey"],
      title: "Software Developer",
      logo: "",
      date: "October 2018 - September 2019",
      description: "Product Management Web Application: Created .Net Core Rest APIs, wrote unit tests.",
      items: [
        "Collaborated as a team member on a product management system, contributing to backend, frontend, and database optimization using C#, .Net Core, and JavaScript.",
        "Developed unit tests, increasing **test coverage by 50%**.",
        "**Mentored** new team members to adapt to a fast-paced development environment."
      ]
    }
  ],
  projects: [
    {
      title: "Myliba",
      techStack: [
        "Angular",
        "Tailwind CSS",
        "SCSS",
        "C#",
        ".Net Core",
        "MongoDB"
      ],
      description:
        "OKR and company culture platform that combines all performance operations",
      logo: "",
      link: {
        label: "myliba.com",
        href: "https://www.myliba.com/",
      },
    },
    {
      title: "Hubtic",
      techStack: [
        "TypeScript",
        "React",
        "Redux Toolkit",
        "Tailwind CSS",
      ],
      description:
        "Integrated platform that combines all logistics operations",
      logo: "",
      link: {
        label: "hubtic.com",
        href: "https://www.hubtic.com/",
      },
    },
    {
      title: "Single Monitor",
      techStack: [
        "TypeScript",
        "JavaScript",
        "React",
        "Java",
        "PostgreSQL",
        "Spring Boot",
      ],
      description:
        "Product to monitor and manage IT infrastructure",
      logo: "",
      link: {
        label: "krontech.com/en/traffic-analyzer-product-family",
        href: "https://krontech.com/en/traffic-analyzer-product-family",
      },
    },
    {
      title: "Portfolio",
      techStack: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI"
      ],
      description: "Minimalist portfolio site",
      logo: "",
      link: {
        label: "serdarsen.com",
        href: "https://www.serdarsen.com/",
      },
    },
    {
      title: "Resume",
      techStack: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI"
      ],
      description: "Print-friendly, minimalist resume site",
      logo: "",
      link: {
        label: "cv.serdarsen.com",
        href: "https://cv.serdarsen.com/",
      },
    }
  ],
} as const;
