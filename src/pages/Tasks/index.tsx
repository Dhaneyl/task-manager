import { TaskCard } from "./task.card";
import { TaskPriority, TaskStatus } from "./types";


const mockTask = {
  id: '1',
  title: 'Design Landing Page',
  description: 'Create wireframes and mockups for the new landing page',
  status: TaskStatus.IN_PROGRESS,
  priority: TaskPriority.HIGH,
  createdAt: new Date(),
  deadline: new Date(Date.now() + 86400000*3), // 3 days from now
  image: 'https://placehold.co/600x400'
};

export const Tasks = () => (
  <div>
    <h1>Tasks</h1>
    
    <TaskCard task={mockTask} />
  </div>
);