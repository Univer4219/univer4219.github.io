<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sambi Agent Login</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="assets/sambi.png"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="login/vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="login/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="signup/vendor/animate/animate.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="login/vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="login/vendor/select2/select2.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="login/css/util.css">
	<link rel="stylesheet" type="text/css" href="signup/css/signup.css">
<!--===============================================================================================-->
</head>
<body>
    <div class="container"><h3 style="text-align: center; margin-top: 50px; color: #fff;">SambiEstate Agent Login/Sign Up</h3></div>
    <nav class="main-nav">
        <ul>
            <li><a class="signin" href="#0">Sign in</a></li>
            <li><a class="signup" href="#0">Sign up</a></li>
        </ul>
    </nav>
    
    <div class="user-modal">
            <div class="user-modal-container">
                <ul class="switcher">
                    <li><a href="#0">Sign in</a></li>
                    <li><a href="#0">New account</a></li>
                </ul>
    
                <div id="login">
                    <form class="form" method="post" action="connection.php">
                        <p class="fieldset">
                            <label class="image-replace email" for="signin-email">E-mail</label>
                            <input class="full-width has-padding has-border" id="signin-email" name="email"type="email" placeholder="E-mail">
                            <span class="error-message">An account with this email address does not exist!</span>
                        </p>
   
                        <p class="fieldset">
                            <label class="image-replace password" for="signin-password">Password</label>
                            <input class="full-width has-padding has-border" name="password" id="signin-password" type="password"  placeholder="Password">
                            <a href="#0" class="hide-password">Show</a>
                            <span class="error-message">Wrong password! Try again.</span>
                        </p>
    
                        <p class="fieldset">
                            <input type="checkbox" id="remember-me" checked>
                            <label for="remember-me">Remember me</label>
                        </p>
    
                        <p class="fieldset">
                            <input class="full-width" type="submit" value="Login">
                        </p>
                    </form>
                    
                    <p class="form-bottom-message"><a href="#0">Forgot your password?</a></p>
                    <!-- <a href="#0" class="close-form">Close</a> -->
                </div>
    
                <div id="signup">
                    <form class="form" action="connection.php" method="post">
                        <p class="fieldset">
                            <label class="image-replace username" for="signup-username">Username</label>
                            <input class="full-width has-padding has-border" name="username"id="signup-username" type="text" placeholder="Username">
                            <span class="error-message">Your username can only contain numeric and alphabetic symbols!</span>
                        </p>
    
                        <p class="fieldset">
                            <label class="image-replace email" for="signup-email">E-mail</label>
                            <input class="full-width has-padding has-border"name="email" id="signup-email" type="email" placeholder="E-mail">
                            <span class="error-message">Enter a valid email address!</span>
                        </p>
    
                        <p class="fieldset">
                            <label class="image-replace password" for="signup-password">Password</label>
                            <input class="full-width has-padding has-border" id="signup-password" type="password"  placeholder="Password">
                            <a href="#0" class="hide-password">Show</a>
                            <span class="error-message">Your password has to be at least 6 characters long!</span>
                        </p>
    
                        <p class="fieldset">
                            <input type="checkbox" id="accept-terms">
                            <label for="accept-terms">I agree to the <a class="accept-terms" href="#0">Terms</a></label>
                        </p>
    
                        <p class="fieldset">
                            <input class="full-width has-padding" type="submit" value="Create account">
                        </p>
                    </form>
    
                    <!-- <a href="#0" class="cd-close-form">Close</a> -->
                </div>
    
                <div id="reset-password">
                    <p class="form-message">Lost your password? Please enter your email address.</br> You will receive a link to create a new password.</p>
    
                    <form class="form">
                        <p class="fieldset">
                            <label class="image-replace email" for="reset-email">E-mail</label>
                            <input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="E-mail">
                            <span class="error-message">An account with this email does not exist!</span>
                        </p>
    
                        <p class="fieldset">
                            <input class="full-width has-padding" type="submit" value="Reset password">
                        </p>
                    </form>
    
                    <p class="form-bottom-message"><a href="#0">Back to log-in</a></p>
                </div>
                <a href="#0" class="close-form">Close</a>
            </div>
        </div>

<!--===============================================================================================-->	
	<script src="login/vendor/jquery/jquery-3.2.1.min.js"></script>
    <!--===============================================================================================-->
        <script src="login/vendor/bootstrap/js/popper.js"></script>
        <script src="login/vendor/bootstrap/js/bootstrap.min.js"></script>
    <!--===============================================================================================-->
        <script src="login/vendor/select2/select2.min.js"></script>
    <!--===============================================================================================-->
        <script src="login/vendor/tilt/tilt.jquery.min.js"></script>
        <script >
            $('.js-tilt').tilt({
                scale: 1.1
            })
        </script>
    <!--===============================================================================================-->
        <script src="signup/js/script.js"></script>
    
</body>
</html>