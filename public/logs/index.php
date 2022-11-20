<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Login</title>
  <link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- pasrtial:index.partial.html -->
<body>
    <div class="full-screen-container">
      <div class="login-container">
        <h3 class="login-title">Welcome to Shamba Ride</h3>
        <form action="connection.php" method="post">
          <div class="input-group">
            <label>Email</label>
            <input type="email" required/>
          </div>
          <div class="input-group">
            <label>Client type</label>
            <input type="text" required/>
          </div>
          <div class="input-group">
            <label>Password</label>
            <input type="password" required/>
          </div>
          <button type="submit" class="login-button">Sign In</button>
          <br>
          <br>
          <a style="text-align:center;" href="signup/index.php">Sign up</a>
        </form>
      </div>
    </div>
  </body>
<!-- partial -->

</body>
</html>
