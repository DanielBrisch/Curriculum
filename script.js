divExperiencias = document.querySelector("#experience")

experiencias = [
    {
        "empresa": "Empresa X",
        "cargo": "Cargo",
        "descricao": "descricao"
    }
]

divExperience = document.createElement("div")
document.setAttribute("class", "experience")

empresa = document.createElement("h3")
empresa.setAttribute("class", "empresa")
empresa.innetText = experiencias[0].empresa

divExperience.appendChild(empresa)
divExperiencias.appendChild(divExperience)