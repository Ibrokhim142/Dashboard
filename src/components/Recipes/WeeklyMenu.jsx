import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'antd';
import { removeFromMenu } from '../../store/RecipeSlice';

const WeeklyMenu = () => {
  const dispatch = useDispatch();
  const weeklyMenu = useSelector(state => state.recipes.weeklyMenu);

  const handleRemoveFromMenu = (recipeId) => {
    dispatch(removeFromMenu(recipeId));
  };

  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Ingredients', dataIndex: 'ingredients', key: 'ingredients' },
    { title: 'Actions', key: 'actions', render: (text, record) => (
        <Button onClick={() => handleRemoveFromMenu(record.id)}>Remove</Button>
      ),
    },
  ];

  return (
    <div>
      <h2>Weekly Menu</h2>
      <Table dataSource={weeklyMenu} columns={columns} rowKey="id" />
    </div>
  );
};

export default WeeklyMenu;
