
    document.addEventListener("DOMContentLoaded", function () {
        const btn = document.getElementById("toggleTextBtn");
        const aboutText = document.getElementById("about-text");

        let expanded = false;

        const shortText = "Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades";
        const fullText = `Opa! Sou o João, tenho 17 anos e estou finalizando o ensino médio junto com o curso técnico de Análise e Desenvolvimento de Sistemas na Escola SESI. Estou dando os primeiros passos na minha jornada como desenvolvedor, explorando, aprendendo e me desafiando a cada novo projeto.
        
Sempre fui fascinado pela parte visual de sites e aplicativos. E foi isso que puxou pro front-end, área que mais me identifico e onde venho focando meus estudos.

Apesar do meu foco atual ser o front-end, tenho muita curiosidade por outras áreas da programação e estou sempre buscando aprender novas linguagens e tecnologias.`;

        btn.addEventListener("click", () => {
            aboutText.textContent = expanded ? shortText : fullText;
            btn.textContent = expanded ? "Click" : "Voltar";
            expanded = !expanded;
        });
    });



