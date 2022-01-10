<?php

function _checkLeagueFusers($dir, $count, $country)
{
    $kidNamesCount = rand(2, $count / 2 + 1);
    $normalNameCount = $count - $kidNamesCount;
    $fuserNames = [];
    $file = $dir . '/txt/count/first/' . $country . '.txt';
    // - check if we have names for this country
    $doWeHaveNamesForCountry = file_exists($file);
    if ($doWeHaveNamesForCountry) {
        $firstNameCount = 0;
        $file = $dir . '/txt/count/first/' . $country . '.txt';
        if (file_exists($file)) {
            $handle = fopen($file, 'r');
            $result = fgets($handle);
            fclose($handle);
            $firstNameCount = intval($result);
        }

        $lastNameCount = 0;
        $file = $dir . '/txt/count/last/' . $country . '.txt';
        if (file_exists($file)) {
            $handle = fopen($file, 'r');
            $result = fgets($handle);
            fclose($handle);
            $lastNameCount = intval($result);
        }

        $additionalCount = 0;
        $additionalLines = [];
        $file = $dir . '/txt/count/additional.txt';
        if (file_exists($file)) {
            $handle = fopen($file, 'r');
            $result = fgets($handle);
            fclose($handle);
            $additionalCount = intval($result);
            $file = $dir . '/txt/forum/additional.txt';
            $additionalLines = file($file);
        }

        $connections = [
            ' ',
            ' ',
            ' ',
            ' ',
            '_',
            '.',
            '.',
            '.',
            '',
            '_xXx_',
            'X',
            'The',
            'An',
            'Da',
        ];

        for ($i = 1; $i <= $normalNameCount; $i++) {
            $firstName = '';
            $lastName = '';
            if ($firstNameCount > 0) {
                $file = $dir . '/txt/first/' . $country . '.txt';
                $lines = file($file);
                $rndNumber = rand(0, $firstNameCount - 2);
                $firstName = $lines[$rndNumber];
            }

            $dice = rand(0, 6);
            $shouldHaveAdditional = $lastNameCount == 0 || $dice > 4;
            if ($shouldHaveAdditional) {
                $rndNumber = rand(0, $additionalCount - 2);
                $lastName = $additionalLines[$rndNumber];
            } else {
                $file = $dir . '/txt/last/' . $country . '.txt';
                $lines = file($file);
                $rndNumber = rand(0, $lastNameCount - 2);
                $lastName = $lines[$rndNumber];
            }
            $dice = rand(0, count($connections) - 1);

            $fakeName =
                trim(ucfirst(strtolower($firstName))) .
                $connections[$dice] .
                trim(ucfirst(strtolower($lastName)));
            $fakeName = trim(preg_replace('/\s\s+/', ' ', $fakeName));
            array_push($fuserNames, ['id' => 0, 'username' => $fakeName]);
        }
    } else {
        $kidNamesCount = $kidNamesCount + $normalNameCount;
    }

    $file = $dir . '/txt/count/forum.txt';
    $handle = fopen($file, 'r');
    $result = fgets($handle);
    fclose($handle);

    $forumCount = intval($result);

    $file = $dir . '/txt/forum/forum.txt';
    $lines = file($file);

    for ($i = 1; $i <= $kidNamesCount; $i++) {
        $rndNumber = rand(0, $forumCount - 2);
        $fakeName = trim(preg_replace('/\s\s+/', ' ', $lines[$rndNumber]));
        array_push($fuserNames, ['id' => 0, 'username' => $fakeName]);
    }

    return $fuserNames;
}
?>
