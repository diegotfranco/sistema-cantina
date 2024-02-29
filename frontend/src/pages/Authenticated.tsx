import { useNavigate } from '@tanstack/react-router';
import useAuth from 'hooks/useAuth';

const Authenticated = () => {
  const navigate = useNavigate({ from: '/authenticated' });
  const auth = useAuth();

  const handleLogout = () => {
    auth.setUser(null);
    navigate({ to: '/' });
  };

  return (
    <div className="p-2">
      <h3>authenticated page</h3>
      <p>Hi {auth.user}!</p>
      <p>If you can see this, that means you are authenticated.</p>
      <div className="mt-4">
        <button
          type="button"
          onClick={handleLogout}
          className="bg-slate-500 text-white py-2 px-4 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
export default Authenticated;
