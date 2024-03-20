<?php
function _user_create($username, $email)
{
    $r = "
INSERT INTO user (`NAME`, `EMAIL`)
VALUES (".sqlString($username).", ".sqlString($email).");
";
    return $r;
}
?>
