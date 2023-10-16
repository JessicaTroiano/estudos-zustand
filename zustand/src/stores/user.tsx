import { create } from 'zustand'


export type UserType = {
  name: string;
  email: string;
}

type State = {
  users: UserType[];
  addUser: (users: UserType) => void;
  formSubmitted: boolean;
  setFormSubmitted: (submitted: boolean) => void;
}

const useUserStore = create<State>((set) => ({
  users: [],
  addUser: (user: UserType) => {
    set((state) => ({users: [...state.users, user]}));
  },
  formSubmitted: false,
  setFormSubmitted: (submitted) => set({ formSubmitted: submitted }),
}))

export default useUserStore;