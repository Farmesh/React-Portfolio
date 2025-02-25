import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Expense Tracker",
    image: "https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    secondaryImage: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A comprehensive expense tracking application with features like budget management, category-wise expense analysis, and visual reports. Users can track daily expenses, set budgets, and view spending patterns through interactive charts.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Redux"],
    link: "https://github.com/Farmesh/Expense-Tracker",
    demoLink: "https://expense-tracker-farmesh.netlify.app/"
  },
  {
    title: "E-Commerce Website",
    image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    secondaryImage: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication. Built with React, Node.js, and MongoDB.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/Farmesh/E-Commerce-Project",
    demoLink: "https://e-commerce-farmesh.netlify.app/"
  },
  {
    title: "Nearby BusStation & PetrolPump Finder",
    image: "https://images.pexels.com/photos/744462/pexels-photo-744462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    secondaryImage: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "An application for tracking nearby Bus Stands and PetrolPumps within 2-3Km using Google Maps API. Features real-time location updates and route planning.",
    technologies: ["React", "Google Maps API", "Node.js", "MongoDB"],
    link: "https://github.com/Farmesh/BusStation-PetrolPump-Finder",
    demoLink: "https://location-finder-farmesh.netlify.app/"
  },
  {
    title: "Portfolio Website",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    secondaryImage: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A modern portfolio website showcasing projects and skills. Features smooth animations, dark mode, and responsive design.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/Farmesh/Portfolio-2024",
    demoLink: "https://farmesh.netlify.app/"
  },
  {
    title: "Task Management Dashboard",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    secondaryImage: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A comprehensive task management system with real-time updates, team collaboration features, and progress tracking.",
    technologies: ["React", "Firebase", "Material UI", "Redux"],
    link: "https://github.com/Farmesh/Task-Management-System",
    demoLink: "https://task-manager-farmesh.netlify.app/"
  },
  {
    title: "AI-Powered Chat Application",
    image: "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    secondaryImage: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A modern chat application with AI-powered features like smart replies, sentiment analysis, and language translation.",
    technologies: ["React", "Node.js", "Socket.io", "OpenAI API"],
    link: "https://github.com/Farmesh/AI-Chat-App",
    demoLink: "https://ai-chat-farmesh.netlify.app/"
  }
];

export const CONTACT = {
  address: "Chandigarh ,Sec 22C , 2615 , 160022 ",
  phoneNo: "+91 7876602243",
  email: "thakurfarmesh123@gmail.com",
};

export const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "Senior Software Engineer at Microsoft India",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    testimonial: "Farmesh is an exceptional developer with a keen eye for detail. His work on our collaborative project demonstrated strong technical skills and innovative problem-solving abilities.",
    company: "Microsoft"
  },
  {
    name: "Priya Patel",
    role: "Tech Lead at Infosys",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=300",
    testimonial: "Working with Farmesh was a great experience. His expertise in React and Node.js helped us deliver a complex project ahead of schedule. His communication skills and dedication are commendable.",
    company: "Infosys"
  },
  {
    name: "Amit Kumar",
    role: "Full Stack Developer at TCS",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
    testimonial: "Farmesh's ability to quickly grasp complex requirements and turn them into elegant solutions is impressive. His work on our e-commerce platform showcased his full-stack development capabilities.",
    company: "TCS"
  },
  {
    name: "Neha Gupta",
    role: "Product Manager at Wipro",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300",
    testimonial: "I had the pleasure of managing Farmesh on a critical project. His technical acumen combined with his ability to understand business requirements made him an invaluable team member.",
    company: "Wipro"
  },
  {
    name: "Rajesh Verma",
    role: "CTO at StartupName",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300",
    testimonial: "Farmesh's contribution to our startup was significant. His expertise in modern web technologies and commitment to quality code helped us build a robust and scalable platform.",
    company: "TechStartup India"
  }
];
