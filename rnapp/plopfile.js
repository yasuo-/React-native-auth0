module.exports = function (plop) {
    plop.setGenerator('screen', {
      description: 'Generates new Screen',
      prompts: [{
        type: 'input',
        name: 'name',
        message: 'Screen name (Casing will be modified)',
      }],
      actions: [
        {
          type: 'add',
          path: 'src/screens/{{properCase name}}/{{properCase name}}Screen.js',
          templateFile: 'generators/screen/Screen.js.hbs',
        },
        {
            type: 'add',
            path: 'src/screens/{{properCase name}}/{{properCase name}}Container.js',
            templateFile: 'generators/screen/ScreenContainer.js.hbs',
        },
      ],
    });

    plop.setGenerator('redux', {
        description: 'Generates new redux',
        prompts: [{
          type: 'input',
          name: 'name',
          message: 'redux name (Casing will be modified)',
        }],
        actions: [
          {
            type: 'add',
            path: 'src/redux/{{camelCase name}}/index.js',
            templateFile: 'generators/redux/redux.js.hbs',
          },
          {
            type: 'modify',
            path: 'src/redux/redux.js',
            pattern: /\/\/ ## Generator redux Imports/gi,
            template: '// ## Generator redux Imports\nimport {{properCase name}}redux from \'./{{camelCase name}}\';',
          },
          {
            type: 'modify',
            path: 'src/redux/redux.js',
            pattern: /\/\/ ## Generator redux/gi,
            template: '// ## Generator redux\n\n  {{camelCase name}}: {{properCase name}}redux,',
          },
        ],
      });
  };
