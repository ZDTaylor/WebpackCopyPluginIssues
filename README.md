# Webpack Copy Plugin Issue

When copying files using the copy-webpack-plugin, they are not minimized after copying as would be expected.

## Expected Behavior

Files copied via copy-webpack-plugin are minimized by the webpack minimizer in general, or at least terser-webpack-plugin in this case.

## Actual Behavior

Files copied via copy-webpack-plugin are not minimzed at all.

## Reproduction

`src/copied.js` and `src/loaded.js` are identical. One will be loaded as an entry point in webpack, the other will be copied via copy-webpack-plugin.

Run `npm run build` and compare the outputs in `dist/copied.js` and `dist/loaded.js`. dist/loaded.js has webpack boilerplate, but is optimized via terser-webpack-plugin. dist/copied.js is exactly the same as the source file and has not been optimized.

### Note

Ideally this would work regardless of the webpack minimizer specified, but I don't know of the technical limitations that would prevent that.