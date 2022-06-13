let spaceshipName = prompt('Qual o nome da nave?')
let spaceshipVelocity = 0
let chosen
function showMenu() {
    let option
    while (option != '1' && option != '2' && option != '3' && option != '4') {
        option = prompt('O que deseja fazer?\n' +
            '1 - Acelerar a nave em 5km/s\n' +
            '2 - Desacelerar a nave em 5 km/s\n' +
            '3 - Imprimir dados de bordo\n' +
            '4 - Sair do Programa'
        )
    }
    return option

}

function acelerar(velocity){
let speed = velocity + 5
return speed

}

function desacelerar(velocity){
    let speedDown = velocity - 5
    if(speedDown <= 0){
        speedDown = 0
    }
return speedDown
}

function imprimir(name, speed){
    alert('Nave: ' + name +
    '\nVelocidade: ' + speed
    )    
}

do{
    chosen = showMenu()
    switch(chosen){
        case '1':
            spaceshipVelocity = acelerar(spaceshipVelocity)
            break
        case '2':
            spaceshipVelocity = desacelerar(spaceshipVelocity)
            break
        case '3':
            imprimir(spaceshipName, spaceshipVelocity)
            break
        case '4':
            alert('Saindo do programa...')
        
    }
} while (chosen != 4)
