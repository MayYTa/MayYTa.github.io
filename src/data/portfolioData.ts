// All the text you may want to edit lives here. Every text has English and Spanish.
export type Lang = 'en' | 'es';
export type Text = Record<Lang, string>;

export const PROFILE = {
  name: 'Leonardo Juscamayta',
  email: 'leonardo.juscamaytat@gmail.com',
  github: 'https://github.com/MayYTa',
  linkedin: 'https://www.linkedin.com/in/leonardo-juscamayta-trujillo-108b30283/',
  // Put your CV (no phone or address) in public/ and write '/cv.pdf' here.
  cvUrl: '',
};

export const ABOUT: { role: Text; headline: Text; paragraph: Text; seeking: Text } = {
  role: { en: 'Computer Science student', es: 'Estudiante de Ciencias de la Computación' },
  headline: {
    en: 'Turning data into useful information for better decisions.',
    es: 'Convertir datos en información útil para decidir mejor.',
  },
  paragraph: {
    en: 'I am a Computer Science student passionate about Machine Learning: seeing how data can become useful information for future decisions, and how it can be used to tackle current problems and automate processes.',
    es: 'Soy estudiante de Ciencias de la Computación y me apasiona el Machine Learning: ver cómo los datos pueden convertirse en información útil para decisiones futuras, y cómo pueden servir para atacar problemas actuales y automatizar procesos.',
  },
  seeking: {
    en: 'Looking for pre-professional internships in data, AI and ML.',
    es: 'Busco prácticas preprofesionales en datos, IA y ML.',
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
  // { label: { en: 'Machine Learning', es: 'Machine Learning' }, items: ['LightGBM', 'SHAP'] },
];

// Add only real certificates. The section and its menu link appear once this has items.
export const CERTIFICATIONS: { title: string; issuer: string; date: string; url: string }[] = [
  // { title: '...', issuer: '...', date: '2026', url: 'https://...' },
];

// Only music you have the right to publish. Files go in public/music/.
export const TRACKS: { title: string; artist: string; src: string }[] = [
  // { title: 'My first track', artist: 'Artist name', src: '/music/track1.mp3' },
];
