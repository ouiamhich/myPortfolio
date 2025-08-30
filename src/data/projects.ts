import { getImagePath, IMAGE_PATHS } from '../config/images';

export interface ProjectData {
  id: string;
  title: string;
  detailedDescription: string;
  tags: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  logo?: string;
  screenshots?: string[];
  features: {
    title?: string;
    description: string;
    icon: string;
  }[];
  status: 'completed' | 'in-progress' | 'concept';
  year: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "icards",
    title: "iCards",
    detailedDescription: "Contributed to the front-end development of iCards Portal, an NFC-enabled digital business card platform with features like profile customization, contact sharing, and analytics tracking.",
    tags: ["React", "TS", "Spring boot", "Keycloak", "i18n"],
    imageUrl: getImagePath(IMAGE_PATHS.HEROES.ICARDS),
    projectUrl: "https://portal.icards.link/",
    featured: true,
    logo: getImagePath(IMAGE_PATHS.LOGOS.ICARDS),
    features: [
      {
        title: "NFC Tap-to-Share : ",
        description: "Instantly share your contact details by tapping your card on any smartphone.",
        icon: "users"
      },
      {
        title: "Custom Card Designs : ",
        description: "Order personalized cards with your logo and preferred material.",
        icon: "calendar"
      },
      {
        title: "Digital Profile : ",
        description: "Add profile details, wallet-ready digital ID, contact details, company info, and social media links — all in one place.",
        icon: "bar-chart"
      },
      {
        title: "Real-Time Analytics : ",
        description: "Track profile views, card taps, and link clicks with an integrated analytics dashboard.",
        icon: "message-circle"
      },
    ],
    status: "in-progress",
    year: "2024-2025"
  },
  {
  id: "organitz-mobile",
  title: "Organitz Mobile App",
  detailedDescription: "Organitz is a streamlined mobile app tailored for SMEs—built by Swiss businesses for Swiss and international service providers. It offers intuitive tools to manage clients, track time, report expenses, and generate invoices—all from the palm of your hand.",
  tags: ["React native", "TS", "Expo","PHP"],
  imageUrl: getImagePath(IMAGE_PATHS.HEROES.ORGANITZ_MOBILE),
  projectUrl: "https://play.google.com/store/apps/details?id=com.cogify.Organitz&hl=en-US&pli=1",
  features: [
    {
      title: "Customer & Project Tracking",
      description: "Create and manage customers, projects, and activities with clarity and transparency.",
      icon: "users"
    },
    {
      title: "Expense Reporting",
      description: "Easily log expenses with receipt upload and integrated sign-off workflow.",
      icon: "file-invoice-dollar"
    },
    {
      title: "Invoicing",
      description: "Generate and track invoices automatically based on time entries and billable expenses.",
      icon: "file-invoice"
    },
    {
      title: "Time Tracking",
      description: "Track your working hours intuitively—via entries or stopwatch—for accurate billing.",
      icon: "clock"
    }
  ],
  status: "completed",
  year: "2025"
},

  {
    id: "ingenitiv",
    title: "inGenitiv",
    detailedDescription: "Marketing website for Ingenitiv, a Swiss IT and digital transformation company, focusing on responsive design, SEO optimization, and modern performance standards.",
    tags: ["Next js", "tailwind css","TS", "i18n"],
    imageUrl: getImagePath(IMAGE_PATHS.HEROES.INGENITIV),
    projectUrl: "https://ingenitiv.com/en",
    features: [
      {
        description: "Building key sections based on Figma designs",
        icon: "map-pin"
      },
      {
        description: "Implementing responsive layouts for desktop and mobile",
        icon: "route"
      },
      {
        description: "Ensuring SEO best practices ",
        icon: "trophy"
      },
      {
        description: "Implementing internationalization (i18n) ",
        icon: "trophy"
      }
    ],
    status: "in-progress",
    year: "2025"
  }
];
