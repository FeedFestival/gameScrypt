-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Gazdă: 127.0.0.1
-- Timp de generare: ian. 09, 2022 la 01:33 PM
-- Versiune server: 10.4.14-MariaDB
-- Versiune PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Bază de date: `gamescrypt`
--

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `user`
--

CREATE TABLE `user` (
  `ID` int(10) NOT NULL,
  `NAME` varchar(100) DEFAULT NULL,
  `EMAIL` varchar(100) DEFAULT NULL,
  `FACEBOOK_AUTH_TOKEN` varchar(500) DEFAULT NULL,
  `FACEBOOK_ID` varchar(100) DEFAULT NULL,
  `RANKED_VERIFICATION_STEP` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Eliminarea datelor din tabel `user`
--

INSERT INTO `user` (`ID`, `NAME`, `EMAIL`, `FACEBOOK_AUTH_TOKEN`, `FACEBOOK_ID`) VALUES
(
    1,
    'Dani Sim',
    'simionescudani07@gmail.com',
    'EAAj7XyQo3XABAPWn2YxwyYdufjrX61wIFfystzZAoI8aLo45FYuxnbWk7FZCk6TJcBAfJ0pm1mjFqBlv0dyGYEEZCXZAxzu20HlDA55PgjorjEKW3H3u03WlojVGQP4NEH08JyCZBCiEpRfiyUlzbQZBWz8lo6Uzv6OkLeZAUnr6wjbbELYBDq491lnOlplMZCS0MZBkxcIQBIAZDZD',
    '10218269512471626'
);

--
-- Indexuri pentru tabele eliminate
--

--
-- Indexuri pentru tabele `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pentru tabele eliminate
--

--
-- AUTO_INCREMENT pentru tabele `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
