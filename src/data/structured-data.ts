export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Strivo Academy",
  "alternateName": "Strivo",
  "description": "Plataforma de cursos de programação com acesso vitalício a +520 cursos em Frontend, Backend, Mobile, Data Science e mais.",
  "url": "https://strivo.com.br",
  "logo": {
    "@type": "ImageObject",
    "url": "https://strivo.com.br/lovable-uploads/05d06d17-f1c1-49a8-a7d8-42335226df2e.png",
    "width": 400,
    "height": 400
  },
  "image": "https://strivo.com.br/lovable-uploads/05d06d17-f1c1-49a8-a7d8-42335226df2e.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-11-99999-9999",
    "contactType": "customer service",
    "email": "contato@strivo.com.br",
    "availableLanguage": "Portuguese"
  },
  "sameAs": [
    "https://instagram.com/strivoacademy",
    "https://youtube.com/strivoacademy",
    "https://linkedin.com/company/strivoacademy",
    "https://facebook.com/strivoacademy",
    "https://twitter.com/strivoacademy"
  ],
  "foundingDate": "2024",
  "numberOfEmployees": "10-50",
  "slogan": "Transforme sua carreira tech com conhecimento de qualidade"
};

export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Acesso Vitalício Strivo Academy",
  "description": "Acesso vitalício a +520 cursos de programação em Frontend, Backend, Mobile, Data Science, DevOps e Game Development",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Strivo Academy",
    "url": "https://strivo.com.br"
  },
  "courseMode": "online",
  "educationalLevel": "intermediate",
  "inLanguage": "pt-BR",
  "isAccessibleForFree": false,
  "coursePrerequisites": "Conhecimento básico de informática",
  "syllabusSections": [
    {
      "@type": "Syllabus",
      "name": "Frontend Development",
      "description": "React, Vue.js, Angular, TypeScript, HTML5, CSS3 e muito mais"
    },
    {
      "@type": "Syllabus", 
      "name": "Backend Development",
      "description": "Node.js, Python, Java, PHP, C#, APIs e bancos de dados"
    },
    {
      "@type": "Syllabus",
      "name": "Mobile Development", 
      "description": "React Native, Flutter, Swift, Kotlin e desenvolvimento nativo"
    },
    {
      "@type": "Syllabus",
      "name": "Data Science & IA",
      "description": "Python, Machine Learning, Deep Learning, Análise de Dados"
    },
    {
      "@type": "Syllabus",
      "name": "DevOps & Cloud",
      "description": "AWS, Docker, Kubernetes, CI/CD, Linux e infraestrutura"
    },
    {
      "@type": "Syllabus",
      "name": "Game Development",
      "description": "Unity, Unreal Engine, C++, C# e desenvolvimento de jogos"
    }
  ],
  "timeRequired": "P6M",
  "teaches": [
    "Programação Frontend",
    "Programação Backend", 
    "Desenvolvimento Mobile",
    "Data Science",
    "Inteligência Artificial",
    "DevOps",
    "Desenvolvimento de Jogos"
  ]
};

export const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  "name": "Acesso Vitalício Strivo Academy",
  "description": "Acesso vitalício a +520 cursos de programação",
  "price": "497.00",
  "priceCurrency": "BRL",
  "availability": "https://schema.org/InStock",
  "validFrom": "2024-01-01",
  "validThrough": "2024-12-31",
  "priceValidUntil": "2024-12-31",
  "seller": {
    "@type": "EducationalOrganization",
    "name": "Strivo Academy"
  },
  "category": "Educação Online",
  "itemCondition": "https://schema.org/NewCondition",
  "offers": {
    "@type": "Offer",
    "price": "497.00",
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "497.00",
      "priceCurrency": "BRL"
    }
  }
};

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "itemReviewed": {
    "@type": "EducationalOrganization",
    "name": "Strivo Academy"
  },
  "ratingValue": "4.9",
  "bestRating": "5",
  "worstRating": "1",
  "ratingCount": "15000"
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quantos cursos de programação estão disponíveis na Strivo Academy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Strivo Academy oferece acesso vitalício a mais de 520 cursos de programação, cobrindo todas as áreas principais: Frontend, Backend, Mobile, Data Science, DevOps e Game Development."
      }
    },
    {
      "@type": "Question", 
      "name": "Quanto custa o acesso vitalício na Strivo Academy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O acesso vitalício custa apenas R$ 497, um pagamento único que te dá acesso para sempre a todos os cursos atuais e futuros da plataforma."
      }
    },
    {
      "@type": "Question",
      "name": "Quais tecnologias de programação são ensinadas na Strivo Academy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ensinamos as principais tecnologias do mercado: React, Vue.js, Angular, TypeScript, Node.js, Python, Java, PHP, React Native, Flutter, Machine Learning, Docker, Kubernetes, Unity e muito mais."
      }
    },
    {
      "@type": "Question",
      "name": "Existe garantia de satisfação na Strivo Academy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim! Oferecemos garantia de 7 dias ou seu dinheiro de volta. Se não ficar satisfeito com o conteúdo, devolvemos 100% do valor investido."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona o acesso vitalício da Strivo Academy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Com o acesso vitalício, você paga apenas uma vez e tem acesso para sempre a todos os cursos atuais e futuros da plataforma, sem mensalidades ou taxas adicionais."
      }
    }
  ]
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://strivo.com.br"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Cursos de Programação",
      "item": "https://strivo.com.br#cursos"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Benefícios",
      "item": "https://strivo.com.br#beneficios"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Depoimentos",
      "item": "https://strivo.com.br#depoimentos"
    }
  ]
};
