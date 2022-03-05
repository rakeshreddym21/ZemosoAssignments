CREATE SCHEMA `Ecommerce`;




CREATE TABLE `Customer`
(
 `CustID`   int NOT NULL ,
 `CustName` varchar(45) NOT NULL ,
 `CustAddr` varchar(45) NOT NULL ,

PRIMARY KEY (`CustID`)
);


CREATE TABLE `Item`
(
 `ItemId`       int NOT NULL ,
 `ItemName`     varchar(45) NOT NULL ,
 `SupplierId`   int NOT NULL ,
 `OrderID`      int NOT NULL ,
 `ItemCategory` varchar(45) NOT NULL ,

PRIMARY KEY (`ItemId`),
KEY `FK_27` (`OrderID`),
CONSTRAINT `FK_25` FOREIGN KEY `FK_27` (`OrderID`) REFERENCES `Order` (`OrderID`),
KEY `FK_30` (`SupplierId`),
CONSTRAINT `FK_28` FOREIGN KEY `FK_30` (`SupplierId`) REFERENCES `Supplier` (`SupplierId`)
);



CREATE TABLE `Order`
(
 `OrderID`     int NOT NULL ,
 `OrderedTime` timestamp NOT NULL ,
 `CustID`      int NOT NULL ,

PRIMARY KEY (`OrderID`),
KEY `FK_24` (`CustID`),
CONSTRAINT `FK_22` FOREIGN KEY `FK_24` (`CustID`) REFERENCES `Customer` (`CustID`)
);

CREATE TABLE `Supplier`
(
 `SupplierId`       int NOT NULL ,
 `SupplierName`     varchar(45) NOT NULL ,
 `SuppliersContact` varchar(45) NOT NULL ,

PRIMARY KEY (`SupplierId`)
);