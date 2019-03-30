import deepEqual from 'dequal';
import React from 'react';

export function isPrimitive(val: any) {
  return val == null || /^[sbn]/.test(typeof val);
}

export function checkDeps(deps: React.DependencyList, name: string) {
  const reactHookName = `React.${name.replace(/DeepCompare/, '')}`;

  if (!deps || deps.length === 0) {
    throw new Error(
      `${name} should not be used with no dependencies. Use ${reactHookName} instead.`
    );
  }
  if (deps.every(isPrimitive)) {
    throw new Error(
      `${name} should not be used with dependencies that are all primitive values. Use ${reactHookName} instead.`
    );
  }
}

export function useDeepCompareMemoize(value: React.DependencyList) {
  const ref = React.useRef<React.DependencyList>([]);

  if (!deepEqual(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}
