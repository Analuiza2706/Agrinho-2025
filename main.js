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
                texto:"Ela demonstra um forte desejo de proteger a saúde e a vida da mãe, considerando o risco físico e emocional."
                afirmacao: "<b>Protetora e empática</b>"prioriza o bem-estar físico e emocional da mãe, acreditando que, em situações de risco, a proteção da saúde da mulher deve vir em primeiro lugar, mesmo que isso envolva uma decisão difícil como o aborto"
            },
            {
                texto: "Ela pode acreditar que, em casos de risco, a preservação da saúde da mãe deve ser priorizada, refletindo uma visão de empatia e cuidado.",
                afirmacao: "Você se destaca pela sua <b>sensibilidade</b>, pois prioriza o bem-estar físico e emocional da mãe, tomando decisões com base na compreensão e no cuidado, buscando minimizar o sofrimento imediato e futuro."
            }
        ]
    },
    {
        enunciado: "O que pode ser interpretado sobre uma pessoa que decide não realizar um aborto mesmo em uma situação de gravidez não planejada?",
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
        enunciado: "Por que há tanta escassez de recursos na saúde pública?",
        alternativas: [
            {
                texto: "Acredito que Falta de investimento governamental",
                afirmacao: "<b>Pragmatismo</b> A falta de investimento governamental na saúde pública decorre de orçamentos restritos e outras prioridades de gastos, levando a infraestrutura precária e serviços de saúde insuficientes."
            },
            {
                texto: "desigualdades na distribuição de recursos",
                afirmacao: "<b>Detalhista</b>,Desigualdades na distribuição de recursos na saúde pública ocorrem quando os recursos são alocados de maneira desigual entre diferentes regiões ou populações. Isso pode resultar em acesso desigual a serviços de saúde, com áreas mais pobres ou rurais recebendo menos apoio e, portanto, enfrentando maiores desafios em termos de qualidade e acesso a cuidados médicos."
            }
        ]
    },
    {
        enunciado: "Por que a violência obstétrica está cada vez mais banalizada? ",
        alternativas: [
            {
                texto: "Negligência médica",
                afirmacao: "<b>Foco</b> Apesar do uso de algumas técnicas serem restringidas apenas para casos específicos, ainda são utilizadas diariamente por profissionais da saúde."
            },
            {
                texto: "Desinformação da população.",
                afirmacao: "<b>Curiosidade</b> Mesmo com fácil acesso a informação, o assunto é pouco comentado e dado certa  importância. "
            }
        ]
    },
    {
        enunciado: "Como evitar que ocorra a extinção de animais nativos?",
        alternativas: [
            {
                texto: "Criação de mais áreas de proteção ambiental, com grande biodiversidade ajudaria a melhorar esse cenário?",
                afirmacao: "Sim, pois preservando nosso meio ambiente, protegemos nossos animais e facilitamos sua reprodução "
            },
            {
                texto: "Evitar intervenções de espécies não nativas neste ambiente pode ser uma alternativa?",
                afirmacao: "Sim, animais de um determinado local não estão preparados para lidar com predadores de outras áreas, levando a um extermínio da espécie local"
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