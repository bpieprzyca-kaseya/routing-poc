import React, {useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { menuItems } from '../components/MainMenu';
import { isTabActive } from './isTabActive';

const defaultValue = {
  actions: [],
  addTab: () => {},
  removeTab: () => {},
};

const getInitialTabs = (pathname) => {
  const item = menuItems.find((menuItem) => isTabActive(pathname, menuItem.path))

  return [
    {
      ...item,  
      path: pathname,
    }
  ];
}

const getNextTabIndex = (removedIndex, length) => {
  if (length === 1 || removedIndex === 0) {
    return 0;
  }
  return removedIndex - 1;
}

export const TabsContext = React.createContext(defaultValue);

export const TabsContextProvider = ({children}) => {
  const { pathname } = useLocation();
  const [tabs, setTabs] = useState(getInitialTabs(pathname));
  const navigate = useNavigate();

  useEffect(() => {
    updateActiveTabPath(pathname);
    }, [pathname]
  )

  const addTab = (tab) => {
    if(!tabs.some(currentTab => currentTab.id === tab.id)){
        setTabs([...tabs, tab]);
    }
  };

  const removeTab = (tabId) => {
    const removedTabIndex = tabs.findIndex((currentTab) => currentTab.id === tabId);

    const currentItemIndex = tabs.findIndex((item) => isTabActive(pathname, item.path))
    if(currentItemIndex === removedTabIndex) {
      if (tabs.length === 1) {
        navigate('/');
      } else {
        const nextTabIndex = getNextTabIndex(removedTabIndex, tabs.length);
        navigate(tabs[nextTabIndex].path);
      }
    }

    setTabs((currentTabs) => currentTabs.filter((currentTab) => currentTab.id !== tabId));
  };

  const updateActiveTabPath = () => {
    setTabs((currentTabs) => currentTabs.map((currentTab) => {
      if (isTabActive(pathname, currentTab.path) && currentTab.path !== pathname) {
        return {
          ...currentTab,
          path: pathname,
          tabState: null,
        };
      }
      return currentTab;
    }));
  };

  const setTabState = (values) => {
    setTabs((currentTabs) => currentTabs.map((currentTab) => {
      if (isTabActive(pathname, currentTab.path)) {
        return {
          ...currentTab,
          tabState: values,
        };
      }

      return currentTab;
    }));
  }

  const getTabState = () => {
    const currentTab = tabs.find((tab) => isTabActive(pathname, tab.path));

    return currentTab.tabState;
  }

  const value = {
    tabs,
    addTab,
    removeTab,
    setTabState,
    getTabState,
  };

  return (
    <TabsContext.Provider value={value}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(TabsContext);

  if (context === undefined) {
    throw new Error('useTabs must be used within a ThemeContext');
  }

  const {tabs, addTab, removeTab, setTabState, getTabState} = context;

  return {tabs, addTab, removeTab, setTabState, getTabState};
};

