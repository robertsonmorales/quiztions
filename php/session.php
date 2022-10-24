<?php 
    session_start();

    $_SESSION['username'] = $_POST['username'];

    header("location:../choose-mode.html");
?>