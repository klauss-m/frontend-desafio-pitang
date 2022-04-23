import { atom, useRecoilState } from 'recoil';

const reloadState = atom({
  key: 'reloadState',
  default: true,
});

export function useReload() {
  const [reload, setReload] = useRecoilState(reloadState);
  return { reload, setReload };
}
