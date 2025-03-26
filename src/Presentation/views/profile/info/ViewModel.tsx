import { useEffect, useState } from 'react';
import { GetUserLocalUseCase } from '../../../../Domain/useCases/userLocal/GetUserLocal';
import { RemoveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/RemoveUserLocal';

export const ProfileInfoViewModel = () => {
  const [user, setUser] = useState<any>(null);

  const getUserSession = async () => {
    const userData = await GetUserLocalUseCase();
    setUser(userData);
  };

  const removeSession = async () => {
    await RemoveUserLocalUseCase();
    setUser(null);
  };

  useEffect(() => {
    getUserSession();
  }, []);

  return {
    user,
    removeSession
  };
};

export default ProfileInfoViewModel;
