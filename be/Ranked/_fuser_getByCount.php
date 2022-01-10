<?php
function _fuser_getByCount($count, $countryId) {
    $r = "
SELECT
    ID,
    USERNAME
FROM fuser
    WHERE IS_USED = 0 AND COUNTRY_ID = ".sqlNr($countryId)."
LIMIT ".$count.";
    ";
    return $r;
}

function _fuser_fillFuser($row) {
    return array(
        'id' => $row['ID'],
        'username' => $row['USERNAME']
    );
}
?>
