export interface Poem {
  id: string;
  title: string;
  author: string;
  content: string;
  year?: string;
}

export const poems: Poem[] = [
  {
    id: '1',
    title: 'Canção do Exílio',
    author: 'Gonçalves Dias',
    year: '1843',
    content: `Minha terra tem palmeiras,
Onde canta o Sabiá;
As aves, que aqui gorjeiam,
Não gorjeiam como lá.

Nosso céu tem mais estrelas,
Nossas várzeas têm mais flores,
Nossos bosques têm mais vida,
Nossa vida mais amores.

Em cismar, sozinho, à noite,
Mais prazer eu encontro lá;
Minha terra tem palmeiras,
Onde canta o Sabiá.`,
  },
  {
    id: '2',
    title: 'Autopsicografia',
    author: 'Fernando Pessoa',
    year: '1932',
    content: `O poeta é um fingidor.
Finge tão completamente
Que chega a fingir que é dor
A dor que deveras sente.

E os que leem o que escreve,
Na dor lida sentem bem,
Não as duas que ele teve,
Mas só a que eles não têm.

E assim nas calhas de roda
Gira, a entreter a razão,
Esse comboio de corda
Que se chama coração.`,
  },
  {
    id: '3',
    title: 'No Meio do Caminho',
    author: 'Carlos Drummond de Andrade',
    year: '1928',
    content: `No meio do caminho tinha uma pedra
tinha uma pedra no meio do caminho
tinha uma pedra
no meio do caminho tinha uma pedra.

Nunca me esquecerei desse acontecimento
na vida de minhas retinas tão fatigadas.
Nunca me esquecerei que no meio do caminho
tinha uma pedra
tinha uma pedra no meio do caminho
no meio do caminho tinha uma pedra.`,
  },
  {
    id: '4',
    title: 'Soneto de Fidelidade',
    author: 'Vinicius de Moraes',
    year: '1939',
    content: `De tudo, ao meu amor serei atento
Antes, e com tal zelo, e sempre, e tanto
Que mesmo em face do maior encanto
Dele se encante mais meu pensamento.

Quero vivê-lo em cada vão momento
E em louvor hei de espalhar meu canto
E rir meu riso e derramar meu pranto
Ao seu pesar ou seu contentamento.

E assim, quando mais tarde me procure
Quem sabe a morte, angústia de quem vive
Quem sabe a solidão, fim de quem ama

Eu possa me dizer do amor (que tive):
Que não seja imortal, posto que é chama
Mas que seja infinito enquanto dure.`,
  },
  {
    id: '5',
    title: 'Motivo',
    author: 'Cecília Meireles',
    year: '1939',
    content: `Eu canto porque o instante existe
e a minha vida está completa.
Não sou alegre nem sou triste:
sou poeta.

Irmão das coisas fugidias,
não sinto gozo nem tormento.
Atravesso noites e dias
no vento.

Se desmorono ou se edifico,
se permaneço ou me desfaço,
— não sei, não sei. Não sei se fico
ou passo.

Sei que canto. E a canção é tudo.
Tem sangue eterno a asa ritmada.
E um dia sei que estarei mudo:
— mais nada.`,
  },
  {
    id: '6',
    title: 'Pneumotórax',
    author: 'Manuel Bandeira',
    year: '1930',
    content: `Febre, hemoptise, dispneia e suores noturnos.
A vida inteira que podia ter sido e que não foi.
Tosse, tosse, tosse.

Mandou chamar o médico:
— Diga trinta e três.
— Trinta e três... trinta e três... trinta e três...
— Respire.

..............................................................................................

— O senhor tem uma escavação no pulmão esquerdo e o pulmão
direito infiltrado.
— Então, doutor, não é possível tentar o pneumotórax?
— Não. A única coisa a fazer é tocar um tango argentino.`,
  },
  {
    id: '7',
    title: 'Língua Portuguesa',
    author: 'Olavo Bilac',
    year: '1904',
    content: `Última flor do Lácio, inculta e bela,
És, a um tempo, esplendor e sepultura:
Ouro nativo, que na ganga impura
A bruta mina entre os cascalhos vela...

Amo-te assim, desconhecida e obscura,
Tuba de alto clangor, lira singela,
Que tens o trom e o silvo da procela
E o arrolo da saudade e da ternura!

Amo o teu viço agreste e o teu aroma
De virgens selvas e de oceano largo!
Amo-te, ó rude e doloroso idioma,

Em que da voz materna ouvi: "meu filho!"
E em que Camões chorou, no exílio amargo,
O gênio sem ventura e o amor sem brilho!`,
  },
  {
    id: '8',
    title: 'José',
    author: 'Carlos Drummond de Andrade',
    year: '1942',
    content: `E agora, José?
A festa acabou,
a luz apagou,
o povo sumiu,
a noite esfriou,
e agora, José?
e agora, você?
você que é sem nome,
que zomba dos outros,
você que faz versos,
que ama, protesta?
e agora, José?`,
  },
  {
    id: '9',
    title: 'Tabacaria',
    author: 'Álvaro de Campos',
    year: '1928',
    content: `Não sou nada.
Nunca serei nada.
Não posso querer ser nada.
À parte isso, tenho em mim todos os sonhos do mundo.

Janelas do meu quarto,
Do meu quarto de um dos milhões do mundo que ninguém sabe quem é
(E se soubessem quem é, o que saberiam?),
Dais para o mistério de uma rua cruzada constantemente por gente,
Para uma rua inacessível a todos os pensamentos,
Real, impossivelmente real, certa, desconhecidamente certa,
Com o mistério das coisas por baixo das pedras e dos seres,
Com a morte a pôr umidade nas paredes e cabelos brancos nos homens,
Com o Destino a conduzir a carroça de tudo pela estrada de nada.`,
  },
  {
    id: '10',
    title: 'Quadrilha',
    author: 'Carlos Drummond de Andrade',
    year: '1930',
    content: `João amava Teresa que amava Raimundo
que amava Maria que amava Joaquim que amava Lili
que não amava ninguém.

João foi para os Estados Unidos, Teresa para o convento,
Raimundo morreu de desastre, Maria ficou para tia,
Joaquim suicidou-se e Lili casou com J. Pinto Fernandes
que não tinha entrado na história.`,
  },
  {
    id: '11',
    title: 'Trem de Ferro',
    author: 'Manuel Bandeira',
    year: '1936',
    content: `Café com pão
Café com pão
Café com pão

Virge Maria que foi isso maquinista?

Agora sim
Café com pão
Agora sim
Voa, fumaça
Corre, cerca
Ai seu foguista
Bota fogo
Na fornalha
Que eu preciso
Muita força
Muita força
Muita força`,
  },
  {
    id: '12',
    title: 'Balada do Amor Através das Idades',
    author: 'Vinicius de Moraes',
    year: '1946',
    content: `Eu te amo, eu te amo, eu te amo
Eu te amo como o mar ama a areia
Como a noite ama o dia
E o beijo ama a boca
Eu te amo, eu te amo, eu te amo

Eu te amo como o vento ama a vela
Como a nuvem ama a chuva
E a rosa ama o jardim
Eu te amo, eu te amo, eu te amo`,
  },
];

export function getRandomPoem(): Poem {
  const randomIndex = Math.floor(Math.random() * poems.length);
  return poems[randomIndex];
}

export function getPoemById(id: string): Poem | undefined {
  return poems.find((p) => p.id === id);
}

export function searchPoems(query: string): Poem[] {
  const lowerQuery = query.toLowerCase();
  return poems.filter(
    (poem) =>
      poem.title.toLowerCase().includes(lowerQuery) ||
      poem.content.toLowerCase().includes(lowerQuery)
  );
}

export function getAuthors(): string[] {
  const authors = new Set(poems.map((p) => p.author));
  return Array.from(authors).sort();
}

export function getPoemsByAuthor(author: string): Poem[] {
  return poems.filter((p) => p.author === author);
}

export function getShuffledPoemIds(): string[] {
  const ids = poems.map(p => p.id);
  // Fisher-Yates shuffle
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids;
}
