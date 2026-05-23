
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';

export const PROFILE = {
  name: "Jeová Anderson",
  role: {
    en: "Data Scientist & Data Analyst",
    pt: "Cientista de Dados & Analista de dados"
  },
  tagline: {
    en: "Transforming data into real solutions.",
    pt: "Transformando dados em soluções reais."
  },
  // Short related titles rendered under the main role in the hero section
  titles: {
    en: "AI Gen • LLMs • MLOps",
    pt: "AI Gen • LLMs • MLOps"
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
    title: { en: "Fraud Detection Lakehouse", pt: "Detecção de Fraudes Lakehouse" },
    category: "Big Data - Cloud",
    subtitle: { en: "Azure Databricks + Delta Lake + MLflow", pt: "Azure Databricks + Delta Lake + MLflow" },
    date: "05/2026",
    tags: ["Azure Databricks", "Delta Lake", "PySpark", "MLflow", "Random Forest", "PaySim"],
    description: {
      en: "End-to-end fraud detection lakehouse processing 6.36M+ PaySim transactions with Bronze, Silver and Gold layers. Random Forest with engineered features reached 99.45% fraud recall and R$73.21M simulated financial gain.",
      pt: "Pipeline lakehouse ponta a ponta para detecção de fraudes processando 6,36M+ transações PaySim em camadas Bronze, Silver e Gold. Random Forest com features alcançou 99,45% de recall e R$ 73,21M de ganho financeiro simulado."
    },
    url: "https://medium.com/@jeova.anderson/construindo-uma-pipeline-de-detec%C3%A7%C3%A3o-de-fraudes-com-azure-databricks-delta-lake-e-machine-learning-007af284a4d3"
  },
  {
    title: { en: "Customer Segmentation", pt: "Segmentação de Clientes" },
    category: "Business Intelligence",
    subtitle: { en: "RFM + K-means Clustering", pt: "RFM + Clusterização K-means" },
    date: "04/2025",
    tags: ["Python", "K-Means", "RFM", "Plotly", "Dash"],
    description: {
      en: "Behavioral segmentation with RFM features, statistical transformations and K-Means. Classified customers into 10 business subgroups and 4 clusters, delivered through an interactive Dash and Plotly dashboard.",
      pt: "Segmentação comportamental com features RFM, transformações estatísticas e K-Means. Classifiquei clientes em 10 subgrupos de negócio e 4 clusters, entregando a análise em dashboard interativo com Dash e Plotly."
    },
    url: "https://medium.com/@jeova.anderson/segmenta%C3%A7%C3%A3o-de-clientes-com-rfm-k-means-4e75c98f00d9"
  },
  {
    title: { en: "Churn Prediction Dashboard", pt: "Previsão de Churn" },
    category: "Business Intelligence",
    subtitle: { en: "End-to-End Analytics", pt: "Analytics Ponta a Ponta" },
    date: "04/2025",
    tags: ["SQL", "Pandas", "Random Forest", "Dash"],
    description: {
      en: "Integrated churn solution with SQL Server extraction, Python preprocessing, Random Forest training on 1,926 samples and Dash/Plotly dashboards. Reached 81% accuracy and highlighted the main churn drivers.",
      pt: "Solução integrada de churn com extração via SQL Server, pré-processamento em Python, Random Forest em 1.926 amostras e dashboards Dash/Plotly. Alcancei 81% de acurácia e destaquei os principais fatores de churn."
    },
    url: "https://medium.com/@jeova.anderson/3-dashboards-1-objetivo-prevendo-e-evitando-churn-com-random-forest-d729f9b289a4"
  },
  {
    title: { en: "Synthetic Image Detection", pt: "Detecção de Imagens Sintéticas" },
    category: "Computer Vision & AI Gen",
    subtitle: { en: "ViT + Edge-Based Processing", pt: "ViT + Processamento de Bordas" },
    date: "12/2025",
    tags: ["PyTorch", "HuggingFace", "Computer Vision", "ViT"],
    description: {
      en: "Hybrid approach combining ViT ImgNet21k fine-tuning with Edge-Based Processing for real vs. synthetic image classification. Reached 99.43% accuracy and 0.9943 F1, improving the fine-tuned ViT baseline.",
      pt: "Abordagem híbrida combinando fine-tuning de ViT ImgNet21k com Edge-Based Processing para classificar imagens reais vs. sintéticas. Alcancei 99,43% de acurácia e F1 de 0,9943, melhorando o baseline do ViT ajustado."
    },
    url: "https://medium.com/@jeova.anderson/combinando-vision-transformers-e-an%C3%A1lise-de-bordas-ebp-para-detectar-imag%C3%A9ns-sinteticas-8d5142ae1623"
  },
  {
    title: { en: "SwarmUI on Google Colab", pt: "SwarmUI no Google Colab" },
    category: "Computer Vision & AI Gen",
    subtitle: { en: "Free GPU Image Generation", pt: "Geração de Imagens com GPU Grátis" },
    date: "02/2026",
    tags: ["Google Colab", "Stable Diffusion", "SDXL", "ComfyUI", "SwarmUI", "cloudflared", "Civitai"],
    description: {
      en: "Step-by-step guide to running SwarmUI on free Google Colab GPU (T4) to generate unlimited AI images. Covers model download via Civitai, .NET setup, and Cloudflare tunnel (cloudflared) for remote access.",
      pt: "Guia completo para rodar o SwarmUI na GPU grátis do Google Colab (T4) e gerar imagens de IA sem limites. Inclui download de modelos via Civitai, setup do .NET e túnel Cloudflare (cloudflared) para acesso remoto."
    },
    url: "https://medium.com/@jeova.anderson/swarmui-no-google-colab-o-guia-definitivo-para-gerar-imagens-de-ia-de-gra%C3%A7a-b3d5962dbf37"
  },
  {
    title: { en: "Jiu-Jitsu ELO Rating System", pt: "Sistema ELO para Jiu-Jitsu" },
    category: "Sports Analytics",
    subtitle: { en: "Web Scraping & Statistics", pt: "Web Scraping & Estatística" },
    date: "06/2025",
    tags: ["Web Scraping", "Python", "K-Means", "Statistics"],
    description: {
      en: "Ranking system built from 56k+ Jiu-Jitsu fight records collected with Python, BeautifulSoup, ThreadPoolExecutor and Pandas. Identified peak ELO performance and 3 competitive profiles, including an elite group of 154 athletes.",
      pt: "Sistema de ranking com 56k+ registros de lutas de Jiu-Jitsu coletados com Python, BeautifulSoup, ThreadPoolExecutor e Pandas. Identifiquei picos de ELO e 3 perfis competitivos, incluindo grupo de elite com 154 atletas."
    },
    url: "https://medium.com/@jeova.anderson/do-xadrez-ao-jiu-jitsu-usando-o-elo-rating-para-identificar-o-melhor-e-mapear-perfis-de-eca8950df773"
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
    category: { en: "Languages", pt: "Linguagens" },
    items: ["Python (Pandas, NumPy, Scikit-learn)", "SQL"]
  },
  {
    category: { en: "Data Analysis", pt: "Análise de Dados" },
    items: ["Big Data Handling", "Exploratory Analysis", "Business Metrics", "Visualization (Matplotlib, Seaborn, Plotly)"]
  },
  {
    category: { en: "Machine Learning", pt: "Machine Learning" },
    items: [
      "Predictive Modeling",
      "Supervised Learning",
      "Unsupervised Learning",
      "Fraud Detection",
      "MLflow Experiment Tracking",
      "Random Forest / GBT / Decision Tree",
      "Computer Vision",
      "Diffusion Models (Stable Diffusion / SDXL)",
      "Generative AI (Image Generation)"
    ]
  },
  {
    category: { en: "Data Engineering", pt: "Engenharia de Dados" },
    items: ["Azure Databricks", "Delta Lake", "ADLS Gen2", "PySpark", "Lakehouse Architecture", "ETL Pipelines", "Web Scraping", "APIs"]
  },
  {
    category: { en: "Tools", pt: "Ferramentas" },
    items: ["Azure", "Databricks", "MLflow", "Git", "GitHub", "SQL Server", "Power BI", "Excel", "Dash", "Looker Studio", "Google Colab", "RAG / LLMs / Chatbots"]
  }
];

export const EDUCATION = [
  {
    institution: "Universidade Federal da Paraíba (UFPB)",
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
    section: { en: "02. / ARCHIVE", pt: "02. / ARQUIVO" },
    title: { en: "Research & Protocols", pt: "Pesquisa & Protocolos" },
    interact: { en: "Interact to Analyze Data", pt: "Interaja para Analisar" },
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
