import { type ReactNode } from 'react';
import CourseGoal from './CourseGoal.tsx';
import { type CourseGoal as CGoal } from '../App.tsx';
import InfoBox from './InfoBox.tsx';

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {


  if (goals.length === 0) {
    return <InfoBox mode="hint">No goals found. Please add one.</InfoBox>
  }
  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = <InfoBox mode="warning">You have less than 3 goals.</InfoBox>
  }
  else {
    warningBox = <InfoBox mode="success">You have 3 or more goals.</InfoBox>
  }
  return (
    <>
    {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
