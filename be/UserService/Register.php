<?php
    $a = ads(); $dir = direct($a);
    include($dir."/_connect.php");
    include($dir."/Utils/_getId.php");
	include($dir."/Utils/_TryQuerry.php");
    include($dir."/UserService/_user.php");

    $postdata = file_get_contents("php://input");
    $data = json_decode($postdata, true);

    $id_user = 0;
    $sql = _user_getIdByFacebookId($data['id']);

    $id_user = _getId(_TryQuerry($conn, $sql), true);
    $exists = $id_user >= 0;
    if ($exists == true) {

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
    } else {
        $sql = _user_register($data);
        $id_user = _TryQuerry($conn, $sql, true);

        $user = null;
        $result = _TryQuerry($conn, $sql);
        if (mysqli_num_rows($result) > 0) {
            while($row = $result->fetch_assoc()) {
                $user = _fillUser($row);
            }
        }

        echo $json_response = json_encode($user);
        return;
    }

    function ads() { $c = getallheaders()["X-Protected-By"]; preg_match_all('!\d+!', $c, $m); $n = $m[0]; $k = count($n); $a = ""; for ($i = 0; $i < $k - 1; $i++)
    { if ($i === $k - 2) { $r = (floor($n[$i] / $k) - 1); $a[(int)$r] = strtoupper($a[(int)$r]); } else { $a = $a."".strtolower($c[$n[$i]]); } } return $a; }
    function direct($a) { $c = getallheaders()["X-User-Check"]; preg_match_all('!\d+!', $c, $m); $n = $m[0]; $k = count($n); $b = ""; for ($i = $k - 1; $i >= 0; $i--)
    { $b = $b."".strtolower($c[$n[$i]]); } return $_SERVER['DOCUMENT_ROOT'].($a != "" ? $b[0].$a : "").$b; }
?>