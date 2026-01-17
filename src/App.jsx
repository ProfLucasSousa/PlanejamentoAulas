import React, { useState } from 'react';
import { FileText, Presentation, FileCode, BookOpen, Code, Layers, ChevronDown, ChevronUp, FolderOpen, Github, Linkedin } from 'lucide-react';

const CoursePlanningSite = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [activeSemester, setActiveSemester] = useState(1);
  const [expandedLesson, setExpandedLesson] = useState(null);

  const baseUrl = 'https://github.com/ProfLucasSousa/LucasSousaAulas/tree/main';

  // Dados das disciplinas
  const courses = {
    frontend: {
      name: 'Front-end Design',
      icon: <Layers className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
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
          title: 'Introdução ao Tailwind CSS', 
          description: 'Primeiros passos com o framework CSS utility-first Tailwind.',
          materials: { md: true }
        },
        { 
          num: '16', 
          title: 'Design Responsivo e Animações com Tailwind CSS', 
          description: 'Criando interfaces responsivas e animadas usando Tailwind.',
          materials: { md: true }
        },
        { 
          num: '17', 
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
          title: 'Animações e Transições Avançadas com Tailwind CSS', 
          description: 'Técnicas avançadas de animação para criar interfaces dinâmicas.',
          materials: { md: true }
        },
        { 
          num: '19', 
          title: 'Layouts e Tipografia com Tailwind + React', 
          description: 'Combinando Tailwind com React para criar layouts profissionais.',
          materials: { md: true }
        },
        { 
          num: '20', 
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
          title: 'Projeto: Login Simples com React, Node e Tailwind', 
          description: 'Projeto prático de autenticação full-stack.',
          materials: { md: true }
        },
        { 
          num: '22', 
          title: 'React Router - Navegação Simples com Vite', 
          description: 'Implementando navegação entre páginas em aplicações React.',
          materials: { md: true }
        },
        { 
          num: '23', 
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
      color: 'from-yellow-500 to-orange-500',
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
          materials: { pptx: true }
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
          num: '04', 
          title: 'Controle de Fluxos',
          description: 'Estruturas condicionais e de controle de fluxo em JavaScript.',
          materials: { pptx: true, pdf: true }
        },
        { 
          num: 'CP', 
          title: 'Checkpoint 01', 
          isCheckpoint: true,
          materials: { folder: true }
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
          num: '07', 
          title: 'Objetos',
          description: 'Trabalhando com objetos e suas propriedades em JavaScript.',
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
          num: '10', 
          title: 'Funções de Ordem Superior',
          description: 'Funções avançadas: map, filter, reduce e callbacks.',
          materials: { pptx: true }
        },
        { 
          num: 'CP', 
          title: 'Checkpoint 03', 
          isCheckpoint: true,
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
          title: 'Projeto: Login Simples com React, Node e Tailwind', 
          description: 'Sistema de autenticação completo com frontend e backend.',
          materials: { md: true }
        },
        { 
          num: '16', 
          title: 'Projeto: CalcularFrete com React, Node e Tailwind', 
          description: 'Aplicação de cálculo de frete com integração de APIs.',
          materials: { md: true, folder: true }
        },
        { 
          num: '17', 
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
          title: 'Projeto React Vite + Supabase com Tailwind', 
          description: 'Aplicação full-stack com banco de dados Supabase.',
          materials: { md: true }
        },
        { 
          num: '19', 
          title: 'React Router - Navegação Simples com Vite', 
          description: 'Sistema de rotas para Single Page Applications.',
          materials: { md: true }
        },
        { 
          num: '20', 
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
          title: 'Criação de Dashboard CourseTrack (CRUD de Cursos)', 
          description: 'Sistema completo de gerenciamento com CRUD.',
          materials: { md: true, folder: true }
        },
        { 
          num: '22', 
          title: 'Next.js + TypeScript (intro prática)', 
          description: 'Introdução ao Next.js e TypeScript na prática.',
          materials: { md: true, folder: true },
          additionalFile: 'Aula 22 - Introdução ao TypeScript.md'
        },
        { 
          num: '23', 
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
      color: 'from-purple-500 to-pink-500',
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
          title: 'WeWeb na Prática: Criando um Painel Interativo com API', 
          description: 'Desenvolvendo dashboards interativos com integração de APIs.',
          materials: { md: true }
        },
        { 
          num: '22', 
          title: 'Automação de Fluxos: Integração entre WeWeb e Make', 
          description: 'Conectando WeWeb com Make para automação de processos.',
          materials: { md: true }
        },
        { 
          num: '23', 
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

  // Componente do Carrossel de Livros
  const BookCarousel = ({ books, courseFolder }) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    if (!books || books.length === 0) {
      return null;
    }

    // Auto-scroll
    React.useEffect(() => {
      const interval = setInterval(() => {
        setScrollPosition((prev) => {
          const maxScroll = books.length * 200; // 200px por livro (150px + 50px gap)
          return prev >= maxScroll ? 0 : prev + 1;
        });
      }, 30); // Velocidade do scroll

      return () => clearInterval(interval);
    }, [books.length]);

    return (
      <div className="bg-white rounded-xl p-4 shadow-lg mt-6 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          Livros Recomendados
        </h3>
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-4 transition-transform duration-100 ease-linear"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {[...books, ...books].map((book, index) => {
              const imageUrl = `/Livros-imgs/${courseFolder}/${book.file.replace(/ /g, '%20')}`;
              const placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="200"%3E%3Crect fill="%23f3f4f6" width="150" height="200"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="12"%3EImagem%3C/text%3E%3C/svg%3E';

              return (
                <div key={index} className="flex-shrink-0 w-36">
                  <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={imageUrl}
                      alt={book.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error('Failed to load:', imageUrl); // Debug
                        e.target.onerror = null;
                        e.target.src = placeholder;
                      }}
                    />
                  </div>
                  <p className="text-xs font-medium text-gray-700 mt-2 text-center line-clamp-2">
                    {book.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const MaterialIcon = ({ type }) => {
    const icons = {
      md: <FileCode className="w-4 h-4" />,
      pdf: <FileText className="w-4 h-4" />,
      pptx: <Presentation className="w-4 h-4" />,
      folder: <FolderOpen className="w-4 h-4" />
    };
    return icons[type];
  };

  const getLessonPath = (courseFolder, semester, lessonNum) => {
    const semesterFolder = semester === 1 ? '1%C2%BA%20Semestre' : '2%C2%BA%20Semestre';
    const lessonFolder = lessonNum.startsWith('CP') ? 
      `Check-point%20${lessonNum.split(' ')[1].padStart(2, '0')}` : 
      `Aula${lessonNum}`;
    return `${courseFolder}/${semesterFolder}/${lessonFolder}`;
  };

  // Helper para gerar nome de arquivo .md ou .pptx
  const getFileName = (courseKey, lessonNum, extension) => {
    const courseName = courses[courseKey].name;
    return `Aula ${lessonNum} - ${courseName} Prof. Lucas Sousa.${extension}`;
  };

  // Helper para gerar caminho do semestre
  const getSemesterPath = (courseFolder, semester) => {
    const semesterFolder = semester === 1 ? '1%C2%BA%20Semestre' : '2%C2%BA%20Semestre';
    return `${courseFolder}/${semesterFolder}`;
  };

  const LessonCard = ({ lesson, courseKey, semester }) => {
    const lessonKey = lesson.isCheckpoint ? `${courseKey}-${semester}-${lesson.title}` : 
                     lesson.isGlobalSolution ? `${courseKey}-${semester}-GS-${lesson.title}` :
                     lesson.isExam ? `${courseKey}-${semester}-Exame` :
                     `${courseKey}-${semester}-${lesson.num}`;
    const isExpanded = expandedLesson === lessonKey;
    const courseFolder = courses[courseKey].folder;

    // Renderização para Exame
    if (lesson.isExam) {
      const examFileName = `Exame - ${courses[courseKey].name} Prof. Lucas Sousa.md`;
      
      return (
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div 
            className="p-6 cursor-pointer"
            onClick={() => setExpandedLesson(isExpanded ? null : lessonKey)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                  <span className="text-white font-bold">{lesson.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{lesson.title}</h3>
              </div>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-white/80 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-white/80 flex-shrink-0" />
              )}
            </div>
          </div>

          <div
            className={`px-6 border-t border-white/20 overflow-hidden dropdown-content ${isExpanded ? 'expanded' : ''}`}
            aria-hidden={!isExpanded}
          >
            <div className="flex gap-2 flex-wrap">
              {lesson.materials && lesson.materials.md && (
                <a 
                  href={`${baseUrl}/${getSemesterPath(courseFolder, semester)}/${encodeURIComponent(examFileName)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm text-sm font-medium"
                >
                  <MaterialIcon type="md" />
                  <span>Markdown</span>
                </a>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Renderização para Global Solution
    if (lesson.isGlobalSolution) {
      const gsNumber = lesson.gsNumber || '01';
      const gsFileName = lesson.isSubstitutive ? 
        `GS ${gsNumber} [Sub] - ${courses[courseKey].name} Prof. Lucas Sousa.md` :
        `GS ${gsNumber} - ${courses[courseKey].name} Prof. Lucas Sousa.md`;
      
      return (
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div 
            className="p-6 cursor-pointer"
            onClick={() => setExpandedLesson(isExpanded ? null : lessonKey)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                  <span className="text-white font-bold">{lesson.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{lesson.title}</h3>
              </div>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-white/80 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-white/80 flex-shrink-0" />
              )}
            </div>
          </div>

          <div
            className={`px-6 border-t border-white/20 overflow-hidden dropdown-content ${isExpanded ? 'expanded' : ''}`}
            aria-hidden={!isExpanded}
          >
            <div className="flex gap-2 flex-wrap">
              {lesson.materials && lesson.materials.md && (
                <a 
                  href={`${baseUrl}/${getSemesterPath(courseFolder, semester)}/${encodeURIComponent(gsFileName)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm text-sm font-medium"
                >
                  <MaterialIcon type="md" />
                  <span>Markdown</span>
                </a>
              )}
            </div>
          </div>
        </div>
      );
    }

    if (lesson.isCheckpoint) {
      const cpNumber = lesson.title.split(' ')[1].padStart(2, '0');
      return (
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div 
            className="p-6 cursor-pointer"
            onClick={() => setExpandedLesson(isExpanded ? null : lessonKey)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                  <span className="text-white font-bold">{lesson.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{lesson.title}</h3>
              </div>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-white/80 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-white/80 flex-shrink-0" />
              )}
            </div>
          </div>

          <div
            className={`px-6 border-t border-white/20 overflow-hidden dropdown-content ${isExpanded ? 'expanded' : ''}`}
            aria-hidden={!isExpanded}
          >
            <div className="flex gap-2 flex-wrap">
              {lesson.materials && lesson.materials.md && (
                <a 
                  href={`${baseUrl}/${getSemesterPath(courseFolder, semester)}/${encodeURIComponent(`Check-point${cpNumber}.md`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm text-sm font-medium"
                >
                  <MaterialIcon type="md" />
                  <span>Markdown</span>
                </a>
              )}
              {lesson.materials && lesson.materials.pptx && (
                <a 
                  href={`${baseUrl}/${getSemesterPath(courseFolder, semester)}/${encodeURIComponent(`Check-point${cpNumber}.pptx`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm text-sm font-medium"
                >
                  <MaterialIcon type="pptx" />
                  <span>Slides</span>
                </a>
              )}
              {lesson.materials && lesson.materials.folder && (
                <a 
                  href={`${baseUrl}/${getSemesterPath(courseFolder, semester)}/Check-point${cpNumber}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm font-medium"
                >
                  <MaterialIcon type="folder" />
                  <span>Pasta</span>
                </a>
              )}
            </div>
          </div>
        </div>
      );
    }

    const lessonPath = getLessonPath(courseFolder, semester, lesson.num);

    return (
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
        <div 
          className="p-6 cursor-pointer"
          onClick={() => setExpandedLesson(isExpanded ? null : lessonKey)}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-gray-700 font-bold">{lesson.num}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{lesson.title}</h3>
            </div>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
            )}
          </div>
          
          {isExpanded && lesson.description && (
            <p className="text-gray-600 text-sm mb-4 pl-13">{lesson.description}</p>
          )}
        </div>

        <div
          className={`px-6 border-t border-gray-100 overflow-hidden dropdown-content ${isExpanded ? 'expanded' : ''}`}
          aria-hidden={!isExpanded}
        >
          <div className="flex gap-2 flex-wrap">
            {lesson.materials && lesson.materials.md && (
              <a 
                href={`${baseUrl}/${getSemesterPath(courseFolder, semester)}/${encodeURIComponent(getFileName(courseKey, lesson.num, 'md'))}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors text-sm font-medium"
              >
                <MaterialIcon type="md" />
                <span>Markdown</span>
              </a>
            )}
            {lesson.additionalFile && (
              <a 
                href={`${baseUrl}/${getSemesterPath(courseFolder, semester)}/${encodeURIComponent(lesson.additionalFile)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors text-sm font-medium"
              >
                <MaterialIcon type="md" />
                <span>TypeScript</span>
              </a>
            )}
            {lesson.materials && lesson.materials.pdf && (
              <a 
                href={`${baseUrl}/${getSemesterPath(courseFolder, semester)}/${encodeURIComponent(getFileName(courseKey, lesson.num, 'pdf'))}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg transition-colors text-sm font-medium"
              >
                <MaterialIcon type="pdf" />
                <span>PDF</span>
              </a>
            )}
            {lesson.materials && lesson.materials.pptx && (
              <a 
                href={`${baseUrl}/${getSemesterPath(courseFolder, semester)}/${encodeURIComponent(getFileName(courseKey, lesson.num, 'pptx'))}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-lg transition-colors text-sm font-medium"
              >
                <MaterialIcon type="pptx" />
                <span>Slides</span>
              </a>
            )}
            {lesson.materials && lesson.materials.folder && (
              <a 
                href={`${baseUrl}/${lessonPath}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white rounded-lg transition-all font-medium shadow-md hover:shadow-lg"
              >
                <MaterialIcon type="folder" />
                <span>Pasta</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  const currentCourse = courses[activeTab];
  const showSemester1 = activeSemester === 1;
  const currentContent = showSemester1 ? currentCourse.semester1 : currentCourse.semester2;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#E4097D] via-[#C8056B] to-[#A0044F]">
        <div className="absolute inset-0 bg-black/5"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          {/* Logo e Links Sociais */}
          <div className="flex justify-between items-start mb-8">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                  <rect width="100" height="100" rx="20" fill="#E4097D"/>
                  <text 
                    x="50" 
                    y="50" 
                    fontFamily="Arial, sans-serif" 
                    fontSize="45" 
                    fontWeight="bold" 
                    fill="white" 
                    textAnchor="middle" 
                    dominantBaseline="central">LS</text>
                </svg>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="https://github.com/ProfLucasSousa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/lucasss-professor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Planejamento de Aulas
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-8 drop-shadow-md font-medium">
              Explore o conteúdo completo das disciplinas de desenvolvimento web com materiais organizados e acessíveis
            </p>
            
            {/* Stats Cards */}
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              <div className="bg-white/15 backdrop-blur-md rounded-2xl px-6 py-4 shadow-2xl border border-white/20 transform hover:scale-105 transition-all hover:bg-white/20 min-w-[140px]">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white drop-shadow-lg">3</div>
                  <div className="text-white/90 font-semibold text-sm uppercase tracking-wide">Disciplinas</div>
                </div>
              </div>

              <div className="bg-white/15 backdrop-blur-md rounded-2xl px-6 py-4 shadow-2xl border border-white/20 transform hover:scale-105 transition-all hover:bg-white/20 min-w-[140px]">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white drop-shadow-lg">2</div>
                  <div className="text-white/90 font-semibold text-sm uppercase tracking-wide">Semestres</div>
                </div>
              </div>

              <div className="bg-white/15 backdrop-blur-md rounded-2xl px-6 py-4 shadow-2xl border border-white/20 transform hover:scale-105 transition-all hover:bg-white/20 min-w-[140px]">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white drop-shadow-lg">60+</div>
                  <div className="text-white/90 font-semibold text-sm uppercase tracking-wide">Aulas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Course Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {Object.entries(courses).map(([key, course]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${course.color} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              {course.icon}
              <span>{course.name}</span>
            </button>
          ))}
        </div>

        {/* Materiais Extras */}
        {currentCourse.materiaisExtras && (
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl p-6 mb-8 shadow-lg">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Materiais Extras</h3>
                  <p className="text-white/90 text-sm">{currentCourse.materiaisExtras.description}</p>
                </div>
              </div>
              <a 
                href={currentCourse.materiaisExtras.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm font-semibold"
              >
                <FolderOpen className="w-5 h-5" />
                <span>Acessar</span>
              </a>
            </div>
          </div>
        )}

        {/* Carrossel de Livros */}
        <BookCarousel books={currentCourse.books} courseFolder={currentCourse.folder} />

        {/* Semester Selector */}
        <div className="flex gap-4 mb-8 justify-center">
          <button
            onClick={() => setActiveSemester(1)}
            className={`px-8 py-3 rounded-xl font-semibold transition-all ${
              activeSemester === 1
                ? 'bg-gray-800 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:shadow-md'
            }`}
          >
            1º Semestre
          </button>
          <button
            onClick={() => setActiveSemester(2)}
            className={`px-8 py-3 rounded-xl font-semibold transition-all ${
              activeSemester === 2
                ? 'bg-gray-800 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:shadow-md'
            }`}
          >
            2º Semestre
          </button>
        </div>

        {/* Content Area */}
        {showSemester1 && currentContent.hasContent === false ? (
          <div className="bg-white rounded-xl p-12 shadow-lg text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileCode className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {currentContent.message}
            </h3>
            <p className="text-gray-600">
              Os materiais do primeiro semestre estarão disponíveis em breve. Por enquanto, confira os materiais extras disponíveis.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {currentContent.map((lesson, index) => (
              <LessonCard key={index} lesson={lesson} courseKey={activeTab} semester={activeSemester} />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Prof. Lucas Sousa</h3>
            <p className="text-gray-400">Material Didático • Desenvolvimento Web</p>
          </div>
          <div className="text-center">
            <a 
              href="https://github.com/ProfLucasSousa/LucasSousaAulas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Code className="w-5 h-5" />
              <span>Ver Repositório no GitHub</span>
            </a>
          </div>
          <div className="text-center mt-6 text-gray-500 text-sm">
            <p>Desenvolvido com React + Vite + Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CoursePlanningSite;