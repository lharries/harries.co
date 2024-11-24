---
title: SEO for startups
date: "2024-11-24T11:22:36"
description: "This is the guide I wish I had when learning about SEO. It covers the three main pillars of SEO — understanding the user's intent, solving the user's intent, and getting your pages ranking."
category: guide
highlight: true
---

# A guide to SEO for startups

Billions of people use google search each day. They say exactly what they want and are shown the most relevant links. If you are doing SEO right one of these links will be yours, and users will be funneled to your site. SEO works for us at [ElevenLabs](https://elevenlabs.io), and many other top sites like [Zapier](https://zapier.com), [Wise](https://wise.com), and [Veed](https://veed.io).

SEO requires more patience and a longer-term view than performance-focused channels like Google ads and Meta ads. But because of this it is more defensible. As a founder or head of growth, once you’ve started to feel PMF, accumulated your first ~100 backlinks through launching and have confidence in your direction — it’s worth investing in.

There’s three main pillars of SEO which are all related:

1. Understanding what the user intent is
2. Solving the user’s intent
3. Getting the pages to rank

This is the guide I wish I had when learning about SEO. We’ll cover the most important parts all these pillars.

## Pillar 1: Understanding the user’s intent

It starts with understanding which users you want to acquire. You should define the personas of customers you want to acquire and understand their search journey. This normally follows a funnel from awareness to consideration and selection. For each persona, map out the potential topics for each stage.

### Keyword research

We take these personas, stages, and topics and iterate them based on real keyword search data. Use a tool like SEMRush or Ahrefs for this. Build a Google sheet with columns for persona, stage, topic, keyword. Add in search volume and competition. We then want to expand this list in several ways:

- Analyze competitor sites for what keywords rank the highest for them (use keyword overview in SEMRush)
- Find related keywords to what you’ve identified (use keyword magic in SEMRush)
- Use Google autocomplete suggestions (type in a keyword in the google search box and then see what the suggestions are)

### Long-tail keywords vs high-value words

You can bucket the keywords into high-value keywords and long-tail keywords. You want to do both. They need different approaches to solve them which we will discuss in Pillar 2.

### How to know which keywords to focus on?

To know which topics to focus on, first target the most valuable personas, high volume, bottom of funnel, low competition. And then step out through the matrix to less valuable topics. Don’t get stuck in paralysis, instead move quickly and learn what works and delivers value.

### Topics and keywords aren’t static

Topics and keywords aren’t static. Your personas change. New product features will be introduced. News events trigger a sudden new creation of a topic. And longer term trends shift the search terms. Re-run this analysis every few months.

## Pillar 2: Solving the user intent

Once you know which topics and keywords you want to show up in, you now need to solve the user’s intent by creating pages.

The pages can be divided into:

- the type of the page: is it a landing page in design, a mini-tool, or an article
- how the page is created: bespoke for that topic, generated programmatically or produced at scale with outsourced writes

### Page type

To understand what type of page to produce, look up the topics and see what style of page ranks best and use a product lens to think what would be best suited for the user. If it’s a minitool ranking too you should build a mini-tool. Later on you might want to create several different page types for the same topic as Google will often want to show several different types.

### Programmatic SEO pages

How the page is created is largely determined by whether it’s a high-value keyword or a long-tail keyword. If it’s a high-value keyword you’ll likely want to start with a bespoke page - although you might later scale this up programmatically.

By programmatic pages I don’t mean large scale AI generated rubbish. Although this might rank now there’s a good chance you’ll be down ranked in the future. Instead, you should leverage a data asset or mini-tool to keep the core usefulness of the page high. You can use code, LLMs and people to scale it up but by exposing a fundamentally useful data asset or tool you’ll be much more likely to create a useful page and solve the users intent.

![Currency converter SEO pages from Wise. Programmatically generated with a mini-tool.](/blog/seo-for-startups/programmatic-seo-example-wise.png)

_Currency converter SEO pages from Wise. Programmatically generated with a mini-tool. There’s large combination of pages created leveraging the same calculator with different currency pairs._

### Scaling SEO articles

For the words, whether you go with in-house writers or contractors will depend on the quality and quantity you are aiming for. Too low quality will have a negative brand impact, less likely to rank, and less likely to be shared. You could do a mix depending on the value of the keywords. For contractors, we’ve seen success with having an in-house editor managing a pool of contractors from Upwork and cycle through them quickly if the quality isn’t high enough. For topics like healthcare you might want very high quality contractors with medical degrees to bring the required trust and authority.

Bonus - when approaching content it can be useful to view the machine as a media company rather than just an SEO engine. As this content first approach makes you consider how to drive traffic from social media, the sales team, and other channels, and pushes the quality higher — rather than viewing it as throwaway content to rank on SEO.

### Balancing SEO and conversion

When creating pages you’ll need to balance SEO and conversion. You should start by optimizing for solving intent (even if that means no paywalls, login-gates) and iterate on the structure to drive conversion without losing the ranking.

### Treating your pages as a product

Treat your pages like a product. Get ideas from competitive pages, speaking to users, what the best in class are doing, then ruthlessly ship useful features and content.

## Pillar 3: Getting your pages ranking

After understanding what search intent to solve and creating pages to solve it, you will need the content to actually rank in the search engine results page (SERP). SEO follows a power law with the coveted position #1 having the most traffic.

![The click-through rate by position. Source: Backlinko](/blog/seo-for-startups/google-organic-ctr-breakdown.png)

The click-through rate by position. [Source](https://backlinko.com/google-ctr-stats)

Ranking can be divided into three buckets:

- Technical SEO — the technical aspects of your site to ensure you’re being indexed and crawled appropriately
- Off-page SEO
  - Site authority and backlinks
  - Topical authority
- On-page SEO
  - Internal linking
  - Keywords for ranking

### Technical SEO

To be indexed (having Google identify your page) and crawled (having Google read and process your page), you need good technical SEO. You shouldn’t boil the ocean here. But you should cover the basics. The best way to do this is have a frontend engineer use [this checklist](https://blog.hubspot.com/marketing/technical-seo-guide). And then maintain strong technical SEO using SemRush audit to identify issues and keep it at 92%.

While Google can render JavaScript, you’ll see improved ranking by using server side rendering and decreasing the effort Google needs to rank your site and reducing the needed crawl budget.

### Off-page SEO

#### Site authority and backlinks

Site authority is a score based on how many other high authority sites are linking to your site. Originally it’s based on an algorithm called PageRank.

So how can you get other sites to link to you? We’ve had the best success by creating great products and then launching them with press support. If your core product is unlikely to get much PR what other news articles, data sets or mini-tool launches could you do instead that might get you coverage? For example, Ramps AI spend article.

Here’s some other ideas for getting backlinks: collaborate with other companies for case studies, do initiatives such as startup programs/partner programs/educational discounts where you then ask for links to your site. You can leverage backlink programs towards specific high-value pages that you most want to rank.

#### Topical authority

Popularized by Ethan who runs Graphite, if you have articles that rank well for existing topics this will increase your probability of ranking for related topics. You can start with more long-tail topics and build up to the high-value topics.

### On-page SEO

#### Internal linking

The network of internal links matters as much as the network of external links. New pages should have 5+ links from existing pages and contain 5+ links to existing pages. The graph of the network should also point heavily towards the high-value pages to indicate these are the key pages to rank.

You can also leverage components to help with including keywords. Such as breadcrumbs for landing page styles pages and similar articles blocks for article type pages.

![Example breadcrumbs from the Tripadvisor site](/blog/seo-for-startups/seo-breadcrumbs-tripadvisor.png)

_Example breadcrumbs from the Tripadvisor site_

#### Keywords for ranking

You should include the relevant keywords for the users intent. This likely is a combination of intent specific keywords as well as common additives such as free or online.

You will want to include the keywords as appropriate in the headers, alt text, meta data, body, slug and external link text to the pages.

#### Have you solved the user intent?

We’ve covered how to create pages which should solve the user intent. To get them ranking top Google will use the user journey as guidance - did the user click on your site and stay on it. A proxy metric you have access to is what was the on-page session time both for that page and the site for users coming from Google. You can then optimize this over time as you ship features and content.

## Weekly metric reviews

You should be data-driven in how you measure and improve traffic going to your site.

Each week, use the Google Search console to track how you’re doing overall and at non-branded search (by excluding branded search terms). Then dive into various segments such as your ranking for high-value keywords, the process of recently launched programmatic pages, ranking by country, and more. The SEO performance shouldn’t be abstract instead you should consider the implications of ramping up google ads for similar terms (it might cause a drop in click through rate of SEO as people click on organic phrases) and industry driven trends (Google Trends can be informative here).

## Bonus: Hiring for SEO

I’ve purposely broken down SEO into three sections:

- understanding intent
- Solving intent
- Ranking

Potential profiles to hire for SEO are:

- "SEOs". If they have engineering skills they are normally backend leaning. They are great for directing the work but less useful for actual execution
- Frontend engineers with design skills and good enough copy/project management ability
- Excellent writers who can understand your domain

I’d argue that in the early days you want to start with driven frontend engineer with some design skills that is keen to learn SEO. As the bulk of the work is in creating great pages that solve user intent. They can also do the execution of getting to table stakes for technical SEO. And run the content machine either through contract writers or in-house writers. You can then partner them with an excellent external SEO advisor who can guide what intent to do and give feedback on the pages (but this isn’t needed as a full-time job until you’re at scale or have a a very large number of pages such as running an e-commerce store). Over time you could transition the content product running to a writer that has interest in this.
