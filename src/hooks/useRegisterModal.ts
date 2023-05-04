
import { create } from 'zustand';

interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => { console.log('opa'); set({ isOpen: true }) },
  onClose: () => set({ isOpen: false })
}));


export default useRegisterModal;