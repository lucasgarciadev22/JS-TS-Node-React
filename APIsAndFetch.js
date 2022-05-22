//APIs -> programas acessados por URLs
//Fetch -> retorna uma promisse
//sintaxe básica padrão
fetch(url,options)
.then(response => response.json())
.then(json => console.log(json))

//GET
fetch('https://api.com/', {
    method: 'GET',
    cache: 'no-cache',
})
.then(response => response.json())
.then(json => console.log(json))
//retorna uma Promise
//POST
fetch('https://api.com/', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(json => console.log(json))
//retorna uma Promise
//--------------------------------------------------------------
