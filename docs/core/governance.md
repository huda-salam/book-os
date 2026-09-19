# Book OS Governance

This page documents how Book OS itself evolves. The canonical source is `core/governance.md`.

## What belongs

Only domain-independent, reusable improvements to reasoning, evidence, knowledge architecture, editorial quality, retrieval, workflow, or quality assurance should enter Book OS.

Domain-specific concepts, conclusions, terminology, temporary research, and project-specific structures remain in the individual book.

## Change classes

- **Core** — changes semantic rules or principles.
- **Workflow** — changes how authors, AI, reviewers, or repositories operate.
- **Template** — changes reusable project artifacts.
- **Documentation** — clarifies existing behavior.
- **Experimental** — a proposed capability not yet proven reusable.

## Compatibility

Prefer additive evolution. A conflicting change requires explicit impact analysis, migration or deprecation, and documentation. Existing meaning must never change silently.

## Versioning intent

- **Major** — incompatible operating-model or semantic change.
- **Minor** — backward-compatible capability or rule addition.
- **Patch** — clarification or non-semantic fix.

## Quality gates

Meaningful changes should receive structural, conceptual, compatibility, terminology, workflow, retrieval, red-team, and editorial review appropriate to their impact.

## Promotion rule

A project practice should become Book OS only when it is **Reusable → Explainable → Stable**.

> Book OS should become better by becoming clearer and more reusable, not merely larger.
