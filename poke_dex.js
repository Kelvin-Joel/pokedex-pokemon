let p_lista=document.getElementById('p_lista')
let cantidad=22
let fragment=document.createDocumentFragment()
let img=document.getElementById('img')
let nom=document.getElementById('nombre')
let typo=document.getElementById('typo')
let cerrar=document.getElementById('cerrar')
let atras=document.getElementById('atras')
let id=document.getElementById('id')
let button=document.getElementById('button')
let i=1
let ArrayAudio=['audios/bulbasur.mp3','audios/ivasur.mp3','audios/binasur.mp3','audios/charmander.mp3','audios/charmilion.mp3','audios/charizar.mp3','audios/escuerto.mp3','audios/eskuerto.mp3','audios/blatoise.mp3','no hay audio','audios/medabos.mp3','audios/butterfree.mp3','audios/weedle.mp3','audios/kakuna.mp3','audios/beedril.mp3','audios/pidgey.mp3','audios/pidgeoto.mp3','audios/pieedgotegrande.mp3']
let audio=document.getElementById('audio')

p_lista.addEventListener('click',(e)=>{
    let nombre=e.target.textContent
    let url=` https://pokeapi.co/api/v2/pokemon/${nombre}`
    fetch(url)
    .then(res=>res.json())
    .then(resu=>{
        img.setAttribute('src',resu.sprites.front_default)
        nom.textContent=` ${resu.name}`
        id.textContent=`Numero: ${resu.id}`
        typo.textContent=`Typo: ${resu.types[0].type.name}`
        let num=resu.id
        console.log(num)
       let aud= ArrayAudio[num-1]
       console.log(aud)
       audio.setAttribute('src',aud)
       console.log(audio)
     audio.play()
        console.log(ArrayAudio)
    })
})
for(i ; i<cantidad;i++)
{
let url=`https://pokeapi.co/api/v2/pokemon/${i}`
fetch(url)
.then(response=>response.json())
.then(result=>{
    let lista_poke=document.createElement('li')
    lista_poke.textContent=`${result.name}`
    fragment.appendChild(lista_poke)
    p_lista.appendChild(fragment)
})
}
let tapa_atras=document.getElementById('tapa_atras')
button.addEventListener('click',()=>{
    tapa_atras.classList.add('abrir')
})
cerrar.addEventListener('click',()=>{
    tapa_atras.classList.remove('abrir')
})