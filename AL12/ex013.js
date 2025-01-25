const agora = new Date()
const hora = agora.getHours()
console.log (`São ${hora} horas.`)
if (hora > 6) {
    console.log ('Bom dia!! Tenha um ótimo dia!!')
} else if (hora > 11) {
    console.log ('Boa tarde, tenha uma ótima tarde!!')
} else if (hora > 17){
    console.log ('Boa noite!!, durma com Deus!!')
}else {
    console.log ('Boa madrugada!')
}
