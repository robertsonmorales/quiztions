<?php 

include_once('pusher.php');

$data['start'] = true;
$data['invited'] = "quiz-room.html?mode=pvp&code={$_GET['code']}&invited=true&id={$_GET['id']}";
$data['location'] = "quiz-room.html?mode=pvp&code={$_GET['code']}&id={$_GET['id']}";

$pusher->trigger($channel, $event, $data);

header("location:../".$data['location']);
?>