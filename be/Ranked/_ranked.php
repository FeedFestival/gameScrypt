<?php

    function _ranked_getLocation($lat, $lng) {
        $r = "
SELECT
    country.ID as COUNTRY_ID,
    country.CODE,
    country.NAME as COUNTRY_NAME,
    city.ID,
    city.NAME,
    city.LAT,
    city.LNG,
    ranked.ID as RANKED_ID,
    ranked.USER_COUNT,
    SQRT(
        POW(69.1 * (city.LAT - ".sqlNr($lat)."), 2) +
        POW(69.1 * (".sqlNr($lng)." - city.LNG) * COS(city.LAT / 57.3), 2)
    ) AS distance
FROM city
INNER JOIN country ON country.ID = city.COUNTRY_ID
LEFT JOIN ranked ON ranked.COUNTRY_ID = city.COUNTRY_ID AND ranked.CITY_ID = city.ID
HAVING distance < 1000
ORDER BY distance
limit 1;
        ";
        return $r;
    }

    function _ranked_createRanking($countryId, $cityId) {
        $r = "
INSERT INTO ranked (USER_COUNT, COUNTRY_ID, CITY_ID)
VALUES (
    0,
    ".sqlNr($countryId).",
    ".sqlNr($cityId)."
);
        ";
        return $r;
    }

    function _ranked_fillLocation($row){
		return array(
				'id' => $row['ID'],
				'code' => $row['CODE'],
				'countryName' => $row['COUNTRY_NAME'],
                'countryId' => $row['COUNTRY_ID'],
                'name' => $row['NAME'],
                'rankedId' => $row['RANKED_ID'],
                'userCount' => $row['USER_COUNT']
			);
    }
?>
