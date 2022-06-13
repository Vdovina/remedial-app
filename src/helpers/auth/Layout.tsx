import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../../components';

interface PropsType {
  hideHeaderPaths: string[],
}

const Layout = ({ hideHeaderPaths = [] } : PropsType) => {
  const { pathname } = useLocation();
  return (
    <>
      {!hideHeaderPaths.includes(pathname) && <Header />}
      <div className='app__container'>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;