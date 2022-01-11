module.exports = {
  presets: ['@babel/env', '@babel/react', '@babel/preset-typescript'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        '@patternfly/react-icons': {
          transform: (importName) =>
              `@patternfly/react-icons/dist/js/icons/${importName
                  .split(/(?=[A-Z])/)
                  .join('-')
                  .toLowerCase()}`,
          preventFullImport: true,
        },
      },
      'react-icons',
    ],
  ],
};
