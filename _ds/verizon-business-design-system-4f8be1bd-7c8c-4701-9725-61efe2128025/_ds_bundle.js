/* @ds-bundle: {"format":4,"namespace":"VerizonBusinessDesignSystem_4f8be1","components":[],"sourceHashes":{"ui_kits/vbg-marketing/Chrome.jsx":"3341c5b0864f","ui_kits/vbg-marketing/FilterSidebar.jsx":"788f1e76bc98","ui_kits/vbg-marketing/PlansAndFooter.jsx":"277ede5c901e","ui_kits/vbg-marketing/ProductCard.jsx":"0374b1bea04a","ui_kits/vbg-marketing/app.jsx":"f1530c8878e8","ui_kits/vbg-marketing/data.js":"0ef17d3201fa"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VerizonBusinessDesignSystem_4f8be1 = window.VerizonBusinessDesignSystem_4f8be1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/vbg-marketing/Chrome.jsx
try { (() => {
/* global React */
const {
  useState
} = React;
function Header() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "vbg-utility"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Personal"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-current": "true"
  }, "Business")), /*#__PURE__*/React.createElement("div", {
    className: "right"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Contact us"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Support"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Stores"))), /*#__PURE__*/React.createElement("div", {
    className: "vbg-primary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/verizon-business-black.svg",
    alt: "verizon business"
  })), /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-current": "true"
  }, "Mobile"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Internet"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Solutions"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Insights")), /*#__PURE__*/React.createElement("div", {
    className: "cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Log In"), /*#__PURE__*/React.createElement("button", {
    className: "search"
  }, "Search Verizon ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 14,
      height: 14
    }
  })))));
}
function PromoBanner({
  text,
  ctaText = "Details"
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "vbg-promo"
  }, /*#__PURE__*/React.createElement("b", null, "Online Exclusive."), " ", text, " ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, ctaText));
}
function Stepper({
  current = 1,
  onStep
}) {
  const steps = ["Select device", "Select plan", "Review cart", "Checkout"];
  return /*#__PURE__*/React.createElement("nav", {
    className: "vbg-stepper"
  }, steps.map((label, i) => {
    const state = i < current ? "is-done" : i === current ? "is-current" : "";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `step ${state}`,
      onClick: () => onStep && onStep(i)
    }, /*#__PURE__*/React.createElement("span", {
      className: "dot"
    }, i < current ? "✓" : i + 1), /*#__PURE__*/React.createElement("span", {
      className: "label"
    }, label));
  }));
}
function Breadcrumbs({
  trail
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "vbg-crumb"
  }, trail.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), i === trail.length - 1 ? /*#__PURE__*/React.createElement("span", {
    className: "current"
  }, c) : /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, c))));
}
function CategoryTabs({
  tabs,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "vbg-tabs"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: "vbg-tab",
    "aria-selected": t === active,
    onClick: () => onChange(t)
  }, t)));
}
Object.assign(window, {
  Header,
  PromoBanner,
  Stepper,
  Breadcrumbs,
  CategoryTabs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vbg-marketing/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vbg-marketing/FilterSidebar.jsx
try { (() => {
/* global React */
const {
  useState: useStateFilters
} = React;
function FilterSidebar({
  resultCount,
  sort,
  onSort,
  brands,
  onBrandToggle
}) {
  const [open, setOpen] = useStateFilters({
    brand: true,
    offers: false,
    price: false,
    color: false,
    type: false
  });
  const [sortOpen, setSortOpen] = useStateFilters(false);
  const brandOptions = ["Apple", "Samsung", "Motorola", "Google", "Kyocera", "TCL", "Sonim"];
  const sortOptions = ["Featured", "Price: low to high", "Price: high to low", "Newest", "Best rated"];
  const toggle = k => setOpen(s => ({
    ...s,
    [k]: !s[k]
  }));
  return /*#__PURE__*/React.createElement("aside", {
    className: "vbg-filters"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vbg-filter-head"
  }, "Sort and filter ", /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, resultCount, " results")), /*#__PURE__*/React.createElement("div", {
    className: "vbg-sortby",
    onClick: () => setSortOpen(v => !v)
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Sort by"), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, sort)), /*#__PURE__*/React.createElement("i", {
    "data-lucide": sortOpen ? "chevron-up" : "chevron-down",
    style: {
      width: 16,
      height: 16
    }
  }), sortOpen && /*#__PURE__*/React.createElement("div", {
    className: "vbg-sortby-menu",
    onClick: e => e.stopPropagation()
  }, sortOptions.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => {
      onSort(o);
      setSortOpen(false);
    }
  }, o)))), /*#__PURE__*/React.createElement(Accordion, {
    title: "Brand",
    open: open.brand,
    onToggle: () => toggle("brand")
  }, brandOptions.map(b => /*#__PURE__*/React.createElement("label", {
    key: b
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: brands.includes(b),
    onChange: () => onBrandToggle(b)
  }), b))), /*#__PURE__*/React.createElement(Accordion, {
    title: "Special Offers",
    open: open.offers,
    onToggle: () => toggle("offers")
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
  }), " Limited time"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
  }), " Get it on us"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
  }), " Save with trade-in")), /*#__PURE__*/React.createElement(Accordion, {
    title: "Monthly price",
    open: open.price,
    onToggle: () => toggle("price")
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
  }), " $0\u2013$15 /mo."), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
  }), " $15\u2013$30 /mo."), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
  }), " $30+ /mo.")), /*#__PURE__*/React.createElement(Accordion, {
    title: "Color",
    open: open.color,
    onToggle: () => toggle("color")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      paddingTop: 4
    }
  }, ["#000", "#fff", "#5AB3F3", "#A4E58D", "#FFCD27", "#FFAA60", "#FE86C7", "#B68BF0"].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 24,
      height: 24,
      borderRadius: 9999,
      background: c,
      border: "1px solid rgba(0,0,0,.2)"
    }
  })))), /*#__PURE__*/React.createElement(Accordion, {
    title: "Device Type",
    open: open.type,
    onToggle: () => toggle("type")
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
  }), " Smartphones"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
  }), " Tablets"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
  }), " Laptops"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
  }), " Hotspots"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
  }), " Rugged")));
}
function Accordion({
  title,
  open,
  onToggle,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "vbg-acc-row",
    "data-open": open
  }, /*#__PURE__*/React.createElement("div", {
    className: "vbg-acc-head",
    onClick: onToggle
  }, /*#__PURE__*/React.createElement("span", {
    className: "ttl"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "chev"
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "vbg-acc-body"
  }, children));
}
Object.assign(window, {
  FilterSidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vbg-marketing/FilterSidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vbg-marketing/PlansAndFooter.jsx
try { (() => {
/* global React */
const {
  useState: useStatePlans
} = React;
function PlanComparison() {
  const [lines, setLines] = useStatePlans("4");
  const plans = window.VBG_DATA.plans;
  return /*#__PURE__*/React.createElement("section", {
    className: "vbg-plans"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vbg-plans-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Pick a Business Unlimited plan that fits"), /*#__PURE__*/React.createElement("div", {
    className: "vbg-plans-toggle",
    role: "group",
    "aria-label": "Number of lines"
  }, ["4", "6"].map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    "aria-pressed": lines === n,
    onClick: () => setLines(n)
  }, n, " lines")))), /*#__PURE__*/React.createElement("div", {
    className: "vbg-plans-grid"
  }, plans.map(plan => /*#__PURE__*/React.createElement("article", {
    key: plan.id,
    className: `vbg-plan ${plan.featured ? "is-featured" : ""}`
  }, plan.ribbon && /*#__PURE__*/React.createElement("span", {
    className: "ribbon"
  }, plan.ribbon), /*#__PURE__*/React.createElement("h3", null, plan.name), /*#__PURE__*/React.createElement("div", {
    className: "legal",
    style: {
      marginTop: -4
    }
  }, plan.tagline), /*#__PURE__*/React.createElement("div", {
    className: "price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "big"
  }, "$", plan.prices[lines]), /*#__PURE__*/React.createElement("span", {
    className: "small"
  }, "/line/mo.")), /*#__PURE__*/React.createElement("div", {
    className: "legal"
  }, "With ", lines, " lines on ", plan.name.split(" ").slice(-1)[0], ". Plus taxes & fees."), /*#__PURE__*/React.createElement("ul", null, plan.features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, f))), /*#__PURE__*/React.createElement("button", {
    className: `pick pick--${plan.featured ? "primary" : "secondary"}`
  }, plan.featured ? "Select Plus" : "Select " + plan.name.split(" ").slice(-1)[0])))));
}
function Footer() {
  const cols = [{
    h: "Shop",
    links: ["Smartphones", "Tablets &amp; laptops", "Hotspots &amp; routers", "Wearables", "Bring your own device"]
  }, {
    h: "Plans",
    links: ["Business Unlimited", "Internet plans", "Bundles &amp; savings", "Government &amp; education"]
  }, {
    h: "Solutions",
    links: ["Networking", "Cybersecurity", "Voice &amp; collaboration", "IoT &amp; mobility"]
  }, {
    h: "Support",
    links: ["Contact us", "Stores", "Order status", "Help center", "Accessibility"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "vbg-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cols"
  }, cols.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.h
  }, /*#__PURE__*/React.createElement("h4", null, col.h), /*#__PURE__*/React.createElement("ul", null, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    dangerouslySetInnerHTML: {
      __html: l
    }
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "legal"
  }, "\xA9 2026 Verizon. All Rights Reserved. Verizon Business is a registered trademark. Pricing reflects new lines on qualifying plans; taxes, fees and surcharges apply. Limited-time offers; subject to change. See verizonbusiness.com for full details."));
}
Object.assign(window, {
  PlanComparison,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vbg-marketing/PlansAndFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vbg-marketing/ProductCard.jsx
try { (() => {
/* global React */

function ProductCard({
  p,
  compareSet,
  onCompare
}) {
  const checked = compareSet.has(p.id);
  return /*#__PURE__*/React.createElement("article", {
    className: "vbg-card"
  }, p.offer && /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "tag",
    style: {
      width: 12,
      height: 12
    }
  }), p.offer.tag, p.offer.details && /*#__PURE__*/React.createElement(React.Fragment, null, ". ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Details"))), /*#__PURE__*/React.createElement("div", {
    className: "image",
    style: {
      background: p.gradient
    }
  }, "[ ", p.name, " ]"), /*#__PURE__*/React.createElement("div", {
    className: "swatches"
  }, p.colors.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      background: c
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, p.name), /*#__PURE__*/React.createElement("div", {
    className: "price-line"
  }, "Starts at ", /*#__PURE__*/React.createElement("b", null, "$", p.mo.toFixed(2), "/mo."), " for 36 months,", /*#__PURE__*/React.createElement("br", null), "0% APR. Retail price $", p.retail.toFixed(2), "."), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("button", null, "Explore details"), /*#__PURE__*/React.createElement("label", {
    className: "compare"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: () => onCompare(p.id)
  }), "Compare")));
}
function FinanceInsert() {
  return /*#__PURE__*/React.createElement("div", {
    className: "vbg-insert vbg-insert--finance"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "badge-dollar-sign",
    style: {
      width: 28,
      height: 28
    }
  }), /*#__PURE__*/React.createElement("h3", null, "You may qualify for device financing"), /*#__PURE__*/React.createElement("p", null, "Spread the cost of new devices across 36 months at 0% APR \u2014 no down payment, no annual fees."), /*#__PURE__*/React.createElement("button", null, "Apply now"));
}
function CompleteInsert() {
  return /*#__PURE__*/React.createElement("div", {
    className: "vbg-insert vbg-insert--complete"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "New"), /*#__PURE__*/React.createElement("h3", null, "Verizon Business Complete"), /*#__PURE__*/React.createElement("p", null, "Don't want to buy a device? Get your device as a service with an unlimited plan, 24/7 support, device protection and more. Starting as low as ", /*#__PURE__*/React.createElement("b", null, "$50/line/mo.")), /*#__PURE__*/React.createElement("button", null, "Get started"));
}
function ByodInsert() {
  return /*#__PURE__*/React.createElement("div", {
    className: "vbg-insert vbg-insert--byod"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "smartphone",
    style: {
      width: 28,
      height: 28
    }
  }), /*#__PURE__*/React.createElement("h3", null, "Bring your device and\xA0save 50%"), /*#__PURE__*/React.createElement("p", null, "Switch to Verizon Business, and we'll help cover what you owe on your current phone \u2014 then save half off a qualifying plan when you bring it with you."), /*#__PURE__*/React.createElement("button", null, "See switch offers"));
}
Object.assign(window, {
  ProductCard,
  FinanceInsert,
  CompleteInsert,
  ByodInsert
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vbg-marketing/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vbg-marketing/app.jsx
try { (() => {
/* global React, ReactDOM, lucide,
   Header, PromoBanner, Stepper, Breadcrumbs, CategoryTabs,
   FilterSidebar, ProductCard, FinanceInsert, CompleteInsert, ByodInsert,
   PlanComparison, Footer */
const {
  useState,
  useEffect,
  useMemo
} = React;
function App() {
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState("Featured");
  const [brands, setBrands] = useState([]);
  const [stepperIndex, setStepperIndex] = useState(1);
  const [compare, setCompare] = useState(() => new Set());
  const allProducts = window.VBG_DATA.products;
  const products = useMemo(() => {
    let p = allProducts;
    if (cat === "Free") p = p.filter(x => x.offer && /free/i.test(x.offer.tag));else if (cat !== "All") p = p.filter(x => x.brand === cat);
    if (brands.length) p = p.filter(x => brands.includes(x.brand));
    const copy = [...p];
    if (sort === "Price: low to high") copy.sort((a, b) => a.mo - b.mo);else if (sort === "Price: high to low") copy.sort((a, b) => b.mo - a.mo);else if (sort === "Newest") copy.reverse();
    return copy;
  }, [cat, sort, brands, allProducts]);
  function onCompare(id) {
    setCompare(prev => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id);else n.add(id);
      return n;
    });
  }
  function onBrandToggle(b) {
    setBrands(s => s.includes(b) ? s.filter(x => x !== b) : [...s, b]);
  }

  // Insert cards woven into the product grid at specific positions.
  const inserts = [{
    at: 2,
    render: () => /*#__PURE__*/React.createElement(FinanceInsert, {
      key: "i-finance"
    })
  }, {
    at: 5,
    render: () => /*#__PURE__*/React.createElement(CompleteInsert, {
      key: "i-complete"
    })
  }, {
    at: 8,
    render: () => /*#__PURE__*/React.createElement(ByodInsert, {
      key: "i-byod"
    })
  }];
  const grid = [];
  products.forEach((p, i) => {
    grid.push(/*#__PURE__*/React.createElement(ProductCard, {
      key: p.id,
      p: p,
      compareSet: compare,
      onCompare: onCompare
    }));
    const ins = inserts.find(x => x.at === i);
    if (ins) grid.push(ins.render());
  });

  // Re-render Lucide icons whenever the DOM changes.
  useEffect(() => {
    window.lucide && lucide.createIcons();
  });
  const tabs = ["All", "Free", "Apple", "Samsung", "Motorola", "Google", "Kyocera", "TCL", "Sonim"];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(PromoBanner, {
    text: "New Verizon customers can get $200 off each new smartphone. Limited time offer."
  }), /*#__PURE__*/React.createElement(Stepper, {
    current: stepperIndex,
    onStep: setStepperIndex
  }), /*#__PURE__*/React.createElement(Breadcrumbs, {
    trail: ["Business", "Mobile", "Devices"]
  }), /*#__PURE__*/React.createElement("header", {
    className: "vbg-hero"
  }, /*#__PURE__*/React.createElement("h1", null, "All business devices")), /*#__PURE__*/React.createElement(CategoryTabs, {
    tabs: tabs,
    active: cat,
    onChange: setCat
  }), /*#__PURE__*/React.createElement("main", {
    className: "vbg-main"
  }, /*#__PURE__*/React.createElement(FilterSidebar, {
    resultCount: products.length,
    sort: sort,
    onSort: setSort,
    brands: brands,
    onBrandToggle: onBrandToggle
  }), /*#__PURE__*/React.createElement("div", {
    className: "vbg-grid"
  }, grid.length ? grid : /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1",
      padding: 64,
      textAlign: "center",
      color: "var(--vds-element-secondary)"
    }
  }, "No devices match these filters."))), /*#__PURE__*/React.createElement(PlanComparison, null), /*#__PURE__*/React.createElement(Footer, null), compare.size > 0 && /*#__PURE__*/React.createElement("div", {
    className: "vbg-compare-bar"
  }, /*#__PURE__*/React.createElement("span", null, compare.size, " device", compare.size === 1 ? "" : "s", " to compare"), /*#__PURE__*/React.createElement("button", {
    onClick: () => alert("Comparison view would open here.")
  }, "Compare"), /*#__PURE__*/React.createElement("span", {
    onClick: () => setCompare(new Set()),
    style: {
      cursor: "pointer",
      opacity: 0.7,
      marginLeft: 4
    }
  }, "\u2715")));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vbg-marketing/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vbg-marketing/data.js
try { (() => {
// Product + plan data for the VBG marketing UI kit.
// Each device is a placeholder card (no real images, no real pricing).

window.VBG_DATA = {
  products: [{
    id: "ipad-air-13-m4",
    brand: "Apple",
    name: 'Apple iPad Air 13" (M4)',
    retail: 799.99,
    mo: 22.22,
    offer: {
      tag: "Get $100 off select Tablet or Laptop",
      details: true
    },
    colors: ["#5A5A5A", "#A4C8E9", "#F8F3E9", "#DBC9F7"],
    gradient: "linear-gradient(160deg,#AAD8F9 0%,#5A88B5 100%)"
  }, {
    id: "iphone-17-pro",
    brand: "Apple",
    name: "Apple iPhone 17 Pro",
    retail: 1199.99,
    mo: 33.33,
    offer: {
      tag: "Get it on us",
      details: true
    },
    colors: ["#1D1C1C", "#F8F3E9", "#DBC9F7", "#5AB3F3"],
    gradient: "linear-gradient(160deg,#FFC0E2 0%,#B6027D 100%)"
  }, {
    id: "iphone-air",
    brand: "Apple",
    name: "Apple iPhone Air",
    retail: 999.99,
    mo: 27.77,
    offer: null,
    colors: ["#F8F3E9", "#1D1C1C", "#5AB3F3"],
    gradient: "linear-gradient(160deg,#F8F3E9 0%,#DDDAD4 100%)"
  }, {
    id: "galaxy-s26",
    brand: "Samsung",
    name: "Samsung Galaxy S26",
    retail: 899.99,
    mo: 25.00,
    offer: {
      tag: "Save up to $800",
      details: true
    },
    colors: ["#0089EC", "#1D1C1C", "#FE3DAA", "#A4E58D"],
    gradient: "linear-gradient(160deg,#3E42BB 0%,#1F216A 100%)"
  }, {
    id: "galaxy-z-fold",
    brand: "Samsung",
    name: "Samsung Galaxy Z Fold7",
    retail: 1899.99,
    mo: 52.77,
    offer: {
      tag: "New",
      details: false
    },
    colors: ["#1D1C1C", "#F8F3E9"],
    gradient: "linear-gradient(160deg,#1D1C1C 0%,#333332 100%)"
  }, {
    id: "moto-edge",
    brand: "Motorola",
    name: "motorola edge (2026)",
    retail: 599.99,
    mo: 16.66,
    offer: {
      tag: "Get $100 off",
      details: true
    },
    colors: ["#681D45", "#003E6C", "#1D1C1C"],
    gradient: "linear-gradient(160deg,#681D45 0%,#381C5C 100%)"
  }, {
    id: "pixel-10-pro",
    brand: "Google",
    name: "Google Pixel 10 Pro",
    retail: 999.99,
    mo: 27.77,
    offer: null,
    colors: ["#1D1C1C", "#FFE787", "#F8F3E9", "#A4E58D"],
    gradient: "linear-gradient(160deg,#A4E58D 0%,#008331 100%)"
  }, {
    id: "pixel-fold-2",
    brand: "Google",
    name: "Google Pixel Fold 2",
    retail: 1799.99,
    mo: 49.99,
    offer: {
      tag: "Limited time",
      details: true
    },
    colors: ["#F8F3E9", "#1D1C1C"],
    gradient: "linear-gradient(160deg,#FFCAAA 0%,#732706 100%)"
  }, {
    id: "tcl-tab",
    brand: "TCL",
    name: "TCL Tab 11 5G",
    retail: 349.99,
    mo: 9.72,
    offer: {
      tag: "Free with new line",
      details: true
    },
    colors: ["#1D1C1C", "#5AB3F3"],
    gradient: "linear-gradient(160deg,#5AB3F3 0%,#003E6C 100%)"
  }, {
    id: "sonim-xp10",
    brand: "Sonim",
    name: "Sonim XP10 Rugged",
    retail: 549.99,
    mo: 15.27,
    offer: null,
    colors: ["#FFCD27", "#1D1C1C"],
    gradient: "linear-gradient(160deg,#FFCD27 0%,#A27033 100%)"
  }, {
    id: "kyocera-duraforce",
    brand: "Kyocera",
    name: "Kyocera DuraForce Pro 3",
    retail: 699.99,
    mo: 19.44,
    offer: {
      tag: "Built for the field",
      details: false
    },
    colors: ["#1D1C1C", "#FFCD27", "#FFE787"],
    gradient: "linear-gradient(160deg,#716F6D 0%,#1D1C1C 100%)"
  }, {
    id: "samsung-tab-s10",
    brand: "Samsung",
    name: "Galaxy Tab S10 Ultra",
    retail: 1199.99,
    mo: 33.33,
    offer: {
      tag: "Save $200",
      details: true
    },
    colors: ["#1D1C1C", "#F8F3E9"],
    gradient: "linear-gradient(160deg,#1F216A 0%,#3E42BB 100%)"
  }],
  plans: [{
    id: "start",
    name: "Business Unlimited Start",
    tagline: "Reliable 5G basics",
    featured: false,
    prices: {
      "4": 30,
      "6": 27
    },
    features: ["Unlimited 5G data", "5 GB premium mobile hotspot", "Verizon's reliable network", "Standard support"]
  }, {
    id: "plus",
    name: "Business Unlimited Plus",
    tagline: "Most popular for SMB",
    featured: true,
    ribbon: "Most popular",
    prices: {
      "4": 45,
      "6": 40
    },
    features: ["Unlimited premium 5G data", "100 GB premium mobile hotspot", "50% off a connected device plan", "Priority support"]
  }, {
    id: "pro",
    name: "Business Unlimited Pro",
    tagline: "For high-data teams",
    featured: false,
    prices: {
      "4": 60,
      "6": 55
    },
    features: ["Unlimited premium 5G Ultra Wideband", "200 GB premium mobile hotspot", "Verizon Business Complete eligibility", "24/7 priority business support"]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vbg-marketing/data.js", error: String((e && e.message) || e) }); }

})();
