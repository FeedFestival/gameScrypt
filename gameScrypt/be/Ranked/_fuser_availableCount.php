<?php
function _fuser_availableCount($countryId)
{
    $r = "
SELECT count(ID) as count FROM fuser WHERE IS_USED = 0 AND COUNTRY_ID = ".sqlNr($countryId)."
";
    return $r;
}

function _fuser_reuse($fuserId) {
    $r = "
UPDATE fuser SET IS_USED = 1 WHERE ID = ".sqlNr($fuserId)."
";
    return $r;
}
?>

