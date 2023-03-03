interface IcalcularIdade {
    nome: string,
    anoNascimento: number
    profissao?: string
}


function calcularIdade({
    nome,
    anoNascimento,
    profissao
}: IcalcularIdade) : string {
    const idade: number = 2023 - anoNascimento
    if(profissao){
        return `Seu nome é  ${nome}. Você tem ${idade} anos e sua profissão é ${profissao}`   
    }
    return `Seu nome é  ${nome}. Você tem ${idade} anos `
    
    }

    const nome= 'Débora'
    const anoNascimento= 1985
    const profissao = 'Desenvolvedora'

    console.log(calcularIdade({nome: 'Débora', anoNascimento: 1985}))
    console.log(calcularIdade({nome: 'Débora', anoNascimento: 1985, profissao: 'Desenvolvedora'}))