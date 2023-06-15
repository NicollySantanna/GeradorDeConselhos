const url = `https://api.adviceslip.com/advice`
var id = 0;
var string = "";

async function dice(){
    fetch(url)
    .then(response =>{
        return response.json()
    }).then(body =>{
        id = body.slip.id;
        string = body.slip.advice;
        document.getElementById("id").textContent = `#${id}`
        document.getElementById("phrase").textContent = string
    })
}


