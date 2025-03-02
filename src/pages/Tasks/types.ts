export enum TaskStatus {
  NOT_STARTED = 'Not Started',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed'
}

export enum TaskPriority {
  LOW = 'Low',
  MODERATE = 'Moderate',
  HIGH = 'High'
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  createdAt: Date;
  deadline?: Date;
  image?: string;
}

export interface TaskCardProps {
  task: Task;
}

export interface PriorityBadgeProps {
  priority: TaskPriority;
  children?: React.ReactNode;
}

export interface StatusBadgeProps {
  status: TaskStatus;
  children?: React.ReactNode;
}