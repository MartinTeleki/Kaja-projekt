const jmenoInput = document.getElementById("jmeno");
const prijmeniInput = document.getElementById("prijmeni");
const vekInput = document.getElementById("vek");
const telefonInput = document.getElementById("telefon");
const ulozitTlacitko = document.querySelector(".ulozit");
const seznamPojistenych = document.querySelector(".seznamPojistenych");
const informace = document.querySelector(".informace");
const registrace = document.querySelector(".registrace");
const pojisteni = document.querySelector(".pojisteni");
const kontakt = document.querySelector(".kontakt");
const novyPojistenec = document.querySelector(".novyPojistenec");
const pridatPojisteni = document.querySelector(".informace-o-pojistenem");
const articleInfo = document.querySelector(".info");
const infoKontakt = document.querySelector(".infoKontakt");
const nadpisPojisteni = document.querySelector(".nadpisPojisteni");
console.log(nadpisPojisteni);
console.log(pridatPojisteni);
console.log(registrace);
console.log(informace);

function vytvorSeznamPojistenych() {
  seznamPojistenych.innerHTML = "";

  polePojistenych.forEach(function (pojisteny, index) {
    const novyPojisteny = document.createElement("div");
    novyPojisteny.classList.add("pojisteny");

    const informaceOPojistenem = document.createElement("div");
    informaceOPojistenem.classList.add("informace-o-pojistenem");
    informaceOPojistenem.innerHTML = `<div>Jméno: ${pojisteny.jmeno}</div><div>Příjmení: ${pojisteny.prijmeni}</div><div>Věk: ${pojisteny.vek}</div><div>Telefon: ${pojisteny.telefon}</div>`;

    const smazatButton = document.createElement("button");
    smazatButton.classList.add("smazat");
    smazatButton.textContent = "Smazat";
    smazatButton.addEventListener("click", function () {
      polePojistenych.splice(index, 1);
      localStorage.setItem("pojisteni", JSON.stringify(polePojistenych));
      vytvorSeznamPojistenych();
    });

    novyPojisteny.appendChild(informaceOPojistenem);
    novyPojisteny.appendChild(smazatButton);
    seznamPojistenych.appendChild(novyPojisteny);
  });
}

const ulozenaPolePojistenych =
  JSON.parse(localStorage.getItem("pojisteni")) || [];
const polePojistenych = ulozenaPolePojistenych;

vytvorSeznamPojistenych();

ulozitTlacitko.addEventListener("click", function () {
  const jmeno = jmenoInput.value;
  const prijmeni = prijmeniInput.value;
  const vek = vekInput.value;
  const telefon = telefonInput.value;

  function jeCislo(text) {
    return /^\d+$/.test(text);
  }

  if (
    jmeno.trim() === "" ||
    prijmeni.trim() === "" ||
    vek.trim() === "" ||
    telefon.trim() === ""
  ) {
    alert("Všechna pole musí být vyplněna.");
    return;
  }

  if (!jeCislo(vek)) {
    alert("Věk musí být číslo.");
    return;
  }

  if (!jeCislo(telefon)) {
    alert("Telefon musí obsahovat pouze čísla.");
    return;
  }

  const pojisteny = {
    jmeno: jmeno,
    prijmeni: prijmeni,
    vek: vek,
    telefon: telefon,
  };

  polePojistenych.push(pojisteny);

  localStorage.setItem("pojisteni", JSON.stringify(polePojistenych));

  vytvorSeznamPojistenych();

  jmenoInput.value = "";
  prijmeniInput.value = "";
  vekInput.value = "";
  telefonInput.value = "";

  novyPojistenec.style.display = "none";
});

pojisteni.addEventListener("click", () => {
  const pridatPojisteni = document.querySelectorAll(".informace-o-pojistenem");
  const smazatButtons = document.querySelectorAll(".smazat");

  pridatPojisteni.forEach((element) => {
    element.style.display = "block";
  });

  novyPojistenec.style.display = "none";
  articleInfo.style.display = "none";
  infoKontakt.style.display = "none";
  nadpisPojisteni.style.display = "block";

  smazatButtons.forEach((button) => {
    button.style.display = "block";
  });
});

registrace.addEventListener("click", () => {
  const pridatPojisteni = document.querySelectorAll(".informace-o-pojistenem");
  const smazatButtons = document.querySelectorAll(".smazat");

  pridatPojisteni.forEach((element) => {
    element.style.display = "none";
  });

  smazatButtons.forEach((button) => {
    button.style.display = "none";
  });

  novyPojistenec.style.display = "block";
  articleInfo.style.display = "none";
  infoKontakt.style.display = "none";
  nadpisPojisteni.style.display = "none";
});

informace.addEventListener("click", () => {
  const pridatPojisteni = document.querySelectorAll(".informace-o-pojistenem");
  const smazatButtons = document.querySelectorAll(".smazat");

  console.log(pridatPojisteni, smazatButtons);

  pridatPojisteni.forEach((element) => {
    element.style.display = "none";
  });

  smazatButtons.forEach((button) => {
    button.style.display = "none";
  });

  novyPojistenec.style.display = "none";
  articleInfo.style.display = "block";
  infoKontakt.style.display = "none";
  nadpisPojisteni.style.display = "none";
});

kontakt.addEventListener("click", () => {
  const pridatPojisteni = document.querySelectorAll(".informace-o-pojistenem");
  const smazatButtons = document.querySelectorAll(".smazat");

  console.log("pes ?");

  pridatPojisteni.forEach((element) => {
    element.style.display = "none";
  });

  smazatButtons.forEach((button) => {
    button.style.display = "none";
  });

  novyPojistenec.style.display = "none";
  articleInfo.style.display = "none";
  infoKontakt.style.display = "block";
  nadpisPojisteni.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const pridatPojisteni = document.querySelectorAll(".informace-o-pojistenem");
  pridatPojisteni.forEach((element) => {
    element.style.display = "none";
  });

  const smazatButtons = document.querySelectorAll(".smazat");
  smazatButtons.forEach((button) => {
    button.style.display = "none";
  });
  nadpisPojisteni.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const navigace = document.querySelector("nav ul");
  const tlacitka = navigace.querySelectorAll("li a");

  tlacitka.forEach((tlacitko) => {
    tlacitko.addEventListener("click", function (event) {
      event.preventDefault();

      tlacitka.forEach((t) => t.classList.remove("active"));

      this.classList.add("active");
    });
  });
});
