var testsContext = require.context(".", true, /\.ts$/);
testsContext.keys().forEach(testsContext);