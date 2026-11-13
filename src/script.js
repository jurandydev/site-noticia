
const noticias = [
  {
    id: 1,
    secao: "Brasil",
    titulo: "Estiagem prolongada leva cidades do interior a rever como distribuem água",
    resumo: "Rodízios, reuso e redes mais curtas deixam de ser planos de emergência e viram política permanente.",
    autor: "Helena Prado",
    texto: [
      "Há três meses, o reservatório que abastece Vale Alto opera com menos da metade da capacidade. O que começou como rodízio emergencial virou rotina: cada bairro recebe água em dias alternados.",
      "A companhia de saneamento reduziu em um terço as perdas na rede e começou a vender água de reuso para lavagem de ruas e para indústrias da região.",
      "Especialistas avaliam que os municípios que investirem agora em medição por bairro e em tarifas escalonadas terão mais fôlego nos próximos anos."
    ]
  },
  {
    id: 2,
    secao: "Brasil",
    titulo: "Escolas de tempo integral ampliam vagas, mas faltam professores na zona rural",
    resumo: "Redes estaduais abrem turmas no contraturno. O desafio agora é contratar docentes longe das capitais.",
    autor: "Rafael Quintanilha",
    texto: [
      "O número de matrículas em escolas de tempo integral cresceu pelo quarto ano seguido, impulsionado por programas estaduais que financiam alimentação e transporte.",
      "Nas áreas rurais, porém, as vagas abertas esbarram na falta de professores de matemática, física e química.",
      "Algumas redes testam bolsas de permanência e aulas conjuntas por vídeo entre escolas vizinhas."
    ]
  },
  {
    id: 3,
    secao: "Economia",
    titulo: "Pequenas empresas relatam crédito mais caro e prazos mais curtos",
    resumo: "Levantamento indica cautela para investir e adiamento de contratações.",
    autor: "Davi Nogueira",
    texto: [
      "Donos de pequenos negócios dizem que o crédito ficou mais caro e que os bancos pedem mais garantias.",
      "Boa parte afirma ter adiado a compra de equipamentos por causa dos juros.",
      "Consultores recomendam separar o caixa pessoal do caixa da empresa e comparar linhas de crédito de cooperativas e bancos públicos."
    ]
  },
  {
    id: 4,
    secao: "Economia",
    titulo: "Café mais caro: como a cadeia repassa o custo da safra ao consumidor",
    resumo: "Do produtor ao balcão da padaria, cada etapa ajusta preços em ritmos diferentes.",
    autor: "Sofia Mendonça",
    texto: [
      "O preço do pacote de café costuma reagir à safra com algum atraso. Produtores reajustam o grão em poucas semanas, mas as torrefadoras demoram mais.",
      "No varejo, cafeterias de bairro, que compram em volumes menores, repassam o aumento mais rápido ao consumidor.",
      "Economistas sugerem comparar o preço por quilo, e não por embalagem."
    ]
  },
  {
    id: 5,
    secao: "Tecnologia",
    titulo: "Pagar com o celular ficou comum. Os golpes também",
    resumo: "Aproximação, QR code e links enviados por mensagem: onde estão os pontos fracos.",
    autor: "Bruno Figueiredo",
    texto: [
      "Pagar com o celular virou hábito em feiras, bares e aplicativos de transporte. A conveniência trouxe junto uma onda de tentativas de fraude.",
      "Especialistas recomendam nunca compartilhar códigos recebidos por SMS e conferir o nome do recebedor antes de confirmar.",
      "Em caso de golpe, avisar o banco rapidamente aumenta a chance de bloquear a transferência."
    ]
  },
  {
    id: 6,
    secao: "Ciência",
    titulo: "Pesquisadores mapeiam bactérias do solo que ajudam lavouras a resistir ao calor",
    resumo: "Estudo em campo abre caminho para insumos biológicos.",
    autor: "Paula Siqueira",
    texto: [
      "Uma equipe de universidades públicas coletou amostras de solo e identificou bactérias associadas a plantas mais resistentes ao calor intenso.",
      "Segundo os pesquisadores, esses microrganismos ajudam as raízes a absorver água quando o solo está seco.",
      "O próximo passo é testar a aplicação em lavouras comerciais."
    ]
  },
  {
    id: 7,
    secao: "Saúde",
    titulo: "Sono irregular na adolescência: o que a pesquisa sugere para as famílias",
    resumo: "Horários que mudam todo dia e telas na cama estão entre os fatores associados ao cansaço.",
    autor: "Camila Rezende",
    texto: [
      "Durante a adolescência, o relógio biológico tende a atrasar. Quando as aulas começam cedo, o resultado costuma ser um déficit de sono.",
      "Manter horários parecidos nos fins de semana e reduzir telas na hora de deitar ajuda a melhorar o descanso.",
      "Famílias que notam sonolência intensa devem procurar um profissional de saúde."
    ]
  },
  {
    id: 8,
    secao: "Esportes",
    titulo: "Time de base lidera o campeonato com o elenco mais jovem do torneio",
    resumo: "O técnico aposta em jogadores formados no clube e em um jogo de pressão alta.",
    autor: "Murilo Sampaio",
    texto: [
      "Com um elenco formado em sua maioria por jogadores jovens, o time lidera o campeonato e surpreende rivais com folhas de pagamento maiores.",
      "O técnico diz que o trabalho começou anos atrás, com a aproximação entre a base e o time principal.",
      "A diretoria trabalha para renovar contratos dos jovens antes que clubes maiores façam propostas."
    ]
  }
];


let secaoAtual = "Todas";
let textoBusca = "";


const conteudo = document.getElementById("conteudo");
const menu = document.getElementById("menu");
const campoBusca = document.getElementById("campo-busca");
const btnTema = document.getElementById("btn-tema");


function montarMenu() {
  const secoes = ["Todas"];
  noticias.forEach(function (n) {
    if (!secoes.includes(n.secao)) {
      secoes.push(n.secao);
    }
  });

  menu.innerHTML = "";
  secoes.forEach(function (nome) {
    const botao = document.createElement("button");
    botao.textContent = nome;
    if (nome === secaoAtual) {
      botao.classList.add("ativo");
    }
    botao.addEventListener("click", function () {
      secaoAtual = nome;
      montarMenu();
      mostrarLista();
    });
    menu.appendChild(botao);
  });
}


function mostrarLista() {

  const filtradas = noticias.filter(function (n) {
    const daSecao = secaoAtual === "Todas" || n.secao === secaoAtual;
    const alvo = (n.titulo + " " + n.resumo).toLowerCase();
    const naBusca = alvo.includes(textoBusca.toLowerCase());
    return daSecao && naBusca;
  });

  if (filtradas.length === 0) {
    conteudo.innerHTML = '<p class="vazio">Nenhuma notícia encontrada.</p>';
    return;
  }

  let html = '<div class="grade">';
  filtradas.forEach(function (n, posicao) {
    
    const classe = posicao === 0 ? "card destaque" : "card";
    html += '<article class="' + classe + '" onclick="mostrarMateria(' + n.id + ')">';
    html += '<p class="secao">' + n.secao + "</p>";
    html += "<h2>" + n.titulo + "</h2>";
    html += '<p class="resumo">' + n.resumo + "</p>";
    html += '<p class="autor">Por ' + n.autor + "</p>";
    html += "</article>";
  });
  html += "</div>";

  conteudo.innerHTML = html;
}


function mostrarMateria(id) {
  const n = noticias.find(function (item) {
    return item.id === id;
  });

  let html = '<article class="materia">';
  html += '<button type="button" onclick="mostrarLista()">← Voltar</button>';
  html += '<p class="secao">' + n.secao + "</p>";
  html += "<h1>" + n.titulo + "</h1>";
  html += '<p class="resumo">' + n.resumo + "</p>";
  html += '<p class="autor">Por ' + n.autor + "</p>";
  n.texto.forEach(function (paragrafo) {
    html += '<p class="paragrafo">' + paragrafo + "</p>";
  });
  html += "</article>";

  conteudo.innerHTML = html;
  window.scrollTo(0, 0);
}

campoBusca.addEventListener("input", function () {
  textoBusca = campoBusca.value;
  mostrarLista();
});


btnTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");
  const escuro = document.body.classList.contains("escuro");
  btnTema.textContent = escuro ? "Modo claro" : "Modo escuro";
});

montarMenu();
mostrarLista();
