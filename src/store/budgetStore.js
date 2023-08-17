const budgetStore = (set) => ({
    budgets: [],
    setBudgets: (e) => set({ budgets: e }),

  });
  
  export default budgetStore;
  