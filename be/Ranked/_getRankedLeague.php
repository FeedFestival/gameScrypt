<?php

function _ranked_getRankedLeague($rankedId) {
    $r = "
SELECT
ID,
USER_COUNT,
COUNTRY_ID,
CITY_ID
FROM ranked
WHERE ID = ".sqlNr($rankedId)."
    ";
    return $r;
}

function _ranked_fillRanking($row){
    return array(
            'id' => $row['ID'],
            'count' => $row['USER_COUNT'],
            'countryId' => $row['COUNTRY_ID'],
            'cityId' => $row['CITY_ID']
        );
}
?>
