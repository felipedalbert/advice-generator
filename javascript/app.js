const btn = document.getElementById('advice-btn');
const idAdivice = document.getElementById('id-advice')
const textAdvice = document.getElementById('advice-text')

async function gerarConselho(){
    let resolve = await fetch('https://api.adviceslip.com/advice')
    return await resolve.json()
}

async function exibirConselho(){
    textAdvice.innerHTML = `
        <div class="loading">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `
    let objAdvice = await gerarConselho()
    console.log(objAdvice)
    idAdivice.innerHTML = `Adivce: #${objAdvice.slip.id}`
    textAdvice.innerHTML = `${objAdvice.slip.advice}`
}

function spinAnimation(){
    btn.classList.add('rotate-animation')
    
    btn.disabled = true
    setTimeout(()=>{
        btn.classList.remove('rotate-animation')
        btn.disabled = false
    },2000)
}

btn.addEventListener('click', ()=>{

    exibirConselho()

    spinAnimation()
    
})

