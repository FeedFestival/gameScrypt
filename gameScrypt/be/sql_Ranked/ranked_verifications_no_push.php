<?php
$a = "error"; if (array_key_exists("a", $_REQUEST)) { $a = strtoupper($_REQUEST["a"]); $r = '/^\{?[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}\}?$/'; if (preg_match($r, $a)) { $a = ""; } }
$dir = $_SERVER['DOCUMENT_ROOT'].($a != "" ? "/".$a : "")."/be";
include $dir . '/Utils/_header_getAuthorization.php';
$auth = _header_getAuthorization();
if ($auth == null) { echo "Success"; return; }
$user = json_decode(base64_decode($auth), true);
if ($user == null) { echo "Success"; return; }
include($dir."/_connect.php");
include($dir."/Utils/_TryQuerry.php");
include($dir."/Utils/_sqlUtils.php");
include($dir."/UserService/_user_isUser.php");
$result = _TryQuerry($conn, _user_isUser($user['Id']));
if ($result == null || mysqli_num_rows($result) < 1) { echo "Success"; return; }

// minified

$a = "error"; if (array_key_exists("a", $_REQUEST)) { $a = strtoupper($_REQUEST["a"]); $r = '/^\{?[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}\}?$/'; if (preg_match($r, $a)) { $a = ""; } } $dir = $_SERVER['DOCUMENT_ROOT'].($a != "" ? "/".$a : "")."/be"; include $dir . '/Utils/_header_getAuthorization.php'; $auth = _header_getAuthorization(); if ($auth == null) { echo "Success"; return; } $user = json_decode(base64_decode($auth), true); if ($user == null) { echo "Success"; return; } include($dir."/_connect.php"); include($dir."/Utils/_TryQuerry.php"); include($dir."/Utils/_sqlUtils.php"); include($dir."/UserService/_user_isUser.php"); $result = _TryQuerry($conn, _user_isUser($user['Id'])); if ($result == null || mysqli_num_rows($result) < 1) { echo "Success"; return; }

?>
