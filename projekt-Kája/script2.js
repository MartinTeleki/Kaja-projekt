const jmenoInput = document.getElementById("jmeno");
const prijmeniInput = document.getElementById("prijmeni");
const vekInput = document.getElementById("vek");
const telefonInput = document.getElementById("telefon");
const ulozitTlacitko = document.querySelector(".ulozit");
const seznamPojistenych = document.querySelector(".seznamPojistenych");

// Funkce pro vytvoření seznamu pojištěných
function vytvorSeznamPojistenych() {
  seznamPojistenych.innerHTML = ""; // Vyčištění seznamu před vytvořením nového

  polePojistenych.forEach(function (pojisteny) {
    const novyPojisteny = document.createElement("div");
    novyPojisteny.classList.add("pojisteny");

    const informaceOPojistenem = document.createElement("p");
    informaceOPojistenem.classList.add("informace-o-pojistenem");
    informaceOPojistenem.innerHTML = `Jméno: ${pojisteny.jmeno}, <br> Příjmení: ${pojisteny.prijmeni}, <br>Věk: ${pojisteny.vek}, <br>Telefon: ${pojisteny.telefon}`;

    novyPojisteny.appendChild(informaceOPojistenem);
    seznamPojistenych.appendChild(novyPojisteny);
  });
}

// Načtení dat z localStorage, pokud jsou k dispozici
const ulozenaPolePojistenych =
  JSON.parse(localStorage.getItem("pojisteni")) || [];
const polePojistenych = ulozenaPolePojistenych;

// Volání funkce pro vytvoření seznamu po načtení stránky
vytvorSeznamPojistenych();

ulozitTlacitko.addEventListener("click", function () {
  const jmeno = jmenoInput.value;
  const prijmeni = prijmeniInput.value;
  const vek = vekInput.value;
  const telefon = telefonInput.value;

  const pojisteny = {
    jmeno: jmeno,
    prijmeni: prijmeni,
    vek: vek,
    telefon: telefon,
  };

  polePojistenych.push(pojisteny);

  localStorage.setItem("pojisteni", JSON.stringify(polePojistenych));

  vytvorSeznamPojistenych(); // Volání funkce pro vytvoření seznamu po přidání nového pojištěnce

  jmenoInput.value = "";
  prijmeniInput.value = "";
  vekInput.value = "";
  telefonInput.value = "";
});

function vytvorSeznamPojistenych() {
  seznamPojistenych.innerHTML = ""; // Vyčištění seznamu před vytvořením nového

  polePojistenych.forEach(function (pojisteny, index) {
    const novyPojisteny = document.createElement("div");
    novyPojisteny.classList.add("pojisteny");

    const informaceOPojistenem = document.createElement("p");
    informaceOPojistenem.classList.add("informace-o-pojistenem");
    informaceOPojistenem.innerHTML = `Jméno: ${pojisteny.jmeno}, <br> Příjmení: ${pojisteny.prijmeni}, <br>Věk: ${pojisteny.vek}, <br>Telefon: ${pojisteny.telefon}`;

    const smazatButton = document.createElement("button");
    smazatButton.textContent = "Smazat";
    smazatButton.addEventListener("click", function () {
      // Obsluha události kliknutí na tlačítko Smazat
      polePojistenych.splice(index, 1); // Odebrat položku z pole podle indexu
      localStorage.setItem("pojisteni", JSON.stringify(polePojistenych)); // Aktualizovat localStorage
      vytvorSeznamPojistenych(); // Znovu vytvořit seznam pojištěných
    });

    novyPojisteny.appendChild(informaceOPojistenem);
    novyPojisteny.appendChild(smazatButton); // Přidat tlačítko Smazat k záznamu
    seznamPojistenych.appendChild(novyPojisteny);
  });
}

// Volání funkce pro vytvoření seznamu po načtení stránky
vytvorSeznamPojistenych();
