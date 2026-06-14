import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  MessageSquare, 
  Award, 
  Layers, 
  Cpu, 
  Upload, 
  Compass, 
  Activity, 
  FileText, 
  Trash2, 
  Plus, 
  Brain, 
  RotateCw, 
  HelpCircle, 
  BookMarked, 
  Binary, 
  Sigma, 
  Search, 
  Globe, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  Settings, 
  Database, 
  TrendingUp, 
  Users, 
  DollarSign, 
  ShieldAlert, 
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Info
} from 'lucide-react';

const inlineStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Inter:wght@300;400;500;600;700;800&display=swap');
  
  body {
    background-color: #030712;
    color: #f3f4f6;
    font-family: 'Inter', 'Cairo', sans-serif;
    overflow-x: hidden;
  }

  .font-arabic {
    font-family: 'Cairo', sans-serif;
  }

  /* Glassmorphism Classes */
  .glass-panel {
    background: rgba(11, 19, 41, 0.45);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(59, 130, 246, 0.15);
  }

  .glass-panel-gold {
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(251, 191, 36, 0.25);
  }

  .glow-blue {
    box-shadow: 0 0 25px rgba(59, 130, 246, 0.25);
  }

  .glow-gold {
    box-shadow: 0 0 25px rgba(251, 191, 36, 0.15);
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #030712;
  }
  ::-webkit-scrollbar-thumb {
    background: #1e293b;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #3b82f6;
  }

  /* 3D Flashcard Flip Animations */
  .perspective-1000 {
    perspective: 1000px;
  }
  .preserve-3d {
    transform-style: preserve-3d;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
  
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 4s infinite ease-in-out;
  }
`;

const PRELOADED_DOCUMENTS = [
  {
    id: 'doc-phys-01',
    titleAr: 'أسس ميكانيكا الكم والفيزياء الهندسية',
    titleEn: 'Foundations of Quantum Mechanics & Engineering Physics',
    category: 'Physics',
    size: '1.2 MB',
    pages: 14,
    uploadedAt: 'Preloaded',
    content: `ميكانيكا الكم هي النظرية الأساسية في الفيزياء التي توفر وصفاً للخصائص الفيزيائية للطبيعة على مقياس الذرات والجسيمات دون الذرية.
معادلة شروودنجر المستقلة عن الزمن هي: Hψ = Eψ، حيث H هو مؤثر الهاملتونيان، وψ هي الدالة الموجية، وE هي طاقة النظام.
مبدأ عدم اليقين لهايزنبرغ ينص على أنه لا يمكن تحديد موضع وزخم جسيم بدقة متناهية في نفس الوقت: Δx * Δp >= ħ/2.
ظاهرة التأثير الكهروضوئي تفسر انبعاث الإلكترونات من سطح المعدن عند سقوط ضوء ذو تردد مناسب عليه، وطاقة الإلكترونات المنبعثة تحسب من المعادلة: E_k = hν - Φ، حيث Φ هي دالة الشغل للمعدن.
التطبيقات الهندسية لميكانيكا الكم تشمل الترانزستورات، أجهزة الليزر، الخلايا الشمسية، والحوسبة الكمومية.
مبدأ التراكب الكمي ينص على أن الجسيم يمكن أن يوجد في حالات متعددة في نفس الوقت حتى يتم قياسه. التشابك الكمي يصف ارتباطاً وثيقاً بين جسيمين بحيث تؤثر حالة أحدهما فورياً على الآخر مهما كانت المسافة بينهما.`
  },
  {
    id: 'doc-ml-02',
    titleAr: 'مقدمة في الذكاء الاصطناعي وتعلم الآلة للمهندسين',
    titleEn: 'Introduction to Artificial Intelligence & Machine Learning for Engineers',
    category: 'Computer Science',
    size: '2.4 MB',
    pages: 28,
    uploadedAt: 'Preloaded',
    content: `التعلم الخاضع للإشراف (Supervised Learning) يعتمد على تدريب النموذج باستخدام بيانات معنونة (labeled data) تحتوي على المدخلات والمخرجات الصحيحة. أمثلة: الانحدار الخطي (Linear Regression) والتصنيف (Classification).
التعلم غير الخاضع للإشراف (Unsupervised Learning) يعمل على بيانات غير معنونة لاكتشاف الأنماط المخفية. أمثلة: التجميع (Clustering) مثل خوارزمية K-Means.
الشبكات العصبية الاصطناعية (Artificial Neural Networks) تحاكي هيكل الخلايا العصبية البيولوجية. تتكون من طبقة مدخلات، طبقات مخفية، وطبقة مخرجات.
خوارزمية الانتشار الخلفي (Backpropagation) تستخدم لتحديث الأوزان وتقليل دالة الخسارة (Loss Function) عبر حساب الاشتقاق الجزئي للخطأ بالنسبة لكل وزن باستخدام قاعدة السلسلة.
مفهوم التحسين والتعميم (Generalization) يمثل قدرة النموذج على العمل بدقة على بيانات جديدة لم يراها من قبل. الإفراط في التدريب (Overfitting) يحدث عندما يحفظ النموذج بيانات التدريب بدلاً من تعلم الأنماط العامة.`
  },
  {
    id: 'doc-mech-03',
    titleAr: 'الهندسة الميكانيكية والأنظمة الهيدروليكية الصناعية',
    titleEn: 'Mechanical Engineering & Industrial Hydraulic Systems',
    category: 'Technical Education',
    size: '1.8 MB',
    pages: 19,
    uploadedAt: 'Preloaded',
    content: `قانون باسكال يمثل الأساس لجميع الأنظمة الهيدروليكية: الضغط المسلط على أي جزء من سائل محصور ينتقل بالتساوي في جميع الاتجاهات ويؤثر بقوى عمودية على الأسطح الحاصرة له. الصيغة الرياضية: P = F / A.
المضخات الهيدروليكية تحول الطاقة الميكانيكية إلى طاقة تدفق هيدروليكية. المضخات الأكثر شيوعاً هي مضخات التروس (Gear Pumps)، والمضخات الريشية (Vane Pumps)، والمضخات المكبسية (Piston Pumps).
صمامات التحكم في الاتجاه (Directional Control Valves) توجه تدفق السائل لبدء أو إيقاف أو تغيير اتجاه حركة المشغلات (الأسطوانات أو المحركات الهيدروليكية).
سائل الهيدروليك يخدم عدة وظائف: نقل القدرة، تزييت الأجزاء المتحركة، تبديد الحرارة، ومنع التآكل. لزوجة السائل هي أهم خصائصه الفيزيائية ويجب أن تظل مستقرة ضمن درجات حرارة التشغيل.
تتضمن معايير السلامة في صيانة الهيدروليك خفض الضغط تماماً قبل فتح الوصلات، فحص تسريبات الخراطيم باستخدام ورق مقوى وليس باليد العارية لتجنب حقن الزيت عالي الضغط تحت الجلد.`
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [language, setLanguage] = useState('ar'); // 'ar' primary with English alongside
  const [selectedDocId, setSelectedDocId] = useState('doc-phys-01');
  const [documents, setDocuments] = useState(PRELOADED_DOCUMENTS);
  const [uploadedFilesCount, setUploadedFilesCount] = useState(0);
  const [userLevel, setUserLevel] = useState(1);
  const [userXP, setUserXP] = useState(320);
  const [nextLevelXP, setNextLevelXP] = useState(1000);
  
  // Custom Toasts for feedback without alert()
  const [toasts, setToasts] = useState([]);
  
  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // Simulated global stats
  const [questionsAsked, setQuestionsAsked] = useState(18);
  const [quizzesCompleted, setQuizzesCompleted] = useState(4);
  const [averageQuizScore, setAverageQuizScore] = useState(85);

  const [chatHistories, setChatHistories] = useState({
    'doc-phys-01': [
      {
        role: 'assistant',
        textAr: 'مرحباً، أنا النمر 🐅. لقد قمت بتحميل منهج الفيزياء الهندسية وميكانيكا الكم. اسألني أي سؤال حول هذا المنهج وسأجيبك بالتفصيل بالعربية والإنجليزية مع الشرح والتبسيط.',
        textEn: 'Hello, I am Al-Nemr 🐅. I have loaded the Engineering Physics and Quantum Mechanics curriculum. Ask me any question about this syllabus, and I will answer you in detail in both Arabic and English with simplified, expert explanations.',
        concepts: ['Quantum Mechanics', 'Schrödinger Equation', 'Heisenberg Uncertainty'],
        analogies: 'تخيل ميكانيكا الكم كعالم سحري حيث يمكن للاعب الكرة أن يتواجد في كل الملاعب في نفس اللحظة حتى يقرر الحكم النظر إليه وتحديد مكانه!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ],
    'doc-ml-02': [
      {
        role: 'assistant',
        textAr: 'مرحباً بك! أنا النمر 🐅 ومستعد لمساعدتك في استكشاف كورس الذكاء الاصطناعي وتعلّم الآلة. سنناقش خوارزميات التدريب والشبكات العصبية خطوة بخطوة.',
        textEn: 'Welcome! I am Al-Nemr 🐅, ready to help you explore the AI & Machine Learning course. We will discuss training algorithms and neural networks step by step.',
        concepts: ['Supervised Learning', 'Neural Networks', 'Overfitting'],
        analogies: 'التعلم الخاضع للإشراف يشبه تدريس طفل صغير القراءة باستخدام كتاب مصور يحتوي على أسماء الحيوانات أسفل صورها، حتى يربط الشكل بالاسم الصحيح.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ],
    'doc-mech-03': [
      {
        role: 'assistant',
        textAr: 'مرحباً، أنا النمر 🐅. منهج الأنظمة الهيدروليكية الميكانيكية جاهز للدراسة والمناقشة. اسألني عن القوانين، الصمامات، وطرق الصيانة والسلامة.',
        textEn: 'Hello, I am Al-Nemr 🐅. The Mechanical Hydraulic Systems curriculum is ready for study. Ask me about laws, valves, maintenance, and safety.',
        concepts: ['Pascal Law', 'Hydraulic Pumps', 'Pressure Distribution'],
        analogies: 'النظام الهيدروليكي يشبه تماماً الفرامل في سيارتك: تضغط بقدمك بجهد بسيط على مكبس صغير، فينتقل الضغط عبر الزيت ليولد قوة هائلة توقف الإطارات الضخمة!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]
  });

  const [currentQuery, setCurrentQuery] = useState('');
  const [isAiResponding, setIsAiResponding] = useState(false);
  const [isTeachingMode, setIsTeachingMode] = useState(true);
  const [suggestedQuestions, setSuggestedQuestions] = useState([
    { ar: 'ما هي أهم التطبيقات الهندسية لميكانيكا الكم؟', en: 'What are the main engineering applications of quantum mechanics?' },
    { ar: 'اشرح مبدأ عدم اليقين بأسلوب مبسط جداً', en: 'Explain the Uncertainty Principle in a very simplified way' },
    { ar: 'ما الفرق بين دالة الموجة ومؤثر الهاملتونيان؟', en: 'What is the difference between the wave function and the Hamiltonian operator?' }
  ]);

  const chatEndRef = useRef(null);
  
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistories, selectedDocId]);

  useEffect(() => {
    if (selectedDocId === 'doc-phys-01') {
      setSuggestedQuestions([
        { ar: 'ما هي أهم التطبيقات الهندسية لميكانيكا الكم؟', en: 'What are the main engineering applications of quantum mechanics?' },
        { ar: 'اشرح مبدأ عدم اليقين بأسلوب مبسط جداً', en: 'Explain the Uncertainty Principle in a very simplified way' },
        { ar: 'ما المعادلة الرياضية للتأثير الكهروضوئي؟', en: 'What is the mathematical equation for the photoelectric effect?' }
      ]);
    } else if (selectedDocId === 'doc-ml-02') {
      setSuggestedQuestions([
        { ar: 'ما الفرق بين التعلم الخاضع للإشراف وغير الخاضع للإشراف؟', en: 'What is the difference between supervised and unsupervised learning?' },
        { ar: 'كيف تعمل خوارزمية الانتشار الخلفي في تقليل الخطأ؟', en: 'How does the backpropagation algorithm work to reduce error?' },
        { ar: 'ما هو الـ Overfitting وكيف يمكن تجنبه؟', en: 'What is Overfitting and how can we avoid it?' }
      ]);
    } else if (selectedDocId === 'doc-mech-03') {
      setSuggestedQuestions([
        { ar: 'اشرح قانون باسكال وتطبيقه في الرافعات الهيدروليكية', en: 'Explain Pascals law and its application in hydraulic jacks' },
        { ar: 'ما هي أنواع المضخات الهيدروليكية الأكثر استخداماً؟', en: 'What are the most commonly used types of hydraulic pumps?' },
        { ar: 'اذكر أهم قواعد السلامة عند صيانة الأنظمة الهيدروليكية', en: 'Mention the most important safety rules when maintaining hydraulic systems' }
      ]);
    } else {
      setSuggestedQuestions([
        { ar: 'لخص لي هذا المستند بالكامل في نقاط رئيسية', en: 'Summarize this entire document in key points' },
        { ar: 'استخرج أهم 5 مصطلحات تعليمية جديدة في هذا النص', en: 'Extract the top 5 new educational terms in this text' },
        { ar: 'اصنع لي دليلاً دراسياً سريعاً لمراجعة المنهج', en: 'Create a quick study guide to revise the syllabus' }
      ]);
    }
  }, [selectedDocId]);

  const [quizzes, setQuizzes] = useState({
    'doc-phys-01': [
      {
        questionAr: 'ما هي المعادلة الرياضية الأساسية التي تصف النظام الكمي وتغيره مع الزمن؟',
        questionEn: 'What is the fundamental mathematical equation that describes a quantum system and its change over time?',
        options: [
          'Hψ = Eψ (معادلة شرودنجر)',
          'E = mc² (معادلة آينشتاين للكتلة والطاقة)',
          'F = ma (قانون نيوتن الثاني)',
          'PV = nRT (قانون الغاز المثالي)'
        ],
        correctIndex: 0,
        explanationAr: 'معادلة شرودنجر (Hψ = Eψ) هي حجر الأساس في ميكانيكا الكم لوصف الحالات الكمية للأنظمة الفيزيائية ودوالها الموجية.',
        explanationEn: 'The Schrödinger equation (Hψ = Eψ) is the cornerstone of quantum mechanics, describing the quantum states and wave functions of physical systems.'
      },
      {
        questionAr: 'ينص مبدأ عدم اليقين لهايزنبرغ على أنه لا يمكن قياس خاصيتين بدقة متناهية في نفس الوقت. ما هما؟',
        questionEn: 'Heisenbergs uncertainty principle states that two properties cannot be measured with absolute precision simultaneously. What are they?',
        options: [
          'الكتلة والوزن (Mass and Weight)',
          'الموضع والزخم (Position and Momentum)',
          'درجة الحرارة والضغط (Temperature and Pressure)',
          'الشحنة الكهربية والسرعة (Electric Charge and Velocity)'
        ],
        correctIndex: 1,
        explanationAr: 'المبدأ ينص على أن حاصل ضرب عدم اليقين في الموضع (Δx) وعدم اليقين في الزخم (Δp) يجب أن يكون أكبر من أو يساوي ħ/2.',
        explanationEn: 'The principle states that the product of uncertainty in position (Δx) and uncertainty in momentum (Δp) must be greater than or equal to ħ/2.'
      },
      {
        questionAr: 'أي من العناصر التالية ليس من التطبيقات الهندسية المباشرة لميكانيكا الكم؟',
        questionEn: 'Which of the following is NOT a direct engineering application of quantum mechanics?',
        options: [
          'الخلايا الشمسية (Solar Cells)',
          'الليزر (Lasers)',
          'محركات الاحتراق الداخلي (Internal Combustion Engines)',
          'الحواسيب الكمومية (Quantum Computers)'
        ],
        correctIndex: 2,
        explanationAr: 'محركات الاحتراق الداخلي تعتمد على الديناميكا الحرارية والميكانيكا الكلاسيكية التقليدية، بينما تعتمد الخيارات الأخرى على التأثيرات الكمية المباشرة.',
        explanationEn: 'Internal combustion engines rely on traditional thermodynamics and classical mechanics, whereas the other options directly utilize quantum effects.'
      }
    ],
    'doc-ml-02': [
      {
        questionAr: 'أي من خوارزميات تعلم الآلة التالية تندرج تحت فئة التعلم غير الخاضع للإشراف (Unsupervised Learning)؟',
        questionEn: 'Which of the following machine learning algorithms falls under the category of Unsupervised Learning?',
        options: [
          'الانحدار الخطي (Linear Regression)',
          'تجميع المتوسطات الـ K-Means (K-Means Clustering)',
          'شبكات الدعم الآلي الموجهة (SVM)',
          'أشجار القرار (Decision Trees)'
        ],
        correctIndex: 1,
        explanationAr: 'خوارزمية K-Means تستخدم لتجميع البيانات غير المعنونة إلى مجموعات بناءً على التشابه، وهو تعريف التعلم غير الخاضع للإشراف.',
        explanationEn: 'K-Means clustering is used to group unlabeled data into clusters based on similarity, which defines unsupervised learning.'
      },
      {
        questionAr: 'ما هي الخوارزمية المستخدمة لتحديث الأوزان داخل الشبكة العصبية وتقليل دالة الخسارة؟',
        questionEn: 'What is the algorithm used to update weights within a neural network and minimize the loss function?',
        options: [
          'خوارزمية الفرز السريع (Quick Sort)',
          'الانتشار الخلفي (Backpropagation)',
          'أقصر مسار لديكسترا (Dijkstras Shortest Path)',
          'البحث الثنائي (Binary Search)'
        ],
        correctIndex: 1,
        explanationAr: 'خوارزمية الانتشار الخلفي تحسب اشتقاق الخطأ الكلي بالنسبة للأوزان لتعديلها تدريجياً عبر النزول العشوائي للميل (SGD).',
        explanationEn: 'The backpropagation algorithm calculates the derivative of the total error with respect to weights to adjust them using stochastic gradient descent.'
      }
    ],
    'doc-mech-03': [
      {
        questionAr: 'ما هو القانون الميكانيكي الذي يمثل الأساس لعمل الرافعات الهيدروليكية الصناعية؟',
        questionEn: 'What mechanical law is the fundamental basis for industrial hydraulic jacks?',
        options: [
          'قانون نيوتن الثالث (Newton Third Law)',
          'قانون باسكال (Pascal Law)',
          'قانون برنولي (Bernoulli Principle)',
          'قانون هوك للمرونة (Hooke Law)'
        ],
        correctIndex: 1,
        explanationAr: 'ينص قانون باسكال على أن الضغط في سائل محصور ينتقل بالتساوي وبقوة عمودية في كافة الاتجاهات، مما يتيح تضخيم القوى.',
        explanationEn: 'Pascal law states that pressure applied to a confined fluid is transmitted equally in all directions, enabling force amplification.'
      }
    ]
  });

  const [activeQuiz, setActiveQuiz] = useState(null);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizSelectedAnswer, setQuizSelectedAnswer] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);

  // Flashcards Database
  const [flashcards, setFlashcards] = useState({
    'doc-phys-01': [
      { termAr: 'ميكانيكا الكم', termEn: 'Quantum Mechanics', defAr: 'الفيزياء التي تدرس سلوك الجسيمات دون الذرية.', defEn: 'Physics that studies the behavior of subatomic particles.' },
      { termAr: 'معادلة شرودنجر', termEn: 'Schrödinger Equation', defAr: 'معادلة تصف كيف تتغير الحالة الكمية لنظام فيزيائي مع الزمن.', defEn: 'An equation describing how the quantum state of a physical system changes with time.' },
      { termAr: 'مبدأ عدم اليقين', termEn: 'Uncertainty Principle', defAr: 'استحالة تحديد الموضع والسرعة لجسيم معاً بدقة متناهية.', defEn: 'Impossibility of defining both position and velocity of a particle with absolute precision simultaneously.' },
      { termAr: 'التأثير الكهروضوئي', termEn: 'Photoelectric Effect', defAr: 'انبعاث الإلكترونات عند سقوط ضوء ذو تردد مناسب على معدن.', defEn: 'Emission of electrons when light of appropriate frequency shines on a metal.' }
    ],
    'doc-ml-02': [
      { termAr: 'تعلم خاضع للإشراف', termEn: 'Supervised Learning', defAr: 'تدريب الآلة على بيانات تحتوي على مدخلات وإجاباتها النموذجية.', defEn: 'Training the machine on labeled data that contains both inputs and correct output answers.' },
      { termAr: 'الشبكات العصبية', termEn: 'Neural Networks', defAr: 'نماذج حوسبة مستوحاة من تركيب الأعصاب البشرية لمعالجة البيانات.', defEn: 'Computing models inspired by human neural structures to process complex data.' },
      { termAr: 'الانتشار الخلفي', termEn: 'Backpropagation', defAr: 'طريقة لضبط أوزان الشبكة العصبية تدريجياً لتقليل الخطأ.', defEn: 'A method to adjust neural network weights progressively to minimize predictive error.' }
    ],
    'doc-mech-03': [
      { termAr: 'قانون باسكال', termEn: 'Pascal Law', defAr: 'الضغط في السائل المحصور ينتقل بالتساوي في جميع الاتجاهات.', defEn: 'Pressure in a confined fluid is transmitted equally in all directions.' },
      { termAr: 'مضخة تروسية', termEn: 'Gear Pump', defAr: 'مضخة تستخدم تروساً متشابكة لنقل وتحريك سائل الهيدروليك.', defEn: 'A pump that uses intermeshing gears to displace and move hydraulic fluid.' },
      { termAr: 'صمام التحكم الاتجاهي', termEn: 'Directional Valve', defAr: 'صمام يوجه تدفق سائل الهيدروليك للتحكم في اتجاه المشغلات.', defEn: 'A valve directing hydraulic fluid flow to control actuator motion direction.' }
    ]
  });

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [isGeneratingFlashcards, setIsGeneratingFlashcards] = useState(false);

  // Formula Center Database
  const [formulas, setFormulas] = useState({
    'doc-phys-01': [
      { id: 'f1', nameAr: 'معادلة شرودنجر المستقلة عن الزمن', nameEn: 'Time-Independent Schrödinger Equation', formula: 'Hψ = Eψ', variablesAr: ['H = مؤثر الهاملتونيان (الطاقة الكلية)', 'ψ = الدالة الموجية', 'E = مستويات الطاقة المتاحة للنظام'], variablesEn: ['H = Hamiltonian operator (total energy)', 'ψ = Wave function', 'E = Allowed energy levels of system'], derivationAr: 'تمثل قانون حفظ الطاقة الكلي في الميكانيكا الكمية مع استبدال الزخم والموقع بمؤثرات رياضية.', derivationEn: 'Represents the total conservation of energy in quantum mechanics, substituting momentum and position with mathematical operators.' },
      { id: 'f2', nameAr: 'مبدأ هايزنبرغ لعدم اليقين', nameEn: 'Heisenberg Uncertainty Principle', formula: 'Δx · Δp ≥ ħ / 2', variablesAr: ['Δx = عدم اليقين في تحديد الموضع', 'Δp = عدم اليقين في الزخم (السرعة × الكتلة)', 'ħ = ثابت بلانك المختزل (h/2π)'], variablesEn: ['Δx = Uncertainty in position', 'Δp = Uncertainty in momentum', 'ħ = Reduced Planck constant (h/2π)'], derivationAr: 'ينشأ من الطبيعة الموجية للجسيمات، حيث إن تحديد الطول الموجي بدقة يطمس معرفة الموضع بدقة.', derivationEn: 'Arises from the wave-particle duality, where defining a precise wavelength spreads out and blurs spatial position info.' }
    ],
    'doc-ml-02': [
      { id: 'f3', nameAr: 'قانون الانحدار الخطي البسيط', nameEn: 'Simple Linear Regression Formula', formula: 'y = w · x + b', variablesAr: ['y = القيمة المتوقعة', 'x = المتغير المستقل (المدخل)', 'w = الوزن (الميل)', 'b = الانحياز (التقاطع مع محور الصادات)'], variablesEn: ['y = Predicted output', 'x = Input feature', 'w = Weight parameter', 'b = Bias parameter'], derivationAr: 'تمثيل خط مستقيم يمر بالبيانات ويتم تدريب الأوزان لتصغير دالة متوسط مربعات الخطأ (MSE).', derivationEn: 'Represents a straight line fitted to data points, trained by minimizing Mean Squared Error (MSE).' }
    ],
    'doc-mech-03': [
      { id: 'f4', nameAr: 'صيغة قانون باسكال للضغط', nameEn: 'Pascals Pressure Formula', formula: 'P = F / A', variablesAr: ['P = الضغط (بالباسكال)', 'F = القوة المؤثرة (بالنيوتن)', 'A = مساحة السطح (بالمتر المربع)'], variablesEn: ['P = Pressure (Pascals)', 'F = Force applied (Newtons)', 'A = Surface area (m²)'], derivationAr: 'مستنتج من أن الموائع غير قابلة للانضغاط تنشر القوى الميكانيكية المسلطة عليها بالتساوي عبر كامل حجمها الحاصرة.', derivationEn: 'Derived from how incompressible fluids distribute force equally across all confined boundaries.' }
    ]
  });

  const [activeFormulaDetail, setActiveFormulaDetail] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Custom file input state
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  // Simulated AI API Metrics / Cost monitor
  const [simulatedTokens, setSimulatedTokens] = useState(48250);
  const [simulatedCost, setSimulatedCost] = useState(0.072);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
    addToast(language === 'ar' ? 'Switched to English Layout' : 'تم التحويل إلى الواجهة العربية', 'info');
  };

  const handleDocChange = (id) => {
    setSelectedDocId(id);
    addToast(language === 'ar' ? 'تم تبديل المنهج الدراسي النشط' : 'Active curriculum switched', 'success');
  };

  const generateRAGPrompt = (userPrompt, doc) => {
    return `
    You are النمر (Al-Nemr) 🐅, a premium, world-class Arabic and English AI educational platform designed for students, technical engineers, and university levels.
    
    SYSTEM RULES:
    1. Base your answer PRIMARILY on this context extracted from the uploaded document:
    --------------------------------------------------
    "${doc.content}"
    --------------------------------------------------
    If the context does not contain enough info, provide your expert educational knowledge but state that this is complementary to the uploaded curriculum file.
    2. NEVER hallucinate. If you don't know, state it clearly.
    3. You MUST deliver a BILINGUAL educational response containing both an ARABIC section and an ENGLISH section, structured beautifully.
    4. Provide the answer in this structured layout:
       ===ARABIC===
       [Beautiful detailed Arabic explanation, formatted with neat points, highlighting concepts, starting from fundamentals, giving examples/analogies]
       ===ENGLISH===
       [Beautiful detailed English explanation matching the content, with professional technical terminology, examples, and summaries]
       ===METADATA===
       Key Terms: [Term 1, Term 2]
       Analogy: [An illustrative analogy in both languages to simplify the difficult concept]

    User Prompt: "${userPrompt}"
    Teaching Mode: ${isTeachingMode ? 'Deep Educational Master Mode (Explain step-by-step, use analogies, simplify equations)' : 'Direct Q&A mode'}
    `;
  };

  const handleQuerySubmit = async (e) => {
    if (e) e.preventDefault();
    if (!currentQuery.trim() || isAiResponding) return;

    const userMessage = currentQuery;
    const activeDoc = documents.find(d => d.id === selectedDocId) || documents[0];
    
    // Add user message to chat history
    const newUserMsgObj = {
      role: 'user',
      textAr: userMessage,
      textEn: userMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistories(prev => ({
      ...prev,
      [selectedDocId]: [...(prev[selectedDocId] || []), newUserMsgObj]
    }));

    setCurrentQuery('');
    setIsAiResponding(true);

    try {
      // API Key provided automatically by the system context environment
      const apiKey = ""; 
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;
      
      const fullPrompt = generateRAGPrompt(userMessage, activeDoc);

      const payload = {
        contents: [{ parts: [{ text: fullPrompt }] }]
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const result = await response.json();
      const rawText = result.candidates?.[0]?.content?.parts?.[0]?.text || '';

      // Parse the bilingual structured response
      let arabicText = "حدث خطأ أثناء معالجة الرد بالعربية.";
      let englishText = "An error occurred while parsing the English response.";
      let extractedConcepts = [];
      let extractedAnalogy = "لم يتم تحديد تشبيه لهذا السؤال.";

      if (rawText.includes('===ARABIC===') && rawText.includes('===ENGLISH===')) {
        const parts = rawText.split('===');
        parts.forEach(part => {
          const trimmed = part.trim();
          if (trimmed.startsWith('ARABIC')) {
            arabicText = trimmed.replace('ARABIC', '').trim();
          } else if (trimmed.startsWith('ENGLISH')) {
            englishText = trimmed.replace('ENGLISH', '').trim();
          } else if (trimmed.startsWith('METADATA')) {
            const metaLines = trimmed.replace('METADATA', '').trim().split('\n');
            metaLines.forEach(line => {
              if (line.toLowerCase().includes('key terms:')) {
                extractedConcepts = line.split(':')[1]?.split(',').map(t => t.trim()) || [];
              }
              if (line.toLowerCase().includes('analogy:')) {
                extractedAnalogy = line.split(':')[1]?.trim() || "";
              }
            });
          }
        });
      } else {
        // Fallback if formatting was slightly missed by the model
        arabicText = rawText;
        englishText = "English version was merged or structured within the Arabic translation above.";
      }

      // Append assistant message
      const assistantMsgObj = {
        role: 'assistant',
        textAr: arabicText,
        textEn: englishText,
        concepts: extractedConcepts.length ? extractedConcepts : ['Educational Concept'],
        analogies: extractedAnalogy,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatHistories(prev => ({
        ...prev,
        [selectedDocId]: [...(prev[selectedDocId] || []), assistantMsgObj]
      }));

      // Update student XP progress
      setUserXP(prev => {
        const newXP = prev + 85;
        if (newXP >= nextLevelXP) {
          setUserLevel(l => l + 1);
          addToast(language === 'ar' ? '🎉 تهانينا! لقد ارتقيت إلى مستوى دراسي جديد!' : '🎉 Congratulations! You reached a new Study Level!', 'success');
          return newXP - nextLevelXP;
        }
        return newXP;
      });

      setQuestionsAsked(prev => prev + 1);
      // Simulate token accumulation
      setSimulatedTokens(prev => prev + 1250);
      setSimulatedCost(prev => prev + 0.0018);

    } catch (error) {
      console.error(error);
      addToast(language === 'ar' ? 'فشل الاتصال بمحرك النمر الذكي. حاول مجدداً.' : 'Failed to connect to Al-Nemr AI Engine. Try again.', 'error');
      
      // Fallback response for offline/throttling demo safety
      const fallbackAssistant = {
        role: 'assistant',
        textAr: `عذراً، أواجه ضغطاً في طلبات الخدمة الآن. بناءً على المنهج المختار "${activeDoc.titleAr}": هذا الجزء يعالج المفاهيم الهندسية المتقدمة للتطبيقات التقنية بطريقة متكاملة. يرجى تكرار المحاولة وسأجيبك فوراً بكل سرور!`,
        textEn: `Apologies, I am experiencing high API traffic. Based on the selected syllabus "${activeDoc.titleEn}": This component explores core theoretical laws and engineering components in a highly responsive fashion. Please try again!`,
        concepts: ['System Diagnostics', 'Network Capacity'],
        analogies: 'الأمر يشبه ازدحام السير في ساعة الذروة على طريق سريع رئيسي؛ تحتاج السيارات بعض الوقت لتصل لوجهتها!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatHistories(prev => ({
        ...prev,
        [selectedDocId]: [...(prev[selectedDocId] || []), fallbackAssistant]
      }));
    } finally {
      setIsAiResponding(false);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (filesList) => {
    Array.from(filesList).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const textContent = e.target.result || `مستند مستخرج تم تحميله بنجاح باسم: ${file.name}. هذا الملف يحتوي على بيانات ومعطيات المنهج التعليمي الخاص بـ ${file.name.split('.')[0]}.`;
        
        const newDoc = {
          id: `doc-uploaded-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          titleAr: `مستند مخصص: ${file.name.split('.')[0]}`,
          titleEn: `Custom Document: ${file.name.split('.')[0]}`,
          category: 'Uploaded Curriculum',
          size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
          pages: Math.max(1, Math.floor(file.size / 12000)),
          uploadedAt: 'Just Now',
          content: typeof textContent === 'string' ? textContent : 'محتوى مستخرج من الملف بنجاح.'
        };

        setDocuments(prev => [newDoc, ...prev]);
        setSelectedDocId(newDoc.id);
        setUploadedFilesCount(prev => prev + 1);

        // Pre-create dynamic chats and empty placeholders for formulas & quizzes
        setChatHistories(prev => ({
          ...prev,
          [newDoc.id]: [
            {
              role: 'assistant',
              textAr: `مرحباً، أنا النمر 🐅. لقد قمت بتحميل مستندك الجديد "${newDoc.titleAr}" بنجاح وجاري فهرسته في قاعدة بيانات المتجهات (Vector DB). كيف أساعدك في فهمه ومراجعته اليوم؟`,
              textEn: `Hello, I am Al-Nemr 🐅. I have successfully uploaded and indexed your new document "${newDoc.titleEn}". How can I help you study and analyze it today?`,
              concepts: ['Custom Document Indexing', 'Automatic Vector Embedding'],
              analogies: 'تحميل ملفك يشبه تنظيم كتاب جديد ممتلئ بالمعلومات القيمة ووضعه على الرف الأول للمكتبة لسهولة الوصول إليه!',
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]
        }));

        // Dynamic Quiz Generation Trigger Simulation
        setQuizzes(prev => ({
          ...prev,
          [newDoc.id]: [
            {
              questionAr: `ما هو الموضوع الرئيسي المطروح في بداية مستند "${newDoc.titleAr}"؟`,
              questionEn: `What is the primary theme highlighted in the introduction of "${newDoc.titleEn}"?`,
              options: [
                'التعامل مع المفاهيم والتعاريف الأساسية الواردة بالمنهج الدراسي',
                'دراسة الجوانب التاريخية البعيدة عن النطاق الهندسي',
                'مراجعة الإحصائيات الرياضية العامة',
                'تحليل هيكلية ملفات النظام الخارجية'
              ],
              correctIndex: 0,
              explanationAr: 'المستند يركز بشكل أساسي على شرح المفاهيم الأكاديمية والمهارات الهندسية التطبيقية الواردة بالمنهج المرفوع.',
              explanationEn: 'The document primarily emphasizes clarifying the educational concepts and engineering applications inside the uploaded curriculum.'
            }
          ]
        }));

        addToast(language === 'ar' ? '🚀 تم رفع المنهج الدراسي بنجاح وفهرسته بتقنية RAG!' : '🚀 Curriculum uploaded and indexed successfully via RAG!', 'success');
      };
      reader.readAsText(file);
    });
  };

  const deleteDocument = (id) => {
    if (documents.length <= 1) {
      addToast(language === 'ar' ? 'يجب الإبقاء على منهج دراسي واحد على الأقل لتجربة النظام!' : 'Keep at least one curriculum to test the system!', 'error');
      return;
    }
    setDocuments(prev => prev.filter(d => d.id !== id));
    if (selectedDocId === id) {
      const remaining = documents.filter(d => d.id !== id);
      setSelectedDocId(remaining[0].id);
    }
    addToast(language === 'ar' ? 'تم حذف الملف من خوادم التخزين وقاعدة البيانات' : 'File deleted from servers and databases', 'success');
  };

  const startQuiz = (docId) => {
    const list = quizzes[docId] || [];
    if (list.length === 0) {
      addToast(language === 'ar' ? 'لا توجد أسئلة كافية لهذا المستند، جاري توليد اختبار جديد...' : 'No questions found, generating quiz...', 'info');
      generateNewQuizAI(docId);
      return;
    }
    setActiveQuiz(list);
    setCurrentQuizIndex(0);
    setQuizSelectedAnswer(null);
    setQuizScore(0);
    setQuizSubmitted(false);
    setCurrentView('quiz-engine');
  };

  const generateNewQuizAI = async (docId) => {
    setIsGeneratingQuiz(true);
    addToast(language === 'ar' ? 'جاري الاتصال بـ النمر لتركيب أسئلة جديدة مبتكرة...' : 'Connecting to Al-Nemr to compile customized quiz...', 'info');
    
    const activeDoc = documents.find(d => d.id === docId) || documents[0];
    
    try {
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;
      
      const prompt = `
      Based on the educational syllabus content below, generate exactly 3 highly technical educational questions (MCQs with 4 options each).
      Ensure they cover critical equations, laws, definitions, or mechanisms.
      Return the output as a clean, strictly formatted JSON array. Do not include markdown code block syntax (like \`\`\`json) or any extra conversational text outside the array. It must be directly parseable.
      
      Syllabus Content:
      "${activeDoc.content}"

      JSON Schema structure to match:
      [
        {
          "questionAr": "السؤال الأكاديمي بالعربية",
          "questionEn": "Educational question in English",
          "options": ["الخيار الأول", "الخيار الثاني", "الخيار الثالث", "الخيار الرابع"],
          "correctIndex": 0,
          "explanationAr": "تفسير الإجابة وشرح القانون بالتفصيل بالعربية",
          "explanationEn": "Explanation of the correct answer and mechanism in English"
        }
      ]
      `;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });

      if (!response.ok) throw new Error('Failed quiz API');
      const data = await response.json();
      let rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      
      // Sanitizing code blocks if Gemini returns them
      rawText = rawText.replace(/```json/gi, '').replace(/```/gi, '').trim();
      
      const parsedQuizzes = JSON.parse(rawText);
      
      setQuizzes(prev => ({
        ...prev,
        [docId]: parsedQuizzes
      }));

      setActiveQuiz(parsedQuizzes);
      setCurrentQuizIndex(0);
      setQuizSelectedAnswer(null);
      setQuizScore(0);
      setQuizSubmitted(false);
      setCurrentView('quiz-engine');
      addToast(language === 'ar' ? '🎯 تم توليد اختبار ذكي مخصص من منهجك!' : '🎯 Smart customized quiz generated successfully!', 'success');
      
    } catch (e) {
      console.error(e);
      addToast(language === 'ar' ? 'تعذر توليد أسئلة مخصصة ديناميكياً. تم تفعيل الاختبار المعتمد.' : 'Custom generation timed out. Loading default curriculum quiz.', 'info');
      // Fallback fallback default
      const list = quizzes['doc-phys-01'];
      setActiveQuiz(list);
      setCurrentQuizIndex(0);
      setQuizSelectedAnswer(null);
      setQuizScore(0);
      setQuizSubmitted(false);
      setCurrentView('quiz-engine');
    } finally {
      setIsGeneratingQuiz(false);
    }
  };

  const generateNewFlashcardsAI = async (docId) => {
    setIsGeneratingFlashcards(true);
    addToast(language === 'ar' ? 'يقوم النمر الآن باستخراج المصطلحات التعليمية وبناء بطاقات مراجعة...' : 'Al-Nemr is extracting educational terminology for flashcards...', 'info');
    
    const activeDoc = documents.find(d => d.id === docId) || documents[0];
    
    try {
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;
      
      const prompt = `
      Based on the educational syllabus below, extract exactly 4 fundamental core terms or formulas.
      Provide a highly clear bilingual term and definition.
      Return the output as a clean, strictly formatted JSON array. Do not include markdown code block wrap.
      
      Syllabus Content:
      "${activeDoc.content}"

      JSON Schema:
      [
        {
          "termAr": "اسم المصطلح أو القانون بالعربية",
          "termEn": "Term or Law Name in English",
          "defAr": "تعريف مبسط ومميز للمصطلح بالعربية مع مثال",
          "defEn": "Simplified definition and example in English"
        }
      ]
      `;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });

      if (!response.ok) throw new Error('Flashcard API error');
      const data = await response.json();
      let rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      rawText = rawText.replace(/```json/gi, '').replace(/```/gi, '').trim();
      
      const parsedCards = JSON.parse(rawText);
      
      setFlashcards(prev => ({
        ...prev,
        [docId]: parsedCards
      }));
      setActiveCardIndex(0);
      setIsCardFlipped(false);
      addToast(language === 'ar' ? '🗂️ تم إنشاء بطاقات مراجعة تفاعلية ثلاثية الأبعاد!' : '🗂️ 3D interactive flashcards compiled successfully!', 'success');

    } catch (e) {
      console.error(e);
      addToast(language === 'ar' ? 'تعذر الإنتاج المخصص. تم تحميل بطاقات ميكانيكا الكم الافتراضية.' : 'Custom creation timed out. Loading preloaded study flashcards.', 'info');
    } finally {
      setIsGeneratingFlashcards(false);
    }
  };

  const submitAnswer = () => {
    if (quizSelectedAnswer === null) return;
    setQuizSubmitted(true);
    const isCorrect = quizSelectedAnswer === activeQuiz[currentQuizIndex].correctIndex;
    if (isCorrect) {
      setQuizScore(prev => prev + 1);
      setUserXP(prev => prev + 120);
      addToast(language === 'ar' ? 'أحسنت! إجابة صحيحة (+120 نقطة خبرة)' : 'Excellent! Correct answer (+120 XP)', 'success');
    } else {
      addToast(language === 'ar' ? 'إجابة خاطئة. اقرأ الشرح والتبسيط العلمي المرفق!' : 'Incorrect. Study the expert scientific explanation attached!', 'error');
    }
  };

  const nextQuestion = () => {
    if (currentQuizIndex + 1 < activeQuiz.length) {
      setCurrentQuizIndex(prev => prev + 1);
      setQuizSelectedAnswer(null);
      setQuizSubmitted(false);
    } else {
      // Finished entire quiz
      setQuizzesCompleted(prev => prev + 1);
      const calculatedPct = Math.round((quizScore / activeQuiz.length) * 100);
      setAverageQuizScore(prev => Math.round((prev + calculatedPct) / 2));
      
      addToast(language === 'ar' ? `🎉 أكملت الاختبار بمعدل نجاح ${calculatedPct}%!` : `🎉 Quiz complete! Total score: ${calculatedPct}%!`, 'success');
      setCurrentView('dashboard');
      setActiveQuiz(null);
    }
  };

  const filteredDocuments = documents.filter(doc => {
    if (!searchQuery) return true;
    const term = searchQuery.toLowerCase();
    return (
      doc.titleAr.toLowerCase().includes(term) ||
      doc.titleEn.toLowerCase().includes(term) ||
      doc.category.toLowerCase().includes(term) ||
      doc.content.toLowerCase().includes(term)
    );
  });

  const activeDoc = documents.find(d => d.id === selectedDocId) || documents[0];

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`} style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
      <style>{inlineStyles}</style>

      {/* Background visual design elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] rounded-full bg-blue-900/10 blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vh] rounded-full bg-amber-500/5 blur-[150px] animate-pulse-slow"></div>
        <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[100px]"></div>
      </div>

      {/* CUSTOM TOAST NOTIFICATIONS */}
      <div className="fixed top-5 right-5 left-5 md:right-5 md:left-auto z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
        {toasts.map(t => (
          <div 
            key={t.id} 
            className={`pointer-events-auto p-4 rounded-xl shadow-2xl flex items-center justify-between gap-3 border transition-all duration-300 transform translate-y-0 scale-100 ${
              t.type === 'success' ? 'bg-emerald-950/95 border-emerald-500 text-emerald-200' :
              t.type === 'error' ? 'bg-rose-950/95 border-rose-500 text-rose-200' :
              'bg-slate-900/95 border-blue-500 text-blue-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-semibold">{t.message}</span>
            </div>
            <button 
              onClick={() => setToasts(prev => prev.filter(x => x.id !== t.id))}
              className="text-xs opacity-70 hover:opacity-100 px-1"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* MASTER CONTAINER GRID */}
      <div className="relative z-10 flex min-h-screen">
        
        {/* PREMIUM SIDEBAR PANEL */}
        <aside className="hidden lg:flex flex-col w-80 bg-slate-950/80 border-e border-slate-800/80 backdrop-blur-xl p-6 flex-shrink-0">
          
          {/* Brand Identity / Tiger Neural Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="relative p-2 bg-gradient-to-br from-blue-600 to-amber-500 rounded-2xl shadow-lg glow-blue">
              <span className="text-3xl">🐅</span>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-amber-300 to-amber-500 font-arabic">
                النَّمِر
              </h1>
              <p className="text-xs text-slate-400 font-medium tracking-tight">
                Al-Nemr Educational AI
              </p>
            </div>
          </div>

          <div className="text-center bg-slate-900/60 rounded-xl p-2.5 border border-slate-800/60 mb-6">
            <span className="text-xs text-amber-400 font-semibold font-arabic block mb-1">
              "تعلم بذكاء، وافهم بعمق"
            </span>
          </div>

          {/* Sidebar Navigation */}
          <div className="flex flex-col gap-2 mb-6">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                currentView === 'dashboard' 
                  ? 'bg-blue-600 text-white font-semibold glow-blue' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <Compass className="w-5 h-5" />
              <span className="text-sm font-arabic">لوحة التحكم الرئيسية</span>
            </button>

            <button 
              onClick={() => setCurrentView('chat-studio')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                currentView === 'chat-studio' 
                  ? 'bg-blue-600 text-white font-semibold glow-blue' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm font-arabic">استوديو المحادثة الذكية</span>
            </button>

            <button 
              onClick={() => {
                const list = quizzes[selectedDocId] || [];
                if (list.length > 0) {
                  startQuiz(selectedDocId);
                } else {
                  generateNewQuizAI(selectedDocId);
                }
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                currentView === 'quiz-engine' 
                  ? 'bg-blue-600 text-white font-semibold glow-blue' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <Award className="w-5 h-5" />
              <span className="text-sm font-arabic">مولد الاختبارات الأكاديمية</span>
            </button>

            <button 
              onClick={() => {
                setCurrentView('flashcards');
                const list = flashcards[selectedDocId] || [];
                if (list.length === 0) {
                  generateNewFlashcardsAI(selectedDocId);
                }
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                currentView === 'flashcards' 
                  ? 'bg-blue-600 text-white font-semibold glow-blue' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <Layers className="w-5 h-5" />
              <span className="text-sm font-arabic">بطاقات المراجعة ثلاثية الأبعاد</span>
            </button>

            <button 
              onClick={() => setCurrentView('formulas')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                currentView === 'formulas' 
                  ? 'bg-blue-600 text-white font-semibold glow-blue' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <Sigma className="w-5 h-5" />
              <span className="text-sm font-arabic">مركز المعادلات والقوانين</span>
            </button>

            <button 
              onClick={() => setCurrentView('admin-panel')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                currentView === 'admin-panel' 
                  ? 'bg-blue-600 text-white font-semibold glow-blue' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <Cpu className="w-5 h-5" />
              <span className="text-sm font-arabic font-semibold">بوابة المراقبة والإشراف</span>
            </button>
          </div>

          {/* Active Syllabus Selector Widget */}
          <div className="mt-auto p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <h3 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider font-arabic flex items-center gap-1.5">
              <BookMarked className="w-3.5 h-3.5 text-blue-400" />
              المنهج الدراسي المختار:
            </h3>
            <div className="flex flex-col gap-2">
              {documents.map(doc => (
                <button
                  key={doc.id}
                  onClick={() => handleDocChange(doc.id)}
                  className={`text-start p-2 rounded-lg text-xs transition-all ${
                    selectedDocId === doc.id
                      ? 'bg-blue-950/80 border border-blue-600/60 text-blue-200 font-semibold'
                      : 'hover:bg-slate-800/40 text-slate-400'
                  }`}
                >
                  <p className="line-clamp-1">{language === 'ar' ? doc.titleAr : doc.titleEn}</p>
                </button>
              ))}
            </div>
          </div>

        </aside>

        {/* VIEWPORT CONTROLLER */}
        <div className="flex-1 flex flex-col min-w-0">
          
          {/* PREMIUM TOP BAR MODULE */}
          <header className="sticky top-0 z-40 bg-slate-950/65 border-b border-slate-800/80 backdrop-blur-xl px-6 py-4 flex items-center justify-between">
            
            {/* Left side profile & XP indicators */}
            <div className="flex items-center gap-4">
              <div className="lg:hidden flex items-center gap-2">
                <span className="text-2xl">🐅</span>
                <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-500 font-arabic">النمر</span>
              </div>
              
              <div className="hidden sm:flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-blue-400 shadow-inner">
                  Lvl {userLevel}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400">معدل نقاط الخبرة التعليمية</span>
                    <span className="text-xs text-blue-400 font-bold">{userXP} / {nextLevelXP} XP</span>
                  </div>
                  <div className="w-32 sm:w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-amber-500 transition-all duration-500"
                      style={{ width: `${(userXP / nextLevelXP) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle navigation on small screens */}
            <div className="flex lg:hidden gap-1">
              <button 
                onClick={() => setCurrentView('dashboard')}
                className={`p-2 rounded-lg ${currentView === 'dashboard' ? 'text-blue-400 bg-slate-900' : 'text-slate-400'}`}
                title="Dashboard"
              >
                <Compass className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setCurrentView('chat-studio')}
                className={`p-2 rounded-lg ${currentView === 'chat-studio' ? 'text-blue-400 bg-slate-900' : 'text-slate-400'}`}
                title="Chat"
              >
                <MessageSquare className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setCurrentView('formulas')}
                className={`p-2 rounded-lg ${currentView === 'formulas' ? 'text-blue-400 bg-slate-900' : 'text-slate-400'}`}
                title="Formulas"
              >
                <Sigma className="w-5 h-5" />
              </button>
            </div>

            {/* Right side Language & Quick Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 transition-all text-sm font-semibold text-slate-200"
              >
                <Globe className="w-4 h-4 text-blue-400" />
                <span>{language === 'ar' ? 'English' : 'العربية'}</span>
              </button>

              <div className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800 p-1 rounded-xl">
                <span className="text-xs text-slate-400 px-2 font-semibold">تصفح:</span>
                <select
                  value={selectedDocId}
                  onChange={(e) => handleDocChange(e.target.value)}
                  className="bg-transparent text-xs text-blue-400 border-none outline-none focus:ring-0 font-semibold cursor-pointer max-w-[150px] sm:max-w-xs"
                >
                  {documents.map(doc => (
                    <option key={doc.id} value={doc.id} className="bg-slate-950 text-slate-200">
                      {language === 'ar' ? doc.titleAr : doc.titleEn}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </header>

          {/* DYNAMIC SCENE MANAGER */}
          <main className="flex-1 p-6 overflow-y-auto max-w-7xl mx-auto w-full">
            
            {/* 1. DASHBOARD VIEW */}
            {currentView === 'dashboard' && (
              <div className="space-y-6">
                
                {/* Hero Showcase Segment */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-amber-950/30 border border-blue-900/30 p-8 glow-blue">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
                  <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold mb-3 uppercase tracking-wider font-arabic">
                        المنصة التعليمية الشاملة بالذكاء الاصطناعي
                      </span>
                      <h2 className="text-2xl md:text-3xl font-black mb-2 text-white font-arabic">
                        مرحباً بك في منصة النَّمِر الذكية
                      </h2>
                      <p className="text-sm md:text-base text-slate-300 max-w-xl font-arabic">
                        ارفع المنهج، الكتب المدرسية، أو المحاضرات الهندسية والجامعية، وتناقش مع الذكاء الاصطناعي الذي يحلل ويجيب بالعربية والإنجليزية بدقة تامة.
                      </p>
                    </div>
                    <button
                      onClick={() => setCurrentView('chat-studio')}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl shadow-lg font-bold transition-all transform hover:scale-102 glow-blue text-sm"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span className="font-arabic">ابدأ الدراسة الآن مع النمر</span>
                    </button>
                  </div>
                </div>

                {/* Simulated Educational Analytics Panel */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="glass-panel rounded-2xl p-4 flex items-center gap-4">
                    <div className="p-3 bg-blue-500/15 rounded-xl text-blue-400">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-arabic">المناهج المرفوعة</span>
                      <strong className="text-2xl font-black text-white">{documents.length}</strong>
                    </div>
                  </div>

                  <div className="glass-panel rounded-2xl p-4 flex items-center gap-4">
                    <div className="p-3 bg-amber-500/15 rounded-xl text-amber-400">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-arabic">الأسئلة المجابة</span>
                      <strong className="text-2xl font-black text-white">{questionsAsked}</strong>
                    </div>
                  </div>

                  <div className="glass-panel rounded-2xl p-4 flex items-center gap-4">
                    <div className="p-3 bg-purple-500/15 rounded-xl text-purple-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-arabic">الاختبارات المكتملة</span>
                      <strong className="text-2xl font-black text-white">{quizzesCompleted}</strong>
                    </div>
                  </div>

                  <div className="glass-panel rounded-2xl p-4 flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/15 rounded-xl text-emerald-400">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-arabic">متوسط الدرجات</span>
                      <strong className="text-2xl font-black text-white">{averageQuizScore}%</strong>
                    </div>
                  </div>
                </div>

                {/* Two Column Layout: Smart Document Upload & Active Library */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Smart Document Upload Widget (RAG Pipeline) */}
                  <div className="lg:col-span-5 glass-panel rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 font-arabic flex items-center gap-2">
                        <Upload className="w-5 h-5 text-blue-400" />
                        مركز الرفع الذكي للمناهج
                      </h3>
                      <p className="text-xs text-slate-400 mb-4 font-arabic">
                        يدعم PDF, DOCX, TXT ومذكرات الكلية. يقوم النظام آلياً باستخراج النصوص وبناء شجرة المفاهيم.
                      </p>

                      {/* Dropzone container */}
                      <div
                        onDragEnter={handleDrag}
                        onDragOver={handleDrag}
                        onDragLeave={handleDrag}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                          dragActive 
                            ? 'border-amber-400 bg-amber-500/5' 
                            : 'border-slate-700 hover:border-blue-500/80 hover:bg-slate-900/30'
                        }`}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          onChange={handleFileInputChange}
                          className="hidden"
                          accept=".txt,.json,.pdf,.docx,.doc"
                        />
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center text-slate-400 mb-3 border border-slate-700">
                            <Upload className="w-6 h-6 text-blue-400" />
                          </div>
                          <span className="text-sm font-semibold text-slate-200 block font-arabic">
                            اسحب وأفلت ملفات المناهج هنا
                          </span>
                          <span className="text-xs text-slate-400 block mt-1 font-arabic">
                            أو اضغط للتصفح من جهازك مباشرة
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                      <span className="font-arabic">معدل الفهرسة بالمتجهات:</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        نشط (Pinecone RAG)
                      </span>
                    </div>
                  </div>

                  {/* Active Library List & Study Actions */}
                  <div className="lg:col-span-7 glass-panel rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white font-arabic flex items-center gap-2">
                          <BookMarked className="w-5 h-5 text-amber-400" />
                          مكتبة المناهج النشطة بالمنصة
                        </h3>
                        <p className="text-xs text-slate-400 font-arabic">
                          اختر كتاباً أو منهجاً لبدء المحادثة، مراجعة النوتس أو اختبار ذكائك.
                        </p>
                      </div>
                      
                      {/* Search Bar inside library */}
                      <div className="relative max-w-xs">
                        <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          placeholder={language === 'ar' ? 'بحث عن منهج...' : 'Search curriculum...'}
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="bg-slate-900/80 border border-slate-800 rounded-lg py-1.5 pl-9 pr-4 text-xs text-slate-200 outline-none focus:border-blue-500 transition-all w-full"
                        />
                      </div>
                    </div>

                    {/* Grid of Curricula Cards */}
                    <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                      {filteredDocuments.map(doc => (
                        <div 
                          key={doc.id}
                          className={`p-4 rounded-xl border transition-all ${
                            selectedDocId === doc.id
                              ? 'bg-blue-950/40 border-blue-500/50 shadow-inner'
                              : 'bg-slate-900/40 border-slate-800 hover:bg-slate-800/30'
                          }`}
                        >
                          <div className="flex justify-between items-start gap-3">
                            <div className="cursor-pointer" onClick={() => handleDocChange(doc.id)}>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="px-2 py-0.5 bg-blue-950 text-blue-300 rounded text-[10px] font-bold">
                                  {doc.category}
                                </span>
                                <span className="text-[10px] text-slate-500 font-medium">
                                  {doc.size} • {doc.pages} Pages
                                </span>
                              </div>
                              <h4 className="text-sm font-bold text-white hover:text-blue-400 transition-all font-arabic">
                                {language === 'ar' ? doc.titleAr : doc.titleEn}
                              </h4>
                              <p className="text-xs text-slate-400 line-clamp-1 mt-1">
                                {doc.content}
                              </p>
                            </div>

                            <button
                              onClick={() => deleteDocument(doc.id)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/20 transition-all"
                              title="Delete file"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Instant study actions container */}
                          <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                              <span className="text-[10px] text-slate-400 font-arabic">RAG مجهز بالكامل</span>
                            </div>

                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => { handleDocChange(doc.id); setCurrentView('chat-studio'); }}
                                className="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-[10px] font-bold font-arabic"
                              >
                                مناقشة المنهج
                              </button>
                              <button
                                onClick={() => { handleDocChange(doc.id); startQuiz(doc.id); }}
                                className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded text-[10px] font-bold font-arabic"
                              >
                                اختبار فوري
                              </button>
                              <button
                                onClick={() => { handleDocChange(doc.id); setCurrentView('formulas'); }}
                                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[10px] font-bold font-arabic"
                              >
                                القوانين المستخرجة
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}

                      {filteredDocuments.length === 0 && (
                        <div className="text-center py-8 text-slate-500 font-arabic text-sm">
                          لا توجد نتائج بحث مطابقة. يرجى تعديل البحث أو رفع منهج دراسي جديد.
                        </div>
                      )}
                    </div>
                  </div>

                </div>

                {/* Educational Insights & Formula/Concepts Strip */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  <div className="glass-panel rounded-2xl p-5 border-l-4 border-l-blue-500">
                    <h4 className="font-bold text-white mb-2 font-arabic flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-blue-400" />
                      طريقة دراسية موصى بها
                    </h4>
                    <p className="text-xs text-slate-300 font-arabic leading-relaxed">
                      ابدأ بقراءة مستند ميكانيكا الكم، ثم افتح استوديو المحادثة واسأل النمر عن "مبدأ عدم اليقين بأسلوب مبسط". استعمل بطاقات الذاكرة لمراجعة المفاهيم وحفظها في الذاكرة طويلة الأمد.
                    </p>
                  </div>

                  <div className="glass-panel rounded-2xl p-5 border-l-4 border-l-amber-500">
                    <h4 className="font-bold text-white mb-2 font-arabic flex items-center gap-1.5">
                      <Brain className="w-4 h-4 text-amber-400" />
                      التبسيط الأكاديمي والتشبيه
                    </h4>
                    <p className="text-xs text-slate-300 font-arabic leading-relaxed">
                      النمر مبرمج خصيصاً لاستعمال "المجاز والتشبيه العلمي" (Analogies) ليقرب لك الفكرة الهندسية. اسأل عن كيفية تبسيط الترانزستور أو الذكاء الاصطناعي وراقب السحر!
                    </p>
                  </div>

                  <div className="glass-panel rounded-2xl p-5 border-l-4 border-l-purple-500">
                    <h4 className="font-bold text-white mb-2 font-arabic flex items-center gap-1.5">
                      <Binary className="w-4 h-4 text-purple-400" />
                      تحديث فوري لـ Vector DB
                    </h4>
                    <p className="text-xs text-slate-300 font-arabic leading-relaxed">
                      عند رفع أي منهج جديد، تقوم شبكتنا بتقسيم النص لفقرات، وتتحول لنواقل رقمية (Embeddings) فورية لتقديم استجابة دقيقة لا تتعدى ثانيتين.
                    </p>
                  </div>

                </div>

              </div>
            )}

            {/* 2. CHAT STUDIO VIEW (CHATP-STYLE RAG INTERFACE) */}
            {currentView === 'chat-studio' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-140px)]">
                
                {/* Left Mini-Dashboard (Context Controller) */}
                <div className="lg:col-span-3 glass-panel rounded-2xl p-4 flex flex-col justify-between hidden lg:flex">
                  <div>
                    <h3 className="text-sm font-bold text-white mb-3 font-arabic flex items-center gap-1.5">
                      <Settings className="w-4 h-4 text-blue-400" />
                      إعدادات جلسة الدراسة
                    </h3>
                    
                    {/* Active File Card */}
                    <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 mb-4">
                      <span className="text-[10px] text-amber-400 font-semibold font-arabic block mb-1">
                        الملف النشط كمرجع للذكاء الاصطناعي:
                      </span>
                      <strong className="text-xs text-white block line-clamp-1 font-arabic">
                        {language === 'ar' ? activeDoc.titleAr : activeDoc.titleEn}
                      </strong>
                      <span className="text-[10px] text-slate-500 block mt-1">
                        Category: {activeDoc.category}
                      </span>
                    </div>

                    {/* Teaching Mode Switch */}
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-300 font-semibold font-arabic">نمط التدريس والتبسيط</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 font-bold">نشط</span>
                      </div>
                      <p className="text-[10px] text-slate-400 font-arabic leading-relaxed">
                        عند التفعيل، يقوم الذكاء الاصطناعي بالبدء من الصفر، مستخدماً الأمثلة التوضيحية والتشبيه لشرح المصطلحات الصعبة.
                      </p>
                      <button
                        onClick={() => {
                          setIsTeachingMode(!isTeachingMode);
                          addToast(language === 'ar' ? 'تم تعديل نمط الشرح والتبسيط' : 'Teaching mode updated', 'info');
                        }}
                        className={`w-full py-1.5 rounded-lg text-xs font-bold transition-all ${
                          isTeachingMode 
                            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-lg glow-gold'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {isTeachingMode ? 'وضع المعلم الذكي (نشط)' : 'وضع السؤال والجواب السريع'}
                      </button>
                    </div>
                  </div>

                  {/* Core Platform Rules */}
                  <div className="text-[10px] text-slate-500 space-y-1.5 leading-relaxed pt-4 border-t border-slate-800">
                    <p className="flex items-center gap-1 text-slate-400 font-arabic">
                      <Info className="w-3.5 h-3.5 text-blue-400" />
                      قواعد ذكاء النمر:
                    </p>
                    <p className="font-arabic">1. الإجابة مبنية على المستند المرفوع لضمان الدقة.</p>
                    <p className="font-arabic">2. استخراج قوانين وتوليد تشبيهات معقدة.</p>
                    <p className="font-arabic">3. رد ثنائي لتعلم المصطلحات التقنية بالإنجليزية.</p>
                  </div>
                </div>

                {/* Main Chat Studio Workspace */}
                <div className="lg:col-span-9 glass-panel rounded-2xl flex flex-col justify-between overflow-hidden">
                  
                  {/* Chat Studio Header */}
                  <div className="p-4 bg-slate-900/50 border-b border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/20 flex items-center justify-center">
                        🐅
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white font-arabic">محادثة النمر الذكي الأكاديمية</h3>
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                          <span className="text-[10px] text-emerald-400 font-semibold font-arabic">جاهز للتحليل الدقيق</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400 hidden sm:inline font-arabic">مستوى التبسيط:</span>
                      <span className="text-xs text-blue-400 font-bold font-arabic bg-blue-950 px-2 py-1 rounded border border-blue-900/60">
                        {isTeachingMode ? 'شرح تفصيلي + أمثلة' : 'مختصر ومباشر'}
                      </span>
                    </div>
                  </div>

                  {/* Messages container list */}
                  <div className="flex-1 p-6 overflow-y-auto space-y-4">
                    {(chatHistories[selectedDocId] || []).map((msg, idx) => (
                      <div 
                        key={idx}
                        className={`flex gap-3 max-w-[85%] ${
                          msg.role === 'user' ? 'ms-auto flex-row-reverse' : 'me-auto'
                        }`}
                      >
                        {/* Avatar */}
                        <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-sm ${
                          msg.role === 'user' ? 'bg-amber-600 text-white' : 'bg-blue-600 text-white shadow'
                        }`}>
                          {msg.role === 'user' ? '👤' : '🐅'}
                        </div>

                        {/* Speech Bubble Card */}
                        <div className={`space-y-3 ${msg.role === 'user' ? 'text-start' : 'text-start'}`}>
                          <div className={`p-4 rounded-2xl text-sm ${
                            msg.role === 'user' 
                              ? 'bg-blue-600 text-white rounded-te-none' 
                              : 'bg-slate-900 border border-slate-800 rounded-ts-none'
                          }`}>
                            
                            {/* USER MESSAGE VIEW */}
                            {msg.role === 'user' && (
                              <p className="font-arabic leading-relaxed font-semibold">{msg.textAr}</p>
                            )}

                            {/* ASSISTANT MULTI-COLUMN VIEW */}
                            {msg.role === 'assistant' && (
                              <div className="space-y-4">
                                
                                {/* Quick Navigation Header inside AI bubble */}
                                <div className="border-b border-slate-800 pb-2 mb-2 flex flex-wrap items-center justify-between gap-2">
                                  <span className="text-[11px] text-slate-400 font-bold flex items-center gap-1 font-arabic">
                                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                                    تحليل النمر الأكاديمي ثنائي اللغة:
                                  </span>
                                  <span className="text-[9px] text-slate-500 font-mono">
                                    {msg.timestamp}
                                  </span>
                                </div>

                                {/* Dynamic Bilingual Visual Columns */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  
                                  {/* ARABIC COLUMN */}
                                  <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/80">
                                    <span className="inline-flex items-center gap-1 text-[10px] text-amber-400 font-bold uppercase mb-2 font-arabic">
                                      🇸🇦 شرح مفصل بالعربية:
                                    </span>
                                    <div className="text-slate-200 font-arabic text-xs leading-relaxed whitespace-pre-line">
                                      {msg.textAr}
                                    </div>
                                  </div>

                                  {/* ENGLISH COLUMN */}
                                  <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/80" style={{ direction: 'ltr' }}>
                                    <span className="inline-flex items-center gap-1 text-[10px] text-blue-400 font-bold uppercase mb-2">
                                      🇬🇧 ENGLISH TRANSLATION & KEY TERMS:
                                    </span>
                                    <div className="text-slate-300 text-xs leading-relaxed whitespace-pre-line font-mono">
                                      {msg.textEn}
                                    </div>
                                  </div>

                                </div>

                                {/* Analogy strip if defined */}
                                {msg.analogies && (
                                  <div className="mt-3 p-3 bg-amber-500/5 rounded-xl border border-amber-500/20 text-xs">
                                    <strong className="text-amber-400 font-arabic block mb-1">💡 التشبيه التبسيطي للأفكار الصعبة:</strong>
                                    <p className="text-slate-300 font-arabic leading-relaxed">
                                      {msg.analogies}
                                    </p>
                                  </div>
                                )}

                                {/* Key concepts list */}
                                {msg.concepts && msg.concepts.length > 0 && (
                                  <div className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-slate-800/60">
                                    {msg.concepts.map((c, i) => (
                                      <span key={i} className="px-2 py-0.5 bg-slate-950 border border-slate-800 text-[10px] text-blue-400 rounded-md font-semibold font-mono">
                                        #{c}
                                      </span>
                                    ))}
                                  </div>
                                )}

                              </div>
                            )}

                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Typing status indicator */}
                    {isAiResponding && (
                      <div className="flex gap-3 max-w-[85%] me-auto">
                        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-sm text-white">
                          🐅
                        </div>
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl rounded-ts-none p-4 text-xs text-slate-400 font-arabic">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></span>
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-100"></span>
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-200"></span>
                            <span>يقوم النمر بفحص الفهرس وصياغة الإجابة...</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div ref={chatEndRef} />
                  </div>

                  {/* Suggestion list prompt cards */}
                  <div className="px-6 py-2 border-t border-slate-800/80 bg-slate-950/40 flex flex-wrap gap-1.5">
                    <span className="text-[10px] text-slate-400 font-arabic self-center">أسئلة مقترحة:</span>
                    {suggestedQuestions.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentQuery(language === 'ar' ? q.ar : q.en)}
                        className="text-[10px] bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white px-2.5 py-1 rounded-lg border border-slate-800 transition-all font-arabic text-start line-clamp-1"
                      >
                        {language === 'ar' ? q.ar : q.en}
                      </button>
                    ))}
                  </div>

                  {/* Message Input Segment */}
                  <div className="p-4 bg-slate-900/30 border-t border-slate-800/80">
                    <form onSubmit={handleQuerySubmit} className="flex gap-2">
                      <input
                        type="text"
                        value={currentQuery}
                        onChange={(e) => setCurrentQuery(e.target.value)}
                        placeholder={language === 'ar' ? "اسأل النمر أي سؤال بخصوص المنهج الحالي..." : "Ask Al-Nemr anything about the current syllabus..."}
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none focus:border-blue-500 transition-all font-arabic"
                      />
                      <button
                        type="submit"
                        disabled={isAiResponding || !currentQuery.trim()}
                        className="px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl shadow-lg font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 font-arabic text-sm"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>ارسل</span>
                      </button>
                    </form>
                  </div>

                </div>

              </div>
            )}

            {/* 3. INTERACTIVE QUIZ ENGINE VIEW */}
            {currentView === 'quiz-engine' && activeQuiz && (
              <div className="max-w-2xl mx-auto space-y-6">
                
                {/* Quiz Header Progress Status */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-amber-400 font-bold uppercase tracking-wider font-arabic">
                      اختبار مخصص من المنهج المرفوع 🎯
                    </span>
                    <h2 className="text-xl font-black text-white font-arabic">
                      {language === 'ar' ? activeDoc.titleAr : activeDoc.titleEn}
                    </h2>
                  </div>

                  <div className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-400">
                    سؤال <strong className="text-blue-400">{currentQuizIndex + 1}</strong> من <strong>{activeQuiz.length}</strong>
                  </div>
                </div>

                {/* Progress Visual Bar */}
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${((currentQuizIndex) / activeQuiz.length) * 100}%` }}
                  ></div>
                </div>

                {/* Interactive Question Card */}
                <div className="glass-panel rounded-2xl p-6 space-y-6">
                  
                  {/* Question Box */}
                  <div className="space-y-3">
                    <p className="text-lg font-bold text-white leading-relaxed font-arabic">
                      {activeQuiz[currentQuizIndex].questionAr}
                    </p>
                    <p className="text-sm text-slate-400 italic font-mono leading-relaxed" style={{ direction: 'ltr' }}>
                      {activeQuiz[currentQuizIndex].questionEn}
                    </p>
                  </div>

                  {/* Options List */}
                  <div className="space-y-3">
                    {activeQuiz[currentQuizIndex].options.map((opt, oIdx) => {
                      const isSelected = quizSelectedAnswer === oIdx;
                      const showFeedback = quizSubmitted;
                      const isCorrect = oIdx === activeQuiz[currentQuizIndex].correctIndex;
                      
                      let btnStyle = "border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-200";
                      if (isSelected) btnStyle = "border-blue-500 bg-blue-950/40 text-blue-200";
                      
                      if (showFeedback) {
                        if (isCorrect) btnStyle = "border-emerald-500 bg-emerald-950/40 text-emerald-200 font-bold";
                        else if (isSelected) btnStyle = "border-rose-500 bg-rose-950/40 text-rose-200";
                        else btnStyle = "border-slate-800 bg-slate-900/20 text-slate-500 pointer-events-none";
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={quizSubmitted}
                          onClick={() => setQuizSelectedAnswer(oIdx)}
                          className={`w-full text-start p-4 rounded-xl border transition-all flex items-center justify-between gap-3 text-sm ${btnStyle}`}
                        >
                          <span className="font-arabic font-semibold">{opt}</span>
                          
                          {/* Checked Icon logic */}
                          {showFeedback && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />}
                          {showFeedback && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Quiz actions (Submit / Next) */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <div>
                      {quizSubmitted && (
                        <span className="text-xs text-slate-400 font-arabic">
                          الإجابة الصحيحة موضحة باللون الأخضر.
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {!quizSubmitted ? (
                        <button
                          onClick={submitAnswer}
                          disabled={quizSelectedAnswer === null}
                          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl font-bold font-arabic text-sm shadow transition-all"
                        >
                          تأكيد الإجابة والتحقق
                        </button>
                      ) : (
                        <button
                          onClick={nextQuestion}
                          className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black rounded-xl text-sm shadow transition-all flex items-center gap-1.5"
                        >
                          <span>{currentQuizIndex + 1 === activeQuiz.length ? 'إنهاء وحفظ النتيجة' : 'السؤال التالي'}</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                </div>

                {/* Explanatory Context card visible after submission */}
                {quizSubmitted && (
                  <div className="glass-panel-gold rounded-2xl p-5 border-l-4 border-l-amber-500 space-y-3">
                    <h4 className="font-bold text-amber-400 font-arabic flex items-center gap-1.5">
                      <Sparkles className="w-5 h-5" />
                      شرح وتفصيل علمي من النمر 🐅:
                    </h4>
                    
                    <div className="space-y-2">
                      <p className="text-xs text-slate-200 leading-relaxed font-arabic">
                        {activeQuiz[currentQuizIndex].explanationAr}
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed font-mono italic" style={{ direction: 'ltr' }}>
                        {activeQuiz[currentQuizIndex].explanationEn}
                      </p>
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* 4. FLASHCARD HUB VIEW */}
            {currentView === 'flashcards' && (
              <div className="max-w-xl mx-auto space-y-6">
                
                <div className="text-center">
                  <span className="text-xs text-amber-400 font-bold uppercase font-arabic">
                    بطاقات الذاكرة ثلاثية الأبعاد التفاعلية 🗂️
                  </span>
                  <h2 className="text-2xl font-black text-white font-arabic mt-1">
                    ترسيخ المصطلحات والقوانين الهندسية
                  </h2>
                  <p className="text-xs text-slate-400 font-arabic mt-1">
                    اضغط على البطاقة لقلبها وقراءة التعريف العلمي المعبر عنها بالعربية والإنجليزية.
                  </p>
                </div>

                {/* Quick actions bar */}
                <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                  <button
                    onClick={() => generateNewFlashcardsAI(selectedDocId)}
                    disabled={isGeneratingFlashcards}
                    className="px-3 py-1.5 bg-blue-600/20 text-blue-300 hover:bg-blue-600 hover:text-white rounded-lg border border-blue-500/20 text-xs font-bold transition-all disabled:opacity-50 font-arabic"
                  >
                    {isGeneratingFlashcards ? 'جاري التوليد بالذكاء الاصطناعي...' : '🔄 توليد بطاقات جديدة للمستند'}
                  </button>

                  <div className="text-xs text-slate-400">
                    مستند: <span className="text-blue-400 font-bold font-arabic">{documents.find(d => d.id === selectedDocId)?.category}</span>
                  </div>
                </div>

                {/* Interactive Flipping Card Structure */}
                {flashcards[selectedDocId] && flashcards[selectedDocId].length > 0 ? (
                  <div className="space-y-6">
                    <div 
                      onClick={() => setIsCardFlipped(!isCardFlipped)}
                      className="w-full h-80 perspective-1000 cursor-pointer"
                    >
                      <div className={`relative w-full h-full duration-500 preserve-3d transition-transform ${isCardFlipped ? 'rotate-y-180' : ''}`}>
                        
                        {/* FRONT SIDE (Term Name) */}
                        <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-slate-800 flex flex-col justify-between p-8 backface-hidden shadow-2xl glow-blue">
                          <div className="flex justify-between items-center text-xs text-slate-500">
                            <span>النمر FLASHCARD HUB</span>
                            <span>{activeCardIndex + 1} / {flashcards[selectedDocId].length}</span>
                          </div>

                          <div className="text-center space-y-4">
                            <h3 className="text-2xl font-black text-white tracking-wide font-arabic">
                              {flashcards[selectedDocId][activeCardIndex].termAr}
                            </h3>
                            <p className="text-lg text-blue-400 font-mono italic">
                              {flashcards[selectedDocId][activeCardIndex].termEn}
                            </p>
                          </div>

                          <div className="text-center text-xs text-amber-500 font-arabic animate-pulse">
                            انقر لقلب البطاقة وقراءة التعريف ↻
                          </div>
                        </div>

                        {/* BACK SIDE (Definition Detail) */}
                        <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-blue-950 to-slate-950 border-2 border-blue-500/40 flex flex-col justify-between p-8 rotate-y-180 backface-hidden shadow-2xl glow-gold">
                          <div className="flex justify-between items-center text-xs text-slate-500">
                            <span className="text-amber-400 font-semibold font-arabic">التبسيط والمفهوم الأكاديمي</span>
                            <span>BACKSIDE</span>
                          </div>

                          <div className="space-y-4 text-start">
                            <div>
                              <span className="text-[10px] text-amber-400 font-bold uppercase block mb-1 font-arabic">العربية:</span>
                              <p className="text-sm font-semibold text-slate-100 leading-relaxed font-arabic">
                                {flashcards[selectedDocId][activeCardIndex].defAr}
                              </p>
                            </div>
                            <div style={{ direction: 'ltr' }}>
                              <span className="text-[10px] text-blue-400 font-bold uppercase block mb-1">English Definition:</span>
                              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                                {flashcards[selectedDocId][activeCardIndex].defEn}
                              </p>
                            </div>
                          </div>

                          <div className="text-center text-[10px] text-slate-500 font-arabic">
                            انقر مجدداً لقلب البطاقة للخلف
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsCardFlipped(false);
                          setTimeout(() => {
                            setActiveCardIndex(prev => Math.max(0, prev - 1));
                          }, 150);
                        }}
                        disabled={activeCardIndex === 0}
                        className="p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1.5 font-arabic text-xs"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        السابق
                      </button>

                      <span className="text-xs text-slate-400">
                        سجل التصفح وحفظ المفاهيم
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsCardFlipped(false);
                          setTimeout(() => {
                            setActiveCardIndex(prev => Math.min(flashcards[selectedDocId].length - 1, prev + 1));
                          }, 150);
                        }}
                        disabled={activeCardIndex === flashcards[selectedDocId].length - 1}
                        className="p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1.5 font-arabic text-xs"
                      >
                        التالي
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-8 bg-slate-900/40 rounded-2xl border border-slate-800 text-slate-400 font-arabic">
                    لا توجد بطاقات ذاكرة مجهزة لهذا المستند حالياً. اضغط على زر توليد بطاقات جديدة بالذكاء الاصطناعي بالأعلى!
                  </div>
                )}

              </div>
            )}

            {/* 5. FORMULA CENTER VIEW */}
            {currentView === 'formulas' && (
              <div className="space-y-6">
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between justify-start gap-4">
                  <div>
                    <span className="text-xs text-amber-400 font-bold uppercase font-arabic">
                      مركز الاستخراج الآلي والمعادلات الهندسية 📊
                    </span>
                    <h2 className="text-2xl font-black text-white font-arabic mt-1">
                      صيغ، قوانين، وحسابات المناهج
                    </h2>
                    <p className="text-xs text-slate-400 font-arabic mt-1">
                      يقوم محرك النمر تلقائياً برصد وكتابة دلالات المتغيرات الفيزيائية والهندسية وحساباتها.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => addToast(language === 'ar' ? 'تم جلب وتحديث المعادلات المتاحة بالملف' : 'Formulas database synced', 'success')}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 rounded-xl transition-all font-arabic"
                    >
                      تزامن يدوي مع RAG
                    </button>
                  </div>
                </div>

                {/* Display Formulas Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Left List Column */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-slate-400 font-arabic uppercase tracking-wider">
                      مجموعة المعادلات المستخرجة بالمنهج:
                    </h3>
                    
                    {formulas[selectedDocId] && formulas[selectedDocId].length > 0 ? (
                      formulas[selectedDocId].map(form => (
                        <div
                          key={form.id}
                          onClick={() => setActiveFormulaDetail(form)}
                          className={`p-5 rounded-xl border cursor-pointer transition-all ${
                            activeFormulaDetail?.id === form.id
                              ? 'bg-blue-950/40 border-blue-500 shadow-inner'
                              : 'bg-slate-900/40 border-slate-800 hover:bg-slate-850'
                          }`}
                        >
                          <div className="flex justify-between items-start gap-2 mb-2">
                            <h4 className="font-bold text-white font-arabic text-sm">
                              {form.nameAr}
                            </h4>
                            <span className="text-[10px] px-2 py-0.5 bg-blue-900/30 text-blue-400 border border-blue-500/20 rounded font-semibold font-mono">
                              MATH-LAW
                            </span>
                          </div>

                          <div className="bg-slate-950/80 p-3 rounded-lg text-center font-mono text-xl text-amber-400 font-black tracking-widest my-3 border border-slate-800/80">
                            {form.formula}
                          </div>

                          <p className="text-xs text-slate-400 line-clamp-1 font-arabic">
                            {form.derivationAr}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-10 bg-slate-900/35 rounded-xl border border-slate-800 text-slate-400 text-xs font-arabic">
                        لا توجد معادلات مستخرجة لهذا المستند كمعادلات مخصصة. يمكنك طرح سؤال بالمحادثة بخصوص القوانين وسيوضحها لك النمر!
                      </div>
                    )}
                  </div>

                  {/* Right Detail Column */}
                  <div>
                    {activeFormulaDetail ? (
                      <div className="glass-panel rounded-2xl p-6 space-y-6 sticky top-24 border-2 border-blue-500/20 shadow-2xl">
                        <div className="border-b border-slate-800 pb-4">
                          <span className="text-[10px] text-amber-400 font-bold uppercase block mb-1 font-arabic">تفاصيل الاشتقاق والدلالات</span>
                          <h3 className="text-lg font-black text-white font-arabic">
                            {activeFormulaDetail.nameAr}
                          </h3>
                          <p className="text-xs text-slate-400 italic font-mono mt-1" style={{ direction: 'ltr' }}>
                            {activeFormulaDetail.nameEn}
                          </p>
                        </div>

                        {/* Equation Box Large */}
                        <div className="bg-slate-950 p-6 rounded-xl text-center border border-slate-800 shadow-inner glow-blue">
                          <span className="text-[10px] text-slate-500 block mb-2 uppercase tracking-widest">Mathematical Formula</span>
                          <div className="text-2xl md:text-3xl font-black text-blue-400 font-mono tracking-widest">
                            {activeFormulaDetail.formula}
                          </div>
                        </div>

                        {/* Variables mapping block */}
                        <div className="space-y-4">
                          <h4 className="text-xs font-bold text-white font-arabic uppercase tracking-wider">
                            دلالة الرموز والمتغيرات:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            
                            {/* Arabic Variables */}
                            <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800/60">
                              <span className="text-[10px] text-amber-400 font-bold block mb-1.5 font-arabic">الشرح بالعربية:</span>
                              <ul className="space-y-1 text-xs text-slate-200 font-arabic list-disc pl-3">
                                {activeFormulaDetail.variablesAr.map((v, i) => (
                                  <li key={i}>{v}</li>
                                ))}
                              </ul>
                            </div>

                            {/* English Variables */}
                            <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800/60" style={{ direction: 'ltr' }}>
                              <span className="text-[10px] text-blue-400 font-bold block mb-1.5">English Variable Glossary:</span>
                              <ul className="space-y-1 text-xs text-slate-300 font-mono list-disc pl-3">
                                {activeFormulaDetail.variablesEn.map((v, i) => (
                                  <li key={i}>{v}</li>
                                ))}
                              </ul>
                            </div>

                          </div>
                        </div>

                        {/* Derivation explanations */}
                        <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl space-y-2">
                          <strong className="text-xs text-amber-400 font-arabic block">أصل القانون وتطبيقاته الهندسية الصناعية:</strong>
                          <p className="text-xs text-slate-200 leading-relaxed font-arabic">
                            {activeFormulaDetail.derivationAr}
                          </p>
                          <p className="text-xs text-slate-400 italic leading-relaxed font-mono" style={{ direction: 'ltr' }}>
                            {activeFormulaDetail.derivationEn}
                          </p>
                        </div>

                      </div>
                    ) : (
                      <div className="h-full min-h-[400px] border-2 border-dashed border-slate-800 rounded-2xl flex flex-col items-center justify-center p-8 text-center text-slate-500">
                        <Sigma className="w-12 h-12 text-slate-700 mb-3" />
                        <h4 className="font-bold text-slate-400 font-arabic text-sm">حدد قانوناً رياضياً من القائمة</h4>
                        <p className="text-xs text-slate-600 mt-1 max-w-xs font-arabic">
                          اختر أي قانون باليسار لعرض الدلالات، وتفاصيل الاشتقاق والمتغيرات المصاحبة له بالتفصيل.
                        </p>
                      </div>
                    )}
                  </div>

                </div>

              </div>
            )}

            {/* 6. GATEWAY MONITORING / ADMIN PANEL VIEW */}
            {currentView === 'admin-panel' && (
              <div className="space-y-6">
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-rose-500 font-bold uppercase tracking-wider font-arabic">
                      إدارة الإشراف ومراقبة الخادم 🛡️
                    </span>
                    <h2 className="text-2xl font-black text-white font-arabic mt-1">
                      بوابة النمر لمتابعة موارد الخادم
                    </h2>
                    <p className="text-xs text-slate-400 font-arabic mt-1">
                      مراقبة حية لاستهلاك الـ API وتكاليف الذكاء الاصطناعي ومعدل الاستجابة ومساحة الـ DB.
                    </p>
                  </div>

                  <span className="px-3 py-1 bg-rose-950/40 text-rose-400 border border-rose-500/20 rounded-full text-xs font-semibold font-arabic">
                    حالة النظام: مثالية
                  </span>
                </div>

                {/* Dashboard stats cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="glass-panel rounded-2xl p-5 flex items-center justify-between border-b-4 border-b-blue-500">
                    <div>
                      <span className="text-xs text-slate-400 block font-arabic">إجمالي الاستهلاك للتطبيقات</span>
                      <strong className="text-xl font-bold text-white block mt-1">{simulatedTokens.toLocaleString()} Tokens</strong>
                    </div>
                    <Database className="w-8 h-8 text-blue-400/80" />
                  </div>

                  <div className="glass-panel rounded-2xl p-5 flex items-center justify-between border-b-4 border-b-amber-500">
                    <div>
                      <span className="text-xs text-slate-400 block font-arabic">التكلفة المالية التقريبية</span>
                      <strong className="text-xl font-bold text-white block mt-1">${simulatedCost.toFixed(3)} USD</strong>
                    </div>
                    <DollarSign className="w-8 h-8 text-amber-400/80" />
                  </div>

                  <div className="glass-panel rounded-2xl p-5 flex items-center justify-between border-b-4 border-b-emerald-500">
                    <div>
                      <span className="text-xs text-slate-400 block font-arabic">متوسط زمن الاستجابة</span>
                      <strong className="text-xl font-bold text-white block mt-1">1.45 Seconds</strong>
                    </div>
                    <TrendingUp className="w-8 h-8 text-emerald-400/80" />
                  </div>

                  <div className="glass-panel rounded-2xl p-5 flex items-center justify-between border-b-4 border-b-purple-500">
                    <div>
                      <span className="text-xs text-slate-400 block font-arabic">الفهارس النشطة (Pinecone)</span>
                      <strong className="text-xl font-bold text-white block mt-1">{documents.length * 14} Chunks</strong>
                    </div>
                    <Layers className="w-8 h-8 text-purple-400/80" />
                  </div>
                </div>

                {/* Server charts simulation */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Server load visualization */}
                  <div className="lg:col-span-8 glass-panel rounded-2xl p-6 space-y-6">
                    <h3 className="text-sm font-bold text-white font-arabic flex items-center gap-2">
                      <Activity className="w-5 h-5 text-emerald-400 animate-pulse" />
                      معدل الزيارات النشطة وحمل الـ API (كل ساعة)
                    </h3>

                    {/* Simple pure-SVG charting */}
                    <div className="relative h-48 bg-slate-900/40 rounded-xl border border-slate-800 p-4 flex items-end">
                      
                      <div className="absolute top-2 left-2 text-[10px] text-slate-500">
                        طلبات الخادم النشطة
                      </div>

                      {/* Columns */}
                      <div className="w-full flex justify-between items-end h-32 gap-3 z-10">
                        {[40, 55, 30, 85, 95, 60, 45, 75, 90, 110, 80, 120].map((h, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-2">
                            <div 
                              className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-md transition-all duration-1000"
                              style={{ height: `${(h / 120) * 100}%` }}
                            ></div>
                            <span className="text-[9px] text-slate-500 font-mono">H{i+1}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* System Error Logs & Security Monitor */}
                  <div className="lg:col-span-4 glass-panel rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-200 mb-4 font-arabic flex items-center gap-2">
                        <ShieldAlert className="w-5 h-5 text-amber-500" />
                        سجل التنبيهات الأمنية والعمليات
                      </h3>

                      <div className="space-y-3">
                        <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-800 flex justify-between gap-2 text-[11px]">
                          <span className="text-emerald-400 font-bold font-arabic">تم رفع مستند RAG</span>
                          <span className="text-slate-500 font-mono">Just Now</span>
                        </div>
                        <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-800 flex justify-between gap-2 text-[11px]">
                          <span className="text-blue-400 font-bold font-arabic">استدعاء خادم الـ API</span>
                          <span className="text-slate-500 font-mono">1 min ago</span>
                        </div>
                        <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-800 flex justify-between gap-2 text-[11px]">
                          <span className="text-amber-400 font-bold font-arabic">تحسين الفهرسة الدورية</span>
                          <span className="text-slate-500 font-mono">10 min ago</span>
                        </div>
                        <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-800 flex justify-between gap-2 text-[11px]">
                          <span className="text-emerald-400 font-bold font-arabic">بدء جلسة دراسة جديدة</span>
                          <span className="text-slate-500 font-mono">25 min ago</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                      <span className="font-arabic">إصدار منصة النمر:</span>
                      <strong className="text-white font-mono">v1.2.5 - Stable</strong>
                    </div>
                  </div>

                </div>

              </div>
            )}

          </main>

          {/* PREMIUM BRAND FOOTER */}
          <footer className="bg-slate-950/90 border-t border-slate-900/80 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="text-base">🐅</span>
              <span className="font-semibold text-slate-400 font-arabic">Al-Nemr Educational Platform © 2026.</span>
            </div>

            <div className="flex items-center gap-4 font-arabic">
              <span>RAG Engine: Pinecone & Gemini</span>
              <span>•</span>
              <span>طوّر بذكاء وافهم بعمق</span>
            </div>
          </footer>

        </div>

      </div>
    </div>
  );
}