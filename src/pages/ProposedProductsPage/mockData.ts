// Mock data uses snake_case. For React, we often prefer camelCase. So, in our
// project we use `camelize-ts` library.
import camelize from 'camelize-ts';

export const mockMarketingDealerprice = camelize([
  {
    id: 2,
    product_key: 546227,
    price: 233.0,
    product_url:
      'https://akson.ru//p/sredstvo_universalnoe_prosept_universal_spray_500ml/',
    product_name: 'Средство универсальное Prosept Universal Spray, 500мл',
    date: '2023-07-11',
    dealer_id: 2,
  },
]);

export const mockMarketingProductdealerkey = camelize([
  {
    id: 1,
    key: 546227,
    dealer_id: 2,
    product_id: 12,
  },
]);

export const mockMarketingDealer = camelize([
  {
    id: 1,
    name: 'Moi_vibor_WB',
  },
  {
    id: 2,
    name: 'Akson',
  },
  {
    id: 3,
    name: 'Bafus',
  },
  {
    id: 4,
    name: 'Baucenter',
  },
  {
    id: 5,
    name: 'Castorama',
  },
  {
    id: 6,
    name: 'Cubatora',
  },
  {
    id: 7,
    name: 'Komus',
  },
  {
    id: 8,
    name: 'Leroy_Merlin',
  },
  {
    id: 9,
    name: 'Megastroy',
  },
  {
    id: 10,
    name: 'OnlineTrade',
  },
  {
    id: 11,
    name: 'Petrovich',
  },
  {
    id: 12,
    name: 'sdvor',
  },
  {
    id: 13,
    name: 'simaLand',
  },
  {
    id: 14,
    name: 'VegosM',
  },
  {
    id: 15,
    name: 'Vse_instrumeni',
  },
  {
    id: 16,
    name: 'Vimos',
  },
  {
    id: 17,
    name: 'Unicleaner_OZON',
  },
  {
    id: 18,
    name: 'Мasterstroy_spb_OZON',
  },
]);

export const mockMarketingProduct = camelize([
  {
    '': '7',
    id: '114',
    article: '125-5',
    ean_13: '4680008141842.0',
    name: 'Средство для удаления технических масел, смазочных материалов и нефтепродуктовDuty Oil концентрат 1:20-1:150 /  5 л',
    cost: '711.82',
    recommended_price: '1663.0',
    category_id: '35.0',
    ozon_name:
      'Средство для удаления технических масел, смазочных материалов и нефтепродуктов PROSEPT Duty Oil, 5 л.',
    name_1c:
      'Средство для удаления технических масел, смазочных материалов и нефтепродуктов PROSEPT Duty Oil, 5 л.',
    wb_name:
      'Средство для удаления технических масел, смазочных материалов и нефтепродуктов PROSEPT Duty Oil, 5 л.',
    ozon_article: '189522869.0',
    wb_article: '149992148.0',
    ym_article: '125-5',
    wb_article_td: '',
    accuracy: '0.95',
  },
  {
    '': '15',
    id: '43',
    article: '284-08',
    ean_13: '4680008147196.0',
    name: 'Средство для мытья полов и стенMultipower ""Полевые цветы""концентрат  1:10 – 1:120 / 0,8 л',
    cost: '77.94',
    recommended_price: '182.0',
    category_id: '',
    ozon_name: '',
    name_1c:
      'Средство для мытья полов и стенMultipower ""Полевые цветы""концентрат  1:10 – 1:120 / 0,8 л',
    wb_name: '',
    ozon_article: '',
    wb_article: '',
    ym_article: '',
    wb_article_td: '',
    accuracy: '0.93',
  },
  {
    '': '26',
    id: '55',
    article: '294-075',
    ean_13: '4680008147479.0',
    name: 'Средство усиленного действия для удаления ржавчины и минеральных отложенийBath Acid +  с ароматом цитрусаконцентрат 1:200-1:500 / 0,75 л',
    cost: '75.0',
    recommended_price: '176.0',
    category_id: '52.0',
    ozon_name:
      'Средство PROSEPT усиленного действия для удаления ржавчины и минеральных отложений Bath Acid +  с аромат цитруса. Концентрат. 0,75л',
    name_1c:
      'Средство PROSEPT усиленного действия для удаления ржавчины и минеральных отложений Bath Acid +  с аромат цитруса. Концентрат. 0,75л',
    wb_name:
      'Средство PROSEPT усиленного действия для удаления ржавчины и минеральных отложений Bath Acid +  с аромат цитруса. Концентрат. 0,75л',
    ozon_article: '413264552.0',
    wb_article: '149811030.0',
    ym_article: '294-075',
    wb_article_td: '294-0750',
    accuracy: '0.90',
  },
  {
    '': '28',
    id: '78',
    article: '143-20',
    ean_13: '4680008143457.0',
    name: 'Cредство для чистки коптильных камерCooky Smokeконцентрат 1:10-1:100 / 20 л',
    cost: '2781.0',
    recommended_price: '6496.0',
    category_id: '49.0',
    ozon_name:
      'Cредство для чистки коптильных камерCooky Smokeконцентрат 1:10-1:100 / 20 л',
    name_1c:
      'Cредство для чистки коптильных камерCooky Smokeконцентрат 1:10-1:100 / 20 л',
    wb_name:
      'Cредство для чистки коптильных камерCooky Smokeконцентрат 1:10-1:100 / 20 л',
    ozon_article: '',
    wb_article: '',
    ym_article: '',
    wb_article_td: '',
    accuracy: '0.89',
  },
  {
    '': '52',
    id: '132',
    article: '151-2',
    ean_13: '4680008142399.0',
    name: 'Средство для удаления граффити, маркера, краскиDuty Graffiti Maxготовый состав, аэрозоль / 2 л',
    cost: '1436.86',
    recommended_price: '3356.0',
    category_id: '40.0',
    ozon_name: 'Средство для удаления граффити PROSEPT DUTY GRAFFITI MAX, 2 л.',
    name_1c: 'Средство для удаления граффити PROSEPT DUTY GRAFFITI MAX, 2 л.',
    wb_name: 'Средство для удаления граффити PROSEPT DUTY GRAFFITI MAX, 2 л.',
    ozon_article: '451973852.0',
    wb_article: '149705845.0',
    ym_article: '151-2',
    wb_article_td: '',
    accuracy: '0.85',
  },
]);
