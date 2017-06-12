# ENVMAP

## Map environment variables easily

You don't not have to do this to map your specific environment variables -

```js
GOOGLE_APP_ID: process.env.GOOGLE_APP_ID,
GOOGLE_APP_SECRET: process.env.GOOGLE_APP_SECRET,
GOOGLE_TOKEN: process.env.GOOGLE_TOKEN,
GOOGLE_CB_URL: process.env.GOOGLE_CB_URL
```

Replace that whole flow by using `envmap`

### Install from npm

```bash
$ npm install --save envmap
```

#### Usage

------------------

```js
import env from 'envmap';

//`env.prefix('')` takes in a parameter -- namespace prefix to use for environment variable lookups
const GOOGLE = env.prefix('google_');

// on finding matching environment variables, it'll return an object with the env variables lower-cased and stripped.
/*
GOOGLE {
  app_id: '...',
  app_secret: '...',
  token: '...',
  cb_url: '...'
}
*/

```
