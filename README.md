# Book OS

A reusable operating system for designing, researching, writing, reviewing, and maintaining high-quality books.

Book OS is **domain-independent**. It carries forward thinking discipline, epistemic standards, evidence hygiene, knowledge architecture, editorial quality, retrieval, and quality gates—not the content or structure of any particular book.

## Documentation site

The repository is designed to be documented and published with **VitePress**.

Recommended local workflow:

```bash
npm install
npm run docs:dev
```

Build and preview:

```bash
npm run docs:build
npm run docs:preview
```

## Repository model

- `core/` — philosophy, epistemic model, reasoning, knowledge architecture, evidence, terminology, retrieval, quality gates
- `workflow/` — AI + repository operating model, research/writing/review lifecycle, Git discipline, release and maintenance
- `templates/` — reusable book foundation, chapter, evidence, decision and review templates
- `schemas/` — machine-readable metadata/knowledge schemas when justified
- `docs/` — VitePress documentation and rationale

## First-session protocol

When Book OS is introduced into a new book project:

1. Read Book OS before producing substantive book content.
2. Identify the new book's domain and context.
3. Interview the author about identity, thesis, audience, outcomes, scope, language, style, horizon, and purpose.
4. Build the book foundation.
5. Establish knowledge architecture, terminology, evidence strategy, quality strategy, and retrieval strategy.
6. Only then begin substantive chapter development.

**Do not start with Chapter 1 merely because the user asks for a book.**

## Governing principle

> Inherit the system of thinking and quality standards. Build new content and structure from the new domain.
