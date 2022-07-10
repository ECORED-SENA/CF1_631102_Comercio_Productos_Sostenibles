export default {
  global: {
    componenteFormativo: 'Segmentación de mercados y clientes',
    descripcionCurso:
      'En el mundo globalizado e industrializado, conocer el mercado es de vital importancia, por esto, es necesario tomar en cuenta todas las variables económicas, políticas, tendencias, buscando ser empresas competentes, identificando y prospectando adecuadamente los clientes mediante la segmentación de mercados, que aporta para el desarrollo sostenible de las empresas y para satisfacer las necesidades específicas de los clientes.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Segmentación de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Variables de mercado',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Criterios de segmentación de mercados',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Posicionamiento',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Prospección de los clientes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Servicio al cliente',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'ArcGIS Resources. (s. f.). Georreferenciación y sistemas de coordenadas.',
      link:
        'https://resources.arcgis.com/es/help/getting-started/articles/026n0000000s000000.htm',
    },
    {
      referencia:
        'Barrera, M. (2014). Prospección comercial en mercados altamente competidos. Universidad Militar Nueva Granada. ',
      link:
        'https://repository.unimilitar.edu.co/bitstream/handle/10654/12730/MARTHA%20RUTH%20BARRERA%20TORRES.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Ferrell, O. y Hartline, M. (2012). Estrategia de marketing. Cengage Learning.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/39976',
    },
    {
      referencia:
        'Guadarrama, E., y Rosales, E. (2015). Marketing relacional: valor, satisfacción, lealtad y retención del cliente. Análisis y reflexión teórica. Ciencia y Sociedad, 40(2), p. 307-340. ',
      link: 'https://www.redalyc.org/pdf/870/87041161004.pdf',
    },
    {
      referencia:
        'Maslow, A. (2007). El hombre autorrealizado. Hacia una psicología del Ser. Kairós.',
      link:
        'https://escuelafeliz.org/wp-content/uploads/2020/10/El-Hombre-Autorrealizado.-Hacia-una-psicologia-del-Ser-Abraham-H.-Maslow.pdf',
    },
    {
      referencia:
        'Da Silva, D. (2021). ¿Cómo satisfacer las necesidades de los clientes? Blog de Zendesk. ',
      link:
        'https://www.zendesk.com.mx/blog/necesidades-del-cliente/#:~:text=Las%20necesidades%20de%20los%20clientes%20se%20definen%20como%20los%20factores,tomar%20su%20decisi%C3%B3n%20de%20compra',
    },
  ],
  glosario: [
    {
      termino: 'Cliente',
      significado:
        'es la razón de ser de la empresa. Es la persona, o empresa que paga por los productos de la empresa.',
    },
    {
      termino: 'Cliente potencial',
      significado:
        'son aquellos clientes potenciales que tienen como características necesitar el producto que ofrece la empresa y tener la capacidad para adquirirlo',
    },
    {
      termino: 'Mercadeo',
      significado:
        'es el proceso responsable de diseñar y operar las estrategias para que los clientes adquieran los productos de la empresa de una forma rentable.',
    },
    {
      termino: 'Plan de trabajo',
      significado:
        'es un planificador que posee cualidades y características dinámicas, se puede transformar a la medida de la evolución del tiempo, teniendo en cuenta el contexto social del momento espacial y temporal. ',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'se entiende por posicionamiento todas las estrategias de mercado aplicadas en conjunto para estar en el primer pensamiento de sus clientes en cuanto a elección de compra y satisfacción de necesidades.',
    },
    {
      termino: 'Precio',
      significado:
        'es el valor de intercambio entre oferentes y demandantes. Es la única variable de la mezcla de mercadeo que genera ingresos para la compañía.',
    },
    {
      termino: 'Producto',
      significado:
        'es el objeto de la transacción. En el mercadeo moderno un producto puede ser: un tangible, un intangible, una marca, una persona o un lugar.',
    },
    {
      termino: 'Valor agregado',
      significado:
        'se entiende por valor agregado las características o característica diferenciadora de un producto específico frente a su competencia.',
    },
  ],
  complementario: [
    {
      tema: '1. Segmentación de Mercados',
      referencia:
        'Ortiz, M., Silva, H., González, J., Martínez, D., Giraldo M. y Juliao D. (2015). Marketing: conceptos y aplicaciones. Ediciones de la U.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69930?page=142',
    },
    {
      tema: '1.3 Posicionamiento',
      referencia:
        'Aguilar, A. (2016). ¿Qué es posicionamiento de una marca? 😍 | BRANDING | POSITIONING | POSICIONAMIENTO de MERCADO [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MA2B4yV9Z9Q',
    },
    {
      tema: '2.1 Prospección de los clientes',
      referencia:
        'Ferrell, O. y Hartline, M. (2012). Estrategia de marketing. Cengage Learning. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/39976',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: '',
        cargo: '',
        centro: '',
      },
      {
        nombre: '',
        cargo: '',
        centro: '',
      },
      {
        nombre: '',
        cargo: '',
        centro: '',
      },
      {
        nombre: '',
        cargo: '',
        centro: '',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
