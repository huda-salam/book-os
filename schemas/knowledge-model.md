# Lightweight Knowledge Model

This model defines the minimum metadata needed to make Book OS content understandable to humans and retrievable by AI.

It is intentionally lightweight. A schema is justified only when it improves consistency, validation, retrieval, or maintenance.

## Core entities

### Concept
A stable idea with a canonical definition.
Minimum metadata: id, name, definition, scope, non_meaning, canonical_location, related_concepts.

### Claim
A proposition the book asserts, discusses, challenges, or uses.
Minimum metadata: id, statement, claim_type, status, canonical_location, evidence_refs, assumptions, boundaries.

### Evidence
Information supporting, challenging, or qualifying a claim.
Minimum metadata: id, source_ref, source_class, version_or_date, scope, evidence_strength, boundary, supports, challenges.

### Source
The identifiable origin of evidence.
Minimum metadata: id, title, author_or_organization, source_type, locator, publication_or_update_date, version, jurisdiction_or_scope.

### Question
A question the book should help answer.
Minimum metadata: id, question, audience, canonical_locations, related_concepts, related_claims.

### Case
A concrete or hypothetical situation used to teach mechanism, decision, trade-off, failure, or consequence.
Minimum metadata: id, title, case_type, context, concepts, claims, evidence, limitations.

### Decision
A documented choice made within the book's development or application.
Minimum metadata: id, decision, context, options, rationale, tradeoffs, assumptions, evidence, what_would_change_it.

## Epistemic fields

Where applicable, metadata should preserve the distinction between:
- fact
- evidence
- assumption
- inference
- interpretation
- judgment
- recommendation
- unknown.

Do not collapse these into a generic description field.

## Relationships

Useful relationships include:
- concept → related concept
- claim → evidence
- claim → concept
- claim → assumption
- evidence → source
- question → concept
- question → claim
- case → concept
- case → claim
- decision → evidence
- chapter/section → canonical concept
- chapter/section → claim.

## Identifiers

IDs should be stable, human-readable where practical, unique within the book, and independent from chapter numbering.

Examples: concept.canonical-knowledge, claim.source-does-not-prove-applicability, question.how-does-it-work.

This prevents references from becoming fragile when chapter structure changes.

## Versioning

Changing a chapter number should not require changing the identity of a concept or claim.

Material changes to a concept, claim, or evidence record should be reviewable as a versioned change.

## Source of truth

The canonical prose remains the primary human-readable source.

Structured metadata supplements prose; it does not become an alternate interpretation of the book.

When structured metadata conflicts with canonical prose, resolve the conflict rather than allowing two competing meanings.