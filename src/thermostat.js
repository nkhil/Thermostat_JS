
function Thermostat(temp, minTemp){
  this._temp = temp || 20;
  this._minTemp = minTemp || 10;
}

Thermostat.prototype.up = function(){
  this._temp +=  1;
}

Thermostat.prototype.down = function(){
  this._temp -= 1;
}

module.exports = Thermostat;