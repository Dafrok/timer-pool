# Timer Pool

Timer group management.

## Install

```
$ npm i timer-pool
```

## Usage

```js
import {setTimer, clearTimer, setLoopTimer, clearLoopTimer} from 'timer-pool';

// set timeout in timeout group "foo"
setTimer('foo', () => {
    // do something;
    
});

// set another timeout in timeout group "foo"
setTimer('foo', () => {
    // do something else;
});

// set interval in interval group "foo"
setLoopTimer('foo', () => {
    // do something;
});

// set timeout in timeout group "bar" and get timeout identifier
const timerId = setTimer('bar', () => {
    // do something;
});

// clear timeout by group name
clearTimer('foo');

// clear timeout by identifier
clearTimer(timerId);

// clear interval by group name
clearLoopTimer('foo');
```
