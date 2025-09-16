const nomes = ["marlon", "jonssons", "jeffersom", "nelha", "valdileia", "antonela"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)