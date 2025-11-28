import './style.css'

const sections = [
  {
    title: 'Conversational blueprints',
    content:
      'Describe the product, UX vibe, and data model. Vibe Coding drafts a Claude-ready build plan and Supabase schema tailored to your stack.',
  },
  {
    title: 'Instant scaffolding',
    content:
      'Generate frontend, backend, and automation snippets that you can paste directly into your repo. No boilerplate drift or guessing.',
  },
  {
    title: 'One-click deploys',
    content:
      'Ship to a free staging domain or wire up your custom domain. Vibe Coding keeps auth, storage, and migrations in sync with Supabase.',
  },
]

const steps = [
  {
    label: '01',
    title: 'Describe your idea',
    detail: 'Chat the vibe, features, and integrations you want. Include brand notes, target devices, and data contracts.',
  },
  {
    label: '02',
    title: 'Generate & refine',
    detail: 'Claude delivers UI flows, API routes, and Supabase tables. Iterate in natural language—no manual wiring.',
  },
  {
    label: '03',
    title: 'Publish anywhere',
    detail: 'Deploy to a free preview domain or connect your own. Build hooks keep PR previews and production in step.',
  },
]

const resources = [
  {
    title: 'Starter prompt',
    body: `"Build a bookings web app with dark neon vibe. Auth via Supabase, calendar sync, paid upgrades, and a custom domain."`,
  },
  {
    title: 'Supabase-ready schema',
    body: 'Vibe Coding outputs tables, policies, and edge functions you can apply with one CLI command.',
  },
  {
    title: 'Deployment checklist',
    body: 'DNS wiring, SSL, environment keys, and health checks—auto-generated for every build.',
  },
]

const codeSample = `// Claude-generated endpoint
app.post('/api/v1/projects', verifyAuth, async (req, res) => {
  const project = await supabase
    .from('projects')
    .insert({
      name: req.body.name,
      status: 'draft',
      domain: req.body.domain,
    })
    .select()
    .single()

  return res.json({ project })
})`

document.querySelector('#app').innerHTML = `
  <div class="page">
    <header class="hero">
      <div class="eyebrow">Vibe Coding</div>
      <h1>Ship full-stack web apps with Claude + Supabase</h1>
      <p class="lede">
        Describe the vibe, get production-ready scaffolding, and publish to a free preview or your own domain.
        Zero boilerplate drift. Real-time Supabase alignment.
      </p>
      <div class="cta-row">
        <button class="primary">Start a build session</button>
        <button class="ghost">See deployment options</button>
      </div>
      <div class="hero-note">Powered by Claude orchestration, Supabase primitives, and seamless domain wiring.</div>
    </header>

    <section class="panel grid">
      ${sections
        .map(
          (section) => `
            <article class="card">
              <h3>${section.title}</h3>
              <p>${section.content}</p>
            </article>
          `,
        )
        .join('')}
    </section>

    <section class="panel stack">
      <div class="section-head">
        <div>
          <p class="eyebrow">Workflow</p>
          <h2>Design, generate, and deploy in minutes</h2>
          <p class="muted">Every step keeps Claude prompts, Supabase schema, and your domain configuration in sync.</p>
        </div>
        <button class="ghost small">View a sample project</button>
      </div>
      <div class="step-grid">
        ${steps
          .map(
            (step) => `
              <div class="step">
                <div class="chip">${step.label}</div>
                <div>
                  <h4>${step.title}</h4>
                  <p>${step.detail}</p>
                </div>
              </div>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="panel layout">
      <div class="content">
        <p class="eyebrow">Deploy with confidence</p>
        <h2>Custom domains and free previews built-in</h2>
        <p class="muted">
          Launch to a free SSL-enabled preview or connect your domain with guided DNS steps. Each deployment keeps Supabase migrations and edge functions aligned.
        </p>
        <ul class="list">
          <li>Zero-downtime rollouts with health checks and rollback plans.</li>
          <li>Automated Supabase secrets sync for preview and production.</li>
          <li>Branch-based previews for stakeholder signoff.</li>
        </ul>
        <div class="cta-row">
          <button class="primary">Launch to preview</button>
          <button class="ghost">Connect a domain</button>
        </div>
      </div>
      <div class="code-block">
        <div class="code-head">Claude + Supabase</div>
        <pre><code>${codeSample}</code></pre>
      </div>
    </section>

    <section class="panel resources">
      <div class="section-head">
        <div>
          <p class="eyebrow">Ready to run</p>
          <h2>Copy-paste assets for your next build</h2>
        </div>
        <button class="ghost small">Download starter kit</button>
      </div>
      <div class="resource-grid">
        ${resources
          .map(
            (resource) => `
              <article class="resource-card">
                <h4>${resource.title}</h4>
                <p>${resource.body}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  </div>
`
