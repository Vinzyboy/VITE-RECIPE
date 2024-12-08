-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2024 at 12:48 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipe_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `recipe`
--

CREATE TABLE `recipe` (
  `recipe_aid` int(11) NOT NULL,
  `recipe_title` varchar(50) NOT NULL,
  `recipe_category` varchar(20) NOT NULL,
  `recipe_level` varchar(10) NOT NULL,
  `recipe_serving` int(10) NOT NULL,
  `recipe_prep_time` varchar(20) NOT NULL,
  `recipe_image` varchar(20) NOT NULL,
  `recipe_ingredients` text NOT NULL,
  `recipe_description` text NOT NULL,
  `recipe_instruction` text NOT NULL,
  `recipe_is_active` tinyint(1) NOT NULL,
  `recipe_datetime` varchar(20) NOT NULL,
  `recipe_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`recipe_aid`, `recipe_title`, `recipe_category`, `recipe_level`, `recipe_serving`, `recipe_prep_time`, `recipe_image`, `recipe_ingredients`, `recipe_description`, `recipe_instruction`, `recipe_is_active`, `recipe_datetime`, `recipe_created`) VALUES
(7, 'Christmas Pasta Salad', 'pasta', 'easy', 8, '35 mins', 'pasta-salad.jpeg', '[{\"ingredients\":\"Kosher salt\",\"amount\":\"1\",\"unit\":\"tsp\"},{\"ingredients\":\"broccoli (about 1 1\\/2 pounds), cut into florets  \",\"amount\":\"2\",\"unit\":\"heads\"},{\"ingredients\":\"mezze rigatoni or other short tubular pasta  \",\"amount\":\"1\",\"unit\":\"pund\"},{\"ingredients\":\" olive oil \",\"amount\":\"2\",\"unit\":\"tbs\"},{\"ingredients\":\"baby spinach  \",\"amount\":\"2\",\"unit\":\"cups\"},{\"ingredients\":\"freshly grated Parmesan\",\"amount\":\"1\\/2\",\"unit\":\"cup\"},{\"ingredients\":\" almonds \",\"amount\":\"1\\/4\",\"unit\":\"cups\"},{\"ingredients\":\" fresh basil leaves \",\"amount\":\"1\\/4\",\"unit\":\"cups\"},{\"ingredients\":\"Juice of 1 lemon\",\"amount\":\"3\",\"unit\":\"tbs\"},{\"ingredients\":\"chopped fresh chives\",\"amount\":\"2\",\"unit\":\"tbs\"},{\"ingredients\":\"oasted red peppers\",\"amount\":\"2\",\"unit\":\"tbs\"},{\"ingredients\":\" tomatoes\",\"amount\":\"1\\/2\",\"unit\":\"cup\"}]', 'Thanks to its festive colors, this pasta salad will shine bright on your holiday table. For the vibrant green dressing, we jazzed up traditional basil pesto with spinach and almonds. A couple tablespoons of white wine vinegar go into the whole dish for extra tang. The pesto can be made three days ahead and refrigerated in an airtight container.', '##### Step 1\n\nBring a large pot of generously **salted water to a boil**. Fill a large bowl with cold water. Drop the broccoli into the boiling water and cook until crisp-tender and bright green, about 2 minutes. Remove with a slotted spoon and plunge into the cold water to stop the cooking. Let sit until cool, then drain and set aside\n\n##### Step 2\nReturn the water in the pot to a boil and cook the rigatoni according to the package directions for al dente. Drain in a colander and transfer to a large bowl. Toss the pasta with 2 tablespoons of the olive oil to coat evenly and refrigerate until cooled completely, about 10 minutes.  \n\n##### Step 3\nMeanwhile, add the remaining 1/3 cup olive oil to a blender with the spinach, Parmesan, almonds, basil, lemon juice, chives and 1/4 cup water and puree until completely smooth. Pour the pesto over top of the pasta and add the reserved broccoli, red peppers, sun-dried tomatoes, mozzarella, vinegar and 1 teaspoon salt. Toss gently until well combined. Transfer to a serving bowl and sprinkle with more chopped chives. Cover and refrigerate until ready to serve, up to 4 hours.\n\n![Tux, the Linux mascot](https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/a/4a/a4ad9594-c614-5656-8a7e-d160259b19d0/63ea233d3e560.image.jpg?resize=1200%2C674)', 1, '2024-12-04 15:02:20', '2024-12-04 12:56:09'),
(8, 'Green Beans with Warm Bacon Dressing', 'pasta', 'easy', 5, '30 mins', 'green-beans.jpeg', '[{\"ingredients\":\"green beans, trimmed\",\"amount\":\"1\\/2\",\"unit\":\"pounds\"},{\"ingredients\":\"smoked bacon, chopped\",\"amount\":\"1\\/4\",\"unit\":\"pound\"},{\"ingredients\":\"chopped shallots\",\"amount\":\"1\\/4\",\"unit\":\"cup\"},{\"ingredients\":\"garlic clove\",\"amount\":\"1\",\"unit\":\"clove\"},{\"ingredients\":\"sherry wine vinegar \",\"amount\":\"1\",\"unit\":\"tbs\"},{\"ingredients\":\"Dijon mustard \",\"amount\":\"1\\/2\",\"unit\":\"tbs\"},{\"ingredients\":\"dry mustard \",\"amount\":\"1\\/2\",\"unit\":\"tbs\"},{\"ingredients\":\"extra-virgin olive oil \",\"amount\":\"1\\/4\",\"unit\":\"cup\"},{\"ingredients\":\"Kosher salt \",\"amount\":\"1\",\"unit\":\"tbs\"}]', 'Bacon makes everything better, especially tender green beans. Top the veggies with creamy goat cheese and sweet dried cranberries for a dish that hits all the right notes.', 'Cook the beans in a large pot of boiling water until tender-crisp, about 5 minutes. Drain. Pat dry. Place the beans in a large bowl.\n\nCook the bacon in a skillet, and transfer to drain, reserving the drippings in the skillet. Add the shallots and garlic to the drippings. Saute over medium, 1 minute or just until soft. Add the vinegar, Dijon and dry mustard. Whisk, stirring to loosen the browned bits in the bottom of the skillet. Remove from the heat and slowly whisk in the olive oil.\n\nToss the beans with the warm dressing. Season with salt. Arrange on a serving platter. Sprinkle with the reserved bacon, goat cheese and dried cranberries. Serve immediately.', 1, '2024-12-04 13:01:18', '2024-12-04 13:01:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`recipe_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `recipe_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
