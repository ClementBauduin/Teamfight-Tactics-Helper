export async function GET(request: Request) {
  //return a json response containing the list of champions
  const champions = {

    "TFT_Aatrox": {
      "name": "Aatrox",
      "tier": 4,
      "image": "/img/Aatrox.png"
    },

    "TFT_Alistar": {
      "name": "Alistar",
      "tier": 3,
      "image": "/img/Alistar.png"
    },

    "TFT_Annie": {
      "name": "Annie",
      "tier": 2,
      "image": "/img/Annie.png"
    },

    "TFT_Ashe": {
      "name": "Ashe",
      "tier": 1,
      "image": "/img/Ashe.png"
    },

    "TFT_AurelionSol": {
      "name": "Aurelion Sol",
      "tier": 4,
      "image": "/img/Aurelionsol.png"
    },

    "TFT_Belveth": {
      "name": "Belveth",
      "tier": 4,
      "image": "/img/Belveth.png"
    },

    "TFT_Blitzcrank": {
      "name": "Blitzcrank",
      "tier": 1,
      "image": "/img/Blitzcrank.png"
    },

    "TFT_Camille": {
      "name": "Camille",
      "tier": 2,
      "image": "/img/Camille.png"
    },

    "TFT_Draven": {
      "name": "Draven",
      "tier": 2,
      "image": "/img/Draven.png"
    },

    "TFT_Ekko": {
      "name": "Ekko",
      "tier": 4,
      "image": "/img/Ekko.png"
    },

    "TFT_Ezreal": {
      "name": "Ezreal",
      "tier": 2,
      "image": "/img/Ezreal.png"
    },

    "TFT_Ezrealfuture": {
      "name": "Ezreal Future",
      "tier": 5,
      "image": "/img/Ezrealfuture.png"
    },

    "TFT_Fiddlesticks": {
      "name": "Fiddlesticks",
      "tier": 5,
      "image": "/img/Fiddlesticks.png"
    },

    "TFT_Fiora": {
      "name": "Fiora",
      "tier": 2,
      "image": "/img/Fiora.png"
    },

    "TFT_Gangplank": {
      "name": "Gangplank",
      "tier": 1,
      "image": "/img/Gangplank.png"
    },

    "TFT_Garen": {
      "name": "Garen",
      "tier": 4,
      "image": "/img/Garen.png"
    },

    "TFT_Gnar": {
      "name": "Gnar",
      "tier": 3,
      "image": "/img/Gnar.png"
    },

    "TFT_Janna": {
      "name": "Janna",
      "tier": 5,
      "image": "/img/Janna.png"
    },

    "TFT_Jax": {
      "name": "Jax",
      "tier": 3,
      "image": "/img/Jax.png"
    },

    "TFT_Jhin": {
      "name": "Jhin",
      "tier": 4,
      "image": "/img/Jhin.png"
    },

    "TFT_Jinx": {
      "name": "Jinx",
      "tier": 2,
      "image": "/img/Jinx.png"
    },

    "TFT_Kaisa": {
      "name": "Kaisa",
      "tier": 3,
      "image": "/img/Kaisa.png"
    },

    "TFT_Kayle": {
      "name": "Kayle",
      "tier": 1,
      "image": "/img/Kayle.png"
    },

    "TFT_Leblanc": {
      "name": "Leblanc",
      "tier": 3,
      "image": "/img/Leblanc.png"
    },

    "TFT_Leesin": {
      "name": "Lee Sin",
      "tier": 2,
      "image": "/img/Leesin.png"
    },

    "TFT_Leona": {
      "name": "Leona",
      "tier": 5,
      "image": "/img/Leona.png"
    },

    "TFT_Lucian": {
      "name": "Lucian",
      "tier": 1,
      "image": "/img/Lucian.png"
    },

    "TFT_Lulu": {
      "name": "Lulu",
      "tier": 1,
      "image": "/img/Lulu.png"
    },

    "TFT_Lux": {
      "name": "Lux",
      "tier": 1,
      "image": "/img/Lux.png"
    },

    "TFT_Malphite": {
      "name": "Malphite",
      "tier": 2,
      "image": "/img/Malphite.png"
    },

    "TFT_Missfortune": {
      "name": "Miss Fortune",
      "tier": 4,
      "image": "/img/Missfortune.png"
    },

    "TFT_Mordekaiser": {
      "name": "Mordekaiser",
      "tier": 5,
      "image": "/img/Mordekaiser.png"
    },

    "TFT_Morgana": {
      "name": "Morgana",
      "tier": 4,
      "image": "/img/Morgana.png"
    },

    "TFT_Nasus": {
      "name": "Nasus",
      "tier": 1,
      "image": "/img/Nasus.png"
    },

    "TFT_Neeko": {
      "name": "Neeko",
      "tier": 4,
      "image": "/img/Neeko.png"
    },

    "TFT_Nilah": {
      "name": "Nilah",
      "tier": 3,
      "image": "/img/Nilah.png"
    },

    "TFT_Nunu": {
      "name": "Nunu",
      "tier": 5,
      "image": "/img/Nunu.png"
    },

    "TFT_Pantheon": {
      "name": "Pantheon",
      "tier": 1,
      "image": "/img/Pantheon.png"
    },

    "TFT_Poppy": {
      "name": "Poppy",
      "tier": 1,
      "image": "/img/Poppy.png"
    },

    "TFT_Pyke": {
      "name": "Pyke",
      "tier": 2,
      "image": "/img/Pyke.png"
    },

    "TFT_Rammus": {
      "name": "Rammus",
      "tier": 3,
      "image": "/img/Rammus.png"
    },

    "TFT_Rell": {
      "name": "Rell",
      "tier": 2,
      "image": "/img/Rell.png"
    },

    "TFT_Renekton": {
      "name": "Renekton",
      "tier": 1,
      "image": "/img/Renekton.png"
    },

    "TFT_Riven": {
      "name": "Riven",
      "tier": 3,
      "image": "/img/Riven.png"
    },

    "TFT_Samira": {
      "name": "Samira",
      "tier": 4,
      "image": "/img/Samira.png"
    },

    "TFT_Shen": {
      "name": "Shen",
      "tier": 3,
      "image": "/img/Shen.png"
    },

    "TFT_Sivir": {
      "name": "Sivir",
      "tier": 2,
      "image": "/img/Sivir.png"
    },

    "TFT_Sona": {
      "name": "Sona",
      "tier": 3,
      "image": "/img/Sona.png"
    },

    "TFT_Sylas": {
      "name": "Sylas",
      "tier": 1,
      "image": "/img/Sylas.png"
    },

    "TFT_Syndra": {
      "name": "Syndra",
      "tier": 5,
      "image": "/img/Syndra.png"
    },

    "TFT_Twistedfate": {
      "name": "Twisted Fate",
      "tier": 4,
      "image": "/img/Twistedfate.png"
    },

    "TFT_Urgot": {
      "name": "Urgot",
      "tier": 5,
      "image": "/img/Urgot.png"
    },

    "TFT_Vayne": {
      "name": "Vayne",
      "tier": 3,
      "image": "/img/Vayne.png"
    },

    "TFT_Vex": {
      "name": "Vex",
      "tier": 3,
      "image": "/img/Vex.png"
    },

    "TFT_Vi": {
      "name": "Vi",
      "tier": 2,
      "image": "/img/Vi.png"
    },

    "TFT_Viego": {
      "name": "Viego",
      "tier": 4,
      "image": "/img/Viego.png"
    },

    "TFT_Warwick": {
      "name": "Warwick",
      "tier": 4,
      "image": "/img/Warwick.png"
    },

    "TFT_Wukong": {
      "name": "Wukong",
      "tier": 1,
      "image": "/img/Wukong.png"
    },

    "TFT_Yasuo": {
      "name": "Yasuo",
      "tier": 2,
      "image": "/img/Yasuo.png"
    }

  }

  return new Response(JSON.stringify(champions), {
    headers: { "content-type": "application/json" },
  });

}
