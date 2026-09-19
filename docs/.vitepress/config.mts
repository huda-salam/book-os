import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Book OS',
  description: 'A reusable operating system for building high-quality books.',
  base: '/book-os/',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/core/principles' },
      { text: 'Workflow', link: '/workflow/ai-repository-operating-model' },
      { text: 'Templates', link: '/templates/' }
    ],
    sidebar: {
      '/core/': [{
        text: 'Core',
        items: [
          { text: 'Principles', link: '/core/principles' },
          { text: 'Epistemic Model', link: '/core/epistemic-model' },
          { text: 'Reasoning Model', link: '/core/reasoning' },
          { text: 'Knowledge Architecture', link: '/core/knowledge-architecture' },
          { text: 'Canonical Ownership', link: '/core/canonical-ownership' },
          { text: 'Evidence Architecture', link: '/core/evidence' },
          { text: 'Terminology', link: '/core/terminology' },
          { text: 'Retrieval', link: '/core/retrieval' },
          { text: 'Quality Gates', link: '/core/quality-gates' },
          { text: 'Governance', link: '/core/governance' },
          { text: 'Language & Style', link: '/core/language-and-style' }
        ]
      }],
      '/workflow/': [{
        text: 'Workflow',
        items: [
          { text: 'AI & Repository Operating Model', link: '/workflow/ai-repository-operating-model' },
          { text: 'AI Quality Assurance', link: '/workflow/ai-quality-assurance' },
          { text: 'Bootstrap Protocol', link: '/workflow/bootstrap-protocol' },
          { text: 'Research & Evidence', link: '/workflow/research-and-evidence' },
          { text: 'Book Development Lifecycle', link: '/workflow/book-development-lifecycle' },
          { text: 'AI Operating Commands', link: '/workflow/ai-operating-commands' },
          { text: 'Repository Contribution Guide', link: '/workflow/repository-contribution-guide' },
          { text: 'Book OS Self-Review', link: '/workflow/book-os-self-review' }
        ]
      }],
      '/schemas/': [{
        text: 'Schemas',
        items: [{ text: 'Knowledge Model', link: '/schemas/' }]
      }],
      '/templates/': [{
        text: 'Templates',
        items: [
          { text: 'Overview', link: '/templates/' },
          { text: 'Book Intake', link: '/templates/book-intake' },
          { text: 'Book Foundation', link: '/templates/book-foundation' },
          { text: 'Chapter Brief', link: '/templates/chapter-brief' },
          { text: 'Evidence Review', link: '/templates/evidence-review' },
          { text: 'Decision Record', link: '/templates/decision-record' },
          { text: 'Review Record', link: '/templates/review-record' },
          { text: 'Release Record', link: '/templates/release-record' },
          { text: 'Language & Style Profile', link: '/templates/language-style-profile' },
          { text: 'Development Stage', link: '/templates/book-development-stage' },
          { text: 'Canonical Ownership', link: '/templates/canonical-ownership' },
          { text: 'AI Operation Record', link: '/templates/ai-operation-record' },
          { text: 'Contribution Record', link: '/templates/contribution-record' },
          { text: 'Book OS Self-Review', link: '/templates/book-os-self-review' }
        ]
      }]
    }
  }
})
