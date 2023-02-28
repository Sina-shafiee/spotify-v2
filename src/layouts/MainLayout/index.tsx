import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { RootState } from '../../redux';

const MainLayout = () => {
  const token = useSelector((state: RootState) => state.rootReducer.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/home', { replace: true });
    }
  }, [token, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default MainLayout;
