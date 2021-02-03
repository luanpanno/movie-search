import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import api from '../services/api';

interface Context {
  isLoading: boolean;
}

export const LoadingContext = createContext<Context>({} as Context);

export const LoadingProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = useCallback(() => {
    api.interceptors.request.use(
      (req) => {
        setIsLoading(true);
        return req;
      },
      (error) => {
        setIsLoading(false);
        return Promise.reject(error);
      }
    );

    api.interceptors.response.use(
      (res) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 200);
        return res;
      },
      (error) => {
        setIsLoading(false);
        return Promise.reject(error);
      }
    );
  }, []);

  useEffect(() => {
    handleLoading();
  }, [handleLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  return useContext(LoadingContext);
};
