export default class CalculadoraMedidas {
  constructor (primeiraMedida, segundaMedida) {
    this.primeiraMedida = primeiraMedida
    this.segundaMedida = segundaMedida
    this.validate = false
  }
  valida () {
    if (this.primeiraMedida && this.segundaMedida) {
      this.validate = true
    }
    return this
  }
  calculaIMC () {
    return this.validate ? (this.primeiraMedida / (this.segundaMedida ** 2)).toFixed(2) : ''
  }
  calculaRCQ () {
    return this.validate ? (this.primeiraMedida / this.segundaMedida).toFixed(2) : ''
  }
  calculaRCE () {
    return this.validate ? (this.primeiraMedida / (this.segundaMedida * 100)).toFixed(2) : ''
  }
}
