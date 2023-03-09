const btn = document.getElementById('advice-btn');
const idAdivice = document.getElementById('id-advice')
const textAdvice = document.getElementById('advice-text')

async function createAdvice(){
    let resolve = await fetch('https://api.adviceslip.com/advice')
    return await resolve.json()
}

async function showAdvice(){
    btn.classList.add('rotate-animation')
    btn.disabled = true

    idAdivice.innerHTML = 'Searching'

    textAdvice.innerHTML = `
        <div class="loading">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `

    let objAdvice = await createAdvice()
    setTimeout(async ()=>{
        idAdivice.innerHTML = `Advice: #${objAdvice.slip.id}`
        textAdvice.innerHTML = `${objAdvice.slip.advice}`

        setTimeout(()=>{
            btn.classList.remove('rotate-animation')
            btn.disabled = false  
        },100)
    },1000)   
}


btn.addEventListener('click', showAdvice)

