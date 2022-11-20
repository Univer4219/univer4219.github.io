<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Homepage</title>
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'><link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<form action="public/logs/index.php">
<section class="landing-page">
  <div class="container">
    <div class="content">
      <div class="text">
        <div class="top">
          <h3 class="mini-title">Shamba Ride.</h3>
        </div>
        <div class="middle">
          <h2 class="big-title">
            Getting you a  <strong>home anywhere you go.</strong>
          </h2>
          <p class="description">
          Shamba Ride connect tenants to landlords connectin them to homes.
          </p>
          <button class="btn">Login</button>
        </div>
      </form>
        <div class="bottom">
          <ul class="list-media">
            <li>
              <a href="#" class=""><i class="fab fa-facebook"></i></a>
            </li>
            <li>
              <a href="#" class=""><i class="fab fa-instagram"></i></a>
            </li>
          </ul>
          <p class="desc">
            shambaride@proton.me
          </p>
        </div>
      </div>
      <div class="video" >
        <span class="search">
          <i class="fas fa-search"></i>
        </span>
        <span class="burger-menu">
          <i class="fas fa-bars"></i>
        </span>
        <span class="video-play">
          <i class="fas fa-play" onclick="this.play();" preload="auto">
          <video width="320" height="240" controls  id="thevideo" style="display:none; padding: 0px;">
        <source src="s.mp4" type="video/mp4">  </video></i>
        </span>

          <script>
$(document).ready(function() {
   $('.custom-th').click(function() {
       $('.custom-th').fadeOut('fast', function() {
           $("#thevideo").css("display","block");
           $("video").click();
           });
       });
   });
</script>
      </div>
    </div>
  </div>
</section>
<!-- partial -->

</body>
</html>
