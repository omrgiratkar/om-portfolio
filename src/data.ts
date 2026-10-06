// Single source of truth — all content comes from the resume.
export const profile = {
  name: 'Om Giratkar', first: 'Om', last: 'Giratkar', title: 'Java Full Stack Developer',
  location: 'Pune, Maharashtra, India', email: 'omrgiratkar@gmail.com', phone: '+91 7720845031',
  github: 'https://github.com/omrgiratkar', linkedin: 'https://linkedin.com/in/om-giratkar',
  intro: 'Computer Engineering graduate with a strong foundation in full-stack web development across Java/Spring Boot and the MERN stack. AWS Cloud Practitioner certified, building reliable, scalable, end-to-end web applications.',
}
export const about = [
  ['Background', 'B.E. in Computer Engineering, Savitribai Phule Pune University (2021–2025), now completing the PGCP-AC Diploma in Advanced Computing at CDAC Hyderabad.'],
  ['Focus', 'Java/Spring Boot services and MERN applications: RESTful APIs, responsive front-ends and secure backends on MySQL, MongoDB and PostgreSQL.'],
  ['Practices', 'JWT authentication, role-based access control, unit testing, Git-based collaboration, code reviews, Agile/Scrum and OOP design principles.'],
  ['Direction', 'Eager to contribute as a Java Full Stack Developer building reliable, scalable, end-to-end web applications.'],
]
export const experience = [
  { dates: 'Aug 2026 – Sep 2026', role: 'Full Stack Development Intern', company: 'Cognifyz Technologies',
    points: ['Completed a full-stack internship spanning beginner-to-expert tasks, building a Node.js/Express application with EJS server-side rendering, RESTful CRUD APIs, MongoDB integration, and JWT-based authentication with authorization checks on protected endpoints.',
      'Implemented client- and server-side form validation, dynamic DOM manipulation and client-side routing, and extended the app with custom middleware, external API integration (OAuth) and server-side caching to improve performance and reliability.'],
    tags: ['Node.js', 'Express.js', 'EJS', 'MongoDB', 'JWT', 'OAuth'] },
  { dates: 'Oct 2024 – Mar 2025', role: 'Software Trainee', company: 'The Kiran Academy',
    points: ['Built backend services and REST APIs for a full-stack Event Management System (Java stack), enabling real-time data synchronization between client and server.',
      'Implemented authentication and role-based access control (Admin, Organizer, User) following secure coding practices for registration and management workflows.',
      'Participated in peer code reviews and iterative feature refinement, and built interactive dashboards (Recharts) to visualize service usage and engagement metrics.'],
    tags: ['Java', 'REST APIs', 'RBAC', 'Recharts'] },
]
export const projects = [
  { kind: 'Full-stack · Java', name: 'ExpenseIQ — Personal Finance Management Platform',
    summary: 'A full-stack finance management service built with Java, Spring Boot 3, Spring Security and JWT, exposing REST APIs consumed by a React/Vite frontend and backed by MySQL.',
    detail: 'I designed and built the service, integrating Cloudinary for cloud-based image storage, Apache POI and iText for data export, and a scheduled background job for automated email reminders, with a focus on reliability and maintainability. I applied secure-by-design practices (authentication, authorization, input validation) and structured the codebase for testability and clean separation of concerns.',
    tags: ['Spring Boot 3', 'Spring Security', 'JWT', 'React/Vite', 'MySQL', 'Cloudinary', 'Apache POI / iText'] },
  { kind: 'MERN Stack', name: 'Personal Portfolio Website',
    summary: 'A fully responsive personal portfolio built with React.js, Node.js and Express.js, featuring dynamic pages, real-time form validation and smooth page transitions powered by Framer Motion.',
    detail: 'I designed a mobile-first, responsive UI with Tailwind CSS, aiming for consistent performance and accessibility across devices.',
    tags: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Framer Motion'] },
]
export const skills: Record<string, string[]> = {
  Languages: ['Java', 'JavaScript (ES6+)', 'C'],
  Frontend: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'Responsive / Mobile-First'],
  'Backend & APIs': ['Spring Boot', 'Hibernate', 'Node.js', 'Express.js', 'RESTful API Design', 'JWT Authentication'],
  Databases: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQL'],
  'Cloud & Tools': ['AWS Cloud Practitioner (Certified)', 'Git/GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman'],
  'Engineering Practices': ['SDLC', 'Agile/Scrum', 'OOP Design Principles', 'Unit Testing & Debugging', 'Code Reviews'],
}
export const education = [
  { dates: 'Feb 2026 – Aug 2026', title: 'PGCP-AC, Diploma in Advance Computing', sub: 'CDAC Hyderabad' },
  { dates: 'Dec 2021 – Jun 2025', title: 'B.E., Computer Engineering', sub: 'Savitribai Phule Pune University · GPA 7.21' },
]
export const certifications = ['AWS Cloud Practitioner Essentials — Amazon Web Services', 'Java — LinkedIn Learning', 'Frontend Technology — Udemy']
export const navItems = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact']
