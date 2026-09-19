# Book OS Governance

## Purpose

Book OS is itself a maintained knowledge system. Governance exists to keep it reusable, coherent, backward-compatible where practical, and resistant to uncontrolled growth.

Book OS should evolve by improving the operating system for books—not by absorbing the domain content of any particular book.

## 1. What belongs in Book OS

A change may enter Book OS when it is:

- domain-independent,
- reusable across multiple books,
- a durable improvement to reasoning, evidence, knowledge architecture, editorial quality, retrieval, workflow, or quality assurance,
- sufficiently clear to apply without relying on one book's subject matter.

Examples:

- a better evidence classification,
- a reusable review gate,
- a repository workflow,
- a canonical concept-ownership rule,
- a reusable AI operating protocol.

## 2. What does not belong

Do not promote the following into Book OS merely because they were useful in one project:

- domain-specific concepts,
- subject-specific terminology,
- conclusions about a particular industry,
- a chapter structure that only fits one domain,
- temporary research findings,
- vendor-specific implementation details,
- author preferences that are not reusable,
- style choices that can be expressed through a project-level style profile.

These belong in the individual book repository.

## 3. Change classes

Every meaningful change should be classified as one of:

### Core change
Changes a principle, epistemic rule, reasoning rule, knowledge model, evidence model, terminology rule, retrieval rule, or quality gate.

Requires compatibility review.

### Workflow change
Changes how AI, authors, editors, reviewers, or Git repositories operate.

Requires workflow regression review.

### Template change
Changes a reusable document template.

Requires checking existing book projects for compatibility.

### Documentation change
Clarifies or reorganizes existing behavior without changing the operating model.

Normally low risk.

### Experimental change
A proposed capability not yet proven reusable.

Keep it explicitly experimental. Do not silently make it a core rule.

## 4. Versioning

Use semantic intent rather than mechanical version inflation.

- **Major** — incompatible change to the Book OS operating model or knowledge semantics.
- **Minor** — backward-compatible capability or rule addition.
- **Patch** — clarification, typo correction, editorial improvement, or non-semantic fix.

A version change should explain what changed and whether existing book repositories need action.

## 5. Compatibility principle

Prefer additive evolution.

When a new rule conflicts with an existing rule:

1. identify the conflict,
2. identify which principle is actually intended,
3. assess impact on existing books,
4. choose migration or deprecation explicitly,
5. document the decision.

Never resolve a contradiction by silently changing the meaning of an existing canonical rule.

## 6. Deprecation

A rule, template, or workflow may be deprecated when it is obsolete, misleading, redundant, or replaced by a better reusable mechanism.

A deprecation record should state:

- what is deprecated,
- why,
- replacement,
- affected repositories or templates,
- migration path,
- removal target, if applicable.

Deprecated material should remain discoverable until migration is reasonably complete.

## 7. Canonical ownership

Each Book OS concept has one canonical source.

Documentation pages may explain or visualize a concept, but must not create a second competing definition.

When moving or restructuring a concept:

- preserve one canonical definition,
- update references,
- check terminology,
- check workflow dependencies,
- check templates,
- check documentation navigation.

## 8. Quality gates for Book OS changes

A meaningful Book OS change should pass:

1. **Structural review** — correct location and dependency direction.
2. **Conceptual review** — principle is coherent and domain-independent.
3. **Compatibility review** — existing books should not be broken silently.
4. **Terminology review** — canonical terms remain stable.
5. **Workflow review** — AI and repository behavior remains actionable.
6. **Retrieval review** — humans and AI can locate the rule.
7. **Red-team review** — identify plausible misuse or unintended consequences.
8. **Editorial review** — concise, clear, maintainable.

Not every typo requires the full process. The depth of review should match the impact of the change.

## 9. Decision record

For changes that materially affect Book OS, record:

- Decision
- Context
- Problem
- Alternatives considered
- Chosen approach
- Reason
- Trade-offs
- Assumptions
- Compatibility impact
- Migration/deprecation needs
- What would change the decision

## 10. Release discipline

A Book OS release should be reproducible from Git history.

Prefer:

- small coherent commits,
- explicit commit messages,
- review before merging consequential changes,
- documentation updated with behavior changes,
- no generated documentation treated as the canonical source,
- no unrelated refactoring bundled into governance changes.

## 11. Promotion rule

A useful project-specific practice should pass three tests before entering Book OS:

**Reusable → Explainable → Stable**

If it is useful but only for one domain, keep it in the book.

If it appears reusable but is not yet understood, keep it experimental.

If it is understood and reusable, promote it with a clear canonical home.

## 12. Governing principle

> Book OS should become better by becoming clearer and more reusable, not merely larger.
