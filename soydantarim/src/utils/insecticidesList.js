const insecticidesList = [
  {
    id: "ilac1",
    name: "Mostar 20 SP",
    image:
      "https://canary.contestimg.wish.com/api/webimage/5f9e73d26535340555d4f93b-large.jpg?cache_buster=7168d67a2f234fad72e223c8aea76d63",
    info: "400 Gr",
  },
  {
    id: "ilac2",
    name: "Smach",
    image:
      "https://ae01.alicdn.com/kf/Ue058b32ac9774f2c9c85f00ab932a597K/SMACH-300-ML.jpg",
    info: "300 CC",
  },
  {
    id: "ilac3",
    name: "Mostar 20SP",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "100 Gr",
  },
  {
    id: "ilac4",
    name: "Goldplan",
    image: "https://agrobestgrup.com/upload/products/Goldplan.jpg",
    info: "400 Gr",
  },
  {
    id: "ilac5",
    name: "Mostar",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "1 Kg",
  },
  {
    id: "ilac6",
    name: "Aekido Capsül",
    image:
      "https://static.wixstatic.com/media/e75b7d_88e2440b360a4392b1e71e1fed340fd0~mv2.jpg/v1/fill/w_176,h_246,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e75b7d_88e2440b360a4392b1e71e1fed340fd0~mv2.jpg",
    info: "5EC 1 Lt",
  },
  {
    id: "ilac7",
    name: "K-Otrine",
    image: "https://productimages.hepsiburada.net/s/81/375/110000023524721.jpg",
    info: "SC50 50 CC",
  },
  {
    id: "ilac8",
    name: "Torpedo",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "1 Lt",
  },
  {
    id: "ilac9",
    name: "Decis Trap",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "Tuzak",
  },
  {
    id: "ilac10",
    name: "Arrivo 25EC",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "250 CC",
  },
  {
    id: "ilac11",
    name: "Admiral",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "500 CC",
  },
  {
    id: "ilac12",
    name: "Forgard",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "100 Gr",
  },
  {
    id: "ilac13",
    name: "Malathion 25WP",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "800 Gr",
  },
  {
    id: "ilac14",
    name: "Malathion 65EM",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "1 Lt",
  },
  {
    id: "ilac15",
    name: "Muligan",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "500 CC",
  },
  {
    id: "ilac16",
    name: "Mars",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "500 CC",
  },
  {
    id: "ilac17",
    name: "Delegate",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "300 Gr",
  },
  {
    id: "ilac18",
    name: "Umeed",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "100 Gr",
  },
  {
    id: "ilac19",
    name: "Movento SC 100",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "1 Lt",
  },
  {
    id: "ilac20",
    name: "Forgard",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "400 Gr",
  },
  {
    id: "ilac21",
    name: "Rodillon Paste",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "100 Gr",
  },
  {
    id: "ilac22",
    name: "Delegate",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "200 Gr",
  },
  {
    id: "ilac23",
    name: "Avirmec",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "500 CC",
  },
  {
    id: "ilac24",
    name: "Goldplan",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "1 Kg",
  },
  {
    id: "ilac25",
    name: "Samba 10 SC",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "250 CC",
  },
  {
    id: "ilac26",
    name: "Dentis2 5EC",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "250 CC",
  },
  {
    id: "ilac27",
    name: "Fivestar EW",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "500 Ml",
  },
  {
    id: "ilac28",
    name: "Coraggio",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "250 CC",
  },
  {
    id: "ilac29",
    name: "Quink Pos Tb",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "90 Gr",
  },
  {
    id: "ilac30",
    name: "Arrivo 25EC",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "250 CC",
  },
  {
    id: "ilac31",
    name: "Mospilan 20SP",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "100 Gr",
  },
  {
    id: "ilac32",
    name: "Abba",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "1 Lt",
  },
  {
    id: "ilac33",
    name: "Sungold",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "250 CC",
  },
  {
    id: "ilac34",
    name: "Amangel",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "1 Lt",
  },
  {
    id: "ilac35",
    name: "Mospilan 20SP",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "400 Gr",
  },
  {
    id: "ilac36",
    name: "Hekplan 20SP",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "800 Gr",
  },
  {
    id: "ilac37",
    name: "Dentis EC 2.5",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "1 Lt",
  },
  {
    id: "ilac38",
    name: "Smach",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "200 CC",
  },
  {
    id: "ilac39",
    name: "Decis EC 25",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "250 CC",
  },
  {
    id: "ilac40",
    name: "Mavrik 2F",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "500 Ml",
  },
  {
    id: "ilac41",
    name: "Solfac",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "50 Gr",
  },
  {
    id: "ilac42",
    name: "Breaker",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "200 CC",
  },
  {
    id: "ilac43",
    name: "Agrofarm Mal.",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "1 Lt",
  },
  {
    id: "ilac44",
    name: "Koruma V-92",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "60 Lt",
  },
  {
    id: "ilac45",
    name: "Korfezin",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "1 Lt",
  },
  {
    id: "ilac46",
    name: "Lance",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "1 Lt",
  },
  {
    id: "ilac47",
    name: "Tepraund 400SC",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "1 Lt",
  },
  {
    id: "ilac48",
    name: "İntegral 5EC",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "250 CC",
  },
  {
    id: "ilac49",
    name: "Jockey",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "100 Gr",
  },
  {
    id: "ilac50",
    name: "Neemarin",
    image:
      "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    info: "400 Gr",
  },
];

export default insecticidesList;
