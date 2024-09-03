const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a melhor forma de reduzir o impacto ambiental no seu dia a dia?",
        alternativas: [
            {
                texto: "Reduzir o consumo de plástico e reciclar.",
                afirmacao: "Você acredita que pequenas mudanças no consumo diário podem ajudar a preservar o meio ambiente."
            },
            {
                texto: "Usar transporte público ou bicicleta sempre que possível.",
                afirmacao: "Você prioriza formas de transporte mais sustentáveis para diminuir a poluição do ar."
            }
        ]
    },
    {
        enunciado: "Como você vê o papel das empresas na preservação ambiental?",
        alternativas: [
            {
                texto: "Elas devem adotar práticas de sustentabilidade em toda a cadeia produtiva.",
                afirmacao: "Você acredita que empresas sustentáveis são essenciais para a preservação ambiental."
            },
            {
                texto: "Elas devem investir em energia renovável e compensação de carbono.",
                afirmacao: "Você valoriza empresas que adotam fontes de energia limpas e compensam suas emissões."
            }
        ]
    },
    {
        enunciado: "Qual a importância da educação ambiental para as novas gerações?",
        alternativas: [
            {
                texto: "Ensinar as crianças a cuidar do meio ambiente desde cedo é fundamental.",
                afirmacao: "Você vê a educação ambiental como um passo importante para formar cidadãos conscientes."
            },
            {
                texto: "Incentivar projetos escolares voltados à sustentabilidade é essencial.",
                afirmacao: "Você acredita que projetos práticos ajudam os jovens a entender a importância da preservação ambiental."
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
    textoResultado.textContent = "";
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
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Suas escolhas fazem a diferença para o meio ambiente...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent  = "";
}

mostraPergunta();