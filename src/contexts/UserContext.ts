import React from 'react';

import { IUser } from '../types/services/user.types';

interface IUserContext {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

export default React.createContext({
  user: undefined,
  setUser: () => { },
} as IUserContext);
