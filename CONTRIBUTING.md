# Contributing to SyntaxUI

Thank you for your interest in contributing to SyntaxUI! We welcome contributions from the community to help improve and enhance SyntaxUI.

## Getting Started

To get started with contributing to SyntaxUI, follow these steps:

1. Fork the repository.
2. Clone the forked repository using `git clone`.
3. Install the necessary dependencies by running `npm install`.
4. Start the development server with `npm run dev`.

---

## Guidelines for Contributions

When contributing to SyntaxUI, please follow these guidelines:

### Step 1: Create an issue

Make sure to create an issue for feature that you would like to contribute.

### Step 2: Adding the UI Element

If you are adding a new feature then please add it in the appropriate folder in `src/showcase`. For example, if you are making a `NewToggle` component then you would add it to `src/showcase/components/toggle/NewToggle.tsx`


### Step 3: Creating page in `docs`

In `src/app/(docs)/`, the folder layout is as follows. Follow the same folder structure as in `showcase`. If you are adding the `showcase/buttons/HeartButton.tsx` component, add it to `/(docs)/components/button/heartbeat-button/page.mdx`.


###  Step 4: Adding the Feature to a UI Group

We have several UI Groups in `src/showcase/ui-group/` that each contain an array of features. Add your new feature to the end of that array.

### Step 5: Creating Navigation Link

If you are creating a new feature type you must also add it the our Navigation system. More precisely, if you want to add a new feature that does not already have a subfolder, then this step applies.

In `src/components/Navigation.tsx` there is array named `navigation`. Please add the appropriate new `NavGroup` to this array, making sure to continue the pre-existing patterns.

---

## Reporting Bugs

If you encounter any bugs or issues while using SyntaxUI, please report them by opening an issue on the [GitHub issue tracker](https://github.com/Ansub/syntaxUI/issues). When reporting a bug, please provide a clear description of the problem, steps to reproduce it, and any relevant code snippets or error messages.

---

## Feature Requests

If you have an idea for a new feature or improvement, I'd love to hear about it! Please submit your feature requests by opening an issue on the [GitHub issue tracker](https://github.com/Ansub/syntaxUI/issues). Provide a detailed description of the feature, its benefits, and any relevant use cases.

---

## Other Questions

If you have any other questions or need help, feel free to create or comment on an [issue on GitHub](https://github.com/Ansub/syntaxUI/issues) or [join our Discord](https://discord.gg/P8GXYyH3ZU).

---

## License

By contributing to SyntaxUI, you agree that your contributions will be licensed under the [MIT License](https://opensource.org/licenses/MIT).
