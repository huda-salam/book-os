# Repository Contribution Guide

## Purpose

This guide defines how humans and AI assistants contribute changes to a Book OS repository.

The goal is not to make Git usage complicated. The goal is to keep changes understandable, reviewable, reversible, and faithful to Book OS governance.

## Contribution Principles

1. **Small changes are easier to review.**
2. **One logical change should have one clear purpose.**
3. **Do not mix content, governance, tooling, and unrelated cleanup without a reason.**
4. **Inspect before editing.**
5. **Review the diff before considering a change complete.**
6. **Build documentation after structural changes.**
7. **Record material decisions.**
8. **Prefer additive changes when compatibility matters.**
9. **Never use formatting changes to conceal substantive changes.**
10. **A clean commit is part of knowledge quality.**

## Before Changing Anything

AI or contributor should:

- identify the target files;
- read the relevant canonical source;
- determine whether the change is domain-specific or Book OS-level;
- check for an existing concept, template, or workflow before creating a new one;
- understand dependencies and likely downstream impact.

For an existing concept, prefer updating its canonical source rather than creating a parallel definition.

## Change Classification

Classify the intended change before implementation.

| Class | Examples | Typical handling |
|---|---|---|
| Core | principles, epistemic model, reasoning | explicit review |
| Workflow | AI operation, research, lifecycle | workflow review |
| Template | reusable records | template review |
| Documentation | navigation, examples, wording | documentation review |
| Experimental | proposed/unproven process | clearly marked experimental |

If a change cannot be classified, clarify its purpose before adding it.

## Branching

For small, isolated fixes, direct work on the working branch may be acceptable when repository policy permits it.

For material changes, prefer:

\`\`\`
main
  └── feature/<focused-change>
\`\`\`

Examples:

- \`feature/canonical-ownership\`
- \`feature/ai-operating-commands\`
- \`fix/navigation-link\`

Keep branches focused. Avoid a branch that combines several unrelated ideas.

## Commit Discipline

Commit messages should explain the logical change.

Preferred forms:

- \`core: clarify epistemic model\`
- \`workflow: add research gate\`
- \`templates: add evidence review record\`
- \`docs: update workflow navigation\`
- \`fix: correct broken cross-reference\`

Avoid messages such as:

- \`update\`
- \`changes\`
- \`misc\`
- \`final\`

A commit should be understandable without opening every file.

## Commit Scope

A commit may contain multiple files when they form one coherent change.

For example, adding a new workflow may reasonably include:

- canonical workflow source;
- template;
- VitePress documentation;
- navigation entry.

Do not split a single logical change merely to create more commits.

Conversely, do not combine unrelated changes merely because they happen during the same session.

## Review Before Commit

Before considering a change complete, check:

### Content

- Does the change solve the intended problem?
- Does it duplicate an existing rule?
- Does it introduce an unintended definition?
- Does it preserve epistemic distinctions?
- Does it remain domain-independent where required?

### Architecture

- Is canonical ownership clear?
- Are dependencies affected?
- Are cross-references correct?
- Does the change fit the existing Book OS structure?

### Evidence

Where relevant:

- Are claims supported?
- Is evidence strength appropriate?
- Are boundaries preserved?
- Is uncertainty visible?

### Documentation

- Is the canonical source updated?
- Is the published/docs version updated when applicable?
- Are navigation entries correct?
- Are examples consistent?

## Documentation Build

For VitePress changes, run:

\`\`\`bash
npm install
npm run docs:build
\`\`\`

Use:

\`\`\`bash
npm run docs:dev
\`\`\`

for interactive inspection.

A documentation build is a minimum structural check, not proof that the intellectual content is correct.

## Review Diff

Review the resulting diff for:

- accidental deletions;
- duplicated sections;
- broken links;
- stale navigation;
- inconsistent terminology;
- unintended formatting changes;
- domain-specific material entering Book OS;
- overly complex abstractions.

When the diff is larger than expected, stop and understand why before proceeding.

## Pull Requests

For material changes, a pull request should state:

### Purpose

What problem does the change solve?

### Scope

What files or areas changed?

### Design

What approach was chosen and why?

### Trade-offs

What was deliberately not included?

### Validation

What checks were performed?

### Open Questions

What remains uncertain?

The PR should make review possible without reconstructing the entire conversation that produced the change.

## Human Review

Human review is especially important for:

- changes to core principles;
- changes to epistemic rules;
- canonical terminology;
- governance;
- release gates;
- compatibility-breaking changes;
- major workflow changes.

AI may prepare the change and its review record, but material governance decisions should remain explicit.

## AI-Specific Rules

AI contributors must:

- read relevant Book OS rules before acting;
- distinguish repository facts from assumptions;
- avoid claiming tests were run when they were not;
- avoid claiming a source was reviewed when it was not;
- report failed tool operations honestly;
- avoid silently changing unrelated files;
- preserve user-approved decisions;
- surface contradictions instead of resolving them invisibly.

AI should prefer the smallest sufficient change.

## Source-of-Truth Rule

When both source and published documentation exist:

- canonical source is authoritative;
- published documentation should reflect the canonical source;
- do not create independent competing versions.

If they diverge, reconcile them explicitly.

## Rollback and Reversal

A change should be reversible when practical.

For material changes, record:

- what changed;
- why;
- affected areas;
- migration required;
- what would justify reversal.

Do not delete historical decision context merely because the current approach changed.

## Completion Checklist

Before declaring a repository change complete:

- [ ] Purpose is clear.
- [ ] Change classification is known.
- [ ] Canonical ownership is respected.
- [ ] Relevant dependencies were checked.
- [ ] Documentation was updated where applicable.
- [ ] Navigation was checked where applicable.
- [ ] Diff was reviewed.
- [ ] Documentation build was run when applicable.
- [ ] Material decisions were recorded.
- [ ] Remaining uncertainty is explicit.

## Governing Principle

**Contribute the smallest coherent change that improves the system without making its reasoning harder to understand.**
