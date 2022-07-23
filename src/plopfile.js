module.exports = (plop) => {
  plop.setGenerator('block', {
    description: 'New CMS block',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter the block name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'blocks/{{name}}/{{name}}.tsx',
        templateFile: 'templates/block/component.hbs',
      },
      {
        type: 'add',
        path: 'blocks/{{name}}/builder.ts',
        templateFile: 'templates/block/builder.hbs',
      },
      {
        type: 'add',
        path: 'blocks/{{name}}/webpack.mix.js',
        templateFile: 'templates/block/webpack.hbs',
      },
      {
        type: 'add',
        path: 'blocks/{{name}}/tsconfig.json',
        templateFile: 'templates/block/tsconfig.hbs',
      },
      {
        type: 'add',
        path: 'blocks/{{name}}/package.json',
        templateFile: 'templates/block/package.hbs',
      },
    ],
  });
};
