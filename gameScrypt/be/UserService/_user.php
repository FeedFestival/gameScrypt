<?php

    include($dir."/Utils/_sqlUtils.php");

    function _user_getIdByFacebookId($facebook_id) {
        $r = "
        SELECT id 
        FROM user
        WHERE facebook_id = ".sqlNr($facebook_id).";
        ";
        return $r;
    }

    function _user_register($user) {
        $r = "
        INSERT INTO user (name, email, photoUrl, authToken, facebook_id) VALUES
        (".sqlString($user['name']).", ".sqlString($user['email']).", ".sqlString($user['photoUrl']).", ".sqlString($user['authToken']).", ".sqlNr($user['id']).");
        ";
        return $r;
    }

    function _user_getById($id_user) {
        $r = "
        SELECT id, name, email, photoUrl, authToken, facebook_id
        FROM user
        WHERE id = ".sqlNr($id_user).";
        ";
        return $r;
    }

    function _fillUser($row){
		return array(
				'id' => $row['id'],
				'name' => $row['name'],
				'email' => $row['email'],
                'photoUrl' => $row['photoUrl'],
                'authToken' => $row['authToken'],
                'facebook_id' => $row['facebook_id'],
			);
    }
?>