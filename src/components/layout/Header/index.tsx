import { BellIcon, LayoutGrid } from 'lucide-react';
import { Actions, HeaderWrapper, Logo, SearchSection } from './styles';
import { HeaderProps } from './types';

export const Header = ({ title }: HeaderProps) => {
    const firstTwoLetters = title.slice(0, 2);
    const restOfTitle = title.slice(2);
   
    return (
      <HeaderWrapper>
        <Logo>
          <span>{firstTwoLetters}</span>{restOfTitle}
        </Logo>
        <SearchSection>
          <input placeholder="Search your task here..." />
        </SearchSection>
        <Actions>
          <BellIcon size={20} />
          <LayoutGrid size={20} />
          <div>Tuesday<br />20/06/2023</div>
        </Actions>
      </HeaderWrapper>
    );
   };