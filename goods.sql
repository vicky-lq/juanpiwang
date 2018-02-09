/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : juanpiwang

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 17:00:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '商品id',
  `price` decimal(10,2) NOT NULL,
  `saleprice` decimal(10,2) DEFAULT NULL,
  `qty` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `imgs` varchar(255) NOT NULL DEFAULT 'img/null.jpg',
  `category` varchar(255) DEFAULT NULL,
  `size` double(255,0) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'toutou新款韩版包包', '89.99', '39.99', '1', '', '../img/list/l2.png', '包', null, null, '2018-02-09 00:27:53');
INSERT INTO `goods` VALUES ('2', '一字领露肩针织连衣裙', '299.00', '99.00', '1', null, '../img/list/l1.png', '女装', null, null, '2018-02-09 00:27:54');
INSERT INTO `goods` VALUES ('3', '针织吊带连衣裙两件套', '399.00', '249.00', '1', null, '../img/list/l2.png', '女装', null, null, '2018-02-09 00:27:55');
INSERT INTO `goods` VALUES ('4', '针织吊带连衣裙两件套', '389.00', '289.00', '1', null, '../img/list/l3.png', '女装', null, null, '2018-02-09 00:27:55');
INSERT INTO `goods` VALUES ('5', '庭内一字肩蕾丝连衣裙', '299.00', '219.00', '1', null, '../img/list/l4.png', '女装', null, null, '2018-02-09 00:27:56');
INSERT INTO `goods` VALUES ('6', '庭内一字肩蕾丝连衣裙', '189.00', '109.00', '1', null, '../img/list/l5.png', '女装', null, null, '2018-02-09 00:27:56');
INSERT INTO `goods` VALUES ('7', '荷叶边黑色长袖连衣裙', '359.00', '182.00', '1', null, '../img/list/l6.png', '女装', null, null, '2018-02-09 00:27:56');
INSERT INTO `goods` VALUES ('8', '荷叶边黑色长袖连衣裙', '444.00', '333.00', '1', null, '../img/list/l7.png', '女装', null, null, '2018-02-09 00:27:57');
INSERT INTO `goods` VALUES ('9', '风宽松黑色加厚卫衣', '332.00', '223.00', '1', null, '../img/list/l8.png', '女装', null, null, '2018-02-09 00:27:57');
INSERT INTO `goods` VALUES ('10', '喇叭袖黑色钉珠毛衣', '188.00', '89.00', '1', null, '../img/list/l9.png', '女装', null, null, '2018-02-09 00:27:57');
INSERT INTO `goods` VALUES ('11', '喇叭袖黑色钉珠毛衣', '258.00', '158.00', '1', null, '../img/list/l10.png', '女装', null, null, '2018-02-09 00:27:58');
INSERT INTO `goods` VALUES ('12', '黑白拼接连衣裙', '366.00', '256.00', '1', null, '../img/list/l11.png', '女装', null, null, '2018-02-09 00:27:58');
INSERT INTO `goods` VALUES ('13', '黑白拼接连衣裙', '699.00', '399.00', '1', null, '../img/list/l12.png', '女装', null, null, '2018-02-09 00:27:58');
INSERT INTO `goods` VALUES ('14', '长袖背心裙针织连衣裙', '329.00', '189.00', '1', null, '../img/list/l13.png', '女装', null, null, '2018-02-09 00:27:59');
INSERT INTO `goods` VALUES ('15', '长袖背心裙针织连衣裙', '519.00', '348.00', '1', null, '../img/list/l14.png', '女装', null, null, '2018-02-09 00:27:59');
INSERT INTO `goods` VALUES ('16', '长袖背心裙针织连衣裙', '123.00', '109.00', '1', null, '../img/list/l13.png', '女装', null, null, '2018-02-09 00:28:00');
INSERT INTO `goods` VALUES ('17', '钉珠娃娃领白衬衫', '226.00', '199.00', '1', null, '../img/list/l15.png', '女装', null, null, '2018-02-09 00:28:00');
INSERT INTO `goods` VALUES ('18', '钉珠娃娃领白衬衫', '365.00', '309.00', '1', null, '../img/list/l11.png', '女装', null, null, '2018-02-09 00:28:00');
INSERT INTO `goods` VALUES ('19', '白色钉珠套头毛衣', '518.00', '388.00', '1', null, '../img/list/l12.png', '女装', null, null, '2018-02-09 00:28:01');
INSERT INTO `goods` VALUES ('20', '白色钉珠套头毛衣', '331.00', '136.00', '1', null, '../img/list/l9.png', '女装', null, null, '2018-02-09 00:28:01');
INSERT INTO `goods` VALUES ('21', '名媛气质红色毛呢大衣', '428.00', '326.00', '1', null, '../img/list/l6.png', '女装', null, null, '2018-02-09 00:28:01');
INSERT INTO `goods` VALUES ('22', '名媛气质红色毛呢大衣', '266.00', '186.00', '1', null, '../img/list/l2.png', '女装', null, null, '2018-02-09 00:28:02');
INSERT INTO `goods` VALUES ('23', 'TOUTOU条纹撞色提挎包', '680.00', '280.00', '1', null, '../img/list/l1.png', null, null, '棕色', '2018-02-09 00:28:06');
INSERT INTO `goods` VALUES ('24', '撞色小方包百搭宽肩带', '349.00', '215.00', '20', null, '../img/list/l2.png', null, null, '棕色', '2018-02-07 11:27:11');
INSERT INTO `goods` VALUES ('25', 'toutou丝绒迷你小钱包', '240.00', '69.00', '39', null, '../img/list/l7.png', '女包', null, null, '2018-02-07 11:27:11');
INSERT INTO `goods` VALUES ('26', '波浪拼接撞色小方包', '709.00', '179.00', '45', null, '../img/list/l15.png', '女包', null, null, null);
INSERT INTO `goods` VALUES ('27', '波浪拼接撞色小方包', '456.00', '199.00', '33', null, '../img/list/l11.png', '女包', null, null, '2018-02-07 13:55:34');
INSERT INTO `goods` VALUES ('28', '黑白拼接连衣裙', '228.00', '188.00', '46', null, '../img/list/l9.png', null, null, null, '2018-02-07 13:56:16');
INSERT INTO `goods` VALUES ('29', 'toutou迷你纯色凯莉包', '620.00', '129.00', '55', null, '../img/list/l2.png', null, null, null, null);
INSERT INTO `goods` VALUES ('30', 'toutou迷你纯色凯莉包', '311.00', '88.00', '45', null, '../img/list/l3.png', null, null, null, '2018-02-07 13:57:31');
INSERT INTO `goods` VALUES ('31', 'toutou天鹅丝绒链条包', '555.00', '121.00', '89', null, '../img/list/l3.png', null, null, null, '2018-02-07 13:58:12');
INSERT INTO `goods` VALUES ('32', 'TOUTOU拉杆箱奇趣动物', '333.00', '111.00', '55', null, '../img/list/l3.png', null, null, null, '2018-02-07 14:02:36');
INSERT INTO `goods` VALUES ('33', 'toutou丝绒迷你小钱包', '555.00', '324.00', '33', null, '../img/list/l3.png', null, null, null, null);
INSERT INTO `goods` VALUES ('34', 'toutou丝绒迷你小钱包', '662.00', '334.00', '66', null, '../img/list/l7.png', null, null, null, null);
INSERT INTO `goods` VALUES ('35', 'toutou丝绒迷你小钱包', '335.00', '223.00', '44', null, '../img/list/l1.png', null, null, null, '2018-02-07 14:05:30');
INSERT INTO `goods` VALUES ('36', 'toutou丝绒迷你小钱包', '556.00', '331.00', '45', null, '../img/list/l3.png', null, null, null, '2018-02-07 14:05:23');
INSERT INTO `goods` VALUES ('37', '钉珠娃娃领白衬衫', '446.00', '332.00', '66', '', '../img/list/4.png', null, null, null, null);
SET FOREIGN_KEY_CHECKS=1;
