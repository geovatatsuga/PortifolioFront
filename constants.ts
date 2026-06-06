
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';

export const PROFILE = {
  name: "Jeová Anderson",
  role: {
    en: "FrontEnd Developer",
    pt: "FrontEnd Developer"
  },
  tagline: {
    en: "Building interfaces with data, AI, and product thinking.",
    pt: "Criando interfaces com dados, IA e visao de produto."
  },
  // Short related titles rendered under the main role in the hero section
  titles: {
    en: "FrontEnd Develop - AI Engineering - Data Science",
    pt: "FrontEnd Develop - AI Engineering - Data Science"
  },
  about: {
    en: `Driven by curiosity, technology, and the desire to solve real problems, I am always in search of constant evolution. 
    I find true satisfaction in transforming data into solutions that make a difference—whether for businesses, communities, or individuals. 
    I believe that success in Data Science and Artificial Intelligence comes from the combination of collaboration, practice, and continuous learning.
    
    With feet on the ground and eyes looking forward, I seek to grow and, at the same time, open doors for those who, like me, believe that technology is also a tool for inclusion, transformation, and the future.`,
    pt: `Movido pela curiosidade, pela tecnologia e pelo desejo de resolver problemas reais, estou sempre em busca de evolução constante.
    Acredito que o sucesso na Ciência de Dados e na Inteligência Artificial vem da combinação de colaboração, prática e aprendizado contínuo.`
  },
  contact: {
    email: "jeova.herminio@gmail.com",
    phone: "+55 83 98803-8348",
    social: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/jeova-anderson/", icon: Linkedin },
      { name: "GitHub", url: "https://github.com/geovatatsuga", icon: Github },
      { name: "Medium", url: "https://medium.com/@jeova.anderson", icon: FileText },
    ]
  }
};

export const PROJECTS = [
  {
    title: { en: "Fraud Risk BI", pt: "Fraud Risk BI" },
    category: "FrontEnd Develop",
    subtitle: { en: "Risk dashboard UI + data storytelling", pt: "Interface de risco + narrativa de dados" },
    date: "2026",
    image: `${import.meta.env.BASE_URL}Captura de tela 2026-06-06 aBI.png`,
    imageRatio: "1500 / 697",
    tags: ["FrontEnd Develop", "Data Science", "JavaScript", "CSS", "BI"],
    description: {
      en: "Interactive BI interface for fraud-risk analysis, focused on fast reading, visual hierarchy, KPI cards and decision-ready charts for operational monitoring.",
      pt: "Interface de BI interativa para analise de risco de fraude, com foco em leitura rapida, hierarquia visual, cards de KPI e graficos prontos para decisao."
    },
    url: "https://fraud-risk-bi.vercel.app/",
    subProject: {
      title: { en: "Lakehouse Fraud Detection", pt: "Detecção de Fraudes Lakehouse" },
      subtitle: { en: "Azure Databricks + Delta Lake + MLflow", pt: "Azure Databricks + Delta Lake + MLflow" },
      code: "SYS-0",
      url: "https://medium.com/@jeova.anderson/construindo-uma-pipeline-de-detec%C3%A7%C3%A3o-de-fraudes-com-azure-databricks-delta-lake-e-machine-learning-007af284a4d3",
      description: {
        en: "End-to-end lakehouse pipeline for fraud detection, processing 6.36M+ PaySim transactions across Bronze, Silver, and Gold layers. Random Forest with features achieved 99.45% recall and R$ 73.21M in simulated financial savings.",
        pt: "Pipeline lakehouse ponta a ponta para detecção de fraudes processando 6,36M+ transações PaySim em camadas Bronze, Silver e Gold. Random Forest com features alcançou 99,45% de recall e R$ 73,21M de ganho financeiro simulado."
      },
      tags: ["Azure Databricks", "Delta Lake", "PySpark", "MLflow", "Random Forest", "PaySim"]
    }
  },
  {
    title: { en: "Big Bang Theory", pt: "Big Bang Theory" },
    category: "FrontEnd Develop",
    subtitle: { en: "Character-driven web experience", pt: "Experiencia web baseada em personagens" },
    date: "2026",
    image: `${import.meta.env.BASE_URL}project-big-bang.png`,
    imageRatio: "1500 / 697",
    tags: ["FrontEnd Develop", "JavaScript", "CSS", "React", "UI"],
    description: {
      en: "A themed front-end project built around content organization, visual rhythm and responsive interaction, turning a pop-culture concept into a polished web interface.",
      pt: "Projeto front-end tematico com organizacao de conteudo, ritmo visual e interacao responsiva, transformando cultura pop em uma interface web polida."
    },
    url: "https://big-bang-theory-sigma.vercel.app/"
  },
  {
    title: { en: "CRM Interface", pt: "Interface CRM" },
    category: "AI Engineering",
    subtitle: { en: "Client workflow + intelligent UI", pt: "Fluxo de clientes + UI inteligente" },
    date: "2026",
    image: `${import.meta.env.BASE_URL}Captura de tela 2026-06-06 184907.png`,
    imageRatio: "1530 / 697",
    tags: ["AI Engineering", "FrontEnd Develop", "JavaScript", "CSS", "CRM"],
    description: {
      en: "CRM-style product interface for organizing customer data, actions and business context with a cleaner front-end flow and room for AI-assisted prioritization.",
      pt: "Interface de produto no estilo CRM para organizar dados de clientes, acoes e contexto de negocio com fluxo front-end limpo e espaco para priorizacao assistida por IA."
    },
    url: "https://cereus-snowy.vercel.app/"
  }
];

export const EXPERIENCE = [
  {
    company: "Vsoft Tecnologia",
    role: { en: "Corporate Governance Intern", pt: "Estagiário de Governança Corporativa" },
    period: "07/2025 - 12/2025",
    description: [
      { en: "Developed and maintained an internal-documentation RAG system, reducing manual information search time by ~40%.", pt: "Desenvolvi e mantive sistema de RAG para consulta de documentação interna, reduzindo em ~40% o tempo de busca manual por informações." },
      { en: "Contributed to the corporate chatbot 'Vivi', automating 200+ monthly interactions for internal users.", pt: "Participei da criação do Chatbot Vivi, automatizando mais de 200 interações mensais de usuários internos." },
      { en: "Automated contract-management emails with Python scripts, eliminating around 3 hours of manual work per week.", pt: "Automatizei envios de e-mails de gestão de contratos com scripts Python, eliminando cerca de 3h semanais de trabalho manual." },
      { en: "Built an integrated dashboard consolidating KPIs from 3 areas, adopted by leadership for monthly monitoring.", pt: "Construí dashboard integrada consolidando KPIs de 3 áreas, adotada pela liderança como ferramenta de monitoramento mensal." }
    ]
  },
  {
    company: "Arquivo dos Governadores",
    role: { en: "Intern", pt: "Estagiário" },
    period: "01/2024 - 12/2024",
    description: [
      { en: "Organized and digitized 1,200+ historical documents, enabling digital access to the archive.", pt: "Organizei e digitalizei mais de 1.200 documentos históricos, viabilizando acesso digital ao acervo." },
      { en: "Created Excel pivot tables that reduced document-control systematization time by ~50%.", pt: "Criei tabelas dinâmicas no Excel que reduziram em ~50% o tempo de sistematização e controle documental." },
      { en: "Restructured the collection counting and classification workflow, increasing team productivity by ~30%.", pt: "Reestruturei o fluxo de contagem e classificação de acervos, aumentando a produtividade do setor em aproximadamente 30%." }
    ]
  },
  {
    company: "Marcos Inácio Advogados",
    role: { en: "Administrative Assistant", pt: "Auxiliar Administrativo" },
    period: "04/2021 - 08/2021",
    description: [
      { en: "Managed material inflow/outflow and receipt records with 100% register accuracy during the period.", pt: "Controlei entrada e saída de materiais e emissão de recibos, mantendo acurácia de 100% nos registros durante o período." },
      { en: "Implemented a resource-control spreadsheet that reduced administrative management time by ~25%.", pt: "Implementei planilha de controle de recursos que reduziu em ~25% o tempo gasto na gestão administrativa do escritório." }
    ]
  }
];

export const SKILLS = [
  {
    category: { en: "FrontEnd Develop", pt: "FrontEnd Develop" },
    items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Responsive UI"]
  },
  {
    category: { en: "Interface Design", pt: "Design de Interface" },
    items: ["Component Layout", "Visual Hierarchy", "Dashboards", "Accessibility Basics", "UX Writing"]
  },
  {
    category: { en: "AI Engineering", pt: "AI Engineering" },
    items: ["LLM Interfaces", "RAG Concepts", "Prompt Engineering", "Chatbots", "AI-assisted Workflows"]
  },
  {
    category: { en: "Data Science", pt: "Data Science" },
    items: ["Python", "SQL", "Pandas", "Business Metrics", "Data Visualization"]
  },
  {
    category: { en: "Tools", pt: "Ferramentas" },
    items: ["Git", "GitHub", "Vercel", "Power BI", "Figma", "Google Colab"]
  }
];

export const EDUCATION = [
  {
    institution: "Universidade Estadual da Paraíba (UEPB)",
    degree: { en: "Technologist in Data Science", pt: "Tecnólogo em Ciência de Dados" },
    period: { en: "Conclusion 06/2026", pt: "Conclusão 06/2026" },
    details: { en: "Academic track focused on data, engineering, artificial intelligence and business impact.", pt: "Formação com foco em dados, engenharia, inteligência artificial e impacto de negócio." }
  }
];

export const UI_TEXT = {
  nav: {
    about: { en: "About", pt: "Sobre" },
    work: { en: "Work", pt: "Projetos" },
    skills: { en: "Skills", pt: "Skills" },
    lab: { en: "Lab", pt: "Lab" },
    resume: { en: "Resume", pt: "Currículo" },
    contact: { en: "Contact", pt: "Contato" },
  },
  hero: {
    scroll: { en: "Initiate Descent", pt: "Iniciar Descida" },
    active: { en: "System Active", pt: "Sistema Ativo" }
  },
  about: {
    section: { en: "01. / PROFILE", pt: "01. / PERFIL" },
    title: { en: "The Human", pt: "O Humano" },
    subtitle: { en: "Behind the Data", pt: "Por trás dos Dados" },
    focus: { en: "Primary Focus", pt: "Foco Principal" },
    based: { en: "Location", pt: "Localização" },
    remote: { en: "Available Remote", pt: "Disponível Remoto" },
    exp: { en: "Experience", pt: "Experiência" },
    years: { en: "3+ Years", pt: "3+ Anos" }
  },
  projects: {
    section: { en: "02. / PROJECTS", pt: "02. / PROJETOS" },
    title: { en: "FrontEnd Interfaces", pt: "Interfaces FrontEnd" },
    interact: { en: "Interact to Explore", pt: "Interaja para Explorar" },
    files: { en: "FILES", pt: "ARQUIVOS" }
  },
  skills: {
    section: { en: "03. / CAPABILITIES", pt: "03. / CAPACIDADES" },
    title: { en: "Technical Stack", pt: "Stack Técnico" }
  },
  lab: {
    section: { en: "04. / DECOMPRESSION", pt: "04. / DESCOMPRESSÃO" },
    title: { en: "Take a Break.", pt: "Dê uma Pausa." },
    subtitle: { en: "Interactive Physics Sandbox", pt: "Sandbox de Física Interativa" },
    modes: {
      entropy: { en: "Entropy", pt: "Entropia" },
      neural: { en: "Neural", pt: "Neural" },
      phase: { en: "Phase", pt: "Fase" },
      optimize: { en: "Optimize", pt: "Otimizar" }
    },
    hints: {
      entropy: { en: "Hold to Collapse • Release to Explode", pt: "Segure para Colapsar • Solte para Explodir" },
      neural: { en: "Hold to Inject Signal Interference", pt: "Segure para Injetar Interferência" },
      phase: { en: "Click to Melt • Move Fast to Heat", pt: "Clique para Derreter • Mova Rápido para Aquecer" },
      optimize: { en: "Topology Field • Hold to Regularize", pt: "Campo Topológico • Segure para Regularizar" }
    },
    titles: {
      entropy: { en: "Entropy Control", pt: "Controle de Entropia" },
      neural: { en: "Neural Lattice", pt: "Rede Neural" },
      phase: { en: "Phase Transition", pt: "Transição de Fase" },
      optimize: { en: "Gradient Flow", pt: "Fluxo de Gradiente" }
    }
  },
  resume: {
    title: { en: "Curriculum Vitae", pt: "Curriculum Vitae" },
    download: { en: "Download Data", pt: "Baixar Dados" },
    education: { en: "Education", pt: "Educação" },
    experience: { en: "Experience Log", pt: "Registro de Experiência" }
  },
  contact: {
    signal: { en: "Signal detected.", pt: "Sinal detectado." },
    title: { en: "Let's Collaborate.", pt: "Vamos Colaborar." },
    system: { en: "System Nominal", pt: "Sistema Nominal" },
    rights: { en: "All rights reserved.", pt: "Todos os direitos reservados." }
  }
};

export const GENAI_PROJECTS = [
  {
    title: { en: "MythosEngine", pt: "MythosEngine" },
    subtitle: { en: "Multi-Agent Narrative Architecture", pt: "Arquitetura Narrativa Multiagente" },
    code: "GEN-0",
    image: `${import.meta.env.BASE_URL}project-mythos.png`,
    imageRatio: "1024 / 470",
    category: "AI Engine / Agentic",
    description: {
      en: "A multi-agent architecture for generating long and coherent narratives with a structured memory system, facilitating the creation of complex scripts and books.",
      pt: "Uma arquitetura multiagente para gerar narrativas longas e coerentes com sistema de memória estruturado, facilitando a criação de roteiros e livros complexos."
    },
    tags: ["Generative AI", "LLMs", "Multi-Agent Systems", "Python", "LangChain"],
    url: "https://medium.com/@jeova.anderson/mythosengine-uma-simples-arquitetura-multiagente-para-gerar-narrativas-longas-com-mem%C3%B3ria-em-cdd3b567c611"
  },
  {
    title: { en: "Novel-to-Webtoon Pipeline", pt: "Pipeline Novel para Webtoon" },
    subtitle: { en: "Multimodal Generative Pipeline", pt: "Pipeline Generativa Multimodal" },
    code: "GEN-1",
    image: `${import.meta.env.BASE_URL}project-webtoon.png`,
    imageRatio: "1024 / 470",
    category: "Generative AI / Pipeline",
    description: {
      en: "An end-to-end pipeline converting webnovel chapters into digital comics (webtoons) by integrating LLMs for scripting and image generative AIs for visual consistency.",
      pt: "Pipeline completa que converte capítulos de webnovels em quadrinhos digitais (webtoons) integrando LLMs para roteirização e IAs generativas de imagem para consistência visual."
    },
    tags: ["Generative AI", "LLMs", "Stable Diffusion", "Prompt Engineering", "Multimodal"],
    url: "https://medium.com/@jeova.anderson/transformando-um-cap%C3%ADtulo-de-novel-em-uma-pipeline-completa-de-webtoon-com-ia-350d2ec38f47"
  }
];
