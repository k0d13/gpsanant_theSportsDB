# theSportsDB
Library for The Sports DB API

## Installation
```sh
npm install @apteryxxyz/thesportsdb
```

## Example Usage
```js
import theSportsDB from '@apteryxxyz/thesportsdb';

theSportsDB.setApiKey(808); // defaults to 123, set for Patreon

// works with spaces, underscores, or "%20"s
const goat = await theSportsDB.getPlayerByName('michael jordan');
const kobe = await theSportsDB.getPlayerByName('kobe_bryant');

// replace unused parameters with null
const events = await theSportsDB.getEventsOnDay('2014-10-10', null, 'Australian_A-League');

// ids can be either numbers or strings
const nextEvents = await theSportsDB.getNext5EventsByTeamId(133602);
```
