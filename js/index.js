var introTitles = document.querySelectorAll(".intro-titles h1");

introTitles.forEach((item) => {
  item.addEventListener(
    "mouseover",
    function (event) {
      if (item.innerHTML == "Elias Tracy") {
        document.getElementsByClassName("slider-images")[0].style.display =
          "block";
      } else if (item.innerHTML == "Programming") {
        document.getElementsByClassName("slider-images")[1].style.display =
          "block";
      } else if (item.innerHTML == "Experience") {
        document.getElementsByClassName("slider-images")[2].style.display =
          "block";
      } else if (item.innerHTML == "Service") {
        document.getElementsByClassName("slider-images")[3].style.display =
          "block";
      }

      setTimeout(function () {
        event.target.style.color = "";

        // console.log(document.getElementsByClassName("slider-images")[0]);
        // var images = document.getElementsByClassName("slider-images");
        // images.forEach((image) => {
        //   console.log(image);
        //   image.style.display = "none";
        // });
      }, 100);
    },
    false
  );
});
