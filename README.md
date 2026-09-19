# Book OS

A reusable operating system for designing, researching, writing, reviewing, and maintaining high-quality books.

Book OS is **domain-independent**. It carries forward thinking discipline, epistemic standards, evidence hygiene, knowledge architecture, editorial quality, retrieval, and quality gates—not the content or structure of any particular book.

---

## 🇮🇩 Panduan Penggunaan — Bahasa Indonesia

### 1. Apa itu Book OS?

Book OS adalah **sistem kerja untuk membuat buku**, bukan template isi buku.

Ia membantu AI dan penulis menjaga:

- cara berpikir dan reasoning;
- disiplin epistemik;
- kualitas dan batas evidence;
- arsitektur knowledge;
- canonical terminology;
- konsistensi antarbagian;
- kualitas editorial;
- retrieval dan navigasi pengetahuan;
- review, red-team, dan quality gates;
- workflow AI dan repository.

Prinsip utamanya:

> **Warisi sistem berpikir dan standar kualitasnya. Bangun isi dan struktur baru berdasarkan domain baru.**

Book OS **tidak menentukan topik buku, kesimpulan, atau struktur chapter secara otomatis**.

---

### 2. Kapan Book OS digunakan?

Gunakan Book OS ketika memulai **buku baru** atau proyek pengetahuan yang cukup besar.

Book OS dirancang agar satu sistem yang sama dapat digunakan untuk buku dengan:

- domain berbeda;
- bahasa berbeda;
- target pembaca berbeda;
- gaya berbeda;
- tingkat kedalaman berbeda;
- kebutuhan evidence berbeda.

Bahasa dan style dapat diubah kemudian tanpa mengubah knowledge model.

---

### 3. Siapkan repository buku baru

Buat repository terpisah untuk setiap buku.

Contoh:

```text
my-new-book/
├── docs/
├── research/
├── chapters/
├── reviews/
└── README.md
```

Kemudian masukkan Book OS sebagai operating model proyek tersebut, misalnya dengan membaca repository Book OS terlebih dahulu.

Book OS sendiri memiliki struktur:

```text
book-os/
├── core/       # aturan berpikir dan standar canonical
├── workflow/   # cara AI dan manusia bekerja
├── templates/  # template kerja
├── schemas/    # knowledge/schema bila diperlukan
├── docs/       # dokumentasi VitePress
└── README.md
```

---

### 4. Mulai session AI dengan Bootstrap

Jangan langsung meminta AI menulis Chapter 1.

Mulai dengan instruksi konseptual:

> **Bootstrap this book project using Book OS. Read the Book OS operating model first. Do not start Chapter 1.**

AI kemudian harus:

1. membaca Book OS;
2. memahami aturan dan quality gates;
3. tidak mengimpor isi domain dari buku sebelumnya;
4. mengidentifikasi bahwa ini adalah buku baru;
5. menjalankan **Book Intake**.

Referensi utama:

- `workflow/bootstrap-protocol.md`
- `workflow/ai-repository-operating-model.md`

---

### 5. Lakukan Book Intake

Pada tahap ini AI mewawancarai penulis mengenai:

- Book Identity;
- central problem;
- thesis;
- target audience;
- reader outcomes;
- core questions;
- purpose;
- scope;
- out of scope;
- language;
- tone/style;
- depth;
- knowledge horizon;
- evidence expectations;
- intended use.

Gunakan template:

```text
templates/book-intake.md
```

**Jangan memaksakan jawaban yang belum diketahui.**

Jika thesis, audience, scope, atau evidence strategy belum cukup jelas, tandai sebagai unresolved/unknown dan lanjutkan klarifikasi.

---

### 6. Bangun Book Foundation

Setelah intake cukup kuat, bangun foundation dengan urutan:

```text
Book Thesis
    ↓
Audience
    ↓
Reader Outcomes
    ↓
Core Questions
    ↓
Knowledge Domains
    ↓
Conceptual Model
    ↓
Book Architecture
    ↓
Chapter Map
    ↓
Cross-Chapter Dependencies
    ↓
Evidence Strategy
    ↓
Quality Strategy
    ↓
Retrieval Strategy
```

Gunakan:

```text
templates/book-foundation.md
```

Pada tahap ini belum perlu menulis chapter secara lengkap.

Tujuannya adalah memastikan **apa yang hendak diketahui pembaca, mengapa pengetahuan itu diperlukan, dan bagaimana pengetahuan tersebut akan disusun**.

---

### 7. Bangun Knowledge Architecture

Identifikasi pengetahuan utama yang akan membentuk buku:

- Concept;
- Claim;
- Evidence;
- Source;
- Case;
- Question;
- Framework;
- Example;
- Counterexample;
- Cross-reference.

Tentukan pula **canonical ownership**.

Satu konsep penting sebaiknya memiliki satu canonical home.

Gunakan:

```text
core/knowledge-architecture.md
core/canonical-ownership.md
templates/canonical-ownership.md
```

---

### 8. Tetapkan Terminology Foundation

Sebelum banyak chapter ditulis, tetapkan istilah penting.

Untuk konsep penting, jelaskan:

- canonical meaning;
- scope;
- non-meaning;
- related terms;
- common confusion;
- assumptions/boundaries;
- canonical location.

Tujuannya mencegah satu istilah memiliki arti berbeda di chapter berbeda.

Gunakan:

```text
core/terminology.md
```

---

### 9. Tetapkan Evidence Strategy

Untuk setiap claim penting, gunakan alur:

```text
Question
  ↓
Claim / Decision
  ↓
Evidence Requirement
  ↓
Source
  ↓
Evidence Assessment
  ↓
Interpretation
  ↓
Implication
```

Bedakan dengan jelas:

- Fact;
- Empirical finding;
- Definition;
- Causal claim;
- Forecast;
- Interpretation;
- Inference;
- Recommendation;
- Unknown.

Dan selalu perhatikan:

- source identity;
- version/date;
- jurisdiction/population;
- scope;
- evidence strength;
- evidence boundary;
- limitations;
- counterevidence.

AI boleh membantu mencari dan menganalisis sumber, tetapi **output AI bukan evidence**.

Referensi:

```text
core/evidence.md
workflow/research-and-evidence.md
templates/evidence-review.md
```

---

### 10. Rancang Chapter sebelum menulisnya

Setiap chapter sebaiknya memiliki tanggung jawab yang jelas.

Gunakan:

```text
templates/chapter-brief.md
```

Pertanyaan minimum:

1. Apa pertanyaan utama chapter?
2. Apa kemampuan pembaca yang harus meningkat?
3. Konsep apa yang canonical di chapter ini?
4. Apa yang hanya diterapkan atau dirujuk?
5. Evidence apa yang diperlukan?
6. Apa asumsi dan batasannya?
7. Apa trade-off dan failure mode?
8. Ke chapter mana pembaca perlu diarahkan?

Baru setelah itu lakukan drafting.

---

### 11. Tulis dengan reasoning backbone

Untuk materi yang bersifat analitis atau decision-oriented, gunakan:

```text
Problem
→ Objective
→ Requirement
→ Constraint
→ Assumption
→ Mechanism
→ Alternative
→ Evidence
→ Trade-off
→ Failure Mode
→ Validation
→ Judgment
→ Action / Recommendation
```

Tidak semua bagian harus muncul secara mekanis di setiap section.

Prinsipnya:

> **Mechanism before Judgment.**

Jangan langsung mengatakan sesuatu adalah "best practice" tanpa menjelaskan mekanisme, kondisi, evidence, dan batasannya.

---

### 12. Gunakan dua mode membaca

Book OS mendukung:

**Learning Mode**

Untuk pembaca yang ingin memahami konsep secara bertahap.

**Retrieval / Advisory Mode**

Untuk pembaca yang ingin menjawab pertanyaan tertentu dengan cepat.

Retrieval sebaiknya membantu pembaca menemukan **canonical knowledge**, bukan membuat salinan definisi yang berpotensi berbeda.

Gunakan:

```text
core/retrieval.md
```

---

### 13. Lakukan review secara bertahap

Jangan hanya melakukan proofreading di akhir.

Gunakan review:

1. Structural Review
2. Conceptual Review
3. Evidence Review
4. Terminology Review
5. Cross-Chapter Review
6. Red-Team Review
7. Retrieval Review
8. Editorial Review
9. Release Review

Prioritas perbaikan:

```text
Critical defect
→ Conceptual
→ Structural
→ Evidence
→ Consistency
→ Editorial
→ Stylistic
```

Gunakan:

```text
core/quality-gates.md
workflow/ai-quality-assurance.md
templates/review-record.md
```

---

### 14. Gunakan Red-Team

Untuk claim atau kesimpulan penting, secara aktif cari:

- counterexample;
- counterevidence;
- hidden assumption;
- alternative explanation;
- boundary condition;
- failure mode;
- unintended consequence.

Tujuannya bukan membuat buku selalu skeptis, tetapi mencegah **overclaiming**.

---

### 15. Simpan keputusan penting

Jika ada keputusan arsitektur, editorial, terminology, evidence, atau workflow yang memiliki konsekuensi luas, buat decision record.

Gunakan:

```text
templates/decision-record.md
```

Minimal:

- Decision;
- Context;
- Options;
- Chosen Approach;
- Reason;
- Trade-offs;
- Assumptions;
- What Would Change the Decision.

---

### 16. Gunakan Git secara disiplin

Untuk perubahan penting:

1. baca source of truth;
2. buat perubahan kecil;
3. review diff;
4. jalankan validation;
5. build dokumentasi;
6. commit dengan tujuan yang jelas;
7. review;
8. merge.

Hindari satu commit besar yang mencampur:

- perubahan content;
- perubahan architecture;
- formatting;
- workflow;
- unrelated fixes.

Lihat:

```text
workflow/repository-contribution-guide.md
```

---

### 17. Build dokumentasi Book OS

Jika mengembangkan Book OS sendiri:

```bash
npm install
npm run docs:dev
```

Buka local documentation server yang diberikan VitePress.

Untuk production build:

```bash
npm run docs:build
```

Untuk preview hasil build:

```bash
npm run docs:preview
```

---

### 18. Bahasa dan style dapat ditambahkan kemudian

Book OS memisahkan **knowledge layer** dari **presentation layer**.

Artinya Anda dapat:

1. menyelesaikan knowledge system dalam Bahasa Indonesia;
2. melakukan review dan stabilisasi;
3. menerjemahkan ke English atau bahasa lain;
4. melakukan semantic translation QA;
5. menyesuaikan style untuk audience yang berbeda.

Yang tidak boleh berubah diam-diam ketika menerjemahkan:

- claim strength;
- uncertainty;
- scope;
- assumptions;
- causal direction;
- modality;
- evidence boundary;
- recommendation boundary;
- canonical terminology relationships.

Lihat:

```text
core/language-and-style.md
templates/language-style-profile.md
```

---

### 19. Sebelum release, lakukan final validation

Pastikan:

- core questions terjawab;
- canonical concepts konsisten;
- terminology tidak drift;
- claim penting memiliki evidence yang sesuai;
- uncertainty dinyatakan;
- counterevidence dipertimbangkan;
- cross-reference bekerja;
- retrieval dapat menemukan knowledge yang benar;
- tidak ada contradiction penting;
- style tidak mengubah semantic meaning.

Kemudian buat release record:

```text
templates/release-record.md
```

---

### 20. Setelah release, Book OS tetap hidup

Buku bukan knowledge system yang selesai selamanya.

Review kembali ketika:

- evidence berubah;
- standar/regulasi berubah;
- terminology berubah;
- recommendation menjadi obsolete;
- chapter baru menimbulkan contradiction;
- retrieval tidak lagi menemukan knowledge yang tepat.

Tujuannya adalah **maintainable knowledge**, bukan sekadar published text.

---

## 🇬🇧 Usage Guide — English

### 1. What is Book OS?

Book OS is an **operating system for creating books**, not a content template.

It helps authors and AI maintain:

- reasoning discipline;
- epistemic standards;
- evidence boundaries;
- knowledge architecture;
- canonical terminology;
- cross-chapter consistency;
- editorial quality;
- retrieval and navigation;
- review, red-team, and quality gates;
- AI and repository workflow.

The governing principle is:

> **Inherit the system of thinking and quality standards. Build new content and structure from the new domain.**

Book OS does **not** determine the book's topic, conclusions, or chapter structure automatically.

---

### 2. When should Book OS be used?

Use Book OS when starting a **new book** or a substantial knowledge project.

The same operating model can support books with different:

- domains;
- languages;
- audiences;
- styles;
- depths;
- evidence requirements.

Language and style can change later without changing the underlying knowledge model.

---

### 3. Set up a separate book repository

Create a separate repository for each book.

Example:

```text
my-new-book/
├── docs/
├── research/
├── chapters/
├── reviews/
└── README.md
```

Use Book OS as the operating model for that repository.

The Book OS repository itself is organized as:

```text
book-os/
├── core/       # canonical thinking and quality standards
├── workflow/   # how AI and humans operate
├── templates/  # reusable working templates
├── schemas/    # knowledge/schema definitions when justified
├── docs/       # VitePress documentation
└── README.md
```

---

### 4. Start the AI session with Bootstrap

Do not immediately ask the AI to write Chapter 1.

Start with:

> **Bootstrap this book project using Book OS. Read the Book OS operating model first. Do not start Chapter 1.**

The AI should then:

1. read Book OS;
2. understand its rules and quality gates;
3. avoid importing domain-specific content from another book;
4. recognize this as a new book;
5. run the **Book Intake**.

Primary references:

- `workflow/bootstrap-protocol.md`
- `workflow/ai-repository-operating-model.md`

---

### 5. Run the Book Intake

The AI should interview the author about:

- Book Identity;
- central problem;
- thesis;
- target audience;
- reader outcomes;
- core questions;
- purpose;
- scope;
- out of scope;
- language;
- tone/style;
- depth;
- knowledge horizon;
- evidence expectations;
- intended use.

Use:

```text
templates/book-intake.md
```

Do not invent answers that are not known yet.

If the thesis, audience, scope, or evidence strategy is not sufficiently clear, mark it as unresolved/unknown and continue clarification.

---

### 6. Build the Book Foundation

Once intake is sufficiently clear, build the foundation in this order:

```text
Book Thesis
    ↓
Audience
    ↓
Reader Outcomes
    ↓
Core Questions
    ↓
Knowledge Domains
    ↓
Conceptual Model
    ↓
Book Architecture
    ↓
Chapter Map
    ↓
Cross-Chapter Dependencies
    ↓
Evidence Strategy
    ↓
Quality Strategy
    ↓
Retrieval Strategy
```

Use:

```text
templates/book-foundation.md
```

Do not write complete chapters yet.

The purpose is to establish **what the reader needs to understand, why it matters, and how the knowledge will be organized**.

---

### 7. Build the Knowledge Architecture

Identify the major knowledge objects:

- Concept;
- Claim;
- Evidence;
- Source;
- Case;
- Question;
- Framework;
- Example;
- Counterexample;
- Cross-reference.

Establish **canonical ownership**.

An important concept should normally have one canonical home.

Use:

```text
core/knowledge-architecture.md
core/canonical-ownership.md
templates/canonical-ownership.md
```

---

### 8. Establish the Terminology Foundation

Before writing many chapters, establish important terms.

For important concepts, define:

- canonical meaning;
- scope;
- non-meaning;
- related terms;
- common confusion;
- assumptions/boundaries;
- canonical location.

This prevents terminology drift across chapters.

Use:

```text
core/terminology.md
```

---

### 9. Establish the Evidence Strategy

For important claims, use:

```text
Question
  ↓
Claim / Decision
  ↓
Evidence Requirement
  ↓
Source
  ↓
Evidence Assessment
  ↓
Interpretation
  ↓
Implication
```

Distinguish:

- Fact;
- Empirical finding;
- Definition;
- Causal claim;
- Forecast;
- Interpretation;
- Inference;
- Recommendation;
- Unknown.

Track:

- source identity;
- version/date;
- jurisdiction/population;
- scope;
- evidence strength;
- evidence boundary;
- limitations;
- counterevidence.

AI may assist research, but **AI output is not evidence**.

References:

```text
core/evidence.md
workflow/research-and-evidence.md
templates/evidence-review.md
```

---

### 10. Design each chapter before drafting it

Each chapter should have a clear responsibility.

Use:

```text
templates/chapter-brief.md
```

Minimum questions:

1. What is the chapter's main question?
2. What reader capability should improve?
3. Which concepts are canonical here?
4. Which concepts are only applied or referenced?
5. What evidence is required?
6. What are the assumptions and boundaries?
7. What are the trade-offs and failure modes?
8. Where should the reader go next?

Then draft the chapter.

---

### 11. Use the reasoning backbone

For analytical or decision-oriented material:

```text
Problem
→ Objective
→ Requirement
→ Constraint
→ Assumption
→ Mechanism
→ Alternative
→ Evidence
→ Trade-off
→ Failure Mode
→ Validation
→ Judgment
→ Action / Recommendation
```

This is a reasoning backbone, not a mandatory section template.

The key principle is:

> **Mechanism before Judgment.**

Do not call something a "best practice" without explaining its mechanism, conditions, evidence, and limitations.

---

### 12. Support two reading modes

Book OS supports:

**Learning Mode**

For readers who want to understand concepts progressively.

**Retrieval / Advisory Mode**

For readers who need a specific answer quickly.

Retrieval should point readers toward **canonical knowledge**, rather than creating competing definitions.

Use:

```text
core/retrieval.md
```

---

### 13. Review continuously

Do not wait until the end for proofreading.

Use:

1. Structural Review
2. Conceptual Review
3. Evidence Review
4. Terminology Review
5. Cross-Chapter Review
6. Red-Team Review
7. Retrieval Review
8. Editorial Review
9. Release Review

Fix in this order:

```text
Critical defect
→ Conceptual
→ Structural
→ Evidence
→ Consistency
→ Editorial
→ Stylistic
```

References:

```text
core/quality-gates.md
workflow/ai-quality-assurance.md
templates/review-record.md
```

---

### 14. Use Red-Team review

For important claims and conclusions, actively look for:

- counterexamples;
- counterevidence;
- hidden assumptions;
- alternative explanations;
- boundary conditions;
- failure modes;
- unintended consequences.

The purpose is to prevent **overclaiming**.

---

### 15. Record important decisions

For decisions with broad editorial, architectural, terminology, evidence, or workflow consequences, create a decision record.

Use:

```text
templates/decision-record.md
```

Minimum fields:

- Decision;
- Context;
- Options;
- Chosen Approach;
- Reason;
- Trade-offs;
- Assumptions;
- What Would Change the Decision.

---

### 16. Use Git deliberately

For material changes:

1. read the source of truth;
2. make a small change;
3. review the diff;
4. run validation;
5. build documentation;
6. commit with a clear purpose;
7. review;
8. merge.

Avoid mixing unrelated changes into one commit.

See:

```text
workflow/repository-contribution-guide.md
```

---

### 17. Build the Book OS documentation

When developing Book OS itself:

```bash
npm install
npm run docs:dev
```

For a production build:

```bash
npm run docs:build
```

For a local preview:

```bash
npm run docs:preview
```

---

### 18. Add language and style later if needed

Book OS separates the **knowledge layer** from the **presentation layer**.

A practical workflow can therefore be:

1. complete the knowledge system in Indonesian;
2. review and stabilize it;
3. translate it into English or another language;
4. perform semantic translation QA;
5. adapt style for the target audience.

Translation must not silently change:

- claim strength;
- uncertainty;
- scope;
- assumptions;
- causal direction;
- modality;
- evidence boundaries;
- recommendation boundaries;
- canonical terminology relationships.

See:

```text
core/language-and-style.md
templates/language-style-profile.md
```

---

### 19. Run final validation before release

Verify that:

- core questions are answered;
- canonical concepts remain consistent;
- terminology has not drifted;
- important claims have appropriate evidence;
- uncertainty is explicit;
- counterevidence has been considered;
- cross-references work;
- retrieval finds the correct knowledge;
- important contradictions are resolved;
- style does not change semantic meaning.

Then create a release record:

```text
templates/release-record.md
```

---

### 20. Maintain the book after release

A book is not necessarily a permanently finished knowledge system.

Revisit it when:

- evidence changes;
- standards/regulations change;
- terminology changes;
- recommendations become obsolete;
- new chapters create contradictions;
- retrieval no longer finds the correct knowledge.

The goal is **maintainable knowledge**, not merely published text.

---

## Documentation Site

The repository is documented and published with **VitePress**.

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

---

## Repository Model

- `core/` — philosophy, epistemic model, reasoning, knowledge architecture, evidence, terminology, retrieval, quality gates
- `workflow/` — AI + repository operating model, research/writing/review lifecycle, Git discipline, release and maintenance
- `templates/` — reusable book foundation, chapter, evidence, decision and review templates
- `schemas/` — machine-readable metadata/knowledge schemas when justified
- `docs/` — VitePress documentation and rationale

---

## Quick Start

If you only need the shortest possible workflow:

```text
1. Create a new book repository
2. Read Book OS
3. Bootstrap
4. Run Book Intake
5. Build Book Foundation
6. Build Knowledge Architecture
7. Establish Terminology + Evidence Strategy
8. Design Chapter Map
9. Draft
10. Integrate
11. Review + Red-Team
12. Validate Retrieval
13. Release
14. Maintain
```

**Do not start with Chapter 1 merely because the user asks for a book.**

---

## Governing Principle

> **Inherit the system of thinking and quality standards. Build new content and structure from the new domain.**
