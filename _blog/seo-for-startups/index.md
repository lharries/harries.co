---
title: SEO for startups
date: "2024-11-24T11:22:36"
description: "This is the guide I wish I had when learning about SEO. It covers the three main pillars of SEO — understanding the user's intent, solving the user's intent, and getting your pages ranking."
category: guide
highlight: true
---

Billions of people use Google search each day. They type in what they want and are shown the most relevant links. If you are doing SEO right, one of these links will be yours, and users will be funneled to your site. SEO works for us at [ElevenLabs](https://elevenlabs.io), and many other top sites like [Zapier](https://zapier.com), [Wise](https://wise.com), and [Veed](https://veed.io).

SEO requires more patience and a longer-term view than performance-focused channels like Google ads and Meta ads. But because of this, it is more defensible. As a founder or head of growth, once you've started to feel PMF, accumulated your first ~100 backlinks through launching, and have confidence in your direction — it's worth investing in.

There are three main pillars of SEO which are all related:

1. Understanding what the user intent is
2. Solving the user's intent
3. Getting the pages to rank

This is the guide I wish I had when learning about SEO. We'll cover the most important parts of all these pillars.

## Pillar 1: Understanding the user's intent

It starts with understanding which users you want to acquire. You should define the personas of customers you want to acquire and understand their search journey. This normally follows a funnel from awareness to consideration and selection. For each persona, map out the potential topics for each stage.

### Keyword research

We take these personas, stages, and topics and iterate them based on real keyword search data. Use a tool like SEMRush or Ahrefs for this. Build a Google sheet with columns for persona, stage, topic, and keyword. Add in search volume and competition. We then want to expand this list in several ways:

- Analyze competitor sites for what keywords rank the highest for them (use keyword overview in SEMRush)
- Find related keywords to what you've identified (use keyword magic in SEMRush)
- Use Google autocomplete suggestions (type in a keyword in the Google search box and then see what the suggestions are)

### Long-tail keywords vs high-value words

You can bucket the keywords into high-value keywords and long-tail keywords. You want to do both. They need different approaches to solve them, which we will discuss in Pillar 2.

### How to know which keywords to focus on?

To know which topics to focus on, first target the most valuable personas, high volume, bottom of funnel, and low competition. And then step out through the matrix to less valuable topics. Don't get stuck in paralysis; instead, move quickly and learn what works and delivers value.

### Topics and keywords aren't static

Topics and keywords aren't static. Your personas change. New product features will be introduced. News events trigger a sudden new creation of a topic. And longer-term trends shift the search terms. Re-run this analysis every few months.

## Pillar 2: Solving the user intent

Once you know which topics and keywords you want to show up in, you now need to solve the user's intent by creating pages.

The pages can be divided into:

- The type of the page: is it a landing page in design, a mini-tool, or an article
- How the page is created: bespoke for that topic, generated programmatically, or produced at scale with outsourced writers

### Page type

To understand what type of page to produce, look up the topics and see what style of page ranks best and use a product lens to think what would be best suited for the user. If it's a mini-tool ranking too, you should build a mini-tool. Later on, you might want to create several different page types for the same topic as Google will often want to show several different types.

### Programmatic SEO pages

How the page is created is largely determined by whether it's a high-value keyword or a long-tail keyword. If it's a high-value keyword, you'll likely want to start with a bespoke page - although you might later scale this up programmatically.

By programmatic pages, I don't mean large-scale AI-generated rubbish. Although this might rank now, there's a good chance you'll be downranked in the future. Instead, you should leverage a data asset or mini-tool to keep the core usefulness of the page high. You can use code, LLMs, and people to scale it up, but by exposing a fundamentally useful data asset or tool, you'll be much more likely to create a useful page and solve the user's intent.

![Currency converter SEO pages from Wise. Programmatically generated with a mini-tool.](/blog/seo-for-startups/programmatic-seo-example-wise.png)

_Currency converter SEO pages from Wise. Programmatically generated with a mini-tool. There's a large combination of pages created leveraging the same calculator with different currency pairs._

### Scaling SEO articles

Your choice between in-house writers and contractors should depend on your target quality and quantity. Low-quality content will have three negative impacts: it damages your brand, reduces your chances of ranking well, and decreases the likelihood of content being shared. Consider using a mixed approach based on keyword value.

For contractor management, we've found success with an in-house editor overseeing a pool of Upwork contractors. Don't hesitate to cycle through contractors quickly if their quality doesn't meet your standards. For specialized topics like healthcare, consider hiring contractors with relevant credentials (such as medical degrees) to ensure proper authority and trust.

Bonus tip: Try viewing your operation as a media company rather than just an SEO engine. This content-first mindset encourages you to consider multiple traffic sources—social media, sales team resources, and other channels—rather than viewing content as merely SEO fodder. This approach naturally pushes quality higher and creates more valuable assets for your company.

### Balancing SEO and conversion

When creating pages, you'll need to balance SEO and conversion. You should start by optimizing for solving intent (even if that means no paywalls, login-gates) and iterate on the structure to drive conversion without losing the ranking.

### Treating your pages as a product

Treat your pages like a product. Get ideas from competitive pages, speaking to users, what the best in class are doing, then ruthlessly ship useful features and content.

### Content architecture

Another key consideration when creating pages is how they fit into your broader content architecture. The most effective SEO strategies organize content into pillar pages and supporting clusters. A pillar page comprehensively covers a broad topic that's important to your business, while cluster content dives deep into specific aspects of that topic.

For example, if you run a payment platform, your pillar page might cover "International Money Transfers" broadly, with cluster content addressing specific topics like exchange rates, transfer fees, country-specific guides, and payment methods. Each piece of cluster content links back to the pillar and to related cluster content, creating a tight network of topically related pages.

## Pillar 3: Getting your pages ranking

After understanding what search intent to solve and creating pages to solve it, you will need the content to actually rank in the search engine results page (SERP). SEO follows a power law with the coveted position #1 having the most traffic.

![The click-through rate by position. Source: Backlinko](/blog/seo-for-startups/google-organic-ctr-breakdown.png)

_The click-through rate by position. [Source](https://backlinko.com/google-ctr-stats)_

Ranking can be divided into three buckets:

- Technical SEO — the technical aspects of your site to ensure you're being indexed and crawled appropriately
- Off-page SEO
  - Site authority and backlinks
  - Topical authority
- On-page SEO
  - Internal linking
  - Keywords for ranking

### Technical SEO

Technical SEO forms the foundation of your site's ability to rank. It ensures Google can properly index your pages (adding them to Google's database) and crawl them (reading and processing their content). While the technical aspects can be complex, focus on these key areas:

1. Core Technical Setup
   - Have a frontend engineer implement the fundamentals using this checklist
   - Run regular SEMRush technical audits to maintain a health score above 92%
   - Fix critical issues immediately, particularly those affecting indexing or site speed
2. Performance Optimization
   - Implement server-side rendering where possible, even though Google can process JavaScript it will speed up crawl time and preserve the crawl budget
   - Minimize your site's crawl budget usage by:
     - Maintaining a clean site structure
     - Eliminating duplicate content
     - Providing clear XML sitemaps
   - Ensure mobile responsiveness and fast page load times
3. Ongoing Maintenance
   - Monitor Core Web Vitals through Google Search Console
   - Regular check for broken links and redirect chains (use Screaming Frog)
   - Keep your robots.txt and sitemap files up to date (ideally programmatically)

### Off-page SEO

#### Site authority and backlinks

Site authority is a score based on how many other high-authority sites are linking to your site. Originally it's based on an algorithm called PageRank.

So how can you get other sites to link to you? We've had the best success by creating great products and then launching them with press support. If your core product is unlikely to get much PR, what other news articles, data sets, or mini-tool launches could you do instead that might get you coverage? For example, [Ramp's spending insights](https://ramp.com/blog/q1-2024-spending-insights).

Here's some other ideas for getting backlinks: collaborate with other companies for case studies, do initiatives such as startup programs/partner programs/educational discounts where you then ask for links to your site. You can leverage backlink programs toward specific high-value pages that you most want to rank.

#### Topical authority

If you have articles that rank well for existing topics, this will increase your probability of ranking for related topics. You can start with more long-tail topics and build up to the high-value topics.

### On-page SEO

#### Internal linking

The network of internal links matters as much as the network of external links. New pages should have 5+ links from existing pages and contain 5+ links to existing pages. The graph of the network should also point heavily toward the high-value pages to indicate these are the key pages to rank.

You can also leverage components to help with including keywords, such as breadcrumbs for landing page styles pages and similar articles blocks for article-type pages.

![Example breadcrumbs from the Tripadvisor site](/blog/seo-for-startups/seo-breadcrumbs-tripadvisor.png)

_Example breadcrumbs from the Tripadvisor site_

#### Keywords for ranking

You should include the relevant keywords for the user's intent. This likely is a combination of intent-specific keywords as well as common additives such as "free" or "online."

You will want to include the keywords as appropriate in the headers, alt text, metadata, body, slug, and external link text to the pages.

#### Have you solved the user intent?

We've covered how to create pages which should solve the user intent. To get them ranking top, Google will use the user journey as guidance - did the user click on your site and stay on it. A proxy metric you have access to is what was the on-page session time both for that page and the site for users coming from Google. You can then optimize this over time as you ship features and content.

## Weekly metric reviews

Successful SEO requires consistent measurement and optimization. Here's how to structure your weekly SEO performance reviews:

1. Core Metrics Review — track these essential metrics through Google Search Console:
   - Overall organic traffic trends
   - Non-branded search performance (excluding your brand terms)
   - Average position for target keywords
   - Click-through rates by page type
   - Indexing status of new pages
2. Segment Analysis — deep dive into specific segments:
   - Performance by country/region
   - High-value keyword rankings
   - Recently launched programmatic pages
   - New content performance
   - Mobile vs. desktop metrics
3. Competitive Context — consider your SEO performance within the broader context:
   - Impact of your paid search campaigns on organic click-through rates
   - Industry trends (using Google Trends data)
   - Competitor ranking changes
   - Seasonal factors affecting performance
4. Action Items — end each review by identifying:
   - Pages needing optimization
   - New content opportunities
   - Technical issues to address
   - Required changes to content strategy

## Bonus: Hiring for SEO

Potential profiles to hire for SEO are:

- "SEOs" — these are people who's main job is SEO optimization. They are great for directing the work but less useful for actual execution
- Frontend engineers with design skills and good enough copy/project management ability
- Excellent writers who can understand your domain

I'd argue that in the early days, you want to start with a driven frontend engineer with some design skills who is keen to learn SEO, as the bulk of the work is in creating great pages that solve user intent. They can also do the execution of getting to table stakes for technical SEO and run the content machine either through contract writers or in-house writers. You can then partner them with an excellent external SEO advisor who can guide what intent to do and give feedback on the pages (but this isn't needed as a full-time job until you're at scale or have a very large number of pages such as running an e-commerce store). Over time, you could transition the content production running to a writer who has interest in this.
