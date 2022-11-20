<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>signup</title>
  <link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<input type="checkbox" id="dark-mode" class="dark-mode-checkbox visually-hidden">

    <div class="theme-container grow">
        <label for="dark-mode" class="dark-mode-label">
            Hide the Cat.
        </label>

        <!-- Content here START -->
        <div class="cat">
            <img src="https://res.cloudinary.com/liquidtime/image/upload/v1653476648/cat-walk_meqsv9.gif" alt="">
        </div>
			<div class="msg">
            <p>Don't mind the CAT!</p>
			</div>
<br>
<br>
        <div class="contact-con">
            <div class="contact">
                <p>Sign Up.</p>

                <form action="#" class="contact-form" autocomplete="off" method="">
                    <div class="input-group first">
                        <input id="user" required="" type="email" name="email" class="input">
                        <label class="user-label">Email</label>
                    </div>
                    <div class="input-group">
                        <input type="password" name="password" required class="input">
                        <label for="password" class="user-label">Password</label>

                    </div>
                    <div class="input-group first">
                        <input id="user" required="" type="text" name="text" class="input">
                        <label class="user-label">Confirm Password</label>
                    </div>
            </div>
            <div class="btn">
                <button class="cta" id="btn">
                    <span class="hover-underline-animation"> Sign Up</span>
                    <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10"
                        viewBox="0 0 46 16">
                        <path id="Path_10" data-name="Path 10"
                            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                            transform="translate(30)"></path>
                    </svg>
                </button>


            </div>
            </form>
        </div>
        <div class="footer">
            <footer>Shamba Ride</footer>
        </div>
        <!-- Content here END -->
    </div>
<!-- partial -->
  <script  src="./script.js"></script>

</body>
</html>
