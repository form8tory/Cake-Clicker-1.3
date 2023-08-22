// Copyright Form8tory
console.log("Hey, form8tory here - Don't cheat!")
var Cakes = 0;
var TotalCakes = 0;
var Cpc = 1;
var CakesPerSec = 0;
var ClickerCPS = 1;
var OvenCPS = 2;
var BankCPS = 5;
var CakeStoreCPS = 10;
var FactoryCPS = 15;
var FarmCPS = 20;
var ConsoleCPS = 40;
var WebsiteCPS = 50;
var AdCPS = 70;
var AppCPS = 100;
var CakegameCPS = 130;
var HackerCPS = 150;
var JavascriptConCPS = 200;
var YouCPS = 300;
var LuxBakCPS = 500;
var MegaFingersCPS = 2000;
var TheEndCPS = 5000;
var Clickers = 0;
var ClickerCost = 100;
var Ovens = 0;
var OvenCost = 250;
var Banks = 0;
var BankCost = 1000;
var CakeStores = 0;
var CakeStoreCost = 2500;
var Factorys = 0;
var FactoryCost = 5750;
var Farms = 0;
var FarmCost = 10000;
var Consoles = 0;
var ConsoleCost = 40000;
var Websites = 0;
var WebsiteCost = 50750;
var Ads = 0;
var AdCost = 100000;
var Apps = 0;
var AppCost = 200000;
var Cakegames = 0;
var CakegameCost = 500000;
var Hackers = 0;
var HackerCost = 1000000;
var Upgrades = 0;
var Ascends = 0;
var AscendCost = 100000000;
var JavascriptCons = 0;
var JavascriptConCost = 2000000;
var Yous = 0;
var YouCost = 5000000;
var LuxBaks = 0;
var LuxBakCost = 100000000;
var MegaFingers = 0;
var MegaFingersCost = 200000000;
var TheEnds = 0;
var TheEndCost = 400000000;

function ResetVars() {
  Cakes = 0;
  CakesPerSec = 0;
  Clickers = 0;
  ClickerCost = 100;
  Ovens = 0;
  OvenCost = 250;
  Banks = 0;
  BankCost = 1000;
  CakeStores = 0;
  CakeStoreCost = 2500;
  Factorys = 0;
  FactoryCost = 5750;
  Farms = 0;
  FarmCost = 10000;
  Consoles = 0;
  ConsoleCost = 40000;
  Websites = 0;
  WebsiteCost = 50750;
  Ads = 0;
  AdCost = 100000;
  Apps = 0;
  AppCost = 200000;
  Cakegames = 0;
  CakegameCost = 500000;
  Hackers = 0;
  HackerCost = 1000000;
  Upgrades = 0;
  JavascriptCons = 0;
  JavascriptConCost = 2000000;
  Yous = 0;
  YouCost = 5000000;
  LuxBaks = 0;
  LuxBakCost = 100000000;
  MegaFingers = 0;
  MegaFingersCost = 200000000;
  TheEnds = 0;
  TheEndCost = 400000000;
}

let lastTimestamp = Date.now();
function calculateOfflineProduction() {
  const currentTime = Date.now();
  const timeOffline = (currentTime - lastTimestamp) / 1000;
  const offlineProduction = timeOffline * CakesPerSec / 3; 
  Cakes += offlineProduction;
  TotalCakes += offlineProduction;
  lastTimestamp = currentTime;
  UpdateCakes();
};
function CakeClicked(Amount) {
    Cakes += Amount;
    TotalCakes += Amount;
    UpdateCakes();
    const clickSound = document.getElementById('clickSound');
  clickSound.play();
  
    };

function buyClicker(items, cost) {
    if (Cakes >= window[cost]) {
        window[items]++;
        Cakes -= window[cost];
        window[cost] = Math.round(window[cost] * 1.8);
        swal({

            title: "Bought",
            text: "You Bought an upgrade Successfully",
            icon: "success",
            button: "Great!",
          });
          if(window[items] == Hackers) {
            ClickerCost *= 3;
            OvenCost *= 3;
            BankCost *= 3;
            CakeStoreCost *= 3;
            FactoryCost *= 3;
            FarmCost *= 3;
            ConsoleCost *= 3;
            WebsiteCost *= 3;
            AdCost *= 3;
            AppCost *= 3;
            CakegameCost *= 3;
           }} else {
            swal({
                title: "Not enough Cakes",
                text: "You can't buy this yet!",
                icon: "error",
                button: "Ok",
              });
          }
        }
       
var CakegenTimer = setInterval(function() {
  Cakegen();   
  }, 1000);
  var Cakeclickertimer = setInterval(function() {
  UpdateCakes();
  }, 1); 

function UpdateCakes() {
  console.log("Game updated")
  CakesPerSec = Clickers * ClickerCPS + Ovens * OvenCPS + Banks * BankCPS + CakeStores * CakeStoreCPS + Factorys * FactoryCPS + Farms * FarmCPS + Consoles * ConsoleCPS + Websites * WebsiteCPS + Ads * AdCPS + Apps * AppCPS + Cakegames * CakegameCPS + Hackers * HackerCPS +  JavascriptCons  * JavascriptConCPS + Yous * YouCPS + LuxBaks * LuxBakCPS + MegaFingers * MegaFingersCPS + TheEnds * TheEndCPS;
  Upgrades = Clickers + Ovens + Banks + CakeStores + Factorys + Farms + Consoles + Websites + Ads + Apps + Cakegames + Hackers + JavascriptCons + Yous + LuxBaks + MegaFingers + TheEnds;
  document.getElementById("ClickerCost").innerHTML = ClickerCost + "$";
  document.getElementById("NumberUp").innerHTML = Upgrades;
  document.getElementById("CakePerSec").innerHTML = CakesPerSec + " Cakes Per Second";
  document.getElementById("CakeAmount").innerHTML = Math.round(Cakes) + " Cakes";
  document.getElementById("ClickerNum").innerHTML = Clickers;
  document.getElementById("OvenCost").innerHTML = OvenCost + "$";
  document.getElementById("OvenNum").innerHTML = Ovens; 
  document.getElementById("BankCost").innerHTML = BankCost + "$";
  document.getElementById("BankNum").innerHTML = Banks;
  document.getElementById("CakeStoreCost").innerHTML = CakeStoreCost + "$";
  document.getElementById("CakeStoreNum").innerHTML = CakeStores;
  document.getElementById("FactoryCost").innerHTML = FactoryCost + "$";
  document.getElementById("FactoryNum").innerHTML = Factorys;
  document.getElementById("FarmCost").innerHTML = FarmCost + "$";
  document.getElementById("FarmNum").innerHTML = Farms;
  document.getElementById("ConsoleCost").innerHTML = ConsoleCost + "$";
  document.getElementById("ConsoleNum").innerHTML = Consoles;
  document.getElementById("WebsiteCost").innerHTML = WebsiteCost + "$";
  document.getElementById("WebsiteNum").innerHTML = Websites;
  document.getElementById("AdCost").innerHTML = AdCost + "$";
  document.getElementById("AdNum").innerHTML = Ads;
  document.getElementById("AppCost").innerHTML = AppCost + "$";
  document.getElementById("AppNum").innerHTML = Apps;
  document.getElementById("CakegameCost").innerHTML =  CakegameCost + "$";
  document.getElementById("CakegameNum").innerHTML = Cakegames;
  document.getElementById("HackerCost").innerHTML = HackerCost + "$";
  document.getElementById("HackerNum").innerHTML = Hackers;
  document.getElementById("JavaScriptConCost").innerHTML = JavascriptConCost + "$";
  document.getElementById("JavaScriptConNum").innerHTML = JavascriptCons;
  document.getElementById("YouCost").innerHTML = YouCost + "$";
  document.getElementById("YouNum").innerHTML = Yous;
  document.getElementById("LuxBakCost").innerHTML = LuxBakCost + "$";
  document.getElementById("LuxBakNum").innerHTML = LuxBaks;
  document.getElementById("MegaFingersCost").innerHTML = MegaFingersCost + "$";
  document.getElementById("MegaFingersNum").innerHTML = MegaFingers;
  document.getElementById("AscendNum").innerHTML = Ascends;
  document.getElementById("AscendCost").innerHTML = AscendCost + "$";
  document.getElementById("TheEndNum").innerHTML = TheEnds;
  document.getElementById("TheEndCost").innerHTML = TheEndCost + "$";
  document.title = Math.round(Cakes) + " Cakes - Cake Clicker";

}

function Cakegen() {
  console.log("Cakes generated");
  Cakes += Clickers * ClickerCPS;
  Cakes += Ovens * OvenCPS;
  Cakes += Banks * BankCPS;
  Cakes += CakeStores * CakeStoreCPS;
  Cakes += Factorys * FactoryCPS;
  Cakes += Farms * FarmCPS;
  Cakes += Consoles * ConsoleCPS;
  Cakes += Websites * WebsiteCPS;
  Cakes += Ads * AdCPS;
  Cakes += Apps * AppCPS;
  Cakes += Cakegames * CakegameCPS;
  Cakes += Hackers * HackerCPS;
  Cakes += JavascriptCons * JavascriptConCPS;
  Cakes += Yous * YouCPS;
  Cakes += LuxBaks * LuxBakCPS;
  Cakes += MegaFingers * MegaFingersCPS;
  Cakes += TheEnds * TheEndCPS;
  UpdateCakes();
}

function SaveGame() {
  console.log("Game was saved");
  var GameSave = {
    Cakes: Cakes,
    ClickerCPS: ClickerCPS,
    OvenCPS: OvenCPS,
    BankCPS: BankCPS,
    CookieStoreCPS: CakeStoreCPS,
    FactoryCPS: FactoryCPS,
    FarmCPS: FarmCPS,
    ConsoleCPS: ConsoleCPS,
    WebsiteCPS: WebsiteCPS,
    AdCPS: AdCPS,
    AppCPS: AppCPS,
    CakegameCPS: CakegameCPS,
    HackerCPS: HackerCPS,
    Clickers: Clickers,
    Ovens: Ovens,
    Banks: Banks,
    CakeStores: CakeStores,
    Factorys: Factorys,
    Farms: Farms,
    Consoles: Consoles,
    Websites: Websites,
    Ads: Ads,
    Apps: Apps,
    Cakegames: Cakegames,
    Hackers: Hackers,
    ClickerCost: ClickerCost,
    OvenCost: OvenCost,
    BankCost: BankCost,
    CakeStoreCost: CakeStoreCost,
    FactoryCost: FactoryCost,
    FarmCost: FarmCost,
    ConsoleCost: ConsoleCost,
    WebsiteCost: WebsiteCost,
    AdCost: AdCost,
    AppCost: AppCost,
    CakegameCost: CakegameCost,
    HackerCost: HackerCost,
    Ascends: Ascends,
    AscendCost: AscendCost,
    Cpc: Cpc,
    TotalCakes: TotalCakes,
    JavascriptConCost: JavascriptConCost,
    JavascriptCons: JavascriptCons,
    JavascriptConCPS: JavascriptConCPS,
    YouCost: YouCost,
    Yous: Yous,
    YouCPS: YouCPS,
    LuxBakCost: LuxBakCost,
    LuxBaks: LuxBaks,
    LuxBakCPS: LuxBakCPS,
    MegaFingersCost: MegaFingersCost,
    MegaFingers: MegaFingers,
    MegaFingersCPS: MegaFingersCPS,
    TheEndCost: TheEndCost,
    TheEnds: TheEnds,
    TheEndCPS: TheEndCPS
  };
  localStorage.setItem("GameSave", JSON.stringify(GameSave));
}

var Savegame = setInterval(function() {
  SaveGame();
 }, 10000);
 

function LoadVar(Name, SavedGame) {
  if (typeof SavedGame[Name] !== "undefined") {
    window[Name] = SavedGame[Name];
  }
}

function LoadGame() {
    var SavedGame = JSON.parse(localStorage.getItem("GameSave"));
    LoadVar("Cakes", SavedGame);
    LoadVar("ClickerCPS", SavedGame);
    LoadVar("OvenCPS", SavedGame);
    LoadVar("BankCPS", SavedGame);
    LoadVar("CakeStoreCPS", SavedGame);
    LoadVar("FactoryCPS", SavedGame);
    LoadVar("FarmCPS", SavedGame);
    LoadVar("ConsoleCPS", SavedGame);
    LoadVar("WebsiteCPS", SavedGame);
    LoadVar("AdCPS", SavedGame);
    LoadVar("AppCPS", SavedGame);
    LoadVar("CakegameCPS", SavedGame);
    LoadVar("HackerCPS", SavedGame);
    LoadVar("Clickers", SavedGame);
    LoadVar("Ovens", SavedGame);
    LoadVar("Banks", SavedGame);
    LoadVar("CakeStores", SavedGame);
    LoadVar("Factorys", SavedGame);
    LoadVar("Farms", SavedGame);
    LoadVar("Consoles", SavedGame);
    LoadVar("Websites", SavedGame);
    LoadVar("Ads", SavedGame);
    LoadVar("Apps", SavedGame);
    LoadVar("Cakegames", SavedGame);
    LoadVar("Hackers", SavedGame);
    LoadVar("ClickerCost", SavedGame);
    LoadVar("OvenCost", SavedGame);
    LoadVar("BankCost", SavedGame);
    LoadVar("CakeStoreCost", SavedGame);
    LoadVar("FactoryCost", SavedGame);
    LoadVar("FarmCost", SavedGame);
    LoadVar("ConsoleCost", SavedGame);
    LoadVar("WebsiteCost", SavedGame);
    LoadVar("AdCost", SavedGame);
    LoadVar("AppCost", SavedGame);
    LoadVar("CakegameCost", SavedGame);
    LoadVar("HackerCost", SavedGame);
    LoadVar("Ascends", SavedGame);
    LoadVar("AscendCost", SavedGame);
    LoadVar("Cpc", SavedGame);
    LoadVar("TotalCakes", SavedGame);
    LoadVar("JavaScriptConCost", SavedGame);
    LoadVar("JavaScriptCons", SavedGame);
    LoadVar("JavaScriptConCPS", SavedGame);
    LoadVar("YouCost", SavedGame);
    LoadVar("Yous", SavedGame);
    LoadVar("YouCPS", SavedGame);
    LoadVar("LuxBakCost", SavedGame);
    LoadVar("LuxBaks", SavedGame);
    LoadVar("LuxBakCPS", SavedGame);
    LoadVar("MegaFingersCost", SavedGame);
    LoadVar("MegaFingers", SavedGame);
    LoadVar("MegaFingersCPS", SavedGame);
    LoadVar("TheEndCost", SavedGame);
    LoadVar("TheEnds", SavedGame);
    LoadVar("TheEndCPS", SavedGame);     
  }



window.onload = function() {
  LoadGame();
}
function showLoadingScreen() {
  document.getElementById("loading-screen").style.display = "flex";
}

function hideLoadingScreen() {
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("game-content").style.display = "block";
}

window.addEventListener("load", function() {
  showLoadingScreen();
  setTimeout(function() {
    UpdateCakes();

     hideLoadingScreen();
  },2000);
});
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey) {
    if (event.key === 's') {
      event.preventDefault();
      SaveGame();
      swal({

          title: "Saved Game",
          text: "You saved your game manually.",
          icon: "success",
          button: "I know",
        });
    } else if (event.key === 'r') {
      event.preventDefault();
      ResetGame();
    }
  }
});
function ResetGame() {
  swal({
      title: "Are you sure?",
      text: "This action will reset the game. You will lose all progress.",
      icon: "warning",
      buttons: ["Cancel", "Reset"],
      dangerMode: true,
  }).then((confirmed) => {
      if (confirmed) {
        console.log("The game was reset")
          localStorage.clear();
          location.reload();
      }
  });
}
function ascend() {
  if (Cakes >= AscendCost) {
    swal({
      title: "Ascend Confirmation",
      text: "Are you sure you want to ascend?",
      icon: "warning",
      buttons: ["Cancel", "Ascend"],
      dangerMode: true,
    }).then((willAscend) => {
      if (willAscend) {
        localStorage.clear();
        ClickerCPS *= 1.5;
        OvenCPS *= 1.5;
        BankCPS *= 1.5;
        CakeStoreCPS *= 1.5;
        FactoryCPS *= 1.5;
        FarmCPS *= 1.5;
        ConsoleCPS *= 1.5;
        WebsiteCPS *= 1.5;
        AdCPS *= 1.5;
        AppCPS *= 1.5;
        CakegameCPS *= 1.5;
        HackerCPS *= 1.5;
        JavascriptConCPS *= 1.5;
        YouCPS *= 1.5;
        LuxBakCPS *= 1.5;
        MegaFingersCPS *= 1.5;
        TheEndCPS *= 1.5;
        Ascends++;
        Cpc++;
        AscendCost *= 2;
        ResetVars();
        SaveGame();
        location.reload();
      }
    });
  } else {
    swal({
      title: "Not Enough Cakes",
      text: "You don't have enough cakes to ascend.",
      icon: "error",
    });
  }
}
 const backgroundSound = document.getElementById("backgroundSound");
document.addEventListener('click', () => {
  backgroundSound.addEventListener("ended", () => {
    backgroundSound.currentTime = 0; 
    backgroundSound.play();        
  });
  backgroundSound.muted = false;
  backgroundSound.play()
  });
  const MAX_REQUESTS_PER_SECOND = 2000000000;


const requestTimestamps = [];


function isRequestFrequencyTooHigh() {
    const currentTime = Date.now();
    const timeWindow = 1000; 

   
    while (requestTimestamps.length > 0 && requestTimestamps[0] < currentTime - timeWindow) {
        requestTimestamps.shift();
    }

 
    if (requestTimestamps.length >= MAX_REQUESTS_PER_SECOND) {
       localStorage.clear();
       location.reload();
        return true;
    }

    
    requestTimestamps.push(currentTime);
    return false;
};
// End of code