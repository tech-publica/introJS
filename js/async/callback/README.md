# Callbacks 01: Synchronous and Asynchronous AJAX

## Learning goals

By the end of this lesson, students should be able to:

- explain that an HTTP response arrives after a request is sent;
- distinguish blocking synchronous code from non-blocking asynchronous code;
- use `XMLHttpRequest` to make an AJAX request;
- pass a callback that runs when an asynchronous operation finishes;
- predict the execution order of asynchronous code.

## What does AJAX mean?

AJAX originally meant **Asynchronous JavaScript and XML**. Modern APIs commonly
return JSON instead of XML. In this lesson, the browser requests JSON from the
Star Wars API (SWAPI) without loading a new page.

Both examples request Luke Skywalker from:

```text
https://swapi.dev/api/people/1/
```

SWAPI is public and requires no authentication. Because it is an external
service, the examples also handle network and HTTP errors.

## Examples

```text
callback/
├── 01-synchronous-xhr/
│   ├── index.html
│   └── script.js
├── 02-asynchronous-xhr/
│   ├── index.html
│   └── script.js
└── 03-dependent-callbacks/
    ├── index.html
    └── script.js
```

Start a local web server from the project root:

```sh
python3 -m http.server 8000
```

Then open these URLs:

```text
http://localhost:8000/js/async/callback/01-synchronous-xhr/
http://localhost:8000/js/async/callback/02-asynchronous-xhr/
http://localhost:8000/js/async/callback/03-dependent-callbacks/
```

Using a local server avoids browser restrictions that can apply when opening an
HTML file directly from the filesystem.

## Example 1: synchronous XHR

The third argument passed to `open` is `false`:

```js
xhr.open("GET", API_URL, false);
xhr.send();
```

`send()` blocks the browser's main thread until the response arrives. No other
JavaScript on that thread can run during the wait, and the page may not repaint.
The browser may display a deprecation warning.

This example exists only to make blocking behavior visible. Synchronous XHR on
the browser's main thread is deprecated and should not be used in applications.

## Example 2: asynchronous XHR with a callback

The third argument passed to `open` is `true` (and `true` is the default):

```js
xhr.open("GET", API_URL, true);
xhr.onload = handleLoad;
xhr.send();
```

`send()` starts the request and returns immediately. The browser remains free to
run other code. Later, when the response is ready, the browser invokes the
`handleLoad` callback.

Expected order:

```text
1. Starting request
2. Request sent; JavaScript continues
3. Response received (callback)
```

The exact delay is unknown, but the callback cannot run until the current
JavaScript work has finished.

## Example 3: dependent requests and nested callbacks

Sometimes a second request needs information returned by the first request. The
third example performs these operations in order:

```text
GET /people/1/             → Luke Skywalker and his homeworld URL
    GET Luke's homeworld   → Tatooine
```

The homeworld request cannot start before the character response arrives. With
callbacks, the second operation is placed inside the first operation's callback:

```js
getJson(characterUrl, function (error, character) {
  getJson(character.homeworld, function (error, planet) {
    // Both results are available here.
  });
});
```

This nested shape is often called the **callback pyramid**, **pyramid of doom**,
or **callback Christmas tree**. Two requests are still manageable, but every new
dependent operation adds indentation and its own error handling. Later lessons
will solve the same sequence with promises and `async`/`await`.

## Suggested demonstration

1. Open the browser developer tools and select the Console.
2. Run the synchronous example and examine the log order.
3. Notice that the clock cannot update while `send()` blocks.
4. Run the asynchronous example and examine its different log order.
5. Click the asynchronous page's counter while the request is in progress.
6. Ask students which function is the callback and who calls it.
7. Run the dependent-requests example and trace when each callback executes.

## Key takeaway

Synchronous code waits and blocks before continuing. Asynchronous code starts an
operation, continues executing, and supplies a callback for the browser to invoke
after the operation completes. Dependent asynchronous operations naturally cause
callbacks to become nested, motivating more composable tools such as promises.
