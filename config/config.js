
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Toye",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Links",
      link: "/links",
    }
  ],
}
export const intro = {
  title: "Hi, I'm Toye",
  description: "A backend developer, cloud and security engineer.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "mailto:afolabiolatoye@gmail.com",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/1eijqIrVkonL4QaApv5bxnXsUxoGxg1IKwb0zV6U-Km4/edit?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I have a Bachelor's degree in Electrical & Electronic Engineering and a Masters degree in Information Technology with Cybersecurity. I kickstarted my professional career as an IT Support specialist working for a UK based security company and currently work remotely as a Technical Specialist for an Australian Software company helping charities with their digital needs.",
    "The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech.",
    "When I’m not programming or helping charities, I focus on my hobbies: security and AI research, football, physics, meeting people and growing my network.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Back End Development",
      description: "I create the backend infrastructure for web and mobile apps.",
      icons: null,
    },
    {
      title: "Cloud Engineering",
      description: "I create and adminster cloud infrastructures with a focus on data engineering and security.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "StarBook",
      description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
        },
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/star_book",
        },
      ]
    },
    {
      title: "QuranTalk",
      description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
        },
        {
          icon: faGooglePlay,
          link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
        },
      ]
    },
    {
      title: "Portfolio",
      description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/portfolio",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  cards: [
    {
      title: "Master of Science",
    description: "Information Technology with Cybersecurity | 2022"
    },
    {
      title: "Bachelor of Engineering",
      description: "Electrical & Electronics | 2018"
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      description: "Amazon Web Services | 2023"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      description: "Amazon Web Services | 2022"
    },
    {
      title: "Google Cybersecurity Certificate",
      description: "Coursera | 2023"
    },
    {
      title: "Google IT Support Certificate",
      description: "Coursera | 2023"
    }
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Toye Afolabi | Software Engineer | AWS | Azure ",
  description: "I build application backend systems for web and mobile apps integrating cloud services with a focus on security.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@toyeafo",
  description: "Back End Developer | AWS | Azure",
  cards: [
    {
      title: "My website",
      link: "https://toye.github.io/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/toyeafo/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/toye-afolabi/",
    },
  ]
}