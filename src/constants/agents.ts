export interface AgentLogo {
  id: number;
  name: string;
  type: string;
  status: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  features: string[];
  tech: string[];
  metrics: {
    latency: string;
    accuracy: string;
  };
}

export const NAV_LINKS = [
  { name: "Solutions", href: "/" },
  { name: "Agents", href: "/agents" },
  { name: "Network", href: "/#network" },
  { name: "Contact", href: "/#contact" },
];

export const CLIENT_LOGOS: AgentLogo[] = [
  { 
    id: 1, 
    name: "ATS Resume Score Checker", 
    type: "ATS_MODULE", 
    status: "READY",
    description: "AI-powered resume analysis designed to evaluate candidates against job descriptions.",
    longDescription: "An AI-powered resume analysis tool designed to evaluate resumes against specific job descriptions. The system extracts resume content using NLP and machine learning models, compares it with the job requirements, and generates an ATS compatibility score for candidate shortlisting.\n\nUnlike most market tools with usage limitations, this solution supports bulk processing of up to 50 resumes simultaneously with unlimited usage capability. The platform helps recruiters speed up screening while improving candidate-job matching accuracy.",
    imageUrl: "/ats-score.png",
    features: [
      "AI-based resume parsing and keyword extraction",
      "Job description matching and ATS scoring",
      "Bulk resume processing (up to 50 resumes at once)",
      "Candidate shortlisting support",
      "Unlimited resume evaluations",
      "Streamlit-based rapid deployment interface"
    ],
    tech: ["Python", "Machine Learning Models", "NLP", "Streamlit", "Resume Parsing Libraries"],
    metrics: { latency: "15ms", accuracy: "99.2%" }
  },
  { 
    id: 2, 
    name: "Interview Scheduling Automation", 
    type: "WORKFLOW_X", 
    status: "READY",
    description: "Automated coordination workflow to streamline the hiring process.",
    longDescription: "An automated interview coordination workflow built to streamline the hiring process. The system manages interview scheduling using candidate details, interviewer information, interview status tracking, and calendar integrations.\n\nThe workflow automates interview invitations, reminder emails, status updates, rejection handling, and calendar meeting creation, reducing manual coordination efforts for HR teams.",
    imageUrl: "/interview-scheduling.png",
    features: [
      "Automated interview scheduling",
      "Calendar meeting creation",
      "Candidate and interviewer coordination",
      "Status tracking and updates",
      "Automated email notifications",
      "Rejection and follow-up handling"
    ],
    tech: ["Make.com", "Email Automation", "Calendar Integrations", "Workflow Automation Tools"],
    metrics: { latency: "08ms", accuracy: "100%" }
  },
  { 
    id: 3, 
    name: "SEO Analyzer Workflow", 
    type: "SEO_SYNC", 
    status: "READY",
    description: "AI-assisted audit of webpage metadata and content recommendations.",
    longDescription: "An AI-assisted SEO analysis workflow designed to audit webpage metadata and generate optimized content recommendations. The workflow scrapes webpage HTML content, extracts metadata, analyzes keywords, and provides SEO improvement suggestions.\n\nUsing AI agents, the system rewrites meta descriptions, alt text, and content ideas based on market keyword analysis, helping improve search engine visibility and content structure.",
    imageUrl: "/AI-SEO.png",
    features: [
      "Webpage metadata extraction",
      "HTML and doctype analysis",
      "SEO keyword analysis",
      "AI-generated meta descriptions",
      "Alt text optimization",
      "Content recommendation generation"
    ],
    tech: ["Make.com", "HTTP API Requests", "Web Scraping", "Anthropic Claude AI"],
    metrics: { latency: "22ms", accuracy: "99.5%" }
  },
  { 
    id: 4, 
    name: "AI Blog Generator Workflow", 
    type: "CONTENT_GEN", 
    status: "READY",
    description: "Automated content generation for creating SEO-optimized blogs at scale.",
    longDescription: "An automated content generation workflow designed for creating SEO-optimized blogs at scale. The workflow integrates with Google Sheets for content tracking and Google Drive for automated document storage and management.\n\nAI agents generate structured blog content, optimize it for SEO, create PDF versions, and automatically upload the generated files into Google Drive while maintaining tracking records.",
    imageUrl: "/Blog-generator.png",
    features: [
      "AI-generated SEO blogs",
      "Automated blog tracking",
      "Google Sheets integration",
      "Google Drive document storage",
      "PDF generation",
      "Content workflow automation"
    ],
    tech: ["Make.com", "Anthropic Claude AI", "Google Sheets API", "Google Drive API"],
    metrics: { latency: "45ms", accuracy: "98.8%" }
  },
  { 
    id: 5, 
    name: "Lead Qualification & Reply Automation", 
    type: "LEAD_SYNC", 
    status: "READY",
    description: "Intelligent lead management designed to qualify and respond to leads.",
    longDescription: "An intelligent lead management workflow designed to analyze website form submissions and automate lead qualification. The system evaluates user inputs against company knowledge documents using a RAG-based approach to determine qualified and non-qualified leads.\n\nBased on the analysis, personalized responses are automatically generated and sent to users. The workflow also stores lead data in Google Sheets for CRM tracking and notifies internal teams about new submissions.",
    imageUrl: "/custom-reply.png",
    features: [
      "Automated lead qualification",
      "AI-based response generation",
      "RAG-powered document understanding",
      "CRM data storage",
      "Team notification automation",
      "Personalized customer replies"
    ],
    tech: ["Make.com", "RAG", "Anthropic Claude AI", "Google Sheets", "Email Automation"],
    metrics: { latency: "12ms", accuracy: "99.7%" }
  },
  { 
    id: 6, 
    name: "Maple HRMS Framework", 
    type: "HRMS_CORE", 
    status: "READY",
    description: "AI-enabled framework to simplify recruitment and interview management.",
    longDescription: "An AI-enabled HRMS framework designed to simplify recruitment and interview management workflows for non-technical users. The platform combines ATS resume analysis, interview scheduling automation, and HR workflow management into a single structured system.\n\nThe framework focuses on usability with custom-coded modules and simplified interfaces, making AI-powered hiring tools more accessible for HR teams.",
    imageUrl: "/mapleHrms.png",
    features: [
      "AI-powered resume scoring",
      "Interview scheduling management",
      "HR workflow automation",
      "User-friendly interface for non-technical teams",
      "Integrated hiring pipeline",
      "Centralized recruitment management"
    ],
    tech: ["Custom Code Framework", "AI Resume Analysis", "HRMS Architecture", "Frontend & Backend Integrations"],
    metrics: { latency: "10ms", accuracy: "99.9%" }
  },
];

export const TOOLS = [
  { 
    name: "Framer", 
    role: "Website Builder", 
    logoUrl: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" 
  },
  { 
    name: "Figma", 
    role: "Design Tool", 
    logoUrl: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" 
  },
  { 
    name: "Lemon Squeezy", 
    role: "Payments Provider", 
    logoUrl: "https://www.vectorlogo.zone/logos/lemonsqueezy/lemonsqueezy-icon.svg" 
  },
  { 
    name: "ChatGPT", 
    role: "AI Assistant", 
    logoUrl: "https://www.vectorlogo.zone/logos/openai/openai-icon.svg" 
  },
  { 
    name: "Notion", 
    role: "Productivity Tool", 
    logoUrl: "https://www.vectorlogo.zone/logos/notion/notion-icon.svg" 
  },
  { 
    name: "Nextjs", 
    role: "React framework", 
    logoUrl: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" 
  },
];
