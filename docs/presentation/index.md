# Visual Presentation Profiles

Book OS keeps the **knowledge system** separate from its visual presentation.

The current VitePress layer provides three lightweight visual profiles:

- **Editorial** — publication-like, spacious, typographic.
- **Minimal** — quiet, clean, reading-focused.
- **Technical** — structured, denser, engineering-oriented.

The active profile is selected in `docs/.vitepress/theme/index.ts`.

See the source-level guide in `presentation/README.md` for selection and design principles.

The profiles are inspired by recurring patterns in mature open-source documentation systems such as VitePress, Docusaurus, Starlight, and Fumadocs. They are intentionally implemented as small VitePress-native CSS layers rather than as a new UI framework.
