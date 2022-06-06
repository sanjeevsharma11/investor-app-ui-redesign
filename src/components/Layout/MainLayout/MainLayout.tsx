import Sidebar from 'components/Sidebar/Sidebar';
import tw from 'twin.macro';
import {
  GlobalStylesMainLayout,
  MainLayoutContainer,
  RightSideBar,
} from './MainLayout.Elements';
import Head from 'next/head';

const Box = tw.div`p-4 bg-gray-600`;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStylesMainLayout />
      <MainLayoutContainer>
        <Sidebar />
        <section>{children}</section>
        <RightSideBar>
          <div
            style={{
              padding: '1.2rem ',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.2)',
              height: '25vh',
            }}
          ></div>
          <div
            style={{
              padding: '1.2rem ',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.2)',
              height: '75vh',
            }}
          ></div>
        </RightSideBar>
      </MainLayoutContainer>
    </>
  );
};

export default MainLayout;
