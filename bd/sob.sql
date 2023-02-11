-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-02-2023 a las 01:47:36
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sob`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `parent_category_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

CREATE TABLE `colors` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `price` decimal(16,2) NOT NULL,
  `model` text NOT NULL,
  `brand_id` text NOT NULL,
  `category_id` text NOT NULL,
  `image` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_colors`
--

CREATE TABLE `product_colors` (
  `product_id` int(11) NOT NULL,
  `color_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_sizes`
--

CREATE TABLE `product_sizes` (
  `product_id` int(11) NOT NULL,
  `size_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `description`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'ADMIN', 'Acceso al backoffice', '2023-01-29 11:16:10', '2023-01-29 11:16:51', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes`
--

CREATE TABLE `sizes` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(254) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `avatar` varchar(254) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `first_name`, `last_name`, `password`, `birth_date`, `address`, `phone`, `avatar`, `created_at`, `updated_at`, `deleted_at`) VALUES
(2, 'pglayzer1@delicious.com', 'Philippe', 'Glayzer', 'wnfpA5bX5u', '1955-08-05', '08 Eagan Court', '553-196-1190', 'https://robohash.org/tenetureteius.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(3, 'adenerley2@symantec.com', 'Aryn', 'Denerley', 'jPeGiDUS8', '1982-09-19', '262 Charing Cross Point', '986-654-9258', 'https://robohash.org/quisquaminciduntet.png?size=50x50&set=set1', '1970-05-29 03:00:00', NULL, NULL),
(4, 'drust3@nyu.edu', 'Dionysus', 'Rust', 'KisSNPrXn', '1966-06-24', '60 Nancy Alley', '173-468-9779', 'https://robohash.org/animiipsamsuscipit.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(5, 'fmacgaughie4@scientificamerican.com', 'Flin', 'MacGaughie', 'xMczhr', '1979-07-26', '1924 Nevada Pass', '701-601-3886', 'https://robohash.org/aliquamaccusantiumveniam.png?size=50x50&set=set1', '1992-10-07 03:00:00', '1992-10-07 03:00:00', NULL),
(6, 'kfendt5@washington.edu', 'Kristal', 'Fendt', 'caOSV04JhYD', '1997-06-27', '18 Surrey Center', '355-743-3525', 'https://robohash.org/quaeratipsumvel.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(7, 'ianthoin6@toplist.cz', 'Isador', 'Anthoin', '0uVsp3', '1954-02-24', '9141 Hintze Drive', '792-661-5478', 'https://robohash.org/etnihila.png?size=50x50&set=set1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(8, 'estockman7@bluehost.com', 'Emma', 'Stockman', 'xS1yLZ', '1951-01-16', '9 Butternut Circle', '157-244-8067', 'https://robohash.org/ipsameumet.png?size=50x50&set=set1', '1983-06-14 03:00:00', NULL, NULL),
(9, 'cstackbridge8@washington.edu', 'Cleon', 'Stackbridge', 'Ww9mgSnIhdC', '1960-02-07', '76 Saint Paul Drive', '590-861-6288', 'https://robohash.org/sintautunde.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(10, 'ddradey9@unblog.fr', 'Daniela', 'Dradey', 'srFHkdnl', '1989-08-07', '09 Helena Crossing', '744-847-6217', 'https://robohash.org/autsuntautem.png?size=50x50&set=set1', '1973-08-03 03:00:00', '1973-08-03 03:00:00', NULL),
(11, 'dkeysela@google.com.br', 'Dan', 'Keysel', 'MkkGZqZKG3uM', '1990-03-29', '502 Blackbird Point', '215-552-5494', 'https://robohash.org/blanditiisquisdolorem.png?size=50x50&set=set1', '1978-11-23 03:00:00', NULL, NULL),
(12, 'tpolleyeb@ameblo.jp', 'Tommie', 'Polleye', 'XouFdjwD', '1954-09-16', '893 Pine View Point', '559-981-7677', 'https://robohash.org/numquamatqueasperiores.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(13, 'nmintonc@shareasale.com', 'Nan', 'Minton', '6BrwyfR', '1998-01-11', '58142 Karstens Junction', '422-303-2394', 'https://robohash.org/eligendivoluptatumillum.png?size=50x50&set=set1', '1982-06-30 03:00:00', '1982-06-30 03:00:00', NULL),
(14, 'lsymcoxd@reuters.com', 'Lammond', 'Symcox', 'sXtOjizthrO', '1988-08-20', '804 South Hill', '173-255-9272', 'https://robohash.org/aliquidnumquamvoluptatem.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(15, 'atysone@bizjournals.com', 'Audy', 'Tyson', '2LMkTRP', '1985-04-26', '65977 Gulseth Parkway', '559-768-9709', 'https://robohash.org/laboreperspiciatisest.png?size=50x50&set=set1', '1984-02-07 03:00:00', NULL, NULL),
(16, 'fskacelf@surveymonkey.com', 'Frederigo', 'Skacel', 'MfKt7dVo', '2003-02-06', '595 Bobwhite Court', '588-364-2463', 'https://robohash.org/quidemdeserunteum.png?size=50x50&set=set1', '1985-01-29 03:00:00', NULL, NULL),
(17, 'mcheyneg@jigsy.com', 'Marielle', 'Cheyne', 'Vhk6gic', '1968-10-13', '8 Duke Circle', '762-905-8088', 'https://robohash.org/quiautrepellendus.png?size=50x50&set=set1', '1994-01-28 03:00:00', '1994-01-28 03:00:00', NULL),
(18, 'krosenthalerh@t.co', 'Kass', 'Rosenthaler', 'tsnj6wXsy', '1959-11-06', '650 Arkansas Street', '911-991-7018', 'https://robohash.org/pariaturquidemexplicabo.png?size=50x50&set=set1', '1983-03-07 03:00:00', NULL, NULL),
(19, 'rjearumi@qq.com', 'Rozanne', 'Jearum', '17JlbiBR', '1949-11-29', '4 Cordelia Place', '910-507-3588', 'https://robohash.org/sintnatuslaudantium.png?size=50x50&set=set1', '1996-04-25 03:00:00', '1996-04-25 03:00:00', NULL),
(20, 'sbrotherhoodj@bloglines.com', 'Shaughn', 'Brotherhood', 'VccyhPtW5w5', '1951-11-28', '5 Golden Leaf Street', '324-213-3783', 'https://robohash.org/estquisrerum.png?size=50x50&set=set1', '2003-06-12 03:00:00', '2003-06-12 03:00:00', NULL),
(21, 'nparadycek@yellowbook.com', 'Nollie', 'Paradyce', 'PeMGXFGatsH', '1979-01-07', '09872 Troy Junction', '447-978-5741', 'https://robohash.org/autsimiliqueaccusantium.png?size=50x50&set=set1', '1971-12-17 03:00:00', '1971-12-17 03:00:00', NULL),
(22, 'nandryuninl@fda.gov', 'Norman', 'Andryunin', 'pXCxeGD', '1950-12-24', '212 Sutteridge Drive', '628-364-8207', 'https://robohash.org/veniameteaque.png?size=50x50&set=set1', '1988-08-05 03:00:00', '1988-08-05 03:00:00', NULL),
(23, 'rdilleym@huffingtonpost.com', 'Raymond', 'Dilley', 'X9KtBWhEJ59', '2000-11-15', '25 Harbort Way', '546-345-6883', 'https://robohash.org/doloreidquisquam.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(24, 'tadamowitzn@fda.gov', 'Trula', 'Adamowitz', 'Gij8tec', '1949-11-04', '11 Victoria Center', '843-931-3654', 'https://robohash.org/nonliberoest.png?size=50x50&set=set1', '1993-01-19 03:00:00', '1993-01-19 03:00:00', NULL),
(25, 'amatusovskyo@telegraph.co.uk', 'Andrea', 'Matusovsky', 'xqlIkTYG0', '1978-01-01', '162 Pawling Junction', '594-580-4882', 'https://robohash.org/laudantiumconsequaturrecusandae.png?size=50x50&set=set1', '1976-05-06 03:00:00', '1976-05-06 03:00:00', NULL),
(26, 'cdandreap@google.co.uk', 'Cosmo', 'D\'Andrea', 'YqXd8cZdsV', '1959-08-10', '099 Pond Crossing', '705-970-8439', 'https://robohash.org/recusandaesequiomnis.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(27, 'lkurtonq@de.vu', 'Lotti', 'Kurton', 'OFwVgWtoQayK', '1960-10-01', '1672 Sauthoff Drive', '450-663-3439', 'https://robohash.org/facerequocumque.png?size=50x50&set=set1', '1985-09-12 03:00:00', NULL, NULL),
(28, 'vrenvoysr@dyndns.org', 'Vivie', 'Renvoys', 's9nFoP4R8', '1980-08-21', '6 South Trail', '918-333-3858', 'https://robohash.org/atesseamet.png?size=50x50&set=set1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(29, 'pmocquers@rediff.com', 'Patricia', 'Mocquer', 'DbXBw530T', '1998-12-02', '46 Evergreen Road', '672-510-7605', 'https://robohash.org/voluptatemautemdolorem.png?size=50x50&set=set1', '1997-04-08 03:00:00', '1997-04-08 03:00:00', NULL),
(30, 'avolckert@ameblo.jp', 'Anestassia', 'Volcker', 'lCHcQPOPKy8v', '1968-01-29', '34562 Crowley Plaza', '512-780-6382', 'https://robohash.org/sitpariaturomnis.png?size=50x50&set=set1', '1982-03-19 03:00:00', '1982-03-19 03:00:00', NULL),
(31, 'hnouryu@simplemachines.org', 'Hedwiga', 'Noury', 'xJghze2S7jmU', '1981-10-23', '948 Paget Place', '157-440-3232', 'https://robohash.org/idsiteius.png?size=50x50&set=set1', '1975-12-21 03:00:00', '1975-12-21 03:00:00', NULL),
(32, 'gsnewinv@thetimes.co.uk', 'Gordie', 'Snewin', 'XwQNjWUQM', '1993-08-19', '5149 Debra Street', '275-284-1869', 'https://robohash.org/quidemenimcupiditate.png?size=50x50&set=set1', '1980-07-09 03:00:00', '1980-07-09 03:00:00', NULL),
(33, 'swoolacottw@mapy.cz', 'Shanon', 'Woolacott', 'oS6tozEnWwda', '1979-01-03', '4986 Oneill Plaza', '602-664-7463', 'https://robohash.org/molestiaslaboreodit.png?size=50x50&set=set1', '1997-10-23 03:00:00', '1997-10-23 03:00:00', NULL),
(34, 'gscutchinx@ovh.net', 'Genna', 'Scutchin', 'Npr6aOD', '1959-04-30', '57 Oxford Center', '627-281-4963', 'https://robohash.org/sedautut.png?size=50x50&set=set1', '1971-07-05 03:00:00', NULL, NULL),
(35, 'aedesy@mapy.cz', 'Analiese', 'Edes', 'lrxMshmEbwr5', '1989-03-14', '19511 Oakridge Point', '291-819-8571', 'https://robohash.org/doloribusveritatisconsequatur.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(36, 'rmulvyz@mail.ru', 'Rori', 'Mulvy', '6IL4oCEKl', '1988-05-12', '51 Browning Place', '312-865-9358', 'https://robohash.org/voluptatemipsaprovident.png?size=50x50&set=set1', '1997-05-23 03:00:00', '1997-05-23 03:00:00', NULL),
(37, 'lmcmorland10@opera.com', 'Lorena', 'McMorland', 'a7YDhuYDsA', '1975-02-09', '35638 Center Plaza', '218-966-4155', 'https://robohash.org/estconsequatursunt.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(38, 'gsherme11@oaic.gov.au', 'Gayle', 'Sherme', 'cdSzzAT3', '2003-08-16', '6123 Mendota Trail', '717-256-9704', 'https://robohash.org/recusandaeaccusantiumdolores.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(39, 'lgantzer12@si.edu', 'Layney', 'Gantzer', 'An2szC', '1994-12-31', '2 Forster Parkway', '844-955-3532', 'https://robohash.org/quiblanditiiseveniet.png?size=50x50&set=set1', '1977-08-27 03:00:00', '1977-08-27 03:00:00', NULL),
(40, 'meverleigh13@51.la', 'Mozes', 'Everleigh', '2FgPipgZLkv1', '1979-08-31', '6941 Londonderry Way', '330-499-8526', 'https://robohash.org/itaqueverout.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(41, 'gchasmoor14@blogs.com', 'Guntar', 'Chasmoor', 'BvelSM3Emmqa', '1958-04-02', '7796 Blue Bill Park Park', '281-347-0421', 'https://robohash.org/remhicitaque.png?size=50x50&set=set1', '1989-06-24 03:00:00', '1989-06-24 03:00:00', '1989-06-24 03:00:00'),
(42, 'eregus15@hhs.gov', 'Elwin', 'Regus', '7dRocvThZFm', '2004-08-11', '344 Westport Hill', '110-663-8933', 'https://robohash.org/doloremetnihil.png?size=50x50&set=set1', '1975-02-18 03:00:00', '1975-02-18 03:00:00', NULL),
(43, 'avinck16@msu.edu', 'Avigdor', 'Vinck', 'D0qNhtU7Co', '1960-07-17', '1 Sherman Circle', '452-730-4683', 'https://robohash.org/etsuntdolorem.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(44, 'glafaye17@cnbc.com', 'Gelya', 'Lafaye', 'uDg2aLs4G', '1999-10-31', '5244 Hallows Road', '237-883-2509', 'https://robohash.org/ametfugaquis.png?size=50x50&set=set1', '1994-10-09 03:00:00', '1994-10-09 03:00:00', NULL),
(45, 'cseabrooke18@slashdot.org', 'Conroy', 'Seabrooke', 'hLIxUFd3OV', '1954-10-17', '5 Forest Dale Place', '412-297-6109', 'https://robohash.org/architectoteneturexcepturi.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(46, 'dmeiklem19@facebook.com', 'Dewie', 'Meiklem', 'pZROIrnkXzK', '1954-05-14', '81 Vera Center', '820-433-5429', 'https://robohash.org/idconsequunturdolores.png?size=50x50&set=set1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(47, 'ogounot1a@delicious.com', 'Olimpia', 'Gounot', '1j8xxpn7', '1998-11-09', '4875 Hanson Lane', '884-250-1124', 'https://robohash.org/molestiaevoluptatesodit.png?size=50x50&set=set1', '1982-11-04 03:00:00', NULL, NULL),
(48, 'folone1b@multiply.com', 'Fidelio', 'O\' Lone', 'HUHsqLl', '2000-05-21', '50758 Charing Cross Terrace', '983-717-3365', 'https://robohash.org/rationequimollitia.png?size=50x50&set=set1', '1977-09-22 03:00:00', '1977-09-22 03:00:00', '1977-09-22 03:00:00'),
(49, 'hcockerill1c@stumbleupon.com', 'Hedwiga', 'Cockerill', 'k5KqtkQjBt2j', '2001-09-21', '8217 Westend Way', '758-788-5237', 'https://robohash.org/sintquodconsequatur.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(50, 'dgoard1d@thetimes.co.uk', 'Dorothea', 'Goard', 'GS1DC1ENe', '1984-02-16', '06 Onsgard Alley', '127-679-5057', 'https://robohash.org/perspiciatisnemoomnis.png?size=50x50&set=set1', '1975-08-27 03:00:00', NULL, NULL),
(51, 'rboshere1e@java.com', 'Rustie', 'Boshere', 'aSWZ7pbG', '1965-04-04', '7539 Russell Park', '986-736-8084', 'https://robohash.org/rerumisteaut.png?size=50x50&set=set1', '2004-03-26 03:00:00', '2004-03-26 03:00:00', NULL),
(52, 'cyorkston1f@nyu.edu', 'Clevie', 'Yorkston', 'PUWdYxs', '1983-01-28', '9435 Sunbrook Point', '651-879-4142', 'https://robohash.org/etfacilisvoluptates.png?size=50x50&set=set1', '1988-02-11 03:00:00', '1988-02-11 03:00:00', NULL),
(53, 'kalthorpe1g@people.com.cn', 'Krishnah', 'Althorpe', 'a2giPBY', '1976-02-05', '81 Northport Junction', '890-409-2236', 'https://robohash.org/providentetsint.png?size=50x50&set=set1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(54, 'chubane1h@java.com', 'Caty', 'Hubane', 'ISuK5jrHcl', '1957-09-03', '1150 Commercial Circle', '583-827-5729', 'https://robohash.org/commodiquosoluta.png?size=50x50&set=set1', '2002-03-29 03:00:00', NULL, NULL),
(55, 'tanfossi1i@gov.uk', 'Thorstein', 'Anfossi', 'g3Ohcs40WsmM', '1953-02-07', '98143 Lake View Trail', '725-273-5730', 'https://robohash.org/natusutnobis.png?size=50x50&set=set1', '1988-10-10 03:00:00', '1988-10-10 03:00:00', NULL),
(56, 'gburghall1j@t-online.de', 'Griffin', 'Burghall', 'QVPXDZAhHt3', '1973-08-10', '44 Carey Court', '178-581-7219', 'https://robohash.org/quasiesseeum.png?size=50x50&set=set1', '2003-07-18 03:00:00', '2003-07-18 03:00:00', NULL),
(57, 'whulks1k@timesonline.co.uk', 'Winslow', 'Hulks', 'Ldwa3w8uFuEr', '2004-10-16', '5249 Hudson Plaza', '411-697-8107', 'https://robohash.org/idrepellendusincidunt.png?size=50x50&set=set1', '2000-04-19 03:00:00', '2000-04-19 03:00:00', NULL),
(58, 'vroobottom1l@amazon.co.jp', 'Von', 'Roobottom', 'VkDRdH7g8WAR', '1959-03-17', '379 High Crossing Point', '949-127-1928', 'https://robohash.org/omnisrationeut.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(59, 'cpratten1m@amazon.co.jp', 'Cammi', 'Pratten', 'dBIyvygN9v', '1995-09-03', '979 Merchant Court', '190-147-6088', 'https://robohash.org/quiconsecteturvel.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(60, 'pbensusan1n@ow.ly', 'Pet', 'Bensusan', 'RYPrk0F', '1964-10-08', '787 Dottie Pass', '789-388-9955', 'https://robohash.org/modiducimuscum.png?size=50x50&set=set1', '1993-10-22 03:00:00', NULL, NULL),
(61, 'tgamet1o@mayoclinic.com', 'Trip', 'Gamet', 'mzUFVJ', '1998-05-29', '392 Meadow Ridge Crossing', '381-531-5962', 'https://robohash.org/aperiamiuredolorum.png?size=50x50&set=set1', '1972-12-02 03:00:00', '1972-12-02 03:00:00', NULL),
(62, 'klauchlan1p@samsung.com', 'Kasey', 'Lauchlan', 'ZvSJqXvO56Li', '2002-10-24', '32174 Dahle Road', '305-229-0738', 'https://robohash.org/consequaturquiquis.png?size=50x50&set=set1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(63, 'akersting1q@dyndns.org', 'Andriana', 'Kersting', 'pbm4tBrz', '1980-12-16', '8 Kings Lane', '457-957-3777', 'https://robohash.org/natusnecessitatibusquo.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(64, 'msowray1r@mozilla.org', 'Meggi', 'Sowray', 'qxZueX27yqBe', '1948-05-06', '19438 Artisan Junction', '590-377-1400', 'https://robohash.org/autemquiofficia.png?size=50x50&set=set1', '2000-10-19 03:00:00', '2000-10-19 03:00:00', NULL),
(65, 'mlehrmann1s@simplemachines.org', 'Matelda', 'Lehrmann', 'RrIJxtS2ezG8', '1956-11-10', '0 Ryan Road', '226-193-1809', 'https://robohash.org/veniamautemminus.png?size=50x50&set=set1', '1979-04-04 03:00:00', NULL, NULL),
(66, 'blazare1t@bbc.co.uk', 'Bunny', 'Lazare', 'ZtQK2Ao', '1966-02-20', '6 Bowman Hill', '368-324-9871', 'https://robohash.org/dictareiciendisquasi.png?size=50x50&set=set1', '1991-02-21 03:00:00', '1991-02-21 03:00:00', NULL),
(67, 'mmcneely1u@reverbnation.com', 'Meg', 'McNeely', 'oE57hTDgKK', '1961-02-26', '94483 Towne Crossing', '994-161-9667', 'https://robohash.org/estporrocupiditate.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(68, 'wmaccari1v@paypal.com', 'Willy', 'Maccari', '4m4DDBd8', '1960-12-05', '122 Armistice Junction', '583-390-3918', 'https://robohash.org/cupiditateharumdolorem.png?size=50x50&set=set1', '1979-09-19 03:00:00', '1979-09-19 03:00:00', '1979-09-19 03:00:00'),
(69, 'fketteman1w@ucsd.edu', 'Filmer', 'Ketteman', 'CsHxcc', '1989-11-14', '135 Sommers Pass', '501-319-8068', 'https://robohash.org/recusandaererumiure.png?size=50x50&set=set1', '1981-11-13 03:00:00', NULL, NULL),
(70, 'gbrightey1x@home.pl', 'Gavin', 'Brightey', 'YQC1k2h5Wc', '1987-08-28', '92 Novick Terrace', '663-274-5514', 'https://robohash.org/quoquibusdamadipisci.png?size=50x50&set=set1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(71, 'tleblanc1y@loc.gov', 'Tanitansy', 'Le Blanc', 'AO0PTT6xpe', '1967-04-21', '8061 Aberg Place', '370-994-1761', 'https://robohash.org/doloreinenim.png?size=50x50&set=set1', '1981-08-29 03:00:00', '1981-08-29 03:00:00', NULL),
(72, 'omcgiffie1z@mozilla.org', 'Ondrea', 'McGiffie', 'MXduEeEEI', '1956-03-11', '9707 Reinke Avenue', '586-303-4811', 'https://robohash.org/beataeetblanditiis.png?size=50x50&set=set1', '2000-05-18 03:00:00', '2000-05-18 03:00:00', NULL),
(73, 'ctooby20@t.co', 'Cathi', 'Tooby', 'RtiNjS3MT', '1975-01-15', '5 Northland Plaza', '661-100-7755', 'https://robohash.org/quimagnampossimus.png?size=50x50&set=set1', '1973-05-23 03:00:00', NULL, NULL),
(74, 'benrietto21@altervista.org', 'Bradley', 'Enrietto', 'pcT13v', '1983-03-14', '331 Dawn Crossing', '318-470-9851', 'https://robohash.org/deseruntquismagni.png?size=50x50&set=set1', '1981-08-09 03:00:00', '1981-08-09 03:00:00', NULL),
(75, 'smanners22@chicagotribune.com', 'Selia', 'Manners', 'DmTJyST', '1960-10-15', '9 1st Hill', '783-140-1564', 'https://robohash.org/quianullavoluptatibus.png?size=50x50&set=set1', '1995-07-04 03:00:00', '1995-07-04 03:00:00', NULL),
(76, 'knewlove23@yellowbook.com', 'Kristoforo', 'Newlove', 'NNCmCIcjqrDM', '1979-02-14', '3 Eastwood Junction', '906-898-2543', 'https://robohash.org/doloremqueexcepturitempora.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(77, 'yhamnet24@spotify.com', 'Yorgo', 'Hamnet', 'e2YAm4', '2002-07-14', '2 Bowman Hill', '589-471-7153', 'https://robohash.org/veliteossit.png?size=50x50&set=set1', '1999-01-08 03:00:00', '1999-01-08 03:00:00', NULL),
(78, 'wcamock25@harvard.edu', 'Wilek', 'Camock', '9JGAM6U', '2000-08-31', '8063 Anhalt Way', '400-138-8335', 'https://robohash.org/involuptatemquia.png?size=50x50&set=set1', '1994-04-20 03:00:00', '1994-04-20 03:00:00', NULL),
(79, 'cgilhooley26@google.com', 'Camille', 'Gilhooley', 'ARDXflTP1bh', '1991-02-11', '20 Fair Oaks Crossing', '850-404-6530', 'https://robohash.org/deseruntametet.png?size=50x50&set=set1', '1999-05-15 03:00:00', '1999-05-15 03:00:00', NULL),
(80, 'grayhill27@ameblo.jp', 'Gradey', 'Rayhill', 'X5kpF0VpltpE', '1995-03-05', '355 Golf View Avenue', '373-955-4416', 'https://robohash.org/impeditautsunt.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(81, 'sbelmont28@vk.com', 'Stanislas', 'Belmont', 'pRaZN3uK', '1971-10-16', '61580 Vahlen Alley', '764-133-4246', 'https://robohash.org/cumqueetnihil.png?size=50x50&set=set1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(82, 'rsimmonds29@microsoft.com', 'Reinhard', 'Simmonds', '6pQR3ktt', '1951-11-29', '352 Kennedy Alley', '525-412-0015', 'https://robohash.org/quaeratremsimilique.png?size=50x50&set=set1', '2003-05-16 03:00:00', '2003-05-16 03:00:00', NULL),
(83, 'lmayell2a@independent.co.uk', 'Lorry', 'Mayell', 'vwxLJod', '1992-07-22', '4243 Esch Crossing', '291-914-9541', 'https://robohash.org/maioreseiusbeatae.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(84, 'gbeedle2b@miibeian.gov.cn', 'Germayne', 'Beedle', 'yGeiYwaNulJ', '1973-10-03', '6 Morrow Avenue', '525-247-7016', 'https://robohash.org/culpatotamtempore.png?size=50x50&set=set1', '1976-11-05 03:00:00', NULL, NULL),
(85, 'ajarry2c@who.int', 'Ariana', 'Jarry', 'VuQGaN9YCant', '1978-10-21', '8520 Boyd Park', '219-942-5335', 'https://robohash.org/istequovoluptatum.png?size=50x50&set=set1', '1971-04-01 03:00:00', NULL, NULL),
(86, 'tocloney2d@tuttocitta.it', 'Traver', 'O\' Cloney', 'NgliiIENl', '1981-02-05', '82416 Longview Lane', '680-655-5836', 'https://robohash.org/possimusestcum.png?size=50x50&set=set1', '1970-02-05 03:00:00', '1970-02-05 03:00:00', NULL),
(87, 'ndiggles2e@cornell.edu', 'Nolly', 'Diggles', 'eSF2zHigKpO', '1980-06-06', '3740 Fordem Point', '171-988-9192', 'https://robohash.org/beataevelitsaepe.png?size=50x50&set=set1', '1986-09-27 03:00:00', '1986-09-27 03:00:00', NULL),
(88, 'tsimone2f@reuters.com', 'Tristam', 'Simone', 'xBtb9DN', '1949-02-23', '0316 Reinke Trail', '427-390-8030', 'https://robohash.org/veritatisillumrem.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(89, 'rhartfield2g@miibeian.gov.cn', 'Rafaello', 'Hartfield', '3ZVMQ4bCRBh9', '1954-01-24', '9 Dovetail Plaza', '486-573-3043', 'https://robohash.org/ametsuscipitquod.png?size=50x50&set=set1', '1998-01-19 03:00:00', '1998-01-19 03:00:00', NULL),
(90, 'tbrinsden2h@zimbio.com', 'Tobye', 'Brinsden', 'xZuEkp', '2004-07-26', '15107 Granby Junction', '362-723-5516', 'https://robohash.org/anatustotam.png?size=50x50&set=set1', '1978-05-17 03:00:00', NULL, '1978-05-17 03:00:00'),
(91, 'gcrampsey2i@wufoo.com', 'Grete', 'Crampsey', 'ufF1Qh7JaT', '1984-10-21', '17435 Trailsway Court', '132-486-0377', 'https://robohash.org/estenimquis.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(92, 'sashford2j@vk.com', 'Sashenka', 'Ashford', 'esWJsCzvq03', '1984-07-01', '70 Sutteridge Pass', '852-626-7475', 'https://robohash.org/sintvoluptatibusqui.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(93, 'pcomberbeach2k@list-manage.com', 'Pennie', 'Comberbeach', 'RzfpwY7g', '1965-08-21', '1498 Warrior Alley', '515-465-6900', 'https://robohash.org/facerenequererum.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(94, 'gstollenbecker2l@prnewswire.com', 'Georgeanne', 'Stollenbecker', 'Gw6tZLpxz1BU', '1953-10-22', '219 Bultman Park', '203-189-4048', 'https://robohash.org/consequaturvoluptatemreprehenderit.png?size=50x50&set=set1', '1989-03-05 03:00:00', '1989-03-05 03:00:00', NULL),
(95, 'xjaques2m@soundcloud.com', 'Xaviera', 'Jaques', 'nvIzyb', '2000-12-31', '45048 Memorial Street', '556-783-7151', 'https://robohash.org/suntetsequi.png?size=50x50&set=set1', '1991-11-17 03:00:00', '1991-11-17 03:00:00', NULL),
(96, 'tmyrkus2n@uol.com.br', 'Thomasine', 'Myrkus', '7Q689x8', '2001-04-15', '36506 Brown Road', '421-605-2447', 'https://robohash.org/temporibusquiquo.png?size=50x50&set=set1', '1998-03-20 03:00:00', '1998-03-20 03:00:00', NULL),
(97, 'aantoniak2o@aboutads.info', 'Arel', 'Antoniak', 'RzHEVbwGvJ', '2000-01-01', '4267 Burrows Pass', '198-560-8246', 'https://robohash.org/atqueveritatisconsequatur.png?size=50x50&set=set1', '1981-02-13 03:00:00', '1981-02-13 03:00:00', NULL),
(98, 'nspellessy2p@europa.eu', 'Nathan', 'Spellessy', 'R8rBwcfX', '1983-07-30', '41588 Redwing Point', '861-686-2436', 'https://robohash.org/consequaturdoloribussapiente.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(99, 'phuddles2q@nhs.uk', 'Purcell', 'Huddles', 'sk6biGu', '1950-08-16', '3693 Redwing Trail', '835-697-1986', 'https://robohash.org/temporibusvoluptatemea.png?size=50x50&set=set1', '1971-10-03 03:00:00', '1971-10-03 03:00:00', NULL),
(100, 'nmulryan2r@biglobe.ne.jp', 'Niall', 'Mulryan', 'wNKkmlE', '1996-06-05', '67398 Eagan Terrace', '201-332-7363', 'https://robohash.org/velcumquenostrum.png?size=50x50&set=set1', '1974-02-25 03:00:00', '1974-02-25 03:00:00', NULL),
(101, 'tswanton2s@youku.com', 'Tommie', 'Swanton', 'pAwP9GU', '1982-11-17', '086 Artisan Terrace', '302-302-1261', 'https://robohash.org/ipsautpossimus.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(102, 'nkydde2t@cnbc.com', 'Nevins', 'Kydde', '1Fya1AH', '1971-07-20', '92 Bluestem Street', '365-137-5783', 'https://robohash.org/nonofficiissed.png?size=50x50&set=set1', '1975-09-12 03:00:00', NULL, NULL),
(103, 'liohananof2u@state.tx.us', 'Lizzy', 'Iohananof', 'PO4itdVcZ', '1963-07-09', '65363 Hanover Hill', '786-892-4991', 'https://robohash.org/earumplaceatet.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(104, 'cbrownell2v@forbes.com', 'Carlynne', 'Brownell', 'bNZwx7', '1998-11-17', '595 Roth Parkway', '414-906-9642', 'https://robohash.org/distinctiocorporisqui.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(105, 'gdebruijne2w@dyndns.org', 'Gerianna', 'De Bruijne', 'ZPGYVZDX3O', '1998-02-07', '1625 Prairieview Way', '149-956-6900', 'https://robohash.org/estetet.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(106, 'cperico2x@4shared.com', 'Craig', 'Perico', 'wuhewpv5', '1984-07-01', '10509 Knutson Parkway', '264-709-8908', 'https://robohash.org/nihilvelitasperiores.png?size=50x50&set=set1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(107, 'lallport2y@house.gov', 'Lemmy', 'Allport', 'tm71iXWg60m', '1973-10-19', '700 Valley Edge Trail', '777-931-3031', 'https://robohash.org/nesciuntquiaadipisci.png?size=50x50&set=set1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(108, 'selmhirst2z@newyorker.com', 'Shirley', 'Elmhirst', 'Ouf3mFiO', '1985-10-06', '8550 Carioca Plaza', '640-533-0000', 'https://robohash.org/eumsitducimus.png?size=50x50&set=set1', '1974-03-31 03:00:00', NULL, NULL),
(109, 'ebarbosa30@nature.com', 'Emmey', 'Barbosa', '2CGEr3O6', '1967-05-07', '639 Iowa Terrace', '197-213-2605', 'https://robohash.org/etasperioresquo.png?size=50x50&set=set1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(110, 'fsterte31@desdev.cn', 'Fabian', 'Sterte', 'HgaISc', '1966-08-01', '15634 Lakewood Hill', '546-627-1491', 'https://robohash.org/autvitaelaborum.png?size=50x50&set=set1', '1971-06-23 03:00:00', '1971-06-23 03:00:00', NULL),
(111, 'dgamett32@wisc.edu', 'Dalenna', 'Gamett', 'tggBxxfgYL9k', '1959-09-23', '41224 Summit Circle', '466-338-3547', 'https://robohash.org/estsuntplaceat.png?size=50x50&set=set1', '2002-11-05 03:00:00', '2002-11-05 03:00:00', NULL),
(112, 'skarpf33@oakley.com', 'Sharia', 'Karpf', 'QGABGYS6km8F', '1977-10-27', '85 Randy Trail', '485-581-5492', 'https://robohash.org/praesentiumestrerum.png?size=50x50&set=set1', '2004-09-24 03:00:00', '2004-09-24 03:00:00', NULL),
(113, 'htripe34@instagram.com', 'Harriett', 'Tripe', 'PV7rCpjE08', '1974-02-26', '0 Muir Junction', '664-571-0479', 'https://robohash.org/rationequiafugiat.png?size=50x50&set=set1', '1991-11-20 03:00:00', NULL, NULL),
(114, 'rrassmann35@google.ru', 'Rocky', 'Rassmann', 'o2N6cmyyC4', '1974-07-11', '4359 Chive Terrace', '514-893-4612', 'https://robohash.org/harumrepudiandaeporro.png?size=50x50&set=set1', '2002-10-13 03:00:00', '2002-10-13 03:00:00', NULL),
(115, 'rchitson36@spotify.com', 'Rasia', 'Chitson', 'XzlT60', '1953-11-29', '8 Vidon Avenue', '879-535-3598', 'https://robohash.org/estlaudantiumsoluta.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(116, 'sduffet37@bloglovin.com', 'Steffie', 'Duffet', 'JOAV96', '1985-07-20', '9 Vermont Parkway', '337-584-8558', 'https://robohash.org/nihilcumquevoluptatem.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(117, 'rpumfrett38@odnoklassniki.ru', 'Raymond', 'Pumfrett', 'DjqNh4f', '1955-10-29', '8984 Tomscot Street', '737-980-7596', 'https://robohash.org/laudantiumexnam.png?size=50x50&set=set1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(118, 'bstribling39@google.pl', 'Ber', 'Stribling', '3R1nO58gFs', '1952-12-13', '5 Swallow Avenue', '971-539-7169', 'https://robohash.org/quiadoloribusut.png?size=50x50&set=set1', '1991-07-14 03:00:00', NULL, NULL),
(119, 'jmarks3a@earthlink.net', 'Janis', 'Marks', 'Z7ZttHJw3mlA', '1952-03-02', '2246 Lakewood Drive', '132-668-9976', 'https://robohash.org/etnammolestias.png?size=50x50&set=set1', '1970-07-29 03:00:00', '1970-07-29 03:00:00', NULL),
(120, 'mmessham3b@huffingtonpost.com', 'Melloney', 'Messham', 'BCw88hDN3XJk', '1991-08-09', '30 Portage Street', '985-693-8045', 'https://robohash.org/fugitpraesentiumid.png?size=50x50&set=set1', '1985-04-08 03:00:00', '1985-04-08 03:00:00', NULL),
(121, 'aeames3c@google.it', 'Arlyn', 'Eames', '1PYEDq', '1966-09-04', '92258 Quincy Parkway', '276-671-3831', 'https://robohash.org/numquamdelectusexpedita.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(122, 'emcmylor3d@newyorker.com', 'Erv', 'McMylor', 'x3ix9Gf', '1964-04-03', '95641 Homewood Point', '882-781-0612', 'https://robohash.org/numquamautqui.png?size=50x50&set=set1', '1978-02-01 03:00:00', NULL, NULL),
(123, 'csowden3e@jalbum.net', 'Carita', 'Sowden', 'gTVF0ubu0', '1951-06-20', '47474 Park Meadow Center', '799-358-3872', 'https://robohash.org/praesentiumvelitofficia.png?size=50x50&set=set1', '1974-03-18 03:00:00', '1974-03-18 03:00:00', NULL),
(124, 'ihawler3f@issuu.com', 'Isa', 'Hawler', '2iaRHZl03', '1982-08-09', '6744 Donald Court', '449-997-8323', 'https://robohash.org/autnonomnis.png?size=50x50&set=set1', '1990-02-27 03:00:00', '1990-02-27 03:00:00', NULL),
(125, 'dbang3g@ning.com', 'Dory', 'Bang', '5xN2Xkb5aPV', '1997-04-18', '4665 Anniversary Avenue', '462-735-9529', 'https://robohash.org/doloraspernaturnulla.png?size=50x50&set=set1', '1996-08-12 03:00:00', NULL, NULL),
(126, 'tbayles3h@cocolog-nifty.com', 'Thorsten', 'Bayles', 'YgOCpX9', '1958-11-08', '737 Rockefeller Pass', '335-663-9470', 'https://robohash.org/illovoluptatesaut.png?size=50x50&set=set1', '1975-02-09 03:00:00', NULL, NULL),
(127, 'tmarchment3i@xinhuanet.com', 'Tyrus', 'Marchment', 's5jMpJZvu', '1981-04-11', '25745 Hayes Point', '563-876-6882', 'https://robohash.org/voluptatibussaepeiure.png?size=50x50&set=set1', '1984-03-31 03:00:00', NULL, NULL),
(128, 'tyoudell3j@baidu.com', 'Tybie', 'Youdell', '8g2sBzjUaln', '1989-01-26', '27 Forest Hill', '582-454-3500', 'https://robohash.org/eainut.png?size=50x50&set=set1', '1974-04-28 03:00:00', '1974-04-28 03:00:00', NULL),
(129, 'oshires3k@arizona.edu', 'Orlando', 'Shires', 'wRi9qA3BRe', '1952-05-23', '1 Dexter Road', '523-773-4715', 'https://robohash.org/pariaturillumsunt.png?size=50x50&set=set1', '1974-05-24 03:00:00', NULL, NULL),
(130, 'mlampl3l@vkontakte.ru', 'Marge', 'Lampl', 'klSnZekKDnX', '1983-01-29', '5496 Esker Alley', '748-694-2282', 'https://robohash.org/eaquevoluptasut.png?size=50x50&set=set1', '1998-06-19 03:00:00', '1998-06-19 03:00:00', NULL),
(131, 'gcasier3m@cam.ac.uk', 'Gaspar', 'Casier', 'ah7dOccQxX', '1949-01-12', '66152 Michigan Center', '202-304-7393', 'https://robohash.org/atdebitisullam.png?size=50x50&set=set1', '1978-07-23 03:00:00', NULL, NULL),
(132, 'rrieflin3n@mayoclinic.com', 'Riannon', 'Rieflin', 'XX3oPamGe', '1976-09-06', '00000 Shasta Way', '728-277-4891', 'https://robohash.org/cupiditateconsecteturvoluptas.png?size=50x50&set=set1', '1979-10-08 03:00:00', NULL, NULL),
(133, 'tesome3o@vistaprint.com', 'Tades', 'Esome', 'S2mocxo88x2', '1974-04-12', '4694 Lien Court', '507-954-4690', 'https://robohash.org/explicabovelut.png?size=50x50&set=set1', '1979-07-29 03:00:00', '1979-07-29 03:00:00', NULL),
(134, 'mbere3p@bigcartel.com', 'Matilde', 'Bere', 'a00BBHz3YbG', '2002-06-07', '412 Thierer Place', '366-639-7070', 'https://robohash.org/nihilcorporisnihil.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(135, 'tmayne3q@hc360.com', 'Taite', 'Mayne', '2edKegEW', '1963-10-24', '6 Ryan Way', '462-876-6227', 'https://robohash.org/etnihilquis.png?size=50x50&set=set1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(136, 'qpenright3r@furl.net', 'Queenie', 'Penright', 'J9BAp5Z', '1968-04-15', '022 Sheridan Street', '928-558-6208', 'https://robohash.org/debitisutfacere.png?size=50x50&set=set1', '1985-05-07 03:00:00', '1985-05-07 03:00:00', NULL),
(137, 'bvoaden3s@ocn.ne.jp', 'Bartlet', 'Voaden', 'biUj46SQFI', '1994-05-21', '95 Hansons Point', '303-118-9507', 'https://robohash.org/praesentiumreprehenderitipsum.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(138, 'sfrancesc3t@google.ca', 'Sena', 'Francesc', 'Mfi6Ic0', '1977-04-21', '9 Fieldstone Way', '209-734-5128', 'https://robohash.org/eavelitlibero.png?size=50x50&set=set1', '1973-04-13 03:00:00', '1973-04-13 03:00:00', NULL),
(139, 'ywarwick3u@canalblog.com', 'Yance', 'Warwick', 'yZAJ7gydQM', '1960-07-11', '82 Cherokee Pass', '586-460-4545', 'https://robohash.org/nisicumeos.png?size=50x50&set=set1', '1980-03-08 03:00:00', '1980-03-08 03:00:00', NULL),
(140, 'jdudenie3v@intel.com', 'Jervis', 'Dudenie', 'vtnDk0uWJiDi', '1986-08-24', '8 Summer Ridge Point', '122-406-2172', 'https://robohash.org/dolorerrorquo.png?size=50x50&set=set1', '1979-05-29 03:00:00', '1979-05-29 03:00:00', NULL),
(141, 'fmassenhove3w@nbcnews.com', 'Fraze', 'Massenhove', 'jMXz996ORTMa', '1964-07-14', '6937 Susan Crossing', '344-360-5722', 'https://robohash.org/anemoin.png?size=50x50&set=set1', '2003-05-16 03:00:00', '2003-05-16 03:00:00', NULL),
(142, 'helwin3x@wordpress.com', 'Hyacintha', 'Elwin', 'h4sdsRc', '1974-04-04', '46 Eastwood Trail', '782-184-3481', 'https://robohash.org/illumundeeos.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(143, 'pavann3y@plala.or.jp', 'Pauly', 'Avann', 'lW2OMQiwh', '1983-08-03', '177 Nevada Road', '431-534-4392', 'https://robohash.org/etofficiismagnam.png?size=50x50&set=set1', '2003-12-01 03:00:00', '2003-12-01 03:00:00', NULL),
(144, 'eray3z@miitbeian.gov.cn', 'Ellyn', 'Ray', 'CctMkND', '1974-08-26', '2 Eagle Crest Plaza', '133-816-6092', 'https://robohash.org/temporaetcorporis.png?size=50x50&set=set1', '2005-01-24 03:00:00', '2005-01-24 03:00:00', NULL),
(145, 'gwarrick40@nymag.com', 'Greg', 'Warrick', 'QoVizUVattFH', '1986-09-25', '47 Coolidge Plaza', '869-332-3514', 'https://robohash.org/utetquae.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(146, 'awyer41@canalblog.com', 'Ardine', 'Wyer', 'SPGpBh', '1949-06-02', '824 Valley Edge Junction', '551-800-1419', 'https://robohash.org/estevenietsimilique.png?size=50x50&set=set1', '1978-10-01 03:00:00', NULL, NULL),
(147, 'cwallace42@deviantart.com', 'Chiquita', 'Wallace', 'DNwb2gpWRPnQ', '1954-07-05', '93248 Glendale Court', '504-363-0391', 'https://robohash.org/occaecatiquoeos.png?size=50x50&set=set1', '1999-09-21 03:00:00', '1999-09-21 03:00:00', NULL),
(148, 'gbadrock43@people.com.cn', 'Ginnie', 'Badrock', 'NGZIr32', '1987-05-15', '24983 Butterfield Road', '803-720-4851', 'https://robohash.org/quasidfuga.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(149, 'tskentelbury44@fastcompany.com', 'Theobald', 'Skentelbury', 'gD40Kgm', '1954-06-20', '93956 Lerdahl Place', '292-166-9892', 'https://robohash.org/quicorruptifacilis.png?size=50x50&set=set1', '1999-10-08 03:00:00', '1999-10-08 03:00:00', NULL),
(150, 'mfishpoole45@reuters.com', 'Martita', 'Fishpoole', 'PldNRR0AOP', '1981-07-11', '13154 Clove Parkway', '781-228-0502', 'https://robohash.org/temporeprovidentodio.png?size=50x50&set=set1', '1986-10-15 03:00:00', NULL, NULL),
(151, 'cbarendtsen46@microsoft.com', 'Candida', 'Barendtsen', '119bSoy', '1966-06-29', '8 West Junction', '423-949-8230', 'https://robohash.org/occaecatidoloribusab.png?size=50x50&set=set1', '1971-02-11 03:00:00', NULL, NULL),
(152, 'kfallon47@sbwire.com', 'Killian', 'Fallon', 'IKzh7v5ab', '1956-10-19', '860 Judy Crossing', '305-595-9920', 'https://robohash.org/doloresconsequaturatque.png?size=50x50&set=set1', '1994-10-23 03:00:00', '1994-10-23 03:00:00', NULL),
(153, 'delph48@dailymail.co.uk', 'Donal', 'Elph', '4ynLHAi', '1979-10-09', '53582 Debra Park', '643-545-2302', 'https://robohash.org/odiodoloresaccusamus.png?size=50x50&set=set1', '1981-12-05 03:00:00', '1981-12-05 03:00:00', NULL),
(154, 'tdjurisic49@a8.net', 'Tallou', 'Djurisic', 'Ne3xP6V', '1964-01-01', '20 Fisk Point', '387-327-8281', 'https://robohash.org/ullamfugadistinctio.png?size=50x50&set=set1', '2002-01-18 03:00:00', '2002-01-18 03:00:00', NULL),
(155, 'kviccars4a@adobe.com', 'Kipper', 'Viccars', 'onNCBcAM4', '1963-05-14', '043 Badeau Plaza', '207-562-7088', 'https://robohash.org/excepturiillumrerum.png?size=50x50&set=set1', '1987-06-14 03:00:00', '1987-06-14 03:00:00', NULL),
(156, 'cbanasik4b@guardian.co.uk', 'Catie', 'Banasik', 'JBzX7fvF', '1989-04-30', '64 Mifflin Pass', '710-756-5579', 'https://robohash.org/ipsumvoluptatemest.png?size=50x50&set=set1', '1976-04-30 03:00:00', NULL, NULL),
(157, 'rmaccomiskey4c@goo.ne.jp', 'Roderigo', 'MacComiskey', 'ReKX1K', '2000-11-21', '8 Tennyson Street', '966-392-2290', 'https://robohash.org/abetat.png?size=50x50&set=set1', '2001-08-12 03:00:00', '2001-08-12 03:00:00', NULL),
(158, 'gtidmarsh4d@amazonaws.com', 'Gran', 'Tidmarsh', 'Iacj4u', '1948-05-26', '5694 Moulton Alley', '821-461-5138', 'https://robohash.org/quiexplicabosoluta.png?size=50x50&set=set1', '1986-01-06 03:00:00', '1986-01-06 03:00:00', NULL),
(159, 'dmarcinkus4e@blogspot.com', 'Drusi', 'Marcinkus', 'R0XXPxBBZ', '1948-11-08', '22779 Knutson Plaza', '674-120-0758', 'https://robohash.org/errorpossimusiste.png?size=50x50&set=set1', '1998-08-18 03:00:00', '1998-08-18 03:00:00', NULL),
(160, 'amote4f@pbs.org', 'Anatola', 'Mote', 'q9tyXY8O', '1998-07-27', '3881 Northwestern Drive', '987-848-7492', 'https://robohash.org/corruptimagnamet.png?size=50x50&set=set1', '1980-09-11 03:00:00', '1980-09-11 03:00:00', NULL),
(161, 'rtrank4g@umich.edu', 'Reina', 'Trank', 'NIUvOFWcPygJ', '1982-07-29', '4 Sundown Drive', '677-239-9021', 'https://robohash.org/suntmagniet.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(162, 'jhackford4h@senate.gov', 'Joannes', 'Hackford', 'eJ5k00l', '1991-11-05', '0 Fordem Alley', '223-524-8648', 'https://robohash.org/autemiurehic.png?size=50x50&set=set1', '1990-08-09 03:00:00', '1990-08-09 03:00:00', '1990-08-09 03:00:00'),
(163, 'rvowden4i@storify.com', 'Rochette', 'Vowden', 'wQsLX5', '1974-10-03', '9381 Lindbergh Circle', '703-679-4014', 'https://robohash.org/pariaturnumquamenim.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(164, 'agrass4j@studiopress.com', 'Arly', 'Grass', 'XZXv3cq', '1983-05-14', '26 Texas Lane', '366-826-0743', 'https://robohash.org/ullamconsecteturreprehenderit.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(165, 'lgooder4k@domainmarket.com', 'Lenore', 'Gooder', 'aXRxhVAskU', '1974-07-10', '75019 Acker Street', '304-664-6963', 'https://robohash.org/voluptasdelenitiipsum.png?size=50x50&set=set1', '2004-10-14 03:00:00', '2004-10-14 03:00:00', NULL),
(166, 'ccharlon4l@wikispaces.com', 'Codi', 'Charlon', 'R3qLLSPjIL', '1991-09-06', '25 Ryan Hill', '861-286-7455', 'https://robohash.org/necessitatibuseanisi.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(167, 'ceadmead4m@google.co.uk', 'Carmina', 'Eadmead', 'Kge1s90Ne', '1987-06-05', '923 Bluejay Lane', '673-353-7590', 'https://robohash.org/assumendamolestiaeimpedit.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(168, 'msleeny4n@spiegel.de', 'Mignon', 'Sleeny', '3EV6BR', '1950-02-09', '7 Butternut Center', '428-843-5056', 'https://robohash.org/evenietmagnamtemporibus.png?size=50x50&set=set1', '1993-02-14 03:00:00', '1993-02-14 03:00:00', NULL),
(169, 'mcowey4o@telegraph.co.uk', 'Monika', 'Cowey', 'yQy2EI3sv', '1992-10-17', '89487 Sunfield Hill', '498-899-7450', 'https://robohash.org/quasnobiset.png?size=50x50&set=set1', '1990-04-22 03:00:00', '1990-04-22 03:00:00', '1990-04-22 03:00:00'),
(170, 'moflaherty4p@cpanel.net', 'Michel', 'O\' Flaherty', 'NUBEIdrSj', '1959-08-04', '8470 Del Mar Terrace', '548-242-5825', 'https://robohash.org/auteligendiearum.png?size=50x50&set=set1', '1996-07-25 03:00:00', '1996-07-25 03:00:00', NULL),
(171, 'ecruce4q@canalblog.com', 'Eduino', 'Cruce', 'g8LY1yBDAEI', '1976-01-29', '13021 Larry Place', '248-631-9021', 'https://robohash.org/estconsequaturvoluptatem.png?size=50x50&set=set1', '1998-03-04 03:00:00', '1998-03-04 03:00:00', '1998-03-04 03:00:00'),
(172, 'pstrowlger4r@salon.com', 'Phillis', 'Strowlger', 'CCsL3zIM', '1968-05-07', '675 Goodland Pass', '782-682-3631', 'https://robohash.org/assumendasitinventore.png?size=50x50&set=set1', '1995-10-25 03:00:00', '1995-10-25 03:00:00', NULL),
(173, 'jdurant4s@themeforest.net', 'Jon', 'Durant', '8MZmbR', '1957-06-20', '86952 Fallview Street', '896-841-9269', 'https://robohash.org/autemvoluptatema.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(174, 'sgoldney4t@about.me', 'Skippy', 'Goldney', 'LZ4KvLVKeD', '1956-12-17', '994 Summer Ridge Alley', '490-391-1161', 'https://robohash.org/deseruntetquisquam.png?size=50x50&set=set1', '2002-01-19 03:00:00', '2002-01-19 03:00:00', NULL),
(175, 'chackley4u@shareasale.com', 'Cherry', 'Hackley', 'eMuYbc', '1971-07-08', '79704 Lerdahl Avenue', '910-356-7898', 'https://robohash.org/magnamreprehenderiteos.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(176, 'sfray4v@shutterfly.com', 'Shaw', 'Fray', 'rgMtdgbVs', '1965-12-27', '8897 Burning Wood Terrace', '703-261-7107', 'https://robohash.org/similiquevoluptatumsit.png?size=50x50&set=set1', '1973-03-26 03:00:00', NULL, NULL),
(177, 'mgiddins4w@shop-pro.jp', 'Maria', 'Giddins', '3lOWNvwhXI', '1970-10-07', '2724 Lakewood Circle', '525-665-5874', 'https://robohash.org/facerevoluptatibusvoluptatem.png?size=50x50&set=set1', '1994-01-10 03:00:00', NULL, NULL),
(178, 'cmattisssen4x@washingtonpost.com', 'Caron', 'Mattisssen', 'EGXEoG8VQnD', '1955-01-08', '57335 Dixon Road', '341-452-6408', 'https://robohash.org/aspernaturestet.png?size=50x50&set=set1', '1984-02-12 03:00:00', NULL, NULL),
(179, 'ytertre4y@mozilla.org', 'Yancey', 'Tertre', 'k2e8Ty6', '1973-06-12', '0342 Norway Maple Parkway', '482-173-0063', 'https://robohash.org/ullamoditet.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(180, 'ltavinor4z@themeforest.net', 'Lancelot', 'Tavinor', 'sfcMnsSQK3i', '1964-06-12', '23358 Grover Center', '188-407-3977', 'https://robohash.org/repellenduscorruptiearum.png?size=50x50&set=set1', '2001-02-12 03:00:00', '2001-02-12 03:00:00', NULL),
(181, 'ytape50@edublogs.org', 'Yankee', 'Tape', 'fu5Gp64Ffy', '1981-05-16', '3 Dryden Circle', '327-824-0717', 'https://robohash.org/etprovidentaliquid.png?size=50x50&set=set1', '1996-11-20 03:00:00', NULL, NULL),
(182, 'mmccurt51@php.net', 'Martie', 'McCurt', 'RjnZOhSmpxC', '1973-03-21', '39668 Hermina Way', '586-678-9106', 'https://robohash.org/ipsumvoluptascumque.png?size=50x50&set=set1', '2004-02-29 03:00:00', '2004-02-29 03:00:00', NULL),
(183, 'lmcelroy52@networksolutions.com', 'Link', 'McElroy', 'gjodASNGSBvP', '1993-06-29', '2 Westridge Center', '403-109-1957', 'https://robohash.org/perspiciatisnonest.png?size=50x50&set=set1', '1982-05-21 03:00:00', '1982-05-21 03:00:00', NULL),
(184, 'fshalliker53@github.io', 'Florencia', 'Shalliker', 'ktWWLOHNe', '1960-09-12', '54 Surrey Junction', '209-949-8584', 'https://robohash.org/voluptatumcumeos.png?size=50x50&set=set1', '1986-08-22 03:00:00', '1986-08-22 03:00:00', NULL),
(185, 'cshieldon54@weibo.com', 'Cyrill', 'Shieldon', 'rx6k55MHmVmu', '1984-08-22', '109 Hintze Road', '489-957-6295', 'https://robohash.org/iustoanimicorrupti.png?size=50x50&set=set1', '1986-02-04 03:00:00', NULL, NULL),
(186, 'rhorche55@umn.edu', 'Rutledge', 'Horche', 'yUL9TJ5nDd1', '1995-03-22', '718 Drewry Center', '956-474-7155', 'https://robohash.org/doloremexplicaboet.png?size=50x50&set=set1', '1996-10-12 03:00:00', '1996-10-12 03:00:00', NULL),
(187, 'ejeeves56@salon.com', 'Edwin', 'Jeeves', '7A4u6YjJxso', '1978-12-01', '391 Merrick Street', '982-925-8808', 'https://robohash.org/modiundeeligendi.png?size=50x50&set=set1', '1988-01-31 03:00:00', '1988-01-31 03:00:00', NULL),
(188, 'tfishbourne57@archive.org', 'Tiphani', 'Fishbourne', 'uYX9hO', '1967-06-06', '64531 Valley Edge Avenue', '159-371-5987', 'https://robohash.org/providentfugiatut.png?size=50x50&set=set1', '1992-07-30 03:00:00', NULL, NULL),
(189, 'cguyton58@hugedomains.com', 'Chadwick', 'Guyton', '1VWc4LBqE', '1998-03-14', '4 Sloan Park', '848-749-0458', 'https://robohash.org/eteostemporibus.png?size=50x50&set=set1', '1999-12-15 03:00:00', '1999-12-15 03:00:00', NULL),
(190, 'tgoodding59@google.fr', 'Tiffanie', 'Goodding', 'hnEapCPVGwZ', '1997-09-18', '82737 Oak Court', '479-290-6286', 'https://robohash.org/estrationeut.png?size=50x50&set=set1', '1984-07-10 03:00:00', '1984-07-10 03:00:00', NULL),
(191, 'cthewlis5a@homestead.com', 'Clayborne', 'Thewlis', 'pDgCfft', '1958-04-22', '219 Oneill Hill', '880-935-2589', 'https://robohash.org/aspernaturetenim.png?size=50x50&set=set1', '1971-06-12 03:00:00', '1971-06-12 03:00:00', NULL),
(192, 'jbouch5b@slideshare.net', 'Joachim', 'Bouch', 'iPqi6z', '1978-08-30', '44968 Riverside Avenue', '698-850-5225', 'https://robohash.org/aliquidvoluptatemvoluptas.png?size=50x50&set=set1', '1973-10-20 03:00:00', '1973-10-20 03:00:00', NULL),
(193, 'kkinavan5c@i2i.jp', 'Kristen', 'Kinavan', '0uxKmxa', '1960-08-10', '716 Morning Drive', '225-844-3610', 'https://robohash.org/quissitesse.png?size=50x50&set=set1', '1974-02-15 03:00:00', NULL, NULL),
(194, 'vmatushevitz5d@dailymotion.com', 'Valentine', 'Matushevitz', '0V4cSr5', '1972-01-13', '78850 Stang Way', '249-897-8474', 'https://robohash.org/perspiciatisquidemdolores.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(195, 'balam5e@blogger.com', 'Bruis', 'Alam', 'uja8UO', '1983-05-25', '88 Loeprich Lane', '886-576-3613', 'https://robohash.org/illummodiconsequatur.png?size=50x50&set=set1', '1970-05-27 03:00:00', NULL, NULL),
(196, 'pespinho5f@netlog.com', 'Paulina', 'Espinho', 'P8EjzGtKGrCr', '1976-07-29', '127 Muir Parkway', '309-668-5125', 'https://robohash.org/repellendusexercitationemrerum.png?size=50x50&set=set1', '1982-04-11 03:00:00', NULL, NULL),
(197, 'asheivels5g@google.co.jp', 'Arnie', 'Sheivels', 'Zt8siM1G', '1967-04-13', '28006 Sherman Lane', '795-650-5443', 'https://robohash.org/etautemperspiciatis.png?size=50x50&set=set1', '1987-09-15 03:00:00', '1987-09-15 03:00:00', NULL),
(198, 'dchannon5h@nifty.com', 'Dorothea', 'Channon', 'BlUtRo14', '1995-03-22', '61045 Butterfield Way', '703-966-8114', 'https://robohash.org/doloreutinventore.png?size=50x50&set=set1', '1987-12-10 03:00:00', '1987-12-10 03:00:00', NULL),
(199, 'cblankenship5i@independent.co.uk', 'Caye', 'Blankenship', 'yCWeRniSh9', '1950-07-26', '543 Quincy Court', '623-107-2150', 'https://robohash.org/nihilducimusmagnam.png?size=50x50&set=set1', '2000-05-23 03:00:00', '2000-05-23 03:00:00', NULL),
(200, 'vflisher5j@altervista.org', 'Verge', 'Flisher', 'YyWil3Hs', '2001-02-03', '2 Crownhardt Drive', '586-606-5847', 'https://robohash.org/eligendinihilquis.png?size=50x50&set=set1', '0000-00-00 00:00:00', NULL, NULL),
(507, 'oliesco@gmail.com', 'Oli', 'Escobar', '$2a$10$fq2I1SpyCX/SWHknYlqk8eOj04wsIiOJ27hF2HkO2S3ssf0oUceHK', '2018-07-13', 'Demir Mz24 S9 Apto 4', NULL, '1674990333248_explore.png', '2023-01-29 11:05:33', '2023-01-29 11:05:33', NULL),
(509, 'carolinabubenik@gmail.com', 'María Carolina', 'Bubenik Ricciardi', '$2a$10$fq2I1SpyCX/SWHknYlqk8eOj04wsIiOJ27hF2HkO2S3ssf0oUceHK', '1985-07-18', 'AV. PUJOL 1740', NULL, '1674990928265_Caro.jpg', '2023-01-29 11:15:28', '2023-01-29 12:15:47', NULL),
(510, 'biancaescobarbubenik@gmail.com', 'Bianca', 'Josefina', '$2a$10$gyw/802qgmok5PtqkN4gCeHpEWygU/E3MiFR8WRN9Xm3c1JQpbEHy', '2008-12-11', 'Demir Mz24 S9 Apto 4', NULL, '1674993396902_FondoProcesos3.jpg', '2023-01-29 11:56:37', '2023-01-29 11:56:37', NULL),
(511, 'admin@gmail.com', 'admin', 'admin', '$2a$10$sIEW2sBxAf6tN98MYDdXUulS8baeKYbHFlduBqyhCvbCjv/iBMBxy', '2000-01-01', 'admin', NULL, '1674994634785_fondoProcesos.webp', '2023-01-29 12:17:14', '2023-01-29 12:17:14', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categories_parent_category_id_categories` (`parent_category_id`);

--
-- Indices de la tabla `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `id_2` (`id`),
  ADD KEY `id_3` (`id`);

--
-- Indices de la tabla `product_colors`
--
ALTER TABLE `product_colors`
  ADD PRIMARY KEY (`product_id`,`color_id`),
  ADD KEY `ix_prod` (`product_id`) USING BTREE,
  ADD KEY `ix_color` (`color_id`) USING BTREE;

--
-- Indices de la tabla `product_sizes`
--
ALTER TABLE `product_sizes`
  ADD PRIMARY KEY (`product_id`,`size_id`),
  ADD KEY `ix_prod` (`product_id`) USING BTREE,
  ADD KEY `ix_size` (`size_id`) USING BTREE;

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indices de la tabla `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=513;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_parent_category_id_categories` FOREIGN KEY (`parent_category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
