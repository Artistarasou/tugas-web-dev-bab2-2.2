// src/components/GoalList.js
import React from 'react';
import FirstGoal from './FirstGoal';
import SecondGoal from './SecondGoal';
import ThirdGoal from './ThirdGoal';

function GoalList() {
  return (
    <div>
      <h1>My Learning Goals</h1>
      <FirstGoal />
      <SecondGoal />
      <ThirdGoal />
    </div>
  );
}

export default GoalList;
