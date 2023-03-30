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
      "https://canary.contestimg.wish.com/api/webimage/5f9e73d26535340555d4f93b-large.jpg?cache_buster=7168d67a2f234fad72e223c8aea76d63",
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
      "https://canary.contestimg.wish.com/api/webimage/5f9e73d26535340555d4f93b-large.jpg?cache_buster=7168d67a2f234fad72e223c8aea76d63",
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
      "https://mclaughlins.ie/wp-content/uploads/2020/04/Torpedo-1lt-NEW.png",
    info: "1 Lt",
  },
  {
    id: "ilac9",
    name: "Decis Trap",
    image:
      "https://cdn.dsmcdn.com/mnresize/1200/1800/ty16/product/media/images/20201010/10/14809553/77197815/1/1_org_zoom.jpg",
    info: "Tuzak",
  },
  {
    id: "ilac10",
    name: "Arrivo 25EC",
    image:
      "https://www.agrodaltarim.com.tr/image/cache/catalog/PRODUCT/B%C3%96CEK%20%C4%B0LA%C3%87LARI/arrivo-250gr-c3b6n-500x500.jpg",
    info: "250 CC",
  },
  {
    id: "ilac11",
    name: "Admiral",
    image:
      "https://www.agricenter.gr/wp-content/uploads/2016/11/0226_3320_IMG_6137.jpg",
    info: "500 CC",
  },
  {
    id: "ilac12",
    name: "Forgard",
    image:
      "https://gunertarim.com.tr/wp-content/uploads/2022/08/FORGARD-5SG.jpg",
    info: "100 Gr",
  },
  {
    id: "ilac13",
    name: "Malathion 25WP",
    image:
      "https://korumatarim.com/wp-content/uploads/2019/03/2-16-768x768.png",
    info: "800 Gr",
  },
  {
    id: "ilac14",
    name: "Malathion 65EM",
    image:
      "https://korumatarim.com/wp-content/uploads/2019/03/1-01-768x768.png",
    info: "1 Lt",
  },
  {
    id: "ilac15",
    name: "Muligan",
    image:
      "https://hektas.com.tr/wp-content/uploads/2021/07/Muligan-300x300_en.png",
    info: "500 CC",
  },
  {
    id: "ilac16",
    name: "Mars",
    image:
      "https://www.mentatarim.com/yukleme/urunler/resim/l/mars.jpg",
    info: "500 CC",
  },
  {
    id: "ilac17",
    name: "Delegate",
    image:
      "https://cdn-merchant.ganipara.com/assets/12069/product/708446/grande_iMG-20200326-104849-1585208950.jpg",
    info: "300 Gr",
  },
  {
    id: "ilac18",
    name: "Umeed",
    image:
      "https://tr.uplonline.com/product-logo/SMAYrvjArroFVRjYQigT6a2xIP6U1gmXTnJARKw9.png",
    info: "100 Gr",
  },
  {
    id: "ilac19",
    name: "Movento SC 100",
    image:
      "https://www.polertarim.com.tr/tr/imgs/525x426x2/movento_brandtag.png",
    info: "1 Lt",
  },
  {
    id: "ilac20",
    name: "Forgard",
    image:
      "https://gunertarim.com.tr/wp-content/uploads/2022/08/FORGARD-5SG.jpg",
    info: "400 Gr",
  },
  {
    id: "ilac21",
    name: "Rodillon Paste",
    image:
      "https://cdn.akakce.com/z/bayer/bayer-rodilon-paste-10-gr-10-lu.jpg",
    info: "100 Gr",
  },
  {
    id: "ilac22",
    name: "Delegate",
    image:
      "https://cdn-merchant.ganipara.com/assets/12069/product/708446/grande_iMG-20200326-104849-1585208950.jpg",
    info: "200 Gr",
  },
  {
    id: "ilac23",
    name: "Avirmec",
    image:
      "https://cdn-merchant.ganipara.com/assets/12069/product/655712/venti_resim-1568358999.png",
    info: "500 CC",
  },
  {
    id: "ilac24",
    name: "Goldplan",
    image:
      "https://agrobestgrup.com/upload/products/Goldplan.jpg",
    info: "1 Kg",
  },
  {
    id: "ilac25",
    name: "Samba 10 SC",
    image:
      "https://www.espreso.co.rs/data/images/2018/07/06/13/394019_pesticidi-umesto-boja-06-07-2018-presevo_ff.jpg?ver=1530876469",
    info: "250 CC",
  },
  {
    id: "ilac26",
    name: "Dentis 25EC",
    image:
      "https://www.hateksantarim.com/FileUpload/ep869593/UrunResim/48230472.jpg",
    info: "250 CC",
  },
  {
    id: "ilac27",
    name: "Fivestar EW",
    image:
      "https://www.agromonti.com/wp-content/uploads/2020/09/fivestar03.jpg",
    info: "250 Ml",
  },
  {
    id: "ilac28",
    name: "Coraggio",
    image:
      "https://dogaltrm.com/uploads/images/medium/2020-08-26-CORRAGIO1.jpg",
    info: "250 CC",
  },
  {
    id: "ilac29",
    name: "Quink Pos Tb",
    image:"",
    info: "90 Gr",
  },
  {
    id: "ilac30",
    name: "Arrivo 25EC",
    image:
      "https://www.agrodaltarim.com.tr/image/cache/catalog/PRODUCT/B%C3%96CEK%20%C4%B0LA%C3%87LARI/arrivo-250gr-c3b6n-228x228.jpg",
    info: "250 CC",
  },
  {
    id: "ilac31",
    name: "Mospilan 20SP",
    image:
      "http://www.yapraktarim.com.tr/Upload/File/2019/7/19/t131.jpg",
    info: "100 Gr",
  },
  {
    id: "ilac32",
    name: "Abba",
    image:
      "",
    info: "1 Lt",
  },
  {
    id: "ilac33",
    name: "Sungold",
    image:
      "",
    info: "250 CC",
  },
  {
    id: "ilac34",
    name: "Amangel",
    image:
      "https://korumatarim.com/wp-content/uploads/2019/03/AMANGEL-SL.png",
    info: "1 Lt",
  },
  {
    id: "ilac35",
    name: "Mospilan 20SP",
    image:
      "http://www.yapraktarim.com.tr/Upload/File/2019/7/19/t131.jpg",
    info: "400 Gr",
  },
  {
    id: "ilac36",
    name: "Hekplan 20SP",
    image:
      "https://hektas.com.tr/wp-content/uploads/2021/07/Hekplan-20-SP-300x300_en.png",
    info: "800 Gr",
  },
  {
    id: "ilac37",
    name: "Dentis EC 2.5",
    image:
      "https://korumatarim.com/wp-content/uploads/2019/03/1-24-768x767.png",
    info: "1 Lt",
  },
  {
    id: "ilac38",
    name: "Smach",
    image:
      "https://hektas.com.tr/wp-content/uploads/2021/07/Smach_en.jpg",
    info: "200 CC",
  },
  {
    id: "ilac39",
    name: "Decis EC 25",
    image:
      "http://www.yapraktarim.com.tr/Upload/File/2019/7/17/0005decis.jpg",
    info: "250 CC",
  },
  {
    id: "ilac40",
    name: "Mavrik 2F",
    image:
      "https://www.adama.com/turkey/sites/adama_turkey/files/styles/product_header_image_desktop_2x/public/product-images/Mavrik_tcm158-80851.png.webp?itok=4s-5bvxs",
    info: "500 Ml",
  },
  {
    id: "ilac41",
    name: "Solfac",
    image:
      "https://cdn.dsmcdn.com/ty385/product/media/images/20220405/2/83273402/62190439/1/1_org_zoom.jpg",
    info: "50 Gr",
  },
  {
    id: "ilac42",
    name: "Breaker",
    image:
      "https://ae05.alicdn.com/kf/U9d16a1c8f92349f59b3a490e64378112z/Dow-Breaker-240-Sc-nsektisit-200-CC.jpg",
    info: "200 CC",
  },
  {
    id: "ilac43",
    name: "Agrofarm Mal.",
    image:
      "https://korumatarim.com/wp-content/uploads/2019/03/2-16-768x768.png",
    info: "1 Lt",
  },
  {
    id: "ilac44",
    name: "Koruma V-92",
    image:
      "https://korumatarim.com/wp-content/uploads/2019/03/1-98-768x769.png",
    info: "60 Lt",
  },
  {
    id: "ilac45",
    name: "Korfezin",
    image:
      "https://korumatarim.com/wp-content/uploads/2019/03/1-47-768x767.png",
    info: "1 Lt",
  },
  {
    id: "ilac46",
    name: "Lance",
    image:
      "https://img.pttavm.com/pimages/592/067/793/5cc031646a41c.jpg?v=201910111528",
    info: "1 Lt",
  },
  {
    id: "ilac47",
    name: "Tepraund 400SC",
    image:
      "",
    info: "1 Lt",
  },
  {
    id: "ilac48",
    name: "İntegral 5EC",
    image:
      "https://mentatarim.com/yukleme/urunler/resim/t/integral-5-ec.jpg",
    info: "250 CC",
  },
  {
    id: "ilac49",
    name: "Jockey",
    image:
      "",
    info: "100 Gr",
  },
  {
    id: "ilac50",
    name: "Neemarin",
    image:
      "https://hektas.com.tr/wp-content/uploads/2021/07/Neemarin.png",
    info: "400 Gr",
  },
];

export default insecticidesList;
