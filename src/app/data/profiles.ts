export type ProfileType = 'FULL_STACK' | 'DATA_ANALYTICS' | 'SERVICENOW';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  sourceUrl?: string;
  liveUrl?: string;
}

export interface ProfileData {
  id: ProfileType;
  label: string;
  role: string;
  heroCode: string;
  projects: Project[];
  stack: string[];
  resumeUrl: string;
  achievements?: {
    label: string;
    value: string;
    color: string;
    glow: string;
  }[];
}

export const profiles: Record<ProfileType, ProfileData> = {
  FULL_STACK: {
    id: 'FULL_STACK',
    label: 'Full Stack',
    role: 'Full Stack Developer',
    heroCode: `const engineer = {
  name: "Swayamvarapu Kumara Swamy",
  role: "Full Stack Developer",
  focus: ["Scalable Systems", "Modern Web Apps"],
  skills: ["React", "Next.js", "C", "C++", "Python", "Java", "JavaScript", "TypeScript", "SQL", "MySQL", "PostgreSQL", "MongoDB", "Express.js", "Django", "Node.js", "TailwindCSS", "Html", "Css"],
  status: "OPEN_FOR_OPPORTUNITIES",
  about:"A passionate and detail-oriented Full Stack Developer with a strong foundation in both frontend and backend development. Proficient in building modern, responsive web applications using React, Next.js, and Django. Skilled in database management with SQL and MongoDB, and experienced in creating scalable RESTful APIs with Node.js and Express.js. Always eager to learn new technologies and deliver high-quality, user-centric solutions."
  
};`,
    projects: [
      {
        title: "Student Learning Hub",
        description: "Full-stack educational platform featuring video streaming, notes management, and progress tracking.",
        tags: ["Django", "FastAPI", "PostgreSQL"],
        sourceUrl: "https://github.com/Kumar-s29/Mini_Project",
      },
      {
        title: "Prescripto",
        description: "Doctor appointment system with automated scheduling, real-time updates, and admin dashboard.",
        tags: ["React", "Express", "Node.js", "MongoDB"],
        sourceUrl: "https://github.com/Kumar-s29/Prescripto--Doctor-Appointment-Booking",
      },
      {
        title: "College Fest Website",
        description: "Full-stack event management platform with dynamic pages, ticketing systems, and Supabase integration.",
        tags: ["Next.js", "Supabase", "Tailwind"],
        sourceUrl: "https://github.com/gautamankoji/yuvtarang-web",
      }
    ],
    stack: ["React", "Next.js", "C", "C++", "Python", "Java", "JavaScript", "TypeScript", "SQL", "MySQL", "PostgreSQL", "MongoDB", "Express.js", "Django", "Node.js", "TailwindCSS", "Html", "Css"],
    resumeUrl: "/resumes/fullstack.pdf",
  },
  DATA_ANALYTICS: {
    id: 'DATA_ANALYTICS',
    label: 'Data Analytics',
    role: 'Data & Insights Expert',
    heroCode: `const analyst = {
  name: "Swayamvarapu Kumara Swamy",
  role: "Data & Insights Expert",
  focus: ["Business Intel", "Data Pipelines"],
  tools: ["Power BI", "Excel", "SQL", "Pandas"],
  action: "Transforming data into value"
};`,
    projects: [
      {
        title: "Vendor Performance Analytics",
        description: "Business intelligence dashboard analyzing vendor profitability and inventory efficiency.",
        tags: ["Python", "SQL", "Power BI"],
        sourceUrl: "https://github.com/Kumar-s29/",
      },
      {
        title: "Sales Analysis Dashboard",
        description: "Interactive Excel dashboard identifying top products, cities, and revenue trends.",
        tags: ["Excel", "Pivot Tables", "VBA"],
        sourceUrl: "https://github.com/Kumar-s29/",
      },
      {
        title: "Flight Booking Data Analysis",
        description: "In-depth analysis of booking trends and revenue patterns using SQL optimization and Python.",
        tags: ["PostgreSQL", "Python", "FastAPI"],
        sourceUrl: "https://github.com/Kumar-s29/",
      }
    ],
    stack: ["Power BI", "Excel", "SQL", "Python", "Pandas", "Tableau", "Statistics", "BigQuery"],
    resumeUrl: "/resumes/data_analyst.pdf",
  },
  SERVICENOW: {
    id: 'SERVICENOW',
    label: 'ServiceNow',
    role: 'ServiceNow Architect',
    heroCode: `const dev = {
  name: "Swayamvarapu Kumara Swamy",
  role: "ServiceNow Architect",
  focus: ["Workflow Automation", "ITSM/CAD"],
  certs: ["CSA", "CAD"],
  status: "Optimizing Enterprise Systems"
};`,
    projects: [
      {
        title: "Enterprise ITSM System",
        description: "End-to-end ITSM workflows for incident and service request management.",
        tags: ["ServiceNow", "SLA", "Catalog"],
        sourceUrl: "https://github.com/Kumar-s29/",
      },
      {
        title: "Smart Service Automation",
        description: "ServiceNow Studio app with GlideAjax and Business Rules for backend automation.",
        tags: ["Studio", "JavaScript", "Glide"],
        sourceUrl: "https://github.com/Kumar-s29/",
      },
      {
        title: "Ticket Assignment Streamlining",
        description: "Automated ticket routing system using assignment rules and secure ACL implementations.",
        tags: ["ITSM", "ACL", "Automation"],
        sourceUrl: "https://github.com/Kumar-s29/",
      }
    ],
    stack: ["ServiceNow", "CSA", "CAD", "ITSM", "GlideScript", "IntegrationHub", "ServicePortal", "JavaScript"],
    resumeUrl: "/resumes/servicenow.pdf",
    achievements: [
      {
        label: "Certifications",
        value: "CSA/CAD",
        color: "text-accent-blue",
        glow: "drop-shadow-[0_0_15px_rgba(79,195,247,0.4)]"
      },
      {
        label: "LeetCode Max",
        value: "1765",
        color: "text-accent-amber",
        glow: "drop-shadow-[0_0_15px_rgba(245,166,35,0.4)]"
      },
      {
        label: "CodeChef Max",
        value: "1669",
        color: "text-accent-green",
        glow: "drop-shadow-[0_0_15px_rgba(0,255,136,0.4)]"
      }
    ]
  }
};
