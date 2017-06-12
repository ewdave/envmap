# ENVMAP

Map environment variables easily

You don't not have to do this -

```js
GOOGLE_APP_ID: process.env.GOOGLE_APP_ID,
GOOGLE_APP_SECRET: process.env.GOOGLE_APP_SECRET,
GOOGLE_TOKEN: process.env.GOOGLE_TOKEN,
GOOGLE_CB_URL: process.env.GOOGLE_CB_URL
```

Simply install `envmap` from npm

```bash
$ npm install --save envmap
```

```js
import env from 'envmap';

const GOOGLE = env.prefix('google_');

/*
GOOGLE {
  app_id: '...',
  app_secret: '...',
  token: '...',
  cb_url: '...'
}
*/

```

`env.prefix('')` takes in a parameter -- namespace prefix to use for environment variable lookups; on finding matching
environment variables, it'll return an object with the env variables lower-cased and stripped.