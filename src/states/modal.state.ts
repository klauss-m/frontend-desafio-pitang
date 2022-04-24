import { atom, useRecoilState } from 'recoil';

const modalState = atom({
  key: 'modalState',
  default: false,
});

export function useModal() {
  const [opened, setOpened] = useRecoilState(modalState);
  return {
    opened,
    setOpened,
  };
}
