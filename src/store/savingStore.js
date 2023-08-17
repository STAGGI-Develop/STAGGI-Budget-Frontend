const savingStore = (set) => ({
    savings: [],
    setSavings: (e) => set({ Savings: e }),
  });
  
  export default savingStore;
