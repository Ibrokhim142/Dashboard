import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import DashboardLayout from './components/Layout/DashboardLayout';
import RecipeList from './components/Recipes/RecipeList';
import WeeklyMenu from './components/Recipes/WeeklyMenu';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/menu" element={<WeeklyMenu />} />
          </Routes>
        </DashboardLayout>
      </Router>
    </Provider>
  );
};

export default App;
