document.querySelector("button").addEventListener("mousedown", function() {
      setTimeout(function() {
        document.querySelector("button").classList.add("pressed");
      });

      document.querySelector("button").addEventListener("mouseup", function() {
        var randomNumber1 = Math.floor(((Math.random()) * 6) + 1);
        document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

        var randomNumber2 = Math.floor(((Math.random()) * 6) + 1);
        document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

        if (randomNumber1 > randomNumber2) {
          document.getElementsByTagName("h1")[0].innerHTML = "<h1><img style='width:8rem;height:rem;' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/65/triangular-flag-on-post_1f6a9.png'>Player 1 Wins!</h1>";
        } else if (randomNumber1 < randomNumber2) {
          document.getElementsByTagName("h1")[0].innerHTML = "<h1>Player 2 Wins! <img style='width:8rem;height:rem;' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/65/triangular-flag-on-post_1f6a9.png'></h1>";
        } else {
          document.getElementsByTagName("h1")[0].innerText = "Draw!";
        }

        setTimeout(function() {
          document.querySelector("button").classList.remove("pressed");
        });
      });

  });




      document.querySelector(".container").style.width = "auto";
