import React from 'react';
import { useDeepCompareMemoize } from './useDeepCompareMemoize';

/**
 * `useDeepCompareCallback` will return a memoized version of the callback that
 * only changes if one of the `dependencies` has changed.
 *
 * Warning: `useDeepCompareCallback` should not be used with dependencies that
 * are all primitive values. Use `React.useCallback` instead.
 *
 * @see {@link https://react.dev/reference/react/useCallback}
 */
export function useDeepCompareCallback<T extends Function>(
  callback: T,
  dependencies: React.DependencyList,
) {
  return React.useCallback(callback, useDeepCompareMemoize(dependencies));
}
