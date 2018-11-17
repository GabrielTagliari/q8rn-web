function removeCaracteresEspeciais (texto) {
  return texto.replace(/[ãâàáä]/g, 'a')
    .replace(/[êèéë&]/g, 'e')
    .replace(/[îìíï]/g, 'i')
    .replace(/[õôòóö]/g, 'o')
    .replace(/[ûúùü]/g, 'u')
    .replace(/[ÃÂÀÁÄ]/g, 'A')
    .replace(/[ÊÈÉË]/g, 'E')
    .replace(/[ÎÌÍÏ]/g, 'I')
    .replace(/[ÕÔÒÓÖ]/g, 'O')
    .replace(/[ÛÙÚÜ]/g, 'U')
    .replace('ç', 'c')
    .replace('Ç', 'C')
    .replace('ñ', 'n')
    .replace('Ñ', 'N')
    .replace(/[^a-zA-Z]/g, ' ')
}

export { removeCaracteresEspeciais }
