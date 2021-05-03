let textConvert = []
let typeEncoder = document.querySelector('#select-type')
let input = document.querySelector('#input-text')
let outputText = document.querySelector('#output-text')
let invertBtn = document.querySelector('#invert')
let decode = false
let decipher = document.querySelector('#decipher-btn')
let copyBtn = document.querySelector('#copy-btn')

copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(outputText.value)
})

invertBtn.addEventListener('click', ()=>{
    outputText.innerHTML = ''
    decode = !decode
    if(decode == false){
        document.querySelector('#type-title').innerHTML = 'Texto'
        document.querySelector('#decipher-btn').innerHTML = 'Codificar'
    }else{
        document.querySelector('#type-title').innerHTML = 'Código'
        document.querySelector('#decipher-btn').innerHTML = 'Decodificar'
    }
    
})

decipher.addEventListener('click', ()=>{
    textConvert = input.value.split('')
    outputText.innerHTML = ''
    if(decode == false){
        switch(typeEncoder.value){
            case 'morse':
                EncoderMorse()
                break
            case 'binary':
                EncoderBinary()
                break
            default:
                alert('Erro')
                break
        }
    }else{
        switch (typeEncoder.value){
            case 'morse':
                DecoderMorse()
                break
            case 'binary':
                DecoderBinary() 
                break
            default:
                alert('Erro')
                break
        }
    }
  
})

