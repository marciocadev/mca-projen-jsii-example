import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Marcio Cruz',
  authorAddress: 'marciocadev@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'mca-projen-jsii-example',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/marciocadev/mca-projen-jsii-example.git',

  // Major version number
  /*
    Everything before 1.0.0 is considered experimental and
    breaking changes are only minor version bumps. The moment
    ou feel comfortable you need to bump the version manually
    to 1.0.0 and then the well-known versioning kicks in where
    breaking changes bump the major version, features bump the
    minor and fixes bump the patch version.

    https://github.com/projen/projen/issues/982

    The commit contains the following structural elements, to
    communicate intent to the consumers of your library:

    1. fix: a commit of the type fix patches a bug in your
    codebase (this correlates with PATCH in semantic versioning).
    2. feat: a commit of the type feat introduces a new feature to
    the codebase (this correlates with MINOR in semantic versioning).
    3. BREAKING CHANGE: a commit that has the text BREAKING CHANGE:
    at the beginning of its optional body or footer section introduces
    a breaking API change (correlating with MAJOR in semantic versioning).
    A BREAKING CHANGE can be part of commits of any type.
    4. Others: commit types other than fix: and feat: are allowed, for
    example @commitlint/config-conventional (based on the Angular
    convention) recommends chore:, docs:, style:, refactor:, perf:,
    test:, and others.
  */
  majorVersion: 1,
  release: true,

  codeCov: true,

  publishToPypi: {
    distName: 'mca-projen-jsii-example',
    module: 'mca_projen_jsii_example',
  },
  publishToMaven: {
    javaPackage: 'com.marciocadev.projen.jsii.example',
    mavenArtifactId: 'mca-projen-jsii-example',
    mavenGroupId: 'com.marciocadev',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },
  publishToGo: {
    moduleName: 'github.com/marciocadev/mca-projen-jsii-example-go',
  },
  publishToNuget: {
    dotNetNamespace: 'Marciocadev.Examples',
    packageId: 'Projen.Jsii',
  },
  publishTasks: true,
  // generate docs
  docgen: true,
  eslint: true,
  tsconfig: {
    compilerOptions: {
      lib: ['dom', 'es2019'],
    },
  },
});

project.addTask('coverage', {});

project.addDevDeps('typedoc');
project.addTask('docgen:html', {
  exec: 'typedoc src --disableSources --out docs/',
});

project.synth();