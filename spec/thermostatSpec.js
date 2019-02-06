'use strict';

var Thermostat = require('../src/thermostat');

describe('Thermostat', function(){
 
  var thermostat = null;

  beforeEach(function(){
    thermostat = new Thermostat();
  });


  it('starts with temperature at 20', function(){
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it('has a minimum temperature of 10', function(){
    expect(thermostat._minTemp).toEqual(10);
  })

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

  describe('.ismaximumTemperature', function(){
    it('sets maximum temperature to 25 when power saving is on', function(){
      thermostat._temp = 25
      expect(thermostat.isMaximumTemperature()).toEqual(true);
    });

    it('sets maximum temperature to 32 if power saving mode is on', function(){
      thermostat._powerSavingMode = false;
      thermostat._temp = 32
      expect(thermostat.isMaximumTemperature()).toEqual(true);
    })
  });

  describe('.reset', function(){
    it('can reset temperature to 20', function(){
      thermostat.up();
      thermostat.reset();
      expect(thermostat._temp).toEqual(20);
    })
  });

  describe('.currentUsage', function(){
    it('gives you a current usage report', function(){
      thermostat._temp = 24;
      expect(thermostat.currentUsage()).toEqual('medium-usage');
    });

    it('gives you a current usage report', function(){
      thermostat._temp = 15;
      expect(thermostat.currentUsage()).toEqual('low-usage');
    });

    it('gives you a current usage report', function(){
      thermostat._temp = 29;
      expect(thermostat.currentUsage()).toEqual('high-usage');
    });
  });


});