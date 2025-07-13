import { useEffect, useMemo } from 'react';

import { CssVarName } from '../types';

import { setCssVar } from '@/shared/utils';

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
      set: value => setCssVar(name, value, root),
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
