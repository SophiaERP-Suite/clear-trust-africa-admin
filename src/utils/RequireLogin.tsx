import { useEffect, useState } from 'react';
import { useAuth } from './useAuth';
import { fetchUser } from './Requests/AuthRequests';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2IiwiZW1haWwiOiJpbmZvQGNsZWFydHJ1c3RhZnJpY2EuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiU3VwZXJBZG1pbiAtIEdsb2JhbCIsImp0aSI6IjUxNjUyOGFlLTg5MDktNDI4My1hN2MxLTEzMDA0MDNhZDg3ZSIsImV4cCI6MTc2ODMwODAzMSwiaXNzIjoiQ2xlYXJUcnVzdEFmcmljYSIsImF1ZCI6IkNsZWFyVHJ1c3RBZnJpY2FVc2VycyJ9.XT8YtP9UIZCImD4px6aPdrQa13QefdIJKB3vSJuOiaE"

export const RequireLogin = ({ children }: { children: React.ReactNode }) => {
  const { user, loadUser } = useAuth();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {

    if (!token) {
      setCheckingAuth(false);
      window.location.replace("http://localhost:5174/xt/login");
      return;
    }

    if (user) {
      setCheckingAuth(false);
      return;
    }

    fetchUser(token)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error("Unauthorized");
      })
      .then((data) => {
        localStorage.setItem('accessToken', token);
        loadUser(data.user);
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("accessToken");
        window.location.replace("http://localhost:5174/xt/login");
      })
      .finally(() => {
        setCheckingAuth(false);
      });
  }, []);

  if (checkingAuth) {
    return null;
  }

  return <>{children}</>;
};
