import create from 'zustand';
import budgetStore from './budgetStore';
import savingStore from './savingStore';

const useStore = create((set) => ({
  budgetStore: budgetStore(set),
  savingStore: savingStore(set),
}));

export default useStore;
