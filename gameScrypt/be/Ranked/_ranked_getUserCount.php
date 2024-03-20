
<?php

function _ranked_getUserCount($rankedId) {
    $r = "
SELECT
    USER_COUNT
FROM ranked
    WHERE ID = ".sqlNr($rankedId)."
";
    return $r;
}
?>
