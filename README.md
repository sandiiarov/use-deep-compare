# Use Deep Compare

![npm](https://img.shields.io/npm/dt/use-deep-compare.svg)
![npm](https://img.shields.io/npm/v/use-deep-compare.svg)
![NpmLicense](https://img.shields.io/npm/l/use-deep-compare.svg)

**Use Deep Compare** - React hooks, except using deep comparison on the inputs, not reference equality.
Read about [Hooks](https://reactjs.org/docs/hooks-intro.html) feature.

## Installation

> Note: React 16.8+ is required for Hooks.

### With npm

```sh
npm i use-deep-compare
```

### Or with yarn

```sh
yarn add use-deep-compare
```

## Usage

### useDeepCompareEffect

```js
import React from "react";
import { useDeepCompareEffect } from "use-deep-compare";

function App({ object, array }) {
  useDeepCompareEffect(() => {
    // do something significant here
    return () => {
      // return to clean up that significant thing
    };
  }, [object, array]);

  return <div>{/* render significant thing */}</div>;
}
```

### useDeepCompareCallback

```js
import React from "react";
import { useDeepCompareCallback } from "use-deep-compare";

function App({ object, array }) {
  const callback = useDeepCompareCallback(() => {
    // do something significant here
  }, [object, array]);

  return <div>{/* render significant thing */}</div>;
}
```

### useDeepCompareMemo

```js
import React from "react";
import { useDeepCompareMemo } from "use-deep-compare";

function App({ object, array }) {
  const memoized = useDeepCompareMemo(() => {
    // do something significant here
  }, [object, array]);

  return <div>{/* render significant thing */}</div>;
}
```

### react-hooks/exhaustive-deps eslint warnings

To receive eslint warnings about missing array dependencies, just like for standard `useEffect`, `useCallback`, `useMemo` hooks - extend you eslint config as follows:

```json
{
  "rules": {
    // ...
    "react-hooks/exhaustive-deps": ["warn", {
      "additionalHooks": "(useDeepCompareEffect|useDeepCompareCallback|useDeepCompareMemo)"
    }]
  }
}
```



## Credits

- Inspired by [use-deep-compare-effect](https://github.com/kentcdodds/use-deep-compare-effect).
