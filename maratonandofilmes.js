  
  // As combinações serão de no máximo dois filmes.
  const paresDeFilmes = [];
  // Este set guarda os filmes que já foram combinados.
  const filmesEscolhidos = new Set();
  const duracoesOrdenadas = duracoes.sort((a,b) => a - b);
  // Filmes com duração maior que 1.99 não terão um par.
  const naoTemPar = duracoesOrdenadas.findIndex(el => el > 1.99);
  // Armazenando as possíveis combinações de filmes (sem repetições).
  for(let i = 0; i < naoTemPar; i++){
    for(let j = i + 1; j < naoTemPar; j++){
      paresDeFilmes.push({"filmeA": i, "filmeB": j, "soma": duracoesOrdenadas[i] + duracoesOrdenadas[j]});
    }
  }
  paresDeFilmes.sort((a,b) => b.soma - a.soma);
  let qtdFilmesNaoCombinaveis = duracoesOrdenadas.length - naoTemPar;
  // Filmes que deverão ser assistidos separadamente em um único dia.
  let dias = 0;
  // Escolhe as combinações de filmes.
  for(let i = 0; ((filmesEscolhidos.size + qtdFilmesNaoCombinaveis) < duracoesOrdenadas.length) && i < paresDeFilmes.length; i++){
    // A combinação de duração precisa ser <= 3
    if(paresDeFilmes[i].soma <= 3 && !filmesEscolhidos.has(paresDeFilmes[i].filmeA) && !filmesEscolhidos.has(paresDeFilmes[i].filmeB)){
      filmesEscolhidos.add(paresDeFilmes[i].filmeA);
      filmesEscolhidos.add(paresDeFilmes[i].filmeB);
      dias++;
    }
  }
  // Adicionando os filmes aos não combináveis.
  qtdFilmesNaoCombinaveis += duracoesOrdenadas.length - qtdFilmesNaoCombinaveis - filmesEscolhidos.size;
  dias += qtdFilmesNaoCombinaveis;
  return dias;
