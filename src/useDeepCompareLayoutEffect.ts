import React from 'react';
import { useDeepCompareMemoize } from './useDeepCompareMemoize';

/**
 * The signature is identical to `useDeepCompareEffect`, but it fires synchronously after all DOM mutations.
 * Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside
 * `useDeepCompareLayoutEffect` will be flushed synchronously, before the browser has a chance to paint.
 *
 * Prefer the standard `useDeepCompareEffect` when possible to avoid blocking visual updates.
 *
 * If you’re migrating code from a class component, `useDeepCompareLayoutEffect` fires in the same phase as
 * `componentDidMount` and `componentDidUpdate`.
 *
 * Warning: `useDeepCompareLayoutEffect` should not be used with dependencies that
 * are all primitive values. Use `React.useLayoutEffect` instead.
 *
 * @see {@link https://react.dev/reference/react/useLayoutEffect}
 */
export function useDeepCompareLayoutEffect(
  effect: React.EffectCallback,
  dependencies: React.DependencyList,
) {
  React.useLayoutEffect(effect, useDeepCompareMemoize(dependencies));
}
