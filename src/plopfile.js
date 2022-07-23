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
    ],
  });
};
