import { BellIcon, LayoutGrid } from 'lucide-react';
import { format } from 'date-fns';
import { Actions, DateContainerStyle, DateStyled, DayStyled, HeaderWrapper, IconStyled, Logo, SearchSection } from './styles';
import { HeaderProps } from './types';

export const Header = ({ title }: HeaderProps) => {
    const firstTwoLetters = title.slice(0, 2);
    const restOfTitle = title.slice(2);

    const date = new Date();
const day = format(date, 'EEEE');
const fullDate = format(date, 'dd/MM/yyyy');
    return (
      <HeaderWrapper>
        <Logo>
          <span>{firstTwoLetters}</span>{restOfTitle}
        </Logo>
        <SearchSection>
          <input placeholder="Search your task here..." />
        </SearchSection>
        <Actions>
          <IconStyled><BellIcon size={20} /></IconStyled>
          <IconStyled><LayoutGrid size={20} /></IconStyled>
          <DateContainerStyle>
            <DayStyled>{day}</DayStyled>
            <DateStyled>{fullDate}</DateStyled>
            </DateContainerStyle>
        </Actions>
      </HeaderWrapper>
    );
   };