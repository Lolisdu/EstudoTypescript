// CRIAR DIOBANK
// CRIAR UMA CONTA
interface IConta{
    nomeTitular: string;
    saldo?: number
}
class Conta {
   private nomeTitular: string
   private saldo: number
   private ativa: boolean = false

   constructor ({
    nomeTitular,
    saldo = 0
  
   }: IConta ){
    this.nomeTitular =  nomeTitular,
    this.saldo = saldo
    console.log(`${this.nomeTitular}, Bem vindo ao DIO Bank`)
   }   
   //CONSULTAR SALDO
   meuSaldo = (): number => this.saldo

   //DEPOSITAR
   depositar = (valor: number): void | boolean=> {
    if(this.ativa){
        console.log ('Conta Desativada, impossível realizar déposito')
        return this.ativa  

    }
    this.saldo += valor
    console.log (`Deposito Efetuado ${valor}. Seu saldo Atual é ${this.saldo}`)

   }

   //SACAR
   sacar = (valor: number): boolean => {
    if(this.ativa){
        console.log ('Conta Desativada, impossível realizar saque')
         return this.ativa
    }

    if(valor <= this.saldo){
        this.saldo -= valor 
        console.log (`Saque Efetuado ${valor}. Seu novo saldo é ${this.saldo}`)
        return this.ativa
    }
    console.log(`Saldo Insuficiente. Seu saldo atual é ${this.saldo}`)
    return this.ativa
   }

   //CANCELAR CONTA
   cancelarConta = () => {
    if (this.saldo === 0) {
        this.ativa = false
        console.log('Conta Cancelada')
        return this.ativa
    }
        console.log(`Impossível desativar conta de ${this.nomeTitular}. Conta com pendências`)
   }
     
}
const conta: Conta = new Conta({nomeTitular: 'Débora'})
//const contaB: Conta = new Conta({nomeTitular: 'Marcelo', saldo: 20})

//console.log('Saldo Anterior', contaA.meuSaldo())
conta.depositar(20)

//console.log('Saldo Atual', contaA.meuSaldo())
//console.log(contaA.meuSaldo())
//console.log(contaB)

//SAQUE
//conta.sacar(30)
//console.log('Saldo após saque', conta.meuSaldo())

//cancelamento
//conta.cancelarConta()
//console.log (conta)

