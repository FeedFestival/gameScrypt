<?php
    $a = "error"; if (array_key_exists("a", $_REQUEST)) { $a = strtoupper($_REQUEST["a"]); $r = '/^\{?[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}\}?$/'; if (preg_match($r, $a)) { $a = ""; } } $dir = $_SERVER['DOCUMENT_ROOT'].($a != "" ? "/".$a : "")."/be"; include $dir . '/Utils/_header_getAuthorization.php'; $auth = _header_getAuthorization(); if ($auth == null) { echo "Success"; return; } $user = json_decode(base64_decode($auth), true); if ($user == null) { echo "Success"; return; } include($dir."/_connect.php"); include($dir."/Utils/_TryQuerry.php"); include($dir."/Utils/_sqlUtils.php"); include($dir."/UserService/_user_isUser.php"); $result = _TryQuerry($conn, _user_isUser($user['Id'])); if ($result == null || mysqli_num_rows($result) < 1) { echo "Success"; return; }
    // -----------------------------------------------------------------------------------------------
    // ------------     VERIFICATION    ------------
    // ---------------------------------------------
    $verificationStep = 2;
    $result = _TryQuerry($conn, _user_verifyStep($user['Id'], $verificationStep));
	if ($result == null || mysqli_num_rows($result) < 1) { _TryQuerry($conn, _user_verificationStep($user['Id'], 0)); echo "Success"; return; }
    _TryQuerry($conn, _user_verificationStep($user['Id'], $verificationStep));
    // -----------------------------------------------------------------------------------------------
    // -------------     CODE    ------------
    // --------------------------------------

    // EXAMPLE:
    // http://localhost/gameScrypt/be/Ranked/CheckLeague.php?a=gameScrypt&cc=1&c=Romania&cid=642&rid=2&p=1812

    $checkCode = $_REQUEST['cc'];
    $country = $_REQUEST['c'];
    $countryId = $_REQUEST['cid'];
    $rankedId = $_REQUEST['rid'];

    $userCount = 0;
    include $dir . '/Ranked/_ranked_getUserCount.php';
    $sql = _ranked_getUserCount($rankedId);
    $result = _TryQuerry($conn, $sql);
    $hasResults = mysqli_num_rows($result) > 0;
    if ($hasResults) {
        $row = $result->fetch_assoc();
        $userCount = $row['USER_COUNT'];
    } else {
        echo "Ranked ID Not OK";
        return;
    }

    $points = 1337;
    if ($_REQUEST['p'] && $points >= 1337) {
        $points = $_REQUEST['p'];
    }

    // Check again the checkCode
    if ($userCount == 0) {
        $checkCode = 1;
    } else {
        $checkCode = 0;
    }

    if ($checkCode == 0) {
        // we already have real users

        // TODO: do we have at least half of users real ?
        // if yes -> remove the fake ones
        // delete them from everywhere and set them to IS_USED = 0
        // $areFakeUsersRemoved = true;
    } elseif ($checkCode == 1) {
        // we need fake users

        $count = rand(3, 9);

        include $dir . '/Ranked/_fuser_availableCount.php';
        $sql = _fuser_availableCount($countryId);
        $result = _TryQuerry($conn, $sql);
        if (mysqli_num_rows($result) > 0) {
            $row = $result->fetch_assoc();
            $availableFusersCount = $row['count'];
        }

        $fuserNames = [];
        if ($availableFusersCount >= $count) {
            // use existing fusers
            include $dir . '/Ranked/_fuser_getByCount.php';
            $sql = _fuser_getByCount($count, $countryId);
            $result = _TryQuerry($conn, $sql);
            if (mysqli_num_rows($result) > 0) {
                while($row = $result->fetch_assoc()) {
                    array_push($fuserNames, _fuser_fillFuser($row));
                }
            }
        } else {
            // create new fusers
            include $dir . '/Ranked/_checkLeagueFusers.php';
            $fuserNames = _checkLeagueFusers($dir, $count, $country);

            include $dir . '/Ranked/_fuser_create.php';
            for ($i = 0; $i < $count; $i++) {
                $sql = _fuser_create($fuserNames[$i]['username'], $countryId);
                $fuserNames[$i]['id'] = _TryQuerry($conn, $sql, true);
            }
        }

        // Update ranked

        include $dir . '/Ranked/_updateRankedLeague.php';
        $sql = _updateRankedLeague($rankedId, $count);
        _TryQuerry($conn, $sql);

        include $dir . '/Ranked/_score_create.php';
        foreach ($fuserNames as $fuser) {
            $minPoints = $points - 333;
            if ($minPoints < 0) {
                $minPoints = 0;
            }
            $randomPoints = rand($minPoints, $points + 333);
            $date = new DateTime();
            $week = $date->format('W');
            $year = $date->format('Y');
            $sql = _score_create(
                null,
                $week,
                $year,
                $fuser['id'],
                $rankedId,
                $randomPoints
            );
            _TryQuerry($conn, $sql);

            $sql = _fuser_reuse($fuser['id']);
            _TryQuerry($conn, $sql);
        }
    }

    echo 'Done';

?>
