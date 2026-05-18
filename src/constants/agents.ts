// agents.ts

export interface AgentLogo {
  id: number;
  name: string;

  category: string;
  type: string;

  status: string;
  deployment: string;

  description: string;
  longDescription: string;

  imageUrl: string;

  features: string[];
  tech: string[];

  metrics: {
    latency: string;
    accuracy: string;
  };

  overview: {
    objective: string;
    impact: string;
    outcome: string;
    capabilities: string[];
  };
}

export const NAV_LINKS = [
  { name: "Solutions", href: "/" },
  { name: "Agents", href: "/agents" }
];

export const CLIENT_LOGOS: AgentLogo[] = [
  {
    id: 1,
    name: "ATS Resume Score Checker",
    category: "AI Recruitment System",
    type: "ATS_MODULE",
    status: "ACTIVE",
    deployment: "Internal Production",

    description:
      "AI-powered resume analysis designed to evaluate candidates against job descriptions.",

    longDescription:
      "An AI-powered resume analysis tool designed to evaluate resumes against specific job descriptions. The system extracts resume content using NLP and machine learning models, compares it with the job requirements, and generates an ATS compatibility score for candidate shortlisting.\n\nUnlike most market tools with usage limitations, this solution supports bulk processing of up to 50 resumes simultaneously with unlimited usage capability. The platform helps recruiters speed up screening while improving candidate-job matching accuracy.",

    imageUrl: "/ats-score.png",

    features: [
      "AI-based resume parsing and keyword extraction",
      "Job description matching and ATS scoring",
      "Bulk resume processing (up to 50 resumes at once)",
      "Candidate shortlisting support",
      "Unlimited resume evaluations",
      "Streamlit-based rapid deployment interface",
    ],

    tech: [
      "Python",
      "Machine Learning Models",
      "NLP",
      "Streamlit",
      "Resume Parsing Libraries",
    ],

    metrics: {
      latency: "15ms",
      accuracy: "99.2%",
    },

    overview: {
      objective: "Automated Resume Evaluation",
      impact: "50+ Resumes Per Batch",
      outcome:
        "Reduces manual recruitment screening time while improving candidate-job matching accuracy.",

      capabilities: [
        "NLP Parsing",
        "ATS Scoring",
        "JD Matching",
        "Candidate Ranking",
        "Bulk Analysis",
      ],
    },
  },

  {
    id: 2,
    name: "Interview Scheduling Automation",
    category: "Workflow Automation",
    type: "WORKFLOW_X",
    status: "ACTIVE",
    deployment: "Enterprise Workflow",

    description:
      "Automated coordination workflow to streamline the hiring process.",

    longDescription:
      "An automated interview coordination workflow built to streamline the hiring process. The system manages interview scheduling using candidate details, interviewer information, interview status tracking, and calendar integrations.\n\nThe workflow automates interview invitations, reminder emails, status updates, rejection handling, and calendar meeting creation, reducing manual coordination efforts for HR teams.",

    imageUrl: "/interview-scheduling.png",

    features: [
      "Automated interview scheduling",
      "Calendar meeting creation",
      "Candidate and interviewer coordination",
      "Status tracking and updates",
      "Automated email notifications",
      "Rejection and follow-up handling",
    ],

    tech: [
      "Make.com",
      "Email Automation",
      "Calendar Integrations",
      "Workflow Automation Tools",
    ],

    metrics: {
      latency: "08ms",
      accuracy: "100%",
    },

    overview: {
      objective: "Automated Interview Coordination",
      impact: "80% Manual Coordination Reduced",
      outcome:
        "Simplifies hiring workflows by automating scheduling and communication.",

      capabilities: [
        "Calendar Sync",
        "Email Automation",
        "Meeting Creation",
        "Reminder System",
        "Status Tracking",
      ],
    },
  },

  {
    id: 3,
    name: "SEO Analyzer Workflow",
    category: "SEO Automation",
    type: "SEO_SYNC",
    status: "ACTIVE",
    deployment: "AI Content Operations",

    description:
      "AI-assisted audit of webpage metadata and content recommendations.",

    longDescription:
      "An AI-assisted SEO analysis workflow designed to audit webpage metadata and generate optimized content recommendations. The workflow scrapes webpage HTML content, extracts metadata, analyzes keywords, and provides SEO improvement suggestions.\n\nUsing AI agents, the system rewrites meta descriptions, alt text, and content ideas based on market keyword analysis, helping improve search engine visibility and content structure.",

    imageUrl: "/AI-SEO.png",

    features: [
      "Webpage metadata extraction",
      "HTML and doctype analysis",
      "SEO keyword analysis",
      "AI-generated meta descriptions",
      "Alt text optimization",
      "Content recommendation generation",
    ],

    tech: [
      "Make.com",
      "HTTP API Requests",
      "Web Scraping",
      "Anthropic Claude AI",
    ],

    metrics: {
      latency: "22ms",
      accuracy: "99.5%",
    },

    overview: {
      objective: "AI-Powered SEO Optimization",
      impact: "Automated Metadata Analysis",
      outcome:
        "Improves website visibility and search ranking recommendations.",

      capabilities: [
        "SEO Audits",
        "Keyword Analysis",
        "Meta Generation",
        "Alt Text Optimization",
        "Content Suggestions",
      ],
    },
  },

  {
    id: 4,
    name: "AI Blog Generator Workflow",
    category: "Content Intelligence",
    type: "CONTENT_GEN",
    status: "ACTIVE",
    deployment: "Marketing Automation System",

    description:
      "Automated content generation for creating SEO-optimized blogs at scale.",

    longDescription:
      "An automated content generation workflow designed for creating SEO-optimized blogs at scale. The workflow integrates with Google Sheets for content tracking and Google Drive for automated document storage and management.\n\nAI agents generate structured blog content, optimize it for SEO, create PDF versions, and automatically upload the generated files into Google Drive while maintaining tracking records.",

    imageUrl: "/Blog-generator.png",

    features: [
      "AI-generated SEO blogs",
      "Automated blog tracking",
      "Google Sheets integration",
      "Google Drive document storage",
      "PDF generation",
      "Content workflow automation",
    ],

    tech: [
      "Make.com",
      "Anthropic Claude AI",
      "Google Sheets API",
      "Google Drive API",
    ],

    metrics: {
      latency: "45ms",
      accuracy: "98.8%",
    },

    overview: {
      objective: "Scalable AI Content Generation",
      impact: "Automated SEO Blog Production",
      outcome:
        "Accelerates content publishing workflows with minimal manual effort.",

      capabilities: [
        "AI Writing",
        "SEO Optimization",
        "PDF Generation",
        "Drive Sync",
        "Content Tracking",
      ],
    },
  },

  {
    id: 5,
    name: "Lead Qualification & Reply Automation",
    category: "Lead Automation",
    type: "LEAD_SYNC",
    status: "ACTIVE",
    deployment: "Customer Engagement System",

    description:
      "Intelligent lead management designed to qualify and respond to leads.",

    longDescription:
      "An intelligent lead management workflow designed to analyze website form submissions and automate lead qualification. The system evaluates user inputs against company knowledge documents using a RAG-based approach to determine qualified and non-qualified leads.\n\nBased on the analysis, personalized responses are automatically generated and sent to users. The workflow also stores lead data in Google Sheets for CRM tracking and notifies internal teams about new submissions.",

    imageUrl: "/custom-reply.png",

    features: [
      "Automated lead qualification",
      "AI-based response generation",
      "RAG-powered document understanding",
      "CRM data storage",
      "Team notification automation",
      "Personalized customer replies",
    ],

    tech: [
      "Make.com",
      "RAG",
      "Anthropic Claude AI",
      "Google Sheets",
      "Email Automation",
    ],

    metrics: {
      latency: "12ms",
      accuracy: "99.7%",
    },

    overview: {
      objective: "AI Lead Qualification System",
      impact: "Real-Time Lead Filtering",
      outcome:
        "Improves lead response speed and qualification accuracy.",

      capabilities: [
        "RAG Analysis",
        "CRM Sync",
        "AI Reply Generation",
        "Lead Scoring",
        "Document Intelligence",
      ],
    },
  },

  {
    id: 6,
    name: "Maple HRMS Framework",
    category: "HR Operations",
    type: "HRMS_CORE",
    status: "ACTIVE",
    deployment: "Enterprise HR Platform",

    description:
      "AI-enabled framework to simplify recruitment and interview management.",

    longDescription:
      "An AI-enabled HRMS framework designed to simplify recruitment and interview management workflows for non-technical users. The platform combines ATS resume analysis, interview scheduling automation, and HR workflow management into a single structured system.\n\nThe framework focuses on usability with custom-coded modules and simplified interfaces, making AI-powered hiring tools more accessible for HR teams.",

    imageUrl: "/mapleHrms.png",

    features: [
      "AI-powered resume scoring",
      "Interview scheduling management",
      "HR workflow automation",
      "User-friendly interface for non-technical teams",
      "Integrated hiring pipeline",
      "Centralized recruitment management",
    ],

    tech: [
      "Custom Code Framework",
      "AI Resume Analysis",
      "HRMS Architecture",
      "Frontend & Backend Integrations",
    ],

    metrics: {
      latency: "10ms",
      accuracy: "99.9%",
    },

    overview: {
      objective: "Unified Recruitment Automation",
      impact: "Centralized Hiring Operations",
      outcome:
        "Combines AI-powered recruitment workflows into one intelligent HR platform.",

      capabilities: [
        "ATS Integration",
        "Interview Scheduling",
        "Pipeline Management",
        "Recruitment Automation",
        "HR Workflow Management",
      ],
    },
  },
];

export const TOOLS = [
  {
    name: "ChatGPT",
    role: "AI Assistant",
    logoUrl: "/chatgpt.png",
  },

  {
    name: "Next.js",
    role: "React Framework",
    logoUrl: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
  },

   {
    name: "Make.com",
    role: "Automation Platform",
    logoUrl: "/make.jpg",
  },

  {
    name: "Zapier.com",
    role: "Automation Platform",
    logoUrl: "/zapier.png",
  },

  {
    name: "n8n",
    role: "Automation Platform",
    logoUrl: "/n8n.png",
  },

  {
    name: "Python Framework",
    role: "Backend and API's",
    logoUrl: "/python.jpg",
  },

  {
    name: "Hugging Face",
    role: "LLM's Models",
    logoUrl: "/huggingface.png",
  },

  {
    name: "Supabase",
    role: "Database Provider",
    logoUrl: "/supabase.jpg",
  },

   {
    name: "Gemini API",
    role: "Gemini 2.5 Flash API model",
    logoUrl: "/gemini.jpg",
  },

  {
    name: "Anthropic Claude",
    role: "Anthropic Claude Model",
    logoUrl: "/claude.png",
  },
];
