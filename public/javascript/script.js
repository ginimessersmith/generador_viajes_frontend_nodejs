
async function onClick() {
    let searchPlace=document.getElementById('search').value 
    let resultTag = document.getElementById('result')
    let response = await callToOpenAI(searchPlace)
    resultTag.innerHTML = response
    //console.log('la response es: ',response  )
    // choices[0].message
    // console.log(resultado)
}

async function callToOpenAI(searchPlace) {
    const apiUrl='http://localhost:8880/api/chatgpt?dest='+searchPlace

    try {
       const respuesta = await fetch(apiUrl) 
       if(!respuesta.ok){
            return 'Error al llamar a la api'
       }
       const data = await respuesta.json()
       return data.choices[0].message.content
    } catch (error) {
        return ('error')
    }
    
}

