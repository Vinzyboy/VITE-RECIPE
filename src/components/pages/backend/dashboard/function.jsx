export const getFoodByCategory = (categoryId, dataRecipe) => {
  return (
    dataRecipe?.data.filter(
      (item) => Number(categoryId) === Number(item.category_aid)
    ) || []
  );
};

export const getLevelRecipe = (dataCategory, dataRecipe) => {
  if (!dataCategory?.data || !dataRecipe?.data) return [];

  const levelCounts = (recipeItems) => {
    const levels = { easy: 0, normal: 0, hard: 0 };

    recipeItems.forEach((recipe) => {
      if (recipe.level_title === "easy") levels.easy++;
      else if (recipe.level_title === "normal") levels.normal++;
      else if (recipe.level_title === "hard") levels.hard++;
    });

    return levels;
  };

  return dataCategory.data.map((categoryItem) => {
    const recipeItems = dataRecipe.data.filter(
      (recipe) => recipe.recipe_category_id === categoryItem.category_aid
    );

    const { easy, normal, hard } = levelCounts(recipeItems);

    return {
      category_title: categoryItem.category_title,
      category_aid: categoryItem.category_aid,
      easy,
      normal,
      hard,
    };
  });
};

