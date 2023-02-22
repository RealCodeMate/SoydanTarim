const fungicidesList = [
  {
    id: "ilac1",
    name: "Alfosetil",
    image: "https://i.imgur.com/kzCYx.jpg",
    info: "80 WP",
  },
  {
    id: "ilac2",
    name: "Pesos",
    image: "https://korumatarim.com/wp-content/uploads/2019/03/2-34.png",
    info: "100 EC",
  },
  {
    id: "ilac3",
    name: "Koruma Captan",
    image:
      "https://productimages.hepsiburada.net/s/3/550/9612918882354.jpg/format:webp",
    info: "800 GR",
  },
  {
    id: "ilac4",
    name: "Thiovit Jet",
    image:
      "https://magazin.dabacco.ro/wp-content/uploads/2022/06/Thiovit-Jet-20kg.jpg",
    info: "20 KG",
  },
  {
    id: "ilac5",
    name: "Topas",
    image:
      "https://cdn.dsmcdn.com/ty115/product/media/images/20210517/18/89182815/175258347/1/1_org_zoom.jpg",
    info: "100EC 100CC",
  },
  {
    id: "ilac7",
    name: "Pesos",
    image: "https://korumatarim.com/wp-content/uploads/2019/03/2-34.png",
    info: "250 CC",
  },
  {
    id: "ilac8",
    name: "Zirag",
    image:
      "https://i.picsum.photos/id/880/200/200.jpg?hmac=g5VV-eqqKk9TdTvkzKu6PzjRtzrqVhrj6v7H9ZT7PDo",
    info: "800 Gr",
  },
  {
    id: "ilac9",
    name: "Thiovit",
    image:
      "https://magazin.dabacco.ro/wp-content/uploads/2022/06/Thiovit-Jet-20kg.jpg",
    info: "800 Gr",
  },

  {
    id: "ilac11",
    name: "Pesos",
    image:
      "https://i.picsum.photos/id/906/200/200.jpg?hmac=jQ-m5xgglMRMPvZhK3539qEkxPG1FVUae6AeV_HKQfg",
    info: "500 CC",
  },
  {
    id: "ilac12",
    name: "Topas",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "250 CC",
  },
  {
    id: "ilac14",
    name: "Teldor",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "200 CC",
  },
  {
    id: "ilac15",
    name: "Hagax",
    image:
      "https://i.picsum.photos/id/906/200/200.jpg?hmac=jQ-m5xgglMRMPvZhK3539qEkxPG1FVUae6AeV_HKQfg",
    info: "2.5 Kg",
  },
  {
    id: "ilac17",
    name: "Microthiol Special",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "20 Kg",
  },
  {
    id: "ilac18",
    name: "Rubin 25 WP",
    image:
      "https://i.picsum.photos/id/906/200/200.jpg?hmac=jQ-m5xgglMRMPvZhK3539qEkxPG1FVUae6AeV_HKQfg",
    info: "600 Gr",
  },
  {
    id: "ilac19",
    name: "Jasop",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "250 CC",
  },
  {
    id: "ilac20",
    name: "Sacred",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "800 Gr",
  },

  {
    id: "ilac22",
    name: "Blue Bordo Disp.",
    image:
      "https://i.picsum.photos/id/906/200/200.jpg?hmac=jQ-m5xgglMRMPvZhK3539qEkxPG1FVUae6AeV_HKQfg",
    info: "10 Kg",
  },
  {
    id: "ilac23",
    name: "Filinta WG 50",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "150 Gr",
  },
  {
    id: "ilac24",
    name: "Hektaş Bordo",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "10 Kg",
  },
  {
    id: "ilac25",
    name: "Marasal",
    image:
      "https://i.picsum.photos/id/906/200/200.jpg?hmac=jQ-m5xgglMRMPvZhK3539qEkxPG1FVUae6AeV_HKQfg",
    info: "250 CC",
  },
  {
    id: "ilac27",
    name: "Flint WG 50",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "150 Gr",
  },
  {
    id: "ilac29",
    name: "Luna Tranqualty",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "300 CC",
  },
  {
    id: "ilac30",
    name: "Jasop",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "1 Lt",
  },
  {
    id: "ilac31",
    name: "Sumitop WP",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "400 Gr",
  },
  {
    id: "ilac33",
    name: "Topas",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "500 CC",
  },
  {
    id: "ilac34",
    name: "Macal 50 EC",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "250 Ml",
  },
  {
    id: "ilac35",
    name: "Switch WG",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "200 Gr",
  },
  {
    id: "ilac36",
    name: "Rally",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "250 Gr",
  },
  {
    id: "ilac37",
    name: "Sumitop",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "200 Gr",
  },
  {
    id: "ilac38",
    name: "Collis",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "250 CC",
  },
  {
    id: "ilac39",
    name: "Aşı Macunu",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "500 Gr",
  },
  {
    id: "ilac40",
    name: "Fosetal",
    image:
      "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    info: "1 Kg",
  },
];

export default fungicidesList;
