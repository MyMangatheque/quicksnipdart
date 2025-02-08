# Contributing to QuickSnip

Hey there! 👋 First off, thanks for taking the time to contribute! ❤️

You can contribute in two main ways:

- **Improving the code** (like fixing bugs or adding cool new features)
- **Adding new code snippets** (or improving the existing ones!)

---

## Improving the code

### How to report bugs

If you spot a bug in the codebase or issues with the documentation, please open up a [GitHub issue](https://github.com/mymangatheque/quicksnipdart/issues) detailing the problem before creating a PR. Once confirmed with maintainers, you can then create a PR.

### How to propose new features

If you are interested in proposing new features, please open up a new [GitHub discussion](https://github.com/mymangatheque/quicksnipdart/discussions) with details for the proposed feature.

Please do not create a PR for a new feature without first discussing it with the maintainers. If you create a PR for a new feature without discussing it first, then your PR will be closed.

---

## Snippets Components Guidelines

### Snippet/Component Tags

- Tags must describe the snippet/component with simple word.

Here's an example:

```md
---
title: Convert Number to Currency
description: Converts a number to a currency format with a specific locale.
author: axorax
tags: number,currency
---
```

**Do not use generic keywords or the language itself as a tag `utility` or `flutter`!**

### Snippet/Component Format

**All** snippets/components should follow the following structure:

- A `code` segment, containing a function with the actual snippet/component functionnality
- An `example` segement, containing one or more examples of use

Example in dart:

```dart
Function example(x) {
    return x * 2;
}

// Usage:
example(5); // Returns: 10
```

If your function doesn't return anything just show how to use it. If the result of your function is too complicated to be expressed in a single comment, your snippet is probably too complex to begin with.

### Snippet or Component boundaries

To ensure your snippet/component isn’t refused, consider these questions:

- **Does the standard library of my framework provide an easy way of doing this ?**
- **Does that snippet/component have a real, and practical use case ?**
- **Could it be split into separate parts to be better understood ?**

If any answer is yes, then your snippet/component will most likely get rejected.

---

## Adding Snippets or Components

### Adding a New Snippet or Component

1. **Ensure your snippet match [guidelines](#snippets-components-guidelines)**

2. **Navigate to the relevant folder:**
  
    - Go to the `/snippets` folder in the root directory.
    - Locate the folder for the framework of your snippet, such as `dart-native` or `flutter`.

3. **Choose the correct category:**

   - Within the language folder, find the relevant category folder for your snippet.
   - If no suitable category exists, refer to [Adding a New Category](#adding-a-new-category).

4. **Create a markdown file:**

   - Create a new file with a `.md` extension.
   - Name the file appropriately, keeping it descriptive and concise.

5. **Add your snippet/component:**

    - Use the following format to structure your snippet/compoenent:

````md
---
title: Name of the snippet
description: A short explanation of what the snippet does
tags: tag1, tag2, tag3
author: your-github-username
---

```lang
// Your code here
```
````

Here’s an example for Dart:

````md
---
title: Format Date
description: Formats a date from a String to a DateTime.
author: creeperfarm
tags: date,format
---

```dart
final DateTime date = DateTime.parse('2024-12-10 07:00:00.000Z');

// Usage:
print(date.year); // Output: '2024'
```
````

6. **Use syntax highlighting:**

   - Enclose your code with triple backticks (```).
   - Specify the language after the first set of backticks for syntax highlighting.

7. **Test your snippet/component:**
   - Ensure your code runs as expected. \
        To test that your snippets/components are formatted correctly use the `snippets:check` script:

        ```bash
        npm run snippets:check
        ```

        It will return nothing if they are well formatted, otherwise it will tell you what the error is.

        ---
        To preview the snippets/component, you need to consolidate them, use the `snippets:consolidate` script:

        ```bash
        npm run snippets:consolidate
        ```

        It will update the snippets in the `/public` folder, making them available to the frontend.

Expected file structure:

```md
/snippets
  |- framework
    |- category-name
      |- your-snippet-here.md
```

> Please do **NOT** add or edit anything in `/public` folder. It will be used for consolidating snippets.

### Editing a Existing Snippet

If you’d like to refine or improve an existing snippet:

1. **Add a `contributors` field:**

   - Include your GitHub username under the `contributors` field in the metadata section.

````md
---
title: Name of the snippet
description: A short explanation of what the snippet does
tags: tag1, tag2, tag3
author: original-author
contributors: your-github-username
---

```
Updated code here
```
````

2. **Credit all contributors:**

   - If contributors already exist, add your username separated by a comma

```md
contributors: contributor1, contributor2, your-github-username
```

3. **Document changes:**

   - Clearly indicate what you updated and why in your pull request description.

> We want to make sure that original author and contributor(s) are credited for their work.

### Adding a New Category

If your snippet/component doesn’t fit into any existing category, you can create a new one! Just make sure it’s unique and doesn’t overlap with others (e.g., don’t create separate categories for “Date” and “Time” when “Date and Time” works).

1. **Create a new category folder:**

   - In the relevant language directory, add a new folder.
   - Use a lowercase name with hyphens for separation (e.g., `file-handling`).

2. **Add snippets or components:**

    - Follow the [Adding a New Snippet/Component](#adding-a-new-snippet-or-component) instructions.

Example structure:

```md
/snippets
|- python
|- file-handling
|- list-manipulation
|- ....
```

### Adding a New Framework

If you want to introduce a new framework for dart, here's how to do it:

1. **Create a framework folder:**

    - Add a new folder under the `snippets` directory.
    - Name it after the framework in lowercase (e.g., `flutter`, `dart-native`).

2. **Add categories and snippets/components:**

    - Follow the [Adding a New Snippet or Components](#adding-a-new-snippet-or-component) and [Adding a New Category](#adding-a-new-category) guidelines.

3. **Include an icon:**

    - Add an `icon.svg` file (50x50px) in the same framework folder.
    - Use tools like [Resize SVG](https://www.iloveimg.com/resize-image/resize-svg) to ensure the correct size.

4. **Double-check your work:**

   - Verify that everything is structured correctly and displays as intended.

---

## Testing Snippets

To test that your snippets are formatted correctly use the following script:

```
$ npm run snippets:check
```

It will return nothing if they are well formatted, otherwise it will tell you what the error is.

---

To preview the snippets, you need to consolidate them, use the following script:

```
$ npm run snippets:consolidate
```

It will update the snippets in the `/public` folder, making them available to the frontend.

## Final Notes

Whether you’re fixing a tiny typo, writing a new snippet or a new component, or dreaming up big features, every bit counts! 🛠️

If you have any questions or need help, feel free to open a new [GitHub discussion](https://github.com/mymangatheque/quicksnipdart/discussions).

Happy coding! 💻✨
