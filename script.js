divExperiencias = document.querySelector("#experiences")

console.log(divExperiencias)
experiencias = [
    {
        "empresa": "Unimed",
        "cargo": "Programador Full Stack Java",
        "descricao": "descricao"
    },
    {
        "empresa": "Viasoft",
        "cargo": "Programador Full Stack Java",
        "descricao": "descricao"
    },
    {
        "empresa": "Viasoft",
        "cargo": "Programador Full Stack Java",
        "descricao": "descricao"
    },
]



function createDivExperiencia(divPai, experiencia){
    divExperience = document.createElement("div")
    divExperience.setAttribute("class", "experience")

    empresa = document.createElement("h3")
    empresa.setAttribute("class", "empresa")
    empresa.innerText = experiencia.empresa

    cargo = document.createElement("h4")
    cargo.setAttribute("class", "cargo")
    cargo.innerText = experiencia.cargo

    descricao = document.createElement("p")
    descricao.setAttribute("class", "descricao")
    descricao.innerText = experiencia.descricao

    divExperience.appendChild(empresa)
    divExperiencias.appendChild(divExperience)

    divExperience.appendChild(cargo)
    divExperiencias.appendChild(divExperience)

    divExperience.appendChild(descricao)
    divPai.appendChild(divExperience)
}




for (let experiencia of experiencias){
    createDivExperiencia(divExperiencias, experiencia)
}