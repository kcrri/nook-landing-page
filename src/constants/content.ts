import type { Step, Stat, AIFeature, ChatMessage, OwnerFeature, FAQItem } from '@/types';

export const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'For owners', href: '#for-owners' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const HERO_CONTENT = {
  badge: 'Now in private beta — Montreal',
  headline: 'Find your nook',
  subheadline: 'Swipe. Explore. Ask. Move in.',
  body: 'Renting in Montreal is slow, repetitive, and built on platforms nobody trusts. Nook gives you listings you can actually navigate, with an AI that knows each one by heart.',
  ctaPrimary: 'Join the waitlist',
  ctaSecondary: 'See how it works',
} as const;

export const HOW_IT_WORKS_CONTENT = {
  badge: 'Simple by design',
  headline: 'Three steps, no dead ends',
  subheadline:
    'Most platforms turn renting into a part-time job. Nook cuts the process down to what it should have been all along.',
  steps: [
    {
      number: '01',
      title: 'Swipe listings',
      description:
        'Browse verified Montreal rentals on a map or in a swipe view. Filter by neighbourhood, price, and move-in date without wading through stale posts.',
    },
    {
      number: '02',
      title: 'Ask the AI',
      description:
        'Have a question about a specific unit? The AI is trained on that listing\'s details, including lease terms, pet policy, and what\'s included, so you get a real answer, not a form letter.',
    },
    {
      number: '03',
      title: 'Send a request',
      description:
        'Found the one? Submit a lightweight request. No phone tag, no open-house stampedes. The owner reviews and accepts and Nook takes care of the rest.',
    },
  ] satisfies Step[],
} as const;

export const AI_CONTENT = {
  badge: 'Built-in intelligence',
  headline: 'Questions answered before you even ask',
  subheadline:
    'Most rental questions are the same ten questions. Our AI knows that and knows the answer for each listing, not just in general.',
  features: [
    {
      title: 'Grounded in the listing',
      description:
        'Every answer comes from the actual unit\'s details. No hallucinations, no generic copy-paste.',
    },
    {
      title: 'Available around the clock',
      description:
        'Stop waiting for landlords to check their inbox at 11pm. Ask now, get an answer now.',
    },
    {
      title: 'Escalates when it should',
      description:
        'When the AI does not know, it says so and surfaces a direct contact. It will not invent an answer.',
    },
  ] satisfies AIFeature[],
  chat: [
    { role: 'user', content: 'Does this place allow cats?' },
    {
      role: 'assistant',
      content:
        'Yes, the listing notes small pets are welcome with a refundable $250 deposit. Dogs under 25 lbs are also allowed.',
    },
    { role: 'user', content: 'What\'s included in rent?' },
    {
      role: 'assistant',
      content:
        'Heat and hot water are included. Electricity and internet are tenant-paid. Parking is available for $75/month, separate from rent.',
    },
  ] satisfies ChatMessage[],
} as const;

export const STATS_CONTENT = {
  headline: 'The numbers behind the problem',
  stats: [
    {
      value: '186,000',
      label: 'Rental units in Montreal',
      footnote: 'CMHC 2023',
    },
    {
      value: '72%',
      label: 'Renters say finding a place takes too long',
      footnote: 'Nook survey, 2024',
    },
    {
      value: '<48h',
      label: 'Median time to first owner response in beta',
      footnote: 'Nook beta, Q4 2024',
    },
  ] satisfies Stat[],
} as const;

export const OWNER_CONTENT = {
  badge: 'For owners',
  headline: 'List once. Accept who you want.',
  subheadline:
    'No bidding wars, no inbox floods. Requests come in qualified, you decide, Nook handles the coordination.',
  features: [
    {
      title: 'Pre-qualified requests only',
      description:
        'Renters share move-in date, budget, and household size before they request. You see fit before you commit.',
    },
    {
      title: 'One inbox, no noise',
      description:
        'The AI fields the repetitive questions. You only hear from renters who are genuinely interested.',
    },
    {
      title: 'No commission on rent',
      description:
        'Nook charges a flat listing fee, not a cut of your income. What\'s yours stays yours.',
    },
  ] satisfies OwnerFeature[],
  cta: 'List your property',
} as const;

export const FAQ_CONTENT = {
  badge: 'Common questions',
  headline: 'Things people ask before signing up',
  items: [
    {
      question: 'Is Nook available right now?',
      answer:
        'We are in private beta in Montreal. Join the waitlist and we will reach out when your spot opens up. Toronto is next.',
    },
    {
      question: 'How does the AI actually know about a listing?',
      answer:
        'Every listing on Nook includes a structured data layer covering lease terms, pet policy, included utilities, and move-in conditions. The AI reads that layer before answering your question, so its answers are specific to the unit, not generic.',
    },
    {
      question: 'What does it cost for renters?',
      answer:
        'Nothing. Nook is free for renters. We charge owners a flat listing fee, not a percentage of rent.',
    },
    {
      question: 'How is this different from Kijiji or Facebook Marketplace?',
      answer:
        'Listings on those platforms go stale, contact info is often wrong, and the only way to get answers is to email and wait. Nook verifies listings, keeps them current, and lets you ask questions and get answers instantly.',
    },
    {
      question: 'Can I use Nook if I am a property manager with multiple units?',
      answer:
        'Yes. The owner dashboard supports multiple listings under one account. You manage requests, screening info, and messages in one place.',
    },
    {
      question: 'What happens after I send a request to a landlord?',
      answer:
        'The owner receives your profile and move-in details. They can accept, decline, or ask a follow-up question through Nook. No personal contact info is shared until both sides agree to connect.',
    },
  ] satisfies FAQItem[],
} as const;

export const FOOTER_CTA_CONTENT = {
  headline: 'Be among the first to find your nook',
  subheadline:
    'Launching in Montreal. Toronto next. Join the waitlist and we\'ll reach out when you\'re in.',
  inputPlaceholder: 'your@email.com',
  ctaLabel: 'Get early access',
  disclaimer:
    'No spam. No dark patterns. Just a message when Nook is ready for you.',
} as const;
