
function Thermostat(temp){
  this._temp = temp || 20;
}

Thermostat.prototype.up = function(){
  this._temp +=  1;
}

Thermostat.prototype.down = function(){
  this._temp -= 1;
}

module.exports = Thermostat;