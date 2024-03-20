<?php
    $a = "error"; if (array_key_exists("a", $_REQUEST)) { $a = $_REQUEST["a"]; $r = '/^\{?[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}\}?$/'; if (preg_match($r, $a)) { $a = ""; } }
    $dir = $_SERVER['DOCUMENT_ROOT'].($a != "" ? "/".$a : "")."/be";
    include($dir."/_connect.php");
    include($dir."/Utils/_getId.php");
	include($dir."/Utils/_TryQuerry.php");
    include($dir."/UserService/_user.php");

    $id_user = $_REQUEST["userId"];

    $sql = _user_getById($id_user);
    $user = null;
    $result = _TryQuerry($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        while($row = $result->fetch_assoc()) {
            $user = _fillUser($row);
        }
    }

    echo $json_response = json_encode($user);
    return;
?>