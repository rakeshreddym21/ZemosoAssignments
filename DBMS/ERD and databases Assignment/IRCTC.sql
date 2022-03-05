/*SQL Queries for Creating Tables:*/

CREATE SCHEMA `Schema_15`;

USE Schema_15;

CREATE TABLE `Customer`
(
 `CustomerId`   int NOT NULL ,
 `customerName` varchar(45) NOT NULL ,
 `Address`      varchar(20) NOT NULL ,

PRIMARY KEY (`CustomerId`)
);



CREATE TABLE `Train`
(
 `TrainId`    int NOT NULL ,
 `Trainname`  varchar(45) NOT NULL ,
 `Trainroute` varchar(20) NOT NULL ,

PRIMARY KEY (`TrainId`)
);

CREATE TABLE `Ticket`
(
 `TicketNo.`  int NOT NULL ,
 `CustomerId` int NOT NULL ,
 `Tickettype` varchar(45) NOT NULL ,

PRIMARY KEY (`TicketNo.`),
KEY `FK_59` (`CustomerId`),
CONSTRAINT `FK_57` FOREIGN KEY `FK_59` (`CustomerId`) REFERENCES `Customer` (`CustomerId`)
);

CREATE TABLE `ReservedTicket`
(
 `CustomerId`      int NOT NULL ,
 `TicketNo.`       int NOT NULL ,
 `TrainId`         int NOT NULL ,
 `BoardingStation` varchar(30) NOT NULL ,
 `BoardingTime`    varchar(45) NOT NULL ,

PRIMARY KEY (`CustomerId`, `TicketNo.`, `TrainId`),
KEY `FK_32` (`CustomerId`),
CONSTRAINT `FK_30` FOREIGN KEY `FK_32` (`CustomerId`) REFERENCES `Customer` (`CustomerId`),
KEY `FK_49` (`TicketNo.`),
CONSTRAINT `FK_47` FOREIGN KEY `FK_49` (`TicketNo.`) REFERENCES `Ticket` (`TicketNo.`),
KEY `FK_68` (`TrainId`),
CONSTRAINT `FK_66` FOREIGN KEY `FK_68` (`TrainId`) REFERENCES `Train` (`TrainId`)
);


