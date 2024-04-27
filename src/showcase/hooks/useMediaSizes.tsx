import { useEffect, useMemo, useState } from 'react';

export interface MediaBreakpoints {
  [name: string]: number;
}

export interface MediaSizes {
  [name: string]: boolean;
}

const defaultBreakpoints: MediaBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const breakpointsToSizes = (breakpoints: MediaBreakpoints) =>
  Object.keys(breakpoints).reduce(
    (acc, key) => ({
      ...acc,
      [key]: window.innerWidth > breakpoints[key],
    }),
    {},
  );

const debounce = <F extends (...args: any[]) => any>(func: F, wait: number) => {
  let timeout: string | number | NodeJS.Timeout | undefined;
  return (...args: any) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(args), wait);
  };
};

export function useMediaSizes(
  customBreakpoints?: MediaBreakpoints,
): MediaSizes {
  const breakpoints = useMemo(
    () => ({
      ...defaultBreakpoints,
      ...customBreakpoints,
    }),
    [customBreakpoints],
  );

  const [sizes, setSizes] = useState<MediaSizes>(
    window && breakpointsToSizes(breakpoints),
  );

  useEffect(() => {
    if (!window) {
      return;
    }

    const handleResize = () => setSizes(breakpointsToSizes(breakpoints));
    const debouncedHandleResize = debounce(handleResize, 100);
    window.addEventListener('resize', debouncedHandleResize);
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, [breakpoints]);

  return sizes;
}
