Controlling URL structure and parameters in JavaScript is often necessary for creating dynamic web applications, manipulating the browser history, or simply updating the URL without reloading the page. This can be achieved using the `window.location` object, the `URL` interface, and the `history` API.

Here's a detailed guide on how to manipulate the URL and its parameters:

### 1. Using `window.location`

The `window.location` object contains information about the current URL and allows for navigation to a different URL.

- **Get the current URL:**

  ```javascript
  const currentUrl = window.location.href;
  console.log(currentUrl);
  ```

- **Navigate to a new URL:**

  ```javascript
  window.location.href = 'https://www.example.com';
  ```

### 2. Using the `URL` Interface

The `URL` interface provides an easier way to construct and manipulate URLs.

- **Create a new URL:**

  ```javascript
  const url = new URL('https://www.example.com/path?name=value');
  ```

- **Get URL components:**

  ```javascript
  console.log(url.href);          // Full URL
  console.log(url.origin);        // Protocol + Host
  console.log(url.pathname);      // Path
  console.log(url.search);        // Query string
  console.log(url.hash);          // Fragment identifier
  ```

- **Modify URL components:**

  ```javascript
  url.pathname = '/newpath';
  url.searchParams.set('name', 'newvalue');
  url.hash = '#newfragment';
  console.log(url.toString());    // Updated URL
  ```

- **Get and set query parameters:**

  ```javascript
  const params = url.searchParams;

  // Get a parameter
  const name = params.get('name');
  console.log(name);  // 'newvalue'

  // Set a parameter
  params.set('name', 'anotherValue');
  console.log(url.toString());  // URL with updated parameter
  ```

### 3. Using the History API

The History API allows you to manipulate the browser history and the URL without causing a page reload.

- **Push a new state:**

  ```javascript
  const state = { key: 'value' };
  const title = 'New Page Title';
  const newUrl = '/newpage';
  history.pushState(state, title, newUrl);
  ```

- **Replace the current state:**

  ```javascript
  const state = { key: 'newvalue' };
  const title = 'Updated Page Title';
  const updatedUrl = '/updatedpage';
  history.replaceState(state, title, updatedUrl);
  ```

- **Handle popstate event:**

  ```javascript
  window.onpopstate = function(event) {
    console.log('location: ' + document.location + ', state: ' + JSON.stringify(event.state));
  };
  ```

### Putting It All Together

Here's an example that demonstrates how to update the URL parameters and manipulate the browser history:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>URL Manipulation</title>
</head>
<body>
  <h1>URL Manipulation Example</h1>
  <button id="updateUrl">Update URL</button>

  <script>
    document.getElementById('updateUrl').addEventListener('click', () => {
      const url = new URL(window.location);
      url.pathname = '/newpath';
      url.searchParams.set('example', 'newvalue');
      history.pushState({ key: 'value' }, 'New Title', url);

      console.log('Updated URL:', window.location.href);
    });

    window.onpopstate = function(event) {
      console.log('Popstate event:', event);
      console.log('Current URL:', window.location.href);
    };
  </script>
</body>
</html>
```