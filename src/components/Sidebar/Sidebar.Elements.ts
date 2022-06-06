import tw from 'twin.macro';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  ${tw`flex flex-col justify-between min-h-screen`}
  background: #F6F6F6;
  padding: 0 2rem;
  height: 100%;
  width: 100%;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  ${tw`flex flex-col justify-between  gap-10 p-4`}
  width: 100%;
`;

export const NavItem = styled.div(({ isActive }: { isActive: boolean }) => [
  tw` px-6 py-2 rounded-lg cursor-pointer flex items-center gap-4`,
  {
    color: '#023047',
  },
  isActive && {
    backgroundColor: '#023047',
    color: '#fff',
  },
]);

export const NavItemIcon = styled.div`
  font-size: 2rem;
  margin-top: 0.5rem;
`;

export const NavItemText = styled.span`
  font-size: 2rem;
`;
