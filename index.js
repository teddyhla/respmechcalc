

var x = 0;
var f = 0;

function tFRC(){
var x = document.querySelector("#height").value;
var s = document.querySelector("#gender").value;
    if (s === "female") {
      var y = ((1.39 * x)-0.4204).toFixed(2);
      return y;
    }
    else {
      var y = ((5.48 * x)-7.05).toFixed(2);
      return y;
    }
  };

function tRsComp(){
  trs = (40 * tFRC()).toFixed(2);
  return trs;
}

function calc(){
  tFRC();
  tRsComp();
document.querySelector("#answer").innerHTML = tFRC();
document.querySelector("#ans2").innerHTML = tRsComp();
};

function dP(){
  var plateauP = document.querySelector("#plateauP").value;
  var peepTot = document.querySelector("#peepTot").value;
  var dP = plateauP - peepTot;
  return dP;
};

function rSActual() {
  var tv = document.querySelector("#tidalVol").value;
  var rSActual = (tv/dP()).toFixed(2);
  return rSActual;
};

function aFRC () {
  var aFRC = (rSActual()/40).toFixed(2);
  return aFRC;
};

function pVol () {
  var peepTot = document.querySelector("#peepTot").value;
  var pVol = (rSActual() * peepTot).toFixed(2);
  return pVol;
};

function calc2(){
  document.querySelector("#deltaP").innerHTML = dP();
  document.querySelector("#cRsActual").innerHTML = rSActual();
  document.querySelector("#actualFRC").innerHTML = aFRC();
  document.querySelector("#peepVol").innerHTML = pVol();
};

function dS() {
  var tv = document.querySelector("#tidalVol").value;
  var dS = ((tv/1000) / aFRC()).toFixed(2);
  return dS;
};

function tS(){
  var tv = (document.querySelector("#tidalVol").value);
  var tS = (dS() + 1000)/aFRC();
  return tS.toFixed(2);
};

function mP() {
  var pAirwayP = document.querySelector("#peakAirwayP").value;
  var rR = document.querySelector("#respRate").value;
  var tv = document.querySelector("#tidalVol").value;
  mP = (0.098 * rR * (pAirwayP-(0.5 * dP())) * (tv/1000));
  return mP.toFixed(2);
};

function calc3(){
  document.querySelector("#dynamicStrain").innerHTML = dS();
  document.querySelector("#totalStrain").innerHTML = tS();
  document.querySelector("#mechPower").innerHTML = mP();
};

//Resistances of Airway (cmH2O/l/seconds)= (Peak airway pressure - Pleteau pressure) * (Inspiratory time in seconds / Tidal Volume in litres) //

// 18. Dynamic Strain = Tidal volume in litres / Actual FRC in litres //
// 19. Total Strain = (Tidal Volume in litres + PEEP volume in litres) / actual FRC in litres //
// 20. Mechanical Power of Respiratory System (Joules/min) = 0.098 * (RR) * (Peak airway pressure - (0.5 * driving Pressure)) * Tidal Volume in litres
/*
var rAw = 0;
var dS = 0;
var tS = 0;
var mP = 0;
function calc3() { var aFRC = document.querySelector("#actualFRC");
var tv = document.querySelector("#tidalVol").value;
  var dS = tv/aFRC;
  console.log(dS);
  document.querySelector("#dynamicStrain").innerHTML = dS;
}
*/