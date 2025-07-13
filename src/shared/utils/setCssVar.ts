import { CssVarName } from '@/shared/types';

export const setCssVar = (
  name: CssVarName,
  value: string,
  root: HTMLElement = document.body,
): void => {
  root.style.setProperty(name, value);
};
