window.onload = function(){
const register = document.getElementById('register')
register.addEventListener('submit',(e)=>{
    e.preventDefault()
    const fname = document.getElementById('fname').value
    const lname = document.getElementById('lname').value
    const name = `${fname} ${lname}`
    const email = document.getElementById('mail').value
    const pass = document.getElementById('pass').value
    const quali = document.getElementById('quali').value
    const studentKey = keyGenerator(fname)
    localStorage.setItem(studentKey,JSON.stringify({name,email,pass,quali}))
    const modal = document.getElementById('signup')
    M.Modal.getInstance(modal).close()
    register.innerHTML = ""
    alert(`${studentKey} (to login use this as userid)`)
})

function keyGenerator(name)
{
    const key = name + (Math.floor(Math.random()*999))
    const length = localStorage.length
    for(var i=0;i<length ; i++)
    {
        if(localStorage.key(i) === key)
        {
            keyGenerator(name)
        }
    }
    return key
}
function hello(){


    

}
}