const password = document.querySelector('#password')
const backgound = document.querySelector('.background-img')

password.addEventListener('input', (e)=>{
    const input = e.target.value
    const length = input.length
    const blurValue = 20 - length * 2

    backgound.style.filter = `blur(${blurValue}px)`
})