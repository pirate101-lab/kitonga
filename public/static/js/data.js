/* KITONGA-ICT — catalogue (single source of truth). Edit here; the site follows. */

const KITONGA = {
  brand: 'KITONGA',
  brandFull: 'KITONGA-ICT',
  tagline: 'Digital services & print, done today.',
  phone: '254715927114',
  phoneDisplay: '0715 927 114',
  email: 'office@kitonga-ict.co.ke',
  hours: 'Mon – Sat · 7:30 – 19:00',
  printPartner: 'Brirop Digital Cyber',
  social: { instagram: '#', tiktok: '#', facebook: '#' }
};

/* ------------------------------------------------------------
   Main service categories (the primary navigation panels)
   ------------------------------------------------------------ */
const CATEGORIES = [
  {
    slug: 'government',
    index: '01',
    name: 'Government Services',
    label: 'Government',
    logo: 'kenya-coat-of-arms.png',
    icon: 'fa-landmark',
    accent: '#1f4e8c',
    tint: '#dbe7ff',
    summary: 'eCitizen, KRA, NTSA, SHA & more.',
    detail: 'Statutory registrations, licences and certificates on the official portals.',
    portals: ['eCitizen', 'KRA iTax', 'NTSA TIMS', 'SHA', 'NSSF', 'DCI']
  },
  {
    slug: 'education',
    index: '02',
    name: 'Academic & Student Services',
    label: 'Academic',
    logo: 'cat-education.svg',
    icon: 'fa-graduation-cap',
    accent: '#5b3d9a',
    tint: '#ebe3ff',
    summary: 'HELB, KUCCPS, TSC & results.',
    detail: 'Financing, placement and registration for students and educators.',
    portals: ['HELB', 'HEF', 'KUCCPS', 'TSC', 'KNEC', 'KMTC']
  },
  {
    slug: 'jobs',
    index: '03',
    name: 'Employment & Career Documents',
    label: 'Careers',
    logo: 'cat-jobs.svg',
    icon: 'fa-briefcase',
    accent: '#0f6e78',
    tint: '#dff5ea',
    summary: 'Applications, CVs & profiles.',
    detail: 'Job applications submitted, career documents written to standard.',
    portals: ['PSC', 'County PSBs', 'LinkedIn', 'Corporate portals']
  },
  {
    slug: 'business',
    index: '04',
    name: 'Business Registration & Compliance',
    label: 'Business',
    logo: 'biz-office.jpg',
    icon: 'fa-building',
    accent: '#1e6b46',
    tint: '#fff1c9',
    summary: 'Registration, eTIMS & permits.',
    detail: 'Formation, tax onboarding, permits and tender documents.',
    portals: ['BRS', 'KRA eTIMS', 'Nairobi County', 'PPIP']
  },
  {
    slug: 'web',
    index: '05',
    name: 'Web Design & Online Presence',
    label: 'Web Design',
    logo: 'cat-web.svg',
    icon: 'fa-laptop-code',
    accent: '#0284c7',
    tint: '#e0f2fe',
    summary: 'Websites, domains, hosting & SEO.',
    detail: 'Modern responsive websites, online stores, M-Pesa integration, domain registration, and Google search visibility.',
    portals: ['WordPress', 'M-Pesa API', 'cPanel', 'Google Business']
  },
  {
    slug: 'design',
    index: '06',
    name: 'Design & Brand Identity',
    label: 'Design',
    logo: 'cat-design.svg',
    icon: 'fa-pen-nib',
    accent: '#a8202a',
    tint: '#ffe1e1',
    summary: 'Logos, certificates & collateral.',
    detail: 'Production-ready identity and marketing artwork.',
    portals: []
  },
  {
    slug: 'print',
    index: '07',
    name: 'Print & Production',
    label: 'Print & Apparel',
    logo: 'cat-print.svg',
    icon: 'fa-print',
    accent: '#b4581c',
    tint: '#e4ffb3',
    summary: 'T-shirts, certificates & banners.',
    detail: 'Produced with Brirop Digital Cyber. One brief, one point of contact.',
    portals: []
  },
  {
    slug: 'cyber',
    index: '08',
    name: 'Office & Document Services',
    label: 'Office',
    logo: 'cat-cyber.svg',
    icon: 'fa-file-lines',
    accent: '#7a6a3a',
    tint: '#eef0f4',
    summary: 'Print, scan, type & bind.',
    detail: 'Everyday document work, while you wait.',
    portals: []
  },
  {
    slug: 'travel',
    index: '09',
    name: 'Travel & Immigration',
    label: 'Travel',
    logo: 'cat-travel.svg',
    icon: 'fa-plane-departure',
    accent: '#3b4a7a',
    tint: '#dff3ff',
    summary: 'Visas, eTA & flights.',
    detail: 'Visa applications, travel authorisations and supporting documents.',
    portals: ['Kenya eTA', 'Embassy portals', 'VFS Global']
  }
];

/* ------------------------------------------------------------
   Sub-services. `turn` = standard turnaround.
   `featured` marks the item for the landing-page directory.
   ------------------------------------------------------------ */
const SERVICES = [
  /* 01 · GOVERNMENT */
  { id: 'ecitizen-account',  cat: 'government', name: 'eCitizen Account Set-up',        desc: 'Account creation, verification and secure hand-over.', price: 200, turn: 'Same day', featured: true, logo: 'ecitizen.png' },
  { id: 'good-conduct',      cat: 'government', name: 'Certificate of Good Conduct',    desc: 'DCI police clearance, with fingerprint booking.', price: 300, turn: 'Same day', featured: true, logo: 'dci.png' },
  { id: 'passport-app',      cat: 'government', name: 'Passport Application',           desc: 'New or replacement ePassport, with biometrics booking.', price: 600, turn: 'Same day', featured: true, logo: 'immigration.png' },
  { id: 'birth-cert',        cat: 'government', name: 'Birth Certificate',              desc: 'New application or replacement through Civil Registration on eCitizen.', price: 300, turn: 'Same day', logo: 'civil-reg.svg' },
  { id: 'kra-pin',           cat: 'government', name: 'KRA PIN Registration',           desc: 'Individual PIN registration and certificate issuance on iTax.', price: 200, turn: 'Same day', featured: true, logo: 'kra.png' },
  { id: 'kra-returns',       cat: 'government', name: 'KRA Returns Filing',             desc: 'Nil, employment or rental returns filed on time.', price: 200, turn: 'Same day', logo: 'kra.png' },
  { id: 'ntsa-smart-dl',     cat: 'government', name: 'Smart Driving Licence',          desc: 'Application and TIMS processing for the smart driving licence.', price: 300, turn: 'Same day', logo: 'ntsa.png' },
  { id: 'ntsa-dl-renewal',   cat: 'government', name: 'Driving Licence Renewal',        desc: 'One- or three-year renewal on the NTSA TIMS portal.', price: 300, turn: 'Same day', logo: 'ntsa.png' },
  { id: 'ntsa-tims',         cat: 'government', name: 'NTSA TIMS Account',              desc: 'Account creation with ID and telephone verification.', price: 200, turn: 'Same day', logo: 'ntsa.png' },
  { id: 'ntsa-inspection',   cat: 'government', name: 'Vehicle Inspection Booking',     desc: 'Motor-vehicle inspection slot booking and fee payment.', price: 200, turn: 'Same day', logo: 'ntsa.png' },
  { id: 'sha-registration',  cat: 'government', name: 'SHA Registration',               desc: 'Social Health Authority registration for principals and dependants.', price: 200, turn: 'Same day', featured: true, logo: 'sha.svg' },
  { id: 'nssf-registration', cat: 'government', name: 'NSSF Registration',              desc: 'Member registration and card application.', price: 200, turn: 'Same day', logo: 'nssf.png' },
  { id: 'crb-clearance',     cat: 'government', name: 'CRB Clearance Certificate',      desc: 'Credit status enquiry and clearance certificate processing on Metropol.', price: 300, turn: '1 working day', logo: 'crb.png' },

  /* 02 · ACADEMIC */
  { id: 'helb-application',  cat: 'education', name: 'HELB Loan Application',           desc: 'First-time or subsequent loan, with confirmation slip.', price: 300, turn: 'Same day', featured: true, logo: 'helb.png' },
  { id: 'hef-application',   cat: 'education', name: 'Higher Education Fund (HEF)',     desc: 'University and TVET funding under the new model.', price: 300, turn: 'Same day', logo: 'helb.png' },
  { id: 'kuccps-application',cat: 'education', name: 'KUCCPS Course Application',       desc: 'Degree, diploma and KMTC programme selection or revision.', price: 300, turn: 'Same day', featured: true, logo: 'kuccps.png' },
  { id: 'tsc-registration',  cat: 'education', name: 'TSC Number Registration',         desc: 'Teacher registration with the Teachers Service Commission.', price: 200, turn: 'Same day', logo: 'tsc.png' },
  { id: 'university-app',    cat: 'education', name: 'University Admission Application', desc: 'Direct-entry and inter-institution transfer applications.', price: 400, turn: '1–2 working days', logo: 'cat-education.svg' },
  { id: 'kmtc-application',  cat: 'education', name: 'KMTC Application',                desc: 'Kenya Medical Training College application and portal submission.', price: 300, turn: 'Same day', logo: 'kmtc.png' },
  { id: 'result-check',      cat: 'education', name: 'KCSE / KPSEA Result Retrieval',   desc: 'Official result slip retrieval and printing on KNEC portal.', price: 100, turn: 'While you wait', logo: 'knec.png' },
  { id: 'academic-writing',  cat: 'education', name: 'Academic Formatting & Proofreading', desc: 'Referencing, formatting and proofreading to standard.', price: 500, turn: '2–3 working days', unit: '/document', logo: 'cat-education.svg' },

  /* 03 · CAREERS */
  { id: 'online-job-app',    cat: 'jobs', name: 'Online Job Application',               desc: 'Any employer portal — profile, documents, submission.', price: 200, turn: 'Same day', featured: true, logo: 'job-portal.svg' },
  { id: 'psc-application',   cat: 'jobs', name: 'Public Service Commission Application', desc: 'PSC portal profile and job applications.', price: 250, turn: 'Same day', logo: 'psc.png' },
  { id: 'county-jobs',       cat: 'jobs', name: 'County Public Service Application',    desc: 'County public service board applications, any county.', price: 250, turn: 'Same day', logo: 'county.svg' },
  { id: 'cv-writing',        cat: 'jobs', name: 'Professional CV',                      desc: 'ATS-ready CV from a consultation. Two revisions.', price: 500, turn: '1–2 working days', featured: true, logo: 'cv-pro.svg' },
  { id: 'cover-letter',      cat: 'jobs', name: 'Cover Letter',                         desc: 'Tailored to a specific advertisement and role.', price: 300, turn: 'Same day', logo: 'cover-letter.svg' },
  { id: 'linkedin-setup',    cat: 'jobs', name: 'LinkedIn Profile',                     desc: 'Complete professional profile build and optimisation.', price: 500, turn: '1–2 working days', logo: 'linkedin.png' },

  /* 04 · BUSINESS */
  { id: 'biz-name-reg',      cat: 'business', name: 'Business Name Registration',       desc: 'Name search, reservation and registration on BRS.', price: 500, turn: 'Same day', featured: true, logo: 'brs-seal.svg' },
  { id: 'company-inc',       cat: 'business', name: 'Company Incorporation',            desc: 'Private limited company, with CR12 and certificate.', price: 1500, turn: '3–5 working days', logo: 'brs-seal.svg' },
  { id: 'etims-setup',       cat: 'business', name: 'KRA eTIMS Onboarding',             desc: 'Registration, device set-up and first invoice.', price: 500, turn: 'Same day', logo: 'kra.png' },
  { id: 'biz-permit',        cat: 'business', name: 'Single Business Permit',           desc: 'County business permit application and payment.', price: 400, turn: '1–2 working days', logo: 'nairobi-county.png' },
  { id: 'tender-application',cat: 'business', name: 'Tender Documentation',             desc: 'Preparation, formatting and submission of tender packs.', price: 1000, turn: '2–3 working days', logo: 'ppip.svg' },
  { id: 'biz-profile',       cat: 'business', name: 'Company Profile',                  desc: 'Print-ready corporate profile of up to eight pages.', price: 2000, turn: '3–5 working days', logo: 'biz-profile.svg' },

  /* 05 · WEB DESIGN */
  { id: 'business-website',  cat: 'web', name: 'Business Website Design',               desc: 'Custom mobile-first responsive WordPress or bespoke site with contact forms & WhatsApp.', price: 15000, turn: '3–5 working days', featured: true, logo: 'web-business.svg' },
  { id: 'ecommerce-store',   cat: 'web', name: 'E-Commerce Store & M-Pesa',             desc: 'Online shop catalogue, cart checkout, and automated M-Pesa STK push integration.', price: 25000, turn: '5–7 working days', featured: true, logo: 'web-ecommerce.svg' },
  { id: 'landing-page',      cat: 'web', name: 'Landing Page & Single-Page Site',       desc: 'High-converting single-page site for ad campaigns, service launches, or portfolios.', price: 8000, turn: '2–3 working days', logo: 'web-landing.svg' },
  { id: 'domain-hosting',    cat: 'web', name: 'Domain Registration & Hosting',         desc: '.co.ke or .com domain registration, SSL security certificate & cPanel business email.', price: 3500, turn: 'Same day', logo: 'web-domain.svg' },
  { id: 'website-redesign',  cat: 'web', name: 'Website Revamp & Redesign',             desc: 'Modern facelift, speed optimization, and mobile responsiveness for existing websites.', price: 10000, turn: '3–4 working days', logo: 'web-redesign.svg' },
  { id: 'seo-google-profile',cat: 'web', name: 'Google Business Profile & Local SEO',  desc: 'Google Maps verification, local search ranking, and SEO indexation setup.', price: 3000, turn: '1–2 working days', logo: 'google-biz.svg' },

  /* 06 · DESIGN */
  { id: 'logo-design',       cat: 'design', name: 'Logo & Identity Mark',               desc: 'Three concepts, one refined mark. PNG, SVG, PDF.', price: 1000, turn: '2–3 working days', featured: true, logo: 'logo-design.svg' },
  { id: 'certificate-design',cat: 'design', name: 'Certificate Design',                 desc: 'Award, training and membership templates.', price: 500, turn: 'Same day', featured: true, img: 'cert-leadership.jpg', logo: 'cat-design.svg' },
  { id: 'poster-design',     cat: 'design', name: 'Poster & Flyer',                     desc: 'Print and social-ready artwork for events, campaigns and promotions.', price: 500, turn: 'Same day', logo: 'poster-design.svg' },
  { id: 'business-cards',    cat: 'design', name: 'Business Card',                      desc: 'Double-sided design with print-ready files and bleed.', price: 500, turn: 'Same day', logo: 'bizcard.svg' },
  { id: 'invitation-cards',  cat: 'design', name: 'Invitation Card',                    desc: 'Wedding, corporate and event invitations.', price: 500, turn: 'Same day', logo: 'invitation.svg' },
  { id: 'letterhead',        cat: 'design', name: 'Letterhead & Stationery',            desc: 'Branded letterhead in editable Word and PDF formats.', price: 400, turn: 'Same day', logo: 'letterhead.svg' },
  { id: 'social-kit',        cat: 'design', name: 'Social Media Kit',                   desc: 'Profile, cover and three post templates aligned to your identity.', price: 1500, turn: '2–3 working days', logo: 'social-kit.svg' },

  /* 07 · PRINT */
  { id: 'cert-print',        cat: 'print', name: 'Certificates — Design & Print',       desc: 'Premium card stock, any quantity. Variable names on request.', price: 100, unit: '/pc', turn: 'Same day', featured: true, img: 'cert-stack.jpg', logo: 'cert-print.svg' },
  { id: 'tshirt-printing',   cat: 'print', name: 'T-Shirt Printing',                    desc: 'Vinyl, DTF or screen print. Artwork included.', price: 700, turn: '1–2 working days', featured: true, img: 'tee-peel.jpg', logo: 'apparel-print.svg' },
  { id: 'bulk-tshirts',      cat: 'print', name: 'Bulk Apparel (Teams & Events)',       desc: 'Branded garments for teams and events. From ten pieces.', price: 550, unit: '/pc', turn: '3–5 working days', img: 'screen-print-studio.jpg', logo: 'bulk-apparel.svg' },
  { id: 'event-booklets',    cat: 'print', name: 'Event Programme Booklets',            desc: 'Memorial, wedding and conference programmes, bound.', price: 50, unit: '/copy', turn: 'Same day', logo: 'booklet.svg' },
  { id: 'rollup-banner',     cat: 'print', name: 'Roll-up Banner',                      desc: 'Full-size banner with stand and carry case. Design included.', price: 7500, turn: '1–2 working days', logo: 'rollup-banner.svg' },
  { id: 'large-posters',     cat: 'print', name: 'A3 & Large-Format Posters',           desc: 'High-resolution posters for campaigns and events.', price: 100, unit: '/pc', turn: 'Same day', img: 'digital-press.jpg', logo: 'large-format.svg' },
  { id: 'branded-mugs',      cat: 'print', name: 'Branded Merchandise',                 desc: 'Mugs, caps, tote bags and corporate gifts.', price: 600, turn: '2–3 working days', logo: 'branded-mug.svg' },
  { id: 'a3-bulk-print',     cat: 'print', name: 'A3 Bulk Printing & Binding',          desc: 'Volume A3 printing and binding.', price: 60, unit: '/page', turn: 'Same day', logo: 'cmyk-print.svg' },

  /* 08 · OFFICE */
  { id: 'printing',          cat: 'cyber', name: 'Printing — Mono & Colour',            desc: 'Laser printing from documents, email or removable media.', price: 10, unit: '/page', turn: 'While you wait', featured: true, logo: 'cmyk-print.svg' },
  { id: 'scanning',          cat: 'cyber', name: 'Scanning to PDF / Email',             desc: 'High-resolution scans delivered to your inbox.', price: 20, unit: '/page', turn: 'While you wait', logo: 'pdf-scan.svg' },
  { id: 'photocopy',         cat: 'cyber', name: 'Photocopying',                        desc: 'Single- or double-sided, any volume.', price: 5, unit: '/page', turn: 'While you wait', logo: 'photocopy.svg' },
  { id: 'typing',            cat: 'cyber', name: 'Typesetting',                         desc: 'Typed and formatted from handwritten or dictated copy.', price: 50, unit: '/page', turn: 'Same day', logo: 'ms-word.svg' },
  { id: 'lamination',        cat: 'cyber', name: 'Lamination',                          desc: 'ID, A5 and A4 sizes.', price: 50, turn: 'While you wait', logo: 'lamination.svg' },
  { id: 'binding',           cat: 'cyber', name: 'Binding — Spiral & Tape',             desc: 'Reports, proposals and dissertations.', price: 100, turn: 'While you wait', logo: 'binding.svg' },
  { id: 'passport-photos',   cat: 'cyber', name: 'Passport Photographs',                desc: 'Specification-compliant photographs, printed and digital.', price: 100, turn: 'While you wait', logo: 'passport-photo.svg' },
  { id: 'email-setup',       cat: 'cyber', name: 'Email Account Set-up',                desc: 'Gmail or Outlook account with recovery options configured.', price: 100, turn: 'While you wait', logo: 'gmail-outlook.svg' },
  { id: 'internet',          cat: 'cyber', name: 'Workstation Access',                  desc: 'Internet-connected workstations with full office suite.', price: 1, unit: '/min', turn: 'While you wait', logo: 'workstation.svg' },

  /* 09 · TRAVEL */
  { id: 'visa-application',  cat: 'travel', name: 'Visa Application',                   desc: 'Tourist, student and work visa applications for any destination.', price: 1000, turn: '2–3 working days', featured: true, logo: 'vfs-global.svg' },
  { id: 'eta-kenya',         cat: 'travel', name: 'Kenya eTA',                          desc: 'Electronic Travel Authorisation for visitors to Kenya.', price: 500, turn: 'Same day', logo: 'kenya-eta.png' },
  { id: 'flight-booking',    cat: 'travel', name: 'Flight Booking',                     desc: 'Fare search and booking on your behalf.', price: 500, turn: 'Same day', logo: 'iata.svg' },
  { id: 'doc-processing',    cat: 'travel', name: 'Supporting Travel Documents',        desc: 'Itineraries, invitation letters and statements, embassy-ready.', price: 400, turn: 'Same day', logo: 'travel-docs.svg' }
];

/* ------------------------------------------------------------
   Portfolio
   ------------------------------------------------------------ */
const PORTFOLIO = [
  { img: 'tee-peel.jpg',              cat: 'apparel', title: 'Custom Sports Jersey',                 client: 'Heat-press vinyl · name & number',  tags: ['Apparel', 'Vinyl'], portrait: true },
  { img: 'tee-press.jpg',             cat: 'apparel', title: 'Heat-press Production',                client: 'In-house apparel studio',           tags: ['Apparel', 'Production'], portrait: true },
  { img: 'cert-stack.jpg',            cat: 'print',   title: 'Leadership Recognition Certificates',  client: 'Kenya Red Cross · KU Chapter', tags: ['Certificate', 'Design + Print'], portrait: true },
  { img: 'cert-leadership.jpg',       cat: 'design',  title: 'Certificate of Leadership Recognition', client: 'Award template · variable data',  tags: ['Certificate', 'Layout'], portrait: true },
  { img: 'cert-membership.jpg',       cat: 'design',  title: 'Membership Certificate Series',        client: 'Society membership · 2025 – 2026', tags: ['Certificate', 'Typography'], portrait: true },
  { img: 'cert-press.jpg',            cat: 'print',   title: 'In-house Production Run',              client: 'Premium card stock · inkjet',      tags: ['Production', 'Print'], portrait: true },
  { img: 'screen-print-tee.jpg',      cat: 'apparel', title: 'Screen-printed Event Apparel',         client: 'Corporate team day',               tags: ['Apparel', 'Screen Print'], wide: true },
  { img: 'screen-print-studio.jpg',   cat: 'apparel', title: 'Bulk Apparel Run',                     client: 'Staff uniforms · 60 pieces',       tags: ['Apparel', 'Bulk'] },
  { img: 'screen-print-squeegee.jpg', cat: 'apparel', title: 'Hand-pulled Screen Print',             client: 'Limited-run merchandise',          tags: ['Apparel', 'Craft'] },
  { img: 'screen-print-frames.jpg',   cat: 'print',   title: 'Screen Preparation',                   client: 'Multi-colour separation',          tags: ['Production', 'Screen Print'] },
  { img: 'offset-press.jpg',          cat: 'largeformat', title: 'Offset Press Sheets',              client: 'Volume brochure run',              tags: ['Offset', 'Large Format'], wide: true },
  { img: 'digital-press.jpg',         cat: 'largeformat', title: 'Large-format Digital Output',      client: 'Campaign posters · A2',            tags: ['Digital', 'Posters'] }
];

const PORTFOLIO_CATS = [
  { slug: 'all',         name: 'All work' },
  { slug: 'design',      name: 'Design' },
  { slug: 'print',       name: 'Print' },
  { slug: 'apparel',     name: 'Apparel' },
  { slug: 'largeformat', name: 'Large format' }
];

/* ------------------------------------------------------------
   Helpers
   ------------------------------------------------------------ */
const ASSET = '/static/images/';
function kshFmt(n) { return 'KSh ' + n.toLocaleString('en-KE'); }
function waLink(text) { return 'https://wa.me/' + KITONGA.phone + '?text=' + encodeURIComponent(text); }
function waRequest(svc) {
  return waLink('Hello KITONGA-ICT, I would like to request: ' + svc.name +
    ' (' + kshFmt(svc.price) + (svc.unit || '') + '). What documents do you need from me?');
}
