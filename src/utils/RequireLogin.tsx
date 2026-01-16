import { useEffect, useState } from 'react';
import { useAuth } from './useAuth';
import { fetchUser } from './Requests/AuthRequests';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3IiwiZW1haWwiOiJjdGFBZG1pbi5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJTdXBlckFkbWluIC0gT3JnYW5pc2F0aW9uIiwianRpIjoiYWQzODJiNmQtYTNkMC00YzdlLTkzY2QtOTYzOGJjZWI0NWIxIiwiZXhwIjoxNzY4NzY2Njg1LCJpc3MiOiJDbGVhclRydXN0QWZyaWNhIiwiYXVkIjoiQ2xlYXJUcnVzdEFmcmljYVVzZXJzIn0.AKE8qGrpSkO42_tkvtndw-80e8cIttKPNKVb43q1IXo"

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
