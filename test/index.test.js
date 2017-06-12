import env from '../src/index';

test('Given prefix, should return all env variables lower-cased and stripped', () => {
  expect(env.prefix('nvm_')).toMatchObject({'rc_version': '', 'cd_flags': '' })
})