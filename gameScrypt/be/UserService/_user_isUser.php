<?php
    function _user_isUser($userId) {
        $r = "
SELECT ID
FROM user
WHERE ID = ".sqlNr($userId).";
        ";
        return $r;
    }

    function _user_isUserEmail($email) {
        $r = "
SELECT
    ID, NAME
FROM user
WHERE EMAIL = ".sqlString($email).";
        ";
        return $r;
    }

    function _user_verifyStep($userId, $verificationStep) {
        $step = $verificationStep - 1;
        $r = "
SELECT RANKED_VERIFICATION_STEP
FROM user WHERE ID = ".sqlNr($userId)." AND RANKED_VERIFICATION_STEP = ".$step.";
        ";
        return $r;
    }

    function _user_verificationStep($userId, $verificationStep) {
        $r = "
UPDATE user SET RANKED_VERIFICATION_STEP = ".sqlNr($verificationStep)."
WHERE ID = ".sqlNr($userId).";
        ";
        return $r;
    }
?>
