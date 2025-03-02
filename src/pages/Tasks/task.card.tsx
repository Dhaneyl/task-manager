import { Clock } from 'lucide-react';
import { format } from 'date-fns';
import { Task, TaskCardProps } from './types';
import {
  CardWrapper,
  CardHeader,
  TaskTitle,
  TaskDescription,
  TaskMeta,
  StatusBadge,
  PriorityBadge
} from './styles';

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <CardWrapper>
      <CardHeader>
        <TaskTitle>{task.title}</TaskTitle>
        <PriorityBadge priority={task.priority}>
          {task.priority}
        </PriorityBadge>
      </CardHeader>
      <TaskDescription>{task.description}</TaskDescription>
      {task.image && (
        <img 
          src={task.image} 
          alt={task.title}
          style={{ width: '100%', borderRadius: '0.375rem', marginBottom: '0.75rem' }} 
        />
      )}
      <TaskMeta>
        <StatusBadge status={task.status}>
          {task.status}
        </StatusBadge>
        {task.deadline && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Clock size={14} />
            <span style={{ fontSize: '0.75rem' }}>
              {format(task.deadline, 'dd/MM/yyyy')}
            </span>
          </div>
        )}
      </TaskMeta>
    </CardWrapper>
  );
};