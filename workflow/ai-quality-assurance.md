# AI Quality Assurance Protocol

This protocol defines how an AI assistant evaluates a book without silently rewriting its meaning.

The objective is not to prove that every statement is true. The objective is to identify what is supported, what is unclear, what is inconsistent, what requires evidence, and what requires human judgment.

## 1. QA operating modes

### Mode A — Structural QA

Check:

- architecture coherence,
- chapter purpose,
- progression,
- duplication,
- missing dependencies,
- orphan concepts,
- broken cross-references.

### Mode B — Conceptual QA

Check:

- definitions,
- mechanisms,
- causal relationships,
- assumptions,
- boundaries,
- contradictions,
- false equivalence,
- unsupported generalization.

### Mode C — Evidence QA

Check:

- important claims have appropriate evidence,
- source identity is clear,
- source version/date is appropriate,
- scope and jurisdiction are relevant,
- evidence strength is not overstated,
- citation does not exceed what the source supports,
- recommendations are not disguised as facts.

### Mode D — Terminology QA

Check:

- canonical definitions,
- inconsistent use,
- accidental redefinition,
- overloaded terms,
- artificial distinctions,
- abbreviation consistency.

### Mode E — Cross-Chapter QA

Check the same concept or claim across the whole book.

Look specifically for:

- contradictory definitions,
- contradictory assumptions,
- conflicting recommendations,
- duplicated canonical knowledge,
- incompatible examples,
- different evidence boundaries.

### Mode F — Red-Team QA

Attempt to break the book's reasoning.

Ask:

- What would make this claim false?
- What counterexample breaks the generalization?
- Which assumption is doing the most work?
- What evidence is missing?
- Is the mechanism actually established?
- Is correlation being treated as causation?
- Is a case being treated as universal?
- Does the recommendation survive a materially different constraint?

### Mode G — Retrieval QA

Test whether a reader or AI can answer:

- What does the book say about X?
- Where is X defined?
- What evidence supports X?
- What does the book explicitly not claim?
- Which chapter is canonical for X?
- What assumptions apply?
- What alternatives and trade-offs are discussed?

A retrieval answer must preserve epistemic status.

### Mode H — Editorial QA

Check:

- clarity,
- unnecessary repetition,
- transitions,
- audience fit,
- terminology readability,
- excessive abstraction,
- unsupported rhetorical certainty.

Editorial improvement must not silently alter substantive meaning.

## 2. Finding classification

Classify findings as:

- **Critical** — materially threatens correctness, safety, integrity, or the book's central reasoning.
- **Conceptual** — problem in concepts, mechanisms, assumptions, or reasoning.
- **Structural** — problem in architecture, sequencing, duplication, or dependencies.
- **Evidence** — source, provenance, applicability, or evidence-boundary problem.
- **Consistency** — conflict with another canonical statement.
- **Editorial** — clarity or communication problem.
- **Stylistic** — preference-level issue.

Severity is about impact, not how strongly the reviewer dislikes the writing.

## 3. Finding format

Every substantive finding should contain:

- **Location**
- **Finding**
- **Why it matters**
- **Evidence / basis**
- **Recommended action**
- **Confidence**
- **Related canonical concept or claim**, when applicable

Do not invent evidence for a finding.

## 4. QA sequence

For a mature book, use this order:

1. Structural
2. Conceptual
3. Evidence
4. Terminology
5. Cross-Chapter
6. Red-Team
7. Retrieval
8. Editorial
9. Release

Early drafts may use a lighter subset.

## 5. Contradiction protocol

When two passages appear to conflict:

1. Identify the exact statements.
2. Determine whether they actually refer to the same scope.
3. Compare definitions and assumptions.
4. Check whether one is descriptive and the other prescriptive.
5. Check version/date/jurisdiction where relevant.
6. Identify the canonical location.
7. Resolve explicitly.
8. Do not silently choose one interpretation.

## 6. Evidence challenge protocol

When a claim appears insufficiently supported:

1. State the claim precisely.
2. Determine the required evidence type.
3. Check whether existing evidence actually supports it.
4. Identify the evidence boundary.
5. Search for counterevidence when appropriate.
6. Mark the claim as unsupported, qualified, or adequately supported.
7. Do not manufacture certainty.

## 7. Retrieval test protocol

Create representative questions from several categories:

- definition,
- mechanism,
- comparison,
- application,
- failure,
- evidence,
- boundary,
- decision.

For each answer verify:

- canonical location,
- supporting evidence,
- epistemic status,
- assumptions,
- scope,
- cross-references.

The test passes only when retrieval preserves meaning rather than merely finding matching words.

## 8. AI response discipline

When answering questions from a book, distinguish:

**Book says → Evidence shows → Inference → Recommendation**

If the book does not establish an answer, say so.

Do not silently substitute general model knowledge for book knowledge in handbook-only mode.

## 9. QA does not equal authorship

QA may identify defects and propose changes.

It should not silently rewrite substantive conclusions, change the thesis, alter domain assumptions, or introduce new evidence without recording the change.

Material changes should be reviewed as editorial or authorial decisions.

## 10. Release gate

A book is ready for release only when:

- critical findings are resolved or explicitly accepted,
- central concepts are stable,
- important claims have appropriate evidence,
- terminology is consistent,
- major cross-chapter conflicts are resolved,
- red-team review has been performed,
- retrieval tests work,
- editorial review is complete,
- known limitations are recorded.

No QA protocol makes a book infallible. It makes defects more visible and decisions more traceable.
