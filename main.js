const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você reagiria ao se deparar com a decisão de uma pessoa de optar por um aborto em situações de risco para a saúde da mãe?",
        alternativas: [
            {
                texto:"Ela demonstra um forte desejo de proteger a saúde e a vida da mãe, considerando o risco físico e emocional.",
                afirmacao: "<b>Protetora e empática</b> prioriza o bem-estar físico e emocional da mãe, acreditando que, em situações de risco, a proteção da saúde da mulher deve vir em primeiro lugar, mesmo que isso envolva uma decisão difícil como o aborto"
            },
            {
                texto: "Ela pode acreditar que, em casos de risco, a preservação da saúde da mãe deve ser priorizada, refletindo uma visão de empatia e cuidado.",
                afirmacao: "Você se destaca pela sua <b>sensibilidade</b>, pois prioriza o bem-estar físico e emocional da mãe, tomando decisões com base na compreensão e no cuidado, buscando minimizar o sofrimento imediato e futuro."
            }
        ]
    },
    {
        enunciado: "O que pode ser interpretado sobre uma pessoa que defende o direito ao aborto em qualquer situação?",
        alternativas: [
            {
                texto: " Ela provavelmente valoriza a autonomia e a liberdade da mulher, acreditando que é fundamental que a mulher tenha o direito de decidir sobre seu próprio corpo.",
                afirmacao: "Acredita firmemente no direito da mulher de tomar decisões sobre seu corpo, valorizando a liberdade e o controle individual em questões reprodutivas sendo<b>Defensora da autonomia</b>.</b>."
            },
            {
                texto: "Ela pode acreditar que as escolhas pessoais e as circunstâncias de cada mulher devem ser respeitadas, sem julgamento, reconhecendo que cada situação é única.",
                afirmacao: "<b>Respeitosa e compreensiva</b>,valoriza a individualidade das mulheres e defende o direito de escolher, sem julgamentos, reconhecendo a complexidade de cada situação."
            }
        ]
    },
    {
        enunciado: "O que pode ser interpretado sobre uma pessoa que decide não realizar um aborto mesmo em uma situação de gravidez não planejada?",
        alternativas: [
            {
                texto: "Ela pode ter uma forte crença na proteção da vida, independentemente das circunstâncias, refletindo um valor profundo pela vida humana.",
                afirmacao: "<b>Convicta e moralista</b>, pois, tem uma forte crença na sacralidade da vida desde a concepção, defendendo que a vida deve ser preservada a todo custo, independentemente das circunstâncias ou desafios da gravidez."
            },
            {
                texto: "Ela pode acreditar na importância da responsabilidade pessoal e considerar que a criança deve ter a chance de viver, independentemente do contexto da gravidez.",
                afirmacao: "<b>Responsável e ética</b>,acredita que a criança tem direito à vida e que a mulher deve assumir a responsabilidade pelas consequências da gravidez."
            }
        ]
    },
    {
        enunciado: "Como você entenderia a decisão de uma pessoa de realizar um aborto em casos de anencefalia (quando o feto tem malformações cerebrais graves e inviáveis)?",
        alternativas: [
            {
                texto: " A decisão pode refletir a dor emocional e psicológica da mãe ao lidar com a expectativa de perder um filho, possivelmente levando em consideração a inevitabilidade da morte do feto.",
                afirmacao: "<b>compassiva e protetora</b> se preocupa profundamente com o bem-estar emocional da mãe, buscando evitar o sofrimento psicológico de carregar uma criança que sabe que não sobreviveria, priorizando sua saúde mental."
            },
            {
                texto: "A escolha pode ser baseada em um desejo de evitar sofrimento tanto para a mãe quanto para o bebê, pois a criança não teria condições de sobreviver fora do útero.",
                afirmacao: "<b> empática e pragmática</b>deseja evitar o sofrimento desnecessário tanto para a mãe quanto para o bebê, com foco em minimizar a dor e as consequências inevitáveis para ambos, demonstrando sensibilidade e racionalidade na decisão."
            }
        ]
    },
    {
        enunciado: "Como você interpretaria a postura de uma pessoa que é contra o aborto, independentemente das circunstâncias?",
        alternativas: [
            {
                texto: "Ela pode ter uma forte crença moral ou religiosa que defende a vida desde a concepção, considerando que toda vida tem um valor intrínseco e deve ser preservada.",
                afirmacao: "<b>moralista e religiosa<b>, acredita que a vida é sagrada desde a concepção e vê o aborto como uma violação do direito à vida, independentemente das circunstâncias."
            },
            {
                texto: "Ela pode ver o aborto como uma escolha irreversível e acredita que há sempre alternativas, como adoção ou apoio em situações difíceis, sendo sua posição baseada em uma ideia de proteção da vida.",
                afirmacao: "<b>ética e pragmática<b>defende alternativas ao aborto, como adoção, e acredita que a escolha de interromper a gravidez tem consequências profundas, tanto emocionais quanto espirituais."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta(); 