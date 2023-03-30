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
    image:"",
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
    name: "Pesos 100 EC",
    image:
      "https://korumatarim.com/wp-content/uploads/2019/03/2-34-768x768.png",
    info: "500 CC",
  },
  {
    id: "ilac12",
    name: "Topas",
    image:
      "https://cdn.dsmcdn.com/ty115/product/media/images/20210517/18/89182815/175258347/1/1_org_zoom.jpg",
    info: "250 CC",
  },
  {
    id: "ilac14",
    name: "Teldor",
    image:
      "http://www.yapraktarim.com.tr/Upload/File/2019/7/16/untitled-40016teldor.jpg",
    info: "200 CC",
  },
  {
    id: "ilac15",
    name: "Hagax",
    image:
      "",
    info: "2.5 Kg",
  },
  {
    id: "ilac17",
    name: "Microthiol Special",
    image:
      "https://www.senyurttarimmarket.com/wp-content/uploads/2021/09/microtiel-scaled.jpg",
    info: "20 Kg",
  },
  {
    id: "ilac18",
    name: "Rubin 25 WP",
    image:
      "https://korumatarim.com/wp-content/uploads/2019/03/2-46-768x768.png",
    info: "600 Gr",
  },
  {
    id: "ilac19",
    name: "Jasop",
    image:
      "https://dogaltrm.com/uploads/images/medium/2020-08-28-JASOP.jpg",
    info: "250 CC",
  },
  {
    id: "ilac20",
    name: "Sacred",
    image:
      "https://korumatarim.com/wp-content/uploads/2019/03/3-11-768x768.png",
    info: "800 Gr",
  },

  {
    id: "ilac22",
    name: "Blue Bordo Disp.",
    image:
      "https://ae01.alicdn.com/kf/U7dae41e43d254a0e9d521ea243533fb1E/Mavi-BORDO-BULAMACI-DISPERSS-10-KG.jpg_Q90.jpg_.webp",
    info: "10 Kg",
  },
  {
    id: "ilac23",
    name: "Filint WG 50",
    image:
      "https://i0.wp.com/www.hobitohum.com/wp-content/uploads/2017/10/venti_73613596679551170125-1489318490-1500208013.jpg?w=360&ssl=1",
    info: "150 Gr",
  },
  {
    id: "ilac24",
    name: "Hektaş Bordo",
    image:
      "https://hektas.com.tr/wp-content/uploads/2021/06/Hektas-Bordo-20-WP_en.jpg",
    info: "10 Kg",
  },
  {
    id: "ilac25",
    name: "Marasal",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_NNw8hv1Swa4yLrgXEzXcVV0RiKb-Rg_1gWL5vgXrfBYslslzDdt2BRyDZ2n78KrsuY&usqp=CAU",
    info: "250 CC",
  },
  {
    id: "ilac29",
    name: "Luna Tranqualty",
    image:
      "https://cdn.dsmcdn.com/ty768/product/media/images/20230309/23/299961040/859335253/1/1_org_zoom.jpg",
    info: "300 CC",
  },
  {
    id: "ilac30",
    name: "Jasop",
    image:
      "https://dogaltrm.com/uploads/images/medium/2020-08-28-JASOP.jpg",
    info: "1 Lt",
  },
  {
    id: "ilac31",
    name: "Sumitop WP",
    image:
      "https://productimages.hepsiburada.net/s/3/550/9612918980658.jpg/format:webp",
    info: "400 Gr",
  },
  {
    id: "ilac33",
    name: "Topas",
    image:
      "https://ricardoteransl.es/wp-content/uploads/2022/08/syngenta-500mlo.jpg",
    info: "500 CC",
  },
  {
    id: "ilac34",
    name: "Macal 50 EC",
    image:
      "",
    info: "250 Ml",
  },
  {
    id: "ilac35",
    name: "Switch WG",
    image:
      "https://e-geoprostasia.gr/wp-content/uploads/2019/07/switch-new.jpg",
    info: "200 Gr",
  },
  {
    id: "ilac36",
    name: "Rally",
    image:"",
    info: "250 Gr",
  },
  {
    id: "ilac37",
    name: "Sumitop WP",
    image:
      "https://productimages.hepsiburada.net/s/5/550/9699333799986.jpg/format:webp",
    info: "200 Gr",
  },
  {
    id: "ilac38",
    name: "Collis",
    image:
      "https://www.cdnaws.com/i/cegelgrupcom/QvGYHLvkHpaZW3D2ZW3D2LvkHpaZW3D2ZW3D2/images/urunler/5e9b133777dba-76889-1.png",
    info: "250 CC",
  },
  {
    id: "ilac39",
    name: "Aşı Macunu",
    image:
      "https://cdn.dsmcdn.com/ty83/product/media/images/20210311/20/70787335/66841745/1/1_org_zoom.jpg",
    info: "500 Gr",
  },
  {
    id: "ilac40",
    name: "Fosetal",
    image:
      "http://ifoda.uz/uploads/1/OHFt7PArDxgdydJkloYV2O7BE0A1Qp8J.png",
    info: "1 Kg",
  },
];

export default fungicidesList;
