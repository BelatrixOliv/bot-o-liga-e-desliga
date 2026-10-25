const bolinha = document.querySelector('.ladodentro')
const fundoo = document.querySelector('.fundo')
const moon = document.getElementById('luazin')
const sun = document.getElementById('solzin')
let clique = 0

sun.style.opacity = "0";

function levaBola() {
    if (clique % 2 == 0) {
        console.log("teste")
        bolinha.classList.add("paraDireita")
        bolinha.classList.remove("paraEsquerda")
        fundoo.classList.add("fundobranco")
        fundoo.classList.remove("fundopreto")

        sun.style.opacity = "1";
        moon.style.opacity = "0";
       

        clique++
        console.log(clique)

    } else { 
        bolinha.classList.remove("paraDireita")
        bolinha.classList.add("paraEsquerda")
        fundoo.classList.remove("fundobranco")
        fundoo.classList.add("fundopreto")
        
        
        sun.style.opacity = "0";
        moon.style.opacity = "1";
        clique++
        
        console.log(clique)
        
    }
}

bolinha.addEventListener('click', levaBola)