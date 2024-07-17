import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, addToMenu } from '../../store/RecipeSlice';
import { Table, Button } from 'antd';

const RecipeList = () => {
  const dispatch = useDispatch();
  const { recipes, weeklyMenu, status } = useSelector(state => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handleAddToMenu = (recipe) => {
    dispatch(addToMenu(recipe));
  };

  const columns = [
    { tittle: 'image', dataIndex: 'image', key: 'image', },
    { tittle: 'name', dataIndex: 'name', key: 'name' },
    { title: 'Ingredients', dataIndex: 'ingredients', key: 'ingredients' },
    { tittle: 'instructions', dataIndex: 'instructions', key: 'instructions' },
    { title: 'Actions', key: 'actions', render: (text, record) => (
        !weeklyMenu.some(item => item.id === record.id) && (
          <Button type="primary" onClick={() => handleAddToMenu(record)}>Add to Menu</Button>
        )
      ),
    },
  ];

  return (
    <div>
      <h2>Recipe List</h2>
      <Table dataSource={recipes} columns={columns} rowKey="id" />
    </div>
  );
};

export default RecipeList;
