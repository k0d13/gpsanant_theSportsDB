# theSportsDB
Library for The Sports DB API

## Installation
```sh
npm install @apteryxxyz/thesportsdb
```

## Example Usage
```js
import SportsDbApi from '@apteryxxyz/thesportsdb';

// apiKey defaults to 123; set to your Patreon key for full access
// optionally pass a custom fetch implementation
const db = new SportsDbApi({ apiKey: 808 });

// works with spaces, underscores, or "%20"s
const goat = await db.getPlayerByName('michael jordan');
const kobe = await db.getPlayerByName('kobe_bryant');

// replace unused parameters with null
const events = await db.getEventsOnDay('2014-10-10', null, 'Australian_A-League');

// ids can be either numbers or strings
const nextEvents = await db.getNext5EventsByTeamId(133602);

// custom fetch (e.g. for Node.js polyfills or testing)
import nodeFetch from 'node-fetch';
const db2 = new SportsDbApi({ apiKey: 808, fetch: nodeFetch });
```
