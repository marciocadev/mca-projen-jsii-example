import { cdk } from "projen";
const project = new cdk.JsiiProject({
  author: "Marcio Cruz",
  authorAddress: "marciocadev@gmail.com",
  defaultReleaseBranch: "main",
  name: "mca-projen-jsii-example",
  projenrcTs: true,
  repositoryUrl: "https://github.com/marciocadev/mca-projen-jsii-example.git",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();