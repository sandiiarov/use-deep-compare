import React from 'react';
import { useDeepCompareMemoize } from './useDeepCompareMemoize';

/**
 * `useDeepCompareImperativeHandle` customizes the instance value that is exposed to parent components when using `ref`.
 * As always, imperative code using refs should be avoided in most cases.
 *
 * `useDeepCompareImperativeHandle` should be used with `React.forwardRef`.
 *
 * It's similar to `useImperativeHandle`, but uses deep comparison on the dependencies.
 *
 * Warning: `useDeepCompareImperativeHandle` should not be used with dependencies that
 * are all primitive values. Use `React.useImperativeHandle` instead.
 *
 * @see {@link https://react.dev/reference/react/useImperativeHandle}
 */
export function useDeepCompareImperativeHandle<T, R extends T>(
  ref: React.Ref<T>,
  init: () => R,
  dependencies: React.DependencyList,
) {
  React.useImperativeHandle(ref, init, useDeepCompareMemoize(dependencies));
}
