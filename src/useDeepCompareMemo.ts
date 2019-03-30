import React from 'react';
import { checkDeps, useDeepCompareMemoize } from './useDeepCompareMemoize';

/**
 * `useDeepCompareMemo` will only recompute the memoized value when one of the
 * `deps` has changed.
 *
 * Usage note: only use this if `deps` are objects or arrays that contain
 * objects. Otherwise you should just use React.useMemo.
 *
 */
function useDeepCompareMemo<T>(
  factory: () => T,
  dependencies: React.DependencyList
) {
  if (process.env.NODE_ENV !== 'production') {
    checkDeps(dependencies, 'useDeepCompareMemo');
  }

  return React.useMemo(factory, useDeepCompareMemoize(dependencies));
}

export default useDeepCompareMemo;
