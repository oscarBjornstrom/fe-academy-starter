module.exports = {
  name: 'expenses',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/expenses',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
