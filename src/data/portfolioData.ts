// All the text you may want to edit lives here. Every text has English and Spanish.
export type Lang = 'en' | 'es';
export type Text = Record<Lang, string>;

export const PROFILE = {
  name: 'Leonardo Juscamayta',
  email: 'leonardo.juscamaytat@gmail.com',
  github: 'https://github.com/MayYTa',
  linkedin: 'https://www.linkedin.com/in/leonardo-juscamayta-trujillo-108b30283/',
  // Put your CVs in public/ and set their paths per language here.
  cvUrl: {
    en: '/Leonardo_Mathias_Juscamayta_Trujillo_CV_Data_Scientist_ML_Engineer_Data_Analyst_EN.pdf',
    es: '/Leonardo_Mathias_Juscamayta_Trujillo_CV_Data_Scientist_ML_Engineer_Data_Analyst.pdf',
  } satisfies Text,
};

export const ABOUT: { role: Text; headline: Text; paragraph: Text; seeking: Text } = {
  role: {
    en: 'Computer Science (8th sem.) · ML & Data',
    es: 'Ciencias de la Computación (8.° ciclo) · ML y Datos',
  },
  headline: {
    en: 'Turning data into strategic decisions through Machine Learning and Analytics.',
    es: 'Transformar datos en decisiones estratégicas mediante Machine Learning y Analítica.',
  },
  paragraph: {
    en: 'I am an 8th-semester Computer Science student at UPC focused on Machine Learning, Data Analytics, and NLP. I have experience with Exploratory Data Analysis (CRISP-DM), Deep Learning models (GRU, Computer Vision), text extraction and cleaning pipelines, relational databases, and backend tooling in Agile environments (Jira).',
    es: 'Soy estudiante de 8.° ciclo de Ciencias de la Computación en la UPC, orientado a Machine Learning, Data Analytics y NLP. Tengo experiencia en Análisis Exploratorio de Datos (CRISP-DM), modelos de Deep Learning (GRU, Computer Vision), pipelines de extracción y limpieza de texto, bases de datos relacionales y herramientas de desarrollo en entornos ágiles (Jira).',
  },
  seeking: {
    en: 'Looking for pre-professional internships in ML Engineering, Data Science, Data Analytics, and Software Engineering.',
    es: 'Busco prácticas preprofesionales en ML Engineering, Data Science, Data Analytics e Ingeniería de Software.',
  },
};

export interface WorkItem {
  id: string;
  title: Text;
  subtitle: Text;
  description: Text;
  metrics: Text;
  highlights: Record<Lang, string[]>;
  tags: string[];
  accent: 'aqua' | 'emerald';
  image: string;
  imageFit: 'cover' | 'contain';
  repoUrl: string;
  demoUrl: string; // empty = no demo button
}

export const WORKS_DATA: WorkItem[] = [
  {
    id: 'baf',
    title: { en: 'Bank account fraud detection', es: 'Detección de fraude bancario' },
    subtitle: { en: 'LightGBM on the BAF dataset (synthetic)', es: 'LightGBM sobre el dataset BAF (sintético)' },
    description: {
      en: 'Detects fraudulent account applications, with a temporal split, bank-style validation, fairness checks and a FastAPI scoring service.',
      es: 'Detecta solicitudes fraudulentas de apertura de cuentas, con partición temporal, validación de estilo bancario, análisis de equidad y un servicio en FastAPI.',
    },
    metrics: { en: 'Test: Gini 0.784 · KS 0.628', es: 'Prueba: Gini 0.784 · KS 0.628' },
    highlights: {
      en: [
        'Recall of 0.541 at a 5% false positive rate on the test months.',
        'Removing age narrowed the false positive gap between ages 20 and 60 from about 10x to 5x, but did not remove it.',
        'Probabilities calibrated with Platt scaling; drift (PSI) and SHAP reviewed.',
      ],
      es: [
        'Recall de 0.541 con 5% de falsos positivos en los meses de prueba.',
        'Quitar la edad redujo la brecha de falsos positivos entre 20 y 60 años de unas 10 a 5 veces, sin eliminarla.',
        'Probabilidades calibradas con Platt; revisión de deriva (PSI) y SHAP.',
      ],
    },
    tags: ['Python', 'LightGBM', 'FastAPI', 'MLflow', 'GitHub Actions'],
    accent: 'aqua',
    image: '/images/shap_importancia.png',
    imageFit: 'contain',
    repoUrl: 'https://github.com/MayYTa/baf-fraud-prediction',
    demoUrl: '',
  },
  {
    id: 'rag',
    title: { en: 'RAG on personal data protection', es: 'RAG sobre protección de datos personales' },
    subtitle: { en: "Peru's Law 29733 and its regulation", es: 'Ley 29733 del Perú y su reglamento' },
    description: {
      en: 'Answers questions citing the article it relies on, and abstains when it finds no answer. Runs locally. A learning project, not legal advice.',
      es: 'Responde preguntas citando el artículo en que se basa y se abstiene cuando no encuentra la respuesta. Corre en local. Proyecto de aprendizaje, no es asesoría legal.',
    },
    metrics: { en: 'Test retrieval: recall@5 0.83 (n=18)', es: 'Recuperación en prueba: recall@5 0.83 (n=18)' },
    highlights: {
      en: [
        'Compared BM25, embeddings and a hybrid on the dev set; embeddings won (recall@5 0.95).',
        'Citations can only point to articles the model actually received.',
        'Small evaluation set, still pending manual verification.',
      ],
      es: [
        'Comparé BM25, embeddings e híbrida en dev; ganaron los embeddings (recall@5 0.95).',
        'Las citas solo pueden apuntar a artículos que el modelo recibió.',
        'Set de evaluación pequeño, aún pendiente de verificación manual.',
      ],
    },
    tags: ['Python', 'multilingual-e5', 'Ollama', 'qwen3.5:9b', 'MLflow'],
    accent: 'emerald',
    image: '/images/raindrops.jpg',
    imageFit: 'cover',
    repoUrl: 'https://github.com/MayYTa/rag-model-private_data_protection',
    // After copying demo.html into public/, change this to '/demo.html'
    demoUrl: '',
  },
];

// Add only skills you can discuss in an interview. The cards appear once this has items.
export const SKILL_GROUPS: { label: Text; items: string[] }[] = [
  {
    label: { en: 'ML, Data & Analytics', es: 'ML, Datos y Analítica' },
    items: ['PyTorch', 'Scikit-Learn', 'Pandas', 'NumPy', 'OpenCV', 'MediaPipe', 'spaCy', 'NLTK', 'Plotly', 'Seaborn', 'PowerBI'],
  },
  {
    label: { en: 'Languages & Databases', es: 'Lenguajes y Bases de Datos' },
    items: ['Python', 'SQL', 'PostgreSQL', 'C++', 'JavaScript', 'HTML/CSS', 'GDScript'],
  },
  {
    label: { en: 'Software Engineering & Tools', es: 'Ingeniería de Software y Herramientas' },
    items: ['Spring Boot', 'Angular', 'Docker', 'Git/GitHub', 'Linux CLI', 'Postman/Bruno', 'Jira'],
  },
];

// Add only real certificates. The section and its menu link appear once this has items.
export const CERTIFICATIONS: { title: string; issuer: string; date: string; url: string }[] = [
  {
    title: 'The Structured Query Language (SQL)',
    issuer: 'University of Colorado Boulder',
    date: 'Jul 2026 · ID: 7RJDE5TO9HX5',
    url: '',
  },
  {
    title: 'Relational Database Design',
    issuer: 'University of Colorado Boulder',
    date: 'Jul 2026 · ID: JL18PNQHQS6N',
    url: '',
  },
  {
    title: 'Python Data Structures',
    issuer: 'University of Michigan',
    date: 'Oct 2024 · ID: ILXRHJN5EZUJ',
    url: '',
  },
  {
    title: 'Retrieving, Processing, and Visualizing Data with Python',
    issuer: 'University of Michigan',
    date: 'Nov 2024 · ID: UGUCLTYGJUST',
    url: '',
  },
  {
    title: 'B2 First Certificate in English',
    issuer: 'Cambridge Assessment English',
    date: 'Apr 2025 · Score: 179 (Grade B)',
    url: '',
  },
];

// Only music you have the right to publish. Files go in public/music/.
export const TRACKS: { title: string; artist: string; src: string }[] = [
  {
    title: '今日はお散歩日和。 - Today is a Good Day for a Walk',
    artist: 'Noru (のる)',
    src: '/music/01 - 今日はお散歩日和。 - Today is a Good Day for a Walk - Noru (のる).mp3',
  },
  {
    title: 'おもちゃのダンス - Toy Dance',
    artist: 'Sumochi (すもち)',
    src: '/music/02 - おもちゃのダンス - Toy Dance - Sumochi (すもち).mp3',
  },
  {
    title: 'ensolarado - Sunny',
    artist: 'Kyaai',
    src: '/music/03 - ensolarado - Sunny - Kyaai.mp3',
  },
  {
    title: 'お料理中 - While Cooking',
    artist: 'Wataru Yuuki (ゆうきわたる)',
    src: '/music/04 - お料理中 - While Cooking - Wataru Yuuki (ゆうきわたる).mp3',
  },
];
