SET NAMES UTF8;
DROP DATABASE IF EXISTS db_spa;
CREATE DATABASE db_spa CHARACTER SET utf8;
USE db_spa;

CREATE TABLE `blog` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT,
  `msg` varchar(256) DEFAULT NULL,
  `time` bigint(20) DEFAULT NULL,
  `uname` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `blog` VALUES(1, '1', 20170923135145, 'Tom');
INSERT INTO `blog` VALUES(2, '2', 20170923135145, 'Keven');
INSERT INTO `blog` VALUES(3, '3', 20170923135145, NULL);


CREATE TABLE `user` (
  `NO` int(11) DEFAULT NULL,
  `uname` varchar(16) NOT NULL UNIQUE,
  `name` varchar(16) NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `birthday` date NOT NULL,
  `qq` varchar(16) NOT NULL,
  `weChat` varchar(32) NOT NULL,
  `phone` varchar(16) NOT NULL,
  `city` varchar(16) NOT NULL,
  `avatar` varchar(128) NOT NULL,
  `other2` int(11) NOT NULL,
  `password` varchar(16) NOT NULL,
  `uid` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `user` VALUES(NULL, 'men', 'xiaoming', 1, '2017-11-01', '', 'menmen', '', '', 'img/avatar/me.png', 0, 'men', 334);