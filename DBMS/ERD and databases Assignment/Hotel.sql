CREATE SCHEMA `Hotel`;

USE Hotel;

CREATE TABLE `Customer`
(
 `CustID`    int NOT NULL ,
 `CustName`  varchar(45) NOT NULL ,
 `CustPhone` varchar(45) NOT NULL ,
 `CustAddr`  varchar(45) NOT NULL ,

PRIMARY KEY (`CustID`)
);

CREATE TABLE `Hotel`
(
 `HotelID`      int NOT NULL ,
 `HotelName`    varchar(45) NOT NULL ,
 `HotelAddr`    varchar(45) NOT NULL ,
 `CheckinTime`  datetime NOT NULL ,
 `CheckoutType` datetime NOT NULL ,
 `Room No.`     varchar(45) NOT NULL ,

PRIMARY KEY (`HotelID`)
);


CREATE TABLE `Type`
(
 `HotelID`      int NOT NULL ,
 `CustID`       int NOT NULL ,
 `CustomerType` varchar(45) NOT NULL ,

PRIMARY KEY (`HotelID`, `CustID`),
KEY `FK_20` (`CustID`),
CONSTRAINT `FK_18` FOREIGN KEY `FK_20` (`CustID`) REFERENCES `Customer` (`CustID`),
KEY `FK_23` (`HotelID`),
CONSTRAINT `FK_21` FOREIGN KEY `FK_23` (`HotelID`) REFERENCES `Hotel` (`HotelID`)
);
