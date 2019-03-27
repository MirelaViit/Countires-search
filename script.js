function generateColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startsWith = document.querySelector(".startsWith");
const Anyletter = document.querySelector(".Anyletter");
const sort = document.querySelector(".sort");

const filterCountries = input => {
  const filtered = countries.filter(country =>
    country.toLowerCase().startsWith(input.toLowerCase())
  );

  if (sort.value === "z-a") {
    return filtered.sort((a, b) => {
      if (a > b) return -1;
      else if (b > a) return 1;
      else return 0;
    });
  } else if (sort.value === "a-z") {
    return filtered.sort((a, b) => {
      if (a > b) return 1;
      else if (b > a) return -1;
      else return 0;
    });
  }
  return filtered;
};

//funkcija 2
const searchCountries = input => {
  const filtered = countries.filter(country =>
    country.toLowerCase().includes(input.toLowerCase())
  );

  if (sort.value === "z-a") {
    return filtered.sort((a, b) => {
      if (a > b) return -1;
      else if (b > a) return 1;
      else return 0;
    });
  } else if (sort.value === "a-z") {
    return filtered.sort((a, b) => {
      if (a > b) return 1;
      else if (b > a) return -1;
      else return 0;
    });
  }
  return filtered;
};

startsWith.addEventListener("click", e => {
  e.preventDefault(); //very imp. ne loada stalno isto

  let result = document.querySelector(".result");
  const input = document.querySelector("input");
  result.innerHTML = "";
  const find = filterCountries(input.value);
  find.forEach(country => {
    const countrybox = document.createElement("div");
    countrybox.className = "countrybox";
    countrybox.textContent = country;
    countrybox.style.backgroundColor = generateColor();
    result.appendChild(countrybox);
  });
});

Anyletter.addEventListener("click", e => {
  e.preventDefault(); //very imp. ne loada stalno isto

  let result = document.querySelector(".result");
  const input = document.querySelector("input");
  result.innerHTML = "";
  const find = searchCountries(input.value);
  find.forEach(country => {
    const countrybox = document.createElement("div");
    countrybox.className = "countrybox";
    countrybox.textContent = country;
    countrybox.style.backgroundColor = generateColor();
    result.appendChild(countrybox);
  });
});
