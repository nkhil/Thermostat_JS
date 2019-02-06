var Thermostat = require('../src/thermostat');

describe('Thermostat', function(){
 
  var thermostat = null;

  beforeEach(function(){
    thermostat = new Thermostat();
  });


  it('starts with temperature at 20', function(){
    expect(thermostat._temp).toEqual(20);
  });

  describe('.up', function(){
    it('can increase temperature', function(){
      thermostat.up();
      expect(thermostat._temp).toEqual(21);
    });
  });

  describe('.down', function(){
    it('can decrease temperature', function(){
      thermostat.down();
      expect(thermostat._temp).toEqual(19);
    });
  })


});