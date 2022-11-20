<?php
header("Refresh:5;url= ../index.php");
?>
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>shamba ride</title>
  <link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<input type="range" min="40" max="400" value="40" class="rotate-slider">

<GUI>
  <carteira>
    <icone_dinheiro>🚴</icone_dinheiro><total_dinheiro>
  </total_dinheiro>

  </carteira>
  </GUI>


<div class="wrapper">

    <div class="ground">

        <!-- Sky -->
        <div class="sun">☀️</div>
        <div class="cloud cloud-1">☁️</div>
        <div class="cloud cloud-2">☁️</div>

        <!-- Roads -->
        <div class="road road-1"></div>
        <div class="road road-2"></div>
        <div class="road road-3"></div>
        <div class="road road-4"></div>
        <div class="road road-5"></div>
        <div class="road road-6"></div>
        <div class="road road-7"></div>

        <!-- Buildings -->
        <div class="house house-1" id="casa1">🏠</div>
        <div class="house house-2">🏠</div>
        <div class="house house-3">🏠</div>
        <div class="house house-4">🏠</div>
        <div class="house house-5">🏠</div>
        <div class="house house-6">🏠</div>
        <div class="house house-7">🏠</div>
        <div class="house house-8">🏠</div>
        <div class="house house-9">🏠</div>
        <div class="house house-10">🏠</div>
        <div class="house house-11">🏠</div>
        <div class="house house-12">🏠</div>
        <div class="house house-13">🏠</div>
        <div class="house house-14">🏠</div>
        <div class="house house-15">🏠</div>
        <div class="house house-16">🏠</div>
        <div class="house house-17">🏠</div>
        <div class="house house-18">🏠</div>
        <div class="house house-19">🏠</div>
        <div class="house house-20">🏠</div>
        <div class="house house-21">🏠</div>
        <div class="house house-22">🏠</div>
        <div class="house house-23">🏠</div>
        <div class="house house-24">🏠</div>
        <div class="house house-25">🏠</div>
        <div class="house house-26">🏠</div>
        <div class="house house-27">🏠</div>
        <div class="house house-28">🏠</div>
        <div class="house house-29">🏠</div>
        <div class="house house-30">🏠</div>
        <div class="house house-31">🏠</div>
        <div class="house house-32">🏠</div>
        <div class="house house-33">🏠</div>
        <div class="house house-34">🏠</div>
        <div class="house house-35">🏠</div>
        <div class="house house-36">🏠</div>
        <div class="house house-37">🏠</div>
        <div class="house house-38">🏠</div>
        <div class="house house-39">🏠</div>
        <div class="house house-40">🏠</div>
        <div class="house house-41">🏠</div>
        <div class="house house-42">🏠</div>
        <div class="house house-43">🏠</div>
        <div class="house house-44">🏠</div>
        <div class="house house-45">🏠</div>
        <div class="house house-46">🏠</div>
        <div class="house house-47">🏠</div>
        <div class="apartment apartment-1">🏢</div>
        <div class="apartment apartment-2">🏢</div>
        <div class="apartment apartment-3">🏢</div>
        <div class="apartment apartment-4">🏢</div>
        <div class="apartment apartment-5">🏢</div>
        <div class="post-office">🏤</div>
        <div class="convenience-store">🏪</div>
        <div class="department-store">🏬</div>
        <div class="bank">🏦</div>
        <div class="hospital">🏥</div>
        <div class="church">⛪</div>
        <div class="synagogue">🕍</div>
        <div class="mosque">🕌</div>
        <div class="school">🏫</div>
        <div class="factory">🏭</div>

        <!-- Vehicles -->
        <div class="bicycle">🚴</div>
        <div class="motorcycle">🏍️</div>
        <div class="car car-1">🚗</div>
        <div class="car car-2">🚗</div>
        <div class="car car-3">🚗</div>
        <div class="car car-4">🚗</div>
        <div class="taxi taxi-1">🚕</div>
        <div class="taxi taxi-2">🚕</div>
        <div class="police-car">🚓</div>
        <div class="minivan">🚐</div>
        <div class="ambulance">🚑</div>
        <div class="bus bus-1">🚌</div>
        <div class="bus bus-2">🚌</div>
        <div class="truck delivery-truck">🚚</div>
        <div class="truck articulated-truck">🚛</div>
        <div class="truck fire-truck">🚒</div>
        <div class="helicopter">🚁</div>

        <!-- Props -->
        <div class="bus-stop bus-stop-1">🚏</div>
        <div class="bus-stop bus-stop-2">🚏</div>
        <div class="bus-stop bus-stop-3">🚏</div>
        <div class="bus-stop bus-stop-4">🚏</div>
        <div class="bus-stop bus-stop-5">🚏</div>
        <div class="bus-stop bus-stop-6">🚏</div>
        <div class="fuel-pump fuel-pump-1">⛽</div>
        <div class="fuel-pump fuel-pump-2">⛽</div>
        <div class="fuel-pump fuel-pump-3">⛽</div>
        <div class="fountain">⛲</div>
        <div class="fire fire-1">🔥</div>
        <div class="fire fire-2">🔥</div>
        <div class="fire fire-3">🔥</div>
        <div class="tree tree-1">🌲</div>
        <div class="tree tree-2">🌳</div>
        <div class="tree tree-3">🌳</div>
        <div class="tree tree-4">🌲</div>
        <div class="tree tree-5">🌳</div>
        <div class="tree tree-6">🌲</div>
        <div class="tree tree-7">🌲</div>
        <div class="tree tree-8">🌳</div>
        <div class="tree tree-9">🌳</div>
        <div class="tree tree-10">🌳</div>
        <div class="tree tree-11">🌲</div>
        <div class="tree tree-12">🌳</div>
        <div class="tree tree-13">🌲</div>
        <div class="tree tree-14">🌳</div>
        <div class="tree tree-15">🌳</div>
        <div class="tree tree-16">🌳</div>
        <div class="tree tree-17">🌳</div>
        <div class="tree tree-18">🌲</div>
        <div class="tree tree-19">🌳</div>
        <div class="tree tree-20">🌲</div>
        <div class="tree tree-21">🌲</div>
        <div class="tree tree-22">🌳</div>
        <div class="tree tree-23">🌳</div>
        <div class="tree tree-24">🌲</div>
        <div class="tree tree-25">🌳</div>
        <div class="tree tree-26">🌲</div>
        <div class="tree tree-27">🌲</div>
        <div class="tree tree-28">🌳</div>
        <div class="tree tree-29">🌳</div>
        <div class="tree tree-30">🌳</div>
        <div class="tree tree-31">🌳</div>
        <div class="tree tree-32">🌲</div>
        <div class="tree tree-33">🌲</div>
        <div class="tree tree-34">🌲</div>
        <div class="tree tree-35">🌳</div>
        <div class="tree tree-36">🌳</div>
        <div class="tree tree-38">🌲</div>
        <div class="tree tree-39">🌳</div>
        <div class="tree tree-40">🌲</div>
        <div class="tree tree-41">🌳</div>
        <div class="tree tree-42">🌳</div>
        <div class="tree tree-43">🌳</div>
        <div class="tree tree-44">🌳</div>
        <div class="tree tree-45">🌳</div>
        <div class="tree tree-46">🌲</div>
        <div class="tree tree-47">🌲</div>
        <div class="tree tree-48">🌳</div>
        <div class="tree tree-49">🌳</div>
        <div class="tree tree-50">🌲</div>
        <div class="tree tree-51">🌳</div>
        <div class="tree tree-52">🌲</div>
        <div class="tree tree-53">🌳</div>
        <div class="tree tree-54">🌳</div>
        <div class="tree tree-55">🌲</div>
        <div class="tree tree-56">🌲</div>
        <div class="tree tree-57">🌲</div>
        <div class="tree tree-58">🌳</div>
        <div class="tree tree-59">🌳</div>
        <div class="tree tree-60">🌲</div>
        <div class="tree tree-61">🌳</div>
        <div class="tree tree-62">🌲</div>
        <div class="tree tree-63">🌲</div>
        <div class="tree tree-64">🌳</div>
        <div class="tree tree-65">🌳</div>
        <div class="tree tree-66">🌳</div>
        <div class="tree tree-67">🌲</div>
        <div class="tree tree-68">🌲</div>
        <div class="tree tree-69">🌳</div>
        <div class="tree tree-70">🌳</div>
        <div class="tree tree-71">🌲</div>
        <div class="tree tree-72">🌳</div>
        <div class="tree tree-73">🌳</div>
        <div class="tree tree-74">🌳</div>
        <div class="tree tree-75">🌳</div>
        <div class="tree tree-76">🌳</div>
        <div class="tree tree-77">🌲</div>
        <div class="tree tree-78">🌲</div>
        <div class="tree tree-79">🌳</div>
        <div class="tree tree-80">🌳</div>
        <div class="tree tree-81">🌳</div>
        <div class="tree tree-82">🌲</div>
        <div class="tree tree-83">🌳</div>
        <div class="tree tree-84">🌲</div>
        <div class="tree tree-85">🌳</div>
        <div class="tree tree-86">🌲</div>
        <div class="tree tree-87">🌲</div>
        <div class="tree tree-88">🌳</div>
        <div class="tree tree-89">🌳</div>
        <div class="tree tree-90">🌲</div>
        <div class="tree tree-91">🌳</div>
        <div class="tree tree-92">🌳</div>
        <div class="tree tree-93">🌲</div>
        <div class="tree tree-94">🌲</div>
        <div class="tree tree-95">🌳</div>
        <div class="tree tree-96">🌳</div>
        <div class="tree tree-97">🌲</div>
        <div class="tree tree-98">🌳</div>
        <div class="tree tree-99">🌲</div>
        <div class="tree tree-100">🌳</div>
        <div class="tree tree-101">🌲</div>
        <div class="tree tree-102">🌳</div>
        <div class="tree tree-103">🌲</div>
        <div class="tree tree-104">🌲</div>
        <div class="tree tree-105">🌲</div>
        <div class="tree tree-106">🌳</div>

        <!-- People -->
        <div class="person person-1">🚶</div>
        <div class="person person-2">🚶</div>
        <div class="person person-3">🚶</div>
        <div class="person person-4">🚶</div>
        <div class="person person-5">🚶</div>
        <div class="person person-6">🚶</div>
        <div class="person couple-1">👫</div>
        <div class="person couple-2">👬</div>
        <div class="person couple-3">👭</div>

        <!-- Animals -->
        <div class="dog dog-1">🐕</div>
        <div class="dog dog-2">🐩</div>
        <div class="cat cat-1">🐈</div>
        <div class="cat cat-2">🐈</div>

    </div>
</div>

<!-- partial -->
  <script  src="./script.js"></script>

</body>
</html>
