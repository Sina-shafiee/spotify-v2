import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootState } from '../redux';

const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const token = useSelector((state: RootState) => state.auth.token);

  if (!token) {
    return <Navigate to='/' replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
