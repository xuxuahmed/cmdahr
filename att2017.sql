-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2017 at 08:38 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `att2017`
--

-- --------------------------------------------------------

--
-- Table structure for table `checkinout`
--

CREATE TABLE `checkinout` (
  `logid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `checktime` datetime NOT NULL,
  `checktype` varchar(1) DEFAULT NULL,
  `verfiycode` int(11) DEFAULT NULL,
  `sensorid` varchar(50) DEFAULT NULL,
  `localref` int(11) DEFAULT NULL,
  `terref` int(11) DEFAULT NULL,
  `memoinfo` varchar(30) DEFAULT NULL,
  `workcode` int(11) DEFAULT NULL,
  `candelete` bit(1) DEFAULT NULL,
  `userno` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `deviceid` int(11) DEFAULT NULL,
  `devicename` varchar(50) DEFAULT NULL,
  `event` int(11) DEFAULT NULL,
  `serialport` int(11) DEFAULT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `connecttype` int(11) DEFAULT NULL,
  `recordtype` int(11) DEFAULT NULL,
  `cardno` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `checkinout`
--

INSERT INTO `checkinout` (`logid`, `userid`, `checktime`, `checktype`, `verfiycode`, `sensorid`, `localref`, `terref`, `memoinfo`, `workcode`, `candelete`, `userno`, `username`, `deviceid`, `devicename`, `event`, `serialport`, `ip`, `connecttype`, `recordtype`, `cardno`) VALUES
(0, 0, '0000-00-00 00:00:00', 'c', 0, 'sensorid', 0, 0, 'memoinfo', 0, b'1', 'userno', 'username', 0, 'devicename', 0, 0, 'ip', 0, 0, 'cardno'),
(465155, 27, '0000-00-00 00:00:00', 'I', 100, '1', 0, 0, '', 0, b'1', '136', 'Samah', 1, 'IN01', 100, 1, '192.168.0.36', 1, 1, ''),
(465156, 12, '0000-00-00 00:00:00', 'I', 100, '1', 0, 0, '', 0, b'1', '150', 'Mariyam', 1, 'IN01', 100, 1, '192.168.0.36', 1, 1, ''),
(465157, 11, '0000-00-00 00:00:00', 'I', 100, '1', 0, 0, '', 0, b'1', '134', 'Shizama', 1, 'IN01', 100, 1, '192.168.0.36', 1, 1, ''),
(465158, 15, '0000-00-00 00:00:00', 'I', 100, '1', 0, 0, '', 0, b'1', '148', 'Moosa', 1, 'IN01', 100, 1, '192.168.0.36', 1, 1, ''),
(465159, 35, '0000-00-00 00:00:00', 'I', 100, '1', 0, 0, '', 0, b'1', '157', 'Muznee', 1, 'IN01', 100, 1, '192.168.0.36', 1, 1, ''),
(465160, 13, '0000-00-00 00:00:00', 'I', 100, '1', 0, 0, '', 0, b'1', '153', 'Faa', 1, 'IN01', 100, 1, '192.168.0.36', 1, 1, ''),
(465161, 20, '0000-00-00 00:00:00', 'I', 100, '1', 0, 0, '', 0, b'1', '123', 'Shiuny', 1, 'IN01', 100, 1, '192.168.0.36', 1, 1, ''),
(465162, 30, '0000-00-00 00:00:00', 'I', 100, '1', 0, 0, '', 0, b'1', '106', 'Ismail', 1, 'IN01', 100, 1, '192.168.0.36', 1, 1, ''),
(465163, 31, '0000-00-00 00:00:00', 'I', 100, '1', 0, 0, '', 0, b'1', '105', 'Saleem', 1, 'IN01', 100, 1, '192.168.0.36', 1, 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `individuals`
--

CREATE TABLE `individuals` (
  `Ind_ID` int(11) NOT NULL,
  `RCN` int(11) NOT NULL,
  `IdentityCard` varchar(10) NOT NULL,
  `PP_No` varchar(15) DEFAULT NULL,
  `PPExpiry` date DEFAULT NULL,
  `Title` varchar(10) NOT NULL,
  `DhivehiTitle` varchar(100) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `DhivehiName` varchar(300) NOT NULL,
  `PTele` varchar(10) DEFAULT NULL,
  `MTele` varchar(10) DEFAULT NULL,
  `ExtNo` varchar(10) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Sex` tinyint(4) NOT NULL,
  `ReID` int(11) NOT NULL,
  `CultureID` int(11) NOT NULL,
  `logInName` varchar(25) NOT NULL,
  `AccBranch` varchar(10) DEFAULT NULL,
  `AccNo` varchar(15) DEFAULT NULL,
  `AccType` varchar(10) DEFAULT NULL,
  `AccName` varchar(50) DEFAULT NULL,
  `AccBank` smallint(6) DEFAULT NULL,
  `AccBankChg` decimal(10,0) NOT NULL,
  `AccTransfer` tinyint(4) NOT NULL,
  `LUpdateDt` date NOT NULL,
  `LUpdateUser` varchar(100) DEFAULT NULL,
  `Paddress` varchar(100) DEFAULT NULL,
  `PaddressD` varchar(300) DEFAULT NULL,
  `CAddress` varchar(100) DEFAULT NULL,
  `CAddressD` varchar(300) DEFAULT NULL,
  `island` smallint(6) DEFAULT NULL,
  `Atoll` smallint(6) DEFAULT NULL,
  `Country` smallint(6) DEFAULT NULL,
  `MachineID` varchar(20) DEFAULT NULL,
  `login` varchar(50) DEFAULT NULL,
  `updated` date DEFAULT NULL,
  `PhotoN` varchar(25) DEFAULT NULL,
  `ApplyLate` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `individuals`
--

INSERT INTO `individuals` (`Ind_ID`, `RCN`, `IdentityCard`, `PP_No`, `PPExpiry`, `Title`, `DhivehiTitle`, `Name`, `DhivehiName`, `PTele`, `MTele`, `ExtNo`, `DOB`, `Sex`, `ReID`, `CultureID`, `logInName`, `AccBranch`, `AccNo`, `AccType`, `AccName`, `AccBank`, `AccBankChg`, `AccTransfer`, `LUpdateDt`, `LUpdateUser`, `Paddress`, `PaddressD`, `CAddress`, `CAddressD`, `island`, `Atoll`, `Country`, `MachineID`, `login`, `updated`, `PhotoN`, `ApplyLate`) VALUES
(2, 101, 'A041781', 'C 006300', '2031-10-11', 'Ms', '??????????', 'Fathimath Shafeega', '???????? ??????', '-', '7906621', '111', '0000-00-00', 1, 1, 1, 'cmda\\shafeega', '7701', '106488', '101', 'FATHIMATH SHAFEEGA', 1, '0', 1, '2027-12-10', 'sa', 'V. Meleimaa', '?.????????', 'M. kandoogasdhoshuge', '?.???????????????', 1, 5, 321, '101', 'CMDA\\muna', '2013-04-11', 'P120110316T180445600.jpg', 0),
(3, 107, 'A041752', 'H 0300282', '2028-12-10', 'Ms', '??????????', 'Mariyam Visam', '???????? ??????', '-', '7771943', '113', '0000-00-00', 1, 1, 1, 'Cmda\\m.visam', '7701', '159252', '101', 'Mariyam Visam', 1, '0', 1, '2028-12-10', 'sa', 'G.Saima', '?.??????', 'H.Spanwheel', '?.??????????', 1, 5, 321, '107', 'CMDA\\muna', '2013-04-11', 'P120120911T083425463.jpg', 0),
(4, 103, 'A079844', 'H 0300103', '2028-12-10', 'Mr.', '??????????', 'Makhzoom Saleem', '???????? ??????', '3341669', '7791868', '108', '0000-00-00', 0, 1, 1, 'cmda\\makhzoom', '7701', '129166', '101', 'Makhzoom Saleem', 1, '0', 1, '2028-12-10', 'sa', 'Shabnamge', '??????????', 'Ma. Light Corner 2 , 1st Floor', '-', 11, 5, 321, '103', 'CMDA\\ainth', '2005-06-16', 'P120110316T180754630.jpg', 0),
(5, 105, 'A048343', '-', '2028-12-10', 'Mr.', '??????????', 'Ibrahim Saleem', '?????????? ??????', '-', '9895915', '-', '0000-00-00', 0, 1, 1, 'cmda\\saleem', '7703', '217274', '1', 'IBRAHIM SALEEM', 1, '0', 1, '2028-12-10', 'sa', 'Nooraaneege', '????????', 'Hulhumale, Lot No: 10055', '-', 188, 23, 321, '105', 'CMDA\\ainth', '2026-05-14', 'P120110316T180844893.jpg', 0),
(6, 106, 'A041391', '-', '2028-12-10', 'Mr.', '??????????', 'Ismail Abdul Razzaq', '?????????? ????????????????', '-', '7949300', '-', '0000-00-00', 0, 1, 1, 'cmda\\ismail', '7703', '212246', '1', 'Ismail Abdul Razzag', 1, '0', 1, '2028-12-10', 'sa', 'Finifenmage', '????????????', 'Hulhumale Flat no: 4-G-07', '-', 159, 21, 321, '106', 'CMDA\\ainth', '2021-02-17', 'P120110316T180821393.jpg', 0),
(7, 109, 'A033804', '-', '2028-12-10', 'MS.', '??????????', 'Aishath Liyusha', '???????? ??????', '-', '7933893', '-', '0000-00-00', 1, 1, 1, 'cmda\\liyusha', '7703', '206853', '101', 'Aishath Liyusha', 1, '0', 1, '2028-12-10', 'sa', 'h. Muiythoshi', '?. ????????', 'H. Muiythoshi', '?. ????????', 1, 5, 321, '109', 'CMDA\\muna', '2013-04-11', 'P120110316T182415430.jpg', 0),
(8, 110, '', '-', '2001-01-01', 'Mr.', '??????????', 'Mohamed Nahushan', '?????????? ????????', '-', '7778822', '-', '0000-00-00', 0, 1, 1, 'cmda\\nahushan', '7703', '208448', '101', 'Mohamed Nahushan', 1, '0', 1, '2028-12-10', 'sa', 'H. Millenium', '?. ??????????', 'H. Millenium', '?. ??????????', 1, 5, 321, '110', 'CMDA\\muna', '2013-04-11', 'P120110316T180728670.jpg', 0),
(9, 129, 'A012907', '-', '2028-12-10', 'Ms.', '??????????', 'Raheema Abdul Gadir', '?????? ??????????????', '-', '7794045', '-', '0000-00-00', 1, 1, 1, 'cmda\\raheema', '7701', '124659', '101', 'Raheema Abdul Gadir', 1, '0', 1, '2028-12-10', 'sa', 'MA.Daizy Villa', '??. ?????? ????', 'Ma.Seneka', '??. ??????', 1, 5, 321, '129', 'CMDA\\liyusha', '2005-02-14', 'P120110316T181020783.jpg', 0),
(10, 133, 'A067077', '-', '2028-12-10', 'MS.', '??????????', 'Aminath Nisy', '???????? ????', '-', '7797032', '-', '0000-00-00', 1, 1, 1, 'cmda\\nisy', '7701', '127829', '101', 'Aminath Nisy', 1, '0', 1, '2028-12-10', 'sa', 'Red Cross', '???? ??????', 'H.Isaaz', '?.??????', 174, 22, 321, '133', 'CMDA\\muna', '2013-04-11', 'P120110316T180304113.jpg', 0),
(11, 138, 'A092281', '-', '2001-01-01', 'Ms.', '??????????', 'Fathmath Nadha', '???????? ????', '-', '7930480', '-', '0000-00-00', 1, 1, 1, 'cmda\\nadha', '7703', '225061', '1', 'Fathmath Nadha', 1, '0', 1, '2028-12-10', 'sa', 'M.Chilhiyajehige', '?. ????????????', 'M.Chilhiyaa', '?. ??????', 1, 5, 321, '138', 'CMDA\\muna', '2013-04-11', 'P120120624T153310957.jpg', 0),
(12, 112, 'A003221', '-', '2001-01-01', 'ms', '??????????', 'Zihna Naseer', '?????? ??????', '-', '7455695', '-', '0000-00-00', 1, 1, 1, 'cmda\\zihna', '7701', '135476', '101', 'Zihna Naseer', 1, '0', 1, '2028-12-10', 'sa', 'Hazaarumaage', '??????????', 'H.Alcove', '?. ????????', 80, 14, 321, '112', 'CMDA\\muna', '2013-04-11', NULL, 0),
(13, 117, 'A077602', '-', '2028-12-10', 'MS', '??????????', 'Aishath Asifa', '???????? ??????', '-', '7747605', '118', '0000-00-00', 0, 1, 1, 'cmda\\asifa', '7701', '135391', '1', 'Aishath Asifa', 1, '0', 1, '2028-12-10', 'sa', 'H.Malaaga, Male', '?.??????', 'H.Malaaga, Male', '?.??????', 1, 5, 321, '117', 'CMDA\\muna', '2013-04-11', 'P120110316T180325160.jpg', 0),
(14, 147, 'A153984', '-', '2028-12-10', 'Ms.', '??????????', 'Hawwa Nafia', '?????? ??????', '-', '7895250', '107', '0000-00-00', 1, 1, 1, 'CMDA\\NAFIA', '7708', '383953', '101', 'Hawwa Nafia', 1, '0', 1, '2028-12-10', 'sa', 'Eynaaz', '??????', 'M. Linkia', '?. ????????', 118, 22, 321, '147', 'CMDA\\muna', '2013-04-11', 'P120110103T144653147.jpg', 0),
(15, 149, 'A122762', '-', '2001-01-01', 'Ms.', '??????????', 'Imala Hussain', '?????? ????????', '-', '9858313', '-', '0000-00-00', 1, 1, 1, 'CMDA\\Imala', '7704', '460877', '1', 'Imala Hussain', 1, '0', 1, '2028-12-10', 'sa', 'Finifenmaage', '????????????', 'M.Badikulhimaage', '?.????????????', 188, 23, 321, '149', 'CMDA\\muna', '2013-04-11', NULL, 0),
(16, 121, 'A092968', '-', '2028-12-10', 'MS', '??????????', 'Fathmath Abdul Kareem', '???????? ??????????????', '-', '7692895', '104', '0000-00-00', 1, 1, 1, 'cmda\\fathmath', '7704', '273699', '101', 'Fathimath Abdul Kareem', 1, '0', 1, '2028-12-10', 'sa', 'lUCKY', '????', 'M. Rizamandhu Vaadhee', '?. ??????????????', 126, 18, 321, '121', 'CMDA\\fathmath', '2028-01-14', 'P120110316T181148377.jpg', 0),
(17, 123, 'A306492', 'E 0331496', '2017-11-11', 'MS', '??????????', 'Aminath Shiuny Saeed', '???????? ?????? ??????', '-', '9984136', '101', '0000-00-00', 1, 1, 1, 'cmda\\shiuny', '7701', '106934', '101', 'Aminath Shiuny Saeed', 1, '0', 1, '2028-12-10', 'sa', 'H.Fine Beach', '?.??????????', 'H.Fine Beach', '?.??????????', 1, 5, 321, '123', 'CMDA\\fathmath', '2030-09-15', 'P120110316T180904910.jpg', 0),
(18, 124, 'A147393', '-', '2028-12-10', 'Mr.', '??????????', 'Muslih Mohamed Ismail', '???????? ?????????? ??????????', '-', '9653292', '-', '0000-00-00', 0, 1, 1, 'cmda\\muslih', '7701', '161685', '1', 'Muslih Mohamed Ismail', 1, '0', 1, '2028-12-10', 'sa', 'Kudhimage', '????????', 'V.Edhuruvehi, 12-5-B', '?.??????????? ??-5-12', 193, 24, 321, '124', 'CMDA\\fathmath', '2007-09-16', 'P120110316T181049127.jpg', 0),
(19, 134, 'A088837  ', '-', '2001-01-01', 'Ms.', '??????????', 'Aminath Shizama', '???????? ??????', '-', ' -', '-', '0000-00-00', 1, 1, 1, 'cmda\\shizama', '7701', '168341', '1', 'Aminath Shizama', 1, '0', 1, '2028-12-10', 'sa', 'Vina', '????', 'M. White label', '?. ????????????', 84, 15, 321, '134', 'CMDA\\fathmath', '2013-08-15', 'P120110316T180352330.jpg', 0),
(20, 136, 'A114237', '-', '2001-01-01', 'Mr.', '??????????', 'Ali Samah', '???? ??????', '-', '7931311', '-', '0000-00-00', 0, 1, 1, 'cmda\\samah', '7701', '170889', '101', 'Ali Samah', 1, '0', 1, '2028-12-10', 'sa', 'H. Threek light', '?. ????????????', 'H. Threek light', '?. ????????????', 1, 5, 321, '136', 'CMDA\\fathmath', '2015-09-15', 'P120110316T180511963.jpg', 0),
(21, 137, 'A103340', '-', '2001-01-01', 'MS', '??????????', 'Aishath Muna', '???????? ????', '-', '7586067', '0', '0000-00-00', 1, 1, 1, 'CMDA\\muna', '7701', '166409', '1', 'Aishath Muna', 1, '0', 1, '2028-12-10', 'sa', 'Maakoani', '??????', '46-3-07 Hulhumale Flat', '?.??????', 86, 15, 321, '137', 'CMDA\\muna', '2025-04-11', NULL, 0),
(22, 145, '', '-', '2028-12-10', 'Mr.', '??????????', 'Abdul Jaleel', '???????? ??????', '-', '7934353', '112', '0000-00-00', 0, 1, 1, 'cmda\\jaleelu', '7710', '383875', '1', 'Abdul Jaleel', 1, '0', 1, '2028-12-10', 'sa', 'Aabaadhu', '??????', 'V.Lovely House', '?. ?????? ??????', 211, 12, 321, '145', 'CMDA\\liyusha', '2029-05-13', 'P120110103T144754380.jpg', 0),
(23, 144, 'A146165', '-', '2028-12-10', 'MS', '??????????', 'Mariyam Vabil Nuzair', '???????? ?????? ????????', '-', '7790997', '-', '0000-00-00', 1, 1, 1, 'cmda\\vaabil', '7703', '235718', '101', 'Mariyam Vabil Nuzair', 1, '0', 1, '2028-12-10', 'sa', 'H.Vatheenigasthoshuge', '?.??????????????????', 'H.VATHTHEENIGASDHOSHUGE', '?.??????????????????', 1, 5, 321, '144', 'CMDA\\muna', '2013-04-11', 'P120110103T144517990.jpg', 0),
(24, 148, 'A139685', '-', '2029-12-10', 'Mr.', '??????????', 'Moosa Mohamed', '???? ??????????', '-', '7721762', '-', '0000-00-00', 0, 1, 1, 'CMDA\\moosa', '7718', '363433', '101', 'MOOSA MOHAMED', 1, '0', 1, '2029-12-10', 'sa', 'Leyfa', '????', 'Hulhumale, Flat 5G-07', '????????? ?????? 5??-07', 124, 17, 321, '148', 'CMDA\\muna', '2013-04-11', 'P120110102T111432263.jpg', 0),
(25, 150, 'A019975', '150', '2029-12-10', 'Ms.', '??????????', 'Mariyam Mohamed', '???????? ??????????', '0', '0', '0', '0000-00-00', 1, 1, 1, 'cmda\\mariyam', '7708', '380103', '102', 'MARIYAM MOHAMED', 1, '0', 1, '2029-12-10', 'sa', 'kunahandhooge', '????????????', 'M.maakolhu', '?. ??????', 118, 22, 321, '150', 'CMDA\\fathmath', '2003-01-13', 'P120110320T113951653.jpg', 0),
(26, 151, 'A053186', '-', '2001-01-01', 'MS.', '??????????', 'Ikleela Ismail', '???????? ??????????', '3324799', '7901848', '123', '0000-00-00', 1, 1, 1, 'CMDA\\IKLEELA', '7701', '125942', '101', 'IKLEELA ISMAIL', 1, '0', 1, '2029-12-10', 'sa', 'H.Vinoliya', '?.????????', 'Ma.Neyo', '??.????', 1, 5, 321, '151', 'CMDA\\muna', '2013-04-11', NULL, 0),
(27, 152, 'A058022', '-', '2001-01-01', 'Mr.', '??????????', 'Shafin Ahmed', '?????? ????????', '-', '7753978', '-', '0000-00-00', 0, 1, 1, 'cmda\\shafin', '7701', '157994', '101', 'Shafin ahmed', 1, '0', 1, '2029-12-10', 'sa', 'M. Nedhunge', '?. ????????', 'M. NEDHUNGE', '?. ????????', 1, 5, 321, '152', 'CMDA\\muna', '2013-04-11', 'P120110316T181308057.jpg', 0),
(28, 100, 'A057006', '-', '2029-12-10', 'Ms.', '??????????', 'Azleema Ahmed', '???????? ????????', '-', '7794084', '124', '0000-00-00', 1, 1, 1, 'cmda\\azu', '7701', '109223', '101', 'AZLEEMA AHMED', 1, '0', 1, '2029-12-10', 'sa', 'Dhafthar', '???? ?????????????? ?????? ????????', 'H.Marvel', '?.??????', 1, 5, 321, '100', 'CMDA\\ismail', '2021-06-12', 'P120110316T180546493.jpg', 0),
(29, 119, 'A154524', '-', '2001-01-01', 'ms.', '??????????', 'Sara mohamed', '???? ??????????', '-', '7869299', '-', '0000-00-00', 1, 1, 1, 'CMDA\\sara', '7701', '162998', '101', 'SARA MOHAMED', 1, '0', 1, '2029-12-10', 'sa', 'fifty flower', '?????? ???????', 'G. Vanha', '?. ??????', 21, 7, 321, '119', 'CMDA\\fathmath', '2025-02-14', 'P120120911T083454167.jpg', 0),
(30, 153, 'A111100', 'A 283205', '2002-01-12', 'MS', '??????????', 'Fathimath Abdulla Kamaaluddeen', '???????? ??????? ????????????', '-', '7413739', '-', '0000-00-00', 1, 1, 1, 'cmda\\f.kamaludeen', '7703', '228060', '101', 'Fathimath Abdulla Kamaaluddeen', 1, '0', 1, '2012-02-11', 'HR_User', 'MA.Aanuveli', '??. ????????', 'MA.Aanuveli', '??. ????????', 1, 5, 321, '153', 'CMDA\\liyusha', '2026-08-13', 'P120110320T113812487.jpg', 0),
(32, 104, 'A037034', '104', '2021-05-11', 'Ms.', '??????????', 'Aminath Mohamed Didi', '???????? ?????????? ????', '-', '7777520', '-', '0000-00-00', 1, 1, 1, 'cmda\\ainth', '7701', '115239', '101', 'AMINATH MOHAMED DIDI', 1, '0', 1, '2014-02-11', 'HR_User', 'Vadige', '??????', 'M.Sunny Breeze, Apt 6A', '?. ???? ??????? ???????????? 6??', 80, 14, 321, '104', 'CMDA\\ainth', '2005-06-16', 'P120110316T180416607.jpg', 0),
(34, 154, 'A141535', '-', '2001-01-01', 'Ms.', '??????????', 'Mariyam Shizna', '???????? ??????', '-', '7463338', '109', '0000-00-00', 1, 1, 1, 'cmda\\shizna', '7704', '272015', '101', 'Mariyam Shizna Umar', 1, '0', 1, '2004-08-11', 'macro', 'M. Nadhee', '?. ????', 'M. NADHEE', '?. ????', 1, 5, 321, '154', 'CMDA\\jaleelu', '2006-09-11', 'P120120911T083532637.jpg', 0),
(35, 155, 'A077689', '-', '2001-01-01', 'Mr.', '??????????', 'Eruzath Latheef', '???????? ??????', '0', '0', '0', '0000-00-00', 0, 1, 1, 'cmda\\eruzath', '7704', '132219', '1', 'Eruzath Latheef', 1, '0', 1, '2022-10-11', 'macro', 'H.Hiyev', '?.??????', 'm.Silver Star', '?.??????? ?????', 1, 5, 321, '154', 'CMDA\\jaleelu', '2001-11-11', NULL, 0),
(36, 157, 'A050513', '-', '2010-01-12', 'Mr.', '?????????? ', 'Muznee Mohamed', '?????? ??????????', '0', '0', '0', '0000-00-00', 0, 1, 1, 'cmda\\muznee', '7701', '141433', '101', 'Muznee Mohamed', 1, '0', 1, '2010-01-12', 'macro', 'M. Westend', '?. ????????????', 'G. Green House', '?.?????? ??????', 1, 5, 321, '157', 'CMDA\\raheema', '2016-09-13', 'P120120624T152315813.jpg', 0),
(38, 160, 'A071282', '-', '2010-07-12', 'Ms.', '??????????', 'Fathimath Sama', '???????? ????', '-', '9717974', '106', '0000-00-00', 1, 1, 1, 'CMDA\\sama', '7701', '170364', '101', 'Fathimath Sama', 1, '0', 1, '2010-07-12', 'macro', 'Palm Shade', '????????', 'H.romania', '?.????????', 184, 23, 321, '160', 'CMDA\\fathmath', '2015-05-14', 'P120120906T133845427.jpg', 0),
(39, 159, 'A052381', '-', '2001-01-01', 'Ms.', '??????????', 'Aishath Ibrahim', '???????? ??????????', '-', '7921233', '127', '0000-00-00', 1, 1, 1, 'cmda\\ibrahim.a', '7701', '223620', '101', 'Aishath Ibrahim', 1, '0', 1, '2010-07-12', 'macro', 'M.Andhaleebuge', '?.????????????', 'G.BodufenvaLhuge', '?.??????????????', 1, 5, 321, '159', 'CMDA\\jaleelu', '2024-07-12', 'P120120906T133819173.jpg', 0),
(41, 158, 'A121091', '-', '2012-07-12', 'Ms.', '??????????', 'Fathimath Rifna', '???????? ??????', '-', '7698612', '109', '0000-00-00', 1, 1, 1, 'cmda\\rifna', '7703', '492170', '101', 'Fathimath Rifna', 1, '0', 1, '2012-07-12', 'macro', 'Dhilbaharuge', '????????????', 'Flat no. 87-02-02, Block 87, Hulhumale\'', '???????? . ?????? 02-02-87', 199, 24, 321, '900003', 'CMDA\\liyusha', '2025-11-13', 'P120120906T133747667.jpg', 0),
(42, 156, '-', '-', '2009-02-12', 'Ms.', '??????????', 'Aishath Muneeza', '???????? ??????', '0', '0', '0', '2009-02-12', 1, 1, 1, 'cmda\\muneeza', '0', '0', '0', 'Aishath Muneeza', 1, '0', 1, '2002-09-12', 'macro', '-', '-', '-', '-', 1, 5, 321, '156', 'CMDA\\jaleelu', '2002-09-12', NULL, 0),
(43, 203, '-', '-', '2004-07-13', 'Mr.', '??????????', 'Nabeeh Ibrahim Zakariyya', '?????? ?????????? ??????????', '0', '0', '0', '2004-07-13', 0, 1, 1, 'cmda\\nabeeh', '0', '0', '0', 'Nabeeh Ibrahim Zakariyya', 1, '0', 1, '2007-04-13', 'macro', '-', '-', '-', '-', 1, 5, 321, '203', 'CMDA\\jaleelu', '2007-04-13', NULL, 0),
(44, 161, 'A251641', '-', '2001-01-01', 'Ms.', '??????????', 'Fathimath Raoofa', ' ???????? ??????', '0', '7481014', '110', '2019-08-02', 1, 1, 1, 'Raoofa', '0', '0', '0', 'Fathimath Raoofa', 1, '0', 1, '2019-08-13', 'macro', 'Kaamiyaabuge, F.Nilandhoo', '??????????? ?.????????', 'Endheri, HuLhumAAle', '????????? ????????', 1, 5, 321, '161', 'CMDA\\raheema', '2019-08-13', NULL, 0),
(45, 163, 'A095692', '-', '2001-01-01', 'Ms. ', '?????????? ', 'Azma', '??????', '-', '7406208', '102', '0000-00-00', 1, 1, 1, 'cmda\\azma', '7704', '259339', '101', 'Azma', 1, '0', 1, '2016-09-13', 'macro', 'M. Sunrise Aage', '?.??????????????', 'M. Sunrise Aage', '?.??????????????', 1, 5, 321, '163', 'CMDA\\fathmath', '2020-05-14', 'P120140305T100005777.jpg', 0),
(46, 162, 'A119988', '-', '2001-01-01', 'Mr.', '??????????', 'Mohamed Shaneez Abdul Latheef', '?????????? ?????? ??????????????', '7782811', '7766906', '162', '0000-00-00', 0, 1, 1, 'cmda\\shaneez', '7701', '108455', '101', 'Mohamed Shaneez Abdul Latheef', 1, '0', 1, '2016-09-13', 'macro', 'M. Mirihimaage', '?. ??????????', 'M. Iramaa', '?. ??????', 1, 5, 321, '162', 'CMDA\\liyusha', '2030-09-13', 'P120140126T092702840.jpg', 0),
(47, 164, 'A318858', '-', '2001-01-01', 'Ms.', '??????????', 'Mariyam Khathuma', '???????? ??????', '0', '7706269', '0', '0000-00-00', 1, 1, 1, 'CMDA\\Khathuma', '7703', '245756', '1', 'Mariyam Khathuma', 1, '0', 1, '2029-10-13', 'macro', 'Thilinfaru/R.Kandholhudhoo', '??????????/?.?????????', 'Ma. Gumree', '??.??????', 1, 5, 321, '164', 'CMDA\\liyusha', '2024-11-13', 'P120140305T100035633.jpg', 0),
(49, 165, 'A152742  ', '-', '2024-11-13', 'Mr.', '??????????', 'Mohamed Ishraq Faisal', '?????????? ???????? ????????', '7941801', '7733696', '0', '0000-00-00', 0, 1, 1, 'cmda\\Ishraq', '7770', '10', '935', 'Mohamed Ishraq Faisal', 1, '0', 1, '2024-11-13', 'macro', 'G.Nooranfini', '?.??????????', 'G.Nooranfini', '?.??????????', 1, 5, 321, '165', 'CMDA\\fathmath', '2006-03-17', 'P120140126T092734647.jpg', 0),
(50, 166, 'A213906', '-', '2024-11-13', 'Mr.', '??????????', 'Ajwad', '????????', '0', '7767661', '0', '0000-00-00', 0, 1, 1, 'cmda\\ajwadz', '0', '0', '0', 'Ajwad', 1, '0', 1, '2024-11-13', 'macro', 'Shelter/Dh.Kudahuvadhoo', '???????/?.??????????', 'M.Hirinaidhoo', '?.??????????', 1, 5, 321, '166', 'CMDA\\liyusha', '2024-11-13', 'P120140305T100052777.jpg', 0),
(51, 167, 'A049774', '-', '2003-03-14', 'MS.', '??????????', 'Zubeydha Ahmed', '???????? ????????', '0', '9877734', '0', '0000-00-00', 1, 1, 1, 'CMDA\\ZUBEYDHA', '7703', '498693', '101', 'Zubeydha Ahmed', 1, '0', 1, '2003-03-14', 'macro', 'Saan villa / L.Maavah', '????????/ ?.??????', 'M .Asia/ MAle\'', ' -', 1, 5, 321, '167', 'CMDA\\fathmath', '2027-02-17', 'P120140304T101958770.jpg', 0),
(52, 168, 'A147414', '-', '2030-11-14', 'Mr.', '??????????', 'Safaath Ahmed Zahir', '?????? ???????? ??????', '0', '7839986', '0', '0000-00-00', 0, 1, 1, 'Safaath', '0', '0', '0', 'Safaath Ahmed Zahir', 1, '0', 0, '2030-11-14', 'macro', 'Hulhu Male\' Goathi 10228', '????????? ???? 10228', 'G.Grace Land', '?.?????? ??????', 1, 5, 321, '168', 'CMDA\\fathmath', '2030-11-14', NULL, 1),
(53, 169, 'A012153', '-', '2002-03-15', 'Mr.', '??????????', 'Ahmed Naseer', '???????? ??????', ' -', '7777947', '111', '0000-00-00', 0, 1, 1, 'cmda\\naseer', '7701', '111443', '1', 'Ahmed Naseer', 1, '0', 1, '2003-02-15', 'macro', 'Musthareege', '??????????? ?.??????', 'G.Aasaani Apt 3B', '?. ?????? ', 12, 5, 321, '169', 'CMDA\\fathmath', '2026-09-16', 'P120150218T105541237.jpg', 1),
(65, 170, 'A098467', '-', '2004-03-16', 'MS', '??????????', 'Aishath Najaath Moosa', '???????? ?????? ????', ' -', '7561832', '0', '0000-00-00', 1, 1, 1, 'CMDA\\najaath', '7701', '160051', '1', 'Aishath Najaath Moosa', 1, '0', 1, '2003-04-16', 'sa', 'M.Fen niru', '?.????????', 'M.FEN NIRU', '?.????????', 1, 5, 321, '170', 'CMDA\\fathmath', '2026-04-16', 'P120160510T091323220.jpg', 0),
(69, 509, 'A074523', '-', '2007-06-16', 'Ms. ', '?????????? ', 'HAWWA SAFNA', '?????? ??????', '0', '0', '0', '2007-06-16', 1, 1, 1, '509', '0', '0', '0', 'HAWWA SAFNA', 1, '0', 0, '2007-06-16', 'sa', 'h. vaifilaage, Male\'', '?????? ??????', 'H. Vaifilaage, Male\'', '?.??????????', 1, 5, 321, '509', 'CMDA\\ainth', '2007-06-16', NULL, 1),
(70, 508, 'A066995', '508', '2006-07-16', 'Mr.', '??????????', 'Abdullah Zakariyya', '??????? ??????????', ' -', '7799110', ' -', '0000-00-00', 0, 1, 1, 'CMDA\\abdullah', '7701', '127106', '101', 'Abdullah Zakariyya', 1, '0', 1, '2007-06-16', 'sa', 'Aahandhuvaru, Ha. Dhidhoo', '???????????? ????????', 'H. Farimaage', '?? ????????', 1, 5, 321, '508', 'CMDA\\fathmath', '2002-02-17', 'P120160719T134016487.jpg', 1),
(71, 171, 'A158578', '-', '2020-11-16', 'Mr.', '??????????', 'Ahmed Mahran', '???????? ????????', ' -', '9195950', '150', '0000-00-00', 0, 1, 1, 'CMDA\\mahran', '7701', '353053', '101', 'Ahmed Mahran', 1, '0', 1, '2020-11-16', 'sa', 'Maakoani/ Ha.Hoarafushi', '??????/??. ????????', 'HUlhumale 21-G-02', '???????? 21-G-02', 1, 5, 321, '171', 'CMDA\\liyusha', '2008-12-16', 'P120161120T153724560.jpg', 0),
(72, 172, 'A058434', '-', '2028-11-16', 'Ms. ', '??????????', 'Nadiya Hassan', '?????? ??????', '-', '7776018', '111', '0000-00-00', 1, 1, 1, 'cmda\\nadiya', '7701', '111929', '101', 'Nadiya Hassan', 1, '0', 1, '2028-11-16', 'sa', 'Ma. Rasfari', '??. ???????? / ???? ', 'MA. RASFARI', '??. ???????? / ???? ', 1, 5, 321, '172', 'CMDA\\fathmath', '2002-02-17', 'P120161214T153623860.jpg', 1),
(74, 173, 'A119904', '-', '2001-03-02', 'MrS.', '??????????', 'Mariyam Aboobakuru', '???????? ??????????', '9634060', '7994548', '0', '0000-00-00', 1, 1, 1, 'CMDA\\mariyam.a', '0', '0', '0', 'Mariyam Aboobakuru', 1, '0', 1, '2003-01-17', 'sa', 'White FisH/ K.Maafushi', '?????????? / ?.??????', 'H.Koveli', '?.??????', 1, 5, 321, '173', 'CMDA\\fathmath', '2007-02-17', 'P120170118T113908023.jpg', 0),
(75, 505, 'A137960', '-', '2001-03-02', 'UZA', '????????????', 'Noorubaan Fahumee', '???????? ??????', '0', '7779441', '0', '2001-03-17', 1, 1, 1, 'cmda\\noorbaan', '7701', '161604', '101', 'UZA.Noorbaan FahmEE', 1, '0', 1, '2003-01-17', 'sa', 'M. FINIVAAGE NO2', '?. ???????? 2 ????????', 'M. Finivaage No2', '?. ???????? 2 ????????', 1, 5, 321, '505', 'CMDA\\fathmath', '2023-02-17', 'P120170118T115046620.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` int(11) NOT NULL,
  `menu_name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `menu_name`, `created_at`, `update_at`) VALUES
(1, 'Personnel', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Management', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Supervise', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `submenus`
--

CREATE TABLE `submenus` (
  `id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `subMenuName` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `submenus`
--

INSERT INTO `submenus` (`id`, `menu_id`, `subMenuName`, `created_at`, `updated_at`) VALUES
(1, 1, 'Attendance', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 1, 'Overtime', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `checkinout`
--
ALTER TABLE `checkinout`
  ADD PRIMARY KEY (`logid`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `submenus`
--
ALTER TABLE `submenus`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `submenus`
--
ALTER TABLE `submenus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;