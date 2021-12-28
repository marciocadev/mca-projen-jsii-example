import { cdk } from "projen";
const project = new cdk.JsiiProject({
  author: "Marcio Cruz",
  authorAddress: "marciocadev@gmail.com",
  defaultReleaseBranch: "main",
  name: "mca-projen-jsii-example",
  projenrcTs: true,
  repositoryUrl: "https://github.com/marciocadev/mca-projen-jsii-example.git",

  // Major version number
  majorVersion: 0,
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
  // don't generate new snapshot when run jest
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