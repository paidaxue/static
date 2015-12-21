CREATE TABLE `easyui_user` (                            
               `id` int(11) NOT NULL AUTO_INCREMENT,                 
               `firstname` varchar(255) DEFAULT NULL,                
               `lastname` varchar(255) DEFAULT NULL,                 
               `phone` varchar(255) DEFAULT NULL,                    
               `email` varchar(255) DEFAULT NULL,                    
               PRIMARY KEY (`id`)                                    
             ) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8  

insert  into `easyui_user`(`id`,`firstname`,`lastname`,`phone`,`email`) values (1,'fname1','lname1','000-111','nama1@gmail.com');
insert  into `easyui_user`(`id`,`firstname`,`lastname`,`phone`,`email`) values (2,'fname2','lname2','000-112','nama2@gmail.com');
insert  into `easyui_user`(`id`,`firstname`,`lastname`,`phone`,`email`) values (3,'fname3','lname3','000-113','nama3@gmail.com');
insert  into `easyui_user`(`id`,`firstname`,`lastname`,`phone`,`email`) values (4,'fname4','lname4','000-114','nama4@gmail.com');
insert  into `easyui_user`(`id`,`firstname`,`lastname`,`phone`,`email`) values (5,'fname5','lname5','000-115','nama5@gmail.com');
insert  into `easyui_user`(`id`,`firstname`,`lastname`,`phone`,`email`) values (6,'fname6','lname6','000-116','nama6@gmail.com');
insert  into `easyui_user`(`id`,`firstname`,`lastname`,`phone`,`email`) values (7,'fname7','lname7','000-117','nama7@gmail.com');
insert  into `easyui_user`(`id`,`firstname`,`lastname`,`phone`,`email`) values (8,'fname8','lname8','000-118','nama8@gmail.com');
insert  into `easyui_user`(`id`,`firstname`,`lastname`,`phone`,`email`) values (9,'fname9','lname9','000-119','nama9@gmail.com');
insert  into `easyui_user`(`id`,`firstname`,`lastname`,`phone`,`email`) values (10,'fname10','lname10','000-1110','nama10@gmail.com');
insert  into `easyui_user`(`id`,`firstname`,`lastname`,`phone`,`email`) values (11,'fname11','lname11','000-1111','nama11@gmail.com');
insert  into `easyui_user`(`id`,`firstname`,`lastname`,`phone`,`email`) values (12,'fname12','lname12','000-1112','nama12@gmail.com');
insert  into `easyui_user`(`id`,`firstname`,`lastname`,`phone`,`email`) values (13,'fname13','lname13','000-1113','nama13@gmail.com');
insert  into `easyui_user`(`id`,`firstname`,`lastname`,`phone`,`email`) values (14,'fname14','lname14','000-1114','nama14@gmail.com');





/*
MySQL Data Transfer
Source Host: localhost
Source Database: mydb
Target Host: localhost
Target Database: mydb
Date: 2011/6/3 13:59:12
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for users
-- ----------------------------
CREATE TABLE `users` (
  `id` int(11) NOT NULL auto_increment,
  `firstname` varchar(50) default NULL,
  `lastname` varchar(50) default NULL,
  `phone` varchar(200) default NULL,
  `email` varchar(200) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `users` VALUES ('3', 'fname1', 'lname1', '(000)000-0000', 'name1@gmail.com');
INSERT INTO `users` VALUES ('4', 'fname2', 'lname2', '(000)000-0000', 'name2@gmail.com');
INSERT INTO `users` VALUES ('5', 'fname3', 'lname3', '(000)000-0000', 'name3@gmail.com');
INSERT INTO `users` VALUES ('7', 'fname4', 'lname4', '(000)000-0000', 'name4@gmail.com');
INSERT INTO `users` VALUES ('8', 'fname5', 'lname5', '(000)000-0000', 'name5@gmail.com');
INSERT INTO `users` VALUES ('9', 'fname6', 'lname6', '(000)000-0000', 'name6@gmail.com');
INSERT INTO `users` VALUES ('10', 'fname7', 'lname7', '(000)000-0000', 'name7@gmail.com');
INSERT INTO `users` VALUES ('11', 'fname8', 'lname8', '(000)000-0000', 'name8@gmail.com');
INSERT INTO `users` VALUES ('12', 'fname9', 'lname9', '(000)000-0000', 'name9@gmail.com');
INSERT INTO `users` VALUES ('13', 'fname10', 'lname10', '(000)000-0000', 'name10@gmail.com');
