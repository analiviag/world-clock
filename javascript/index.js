function displayDateAndTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  losAngelesDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("hh:mm:ss [<small>]A[</small>]");

  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");

  newYorkDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  newYorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("hh:mm:ss [<small>]A[</small>]");

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");

  parisDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  parisTimeElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("hh:mm:ss [<small>]A[</small>]");
}
displayDateAndTime();
setInterval(displayDateAndTime, "1000");
