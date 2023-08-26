module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/shared/{{dashCase name}}/index.ts",
        templateFile: "templates/index.ts.hbs",
      },
      {
        type: "add",
        path: "../src/shared/{{dashCase name}}/{{dashCase name}}.tsx",
        templateFile: "templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/shared/{{dashCase name}}/{{dashCase name}}.stories.tsx",
        templateFile: "templates/stories.tsx.hbs",
      },
    ],
  })
}
