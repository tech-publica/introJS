# Lesson 9: Posting JSON with Fetch

## Learning goals

- configure a Fetch request with `method`, `headers`, and `body`;
- serialize a JavaScript value with `JSON.stringify`;
- distinguish request headers from response headers;
- check the HTTP status before reading a successful response;
- understand the difference between a simulated and persistent write.

## The practice API

SWAPI is useful for reading Star Wars data, but it does not provide a public
endpoint where students can create resources. This lesson sends a `POST` request
to JSONPlaceholder instead:

```text
https://jsonplaceholder.typicode.com/posts
```

JSONPlaceholder simulates creating a post and returns a representation of it.
The post is not permanently stored. Reloading or requesting it later will not
retrieve a newly saved database record.

## Fetch request options

A GET request can use only a URL:

```js
fetch(url);
```

To send data, pass an options object as the second argument:

```js
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(post),
});
```

- `method` describes the HTTP action. Fetch uses `GET` by default.
- `headers` contains metadata about the request.
- `body` contains the data sent to the server.

## Why JSON.stringify is necessary

The `post` variable is a JavaScript object in memory:

```js
const post = {
  title: "Learning Fetch",
  body: "Promises make asynchronous operations composable.",
  userId: 1,
};
```

An HTTP request cannot directly transmit a JavaScript object. `JSON.stringify`
serializes it into JSON text:

```js
const requestBody = JSON.stringify(post);
```

The request body is now a string. The `Content-Type: application/json` header
tells the server how to interpret that string.

## Request headers and response headers

These are two different sets of metadata traveling in opposite directions:

```text
Browser  -- request headers -->  Server
Browser  <-- response headers --  Server
```

We choose the request's `Content-Type` in the Fetch options. The server chooses
the response headers, which we inspect through the `Response` object:

```js
response.headers.get("Content-Type");
```

The same header name can appear in both directions. The request header describes
the body we send; the response header describes the body the server sends back.

## HTTP creation status

A successful creation commonly returns `201 Created`, rather than the `200 OK`
students may have seen with GET requests. Both are successful because they are
in the `200`–`299` range, so `response.ok` is `true`.

Fetch still normally fulfills its first promise when the server returns an HTTP
error such as `400` or `500`. Check the status before parsing the success body:

```js
if (!response.ok) {
  throw new Error(`HTTP error: ${response.status}`);
}
```

## Exercise

1. Submit the form and compare the JSON request body with the parsed response.
2. Explain where the response's new `id` came from.
3. Remove `JSON.stringify` and observe what is sent in the request body.
4. Remove the `Content-Type` request header and discuss why the body becomes
   ambiguous to a server.
5. Change the method to `GET` while retaining the body and observe how Fetch
   handles that invalid combination.

## Key takeaway

Fetch's second argument describes the outgoing HTTP request. Serialize JSON
before placing it in the body and label it with a request header. The returned
`Response` separately describes what came back, including response headers and
HTTP status.
