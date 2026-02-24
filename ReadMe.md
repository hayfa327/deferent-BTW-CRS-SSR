# Client-Side Rendering vs Server-Side Rendering

This project demonstrates the difference between Client-Side Rendering (CSR) and Server-Side Rendering (SSR) using plain HTML, CSS, and JavaScript (no frameworks).

## Project Structure

- `index.html` → Simulates Server-Side Rendering
- `csr.html` → Simulates Client-Side Rendering
- `data.js` → Contains the data used in the CSR version
- `style.css` → Shared styling for both versions

Both pages display the same content and layout.  
The only difference is **how and when the content is rendered**.

---

## Server-Side Rendering (SSR)

In the SSR version:

- All content is already present in the HTML file.
- The browser displays the content immediately.
- JavaScript is not required for the main content to appear.
- Search engines can read all content directly from the HTML.

### Characteristics:
- Faster time to first visible content.
- Better SEO visibility.
- More reliable if JavaScript fails.

---

## Client-Side Rendering (CSR)

In the CSR version:

- The HTML file initially contains only a root container.
- All sections and content are generated using JavaScript.
- The page renders after JavaScript execution.
- Content depends on JavaScript to be visible.

### Characteristics:
- Slower initial render compared to SSR.
- Requires JavaScript to function.
- More dynamic and interactive.

---

## Key Differences

| Feature | SSR | CSR |
|----------|------|------|
| Content in initial HTML | Yes | No |
| Depends on JavaScript | No | Yes |
| SEO Friendly | More | Less |
| First Content Display | Immediate | After JS loads |

---

## Conclusion

SSR renders content on the server before sending it to the browser, while CSR builds the page in the browser using JavaScript.  

This project highlights the performance, SEO, and user experience differences between both approaches.