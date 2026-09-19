# AI & Repository Operating Model

This document defines how an AI assistant and human author operate the Book OS repository.

## 1. Session bootstrap

When a new book project starts:

1. Read the Book OS.
2. Identify which Book OS rules apply.
3. Do not import domain-specific knowledge into Book OS.
4. Do not begin substantive chapter drafting yet.
5. Conduct the Book Intake.

## 2. Book Intake

Establish:

- Book Identity
- Central Problem
- Thesis
- Audience
- Reader Outcomes
- Core Questions
- Purpose
- Scope
- Out of Scope
- Language
- Tone / Style
- Intended depth
- Time horizon
- Evidence expectations
- Intended use: learning, reference, advisory, or hybrid

## 3. Foundation before chapters

Build, in order:

**Book Thesis → Audience → Reader Outcomes → Core Questions → Knowledge Domains → Conceptual Model → Book Architecture → Chapter Map → Cross-Chapter Dependencies → Evidence Strategy → Quality Strategy → Retrieval Strategy**

Do not start Chapter 1 until the foundation is sufficiently stable.

## 4. Research workflow

For substantive research:

1. Define the question.
2. Define the claim or decision requiring evidence.
3. Identify suitable source classes.
4. Gather source identity, version/date and scope.
5. Assess evidence strength and boundaries.
6. Record interpretation separately from source statements.
7. Record implications separately from interpretation.
8. Identify uncertainty and counterevidence.
9. Connect the result to canonical concepts and chapters.

Never invent sources, citations, quotations, statistics, or study findings.

## 5. Writing workflow

Draft from the knowledge architecture rather than from a blank page.

A useful section pattern is:

**Purpose → Concept → Mechanism → Requirements / Constraints → Alternatives → Trade-offs → Risks / Failure → Evidence → Implication → Practical application**

Not every section needs every element.

## 6. Review workflow

Use focused passes:

- structural review,
- conceptual review,
- evidence review,
- terminology review,
- cross-chapter review,
- red-team review,
- retrieval review,
- editorial review.

Do not use one generic "looks good" review as a substitute for these checks.

## 7. AI behavior rules

The AI must:

- distinguish source statements from inference and recommendation;
- preserve uncertainty;
- challenge contradictions and weak reasoning;
- identify missing evidence;
- maintain canonical terminology;
- avoid silently changing meaning for style;
- identify when a requested conclusion exceeds available evidence.

The AI must not:

- fabricate evidence;
- silently redefine canonical concepts;
- treat one case as universal proof;
- present its own preference as external fact;
- start Chapter 1 merely because a book is requested;
- place domain-specific rules into Book OS without an explicit Book OS Candidate decision.

## 8. Book OS Candidate process

A reusable principle discovered during book development may become a **Book OS Candidate** only when it is domain-independent.

Record:

- proposed principle,
- problem it solves,
- evidence from the book project,
- why it generalizes,
- risks of generalization,
- proposed location in Book OS,
- decision.

Domain-specific methods belong to the book, not Book OS.

## 9. Git and repository discipline

Keep changes small and reviewable.

Recommended branch model:

- `main`: stable Book OS
- `docs/*`: documentation changes
- `feature/*`: substantive additions
- `fix/*`: corrections

Commit messages should explain intent, for example:

- `docs: add epistemic model`
- `docs: clarify evidence boundaries`
- `fix: correct retrieval workflow`
- `feat: add book intake template`

Prefer one coherent concern per commit.

For substantial changes:

1. create a branch,
2. make focused commits,
3. review the diff,
4. run documentation build,
5. open a pull request,
6. perform quality review,
7. merge to `main).

## 10. VitePress documentation

Book OS documentation uses **VitePress**.

The documentation source lives under `docs/`.

Minimum commands:

```bash
npm install
npm run docs:dev
npm run docs:build
npm run docs:preview
```

Keep repository source-of-truth Markdown separate from generated output.

The VitePress site is the human-facing documentation layer; the underlying Markdown files remain the canonical content.

## 11. Release and maintenance

A release should identify:

- Book OS version,
- material changes,
- compatibility implications,
- migrated templates or schemas if applicable,
- known limitations.

Do not change a core principle casually. Record significant changes as decisions.

## 12. Maintainability

Prefer:

- simple Markdown,
- shallow folder structure,
- explicit links,
- canonical documents,
- small reusable templates,
- minimal automation,
- machine-readable schemas only when they create real value.

Avoid building a complex platform before the operating model proves the need.
