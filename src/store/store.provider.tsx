import { Provider } from 'react-redux';

import { store } from './store.definition';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
