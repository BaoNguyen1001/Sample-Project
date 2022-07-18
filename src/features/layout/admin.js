import { Button } from '@progress/kendo-react-buttons';
import { authActions } from '../auth/authSlice';
import { useDispatch } from 'react-redux';

const Admin = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  }
  return (
    <div>
      <h2>Admin page</h2>
      <Button onClick={handleLogout}>Logout</Button>

    </div>
  )
}

export default Admin;
