<?php 

require '../vendor/autoload.php';

$options = array(
  'cluster' => 'ap1',
  'useTLS' => true
);

$pusher = new Pusher\Pusher(
  '2d6fac42923bea7bc164',
  'cf21baafc62b9368bdfe',
  '1493851',
  $options
);

$channel = "quiztions";
$event = "join-user";

?>