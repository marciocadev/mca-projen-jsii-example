import { cdk } from "projen";
const project = new cdk.JsiiProject({
  author: "Marcio Cruz",
  authorAddress: "marciocadev@gmail.com",
  defaultReleaseBranch: "main",
  name: "mca-projen-jsii-example",
  projenrcTs: true,
  repositoryUrl: "https://github.com/marciocadev/mca-projen-jsii-example.git",

  // Major version number
  /* Everything before 1.0.0 is considered experimental and 
     breaking changes are only minor version bumps. The moment
     ou feel comfortable you need to bump the version manually 
     to 1.0.0 and then the well-known versioning kicks in where 
     breaking changes bump the major version, features bump the 
     minor and fixes bump the patch version. 
     https://github.com/projen/projen/issues/982
  */
  majorVersion: 1,
  // release to NPM
  release: true,
  // release to PyPi
  publishToPypi: {
    distName: 'mca-projen-jsii-example',
    module: 'mca_projen_jsii_example',
  },
  // release to Maven
  publishToMaven: {
    javaPackage: 'com.marciocadev.projen.jsii.example',
    mavenArtifactId: 'mca-projen-jsii-example',
    mavenGroupId: 'com.marciocadev',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },
  // don't update snapshot when run jest
  antitamper: false,
  // generate docs
  docgen: true,
  eslint: true,
  tsconfig: {
    compilerOptions: {
      lib: ['dom', 'es2019'],
    },
  },
});

project.addDevDeps('typedoc');
project.addTask('docgen:ts', {
  exec: 'typedoc src --disableSources --out docs/',
});

project.synth();