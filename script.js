divExperiencias = document.querySelector("#experiences")

console.log(divExperiencias)
experiencias = [
    {
        "empresa": "Unimed - Pato Branco - PR",
        "cargo": "Jovem Aprendiz de Analista de Infraestrutura",
        "descricao": "Por um período próximo a um ano, exerci a posição de suporte de infraestrutura, com responsabilidades voltadas para a manutenção de máquinas e redes na Unimed Pato Branco.",
        "data" : "01/03/2022 - 30/12/2023"
    },
    {
        "empresa": "Viasoft",
        "cargo": "Analista De Testes",
        "descricao": "Atuei como analista de testes na Viasoft, na área contábil do sistema de agronegócio, por um período de 7 meses. Durante esse tempo, desempenhei frequentemente o papel de analista de requisitos e trabalhei extensivamente na elaboração e execução de consultas e queries necessárias para o desenvolvimento de código.",
        "data" : "02/01/2023 - 01/07/2023"
    },
    {
        "empresa": "Viasoft",
        "cargo": " Desenvolvedor Full Stack",
        "descricao": "Dentro da Viasoft, realizei uma transição de função para o cargo de desenvolvedor full stack, onde trabalhei com um amplo leque de tecnologias, incluindo Java, Spring Boot, Angular, TypeScript, Android Native e Flutter.",
        "data" : "01/07/2023 - Actualy"
    },
]

function createDivExperiencia(divPai, experiencia){
    divExperience = document.createElement("div")
    divExperience.setAttribute("class", "experience")

    empresa = document.createElement("h2")
    empresa.setAttribute("class", "empresa")
    empresa.innerText = experiencia.empresa

    cargo = document.createElement("h4")
    cargo.setAttribute("class", "cargo")
    cargo.innerText = experiencia.cargo

    descricao = document.createElement("p")
    descricao.setAttribute("class", "descricao")
    descricao.innerText = experiencia.descricao

    data = document.createElement("p")
    data.setAttribute("class", "descricao")
    data.style.fontWeight = "bold";
    data.innerText = experiencia.data

    divExperience.appendChild(empresa)
    divExperiencias.appendChild(divExperience)

    divExperience.appendChild(cargo)
    divExperiencias.appendChild(divExperience)

    divExperience.appendChild(descricao)
    divPai.appendChild(divExperience)

    divExperience.appendChild(data)
    divPai.appendChild(divExperience)
}

for (let experiencia of experiencias){
    createDivExperiencia(divExperiencias, experiencia)
}
