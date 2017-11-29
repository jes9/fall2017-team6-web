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
          caryear: '2015',
          carimage: '/assets/images/T70XWing-Fathead.png'
        }
      }, {
        type: 'cars',
        id: '2',
        attributes: {
          carmake: 'Sienar Fleet Systems',
          carmodel: 'TIE Fighter',
          carmiles: '9997',
          caryear: '2077',
          carimage: '/assets/images/tie-fighter.jpg'
        }
      }, {
        type: 'cars',
        id: '3',
        attributes: {
          carmake: 'Corellian Engineering Corporation',
          carmodel: 'Millennium Falcon',
          carmiles: '9999',
          caryear: '1977',
          carimage: '/assets/images/MillenniumFalcon2-Fathead.png'
        }
      }]
    };
  });

  this.get('/forms/1', function () {
    return {
      data: {
        type: 'form',
        id: '1',
        attributes: {
          carmodel: 'X-wing Fighter',
          carimage: '/assets/images/T70XWing-Fathead.png',
          driving: 'Accelerating',
          engine: 'Cold',
          fuel: 'Unleaded',
          ro: 'Always',
          speed: '58',
          rpm: '0',
          temp: 'Hot (70° or above)',
          when: 'Suddenly',
          problem: 'Hard starting',
          other1: 'Test other notes',
        }
      }
    }
  });
}
