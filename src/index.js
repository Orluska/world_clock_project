function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkTime = newYorkElement.querySelector(".time");
  let newYorkDate = newYorkElement.querySelector(".date");
  newYorkDate.innerHTML = moment().format("MMMM Do,YYYY");
  newYorkTime.innerHTML = `${moment()
    .tz("America/New_York")
    .format("hh:mm:ss")} <small>${moment()
    .tz("America/New_York")
    .format("a")}</small>`;

  let parisElement = document.querySelector("#paris");
  let parisTime = parisElement.querySelector(".time");
  let parisDate = parisElement.querySelector(".date");
  parisDate.innerHTML = moment().format("MMMM Do,YYYY");
  parisTime.innerHTML = moment()
    .tz("Europe/Paris")
    .format("hh:mm:ss [<small>]a[</small>]");

  let tokyoElement = document.querySelector("#tokyo-date");
  let tokyoDate = moment().format("MMMM Do,YYYY");
  tokyoElement.innerHTML = tokyoDate;
  let tokyoElement2 = document.querySelector("#tokyo-time");
  let tokyoTime = moment()
    .tz("Asia/Tokyo")
    .format("hh:mm:ss [<small>]a[</small>]");
  tokyoElement2.innerHTML = tokyoTime;
}
updateTime();
setInterval(updateTime, 1000);
