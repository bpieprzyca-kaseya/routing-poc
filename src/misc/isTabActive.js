export const isTabActive = (currentPath, tabPath) => {
    const activePathBeginnig = currentPath.split('/')[1];
    return tabPath.split('/')[1] === activePathBeginnig;
}