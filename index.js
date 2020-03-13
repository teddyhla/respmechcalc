var x = 0;
var f = 0;

function tFRC() {
  var x = Number(document.querySelector("#height").value);
  var s = document.querySelector("#gender").value;
  if (s === "female") {
    var y = ((1.39 * x) - 0.4204).toFixed(2);
    return y;
  } else {
    var y = ((5.48 * x) - 7.05).toFixed(2);
    return y;
  }
};

function tRsComp() {
  trs = (40 * tFRC()).toFixed(2);
  return trs;
}

function calc() {
  document.querySelector("#answer").innerHTML = tFRC();
  document.querySelector("#ans2").innerHTML = tRsComp();
};

function dP() {
  var plateauP = Number(document.querySelector("#plateauP").value);
  var peepTot = Number(document.querySelector("#peepTot").value);
  var dP = plateauP - peepTot;
  return dP;
};

function rSActual() {
  var tv = Number(document.querySelector("#tidalVol").value);
  var rSActual = (tv / dP()).toFixed(2);
  return rSActual;
};

function aFRC() {
  var aFRC = (rSActual() / 40).toFixed(2);
  return aFRC;
};

function pVol() {
  var peepTot = Number(document.querySelector("#peepTot").value);
  var pVol = (rSActual() * peepTot).toFixed(2);
  return pVol;
};

function calc2() {
  document.querySelector("#deltaP").innerHTML = dP();
  document.querySelector("#cRsActual").innerHTML = rSActual();
  document.querySelector("#actualFRC").innerHTML = aFRC();
  document.querySelector("#peepVol").innerHTML = pVol();
};

function rAW() {
  var plateauP = Number(document.querySelector("#plateauP").value);
  var peakairwayP = Number(document.querySelector("#peakAirwayP").value);
  var inspTime = Number(document.querySelector("#inspTime").value);
  var tv = Number(document.querySelector("#tidalVol").value);
  var rAW = ((peakairwayP - plateauP) * ((inspTime * 1000) / tv)).toFixed(2);
  return rAW;
};

function dS() {
  var tv = Number(document.querySelector("#tidalVol").value);
  var dS = ((tv / 1000) / aFRC()).toFixed(2);
  return dS;
};

function tS() {
  var tS = (dS() + 1000) / aFRC();
  return tS.toFixed(2);
};

function mP() {
  var pAirwayP = Number(document.querySelector("#peakAirwayP").value);
  var rR = Number(document.querySelector("#respRate").value);
  var tv = Number(document.querySelector("#tidalVol").value);
  mP = (0.098 * rR * (pAirwayP - (0.5 * dP())) * (tv / 1000));
  return mP.toFixed(2);
};

function calc3() {
  document.querySelector("#rAirway").innerHTML = rAW();
  document.querySelector("#dynamicStrain").innerHTML = dS();
  document.querySelector("#totalStrain").innerHTML = tS();
  document.querySelector("#mechPower").innerHTML = mP();
};

function vI() {
  var tv = Number(document.querySelector("#tidalVol").value);
  var iC = Number(document.querySelector("#inspCapacity").value);
  vI = ((tv / iC)*100);
  return vI.toFixed(2);
};

function v() {
  var res;
  var tv = Number(document.querySelector("#tidalVol").value);
  var iC = Number(document.querySelector("#inspCapacity").value);
  var fv = Number(pVol());
  res = (((tv + fv) * (1 / iC))*100);
  return res.toFixed(2);
};

function calc4() {
  document.querySelector("#vtpeepvolByIC").innerHTML = v();
  document.querySelector("#vtByIC").innerHTML = vI();
};

function deltaPVolume() {
  rSActual();
  var peepTot = Number(document.querySelector("#peepTot").value);
  deltaPVolume = ((15 - peepTot) * rSActual());
  return deltaPVolume;
}

function deltaVolume() {
  var v5 = Number(document.querySelector("#volumeAt5").value);
  var v15 = Number(document.querySelector("#volumeAt15").value);
  deltaVolume = v5 - v15;
  return deltaVolume;
}

function volumeRecruitment() {
  deltaPVolume;
  deltaVolume;
  volumeRecruitment = (deltaVolume - deltaPVolume);
  return volumeRecruitment;
}

function calc5() {
  document.querySelector("#deltaPEEPVolume").innerHTML = deltaPVolume();
  document.querySelector("#deltaVolume").innerHTML = deltaVolume();
  document.querySelector("#deltaVolumeRecruitment").innerHTML = volumeRecruitment();
};


function gx() {
  window.print();;
};
