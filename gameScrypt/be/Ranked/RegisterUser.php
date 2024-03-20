<?php
	$a = "error"; if (array_key_exists("a", $_REQUEST)) { $a = strtoupper($_REQUEST["a"]); $r = '/^\{?[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}\}?$/'; if (preg_match($r, $a)) { $a = ""; } } $dir = $_SERVER['DOCUMENT_ROOT'].($a != "" ? "/".$a : "")."/be";
    // -----------------------------------------------------------------------------------------------
    // -------------     CODE    ------------
    // --------------------------------------

    include($dir."/_connect.php");
    include($dir."/Utils/_TryQuerry.php");
    include($dir."/Utils/_sqlUtils.php");

    $username = $_REQUEST["username"];
    $email = $_REQUEST["email"];

    // EXAMPLE:
    // http://localhost/gameScrypt/be/Ranked/RegisterUser.php?a=gameScrypt&username=dani&email=dani@gmail.com

    $user = array();
    include($dir."/UserService/_user_isUser.php");
    $result = _TryQuerry($conn, _user_isUserEmail($email));
    if ($result == null || mysqli_num_rows($result) < 1) {
        include($dir."/Ranked/_user_create.php");
        $sql = _user_create($username, $email);
        $id = _TryQuerry($conn, $sql, true);
        $user = array(
            'Id' => strval($id),
            'Name' => $username
        );
    } else {
        $row = $result->fetch_assoc();
        $user = array(
            'Id' => $row['ID'],
            'Name' => $row['NAME']
        );
    }

    echo json_encode($user);
?>
