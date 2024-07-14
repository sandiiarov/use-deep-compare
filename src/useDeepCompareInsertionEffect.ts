import React from 'react';
import { useDeepCompareMemoize } from './useDeepCompareMemoize';

/**
 * `useDeepCompareInsertionEffect` is the same as `useInsertionEffect`, but uses deep comparison on the dependencies.
 * It's used for inserting elements into the DOM before any layout effects fire.
 *
 * Warning: `useDeepCompareInsertionEffect` should not be used with dependencies that
 * are all primitive values. Use `React.useInsertionEffect` instead.
 *
 * @see {@link https://react.dev/reference/react/useInsertionEffect}
 */
export function useDeepCompareInsertionEffect(
  effect: React.EffectCallback,
  dependencies: React.DependencyList,
) {
  React.useInsertionEffect(effect, useDeepCompareMemoize(dependencies));
}
