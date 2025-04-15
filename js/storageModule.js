
export const storageModule = (() => {
  const maxHistory = 5;
  const storageKey = 'growAndGlowHistory';

  function getHistory() {
    const history = localStorage.getItem(storageKey);
    return history ? JSON.parse(history) : [];
  }

  function saveToHistory(entry) {
    const history = getHistory();
    history.unshift(entry);
    if (history.length > maxHistory) {
      history.pop();
    }
    localStorage.setItem(storageKey, JSON.stringify(history));
  }

  return {
    getHistory,
    saveToHistory
  };
})();

