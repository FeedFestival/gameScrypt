<?php

function _updateRankedLeague($rankedId, $userCount) {
    $r = "
UPDATE ranked SET USER_COUNT=".sqlNr($userCount)."
WHERE ID = ".sqlNr($rankedId)."
    ";
    return $r;
}

?>
