import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, ChevronDown, Code, FileCode,
  FileText, FolderOpen, Github, Layers, Linkedin, Pause, Play, Presentation
} from 'lucide-react';

const githubProfile = 'https://github.com/ProfLucasSousa';
const privateRepository = `${githubProfile}/LucasSousaAulas`;

const baseUrl = `${privateRepository}/tree/main`;

// Dados das disciplinas
const courses = {
  frontend: {
    name: 'Front-end Design',
    icon: <Layers className="w-5 h-5" />,
    folder: 'Front-end%20Design',
    materiaisExtras: {
      description: 'Livros e materiais de referência sobre design e desenvolvimento front-end',
      link: `${baseUrl}/Front-end%20Design/Extras`
    },
    books: [
      { name: 'Acessibilidade na Web', file: 'Acessibilidade na Web.jpg' },
      { name: 'Bootstrap 4', file: 'Bootstrap4.png' },
      { name: 'Coletânea Front-End', file: 'Coletânea Front-End.png' },
      { name: 'Guia Front-End', file: 'Guia Front-End.png' },
      { name: 'HTML5 e CSS3', file: 'HTML5 e CSS3.png' },
      { name: 'Sass', file: 'Sass.png' },
      { name: 'Turbine seu CSS', file: 'Turbine seu CSS.png' }
    ],
    semester1: [
      {
        num: '01',
        title: 'Histórico da Internet',
        description: 'Conheça a evolução da internet desde seus primórdios até os dias atuais.',
        materials: { pptx: true }
      },
      {
        num: '02',
        title: 'Estrutura básica – tags iniciais',
        description: 'Aprenda as tags fundamentais do HTML5 para estruturar páginas web.',
        materials: { pptx: true, folder: true }
      },
      {
        num: '03',
        title: 'Estrutura básica – tags iniciais pt 02',
        description: 'Continuação do estudo de tags HTML com elementos semânticos.',
        materials: { pptx: true, folder: true }
      },
      {
        num: '04',
        title: 'Incluindo CSS na página',
        description: 'Aprenda as diferentes formas de incluir estilos CSS em suas páginas.',
        materials: { pptx: true, folder: true }
      },
      {
        num: 'CP',
        title: 'Checkpoint 01',
        isCheckpoint: true,
        materials: { folder: true }
      },
      {
        num: '05',
        title: 'Box Modeling',
        description: 'Entenda o modelo de caixa do CSS e como controlar espaçamentos.',
        materials: { pptx: true, folder: true }
      },
      {
        num: '06',
        title: 'Pseudo-classes e Pseudo-elementos',
        description: 'Aprenda a estilizar estados e criar efeitos com pseudo-classes e pseudo-elementos.',
        materials: { pptx: true, folder: true }
      },
      {
        num: '07',
        title: 'Animações, transformações e transições',
        description: 'Crie animações e efeitos visuais dinâmicos com CSS.',
        materials: { pptx: true, folder: true }
      },
      {
        num: 'CP',
        title: 'Checkpoint 02',
        isCheckpoint: true,
        materials: { folder: true }
      },
      {
        num: '08',
        title: 'Flexbox',
        description: 'Domine o layout flexível do CSS para criar interfaces responsivas.',
        materials: { pptx: true, folder: true }
      },
      {
        num: '09',
        title: 'Prototipagem desde o papel',
        description: 'Técnicas de prototipagem low-fidelity e wireframing.',
        materials: { pptx: true }
      },
      {
        num: '10',
        title: 'Prototipagem de alta fidelidade',
        description: 'Criando protótipos interativos e realistas.',
        materials: { pptx: true }
      },
      {
        num: 'CP',
        title: 'Checkpoint 03',
        isCheckpoint: true,
        materials: { folder: true }
      },
      {
        num: '10.5',
        title: 'Aula Extra',
        description: 'Conteúdo complementar.',
        materials: { folder: true }
      },
      {
        num: 'GS',
        title: 'Global Solution',
        isGlobalSolution: true,
        gsNumber: '01',
        materials: { md: true }
      },
      {
        num: 'GS',
        title: 'Substitutiva',
        isGlobalSolution: true,
        isSubstitutive: true,
        gsNumber: '01',
        materials: { md: true }
      },
    ],
    semester2: [
      {
        num: '11',
        title: 'Grid',
        description: 'Aprenda a criar layouts complexos e responsivos usando CSS Grid Layout.',
        materials: { pptx: true, folder: true }
      },
      {
        num: '12',
        title: 'Design Responsivo',
        description: 'Técnicas e práticas para criar interfaces que se adaptam a diferentes dispositivos.',
        materials: { pptx: true, folder: true }
      },
      {
        num: '13',
        title: 'Framework',
        description: 'Introdução aos frameworks modernos e suas vantagens no desenvolvimento.',
        materials: { pptx: true, folder: true }
      },
      {
        num: '14',
        title: 'Hands on HTML e CSS',
        description: 'Prática intensiva de HTML5 e CSS3 com projetos reais.',
        materials: { pptx: true, folder: true }
      },
      {
        num: 'CP',
        title: 'Checkpoint 04',
        isCheckpoint: true,
        materials: { pptx: true }
      },
      {
        num: '15',
        repository: 'aula-tailwind',
        title: 'Introdução ao Tailwind CSS',
        description: 'Primeiros passos com o framework CSS utility-first Tailwind.',
        materials: { md: true }
      },
      {
        num: '16',
        repository: 'intro_tailwind',
        title: 'Design Responsivo e Animações com Tailwind CSS',
        description: 'Criando interfaces responsivas e animadas usando Tailwind.',
        materials: { md: true }
      },
      {
        num: '17',
        repository: 'interatividade_tailwind',
        title: 'Interatividade com Tailwind CSS: Estados, Focus e Ações',
        description: 'Implementando interatividade e estados visuais com Tailwind.',
        materials: { md: true }
      },
      {
        num: 'CP',
        title: 'Checkpoint 05',
        isCheckpoint: true,
        materials: { pptx: true }
      },
      {
        num: '18',
        repository: 'animacoes-transicoes_tailwind',
        title: 'Animações e Transições Avançadas com Tailwind CSS',
        description: 'Técnicas avançadas de animação para criar interfaces dinâmicas.',
        materials: { md: true }
      },
      {
        num: '19',
        repository: 'tailwind-layout',
        title: 'Layouts e Tipografia com Tailwind + React',
        description: 'Combinando Tailwind com React para criar layouts profissionais.',
        materials: { md: true }
      },
      {
        num: '20',
        repository: 'componentes-avancados',
        title: 'Componentes Avançados com Tailwind + React',
        description: 'Desenvolvendo componentes reutilizáveis e avançados.',
        materials: { md: true, folder: true }
      },
      {
        num: 'CP',
        title: 'Checkpoint 06',
        isCheckpoint: true,
        materials: { pptx: true, folder: true }
      },
      {
        num: '21',
        repository: 'projeto-login',
        title: 'Projeto: Login Simples com React, Node e Tailwind',
        description: 'Projeto prático de autenticação full-stack.',
        materials: { md: true }
      },
      {
        num: '22',
        repository: 'meu-app-router',
        title: 'React Router - Navegação Simples com Vite',
        description: 'Implementando navegação entre páginas em aplicações React.',
        materials: { md: true }
      },
      {
        num: '23',
        repository: 'portifolio_basic',
        title: 'Portfólio com React + Vite + Tailwind',
        description: 'Criando um portfólio profissional completo.',
        materials: { md: true }
      },
      {
        num: 'GS',
        title: 'Global Solution',
        isGlobalSolution: true,
        gsNumber: '02',
        materials: { md: true }
      },
      {
        num: 'GS',
        title: 'Substitutiva',
        isGlobalSolution: true,
        isSubstitutive: true,
        gsNumber: '02',
        materials: { md: true }
      },
      {
        num: 'EX',
        title: 'Exame',
        isExam: true,
        materials: { md: true }
      },
    ]
  },
  javascript: {
    name: 'Web Development with JS',
    icon: <Code className="w-5 h-5" />,
    folder: 'Web%20Development%20with%20JS',
    materiaisExtras: {
      description: 'Livros e recursos sobre JavaScript, TypeScript e desenvolvimento web',
      link: `${baseUrl}/Web%20Development%20with%20JS/Extras`
    },
    books: [
      { name: 'Coleção Cangaceiro JavaScript', file: 'Colecao Cangaceiro JavaScript.png' },
      { name: 'Progressive Web Apps', file: 'Progressive Web Apps.jpg' },
      { name: 'ECMAScript 6', file: 'ECMAScript 6.png' },
      { name: 'JavaScript O guia definitivo', file: 'JavaScript O guia definitivo.png' },
      { name: 'Primeiros passos com React', file: 'Primeiros passos com React.jpg' },
    ],
    semester1: [
      {
        num: '01',
        title: 'Git',
        description: 'Fundamentos de versionamento de código com Git e GitHub.',
        materials: { pptx: true, folder: true }
      },
      {
        num: '01.5',
        title: 'GitHub',
        description: 'Fundamentos de versionamento de código com Git e GitHub.',
        materials: { md: true, folder: true }
      },
      {
        num: '02',
        title: 'Introdução ao JavaScript: Conceitos Básicos',
        description: 'Primeiros passos com JavaScript: variáveis, tipos de dados e operadores.',
        materials: { pptx: true, pdf: true, folder: true }
      },
      {
        num: '03',
        title: 'Prompt, console e alert',
        description: 'Interação com o usuário usando métodos básicos do JavaScript.',
        materials: { pptx: true }
      },
      {
        num: 'CP',
        title: 'Checkpoint 01',
        isCheckpoint: true,
        materials: { folder: true }
      },
      {
        num: '04',
        title: 'Controle de Fluxos',
        description: 'Estruturas condicionais e de controle de fluxo em JavaScript.',
        materials: { pptx: true, pdf: true }
      },
      {
        num: '05',
        title: 'Funções e propriedades básicas',
        description: 'Criando e utilizando funções em JavaScript.',
        materials: { pptx: true, folder: true }
      },
      {
        num: '06',
        title: 'Escopo, Ciclos e Iterações',
        description: 'Entendendo escopo de variáveis e estruturas de repetição.',
        materials: { pptx: true, pdf: true }
      },
      {
        num: 'CP',
        title: 'Checkpoint 02',
        isCheckpoint: true,
        materials: { folder: true }
      },
      {
        num: '07',
        title: 'Objetos',
        description: 'Trabalhando com objetos e suas propriedades em JavaScript.',
        materials: { pptx: true, folder: true }
      },
      {
        num: '08',
        title: 'Arrays',
        description: 'Manipulação de arrays e seus métodos nativos.',
        materials: { pptx: true, folder: true }
      },
      {
        num: '09',
        title: 'DOM',
        description: 'Manipulação do Document Object Model para criar páginas dinâmicas.',
        materials: { pptx: true, folder: true }
      },
      {
        num: 'CP',
        title: 'Checkpoint 03',
        isCheckpoint: true,
        materials: { folder: true }
      },
      {
        num: '10',
        title: 'Funções de Ordem Superior',
        description: 'Funções avançadas: map, filter, reduce e callbacks.',
        materials: { pptx: true }
      },
      {
        num: 'GS',
        title: 'Global Solution',
        isGlobalSolution: true,
        gsNumber: '01',
        materials: { md: true }
      },
      {
        num: 'GS',
        title: 'Substitutiva',
        isGlobalSolution: true,
        isSubstitutive: true,
        gsNumber: '01',
        materials: { md: true }
      },
    ],
    semester2: [
      {
        num: '11',
        title: 'Storage e Json',
        description: 'Trabalhando com localStorage, sessionStorage e manipulação de JSON.',
        materials: { pptx: true, folder: true }
      },
      {
        num: '12',
        title: 'Assincronia e Promises',
        description: 'Entendendo programação assíncrona, Promises e async/await.',
        materials: { pptx: true, folder: true }
      },
      {
        num: '13',
        title: 'Node.js & Framework ReactJS',
        description: 'Introdução ao Node.js e desenvolvimento com React.',
        materials: { pptx: true, folder: true }
      },
      {
        num: '14',
        repository: 'projetos_fetch',
        title: 'Requisições HTTP em React: Fetch API e Async/Await',
        description: 'Consumindo APIs REST com Fetch API em aplicações React.',
        materials: { pptx: true, folder: true }
      },
      {
        num: 'CP',
        title: 'Checkpoint 04',
        isCheckpoint: true,
        materials: { pptx: true }
      },
      {
        num: '15',
        repository: 'projeto-login',
        title: 'Projeto: Login Simples com React, Node e Tailwind',
        description: 'Sistema de autenticação completo com frontend e backend.',
        materials: { md: true }
      },
      {
        num: '16',
        repository: 'calcularFrete',
        title: 'Projeto: CalcularFrete com React, Node e Tailwind',
        description: 'Aplicação de cálculo de frete com integração de APIs.',
        materials: { md: true, folder: true }
      },
      {
        num: '17',
        repository: 'projeto-math-date',
        title: 'React: objeto Math, objeto Date',
        description: 'Manipulação de números e datas em JavaScript e React.',
        materials: { md: true }
      },
      {
        num: 'CP',
        title: 'Checkpoint 05',
        isCheckpoint: true,
        materials: { pptx: true }
      },
      {
        num: '18',
        repository: 'my-react-supabase-app',
        title: 'Projeto React Vite + Supabase com Tailwind',
        description: 'Aplicação full-stack com banco de dados Supabase.',
        materials: { md: true }
      },
      {
        num: '19',
        repository: 'meu-app-router',
        title: 'React Router - Navegação Simples com Vite',
        description: 'Sistema de rotas para Single Page Applications.',
        materials: { md: true }
      },
      {
        num: '20',
        repository: 'componentes-avancados',
        title: 'Componentes Avançados com Tailwind + React',
        description: 'Padrões avançados de componentes React.',
        materials: { md: true, folder: true }
      },
      {
        num: 'CP',
        title: 'Checkpoint 06',
        isCheckpoint: true,
        materials: { md: true }
      },
      {
        num: '21',
        repository: 'coursetrack',
        title: 'Criação de Dashboard CourseTrack (CRUD de Cursos)',
        description: 'Sistema completo de gerenciamento com CRUD.',
        materials: { md: true, folder: true }
      },
      {
        num: '22',
        repository: 'todo-next-ts',
        title: 'Next.js + TypeScript (intro prática)',
        description: 'Introdução ao Next.js e TypeScript na prática.',
        materials: { md: true, folder: true },
        additionalFile: 'Aula 22 - Introdução ao TypeScript.md'
      },
      {
        num: '23',
        repository: 'portifolio_basic',
        title: 'Portfólio com React + Vite + Tailwind',
        description: 'Projeto final: portfólio profissional completo.',
        materials: { md: true }
      },
      {
        num: 'GS',
        title: 'Global Solution',
        isGlobalSolution: true,
        gsNumber: '02',
        materials: { md: true }
      },
      {
        num: 'GS',
        title: 'Substitutiva',
        isGlobalSolution: true,
        isSubstitutive: true,
        gsNumber: '02',
        materials: { md: true }
      },
      {
        num: 'EX',
        title: 'Exame',
        isExam: true,
        materials: { md: true }
      },
    ]
  },
  lowcode: {
    name: 'Low Code Dev',
    icon: <BookOpen className="w-5 h-5" />,
    folder: 'Low%20Code%20Dev',
    materiaisExtras: {
      description: 'Recursos sobre plataformas low-code e desenvolvimento rápido',
      link: `${baseUrl}/Low%20Code%20Dev/Extras`
    },
    books: [],
    semester1: {
      hasContent: false,
      message: 'Materiais do 1º semestre em desenvolvimento'
    },
    semester2: [
      {
        num: '11',
        title: 'Revisão Low Code',
        description: 'Revisão dos conceitos fundamentais de desenvolvimento low-code.',
        materials: { md: true }
      },
      {
        num: '12',
        title: 'FlutterFlow: Desenvolvimento Visual Ágil com Flutter',
        description: 'Introdução ao FlutterFlow para desenvolvimento mobile visual.',
        materials: { pptx: true }
      },
      {
        num: '13',
        title: 'FlutterFlow: Continuação de projeto – exclusão e upload',
        description: 'Implementando funcionalidades de exclusão e upload de arquivos.',
        materials: { pptx: true }
      },
      {
        num: '14',
        title: 'FlutterFlow: Continuação de projeto – edição de produto cadastrado',
        description: 'Criando funcionalidades de edição e atualização de dados.',
        materials: { pptx: true }
      },
      {
        num: 'CP',
        title: 'Checkpoint 04',
        isCheckpoint: true,
        materials: { pptx: true }
      },
      {
        num: '15',
        title: 'FlutterFlow: Usando componente - cadastrar e filtrar',
        description: 'Trabalhando com componentes para cadastro e filtragem.',
        materials: { pptx: true }
      },
      {
        num: '16',
        title: 'FlutterFlow: Autenticação Login com Supabase',
        description: 'Implementando sistema de autenticação com Supabase.',
        materials: { pptx: true }
      },
      {
        num: '17',
        title: 'FlutterFlow: Painel Admin por Nível de Acesso',
        description: 'Criando controle de acesso baseado em permissões.',
        materials: { pptx: true }
      },
      {
        num: 'CP',
        title: 'Checkpoint 05',
        isCheckpoint: true,
        materials: { md: true }
      },
      {
        num: '18',
        title: 'Revisão + Apoio CP 05',
        description: 'Revisão dos conteúdos e preparação para checkpoint.',
        materials: { md: true }
      },
      {
        num: '19',
        title: 'Termos Técnicos no Low Code e Novas Plataformas',
        description: 'Vocabulário técnico e exploração de novas ferramentas.',
        materials: { md: true }
      },
      {
        num: '20',
        repository: 'explorando_weweb',
        title: 'Aula Prática – Explorando o WeWeb',
        description: 'Conhecendo a plataforma WeWeb para desenvolvimento web.',
        materials: { md: true }
      },
      {
        num: 'CP',
        title: 'Checkpoint 06',
        isCheckpoint: true,
        materials: { md: true }
      },
      {
        num: '21',
        repository: 'weweb_pratica',
        title: 'WeWeb na Prática: Criando um Painel Interativo com API',
        description: 'Desenvolvendo dashboards interativos com integração de APIs.',
        materials: { md: true }
      },
      {
        num: '22',
        repository: 'integracao_weweb-make',
        title: 'Automação de Fluxos: Integração entre WeWeb e Make',
        description: 'Conectando WeWeb com Make para automação de processos.',
        materials: { md: true }
      },
      {
        num: '23',
        repository: 'integracoes_make',
        title: 'Integrações Avançadas com Make: Lógica Condicional e APIs Externas',
        description: 'Técnicas avançadas de automação e integração.',
        materials: { md: true }
      },
      {
        num: 'GS',
        title: 'Global Solution',
        isGlobalSolution: true,
        gsNumber: '01',
        materials: { md: true }
      },
      {
        num: 'GS',
        title: 'Substitutiva',
        isGlobalSolution: true,
        isSubstitutive: true,
        gsNumber: '01',
        materials: { md: true }
      },
      {
        num: 'EX',
        title: 'Exame',
        isExam: true,
        materials: { md: true }
      },
    ]
  }
};

function BookCarousel({ books, courseFolder, active }) {
  const track = useRef(null);
  const direction = useRef(1);
  const [playing, setPlaying] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [interacting, setInteracting] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!active || !playing || interacting || focused) return;

    const timer = window.setInterval(() => {
      const viewport = track.current;
      const end = viewport.scrollWidth - viewport.clientWidth;
      if (end <= 1) return;

      if (viewport.scrollLeft >= end - 1) direction.current = -1;
      if (viewport.scrollLeft <= 1) direction.current = 1;
      moveBooks(viewport, direction.current);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [active, playing, interacting, focused]);

  return (
    <section className="resources-panel" aria-label="Livros recomendados">
      <div className="books-header">
        <h3><BookOpen size={18} aria-hidden="true" /> Livros recomendados</h3>
        <div className="book-controls">
          <button type="button" className="icon-button" aria-label="Livros anteriores"
            onClick={() => moveBooks(track.current, -1)}>
            <ArrowLeft size={17} aria-hidden="true" />
          </button>
          <button type="button" className="icon-button" aria-label="Próximos livros"
            onClick={() => moveBooks(track.current, 1)}>
            <ArrowRight size={17} aria-hidden="true" />
          </button>
          <button type="button" className="icon-button"
            aria-label={playing ? 'Pausar carrossel' : 'Reproduzir carrossel'}
            onClick={() => setPlaying(!playing)}>
            {playing ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}
          </button>
        </div>
      </div>
      <ul className="book-track" ref={track} tabIndex={0} aria-label="Capas dos livros recomendados"
        onPointerEnter={() => setInteracting(true)} onPointerLeave={() => setInteracting(false)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
        {books.map((book) => (
          <li key={book.file}>
            <img
              src={`/Livros-imgs/${courseFolder}/${encodeURIComponent(book.file)}`}
              alt=""
              width="104"
              height="146"
              loading="lazy"
            />
            <span>{book.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function moveBooks(viewport, direction) {
  const [firstBook, secondBook] = viewport.children;
  const step = secondBook ? secondBook.offsetLeft - firstBook.offsetLeft : firstBook.offsetWidth;
  viewport.scrollBy({ left: step * direction });
}

const materialTypes = {
  md: { label: 'Markdown', icon: FileCode },
  pdf: { label: 'PDF', icon: FileText },
  pptx: { label: 'Slides', icon: Presentation },
  folder: { label: 'Pasta', icon: FolderOpen },
  typescript: { label: 'TypeScript', icon: FileCode },
  github: { label: 'GitHub', icon: Github },
};

function getLessonMaterials(lesson, course, semester) {
  const root = `${baseUrl}/${course.folder}/${semester}%C2%BA%20Semestre`;
  const fileUrl = (filename) => `${root}/${encodeURIComponent(filename)}`;
  const materials = lesson.materials ?? {};
  const links = [];
  const addFile = (type, filename) => {
    if (materials[type]) links.push({ type, href: fileUrl(filename) });
  };

  if (lesson.isExam) {
    addFile('md', `Exame - ${course.name} Prof. Lucas Sousa.md`);
  } else if (lesson.isGlobalSolution) {
    const suffix = lesson.isSubstitutive ? ' [Sub]' : '';
    addFile('md', `GS ${lesson.gsNumber || '01'}${suffix} - ${course.name} Prof. Lucas Sousa.md`);
  } else if (lesson.isCheckpoint) {
    const checkpoint = `Check-point${lesson.title.split(' ')[1].padStart(2, '0')}`;
    addFile('md', `${checkpoint}.md`);
    addFile('pptx', `${checkpoint}.pptx`);
    if (materials.folder) links.push({ type: 'folder', href: `${root}/${checkpoint}` });
  } else {
    const filename = `Aula ${lesson.num} - ${course.name} Prof. Lucas Sousa`;
    addFile('md', `${filename}.md`);
    if (lesson.additionalFile) links.push({ type: 'typescript', href: fileUrl(lesson.additionalFile) });
    addFile('pdf', `${filename}.pdf`);
    addFile('pptx', `${filename}.pptx`);
    if (materials.folder) links.push({ type: 'folder', href: `${root}/Aula${lesson.num}` });
  }

  if (lesson.repository) links.push({ type: 'github', href: `${githubProfile}/${lesson.repository}` });
  return links;
}

function LessonCard({ lesson, course, semester, group }) {
  const kind = lesson.isCheckpoint ? 'checkpoint'
    : lesson.isGlobalSolution ? 'solution'
    : lesson.isExam ? 'exam' : 'lesson';

  return (
    <details className="lesson-card" name={group} data-kind={kind}>
      <summary>
        <span className="lesson-number">{lesson.num}</span>
        <span className="lesson-title">{lesson.title}</span>
        <ChevronDown size={19} className="lesson-chevron" aria-hidden="true" />
      </summary>
      <div className="lesson-content">
        {lesson.description && <p>{lesson.description}</p>}
        <div className="material-links">
          {getLessonMaterials(lesson, course, semester).map(({ type, href }) => {
            const { label, icon: Icon } = materialTypes[type];
            return (
              <a key={type} className="material-link" data-type={type}
                href={href} target="_blank" rel="noopener noreferrer"
                aria-label={type === 'github' ? 'GitHub — repositório público' : undefined}>
                <Icon size={17} aria-hidden="true" />
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </details>
  );
}

export default function CoursePlanningSite() {
  const [activeCourse, setActiveCourse] = useState('frontend');
  const [semester, setSemester] = useState(1);
  const course = courses[activeCourse];
  const lessons = course[`semester${semester}`];
  const group = `${activeCourse}-${semester}`;

  return (
    <>
      <header className="site-header">
        <div className="page-width">
          <div className="header-top">
            <div className="author">
              <span className="monogram" aria-hidden="true">LS</span>
              <span>Prof. Lucas Sousa</span>
            </div>
            <div className="social-links">
              <a className="icon-button" href={githubProfile} target="_blank" rel="noopener noreferrer" aria-label="Perfil no GitHub">
                <Github size={20} aria-hidden="true" />
              </a>
              <a className="icon-button" href="https://www.linkedin.com/in/lucasss-professor/"
                target="_blank" rel="noopener noreferrer" aria-label="Perfil no LinkedIn">
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
          <h1>Planejamento de Aulas</h1>
          <p>Roteiros, exemplos e materiais das disciplinas de desenvolvimento web.</p>
        </div>
      </header>

      <main className="page-width">
        <nav className="course-picker" aria-label="Disciplinas">
          {Object.entries(courses).map(([key, item]) => (
            <button key={key} type="button" aria-pressed={activeCourse === key}
              onClick={() => setActiveCourse(key)}>
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>
        <div className="course-layout">
          <section className="lessons" aria-labelledby="lessons-heading">
            <div className="lessons-header">
              <h2 id="lessons-heading">Aulas</h2>
              {course.materiaisExtras && <a className="resources-jump" href="#extras">Materiais extras <ArrowUpRight size={15} aria-hidden="true" /></a>}
              <div className="semester-picker" role="group" aria-label="Semestre">
                {[1, 2].map((number) => (
                  <button key={number} type="button" aria-pressed={semester === number}
                    onClick={() => setSemester(number)}>
                    {number}º semestre
                  </button>
                ))}
              </div>
            </div>
            {lessons.hasContent === false ? (
              <div className="empty-state">
                <FileCode size={22} aria-hidden="true" />
                <p>{lessons.message}</p>
              </div>
            ) : (
              <div className="lesson-list" key={group}>
                {lessons.map((lesson) => (
                  <LessonCard key={`${lesson.num}-${lesson.title}`}
                    lesson={lesson} course={course} semester={semester} group={group} />
                ))}
              </div>
            )}
          </section>

          <aside id="extras" aria-label="Materiais de apoio">
            {course.materiaisExtras && (
              <section className="resources-panel extra-materials">
                <h2><FolderOpen size={19} aria-hidden="true" /> Materiais extras</h2>
                <p>{course.materiaisExtras.description}.</p>
                <a className="material-link" href={course.materiaisExtras.link}
                  target="_blank" rel="noopener noreferrer">
                  Acessar materiais <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </section>
            )}
            {Object.entries(courses).map(([key, item]) => item.books.length > 0 && (
              <div key={key} hidden={activeCourse !== key}>
                <BookCarousel books={item.books} courseFolder={item.folder} active={activeCourse === key} />
              </div>
            ))}
          </aside>
        </div>
      </main>

      <footer className="site-footer">
        <div className="page-width">
          <span>Prof. Lucas Sousa · Desenvolvimento Web</span>
          <a href={privateRepository} target="_blank" rel="noopener noreferrer">
            <Github size={17} aria-hidden="true" /> Repositório de materiais
          </a>
        </div>
      </footer>
    </>
  );
}
