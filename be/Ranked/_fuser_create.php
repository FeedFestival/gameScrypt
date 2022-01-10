<?php
function _fuser_create($fusername, $countryId)
{
    $r = "
INSERT INTO fuser (`USERNAME`, `COUNTRY_ID`, `IS_USED`)
VALUES (".sqlString($fusername).", ".sqlNr($countryId).", 1);
";
    return $r;
}
?>
