# AI Operating Commands

## Purpose

AI Operating Commands provide a small, repeatable vocabulary for working with Book OS without relying on long ad-hoc prompts.

They define the **intent of the operation**, not a rigid UI or command-line interface. An AI assistant may execute the same intent through chat, repository tools, scripts, or other interfaces.

The commands are domain-independent.

## Command Principles

1. **Read before acting.** Relevant Book OS rules and project state must be loaded before substantive work.
2. **Preserve epistemic meaning.** Never turn source, inference, assumption, or recommendation into another category silently.
3. **Respect canonical ownership.** Do not redefine established concepts locally.
4. **Prefer focused operations.** One command should have a clear objective and reviewable output.
5. **Show uncertainty.** Missing evidence or unresolved contradictions are outputs, not defects to hide.
6. **Separate analysis from mutation.** Review commands should not silently modify the repository.
7. **Keep changes traceable.** Material repository changes should identify what changed and why.

## Command Set

### bootstrap

**Purpose:** Start or resume a book project safely.

**AI should:**

- read the applicable Book OS core and workflow rules;
- inspect the current repository state;
- identify the current book stage;
- locate foundation and decision records;
- identify unresolved questions and quality issues;
- avoid starting substantive chapter writing automatically.

**Output:**

- Current state
- Applicable rules
- Known decisions
- Open questions
- Recommended next operation

### intake

**Purpose:** Establish the new book's identity and boundaries.

**AI should collect or refine:**

- Book Identity
- Central Problem
- Thesis candidate
- Audience
- Reader Outcomes
- Core Questions
- Purpose
- Scope
- Out of Scope
- Language/style
- Depth/horizon
- Evidence expectations
- Intended use

**Output:** a structured Book Intake record.

### foundation

**Purpose:** Build the intellectual foundation before substantive writing.

**AI should establish:**

Book Thesis → Audience → Reader Outcomes → Core Questions → Knowledge Domains → Conceptual Model → Book Architecture → Chapter Map → Cross-Chapter Dependencies → Evidence Strategy → Quality Strategy → Retrieval Strategy.

**Gate:** If essential foundation elements remain materially unclear, flag them instead of filling them with invented certainty.

### architecture

**Purpose:** Design or revise the knowledge architecture.

**AI should examine:**

- chapter responsibilities;
- concept ownership;
- dependencies;
- reader progression;
- evidence dependencies;
- retrieval paths;
- redundancy and gaps.

**Output:** architecture proposal plus explicit trade-offs and unresolved decisions.

### research

**Purpose:** Research a question or claim.

**AI should follow:**

Question → Claim/Decision → Evidence Requirement → Sources → Assessment → Interpretation → Implication.

It must identify source class, provenance, evidence strength, boundaries, counterevidence, and uncertainty.

**Output:** Evidence Review record or equivalent structured research result.

### draft

**Purpose:** Draft or revise book content from the established architecture.

**AI should:**

- identify the canonical concepts involved;
- preserve terminology and epistemic classifications;
- use appropriate evidence;
- avoid unsupported certainty;
- distinguish illustrative examples from evidence;
- keep the section's intellectual job explicit.

**Output:** draft content plus material assumptions or evidence gaps when relevant.

### integrate

**Purpose:** Integrate new material into the whole book.

**AI should check:**

- terminology;
- canonical ownership;
- claims;
- evidence;
- assumptions;
- causal relationships;
- cross-references;
- contradictions;
- reader progression;
- retrieval.

**Output:** integration findings and required changes.

### review

**Purpose:** Perform a focused quality review.

The request should specify a review dimension where practical:

- structural
- conceptual
- evidence
- terminology
- cross-chapter
- red-team
- retrieval
- editorial

**Output:** findings with severity, location, rationale, and recommended action.

A review command must not silently rewrite the repository.

### red-team

**Purpose:** Actively search for ways the book's reasoning could fail.

AI should test:

- hidden assumptions;
- counterexamples;
- boundary conditions;
- alternative explanations;
- causal overreach;
- evidence mismatch;
- false precision;
- recommendation leakage;
- terminology ambiguity;
- cases where the conclusion would change.

**Output:** challenge findings, not automatic corrections.

### retrieve

**Purpose:** Test whether knowledge can be found and interpreted correctly.

Test representative reader questions such as:

- What does the book mean by X?
- Where is X defined?
- What evidence supports Y?
- What are the limits of Y?
- When does the recommendation not apply?
- What would change the conclusion?

**Output:** retrieval path, canonical source, supporting evidence, and ambiguity/failure if present.

### consistency

**Purpose:** Detect contradictions or semantic drift across the repository.

Check:

- definitions;
- terminology;
- assumptions;
- claims;
- evidence strength;
- causal relationships;
- recommendations;
- scope;
- cross-references.

**Output:** inconsistency register with affected locations and likely canonical owner.

### release-check

**Purpose:** Determine whether a knowledge state is ready for release.

Check the lifecycle release gates plus:

- unresolved critical findings;
- canonical ownership;
- evidence status;
- cross-reference integrity;
- retrieval of core questions;
- known limitations;
- language/style profile.

**Output:** Pass / Pass with Conditions / Blocked, with explicit reasons.

### status

**Purpose:** Summarize project state without changing it.

Return:

- current lifecycle stage;
- completed foundation elements;
- active chapters;
- major decisions;
- open questions;
- evidence gaps;
- quality findings;
- release state.

## Command Safety

Commands fall into two classes.

### Read / Analyze

- bootstrap
- architecture
- research
- review
- red-team
- retrieve
- consistency
- release-check
- status

These should not modify canonical content unless explicitly requested.

### Create / Change

- intake
- foundation
- draft
- integrate

These may create or modify project artifacts, but the intended mutation should be explicit.

## Standard Command Response

For substantive operations, prefer:

1. **Intent**
2. **Scope**
3. **Findings / Work**
4. **Evidence or basis**
5. **Decisions**
6. **Open questions**
7. **Changes made**
8. **Next gate**

Do not mechanically include every heading when unnecessary.

## Command Composition

Commands may be composed when the workflow requires it.

Examples:

- bootstrap → status
- intake → foundation
- research → integrate
- draft → integrate → review
- review → red-team → consistency
- release-check → release

Composition should remain explicit so the user can understand what the AI is doing.

## Stop Conditions

AI should pause and surface the issue when:

- the user request conflicts with a canonical concept;
- evidence is materially insufficient;
- a central assumption is unresolved;
- a requested conclusion exceeds available evidence;
- two canonical sources conflict;
- a proposed change has broad downstream impact.

The goal is not to block progress unnecessarily. The goal is to prevent silent intellectual corruption.

## Governing Principle

**Commands should make AI behavior predictable without making the book-building process rigid.**
