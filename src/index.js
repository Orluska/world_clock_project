function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkTime = newYorkElement.querySelector(".time");
    let newYorkDate = newYorkElement.querySelector(".date");
    newYorkDate.innerHTML = moment().format("MMMM Do,YYYY");
    newYorkTime.innerHTML = `${moment()
      .tz("America/New_York")
      .format("hh:mm:ss")} <small>${moment()
      .tz("America/New_York")
      .format("a")}</small>`;
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisTime = parisElement.querySelector(".time");
    let parisDate = parisElement.querySelector(".date");
    parisDate.innerHTML = moment().format("MMMM Do,YYYY");
    parisTime.innerHTML = moment()
      .tz("Europe/Paris")
      .format("hh:mm:ss [<small>]a[</small>]");
  }

  let tokyoElement = document.querySelector("#tokyo-date");
  if (tokyoElement) {
    let tokyoDate = moment().format("MMMM Do,YYYY");
    tokyoElement.innerHTML = tokyoDate;
    let tokyoElement2 = document.querySelector("#tokyo-time");
    let tokyoTime = moment()
      .tz("Asia/Tokyo")
      .format("hh:mm:ss [<small>]a[</small>]");
    tokyoElement2.innerHTML = tokyoTime;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do,YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss [<small>]a[</small>]"
          )}</div>
        </div> 
        </br>
        <a href="/">All cities</a>`;
}
let cityselect = document.querySelector("#select-city");
cityselect.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
