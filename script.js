const appShell = document.getElementById('appShell');
const modal = document.getElementById('passwordModal');
const modalCard = modal.querySelector('.modal__card');
const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('passwordInput');
const modalDescription = document.getElementById('modalDescription');
const modalFeedback = document.getElementById('modalFeedback');
const closeTriggers = Array.from(document.querySelectorAll('[data-close-modal]'));

function escapeHtml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function formatFarewellHtml(text) {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => `<p class="farewell-card__text">${escapeHtml(paragraph).replaceAll('\n', '<br />')}</p>`)
    .join('');
}

const friends = [
  {
    name: 'Diogo',
    slug: 'diogo',
    bgColor: '#f7efe9',
    password: 'nunca',
    hint: 'Dica: Tu ficou com o JP?',
    farewell:
      `é, diogo… te falar que já tentei escrever isso umas 5 vezes e nunca parece que tá bom o suficiente ou que tem tudo que eu queria passar pra ti, mas vou tentar o máximo aqui.

cara, acho que é meio evidente que tu é uma das pessoas mais importantes da minha vida. te conhecer, além de me fazer muito bem, fez eu aprender uma caralhada de coisas, e eu sou muito grato a ti. eu posso passar a carta inteira só te agradecendo por tudo que tu já fez por mim, que foi coisa pra caralho. seja ir nos treinos só acompanhar, as conversas no carro até a madrugada em dia de semana, os campeonatos que tu foi ver meus mesmo sem ter dormido, as festas que eu sabia que tu não queria muito ir, mas ia só pra me acompanhar… enfim, eu queria te agradecer por tudo que tu fez por mim, tudo mesmo. queria muito conseguir fazer metade das coisas que tu fez por mim pra ti.

eu sei que é óbvio, mas eu preciso falar que, pra qualquer coisa que tu precisar, eu vou estar aqui contigo. obviamente não vou mais estar tão perto e tão presente na tua vida, mas o carinho e o amor que eu sinto por ti é um sentimento que vai me acompanhar pro resto da minha vida. tenho certeza que quando eu tiver meus filhos, tu vai ser um dos personagens mais fodas que eu vou citar pra eles, histórias que a gente viveu e momentos que a gente passou junto. quero ser teu amigo pra sempre, só tenho muito medo de como vai ser minha relação com todos vocês comigo estando tão longe.

queria falar uma coisa pra ti que acho que eu já falei, e tu pode ou não concordar comigo, mas fica como uma última “dica” minha. cara, acho muito lindo ver o quanto tu se esforça pelos outros. tua dedicação e carinho com as pessoas que tu ama é uma coisa bizarramente admirável. tudo que tu fez e ainda faz pela tua mãe acho que é uma das coisas mais lindas que eu já vi na vida, e isso me motiva a ser que nem tu. MAS, por favor, eu te peço do fundo do meu coração: cuida mais de ti. pensa mais em ti e faz as coisas mais por ti. esse sentimento de cuidado que tu tem com todo mundo acho que te machuca muitas vezes, principalmente toda a situação do falecido e tudo mais. por favor, arranja um tempo pra ti, descansa e, quando precisar, manda os cara tomar no cu. tu precisa se priorizar (eu sei que tu vai continuar sendo quem tu é, que é muito foda, mas eu preciso minimamente falar pra ti se cuidar um pouco mais).

enfim… eu realmente não falei tudo que eu tinha pra falar e acho que nunca vou conseguir, mas espero que tenha dado pra perceber o carinho que eu tenho por ti e o quanto eu te admiro. quero continuar com a tua amizade pro resto da vida e queria que tu soubesse que tudo que tu precisar, e eu conseguir te ajudar, eu vou fazer, mesmo estando do outro lado do continente. dioguinho, fica bem, eu te amo muito, muito mesmo. obrigado de novo por tudo que tu fez por mim.

OSS👊 `,
    photos: [
      'assets/diogo/WhatsApp Image 2026-04-05 at 16.06.55.jpeg',
      'assets/diogo/WhatsApp Image 2026-04-05 at 16.07.00.jpeg',
      'assets/diogo/WhatsApp Image 2026-04-05 at 16.07.01.jpeg',
      'assets/diogo/WhatsApp Image 2026-04-05 at 16.07.03.jpeg',
      'assets/diogo/WhatsApp Image 2026-04-05 at 16.09.23.jpeg',
      'assets/diogo/foto-2.jpeg',
      'assets/diogo/foto-3.jpeg',
      'assets/diogo/foto-4.jpeg',
      'assets/diogo/foto-5.jpeg',
      'assets/diogo/foto-7.jpeg',
      'assets/diogo/foto-8.jpeg',
    ],
  },
  {
    name: 'Ana Laura',
    slug: 'ana-laura',
    bgColor: '#e8f0f7',
    password: 'alisson',
    hint: 'Dica: Pior mão que eu ja fiz p ti kk(dsclp...).',
    farewell:
      `bom, aninha… assim como eu tô escrevendo em todas as cartas, escrevendo elas eu descobri que sou péssimo falando como eu me sinto, mas espero que dê pra passar um pouco do quanto eu te amo e tenho um carinho imenso por ti.

não sei como começar a tua carta de despedida se não for falando de como a gente se aproximou. foi um tempo completamente conturbado e, né, a situação que aconteceu foi tão ruim pra mim quanto pra ti, eu imagino. o jeito que tu me deu suporte, mesmo sem praticamente me conhecer, foi uma das coisas mais gentis e carinhosas que alguém já fez por mim.

a quantidade de vezes que eu só falava merda e ficava indo pra rua chorar, e todas as vezes tu ia conversar comigo e me deixar melhor, mesmo tu também não estando 100%, é uma coisa que eu respeito e vou te agradecer por isso pro resto da minha vida. mesmo a gente já tendo conversado sobre o assunto mil vezes, eu ainda não consigo deixar de me sentir culpado por tu ter se separado da analara, então só queria pedir desculpa por tudo. eu sei que tu não me culpa, mas, de qualquer jeito, se não tivesse acontecido essa merda, sei lá como iam estar as coisas hoje em dia.

tirando o assunto bruno, que acho que já deu KKKK, só queria te falar o quanto eu te admiro e acho uma mulher FODA. acho que eu, no teu lugar, não conseguiria ser tão pica. cuidar da casa e do irmão, trabalhar o que tu já trabalhou, sacrificar muitas coisas que são muito importantes pra ti e, mesmo assim, ser uma guria carinhosa que sempre bota os outros em primeiro lugar… de verdade, é algo que eu admiro e sempre vou.

tu é uma das pessoas mais fortes que eu conheço e quero te falar que sempre que tu precisar de um apoio eu vou estar aqui. mesmo longe, meu carinho e respeito por ti nunca vão mudar, e minha vontade de te ajudar, assim como todo mundo, sempre vai ser a mesma.

na carta de todo mundo eu tô dando uma “diquinha” ou algo que eu tô me metendo na vida deles KKKKKKKK, meu jeitinho, mas tu, realmente, eu não consigo nem pensar em nada. tudo que tu faz eu sempre concordo 100% e acho muito foda, tanto que tu foi a única que eu acho que nunca tomou um esporro meu POKASDPOSAKDPOK. mas, de verdade, sempre que tu tiver pra baixo pode me chamar, nem que seja pra ficar conversando merda em chamada, eu sempre vou estar aqui por ti.

fico muito feliz que as coisas estão dando certo na tua vida, tanto o noah quanto toda a questão do emprego, e sempre vou te apoiar em todas as decisões que tu tiver.

enfim, aninha… acho que é isso. não consigo falar tudo que eu quero nem botar pra fora tudo que eu sinto por ti, mas realmente eu te amo muito. espero que a gente seja amigo pra sempre, porque tu é uma das pessoas mais meigas que já passaram pela minha vida e eu sempre vou querer viver mais momentos e sorrisos contigo.

te amo muito❤️

Py`,
    photos: [
      'assets/ana-laura/WhatsApp Image 2026-04-05 at 16.06.53.jpeg',
      'assets/ana-laura/WhatsApp Image 2026-04-05 at 16.09.29 (1).jpeg',
      'assets/ana-laura/WhatsApp Image 2026-04-05 at 16.09.30.jpeg',
      'assets/ana-laura/WhatsApp Image 2026-04-05 at 16.09.31.jpeg',
      'assets/ana-laura/WhatsApp Image 2026-04-05 at 16.09.32.jpeg',
      'assets/ana-laura/WhatsApp Image 2026-04-05 at 16.09.33 (1).jpeg',
      'assets/ana-laura/WhatsApp Image 2026-04-05 at 16.09.34.jpeg',
      'assets/ana-laura/WhatsApp Image 2026-04-05 at 16.09.37.jpeg',
      'assets/ana-laura/WhatsApp Image 2026-04-05 at 16.10.36 (3).jpeg',
      'assets/ana-laura/WhatsApp Image 2026-04-05 at 16.10.37.jpeg',
    ],
  },
  {
    name: 'Luiza',
    slug: 'luiza',
    bgColor: '#f4eddc',
    password: 'skol beats',
    hint: 'Dica: Nome da bebida que tu ta me devendo o dinheiro ate hoje.',
    farewell:
      `é, luiza… finalmente chegou o dia da cartinha KKK. acho que, por um lado, tu queria muito ter uma e deve estar feliz que tá recebendo, mas por outro significa que eu já tô indo embora. enfim, espero que eu consiga escrever tudo que eu sinto por ti nela.

queria começar agradecendo por tu ser quem tu é. acho que eu nunca consegui pensar em ti e não vir algo relacionado à felicidade na minha cabeça. tudo que a gente viveu e passou junto sempre me faz sentir muita alegria, e isso é algo que me deixa bizarramente feliz, até porque a gente não passou só coisa boa junto não KKKK.

desde o início, acho que a gente começou a amizade de um jeito muito sincero, até demais. o que começou com uma fofoca aqui e outra ali se tornou uma das amizades mais lindas e verdadeiras que eu já tive na minha vida. eu acho que tu não tem muita noção do quanto eu te admiro e te acho incrível. tu é alguém que eu queria que tivesse do meu lado pro resto da vida.

e ok, a gente vai continuar sendo amigo, mas sabe? todas as girls nights que a gente já teve, os passeios no UNA e as conversas na tributo foram algo que eu vou levar pro resto da minha vida com muito carinho. QUERO SER DINDO E PADRINHO TEU E DO JOÃO EIN, EU VOU COBRAR.

mas, cobranças à parte, eu amei todo esse tempo que a gente passou junto. fotos, choros, sorrisos e exatamente tudo… não tem nada que eu me arrependa ou que eu teria mudado. tu definitivamente é uma pessoa iluminada e que faz bem pra todo mundo que se aproxima de ti. tenho certeza que tua vida vai ser muito boa e sempre rodeada das pessoas que tu ama, porque é isso que tu atrai.

não sei como vai ser de agora em diante em relação à amizade, mas quero que tu saiba que eu sempre vou pensar em vocês com carinho e sempre vou estar disponível quando vocês precisarem. tu muito principalmente, que sempre tava comigo, mesmo nos momentos que eu era mais insuportável KKKKK. além de sempre estar junto nos campeonatos que eu ia jogar, fazendo doce (sempre bons pra caralho, sério, tu cozinha muito bem) e tudo que tu podia, mesmo sem entender muito de vôlei. isso foi uma coisa muito importante pra mim, que eu agradeço muito tu ter feito.

assim como eu falei pra ana, eu ainda me sinto muito culpado pelo afastamento do triozinho de vocês, então vou aproveitar aqui de novo pra pedir desculpa. eu sei que tu não me culpa, nem ela, mas em nenhum momento eu quis ser o ponto central de algo que não fosse te deixar bem.

acho que é isso, luizinha… eu espero de verdade que a carta tenha demonstrado o carinho e respeito que eu tenho por ti. tu é uma mulher incrível, que ainda vai conquistar muitas coisas, e eu quero ainda estar na tua vida pra ver tu conquistando tudo isso.

te amo muito mesmo, e sempre que tu precisar de mim tu sabe que é só me chamar.❤️

Py`,
    photos: [
      'assets/luiza/WhatsApp Image 2026-04-05 at 16.07.04 (1).jpeg',
      'assets/luiza/WhatsApp Image 2026-04-05 at 16.07.07 (1).jpeg',
      'assets/luiza/WhatsApp Image 2026-04-05 at 16.07.08.jpeg',
      'assets/luiza/WhatsApp Image 2026-04-05 at 16.09.26 (1).jpeg',
      'assets/luiza/WhatsApp Image 2026-04-05 at 16.09.38.jpeg',
      'assets/luiza/WhatsApp Image 2026-04-05 at 16.09.51 (1).jpeg',
      'assets/luiza/WhatsApp Image 2026-04-05 at 16.09.51.jpeg',
      'assets/luiza/WhatsApp Image 2026-04-05 at 16.10.34 (1).jpeg',
      'assets/luiza/WhatsApp Image 2026-04-05 at 16.10.36.jpeg',
      'assets/luiza/WhatsApp Image 2026-04-05 at 16.10.37 (1).jpeg',
      'assets/luiza/WhatsApp Image 2026-04-05 at 16.10.37 (3).jpeg',
    ],
  },
  {
    name: 'João',
    slug: 'joao',
    bgColor: '#edf4ec',
    password: 'peneira',
    hint: 'Dica: O que tava rolando na primeira vez que a gente conversou (pro intercursos)',
    farewell:
      `é, meu oposto favorito… acho que chegou o dia que finalmente vou parar de te ESPANCAR no vôlei por forças maiores KKKKKKKKKKKK.

mas, brincadeiras à parte, eu só queria falar algumas coisas que eu sinto antes de meter o pé, já que eu não falo tudo que eu penso (e parece mentira, mas eu realmente penso antes de falar!!!).

cara, não tem como começar isso aqui sem falar o quanto eu te acho foda e te respeito pra caralho. tu tem uma importância na minha vida muito maior do que tu acha. além de ser um dos meus melhores amigos, é por causa tua que eu sou o que eu sou hoje no vôlei. acho que eu já te falei bêbado, mas tu falar pra mim toda a situação da peneira e que começou a focar no vôlei por causa de mim foi uma das coisas que mais me motivou a continuar melhorando no esporte e tentando render mais.

pensa, o cara que te fez começar a jogar vôlei não pode ser ruim, tá ligado KKK. mas, de verdade, isso me inspirou muito a continuar, porque foi uma prova pra mim de que eu tava indo pro caminho certo. apesar de eu ser muito arrogante e orgulhoso, que eu sei que eu sou, o vôlei sempre me deixou muito inseguro, e foi por causa tua que eu comecei a ver valor em mim mesmo. então, de verdade, eu agradeço muito a ti por isso.

tu, nesse último ano, foi muito essencial pra mim e eu realmente espero ter sido pra ti também. tu é um cara que eu admiro muito por tudo que tu faz e tudo que tu já fez. morar sozinho cedo e cuidar da irmã eu sei que não é fácil. apesar de tu não se abrir muito, eu imagino as coisas que tu passa, e eu acho muito foda tu ser sempre uma pessoa segura, que todo mundo pode contar (mas às vezes é bom desabafar um pouco). ficar guardando tudo pra ti pode ser, e eu sei que é, muito torturante.

mesmo indo embora, quero continuar acompanhando teu crescimento como pessoa. dá pra ver que tu se empenha muito nas coisas que tu faz, e isso vai fazer tu ser um homem incrível, que eu sei que ainda vai alcançar muitas coisas. eu já falei pra luiza, mas vou falar aqui de novo: SOU PADRINHO DO CASAMENTO, PAI. agora já era, não tem mais volta não KKKKKK. volto do outro lado do planeta pra ir pro casamento e foda-se. fico muito feliz com o namoro de vocês e me deixa muito feliz ter feito parte disso, nem que seja uma importância mínima.

enfim, pai… de verdade, eu te amo muito e te respeito pra caralho. sempre que tu precisar de ajuda, tu sabe que pode contar comigo, seja em programação, vôlei, enfim, qualquer coisa mesmo. o que tu precisar, eu vou estar no telefone pra te responder assim que eu conseguir. fico muito feliz que tu tá me procurando pra ajuda em programação (apesar de eu também não ser grande coisa KKK), mas eu sempre tento te ajudar o máximo que eu posso.

cuida da luiza e da ana laura… tu já faz isso, mas tô deixando essa aqui só pra ti KKKKKKKK.

enfim, mlk, voa. te amo pra caralho e eu sei que a gente ainda vai passar muita coisa junto nessa vida.`,
    photos: [
      'assets/joao/WhatsApp Image 2026-04-05 at 16.06.56.jpeg',
      'assets/joao/WhatsApp Image 2026-04-05 at 16.06.57.jpeg',
      'assets/joao/WhatsApp Image 2026-04-05 at 16.09.25 (1).jpeg',
      'assets/joao/WhatsApp Image 2026-04-05 at 16.09.25.jpeg',
      'assets/joao/WhatsApp Image 2026-04-05 at 16.09.27 (1).jpeg',
      'assets/joao/WhatsApp Image 2026-04-05 at 16.09.30 (1).jpeg',
      'assets/joao/WhatsApp Image 2026-04-05 at 16.09.33.jpeg',
      'assets/joao/WhatsApp Image 2026-04-05 at 16.09.34 (1).jpeg',
      'assets/joao/WhatsApp Image 2026-04-05 at 16.09.35.jpeg',
      'assets/joao/WhatsApp Image 2026-04-05 at 16.09.43.jpeg',
    ],
  },
  {
    name: 'Andrei',
    slug: 'andrei',
    bgColor: '#f0ebe6',
    password: 'petunia',
    hint: 'Dica: Nome do inseto filho da puta que tava no teu ombro no dia do campeonato.',
    farewell:
      `bueno, meu central… chegou o dia que eu vou ter que me despedir real. já se despedimos de um time juntos e agora vai ser de verdade.

cara, começar essa carta falando o quanto eu te acho um cara bom… de verdade, desde que eu te conheci essa sempre foi a característica que mais se destacou em ti, e até hoje continuo achando a mesma coisa. apesar das situações que foram rolando, o meu respeito e carinho por ti continuam sendo muito grandes e sempre vão ser, não importa onde eu estiver.

apesar de ser o mais velho do grupo (que eu faço o favor de sempre apontar isso pra ti KKKKKKKK), eu sempre te vi muito mais como um irmão mais novo do que qualquer outra coisa. sempre me vi muito em ti, principalmente em todo o rolê com a gisela, então eu sei que já devo ter falado muita merda pra ti que tu não concorda, mas queria deixar claro que sempre quis o teu bem e, na minha cabeça, eu sempre tentei te ajudar na situação que fosse.

tu sempre esteve comigo em todos os momentos que eu precisei, pilhando festa e animando rolê, e eu te agradeço muito pelo tempo que tu dedicou a mim. tu é uma pessoa incrível e me deixa triste que tu não pensa isso sobre ti mesmo. tu é um amigo bom (apesar de às vezes fazer cagada, mas aí quem nunca), mas o que eu sempre vejo em ti é que tu faz as coisas de coração bom e nunca na maldade. isso conta pra caralho.

eu sempre vou estar disponível quando tu quiser conversar, desabafar ou até levar um esporro, que eu já te dei tanto que nem me lembro mais de todos eles POKSADOPAKSD. mas eu sempre vou querer teu bem e o melhor pra ti, seja no vôlei comigo te enchendo o saco pela troca de posição, seja por algumas merdas que tu faça.

tu é um grande amigo que eu quero levar pra mim pro resto da minha vida toda, e eu agradeço muito por ter me aproximado de ti ano passado. como eu já disse pra ti, eu admiro muito teu jeito, principalmente naquele rolê da theodora. realmente, depois daquilo até eu comecei a mudar um pouco o jeito que eu trato certas pessoas, e isso me fez crescer muito como pessoa. espero que algo que eu tenha feito possa ter tido o mesmo impacto em ti.

sei que eu sou muito chato em relação a tu virar ponteiro, mas quero deixar bem claro que te apoio pra caralho. vôlei é uma coisa que tem que ser divertida, e se jogar de central tava um porre, tu tem que trocar mesmo. um lado meu fica triste porque eu vejo um baita potencial em ti de central, mas, por outro, eu me importo muito mais contigo estando feliz do que jogando bem em uma posição que tu não se sente confortável.

enfim, nego véio… eu nunca vou conseguir botar em palavras o que eu sinto por ti e o quanto eu te amo. sempre, e eu digo sempre, que tu precisar de alguém pra conversar e desabafar, mesmo eu estando longe, tu pode contar comigo de verdade. quero continuar sendo presente na tua vida e quero ainda passar mais festa e bebedeira contigo.

fica bem e, por favor, cuida de ti mesmo. tu às vezes acaba se colocando em situações que não te fazem bem, então eu te falo de verdade: cuida de ti e pensa mais antes de fazer as coisas. tu sempre sabe o que é certo, mas acaba fazendo sem pensar muito, eu acho.

te amo pra caralho e fica bem, seu puto!`,
    photos: [
      'assets/andrei/WhatsApp Image 2026-04-05 at 16.10.36 (1).jpeg',
      'assets/andrei/WhatsApp Image 2026-04-05 at 16.10.36 (2).jpeg',
      'assets/andrei/WhatsApp Image 2026-04-05 at 17.35.51.jpeg',
      'assets/andrei/WhatsApp Image 2026-04-05 at 17.35.51 (1).jpeg',
      'assets/andrei/WhatsApp Image 2026-04-05 at 17.35.51 (2).jpeg',
      'assets/andrei/WhatsApp Image 2026-04-05 at 17.35.51 (4).jpeg',
      'assets/andrei/WhatsApp Image 2026-04-05 at 17.35.51 (5).jpeg',
      'assets/andrei/WhatsApp Image 2026-04-05 at 17.35.51 (6).jpeg',
      'assets/andrei/WhatsApp Image 2026-04-05 at 17.35.51 (7).jpeg',
      'assets/andrei/WhatsApp Image 2026-04-05 at 17.35.51 (8).jpeg',
    ],
  },
  {
    name: 'Todos',
    slug: 'para-todos',
    bgColor: '#e8ece6',
    password: 'sabrina carpenter',
    hint: 'Dica: Artista pop....',
    farewell:
      `bom, gente… separei essa carta muito mais pra fazer um apanhado geral do que todos vocês significam e um pouco pra vocês saberem como eu tô me sentindo indo pra tão longe.
falar que eu nem sei muito como começar. eu sinto que uma das partes mais importantes da minha vida acabou. pra mim tá sendo muito um marco, como, sei lá, o fim da minha juventude talvez. eu sei que a gente não ia conseguir manter o ritmo desse ano que passou pra sempre, mas, ainda assim, é muito triste eu ver de forma tão clara que acabou pra mim.
eu não tenho palavras pra agradecer todos vocês e tudo o que vocês significam pra mim. foi a primeira vez na minha vida que eu consegui me sentir fazendo parte de algo, que eu era querido e que eu podia ser eu mesmo, que ninguém ia me julgar ou me achar insuportável (eu sou insuportável às vezes, eu sei KKK, desculpa).
mas, de verdade, muito da parte que tá fazendo eu ir pra longe é também por vocês. eu falei isso com o diogo meses atrás, e eu sempre quis deixar vocês orgulhosos de poderem falar que são meus amigos. eu quero que vocês pensem tipo “cara, olha o que o py fez ou conseguiu fazer, ele realmente é muito foda, fico muito feliz de poder ser amigo dele”. eu sinto que eu preciso suprir as expectativas que têm em mim, e eu vejo muito isso dando certo com a minha ida pra tão longe.
acho que vou amadurecer uma parte que todos vocês sabem que eu ainda sou muito ingênuo. quero conseguir voltar e mostrar que eu melhorei e consegui virar realmente alguém respeitável.
mas, de verdade, eu vou sentir muita falta de cada um de vocês. tudo que vocês fizeram por mim eu vou lembrar pro resto da minha vida, e quero repassar tudo que vocês me ensinaram nesse tempo pra todo mundo. eu sempre tentei ser o melhor possível pra vocês e espero realmente que eu tenha conseguido passar algo de bom pra cada um, assim como vocês me passaram.
o sentimento de gratidão que eu tenho por ter conhecido vocês é muito forte, e eu fico muito feliz de vocês terem me escolhido como amigo de vocês. eu sou o cara mais sortudo que já existiu, e qualquer um teria sorte de estar no meu lugar dividindo jantas, festas, vôlei e rolês com vocês.
eu tenho muito medo de como vai ser comigo tão longe. tenho medo de perder contato, de não ter tempo, e eu sei que isso pode acontecer, mas o que eu sinto por vocês é uma coisa que nunca vai mudar. deixei claro na carta de cada um que vocês podem sempre contar comigo, e eu queria falar isso de novo aqui: qualquer coisa mesmo, vocês sabem que eu vou sempre olhar o celular e responder vocês na hora.
eu falei pra alguns que tava pensando, por mais bobo que seja, em talvez não usar mais o “py” e ficar só como gustavo osielski, meio que deixando o gustavo desse tempo finalizado mas eu acho que isso é muito errado.
eu quero levar o py pra todos os lugares, porque eu nunca vou esquecer as coisas que vocês ensinaram pra mim. então eu sempre vou ser o py que vocês conheceram.
enfim… espero que eu consiga dar orgulho pra vocês da mesma forma que eu sinto orgulho em falar que eu sou amigo de vocês e faço parte desse grupo perfeito que a gente criou.
obrigado por tudo que vocês já fizeram por mim, eu vou sempre me lembrar de tudo.
amo vocês mais que tudo, vou sentir muita falta.
Py❤️`,
    photos: [
      'assets/para-todos/WhatsApp Image 2026-04-05 at 18.22.06.jpeg',
      'assets/para-todos/WhatsApp Image 2026-04-05 at 18.22.06 (1).jpeg',
      'assets/para-todos/WhatsApp Image 2026-04-05 at 18.22.06 (2).jpeg',
      'assets/para-todos/WhatsApp Image 2026-04-05 at 18.22.06 (3).jpeg',
      'assets/para-todos/WhatsApp Image 2026-04-05 at 18.22.06 (4).jpeg',
      'assets/para-todos/WhatsApp Image 2026-04-05 at 18.22.06 (5).jpeg',
      'assets/para-todos/WhatsApp Image 2026-04-05 at 18.22.06 (6).jpeg',
      'assets/para-todos/WhatsApp Image 2026-04-05 at 18.22.06 (7).jpeg',
      'assets/para-todos/WhatsApp Image 2026-04-05 at 18.22.07.jpeg',
      'assets/para-todos/WhatsApp Image 2026-04-05 at 18.22.07 (1).jpeg',
    ],
  },
];

const sectionsByPassword = new Map();
let activeSection = null;

appShell.innerHTML = friends
  .map((friend, index) => {
    const galleryClassName = friend.photos.length ? 'farewell-gallery' : 'farewell-gallery is-empty';
    const photoMarkup = friend.photos.length
      ? friend.photos
          .map(
            (photoPath) => `
              <figure class="memory-shot">
                <img src="${photoPath}" alt="Memória de ${friend.name}" loading="lazy" />
              </figure>
            `,
          )
          .join('')
      : `<p class="memory-placeholder">Adicione fotos em assets/${friend.slug}/ para preencher este espaço.</p>`;

    sectionsByPassword.set(friend.password.toLowerCase(), friend.slug);

    return `
      <section class="friend-section ${index === 0 ? 'is-active' : ''}" data-friend="${friend.slug}" style="--bg-color: ${friend.bgColor};">
        <div class="friend-section__inner reveal-on-scroll">
          <p class="friend-section__eyebrow">Para</p>
          <h1 class="friend-name">${friend.name}</h1>
          <p class="friend-note">Clique no envelope para abrir a lembrança guardada.</p>

          <button class="envelope-button" type="button" aria-label="Abrir carta de ${friend.name}" data-open-password="${friend.password}">
            <span class="envelope-button__fallback" aria-hidden="true"></span>
            <img src="envelope.png" alt="Envelope laranja" class="envelope-button__image" />
          </button>

          <article class="farewell-card" aria-live="polite">
            <div class="farewell-card__overlay"></div>
            <div class="farewell-card__content">
              <p class="farewell-card__label">Carta aberta</p>
              <h2 class="farewell-card__title">Um não adeus para ${friend.name}.</h2>
              ${formatFarewellHtml(friend.farewell)}
              <div class="${galleryClassName}">
                ${photoMarkup}
              </div>
            </div>
          </article>
        </div>
      </section>
    `;
  })
  .join('');

appShell.classList.add('is-rendered');

const sections = Array.from(document.querySelectorAll('.friend-section'));

sections.forEach((section) => {
  const button = section.querySelector('.envelope-button');
  const password = button?.dataset.openPassword || '';
  const envelopeImage = section.querySelector('.envelope-button__image');
  const friend = friends.find((item) => item.slug === section.dataset.friend);

  if (button && envelopeImage) {
    const applyEnvelopeState = () => {
      const hasValidImage = envelopeImage.naturalWidth > 0;
      button.classList.toggle('has-envelope-image', hasValidImage);
      envelopeImage.hidden = !hasValidImage;
    };

    if (envelopeImage.complete) {
      applyEnvelopeState();
    }

    envelopeImage.addEventListener('load', applyEnvelopeState);
    envelopeImage.addEventListener('error', applyEnvelopeState);
  }

  if (password) {
    sectionsByPassword.set(password.toLowerCase(), section);
  }

  button?.addEventListener('click', () => {
    activeSection = section;
    openModal(friend);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
  },
  { threshold: 0.4, root: appShell },
);

sections.forEach((section) => {
  const inner = section.querySelector('.reveal-on-scroll');
  if (inner) {
    observer.observe(inner);
  }
});

function openModal(friend) {
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  modalDescription.textContent =
    friend?.hint || 'Digite a senha combinada para abrir a carta e revelar a despedida.';
  modalFeedback.textContent = '';
  passwordInput.value = '';
  window.setTimeout(() => passwordInput.focus(), 40);
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  modalCard.classList.remove('is-shaking');
  modalFeedback.textContent = '';
}

function shakeModal() {
  modalCard.classList.remove('is-shaking');
  void modalCard.offsetWidth;
  modalCard.classList.add('is-shaking');
}

function scatterPhotos(section) {
  const gallery = section.querySelector('.farewell-gallery');
  if (!gallery || gallery.classList.contains('is-empty')) {
    return;
  }

  const photos = Array.from(gallery.querySelectorAll('.memory-shot'));
  if (!photos.length) {
    return;
  }

  photos.forEach((photo) => {
    const rotation = Math.floor(Math.random() * 21) - 10;
    const marginTop = Math.floor(Math.random() * 31) - 15;
    const marginLeft = Math.floor(Math.random() * 31) - 15;

    photo.style.marginTop = `${marginTop}px`;
    photo.style.marginLeft = `${marginLeft}px`;
    photo.style.transform = `rotate(${rotation}deg)`;
  });
}

function revealSection(section) {
  section.classList.add('section-open');
  window.setTimeout(() => scatterPhotos(section), 260);
}

closeTriggers.forEach((trigger) => {
  trigger.addEventListener('click', closeModal);
});

passwordForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const typedPassword = passwordInput.value.trim().toLowerCase();
  const matchedSection = sectionsByPassword.get(typedPassword);

  if (!matchedSection || matchedSection !== activeSection) {
    modalFeedback.textContent = 'Senha incorreta. Tente novamente.';
    shakeModal();
    return;
  }

  revealSection(matchedSection);
  closeModal();
});

modal.addEventListener('click', (event) => {
  if (event.target.matches('[data-close-modal]')) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});

window.addEventListener('resize', () => {
  const openedSections = document.querySelectorAll('.friend-section.section-open');
  openedSections.forEach((section) => scatterPhotos(section));
});