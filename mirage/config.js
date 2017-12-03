export default function() {
  this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced

  this.get('/cars', function () {
    return {
      data: [{
        type: 'cars',
        id: '1',
        attributes: {
          carmake: 'Tesla',
          carmodel: 'Model X',
          carmiles: '117',
          caryear: '2017',
          carimage: '/assets/images/tesla_model-x_2017.jpg'
        }
      }, {
        type: 'cars',
        id: '2',
        attributes: {
          carmake: 'Toyota',
          carmodel: 'Rav 4',
          carmiles: '156997',
          caryear: '2007',
          carimage: '/assets/images/toyota_rav-4_2010.jpg'
        }
      }, {
        type: 'cars',
        id: '3',
        attributes: {
          carmake: 'Toyota',
          carmodel: 'Land Cruiser',
          carmiles: '193576',
          caryear: '1977',
          carimage: '/assets/images/toyota_land-cruiser_1997.jpg'
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
  this.get('/users/1', function () {
   return {
     data: {
       type: 'users',
       id: '1',
       attributes: {
         username: 'Test1',
         password: 'Pass1',
         firstname: 'Poe',
         lastname: 'Dameron',
         email: 'poe.dameron@gmail.com',
         gender: 'male',
         age: '32',
         phonenumber: '888-777-7777',
         forms: [{

         }]
       }
      }
    }
  });

  this.post('/forms', function (schema, req){

  });
}
