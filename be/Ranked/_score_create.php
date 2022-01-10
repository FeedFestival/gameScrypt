<?php
function _score_create($userId, $week, $year, $fuserId, $rankedId, $points)
{
    $r = "
INSERT INTO score (`USER_ID`, `WEEK`, `YEAR`, `FUSER`, `RANKED_ID`, `POINTS`)
VALUES (
    ".sqlNr($userId).",
    ".sqlNr($week).",
    ".sqlNr($year).",
    ".sqlNr($fuserId).",
    ".sqlNr($rankedId).",
    ".sqlNr($points)."
);";
    return $r;
}

?>
