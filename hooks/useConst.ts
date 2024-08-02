import { useContext } from 'react';

import { EnvValuesContext } from 'context/envValues';
import { PublicConstants } from 'lib/constants.public';

export const useConst = (): PublicConstants => {
  return useContext(EnvValuesContext);
};
