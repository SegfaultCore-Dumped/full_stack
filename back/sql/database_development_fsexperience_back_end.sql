-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : lun. 06 fév. 2023 à 09:50
-- Version du serveur :  5.7.30
-- Version de PHP : 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `database_development_fsexperience_back_end`
--
CREATE DATABASE IF NOT EXISTS `database_development_fsexperience_back_end` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `database_development_fsexperience_back_end`;

-- --------------------------------------------------------

--
-- Structure de la table `Likes`
--

DROP TABLE IF EXISTS `Likes`;
CREATE TABLE `Likes` (
  `id` int(11) NOT NULL,
  `messageId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `isLiked` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Likes`
--

INSERT INTO `Likes` (`id`, `messageId`, `userId`, `isLiked`, `createdAt`, `updatedAt`) VALUES
(1, 3, 1, 1, '2023-01-28 19:34:10', '2023-01-28 19:37:04');

-- --------------------------------------------------------

--
-- Structure de la table `Messages`
--

DROP TABLE IF EXISTS `Messages`;
CREATE TABLE `Messages` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `attachement` varchar(255) DEFAULT NULL,
  `likes` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Messages`
--

INSERT INTO `Messages` (`id`, `userId`, `title`, `content`, `attachement`, `likes`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Mon premier message', 'ça fonctionne', NULL, 0, '2023-01-24 23:43:25', '2023-01-24 23:43:25'),
(3, 1, 'Mon 3e message', 'ça fonctionne', NULL, 1, '2023-01-28 18:42:47', '2023-01-28 19:37:04');

-- --------------------------------------------------------

--
-- Structure de la table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20230120101327-create-user.js'),
('20230120101737-create-message.js'),
('20230128150343-create-like.js');

-- --------------------------------------------------------

--
-- Structure de la table `Users`
--

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Users`
--

INSERT INTO `Users` (`id`, `email`, `username`, `password`, `bio`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(1, 'kln@live.fr', 'kln', '$2b$05$YgwFHw2od9MpXK7i/ZU.t.pijfKojzfo3MKyIFi/CZZPDlfp55Ury', 'Super Saiyan', 0, '2023-01-24 23:23:25', '2023-01-24 23:23:25');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Likes`
--
ALTER TABLE `Likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `messageId` (`messageId`),
  ADD KEY `userId` (`userId`);

--
-- Index pour la table `Messages`
--
ALTER TABLE `Messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Index pour la table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `SequelizeMeta_name_unique` (`name`);

--
-- Index pour la table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Likes`
--
ALTER TABLE `Likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `Messages`
--
ALTER TABLE `Messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Likes`
--
ALTER TABLE `Likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`messageId`) REFERENCES `Messages` (`id`),
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`);

--
-- Contraintes pour la table `Messages`
--
ALTER TABLE `Messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
