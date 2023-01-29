/*
 Navicat Premium Data Transfer

 Source Server         : localh
 Source Server Type    : MySQL
 Source Server Version : 100427
 Source Host           : localhost:3306
 Source Schema         : sob

 Target Server Type    : MySQL
 Target Server Version : 100427
 File Encoding         : 65001

 Date: 29/01/2023 09:18:46
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (1, 'ADMIN', 'Acceso al backoffice', '2023-01-29 08:16:10', '2023-01-29 08:16:51');

-- ----------------------------
-- Table structure for user_roles
-- ----------------------------
DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE `user_roles`  (
  `user_id` int UNSIGNED NOT NULL,
  `role_id` int UNSIGNED NOT NULL,
  PRIMARY KEY (`user_id`, `role_id`) USING BTREE,
  INDEX `fk_role`(`role_id`) USING BTREE,
  INDEX `fk_user`(`user_id`) USING BTREE,
  CONSTRAINT `fk_role` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_roles
-- ----------------------------
INSERT INTO `user_roles` VALUES (509, 1);
INSERT INTO `user_roles` VALUES (511, 1);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` varchar(254) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `first_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `last_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `birth_date` date NULL DEFAULT NULL,
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `phone` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `avatar` varchar(254) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 512 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (507, 'oliesco@gmail.com', 'Oli', 'Escobar', '$2a$10$fq2I1SpyCX/SWHknYlqk8eOj04wsIiOJ27hF2HkO2S3ssf0oUceHK', '2018-07-13', 'Demir Mz24 S9 Apto 4', NULL, '1674990333248_explore.png', '2023-01-29 08:05:33', '2023-01-29 08:05:33', NULL);
INSERT INTO `users` VALUES (509, 'carolinabubenik@gmail.com', 'María Carolina', 'Bubenik Ricciardi', '$2a$10$fq2I1SpyCX/SWHknYlqk8eOj04wsIiOJ27hF2HkO2S3ssf0oUceHK', '1985-07-18', 'AV. PUJOL 1740', NULL, '1674990928265_Caro.jpg', '2023-01-29 08:15:28', '2023-01-29 09:15:47', NULL);
INSERT INTO `users` VALUES (510, 'biancaescobarbubenik@gmail.com', 'Bianca', 'Josefina', '$2a$10$gyw/802qgmok5PtqkN4gCeHpEWygU/E3MiFR8WRN9Xm3c1JQpbEHy', '2008-12-11', 'Demir Mz24 S9 Apto 4', NULL, '1674993396902_FondoProcesos3.jpg', '2023-01-29 08:56:37', '2023-01-29 08:56:37', NULL);
INSERT INTO `users` VALUES (511, 'admin@gmail.com', 'admin', 'admin', '$2a$10$sIEW2sBxAf6tN98MYDdXUulS8baeKYbHFlduBqyhCvbCjv/iBMBxy', '2000-01-01', 'admin', NULL, '1674994634785_fondoProcesos.webp', '2023-01-29 09:17:14', '2023-01-29 09:17:14', NULL);

SET FOREIGN_KEY_CHECKS = 1;
