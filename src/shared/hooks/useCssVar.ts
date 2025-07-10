import { useEffect, useMemo } from 'react';

import { CssVarName } from '../types';

type UseCssVarParams = {
  name: CssVarName;
  root?: HTMLElement;
};

type CssVarControls = {
  set: (value: string) => void;
  get: () => string;
  remove: () => void;
};

const defaultRoot = typeof document !== 'undefined' ? document.body : undefined;

export const useCssVar = ({
  name,
  root = defaultRoot!,
}: UseCssVarParams): CssVarControls => {
  const controls: CssVarControls = useMemo(
    () => ({
      set: value => root.style.setProperty(name, value),
      get: () => root.style.getPropertyValue(name),
      remove: () => root.style.removeProperty(name),
    }),
    [name, root],
  );

  useEffect(() => {
    return () => controls.remove();
  }, [controls]);

  return controls;
};
