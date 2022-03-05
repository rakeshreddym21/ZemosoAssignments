CREATE SCHEMA `IMDB`;
USE IMDB;
CREATE TABLE `Actor`
(
 `ActorId`   int NOT NULL ,
 `ActorName` varchar(45) NOT NULL ,

PRIMARY KEY (`ActorId`)
);

CREATE TABLE `Movie`
(
 `MovieId`       varchar(45) NOT NULL ,
 `MovieName`     varchar(45) NOT NULL ,
 `ActorId`       int NOT NULL ,
 `MovieDirector` varchar(45) NOT NULL ,

PRIMARY KEY (`MovieId`),
KEY `FK_18` (`ActorId`),
CONSTRAINT `FK_16` FOREIGN KEY `FK_18` (`ActorId`) REFERENCES `Actor` (`ActorId`)
);
CREATE TABLE `Series`
(
 `SeriesID`       varchar(45) NOT NULL ,
 `SeriesName`     varchar(45) NOT NULL ,
 `ActorId`        int NOT NULL ,
 `SeriesDirector` varchar(45) NOT NULL ,

PRIMARY KEY (`SeriesID`),
KEY `FK_21` (`ActorId`),
CONSTRAINT `FK_19` FOREIGN KEY `FK_21` (`ActorId`) REFERENCES `Actor` (`ActorId`)
);