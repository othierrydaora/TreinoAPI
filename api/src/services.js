export function dobro(numba) {
    return String(Number(numba)*2);
} //ok

export function soma(numba, numbar) {
    return numba + numbar;
} //ok

export function media(numba, numbar, numbas) {
    return (numba + numbar + numbas) / 3;
} //ok

export function table(limit) {
    let tb = [10];
    for (let i = 0; i <= 10; i++) tb[i] = Number(limit) * i;
    return tb;
} //ok

export function febre(temp) {
    return Number(temp) > 37;
} //ok

export function ingresso(inteiras, meias, dia, origem) {
    inteiras = Number(inteiras);
    meias = Number(meias);
    return  origem === 'nacional' ? (inteiras + meias) * 5 : dia == 'quarta' ? (inteiras * 10 + meias * 5) : (inteiras * 20 + meias * 10) ;
} //ok

export function maior(numbas) {
    let counter = 0;
    numbas.split(' ');
    for (let item of numbas) item = Number(item)
    for (let i = 0; i < numbas.length; i++) {
        if (numbas[i] > counter) counter = numbas[i];
    }
    return counter;
} 

export function corPrimaria(cor) {
    return cor == 'amarelo' || cor == 'vermelho' || cor == 'azul';
} //ok

export function characterFreq(text, chr) {
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == chr) counter++;
    }
    return counter;
} //ok
