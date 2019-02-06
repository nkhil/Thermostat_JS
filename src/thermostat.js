
function Thermostat(temp, minTemp){
  this._temp = temp || 20;
  this._minTemp = minTemp || 10;
  this._powerSavingMode = true;
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

module.exports = Thermostat;