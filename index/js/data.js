const products = [
  {
    "id": 1,
    "name": "J'ADORE EAU DE PARFUM INFINISSIME",
    "image": "https://mfparis.vn/wp-content/uploads/2022/09/nuoc-hoa-nu-dior-j-adore-parfum-d-eau-100ml-moi-nhat-2022.jpg",
    "price": 3800000,
    type: 'sale'
  },
  {
    "id": 2,
    "name": "SAUVAGE ELIXIR",
    "image": "https://mfparis.vn/wp-content/uploads/2021/12/dior-sauvage-elixir-edp-60ml.jpg",
    "price": 3220000,
    type: 'sale'
  },
  {
    "id": 3,
    "name": "Jean Paul Gaultier Le Beau EDT 125ml",
    "image": "https://mfparis.vn/wp-content/uploads/2022/09/jean-paul-gaultier-la-belle-fleur-terrible.jpg",
    "price": 2190000,
    type: 'sale'
  },
  {
    "id": 4,
    "name": "Roja Parfums Elixir Pour Femme",
    "image": "https://mfparis.vn/wp-content/uploads/2022/09/nuoc-hoa-nu-roja-parfums-elixir-pour-femme-mfparis.jpg",
    "price": 6300000,
    type: 'sale'
  },
  {
    "id": 5,
    "name": "Afnan Violet Bouquet Eau de Parfum",
    "image": "https://mfparis.vn/wp-content/uploads/2022/08/afnan-violet-bouquet-eau-de-parfum-100ml-mfparis.jpg",
    "price": 1500000,
    type : 'new',
  },
  {
    "id": 6,
    "name": "Trussardi Donna Eau de Parfum",
    "image": "https://mfparis.vn/wp-content/uploads/2022/08/nuoc-hoa-nu-trussardi-donna-eau-de-parfum-100ml-mfparis.jpg",
    "price": 1600000,
    type : 'new',
  },
  {
    "id": 7,
    "name": "Narciso Cristal Eau de Parfum",
    "image": "https://mfparis.vn/wp-content/uploads/2022/08/nuoc-hoa-nu-narciso-cristal-eau-de-parfum-90ml-mfparis.jpg",
    "price": 2700000,
    type : 'new',
  },
  {
    "id": 8,
    "name": "Givenchy Live Irrésistible Rosy Crush",
    "image": "https://mfparis.vn/wp-content/uploads/2022/08/givenchy-live-irresistible-rosy-crush-mfparis.jpg",
    "price": 2100000,
    type : 'new',
  },
  {
    "id": 9,
    "name": "Set Yves Saint Laurent Mon Paris",
    "image": "https://mfparis.vn/wp-content/uploads/2022/07/3614273721530-mfparis.jpg",
    "price": 3500000,
    type : 'new',
  },
  {
    "id": 10,
    "name": "Gucci Guilty Black Pour Femme",
    "image": "https://mfparis.vn/wp-content/uploads/2022/06/Gucci-Guilty-Black-Pour-Femme-mfparis.jpg",
    "price": 2350000,
    type : 'best-sellers'
  },
  {
    "id": 11,
    "name": "Gucci Flora Eau De Parfum",
    "image": "https://mfparis.vn/wp-content/uploads/2022/06/gucci-flora-eau-de-parfum-pour-femme-mfparis.jpg",
    "price": 3050000,
    type : 'best-sellers'
  },
  {
    "id": 12,
    "name": "Elizabeth Arden 5th Avenue",
    "image": "https://mfparis.vn/wp-content/uploads/2022/06/elizabeth-arden-5th-avenue-eau-de-parfum-mfparis.jpg",
    "price": 1500000,
    type : 'best-sellers'
  },
  {
    "id": 13,
    "name": "Alaia Paris Eau De Parfum",
    "image": "https://mfparis.vn/wp-content/uploads/2022/06/alaia-paris-eau-de-parfum-100ml-mfparis.jpg",
    "price": 2600000,
    type : 'best-sellers'
  },
  {
    "id": 14,
    "name": "Elizabeth Arden White Tea",
    "image": "https://mfparis.vn/wp-content/uploads/2022/06/elizabeth-arden-white-tea-eau-de-toilette-mfparis.jpg",
    "price": 1500000,
    type : 'best-sellers'
  },
  {
    "id": 15,
    "name": "Elie Saab Le Parfum Royal",
    "image": "https://mfparis.vn/wp-content/uploads/2022/06/elie-saab-le-parfum-royal-eau-de-parfum-mfparis.jpg",
    "price": 2360000,
    type : 'best-sellers'
  },
  {
    "id": 16,
    "name": "Elie Saab Le Parfum Eau de Parfum",
    "image": "https://mfparis.vn/wp-content/uploads/2022/06/elie-saab-le-parfum-eau-de-parfum-pour-femme___290-mfparis.jpg",
    "price": 2650000,
    type : 'best-sellers'
  },
  {
    "id": 17,
    "name": "Lancome Tresor",
    "image": "https://mfparis.vn/wp-content/uploads/2022/06/set-nuoc-hoa-lancome-tresor.jpg",
    "price": 1650000,
    type : 'best-sellers'
  },
  {
    "id": 18,
    "name": "HERMÈS Eau d’Orange Verte Eau De Cologne",
    "image": "https://mfparis.vn/wp-content/uploads/2022/06/hermes-eau-dorange-verte-eau-de-cologne-mixte-mfparis.jpg",
    "price": 2850000,
    type : 'best-sellers'
  },
  {
    "id": 19,
    "name": "Hermes Eau des Merveilles",
    "image": "https://mfparis.vn/wp-content/uploads/2022/06/hermes-eau-des-merveilles-eau-de-toilette-pour-femme___24-mfparis.jpg",
    "price": 2800000,
    type : 'best-sellers'
  },
  {
    "id": 20,
    "name": "Dolce & Gabbana Dolce Lily Eau de Toilette",
    "image": "https://mfparis.vn/wp-content/uploads/2022/06/1-mfparis-1.jpg",
    "price": 2200000,
    type : 'best-sellers'
  }
]
export default products