export default function() {
  this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced

  this.get('/cars', function () {
    return {
      data: [{
        type: 'cars',
        id: '1',
        attributes: {
          carmake: 'Incom Corporation',
          carmodel: 'X-wing Fighter',
          carmiles: '9994',
          caryear: '2015'
        }
      }, {
        type: 'cars',
        id: '2',
        attributes: {
          carmake: 'Sienar Fleet Systems',
          carmodel: 'TIE Fighter',
          carmiles: '9997',
          caryear: '2077'
        }
      }, {
        type: 'cars',
        id: '3',
        attributes: {
          carmake: 'Corellian Engineering Corporation',
          carmodel: 'Millennium Falcon',
          carmiles: '9999',
          caryear: '1977'
        }
      }]
    };
  });
}
