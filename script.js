let baseresult = document.querySelector('div.baseresult')
var pResult = document. getElementById('resultado')
let valorguardado = 0
let a1 = document.getElementById('a1') 
let a2 = document.getElementById('a2')
let a3 = document.getElementById('a3')
let a4 = document.getElementById('a4')
let b1 = document.getElementById('b1')
let b2 = document.getElementById('b2')
let b3 = document.getElementById('b3')
let b4 = document.getElementById('b4')
let c1 = document.getElementById('c1')
let c2 = document.getElementById('c2')
let c3 = document.getElementById('c3')
let c4 = document.getElementById('c4')
let d1 = document.getElementById('d1')
let d2 = document.getElementById('d2')
let d3 = document.getElementById('d3')
let d4 = document.getElementById('d4')
let e1 = document.getElementById('e1')
let e2 = document.getElementById('e2')
let e3 = document.getElementById('e3')
let e4 = document.getElementById('e4')
let add = false
let sub = false
let mul = false 
let div = false
let pcent = false
let resultpcent
a1 = false 

function reiniciarfontsize() {
    if(pResult.innerHTML.length < 5) {
        pResult.style.fontSize = '5em'
    } 
}

function onoff() {

    valorguardado = 0
    if(a1 == false) {       
        baseresult.style.backgroundColor = 'green'
        pResult.innerHTML = '000'
        pResult.style.color = '#0000006e'
        a1 = true
    } else if (a1 == true){
        baseresult.style.backgroundColor = '#1C201C'
        a1 = false
        pResult.innerHTML = ''
    }   

    reiniciarfontsize()

}

function apagartudo() {

    pResult.innerHTML = ''
    valorguardado = 0
    reiniciarfontsize()
}

function apagar() {
    if(pResult.innerHTML.length > 0) {
        pResult.innerHTML = pResult.innerHTML.slice(0, -1)
    }

    reiniciarfontsize()
}


function digitarnumeros(n) {
    if(pResult.innerHTML == '000') {
        pResult.innerHTML = ''
    }

    if(a1 == true) {                   
            pResult.innerHTML += n.value
            pResult.style.color = 'black'
            if(pResult.innerHTML.length > 5) {
                pResult.style.fontSize = '2em'
            } 

            if(pResult.innerHTML.length > 13) {
                window.alert('Atenção: Esse é o limite de caracteres permitido por vez, se adicionar mais um, iremos reiniciar a operação!!')
                if(pResult.innerHTML.length > 14) {
                    pResult.innerHTML = ''
                    window.alert('Você foi avisado! 😤😤')

                    reiniciarfontsize()
                } 
            } 

    } else {
        window.alert('Atenção: Ligue a calculadora!')
    }
}

function receber() {
    if(pResult.innerHTML.length > 0) {
        valorguardado = Number(pResult.innerHTML)
        pResult.innerHTML = ''
    }
}

function soma() {
            receber()
            add = true
            sub = false
            mul = false 
            div = false
            pcent = false
        }

function subtracao() {
        receber()
        add = false
        sub = true
        mul = false 
        div = false
        pcent = false
    }


function multiplicacao() {
        receber()
        add = false
        sub = false
        mul = true 
        div = false
        pcent = false
    }


function divisao() {
        receber()
        add = false
        sub = false
        mul = false 
        div = true
        pcent = false
}

function porcento() {
       
        add = false
        sub = false
        mul = false 
        div = false
        pcent = true

        if(pResult.innerHTML.length > 1 && valorguardado > 0) {
            resultpcent = (Number(pResult.innerHTML)/100)*valorguardado
            pResult.innerHTML = resultpcent.toFixed(4).replace('.', ',')
            } else {
                resultpcent = (Number(pResult.innerHTML) / 100)
                pResult.innerHTML = resultpcent.toString().replace('.', ',')
        }
        
    }      


function resultado() {

        if(pResult.innerHTML.length == 0 && valorguardado > 0) {

            pResult.innerHTML = valorguardado

        } else if (pResult.innerHTML.length > 0 && add == true) {

            valorguardado += Number(pResult.innerHTML)
            pResult.innerHTML = valorguardado

        } else if (pResult.innerHTML.length > 0 && sub == true) {

            valorguardado -= Number(pResult.innerHTML)
            pResult.innerHTML = valorguardado

        } else if (pResult.innerHTML.length > 0 && mul == true) {

            valorguardado *= Number(pResult.innerHTML)
            pResult.innerHTML = valorguardado

        } else if (pResult.innerHTML.length > 0 && div == true) {

            valorguardado /= Number(pResult.innerHTML) 
            pResult.innerHTML = valorguardado

        } 

        }
         









