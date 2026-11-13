/* ==========================================================================
   PasaGamit — Mock data
   Category icons are inline SVG; listing "photos" are CSS gradient thumbs.
   ========================================================================== */

/** Inline SVG icons (single source of truth for header/cards/etc). */
export const ICONS = {
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
    bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
    menu: null,
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    swap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',
    tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20.6 13.4 12 22 2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z" transform="rotate(0)"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 17v5"/><path d="M9 10.8V4a3 3 0 1 1 6 0v6.8l2.4 2.4a1 1 0 0 1-.7 1.7H7.3a1 1 0 0 1-.7-1.7z"/></svg>',
    megaphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m3 11 18-7-4 14-6-3.8L3 21z"/><path d="M11.6 14.2 8 21"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    shirt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M16 3l5 3-2 5-2-1v11H7V10l-2 1-2-5 5-3a4 4 0 0 0 8 0z"/></svg>',
    laptop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="4" y="4" width="16" height="12" rx="1"/><path d="M2 20h20"/></svg>',
    pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m17 3 4 4L8 20l-5 1 1-5z"/></svg>',
    flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10 2v6L4.6 18a2 2 0 0 0 1.8 3h11.2a2 2 0 0 0 1.8-3L14 8V2"/><path d="M8.5 2h7"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6.1 6.1l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.5 4.5-7"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/></svg>',
    recycle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 19H4.8a1.8 1.8 0 0 1-1.6-2.7L5 13"/><path d="m11 19-2 2 2 2" transform="translate(0,-2)"/><path d="M17 19h2.2a1.8 1.8 0 0 0 1.6-2.7L18 13"/><path d="m14 5 2-2-2-2" transform="translate(0,3)"/><path d="M12 2 9.6 6.2"/><path d="m2 12 3.4.4"/><path d="m22 12-3.4.4"/></svg>'
};

export const CATEGORIES = [
    { id: 'textbooks', name: 'Textbooks', icon: 'book', thumb: 'thumb--book', blurb: 'Second-hand readings, reviewers, and references across every course.' },
    { id: 'uniforms', name: 'Uniforms', icon: 'shirt', thumb: 'thumb--uniform', blurb: 'Gently used uniforms, PE shirts, and lab coats in all sizes.' },
    { id: 'gadgets', name: 'Gadgets', icon: 'laptop', thumb: 'thumb--gadget', blurb: 'Laptops, calculators, tablets, and dorm-safe appliances.' },
    { id: 'supplies', name: 'School Supplies', icon: 'pencil', thumb: 'thumb--supply', blurb: 'Notebooks, binders, art materials, and drafting kits.' },
    { id: 'lab', name: 'Laboratory Equipment', icon: 'flask', thumb: 'thumb--lab', blurb: 'Goggles, dissection kits, lab gowns, and borrowed-worthy tools.' },
    { id: 'personal', name: 'Personal Items', icon: 'bag', thumb: 'thumb--personal', blurb: 'Tote bags, jackets, water bottles, and dorm life essentials.' }
];

export const CONDITIONS = ['Brand New', 'Like New', 'Good', 'Fair'];
export const YEAR_LEVELS = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate'];
export const COURSES = ['BS Computer Science', 'BS Accountancy', 'BS Engineering', 'BS Nursing', 'BS Psychology', 'BS Architecture', 'BA Communication', 'BS Education', 'BS Biology', 'BSBA Marketing'];
export const TRADE_PREFS = ['Cash only', 'Open to trade', 'Trade only', 'Free / Donate'];

/**
 * Seed listings. `seed` picks the gradient placeholder photo so items without
 * user photos still look distinct.
 */
export const SEED_LISTINGS = [
    { id: 'L001', title: 'Calculus with Analytic Geometry (9th Ed.)', desc: 'Complete with pencil annotations from my blockmates — honestly helpful! Spine is intact, no missing pages. Selling because I finally passed and never want to see it again (jk, kind of).', price: 350, category: 'textbooks', course: 'BS Engineering', year: '2nd Year', condition: 'Good', trade: 'Cash only', seller: 'Miguel Santos', sellerInit: 'MS', rating: 4.8, reviews: 12, posted: '2026-11-10', featured: true, seed: 'book', campus: 'UP Diliman' },
    { id: 'L002', title: 'Casio fx-991ES PLUS Scientific Calculator', desc: 'The trusty calculator that survived 4 semesters of engineering math. Fresh AAA battery installed. Includes the slide-on hard case and the original manual.', price: 480, category: 'gadgets', course: 'BS Engineering', year: '3rd Year', condition: 'Like New', trade: 'Open to trade', seller: 'Andrea Reyes', sellerInit: 'AR', rating: 4.9, reviews: 23, posted: '2026-11-11', featured: true, seed: 'calc', campus: 'UP Diliman' },
    { id: 'L003', title: 'Nursing Uniform Set (Medium, Female Cut)', desc: 'Used for only two semesters before I shifted courses. Washed and pressed, no stains or tears. White duty shoes sold separately if you message me.', price: 300, category: 'uniforms', course: 'BS Nursing', year: '2nd Year', condition: 'Good', trade: 'Cash only', seller: 'Kim Dela Cruz', sellerInit: 'KD', rating: 4.6, reviews: 8, posted: '2026-11-09', seed: 'uniform', campus: 'UST' },
    { id: 'L004', title: 'HP Pavilion Laptop i5 8GB RAM', desc: 'Perfect for thesis season and light editing. Windows 11, charger included, battery still holds ~5 hours. One small dent on the corner (pictured in person).', price: 9500, category: 'gadgets', course: 'BS Computer Science', year: '4th Year', condition: 'Good', trade: 'Cash only', seller: 'Joshua Lim', sellerInit: 'JL', rating: 4.7, reviews: 31, posted: '2026-11-08', featured: true, seed: 'gadget', campus: 'DLSU' },
    { id: 'L005', title: 'Dissection Kit (Complete, Sanitized)', desc: 'Complete set — scalpel handles, blades, forceps, scissors, probe — all autoclaved after last use. Zip case included.Bio seniors, this is your cheapest option, promise.', price: 250, category: 'lab', course: 'BS Biology', year: '3rd Year', condition: 'Like New', trade: 'Open to trade', seller: 'Pat Villanueva', sellerInit: 'PV', rating: 4.5, reviews: 6, posted: '2026-11-07', seed: 'lab', campus: 'UP Diliman' },
    { id: 'L006', title: 'Drafting Toolkit: T-square, Triangles, Templates', desc: 'Graduating architecture student clearing the drafting table. Everything is straight and unbent. Free to a lower-year archi student who will love them.', price: 0, category: 'supplies', course: 'BS Architecture', year: '5th Year', condition: 'Good', trade: 'Free / Donate', seller: 'Ella Mendoza', sellerInit: 'EM', rating: 5.0, reviews: 14, posted: '2026-11-06', seed: 'supply', campus: 'UST' },
    { id: 'L007', title: 'PE Uniform (T-shirt & Joggers, Large)', desc: 'Bought the wrong size during enrollment and never got around to returning it. Tags still attached. Meet-up at the campus gym after your PE class.', price: 150, category: 'uniforms', course: 'BS Psychology', year: '1st Year', condition: 'Brand New', trade: 'Cash only', seller: 'Rafael Cruz', sellerInit: 'RC', rating: 4.4, reviews: 3, posted: '2026-11-12', seed: 'uniform', campus: 'AdU' },
    { id: 'L008', title: 'Psychology (Myers, 13th Edition)', desc: 'The Gen Psych bible. Highlighted in yellow only — no pen marks. Comes with the free study guide booklet from when it was still shrink-wrapped.', price: 420, category: 'textbooks', course: 'BS Psychology', year: '1st Year', condition: 'Like New', trade: 'Open to trade', seller: 'Sofia Garcia', sellerInit: 'SG', rating: 4.8, reviews: 9, posted: '2026-11-05', seed: 'book', campus: 'DLSU' },
    { id: 'L009', title: 'Canon Pixma Printer (TS207)', desc: 'Dorm workhorse for 2 years. Prints crisply, scans fine. Selling because I am moving home for my last semester. Includes half-full black ink and a fresh USB cable.', price: 1200, category: 'gadgets', course: 'BS Accountancy', year: '4th Year', condition: 'Good', trade: 'Cash only', seller: 'Bea Torres', sellerInit: 'BT', rating: 4.6, reviews: 17, posted: '2026-11-04', seed: 'gadget', campus: 'UST' },
    { id: 'L010', title: 'Lab Gown (White, Size M) + Goggles Bundle', desc: 'Gown is freshly laundered, goggles are anti-fog. Cheaper as a bundle than renting per semester. I can meet near the science pavilion.', price: 220, category: 'lab', course: 'BS Biology', year: '2nd Year', condition: 'Good', trade: 'Cash only', seller: 'Nico Aquino', sellerInit: 'NA', rating: 4.3, reviews: 5, posted: '2026-11-03', seed: 'lab', campus: 'UP Diliman' },
    { id: 'L011', title: 'Canvas Tote + Water Bottle Bundle', desc: 'Graduation declutter! Tote fits a 13-inch laptop and the bottle keeps water cold for hours. Take both for the price of one milk tea run.', price: 180, category: 'personal', course: 'BA Communication', year: '4th Year', condition: 'Good', trade: 'Open to trade', seller: 'Trina Bautista', sellerInit: 'TB', rating: 4.9, reviews: 11, posted: '2026-11-02', seed: 'personal', campus: 'AdU' },
    { id: 'L012', title: 'Financial Accounting (Valix, 2023 Ed.)', desc: 'Two-volume set for Acctg 1 and 2. Answer keys intact, which is half the battle. Will trade for any marketing book I need next term.', price: 550, category: 'textbooks', course: 'BS Accountancy', year: '2nd Year', condition: 'Fair', trade: 'Trade only', seller: 'Marco Ong', sellerInit: 'MO', rating: 4.2, reviews: 7, posted: '2026-11-01', seed: 'book', campus: 'DLSU' },
    { id: 'L013', title: 'Staedtler Mars Lumograph Pencil Set', desc: '12 grades from 4H to 8B, only a few sharpened. Comes in the original tin. Perfect for Geodesy plates or sketching in your free time.', price: 260, category: 'supplies', course: 'BS Architecture', year: '2nd Year', condition: 'Like New', trade: 'Cash only', seller: 'Lia Fernandez', sellerInit: 'LF', rating: 4.7, reviews: 4, posted: '2026-10-30', seed: 'supply', campus: 'UST' },
    { id: 'L014', title: 'Badminton Racket (Yonex, with Cover)', desc: 'Switched sports, so this deserves a new owner. Grip replaced last month, strings still tight. Free with any purchase of my other listings, or 400 cash.', price: 400, category: 'personal', course: 'BS Education', year: '3rd Year', condition: 'Good', trade: 'Open to trade', seller: 'Denise Salazar', sellerInit: 'DS', rating: 4.5, reviews: 2, posted: '2026-10-28', seed: 'sports', campus: 'AdU' },
    { id: 'L015', title: 'Anatomy & Physiology Reviewer Bundle', desc: 'Handmade reviewers (yes, color-coded) plus photocopies of past exams. These carried our whole block. Pay it forward — trade for a Psych reviewer.', price: 120, category: 'textbooks', course: 'BS Nursing', year: '3rd Year', condition: 'Fair', trade: 'Open to trade', seller: 'Grace Ramos', sellerInit: 'GR', rating: 5.0, reviews: 19, posted: '2026-10-26', seed: 'book', campus: 'UST' },
    { id: 'L016', title: 'Backpack (Under Armour, Fits 15" Laptop)', desc: 'One school year old, zero issues. All zippers smooth, straps strong. I upgraded to a bigger one for OJT. Rain cover included.', price: 850, category: 'personal', course: 'BS Computer Science', year: '3rd Year', condition: 'Like New', trade: 'Cash only', seller: 'Ian Vargas', sellerInit: 'IV', rating: 4.6, reviews: 10, posted: '2026-10-24', seed: 'personal', campus: 'UP Diliman' }
];

export const ANNOUNCEMENTS = [
    { type: 'promo', title: 'Kanto Sale: Textbook Swap Day', body: 'Bring any old book, take any old book. Friday, 3PM at the amphitheater. No money needed, just stories.' },
    { type: 'info', title: 'New safety feature: campus meet-up points', body: 'Listings now suggest official meet-up zones — library lobby, guard house, and student center — for safer hand-offs.' },
    { type: 'success', title: '1,000th item saved from the landfill!', body: 'Our community just rehomed its 1,000th item. Salamat, Isko! Every reused notebook counts.' }
];

export const NOTIFICATIONS = [
    { id: 'n1', unread: true, text: 'Miguel Santos replied to your inquiry about the Casio calculator.' },
    { id: 'n2', unread: true, text: 'Price drop: HP Pavilion Laptop is now ₱9,500 (was ₱11,000).' },
    { id: 'n3', unread: true, text: 'Your item "Drafting Toolkit" was featured on the front page!' },
    { id: 'n4', unread: false, text: 'Reminder: Book Swap Day is this Friday, 3PM at the amphitheater.' },
    { id: 'n5', unread: false, text: 'Andrea Reyes left you a 5-star review. Salamat!' }
];

export const BOARD_THREADS = [
    { title: 'Best evernote alternatives for org mode people?', board: 'Study Tips', author: 'Joshua Lim', init: 'JL', color: '#4A6A4B', replies: 18, last: '2h ago', pinned: true, excerpt: 'Sharing my setup before finals week: one notebook per subject, color tabs, and a Sunday review ritual. Ask me anything.' },
    { title: 'Where to buy cheap binders near campus?', board: 'Buy & Sell Tips', author: 'Lia Fernandez', init: 'LF', color: '#C6482A', replies: 24, last: '4h ago', pinned: true, excerpt: 'The bookstore sells them for ₱120 each but the national bookstore two blocks away sells them 3 for ₱150 when there is a sale. Also check the free shelf at the library lobby.' },
    { title: 'Is this calculator allowed in Math 54?', board: 'Course Questions', author: 'Rafael Cruz', init: 'RC', color: '#8B5E3C', replies: 9, last: '6h ago', pinned: false, excerpt: 'Prof said "scientific only, no programmable". Is the fx-991ES okay? Mine died before the first long exam, huhu.' },
    { title: 'Study group for Chem 16 finals?', board: 'Study Groups', author: 'Pat Villanueva', init: 'PV', color: '#4A6A4B', replies: 31, last: '1d ago', pinned: false, excerpt: 'We meet Tuesdays and Thursdays, 4PM, at the natural sciences pavilion. All levels welcome, we use peer teaching — everyone explains one topic.' },
    { title: 'How do you price second-hand gadgets fairly?', board: 'Buy & Sell Tips', author: 'Bea Torres', init: 'BT', color: '#2A6A8A', replies: 12, last: '1d ago', pinned: false, excerpt: 'Rule of thumb I use: half of street price for every year of use, minus whatever repairs it needs. Thoughts?' },
    { title: 'Lost-and-found: jacket at the library', board: 'Campus Life', author: 'Sofia Garcia', init: 'SG', color: '#C6482A', replies: 5, last: '2d ago', pinned: false, excerpt: 'Found a navy jacket at the third floor carrels yesterday afternoon. Describe the keychain attached to it and it is yours.' },
    { title: 'Free printing for org members this week', board: 'Campus Life', author: 'Trina Bautista', init: 'TB', color: '#8B5E3C', replies: 15, last: '2d ago', pinned: false, excerpt: 'Our student council office has spare bond paper. First 50 pages free for any active org member, just bring your ID.' }
];

export const STUDENT_GROUPS = [
    { name: 'Arki Plate Buddies', desc: 'Architecture students sharing drafting tools, model materials, and deadline survival tips.', members: 342, tag: 'BS Architecture' },
    { name: 'Engg Calculator Exchange', desc: 'Buy, sell, and trade scientific calculators. Verified sellers only, no programmables in exams, please.', members: 518, tag: 'BS Engineering' },
    { name: 'Nursing Review Circle', desc: 'Reviewers, duty schedules, and pre-loved nursing kits. We also run a free reviewer lending shelf.', members: 274, tag: 'BS Nursing' },
    { name: 'ComSci Laptop Lane', desc: 'Laptop deals, Linux help, and thesis-season gear swaps for programmers on a budget.', members: 460, tag: 'BS Computer Science' },
    { name: 'Accountancy Book Loop', desc: 'Valix, Millan, and review books circulating block by block. Cheaper than photocopying, promise.', members: 389, tag: 'BS Accountancy' },
    { name: 'Green Campus Collective', desc: 'The sustainability crew behind PasaGamit swap days. Join the zero-waste challenge!', members: 621, tag: 'All Courses' }
];

export const SUCCESS_STORIES = [
    { title: 'Graduation set, zero waste', caption: 'Ella gave her drafting toolkit to a 1st-year archi student.', quote: '"Para sa next generation ng plates!"', thumb: 'thumb--supply' },
    { title: 'The calculator that circulates', caption: 'This Casio has had 3 owners since 2023. Still kicking.', quote: '"Bayad na, bago naman buhay."', thumb: 'thumb--calc' },
    { title: 'Block bundle deal', caption: '8 blockmates split one nursing-uniform listing post.', quote: '"Tipid para sa lahat."', thumb: 'thumb--uniform' },
    { title: 'Laptop finds a thesis partner', caption: 'Joshua\'s HP Pavilion is now writing somebody\'s chapter 3.', quote: '"Goodluck sa defense!"', thumb: 'thumb--gadget' },
    { title: 'Reviewers travel far', caption: 'Grace\'s handmade anatomy reviewers are in their 4th school year.', quote: '"Passed it forward."', thumb: 'thumb--book' },
    { title: 'Free shelf initiative', caption: 'The student council free shelf rehomed 200+ items last sem.', quote: '"Take one, leave one."', thumb: 'thumb--personal' }
];

export const SAFETY_TIPS = [
    'Meet in public campus zones — library lobby, guard house, or student center.',
    'Inspect the item before paying. Test gadgets and count pages of books.',
    'Bring a friend to meet-ups, especially for higher-priced items.',
    'Never send money before seeing the item in person. No deposits to strangers.',
    'Report suspicious listings or sellers using the Report button on every card.'
];

/* ---------- localStorage layer ---------- */

const LS_LISTINGS = 'pasagamit_listings';
const LS_SAVED = 'pasagamit_saved';
const LS_REPORTS = 'pasagamit_reports';

export function getAllListings() {
    const userPosted = JSON.parse(localStorage.getItem(LS_LISTINGS) || '[]');
    // User posts first, then seeds (newest first within each group)
    return [...userPosted, ...SEED_LISTINGS];
}

export function getUserListings() {
    return JSON.parse(localStorage.getItem(LS_LISTINGS) || '[]');
}

export function saveUserListing(listing) {
    const all = getUserListings();
    listing.id = 'U' + Date.now();
    listing.posted = new Date().toISOString().slice(0, 10);
    listing.rating = 5;
    listing.reviews = 0;
    all.unshift(listing);
    localStorage.setItem(LS_LISTINGS, JSON.stringify(all));
    return listing;
}

export function getSavedIds() {
    return JSON.parse(localStorage.getItem(LS_SAVED) || '[]');
}

export function toggleSaved(id) {
    const ids = getSavedIds();
    const idx = ids.indexOf(id);
    if (idx >= 0) ids.splice(idx, 1); else ids.push(id);
    localStorage.setItem(LS_SAVED, JSON.stringify(ids));
    return idx < 0; // true if now saved
}

export function addReport(report) {
    const reports = JSON.parse(localStorage.getItem(LS_REPORTS) || '[]');
    reports.push({ ...report, at: new Date().toISOString() });
    localStorage.setItem(LS_REPORTS, JSON.stringify(reports));
}

/** CSS gradient thumb + SVG placeholder image for a listing. */
export function thumbHTML(listing, { height = 160 } = {}) {
    const cat = CATEGORIES.find(c => c.id === listing.category);
    const cls = listing.seed ? `thumb--${listing.seed}` : (cat ? cat.thumb : 'thumb--book');
    const label = listing.title.slice(0, 30);
    const img = listing.photos && listing.photos.length
        ? listing.photos[0]
        : `data:image/svg+xml;utf8,${encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="#8B5E3C" opacity="0.08"/><text x="200" y="150" text-anchor="middle" font-family="Georgia" font-size="20" fill="#2A2A2A" opacity="0.55">${label}</text><text x="200" y="180" text-anchor="middle" font-family="Georgia" font-size="13" fill="#2A2A2A" opacity="0.4">${cat ? cat.name : 'PasaGamit'}</text></svg>`)}`;
    return `<img class="thumb ${cls}" src="${img}" alt="Placeholder photo for ${listing.title.replace(/"/g, '&quot;')}" style="height:${height}px" loading="lazy">`;
}

export function priceHTML(listing) {
    if (listing.price === 0) return `<span class="price-tag price-tag--free">FREE</span>`;
    if (listing.trade === 'Trade only') return `<span class="price-tag price-tag--trade">TRADE ONLY</span>`;
    return `<span class="price-tag">₱${Number(listing.price).toLocaleString()}</span>`;
}

export function starsHTML(rating) {
    const full = Math.round(rating);
    return `<span class="stars" aria-label="Rated ${rating} out of 5">${'★'.repeat(full)}<span class="muted">${'★'.repeat(5 - full)}</span></span>`;
}
