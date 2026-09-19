# Book OS Visual Presentation Profiles

Book OS separates the **knowledge system** from the **visual presentation layer**.

These profiles change the VitePress look and reading experience without changing the book's knowledge architecture, terminology, evidence model, or workflow.

## Available profiles

### Editorial

Publication-like and spacious.

- Serif headings
- Generous reading width
- Strong typographic hierarchy
- Restrained borders
- Quiet callouts

Good default for professional books and long-form knowledge.

### Minimal

Quiet and reading-focused.

- Sans-serif typography
- Reduced visual decoration
- Narrower reading column
- Simple borders
- Neutral presentation

Good for books where content should dominate the interface.

### Technical

Structured and engineering-oriented.

- Dense but readable typography
- Wider content area
- Strong code treatment
- Compact hierarchy
- Clear technical blocks

Good for technical books and engineering handbooks.

## Selecting a profile

The active profile is selected in:

`docs/.vitepress/theme/index.ts`

Change:

```ts
export const BOOK_VISUAL_PROFILE = 'editorial' as const
```

to one of:

```ts
'editorial'
'minimal'
'technical'
```

Then run:

```bash
npm run docs:dev
```

No content files need to change.

## Design principle

Visual profiles are presentation choices, not knowledge choices.

Do not place:

- domain rules;
- canonical definitions;
- evidence rules;
- reasoning rules;
- chapter structure;
- substantive recommendations

inside a visual profile.

## Research basis

The profiles are informed by recurring patterns in mature open-source documentation systems, including VitePress, Docusaurus, Starlight, and Fumadocs: clear hierarchy, readable content width, strong typography, restrained decoration, responsive navigation, and customizable presentation.

The Book OS implementation deliberately keeps the design layer small and VitePress-native rather than introducing another UI framework.
