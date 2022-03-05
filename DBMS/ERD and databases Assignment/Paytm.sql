CREATE SCHEMA `PayTM`;
USE PayTM;

CREATE TABLE `Accounts`
(
 `Account No.` int NOT NULL ,
 `BranchIFSC`  varchar(45) NOT NULL ,
 `AccountType` varchar(45) NOT NULL ,

PRIMARY KEY (`Account No.`),
KEY `FK_32` (`BranchIFSC`),
CONSTRAINT `FK_30` FOREIGN KEY `FK_32` (`BranchIFSC`) REFERENCES `Branch` (`BranchIFSC`)
);
CREATE TABLE `Branch`
(
 `BranchIFSC` varchar(45) NOT NULL ,
 `BranchName` varchar(45) NOT NULL ,
 `CustID`     int NOT NULL ,
 `BranchAddr` varchar(45) NOT NULL ,

PRIMARY KEY (`BranchIFSC`),
KEY `FK_39` (`CustID`),
CONSTRAINT `FK_37` FOREIGN KEY `FK_39` (`CustID`) REFERENCES `Customer` (`CustID`)
);
CREATE TABLE `Customer`
(
 `CustID`    int NOT NULL ,
 `CustName`  varchar(45) NOT NULL ,
 `CustEmail` varchar(45) NOT NULL ,
 `CustPhone` varchar(45) NOT NULL ,

PRIMARY KEY (`CustID`)
);
CREATE TABLE `Customers Account`
(
 `CustID`      int NOT NULL ,
 `Account No.` int NOT NULL ,
 `AccountName` varchar(45) NOT NULL ,

PRIMARY KEY (`CustID`, `Account No.`),
KEY `FK_44` (`CustID`),
CONSTRAINT `FK_42` FOREIGN KEY `FK_44` (`CustID`) REFERENCES `Customer` (`CustID`),
KEY `FK_48` (`Account No.`),
CONSTRAINT `FK_45` FOREIGN KEY `FK_48` (`Account No.`) REFERENCES `Accounts` (`Account No.`)
);
