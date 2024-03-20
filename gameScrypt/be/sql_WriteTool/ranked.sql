CREATE TABLE `gamescrypt`.`score` (
    `ID` INT(5) NOT NULL ,
    `USER_ID` INT(6) NULL ,
    `WEEK` INT(2) NOT NULL ,
    `YEAR` INT(4) NOT NULL ,
    `FUSER` INT(6) NULL ,
    `RANKED_ID` INT(5) NOT NULL ,
    `POINTS` INT(11) NOT NULL ,
    PRIMARY KEY (`ID`(5))
)
ENGINE = InnoDB;
