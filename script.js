/**
 * Paulo Hilário - Personal Trainer
 * Interactive Interactions & Method Pipeline
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenu.classList.contains('hidden');
      if (isExpanded) {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      });
    });
  }

  // 2. Interactive Method Pipeline Tabs
  const methodStepsData = [
    {
      step: '01',
      title: 'Avaliação Diagnóstica Individual',
      subtitle: 'Entendimento profundo do seu corpo e da sua rotina',
      description: 'Antes de qualquer peso ser levantado, realizamos um raio-x completo do seu histórico esportivo, histórico de dores ou cirurgias, limitações de mobilidade articular, rotina de sono e horários disponíveis. O treino nasce da sua realidade, nunca de uma fórmula pronta.',
      tag: 'FASE INICIAL',
      metrics: ['Anamnese de Lesões & Postura', 'Testes de Amplitude Articular', 'Definição de Metas Claras']
    },
    {
      step: '02',
      title: 'Planejamento Estratégico & Periodização',
      subtitle: 'Engenharia de treino desenhada sob medida',
      description: 'Estruturação do volume de séries, seleção criteriosa de exercícios e frequência semanal (seja 3, 4 ou 5 dias na semana). O planejamento divide sua evolução em blocos estruturados para evitar estagnação e garantir que você progrida com consistência.',
      tag: 'PERIODIZAÇÃO',
      metrics: ['Divisão de Grupos Musculares', 'Controle de Volume Semanal', 'Adaptação aos Equipamentos']
    },
    {
      step: '03',
      title: 'Execução Técnica & Treinamento',
      subtitle: 'Foco estrito em biomecânica e recrutamento muscular',
      description: 'Treinar com intensidade sem técnica é o caminho mais rápido para a lesão. No método de Paulo Hilário, você aprende a cadência correta de cada repetição, estabilização escapular e pélvica, e conexão mente-músculo para extrair o máximo de cada repetição.',
      tag: 'BIO-MECÂNICA',
      metrics: ['Padronização do Movimento', 'Cadência Excêntrica/Concêntrica', 'Proteção Articular Ativa']
    },
    {
      step: '04',
      title: 'Acompanhamento Contínuo & Suporte',
      subtitle: 'Presença e feedback constante pelo WhatsApp',
      description: 'Você nunca treina sozinho. Pelo WhatsApp, você envia vídeos da execução dos seus exercícios para análise detalhada de postura. Ajustamos cargas, tiramos dúvidas em tempo real e mantemos você motivado e disciplinado em cada sessão.',
      tag: 'SUPORTE DIRETO',
      metrics: ['Correções por Áudio e Vídeo', 'Ajustes de Cargas em Tempo Real', 'Canal Prioritário sem Robôs']
    },
    {
      step: '05',
      title: 'Reavaliação Periódica & Evolução',
      subtitle: 'Sobrecarga progressiva sem platôs',
      description: 'O corpo se adapta aos estímulos. A cada ciclo de 4 a 6 semanas, reavaliamos seus indicadores de força, composição corporal e rendimento. Com base em dados reais de progresso, calibramos o programa para mantê-lo sempre em evolução contínua.',
      tag: 'PROGRESSÃO REAL',
      metrics: ['Sobrecarga Progressiva Calculada', 'Ajuste de Volume e Intensidade', 'Manutenção da Longevidade']
    }
  ];

  const stepButtons = document.querySelectorAll('.step-tab-btn');
  const detailTitle = document.getElementById('step-detail-title');
  const detailSubtitle = document.getElementById('step-detail-subtitle');
  const detailDesc = document.getElementById('step-detail-desc');
  const detailTag = document.getElementById('step-detail-tag');
  const detailMetrics = document.getElementById('step-detail-metrics');

  function updateStepContent(index) {
    const data = methodStepsData[index];
    if (!data) return;

    stepButtons.forEach((btn, i) => {
      if (i === index) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (detailTitle) detailTitle.textContent = data.title;
    if (detailSubtitle) detailSubtitle.textContent = data.subtitle;
    if (detailDesc) detailDesc.textContent = data.description;
    if (detailTag) detailTag.textContent = data.tag;

    if (detailMetrics) {
      detailMetrics.innerHTML = data.metrics.map(m => `
        <li class="flex items-center gap-3 text-sm text-slate-300">
          <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
          </svg>
          <span>${m}</span>
        </li>
      `).join('');
    }
  }

  stepButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-step-index'), 10);
      updateStepContent(idx);
    });
  });

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        faqItems.forEach(other => {
          if (other !== item) other.classList.remove('active');
        });
        // Toggle current
        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    }
  });

  // 4. Smooth Anchor Scroll with offset for sticky navbar
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
