'use strict';

function Thermostat(temp, minTemp){
  this._temp = temp || 20;
  this._minTemp = minTemp || 10;
  this._powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemp = function(){
  return this._temp;
}

Thermostat.prototype.up = function(){
  this._temp +=  1;
}

Thermostat.prototype.down = function(){
  this._temp -= 1;
}

Thermostat.prototype.maximumTemperature = function(){
  if(this._powerSavingMode === true){
    return 25
  } else { return 32 }
}

Thermostat.prototype.reset = function(){
  this._temp = 20;
}

Thermostat.prototype.currentUsage = function(){
  // this._temp < 18 ? 'low-usage' : (this._temp < 25 ? 'medium-usage' : 'high-usage');
  if(this._temp >= 25){
    return 'high-usage';
  } else if(this._temp < 25 && this._temp >= 18){
    return 'medium-usage';
  } else {
    return 'low-usage';
  }

}

module.exports = Thermostat;