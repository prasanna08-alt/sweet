import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const PINK = "#FB9590", ROSE = "#DC5895", PEACH = "#FFBB94";
const DISCOUNT = 40;

/* ---------- exact product photography for each card ---------- */
const BASE = import.meta.env.BASE_URL || "/";
const img = (filename) => `${BASE}images/${filename}`;

const photos = {
  hero: img("diwali-hero.png"),
  sweetsRange: img("sweets-range.jpg"),
  dryFruitsRange: img("dry-fruit-gift-box.jpg"),
  festiveRange: img("diwali-hero.png"),
  snacksRange: img("namkeen-range.jpg"),

  // Best Sellers (exact authentic sweets)
  mysorePak: img("mysore-pak.jpg"),
  kajuKatli: img("kaju-katli.jpg"),
  motichoorLaddu: img("motichoor-laddu.jpg"),
  gulabJamun: img("gulab-jamun.jpg"),
  crispyJalebi: img("crispy-jalebi.jpg"),
  roseBarfi: img("rose-barfi.jpg"),

  // Gifting Collections (exact luxury gift boxes)
  assortedGifts: img("assorted-gift-box.jpg"),
  dryFruitGifts: img("dry-fruit-gift-box.jpg"),
  souvenirGifts: img("souvenir-gift-box.jpg"),

  // Snacks Range (exact authentic regional snacks & bakery items)
  southIndianSnacks: img("south-indian-snacks.jpg"),
  indianBakery: img("indian-bakery.jpg"),
  teaTimeSnacks: img("tea-time-snacks.jpg"),
  indianBiscottis: img("indian-biscottis.jpg"),
  northIndianSnacks: img("north-indian-snacks.jpg"),
};

/* ---------- data ---------- */
const slides = [
  { tag: "Diwali Sale", title: "Taste the Sweetness of Diwali", sub: `Flat up to ${DISCOUNT}% OFF on all sweets`, cta: "Shop Sweets", href: "#bestsellers", image: photos.hero, bg: `linear-gradient(120deg,${PINK},${ROSE})` },
  { tag: "Festive Gifting", title: "Gift Boxes Crafted With Love", sub: "Hand-picked assortments for every celebration", cta: "View Gift Boxes", href: "#gifting", image: photos.assortedGifts, bg: `linear-gradient(120deg,${PEACH},${PINK})` },
  { tag: "Best Sellers", title: "Kaju Katli, Mysore Pak & More", sub: "Our most-loved sweets, made fresh daily", cta: "See Best Sellers", href: "#bestsellers", image: photos.kajuKatli, bg: `linear-gradient(120deg,${ROSE},${PEACH})` },
  { tag: "Handmade", title: "Every Piece Made With Love", sub: "Small batches. Pure ghee. No preservatives.", cta: "Our Promise", href: "#promise", image: photos.mysorePak, bg: `linear-gradient(120deg,${PINK},${PEACH})` },
  { tag: "Snack Range", title: "Crunchy Snacks For Tea Time", sub: "Murukku, mixture, biscottis and more", cta: "Shop Snacks", href: "#snacks", image: photos.southIndianSnacks, bg: `linear-gradient(120deg,${PEACH},${ROSE})` },
  { tag: "Corporate Gifting", title: "Make Every Gift Unforgettable", sub: "Bulk orders with custom branding available", cta: "Enquire Now", href: "#contact", image: photos.dryFruitGifts, bg: `linear-gradient(120deg,${ROSE},${PINK})` },
  { tag: "Same Day Delivery", title: "Fresh Sweets At Your Doorstep", sub: "Also available on Swiggy, Zomato, Zepto & Blinkit", cta: "Order Now", href: "#available", image: photos.hero, bg: `linear-gradient(120deg,${PINK},${ROSE} 60%,${PEACH})` },
];

const range = [
  { n: "Sweets", image: photos.sweetsRange },
  { n: "Dry Fruit Boxes", image: photos.dryFruitsRange },
  { n: "Festive Specials", image: photos.festiveRange },
  { n: "Namkeen & Snacks", image: photos.snacksRange },
];

const best = [
  { n: "Mysore Pak", image: photos.mysorePak, pos: "center", p: 260, t: "square", c: [PEACH, "#C98B2B"], cal: 480, wt: "400 g", ing: "Gram flour, ghee, sugar", col: ["#E2A33B", "#C98B2B", PEACH] },
  { n: "Kaju Katli", image: photos.kajuKatli, pos: "center", p: 370, t: "square", c: ["#fff3e0", ROSE], cal: 410, wt: "250 g", ing: "Cashew, sugar, silver leaf", col: ["#fff3e0", "#E8D3B0", "#c0c0c0"] },
  { n: "Motichoor Laddu", image: photos.motichoorLaddu, pos: "center", p: 230, t: "round", c: ["#FF9A2E", PINK], cal: 380, wt: "400 g", ing: "Boondi, ghee, cardamom", col: ["#FF9A2E", "#F4B860", PINK] },
  { n: "Gulab Jamun", image: photos.gulabJamun, pos: "center", p: 280, t: "drop", c: ["#7a2a2a", ROSE], cal: 320, wt: "500 g", ing: "Khoya, sugar syrup, rose", col: ["#7a2a2a", "#B5472F", ROSE] },
  { n: "Crispy Jalebi", image: photos.crispyJalebi, pos: "center", p: 190, t: "swirl", c: ["#FF8C1A", PINK], cal: 450, wt: "300 g", ing: "Maida, saffron, sugar", col: ["#FF8C1A", "#FFC107", PEACH] },
  { n: "Rose Barfi", image: photos.roseBarfi, pos: "center", p: 320, t: "square", c: [PINK, ROSE], cal: 395, wt: "300 g", ing: "Milk, rose petals, nuts", col: [PINK, ROSE, "#fff"] },
];

const gifts = [
  { n: "Assorted Gift Boxes", image: photos.assortedGifts, pos: "center", d: "Choose from our exquisite hand-picked premium gifting collection", t: "square" },
  { n: "Dry Fruit Gift Boxes", image: photos.dryFruitGifts, pos: "center", d: "Sumptuous assortment of dry fruits & nuts packaged with a touch of royalty", t: "round" },
  { n: "Souvenir Gift Boxes", image: photos.souvenirGifts, pos: "center", d: "Our ode to the beauty and culture of India - each box has a story to tell", t: "swirl" },
];

const snacks = [
  { n: "South Indian Specials", image: photos.southIndianSnacks, pos: "center" },
  { n: "Indian Bakery", image: photos.indianBakery, pos: "center" },
  { n: "Tea Time Snacks", image: photos.teaTimeSnacks, pos: "center" },
  { n: "Indian Biscottis", image: photos.indianBiscottis, pos: "center" },
  { n: "North Indian Specials", image: photos.northIndianSnacks, pos: "center" },
];

const promise = [
  ["♥", "Loved By Many", "Loved by 5 lakh+ customers"], ["✋", "Handmade", "Every piece is made with love"],
  ["🚚", "Ships In 5-7 Days", "Write to us to expedite your order"], ["🌿", "No Preservatives", "Pure taste, naturally fresh"],
];

const money = (n) => "₹ " + n.toLocaleString("en-IN");
const sale = (n) => Math.round(n * (1 - DISCOUNT / 100));

/* ---------- reveal on scroll ---------- */
function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setShow(true), io.disconnect()), { threshold: 0.15 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (show && ref.current) gsap.fromTo(ref.current, { y: 42, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.85, ease: "power3.out" });
  }, [show]);
  return <div ref={ref} className={`reveal ${show ? "in" : ""} ${className}`}>{children}</div>;
}

/* ---------- hero carousel (7 slides) ---------- */
function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const artRef = useRef(null);
  const go = (n) => setI((n + slides.length) % slides.length);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((x) => (x + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [paused]);
  useEffect(() => {
    if (artRef.current) gsap.fromTo(artRef.current, { autoAlpha: 0, scale: 0.9, x: 35, rotateY: -8 }, { autoAlpha: 1, scale: 1, x: 0, rotateY: 0, duration: 1, ease: "power3.out" });
  }, [i]);
  return (
    <section id="home" className="hero" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((s, k) => (
        <div key={k} className={`slide ${k === i ? "active" : ""}`} style={{ background: s.bg }}>
          <div className="slide-text">
            <span className="badge">{s.tag}</span>
            <h1>{s.title}</h1>
            <div className="divider"><i /></div>
            <p>{s.sub}</p>
            <a href={s.href} className="btn">{s.cta}</a>
          </div>
          <div className="slide-art"><img ref={k === i ? artRef : null} src={s.image} alt="Festive Indian sweets and gifting" /></div>
        </div>
      ))}
      <button className="arrow left" onClick={() => go(i - 1)} aria-label="Previous">‹</button>
      <button className="arrow right" onClick={() => go(i + 1)} aria-label="Next">›</button>
      <div className="dots">
        {slides.map((_, k) => <button key={k} className={k === i ? "on" : ""} onClick={() => go(k)} aria-label={`Slide ${k + 1}`} />)}
      </div>
    </section>
  );
}

/* ---------- best seller card with hover info ---------- */
function BestCard({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`bcard ${open ? "open" : ""}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onClick={() => setOpen((o) => !o)}>
      <div className="bimg">
        <span className="off">{DISCOUNT}% OFF</span>
        <img src={item.image} alt={item.n} style={{ objectPosition: item.pos }} />
        <div className="info">
          <h4>{item.n}</h4>
          <ul>
            <li><b>Calories:</b> {item.cal} kcal / 100 g</li>
            <li><b>Weight:</b> {item.wt}</li>
            <li><b>Ingredients:</b> {item.ing}</li>
            <li className="cols"><b>Colours:</b> {item.col.map((c) => <i key={c} style={{ background: c }} />)}</li>
          </ul>
          <button className="btn small" onClick={(e) => { e.stopPropagation(); alert(`${item.n} added to your cart!`); }}>Add to Cart</button>
        </div>
      </div>
      <h3>{item.n}</h3>
      <p className="price"><s>{money(item.p)}</s> <b>{money(sale(item.p))}</b></p>
    </article>
  );
}

function BestSellers() {
  const row = useRef(null);
  const slide = (d) => row.current.scrollBy({ left: d * 320, behavior: "smooth" });
  return (
    <section id="bestsellers" className="section">
      <div className="head-row">
        <h2>Best Sellers</h2>
        <div><button className="sq" onClick={() => slide(-1)}>‹</button><button className="sq" onClick={() => slide(1)}>›</button></div>
      </div>
      <p className="hint">Hover over a sweet to see calories, colours &amp; more</p>
      <div className="best-row" ref={row}>{best.map((b) => <BestCard key={b.n} item={b} />)}</div>
    </section>
  );
}

/* ---------- app ---------- */
export default function App() {
  const [menu, setMenu] = useState(false);
  const [top, setTop] = useState(false);
  useEffect(() => {
    const f = () => setTop(window.scrollY > 500);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const links = [["Home", "#home"], ["Sweets", "#range"], ["Best Sellers", "#bestsellers"], ["Gifting", "#gifting"], ["Snacks", "#snacks"], ["Contact", "#contact"]];
  return (
    <>
      <div className="topbar">🪔 Diwali Sale: Up to {DISCOUNT}% OFF on all sweets! Same day delivery in Bangalore via Swiggy, Zomato &amp; Zepto 🪔</div>
      <header className="nav">
        <a href="#home" className="logo">Bloody <span>Sweet</span><small>SWEETS &amp; SAVOURIES</small></a>
        <button className="burger" onClick={() => setMenu(!menu)} aria-label="Menu">☰</button>
        <nav className={menu ? "show" : ""}>
          {links.map(([n, h]) => <a key={n} href={h} onClick={() => setMenu(false)}>{n}</a>)}
          <a href="#bestsellers" className="btn small">Shop Now</a>
        </nav>
      </header>

      <Hero />

      <section className="offer">
        <div><h2>Diwali Dhamaka!</h2><p>Up to <b>{DISCOUNT}% OFF</b> on all sweets. Offer valid till Diwali.</p></div>
        <a href="#bestsellers" className="btn light">Grab The Offer</a>
      </section>

      <Reveal>
        <section id="range" className="section center">
          <h2>Excellence In Every Bite Of Our Sweets, Snacks, And Treats</h2>
          <p className="lead">With over three decades of expertise in crafting heritage sweets, Bloody Sweet has been a symbol of quality and tradition, bringing the authentic taste of Royal India to your homes.</p>
          <h3 className="left-h">Shop Our Range</h3>
          <div className="grid4">
            {range.map((r, k) => (
              <a href="#bestsellers" className="rcard" key={r.n} style={{ background: [PINK, PEACH, ROSE, PEACH][k] }}>
                <img src={r.image} alt={r.n} /><span>{r.n}</span>
              </a>
            ))}
          </div>
        </section>
      </Reveal>

      <section id="promise" className="promise">
        {promise.map(([ic, t, d]) => <div key={t}><div className="ic">{ic}</div><h4>{t}</h4><p>{d}</p></div>)}
      </section>

      <Reveal><BestSellers /></Reveal>

      <Reveal>
        <section id="gifting" className="section center">
          <h2>✿ The Essence Of Celebration Crafted To Perfection ✿</h2>
          <p className="lead">Exquisitely packaged to suit every occasion, we celebrate your pride, happiness and relationships with absolute grandeur.</p>
          <div className="grid3">
            {gifts.map((g, k) => (
              <div className="gcard" key={g.n}>
                <div className="gimg"><img src={g.image} alt={g.n} style={{ objectPosition: g.pos }} /></div>
                <h3>{g.n}</h3><p>{g.d}</p><a href="#contact" className="btn outline">View Collection</a>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="snacks" className="section center snackbg">
          <h2>Shop Our Snack Range</h2>
          <div className="grid5">
            {snacks.map((s, k) => (
              <div className="scard" key={s.n}>
                <div className="simg"><img src={s.image} alt={s.n} style={{ objectPosition: s.pos }} /></div>
                <h3>{s.n}</h3>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="available" className="section center">
          <h2>We Are Also Available On</h2>
          <p className="lead">Same day delivery in Bangalore</p>
          <div className="logos">{["Swiggy Instamart", "Zomato", "Amazon", "Swiggy", "Zepto", "Blinkit"].map((l) => <span key={l}>{l}</span>)}</div>
        </section>
      </Reveal>

      <footer id="contact" className="footer">
        <div className="f-top"><div className="logo">Bloody <span>Sweet</span><small>SWEETS &amp; SAVOURIES</small></div></div>
        <div className="f-grid">
          <div><h4>Our Range</h4><a href="#range">Sweets</a><a href="#gifting">Gifting</a><a href="#snacks">Indian Bakery</a><a href="#snacks">Indian Biscottis</a></div>
          <div><h4>About Us</h4><a href="#home">Company</a><a href="#promise">Our Promise</a><a href="#contact">Contact Us</a></div>
          <div><h4>Legal</h4><a href="#contact">Terms &amp; Conditions</a><a href="#contact">Shipping Policy</a><a href="#contact">Return Policy</a><a href="#contact">Privacy Policy</a></div>
          <div className="assist">
            <h3>We'd Be Happy To Assist You!</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing to Bloody Sweet!"); e.target.reset(); }}>
              <input type="email" placeholder="Enter email address" required /><button className="btn small">Subscribe</button>
            </form>
            <p><b>Timing:</b> Monday to Saturday, 10:00 AM to 05:30 PM IST</p>
            <p><b>Email:</b> care@bloodysweet.com</p>
          </div>
        </div>
        <p className="copy">© 2026 Bloody Sweet. All rights reserved.</p>
      </footer>

      {top && <button className="totop" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">↑</button>}
    </>
  );
}
