import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Book OS',
  description: 'A reusable operating system for building high-quality books.',
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
          { text: 'Evidence Architecture', link: '/core/evidence' },
          { text: 'Terminology', link: '/core/terminology' },
          { text: 'Retrieval', link: '/core/retrieval' },
          { text: 'Quality Gates', link: '/core/quality-gates' }
        ]
      }],
      '/workflow/': [{
        text: 'Workflow',
        items: [
          { text: 'AI & Repository Operating Model', link: '/workflow/ai-repository-operating-model' }
        ]
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
          { text: 'Release Record', link: '/templates/release-record' }
        ]
      }]
    }
  }
})
