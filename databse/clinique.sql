-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : ven. 18 mars 2022 à 19:31
-- Version du serveur :  5.7.34
-- Version de PHP : 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `clinique`
--

-- --------------------------------------------------------

--
-- Structure de la table `EB_IMB_R`
--

CREATE TABLE `EB_IMB_R` (
  `_id` int(20) NOT NULL,
  `BEN_NIR_IDT` varchar(17) NOT NULL,
  `IMB_ALD_NUM` int(8) DEFAULT NULL,
  `IMB_ALD_DTD` date DEFAULT NULL,
  `IMB_ALD_DTF` date DEFAULT NULL,
  `IMB_ETM_NAT` int(8) DEFAULT NULL,
  `MED_MTF_COD` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `EB_INB_F`
--

CREATE TABLE `EB_INB_F` (
  `BEN_NIR_IDT` varchar(17) NOT NULL,
  `BEN_NAI_ANN` varchar(4) DEFAULT NULL,
  `BEN_RES_DPT` varchar(3) DEFAULT NULL,
  `BEN_SEX_COD` int(1) DEFAULT NULL,
  `BEN_DCD_AME` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `ES_PRS_F`
--

CREATE TABLE `ES_PRS_F` (
  `_id` int(20) NOT NULL,
  `BEN_NIR_IDT` varchar(17) NOT NULL,
  `EXE_SOI_DTD` date DEFAULT NULL,
  `EXE_SOI_DTF` date DEFAULT NULL,
  `PFS_PRE_CRY` varchar(32) DEFAULT NULL,
  `PRS_NAT_REF` int(4) DEFAULT NULL,
  `FLX_DIS_DTD` date DEFAULT NULL,
  `PSE_ACT_SPE` int(8) DEFAULT NULL,
  `BEN_CMU_TOP` varchar(1) DEFAULT NULL,
  `PRE_PRE_DTD` date DEFAULT NULL,
  `PRS_ACT_QTE` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `_id` int(20) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `birth_day` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`_id`, `first_name`, `last_name`, `birth_day`, `email`, `password`) VALUES
(1, 'Bilel', 'Si said', '1997-09-12', 'bilel@gmail.com', '$argon2id$v=19$m=65536,t=4,p=1$UDViZTA2bXZWcG1VbXp6Rg$NRYrbCd9/DwohVfKc5pGenlqvuGzEnIrYCTbvFeWPuw');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `EB_IMB_R`
--
ALTER TABLE `EB_IMB_R`
  ADD PRIMARY KEY (`_id`),
  ADD KEY `BEN_NIR_IDT` (`BEN_NIR_IDT`);

--
-- Index pour la table `EB_INB_F`
--
ALTER TABLE `EB_INB_F`
  ADD PRIMARY KEY (`BEN_NIR_IDT`);

--
-- Index pour la table `ES_PRS_F`
--
ALTER TABLE `ES_PRS_F`
  ADD PRIMARY KEY (`_id`),
  ADD KEY `BEN_NIR_IDT` (`BEN_NIR_IDT`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `EB_IMB_R`
--
ALTER TABLE `EB_IMB_R`
  MODIFY `_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `ES_PRS_F`
--
ALTER TABLE `ES_PRS_F`
  MODIFY `_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `EB_IMB_R`
--
ALTER TABLE `EB_IMB_R`
  ADD CONSTRAINT `eb_imb_r_ibfk_1` FOREIGN KEY (`BEN_NIR_IDT`) REFERENCES `EB_INB_F` (`BEN_NIR_IDT`);

--
-- Contraintes pour la table `ES_PRS_F`
--
ALTER TABLE `ES_PRS_F`
  ADD CONSTRAINT `es_prs_f_ibfk_1` FOREIGN KEY (`BEN_NIR_IDT`) REFERENCES `EB_INB_F` (`BEN_NIR_IDT`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
