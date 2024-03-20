<?php
	$a = "error"; if (array_key_exists("a", $_REQUEST)) { $a = strtoupper($_REQUEST["a"]); $r = '/^\{?[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}\}?$/'; if (preg_match($r, $a)) { $a = ""; } } $dir = $_SERVER['DOCUMENT_ROOT'].($a != "" ? "/".$a : "")."/be"; include $dir . '/Utils/_header_getAuthorization.php'; $auth = _header_getAuthorization(); if ($auth == null) { echo "Success"; return; } $user = json_decode(base64_decode($auth), true); if ($user == null) { echo "Success"; return; } include($dir."/_connect.php"); include($dir."/Utils/_TryQuerry.php"); include($dir."/Utils/_sqlUtils.php"); include($dir."/UserService/_user_isUser.php"); $result = _TryQuerry($conn, _user_isUser($user['Id'])); if ($result == null || mysqli_num_rows($result) < 1) { echo "Success"; return; }
    // -----------------------------------------------------------------------------------------------
    // ------------     VERIFICATION    ------------
    // ---------------------------------------------
    $verificationStep = 1;
    $result = _TryQuerry($conn, _user_verifyStep($user['Id'], $verificationStep));
	if ($result == null || mysqli_num_rows($result) < 1) { _TryQuerry($conn, _user_verificationStep($user['Id'], 0)); echo "Success"; return; }
    _TryQuerry($conn, _user_verificationStep($user['Id'], $verificationStep));
    // -----------------------------------------------------------------------------------------------
    // -------------     CODE    ------------
    // --------------------------------------

    $lat = $_REQUEST["lat"];
    $lng = $_REQUEST["lng"];

    // EXAMPLE:
    // http://localhost/gameScrypt/be/Ranked/GetUserLeague.php?a=gameScrypt&lat=44.17727&lng=28.65288

    // - get location
    include($dir."/Ranked/_ranked.php");
    $location = new stdClass();
    $sql = _ranked_getLocation($lat, $lng);
    $result = _TryQuerry($conn, $sql);
	if (mysqli_num_rows($result) > 0) {
		while($row = $result->fetch_assoc()) {
			$location = _ranked_fillLocation($row);
		}
	}

    // - create if doesn't exist
    if ($location['rankedId'] == null) {
        $sql = _ranked_createRanking($location['countryId'], $location['id']);
        $location['rankedId'] = _TryQuerry($conn, $sql, true);
    }

    // - here we determine if we need to create fake users
    // - if yes - checkCode = 1;
    // - if no - checkCode = 0;
    if ($location['userCount'] == 0) {
        $location['checkCode'] = 1;
    } else {
        $location['checkCode'] = 0;
    }

    unset($location['userCount']);

    if (empty((array)$location)) {
		echo null;
	} else {
		echo $json_response = json_encode($location);
	}
?>
