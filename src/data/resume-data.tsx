import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Serdar ŞEN",
  initials: "SŞ",
  location: "Didim, Aydın, Turkey, GMT+3",
  locationLink: "https://www.google.com/maps/place/Didim",
  about:
    "Full Stack Developer creating precise, detail-oriented products through collaboration and by meeting your requirements",
  summary:
    "Full Stack Developer adept at resolving complex issues, enhancing products, and mentoring. Specializes in React, Next.js, JavaScript, TypeScript, Java, Spring Framework, Spring Boot, and PostgreSQL. Proficient in React (3+ yrs) and Java (3+ yrs), with 3+ years of remote work expertise. Open to learning AWS, Cloud, Security, Next.js, Angular, Vue.js, Node.js.",
  avatarUrl: "https://avatars.githubusercontent.com/u/26231317?v=4",
  personalWebsiteUrl: "https://serdarsen.com",
  contact: {
    email: "serdarsendev@gmail.com",
    tel: "+905453748793",
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
      school: "ADU",
      degree: "Bachelor's Degree in CEIT, GPA: 3.48/4.0 ",
      start: "09/2013",
      end: "06/2017",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Context API", 
    "Redux Toolkit", 
    "Zustand",
    "Tailwind CSS",
    "Shadcn UI", 
    "SCSS", 
    "Antd", 
    "Bootstrap",
    "Webpack", 
    "Vite",
    "Npm", 
    "Pnpm", 
    "Yarn",
    "Java", 
    "Spring Framework",
    "Spring Boot",
    "JSON", 
    "Git", 
    "Jira",
    "Hibernate",
    "PostgreSQL"
  ],
  work: [
    {
      company: "Self",
      link: "",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: "",
      start: "01/2023",
      end: "Present",
      description:
        "Self-Development: Attained certifications in Web Development and English Proficiency. Contributed to open-source projects. Exploring a diverse range of technologies.",
    },
    {
      company: "Hubtic",
      link: "https://www.linkedin.com/company/hubticde/",
      badges: ["Remote"],
      title: "Front End Developer",
      logo: "",
      start: "10/2022",
      end: "01/2023",
      description:
        "Logistics Management Web Application: Enhanced codebase stability by upgrading dependencies and implementations. Collaborated on the frontend development using Vite, React, TypeScript, Redux Toolkit, Eslint, Tailwind CSS, Yarn, and Ant Design for logistics operations managers. Implemented features within the planned timeline, ensuring efficient teamwork.",
    },
    {
      company: "Kron",
      link: "https://www.linkedin.com/company/kront/",
      badges: ["Hybrid"],
      title: "Full Stack Developer",
      logo: "",
      start: "09/2019",
      end: "04/2022",
      description:
        "Servers Management Web Application: Improved user-friendliness by implementing intuitive navigation, simplifying complex processes, and enhancing the overall user interface. Engaged in full-stack development with React, JavaScript, TypeScript, Bootstrap, SCSS, Java, Hibernate, Spring Boot, PostgreSQL for IT system servers administrators. Executed feature implementations both independently and collaboratively within the team, actively participating in regular Scrum meetings for efficient progress and coordination.",
    },
    {
      company: "Parknet",
      link: "",
      badges: ["On-site"],
      title: "Full Stack Developer",
      logo: "",
      start: "10/2018",
      end: "09/2019",
      description: "Product Management Web Application: Created .Net Core Rest APIs, wrote unit tests.",
    },
    {
      company: "Turkcell Academy",
      link: "https://gelecegiyazanlar.turkcell.com.tr/",
      badges: ["Hybrid"],
      title: "Mobile Application Development Instructor",
      logo: "",
      start: "06/2017",
      end: "08/2017",
      description: "Turkcell Geleceği Yazanlar Events: Volunteered as a mobile application development instructor.",
    },
    {
      company: "Freelance",
      link: "",
      badges: ["Remote"],
      title: "Mobile Application Developer",
      logo: "",
      start: "06/2017",
      end: "10/2017",
      description: "Mobile Applications: Executed mobile application developments using Java and Android SDK.",
    },
  ],
  projects: [
    {
      title: "CV",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI"
      ],
      description: "Print-friendly, minimalist CV page",
      logo: "",
      link: {
        label: "cv.serdarsen.com",
        href: "https://cv.serdarsen.com/",
      },
    },
    {
      title: "Single Monitor",
      techStack: [
        "Full Stack Developer",
        "JavaScript",
        "React",
        "Java",
        "PostgreSQL",
      ],
      description:
        "A Kron product to monitor and manage IT infrastructure",
      logo: "",
      link: {
        label: "krontech.com/en/traffic-analyzer-product-family",
        href: "https://krontech.com/en/traffic-analyzer-product-family",
      },
    }
  ],
} as const;
