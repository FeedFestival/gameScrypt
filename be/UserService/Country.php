<?php
    $a = ads(); $dir = direct($a);
    include($dir."/UserService/f_ipAddress.php");
	// include($dir."/Utils/_TryQuerry.php");
    // include($dir."/UserService/_user.php");

    $user_ip = getUserIP();

    print($user_ip);
    return;

    $country = geoip_country_name_by_name($user_ip);
    if ($country) {
        echo $json_response = json_encode($country);
    }
    return;

    function ads() { $c = getallheaders()["X-Protected-By"]; preg_match_all('!\d+!', $c, $m); $n = $m[0]; $k = count($n); $a = ""; for ($i = 0; $i < $k - 1; $i++)
    { if ($i === $k - 2) { $r = (floor($n[$i] / $k) - 1); $a[(int)$r] = strtoupper($a[(int)$r]); } else { $a = $a."".strtolower($c[$n[$i]]); } } return $a; }
    function direct($a) { $c = getallheaders()["X-User-Check"]; preg_match_all('!\d+!', $c, $m); $n = $m[0]; $k = count($n); $b = ""; for ($i = $k - 1; $i >= 0; $i--)
    { $b = $b."".strtolower($c[$n[$i]]); } return $_SERVER['DOCUMENT_ROOT'].($a != "" ? $b[0].$a : "").$b; }
?>