
var staff = [
    {
      src: "./songs/vid1.mp4",
      p: "Protein is important for keeping you full and focused, so having enough at lunch is essential during you diet. You don't want to be hungry again before the end of your workday! These healthy recipes are easy , and delicious,. So here we have for you 5 high protein lunch ideas for weight loss that are great choices to keep you on track and stay full and healthy!",
      photo: "./songs/vid1.png",
    },
    {
      src: "./songs/vid2.mp4",
      p: "Chicken Fricassée is a traditional French chicken stew made with browned chicken pieces braised in a creamy white mushroom sauce. A rustic family style meal that's easy enough for midweek, it's almost like the white sauce version of Coq au Vin - except it's so much faster to make!",
      photo: "./songs/vid2.png",
    },
    {
      src: "./songs/vid3.mp4",
      p: "Healthy meal recipes should be cheap and easy to make at home. This rice bowl is not only low calorie and cheap, but it’s also beautifully gourmet. ",
      photo: "./songs/vid3.png",
    },
    {
      src: "./songs/vid4.mp4",
      p: "This low calorie omelette recipe has everything you love about this brunch staple; light and fluffy eggs and plenty of fresh vegetables, but with fewer calories and fat! It’s healthy, delicious and perfectly spiced!",
      photo: "./songs/vid4.png",
    },
    {
      src: "./songs/vid5.mp4",
      p: "A quick, zippy slaw of Fuji apple, and fresh parsley transform a typical post-Turkey Day sandwich—Brussels sprouts and a toasted, nutty whole-grain bread provide the perfect texture and crunch. ",
      photo: "./songs/vid5.png",
    }
  ];

    $(document).ready(function() {
      $("#add").click(function() {
        var nextVideo = staff.shift();
        if (!nextVideo) {
          alert("No More Meals to add");
          return;
        }
        var vidcontainer = $("<div class='video-container'></div>");




        var video = $("<video class= 'vid' width='800px'  controls> <source src='" + nextVideo.src + "'<source src='movie.ogg' type='video/ogg'> Your browser does not support the video tag. </video> ");
        var p = $("<p>" + nextVideo.p + "</p>");
        var photo = $("<img src="+nextVideo.photo+" >");
        var remove = $("<button class='removebt'><img id='hungryy' src='./songs/dont.jfif'></button>")
        vidcontainer.append(video, p, photo,remove);
        $("#videos").append(vidcontainer);
        remove.click(function() {
          vidcontainer.remove();
        });
      });
    });