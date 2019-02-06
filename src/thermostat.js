'use strict';

function Thermostat(temp, minTemp){
  this._temp = temp || 20;
  this._minTemp = minTemp || 10;
  this._powerSavingMode = true;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
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
// refactor this to return true based on instance variables
Thermostat.prototype.isMaximumTemperature = function(){
  if(this._powerSavingMode === true){
    return this._temp === this.MAX_LIMIT_PSM_ON;
  } else {
    return this._temp === this.MAX_LIMIT_PSM_OFF;
  }
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