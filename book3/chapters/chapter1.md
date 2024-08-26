# Chapter 1: continers! <a id="chapter1"></a>

This is the first chapter of my book...
To have a table of contents as a sidebar on the left, and make each chapter link navigate to the respective chapter content, you'll need to use some JavaScript and CSS along with your HTML template. Here's how you can modify the provided template to achieve this:

1. **Update the HTML template (`template.html`)**:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>$title$</title>
  <style>
    /* Add your custom CSS styles here */
    #sidebar {
      width: 200px;
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      background-color: #f1f1f1;
      overflow-y: auto;
    }

    #content {
      margin-left: 210px;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div id="sidebar">
    <h2>Table of Contents</h2>
    $toc$
  </div>
  <div id="content">
    <header>
      <h1>$title$</h1>
      <p>By $author$</p>
    </header>
    <main>
      $body$
    </main>
    <footer>
      <p>$rights$</p>
    </footer>
  </div>

  <script>
    // Add click event listeners to TOC links
    document.querySelectorAll('#sidebar a').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
      });
    });
  </script>
</body>
</html>
```

In this updated template:
- The `#sidebar` div will contain the table of contents as a fixed sidebar on the left.
- The `#content` div will contain the main content area, with a left margin to accommodate the sidebar.
- The JavaScript code at the bottom adds click event listeners to the links in the table of contents. When a link is clicked, it prevents the default link behavior and scrolls the page to the corresponding chapter content using the `scrollIntoView` method.

2. **Update the Pandoc command**:

```
pandoc --toc --toc-depth=2 --template=template.html --metadata-file=metadata.yaml --output=book.html --standalone chapters/*.md
```

The `--standalone` option is added to generate a self-contained HTML file with all the necessary code (including the JavaScript) in the output.

3. **Add chapter anchors in your Markdown files**:

In each chapter Markdown file, add an HTML anchor at the beginning of the chapter content, like this:

```markdown
# Chapter 1: Introduction <a id="chapter1"></a>

This is the first chapter of my book...
```

The `<a id="chapter1"></a>` anchor will serve as the target for the table of contents links to scroll to.

After running the updated Pandoc command, the generated `book.html` file will have a sidebar with the table of contents on the left. Clicking on a chapter link will smoothly scroll the page to the corresponding chapter content.

Note that you may need to adjust the CSS styles (e.g., sidebar width, content area margin) according to your preferences. Additionally, you can enhance the styling and functionality further by adding more CSS and JavaScript as needed.
