# Use Deep Compare

<!-- prettier-ignore-start -->
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]
<!-- prettier-ignore-end -->

**Use Deep Compare** - React hooks, except using deep comparison on the inputs, not reference equality.
Read about [Hooks](https://reactjs.org/docs/hooks-intro.html) feature.

## Installation

### With npm

```sh
npm i use-deep-compare
```

### Or with yarn

```sh
yarn add use-deep-compare
```

### Or with pnpm

```sh
pnpm add use-deep-compare
```

### Or with bun

```sh
bun add use-deep-compare
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

### useDeepCompareLayoutEffect

```js
import React from "react";
import { useDeepCompareLayoutEffect } from "use-deep-compare";

function App({ object, array }) {
  useDeepCompareLayoutEffect(() => {
    // perform layout effects
  }, [object, array]);

  return <div>{/* render component */}</div>;
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

### useDeepCompareImperativeHandle

```js
import React from "react";
import { useDeepCompareImperativeHandle } from "use-deep-compare";

function App({ object, array }) {
  const ref = React.useRef();
  useDeepCompareImperativeHandle(ref, () => ({
    // create imperative methods
  }), [object, array]);

  return <div ref={ref}>{/* render component */}</div>;
}
```

### react-hooks/exhaustive-deps eslint warnings

To receive eslint warnings about missing array dependencies, just like for standard `useEffect`, `useCallback`, `useMemo`, ... hooks - extend you eslint config as follows:

```json
{
  "rules": {
    // ...
    "react-hooks/exhaustive-deps": ["warn", {
      "additionalHooks": "(useDeepCompareEffect|useDeepCompareCallback|useDeepCompareMemo|useDeepCompareImperativeHandle|useDeepCompareLayoutEffect)"
    }]
  }
}
```

## Credits

- Inspired by [use-deep-compare-effect](https://github.com/kentcdodds/use-deep-compare-effect).

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[version-badge]: https://img.shields.io/npm/v/use-deep-compare.svg
[package]: https://www.npmjs.com/package/use-deep-compare
[downloads-badge]: https://img.shields.io/npm/dt/use-deep-compare.svg
[npmtrends]: http://www.npmtrends.com/use-deep-compare
[license-badge]: https://img.shields.io/npm/l/use-deep-compare.svg
[license]: https://github.com/sandiiarov/use-deep-compare/blob/master/LICENSE
<!-- prettier-ignore-end -->
