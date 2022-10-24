<?php

  include_once('pusher.php');

  $data['username'] = $_POST['username'];
  $pusher->trigger($channel, $event, $data);

  header("location:../lobby.html?mode=pvp&code={$_GET['code']}&id={$_GET['quiz_id']}");
?>