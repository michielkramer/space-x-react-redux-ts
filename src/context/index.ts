import { createContext } from 'react';
import { ListItem } from '../components/List';

export type AppContextType = {
    init: boolean;
    isLoading: boolean;
    missions: ListItem[];
};

const AppContext = createContext(null);

export default AppContext;