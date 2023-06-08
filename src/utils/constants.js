export const LOGO = 'https://tracktrades.in/assets/images/tracktrades_logo.svg';

export const BASKET_DATA = [
    { id: 1, instrument: 'NIFTY 18MAY23 18200 CE', bs: 'B', type: 'MIS', qty: '50', price: '120.5', trigger: ''},
    { id: 2, instrument: 'NIFTY 18MAY23 18200 PE', bs: 'S', type: 'NRML', qty: '50', price: '98.1', trigger: ''},
    { id: 3, instrument: 'NIFTY 18MAY23 19200 CE', bs: 'B', type: 'MIS', qty: '50', price: '80.3', trigger: ''},
];

export const CALLS = Array(13).fill(
    Object.assign({}, {
      oiBuildup: 'Long buildup',
      iv: 9.4,
      oi: '35K',
      volume: '1.25K',
      changePercentage: '+123.5%',
      ltp: '1,245.3',
    })
)  

export const PUTS = Array(13).fill(
    Object.assign({}, {
      ltp: '15.3',
      changePercentage: '-44.2%',
      volume: 982,
      oi: '1.4K',
      iv: 9.2,
      oiBuildup: 'Long unwinding',
    })
)  