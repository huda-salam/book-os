# Book OS Self-Review

## Purpose

Book OS is itself a maintained knowledge system. It therefore needs periodic review against the standards it imposes on books.

Self-review asks whether Book OS remains:

- coherent;
- reusable;
- understandable;
- maintainable;
- sufficiently complete for its intended workflow;
- appropriately simple.

Self-review must not become an excuse to add complexity merely because a gap can be imagined.

## Review Dimensions

### 1. Structural Integrity

Check:

- repository structure is understandable;
- canonical sources are identifiable;
- published documentation reflects canonical sources;
- templates have clear purposes;
- navigation does not hide important capabilities;
- no important workflow exists only implicitly.

### 2. Conceptual Consistency

Check whether:

- principles agree with workflows;
- epistemic rules agree with evidence rules;
- knowledge architecture agrees with canonical ownership;
- retrieval rules agree with content architecture;
- quality gates agree with lifecycle stages;
- governance rules agree with contribution rules.

Flag contradictions rather than silently choosing one rule.

### 3. Terminology Integrity

Check:

- the same term does not have materially different meanings;
- unnecessary synonyms do not create ambiguity;
- new terminology has a reason;
- canonical names are used consistently;
- deprecated terminology is identified.

### 4. Workflow Coherence

Trace the normal path:

**Bootstrap → Intake → Foundation → Architecture → Research → Draft → Integrate → Review → Validate → Release → Maintain**

Ask:

- Can a contributor understand what to do next?
- Are stage gates clear?
- Are there redundant workflows?
- Are any important handoffs missing?
- Does a workflow require information that no earlier stage produces?

### 5. Epistemic Integrity

Check whether Book OS consistently distinguishes:

- Fact
- Definition
- Evidence
- Assumption
- Inference
- Interpretation
- Recommendation
- Unknown

Check especially for places where a recommendation is accidentally presented as a requirement or where evidence strength is treated as certainty.

### 6. Evidence Integrity

Check:

- research workflow;
- evidence review template;
- source/provenance expectations;
- version/date handling;
- counterevidence;
- evidence boundaries;
- current/versioned knowledge.

Ask whether the system can explain not only what is believed, but why and within what boundary.

### 7. Canonical Ownership

Check whether important concepts and rules have:

- one canonical home;
- identifiable dependents;
- stable terminology;
- explicit change procedures;
- usable cross-references.

Look for duplicate definitions and competing sources of truth.

### 8. Retrieval Integrity

Test representative questions:

- What does Book OS mean by X?
- Where is X defined?
- What workflow should I use for Y?
- Which template records Z?
- What quality gate applies here?
- What should AI do before editing?
- How do I challenge a weak claim?

A correct answer that requires searching many unrelated documents indicates a retrieval problem.

### 9. Simplicity / Complexity Budget

Every rule, template, command, or abstraction has a maintenance cost.

For each candidate addition ask:

- What problem does it solve?
- Who needs it?
- How often will it be used?
- Is an existing rule sufficient?
- Can the same outcome be achieved more simply?
- What new dependencies does it create?

Prefer removal or consolidation when complexity exceeds value.

### 10. AI Behavior Integrity

Check whether an AI assistant can determine:

- what it must read before acting;
- what it may change;
- what it must not invent;
- how it handles uncertainty;
- how it treats canonical concepts;
- how it researches;
- how it reviews;
- how it reports repository changes;
- when it should stop and ask for clarification.

The test is behavioral predictability, not prompt length.

### 11. Maintainability

Check:

- stale documentation;
- duplicated rules;
- broken links;
- obsolete templates;
- unused workflows;
- unclear versioning;
- undocumented compatibility impacts.

Prefer small, traceable corrections.

## Severity

Use four levels:

| Severity | Meaning |
|---|---|
| Critical | Can materially corrupt book knowledge or make the operating model unsafe/unreliable |
| High | Material inconsistency or workflow failure |
| Medium | Significant usability, retrieval, or maintainability problem |
| Low | Clarity, polish, or minor documentation issue |

Severity is about impact, not how difficult the fix is.

## Review Method

### Step 1 — Inventory

List:

- core rules;
- workflows;
- templates;
- schemas;
- documentation;
- navigation;
- repository operating rules.

### Step 2 — Map Dependencies

For each important rule identify:

- canonical source;
- workflows that depend on it;
- templates that operationalize it;
- documentation that exposes it.

### Step 3 — Trace Scenarios

Run representative scenarios:

1. Start a new book.
2. Research a disputed claim.
3. Draft a chapter.
4. Add a new important concept.
5. Revise a canonical definition.
6. Perform a red-team review.
7. Prepare a release.
8. Translate the mature book into another language.

### Step 4 — Challenge

Ask:

- What could go wrong?
- What is ambiguous?
- What is duplicated?
- What is missing?
- What is unnecessarily complex?
- What could cause AI to behave inconsistently?

### Step 5 — Record Findings

Use a Self-Review Record.

### Step 6 — Prioritize

Fix:

**Critical → High → Medium → Low**

Within the same severity, prefer changes that remove ambiguity or reduce complexity.

## Self-Review Record

| ID | Dimension | Finding | Severity | Evidence | Action | Owner |
|---|---|---|---|---|---|---|

## Exit Criteria

A self-review is complete when:

- critical findings are resolved or explicitly accepted;
- high findings have an owner and action;
- contradictions are resolved or documented;
- canonical ownership is clear;
- representative workflows can be completed;
- retrieval tests produce the expected canonical sources;
- documentation is structurally consistent;
- no unnecessary complexity was introduced merely to satisfy the review.

## Review Cadence

Self-review should occur:

- before a major Book OS release;
- after material changes to core principles or workflows;
- when repeated project work reveals a systemic problem;
- periodically during active development.

Do not schedule reviews so frequently that they become ceremony.

## Governing Principle

**Book OS should be judged by how reliably it helps humans and AI build better books, not by how many rules it contains.**
