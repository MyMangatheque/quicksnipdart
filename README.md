# QuickSnipDart

An open-source project that categorizes handy code snippets and components for dart and flutter. Built with love and powered by an awesome community. 🚀

![Website preview](/public/preview.png)

## How to Contribute

Want to help make QuickSnipDart even better? You can contribute by:

- **Improving the Code**: Fix bugs, suggest new features, or optimize the project.
- **Adding New Snippets/Components**: Share your favorite snippets/components to grow the database.

Check out the [CONTRIBUTING.md](/CONTRIBUTING.md) file for detailed contribution guidelines.

## General Rules

To keep everything smooth and consistent, please:

- If you spot a bug in the codebase or issues with the documentation, please open up a [GitHub issue](https://github.com/mymangatheque/quicksnipdart/issues) detailing the problem before creating a PR.
- Once confirmed with maintainers, you can then create a PR.

Following these rules helps us build an awesome community. 🚀

- If you are interested in proposing new features, please open up a new [GitHub discussion](https://github.com/mymangatheque/quicksnipdart/discussions) with details for the proposed feature.
- Please do **not** create a PR for a new feature without first discussing it with the maintainers. If you create a PR for a new feature without discussing it first, then your PR will be closed.

### Adding a Snippet/Component

- ⚡️ [**Raycast Extension**](https://www.raycast.com/anders_morille/quicksnip): An extension to browse and use QuickSnip snippets directly from Raycast. (Thanks to the creator: [@lille-morille](https://github.com/lille-morille))

If you’d like to create your own extension or tool:

- [x] Please ensure it adheres to our project’s licensing and attribution requirements.
- [x] Please link to the [original QuickSnip repository](https://github.com/dostonnabotov/quicksnip) in your extension/tool to attribute the source.
- [x] Share your work with us — we’d be thrilled to feature it!

## Project Vision

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

Here's an example for Dart:

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

Expected file structure:

```md
/snippets
  |- language
    |- category-name
      |- your-snippet-here.md
```

> Please do **NOT** add or edit anything in `/public` folder. It will be used for consolidating snippets.

To test that your snippets are formatted correctly use the `snippets:check` script:

```
npm run snippets:check
```

It will return nothing if they are well formatted, otherwise it will tell you what the error is.

---
To preview the snippets, you need to consolidate them, use the `snippets:consolidate` script:

```
npm run snippets:consolidate
```

It will update the snippets in the `/public` folder, making them available to the frontend.

For more details about adding new categories or programming languages, check out the [CONTRIBUTING.md](/CONTRIBUTING.md) file.

## Guidelines for Contributions

To keep things smooth and consistent, please:

- [x] Follow the style and contribution guidelines of this project.
- [x] Include all mandatory fields in the snippet/component.
- [x] Test your snippet/component to ensure it works as expected.

Following these guidelines helps us (and everyone else) review and merge your contributions faster.

**If you fail to meet the guidelines, your PR will most likely get rejected.**

## License

QuickSnipDart is licensed under the [MIT License](/LICENSE). Feel free to use and share it as you like. QuickSnipDart is a fork of <a href="https://github.com/dostonnabotov/quicksnip">QuickSnip</a>.
