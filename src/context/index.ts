import { createContext } from 'react';
import { ListItem } from '../components/List';

export type AppContextType = {
    isLoading: boolean;
    isShowingFavourites: boolean;
    missions: ListItem[];
};

const AppContext = createContext(null);

export default AppContext;