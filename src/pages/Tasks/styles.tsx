import styled from 'styled-components';
import { PriorityBadgeProps, StatusBadgeProps, TaskPriority, TaskStatus } from './types';

// Breakpoints for responsive design
const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

export const CardWrapper = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 0.75rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  margin-bottom: 1rem;
  width: 100%;
  max-width: 100%;
  
  @media (min-width: ${breakpoints.sm}) {
    padding: 1rem;
    max-width: 25rem;
  }
  
  @media (min-width: ${breakpoints.lg}) {
    max-height: 25rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  
  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TaskTitle = styled.h3`
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  
  @media (min-width: ${breakpoints.sm}) {
    margin: 0;
    font-size: 1.125rem;
  }
`;

export const TaskDescription = styled.p`
  color: ${props => props.theme.colors.gray[500]};
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  
  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 1rem;
  }
`;

export const TaskMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
  
  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    align-items: center;
    margin-top: 0.75rem;
  }
`;

export const StatusBadge = styled.span<StatusBadgeProps>`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  display: inline-block;
  white-space: nowrap;
  
  ${({ status }) => {
    switch(status) {
      case TaskStatus.COMPLETED:
        return `
          background: #DCFCE7;
          color: #15803D;
        `;
      case TaskStatus.IN_PROGRESS:
        return `
          background: #DBEAFE;
          color: #1D4ED8;
        `;
      default:
        return `
          background: #FEE2E2;
          color: #B91C1C;
        `;
    }
  }}
`;

export const PriorityBadge = styled.span<PriorityBadgeProps>`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  display: inline-block;
  white-space: nowrap;
  
  ${({ priority }) => {
    switch(priority) {
      case TaskPriority.HIGH:
        return `
          background: #FEE2E2;
          color: #B91C1C;
        `;
      case TaskPriority.MODERATE:
        return `
          background: #FEF9C3;
          color: #A16207;
        `;
      default:
        return `
          background: #DCFCE7;
          color: #15803D;
        `;
    }
  }}
`;