function displayDateAndTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");

    losAngelesDateElement.innerHTML = moment().format("MMMM Do, YYYY");
    losAngelesTimeElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("[<div>]hh:mm:ss[</div>] [<small>]A[</small>]");
  }

  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");

    newYorkDateElement.innerHTML = moment().format("MMMM Do, YYYY");
    newYorkTimeElement.innerHTML = moment()
      .tz("America/New_York")
      .format("[<div>]hh:mm:ss[</div>] [<small>]A[</small>]");
  }

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");

  parisDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  parisTimeElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("[<div>]hh:mm:ss[</div>] [<small>]A[</small>]");
}

function showCity(event) {
  let citySelection = event.target.value;
  if (citySelection === "current") {
    citySelection = moment.tz.guess();
  }
  let cityName = citySelection.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(citySelection);
  let citiesSelector = document.querySelector("#cities");
  citiesSelector.innerHTML = `
   <div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
  `;
}

displayDateAndTime();
setInterval(displayDateAndTime, "1000");

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", showCity);
