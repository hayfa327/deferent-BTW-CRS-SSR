 # Game News Website – CSR vs SSR

This project is a simple **Gaming News Website** built to demonstrate the difference between:

- Server-Side Rendering (SSR)
- Client-Side Rendering (CSR)

Both versions display the same layout, content, and styling.  
The only difference is how the content is rendered.

---

## Project Idea

The website simulates a gaming news platform with:

- Latest News
- Trending Games
- Tips & Guides
- Hot Topics (sidebar)

The design and UI are identical in both versions.

---

## Technologies Used

- HTML5
- CSS3 (Flexbox layout)
- Vanilla JavaScript (ES Modules)
- No frameworks

---

## Server-Side Rendering (SSR)

File: `index.html`

In this version:

- All content is written directly in the HTML.
- The browser displays everything immediately.
- The page works even if JavaScript is disabled.

### Performance

- Fast Time to First Content
- No delay before content appears
- Better SEO (content exists in initial HTML)

---

## Client-Side Rendering (CSR)

File: `csr.html`

In this version:

- The HTML contains only a root container.
- All sections and cards are generated using JavaScript.
- Content appears after JavaScript execution.

### Performance

- Slight delay before content appears
- Depends entirely on JavaScript
- Less SEO-friendly (content not in initial HTML)

---

## Rendering Comparison

| Feature | SSR | CSR |
|----------|------|------|
| Content in HTML | Yes | No |
| JS required | No | Yes |
| First Visible Content | Immediate | After JS runs |
| SEO | Better | Limited |

---

## Conclusion

SSR renders content before sending it to the browser, resulting in faster initial display and better SEO.

CSR builds the page dynamically in the browser using JavaScript, allowing more flexibility but requiring JS execution before content appears.