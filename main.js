class Pessoa {
  constructor(nome, altura, peso) {
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
  }
}

class Vingador extends Pessoa {
  constructor(
    nome,
    altura,
    peso,
    poderes,
    temArmadura,
    temArma,
    isMembroFundador,
    isImortal
  ) {
    super(nome, altura, peso);
    this.poderes = poderes;
    this.temArmadura = temArmadura;
    this.temArma = temArma;
    this.isMembroFundador = isMembroFundador;
    this.isImortal = isImortal;
  }

  lutar() {
    alert(`${this.nome} está lutando usando ${this.poderes[1]}`);
  }
}

const thor = new Vingador(
  "Thor",
  "1.85",
  "100kg",
  ["Deus do Trovão", "Super força", "Vôo", "Longevidade"],
  true,
  true,
  false
);

const sentry = new Vingador(
  "Sentry",
  "1.90",
  "90kg",
  [
    "Super força",
    "Super velocidade",
    "Vôo",
    "Intangibilidade",
    "Geração de campos de força",
  ],
  false,
  false,
  false
);

document.getElementById("lutar").onclick = function () {
  sentry.lutar();
};

///adicionar vingadores favoritos
///trabalhar no front
/// adicionar imagem do avenger
/// compara com o Batman
/// mostrar se vence o batman (FALSE)
