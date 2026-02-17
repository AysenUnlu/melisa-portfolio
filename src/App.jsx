/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/

import React, { useMemo, useState } from "react";


const SITE = {
  name: "Melisa", // change
  tagline: "Photography • Art • Music • Hobbies",
  socials: [
    // add/remove as needed
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
  ],
  about: {
    headline: "Hi! I’m Melisa 👋",
    bio: `I’m 14 and I love taking photos, drawing, and performing music.
This page is where I share my favorite shots, artworks, and videos.`,
    highlights: [
      "Bird photography + nature walks",
      "Sketching, watercolor, and digital art",
      "Concerts, music practice, and playlists",
      "Other hobbies: games, crafts, collections",
    ],
  },
  hobbies: [
    { title: "Birding", desc: "I like spotting birds and photographing them." },
    { title: "Drawing", desc: "Sketchbook + digital pieces." },
    { title: "Music", desc: "Concerts, practice clips, and performance videos." },
    { title: "Other", desc: "Board games, crafts, and more." },
  ],
 
  photography: [
    // Replace src with your own images later


  ],
  artwork: [
    // Replace with your art images later
   
    { title: "Singing Bird", src: "/photos/Bird1.JPG?auto=format&fit=crop&w=1200&q=80", medium: "Pencil", category: "Birds" },
    { title: "Woodpecker", src: "/photos/Bird2.JPG?auto=format&fit=crop&w=1200&q=80", medium: "Pencil", category:"Birds" },
    { title: "Bird Perched on a Branch ", src: "/photos/Bird3.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Ink", category:"Birds" },
    { title: "Bird from Below ", src: "/photos/Bird4.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Watercolor", category:"Birds" },
    { title: "Pinecone ", src: "/photos/Pine.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Ink", category:"Plants" },
    { title: "Peppers ", src: "/photos/Pepper.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Ink", category:"Plants" },
    { title: "Orchid ", src: "/photos/Plant1.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Ink", category:"Plants" },
    { title: "Bicycle ", src: "/photos/Bicycle.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Pencil", category:"Things" },
    { title: "Hands ", src: "/photos/Hands.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Pencil", category:"Things" },
    { title: "Lazy Susan ", src: "/photos/Lazy.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Ink", category:"Things" },
    { title: "Models", src: "/photos/silly.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Pencil", category:"Things" },
    { title: "Nature Morte", src: "/photos/still.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Pencil", category:"Things" },
    { title: "Shapes", src: "/photos/Shadow1.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Pencil", category:"Shadows" },
    { title: "On the Kitchen Table", src: "/photos/Shadow2.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Pencil", category:"Shadows" },
    { title: "Melisa's rendition of The Gleaners — Jean-François Millet (1857)", src: "/photos/Shadow3.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Pencil", category:"Shadows" },
    { title: "Self", src: "/photos/self1.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Pencil", category:"Characters" },
    { title: "Cool Guy", src: "/photos/Char1.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Pencil", category:"Characters" },
    { title: "Friends", src: "/photos/self2.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Pencil", category:"Characters" },
    { title: "Peace", src: "/photos/char3.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Pencil", category:"Characters" },
    { title: "Love", src: "/photos/char4.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Pencil", category:"Characters" },
    { title: "Laughter", src: "/photos/char5.jpeg?auto=format&fit=crop&w=1200&q=80", medium: "Pencil", category:"Characters" },

  ],
  videos: [
    // YouTube embeds: use the EMBED url format: https://www.youtube.com/embed/VIDEO_ID
    { title: "Academy Philarmonic Orchestra", type: "youtube", url: " https://www.youtube.com/embed/g9FxQV4LZos" },
    { title: "Solo concert 2024", type: "youtube", url: "https://www.youtube.com/embed/_DrIq9_ipvQ?si=BtDlQIxNust560Xz" },
    { title: "Solo concert 2023", type: "youtube", url: "https://www.youtube.com/embed/xA3rXdMUBlI?si=9honI5L1YBxvIBIS" },
    { title: "Solo concert 2022", type: "youtube", url: "https://www.youtube.com/embed/dXYZnanu6nw" }
                                                           

    // Local video example (put file into /public/videos/ and update path)
    // { title: "My Video File", type: "mp4", url: "/videos/my-performance.mp4" },
  ],
};

function Nav({ section, setSection, query, setQuery }) {
  const items = ["Home", "Photography", "Artwork", "Videos", "Hobbies", "About"];
  return (
    <header className="nav">
      <div className="navInner">
        <div className="brand">
          <img className="logo" src="/photos/me.JPG?auto=format&fit=crop&w=1200&q=80"></img>
          <div>
            <div className="brandName">{SITE.name}</div>
            <div className="brandTag">{SITE.tagline}</div>
          </div>
        </div>


        <nav className="navLinks">
         <div style={{ display: "flex", justifyContent: "center", marginBottom:1 }}>
          <div className="tabGroup">
          {items.map((it) => (
            <button 
              key={it}
              className="tabBtn"/*{`navBtn ${section === it ? "active" : ""}`}*/
              onClick={() => setSection(it)}
            >
              {it}
            </button>
           
          ))}
          </div>
          </div>

         
        </nav>
         <div className="searchWrap" role="search" aria-label="Site search">
          <span className="searchIcon">⌕</span>
          <input
            className="searchInput"
            placeholder="Search photos, art, videos, hobbies…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="searchClear" onClick={() => setQuery("")} aria-label="Clear search">
              Clear
            </button>
          )}
        </div>
        
      </div>
    </header>
  );
}


function Lightbox({ open, item, onClose }) {
  if (!open || !item) return null;
  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightboxInner" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.title} />
        <div className="lightboxMeta">
          <div className="lightboxTitle">{item.title}</div>
          {item.tag && <div className="pill">{item.tag}</div>}
          {item.medium && <div className="pill">{item.medium}</div>}
        </div>
        <button className="closeBtn" onClick={onClose} aria-label="Close">×</button>
      </div>
    </div>
  );
}

function Grid({ items, onClick }) {
  return (
    <div className="grid">
      {items.map((it) => (
        <button key={it.title} className="card" onClick={() => onClick(it)}>
          <img src={it.src} alt={it.title} loading="lazy" />
          <div className="cardMeta">
            <div className="cardTitle">{it.title}</div>
            {(it.tag || it.medium) && (
              <div className="cardSub">{it.tag || it.medium}</div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}

function Home({ setSection }) {
  return (
    <section className="page">
      <div className="hero">
        <div className="heroMain">
          <div className="heroMainTop">
            <div>
              <div className="heroBadge">Portfolio</div>
              <h1 style={{ marginTop: 10 }}>{SITE.about.headline}</h1>
              <p className="muted">{SITE.about.bio}</p>
            </div>
          </div>

          <div className="heroActions">
            <button className="primary" onClick={() => setSection("Photography")}>View Photography</button>
            <button className="ghost" onClick={() => setSection("Artwork")}>See Artwork</button>
            <button className="ghost" onClick={() => setSection("Videos")}>Watch Videos</button>
          </div>
        </div>

        <aside className="heroSide">
          <div className="heroSideTitle">Highlights</div>
          <ul>
            {SITE.about.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </aside>
      </div>

      <div className="tiles">
        <button className="tile" onClick={() => setSection("Photography")}>
          <div className="tileKicker">Photography</div>
          <div className="tileDesc">Galleries, favorites, and featured shots.</div>
        </button>
        <button className="tile" onClick={() => setSection("Artwork")}>
          <div className="tileKicker">Artwork</div>
          <div className="tileDesc">Sketches, paint, and digital pieces.</div>
        </button>
        <button className="tile" onClick={() => setSection("Videos")}>
          <div className="tileKicker">Videos</div>
          <div className="tileDesc">Concert clips, practice sessions, performances.</div>
        </button>
      </div>
    </section>
  );
}


function Photography({ onOpen, query }) {
  /*const [filter, setFilter] = React.useState("All");

  const tags = React.useMemo(() => {
    return ["All", ...new Set(SITE.photography.map(p => p.tag))];
  }, []);

  const q = query?.toLowerCase() || "";

  let shown =
    filter === "All"
      ? SITE.photography
      : SITE.photography.filter(p => p.tag === filter);

  if (q) {
    shown = shown.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.tag.toLowerCase().includes(q)
    );
  }

  return (
    <section className="page">
      <div className="pageHead">
        <h2>Photography</h2>

        <div className="filters">
          {tags.map(t => (
            <button
              key={t}
              className={`chip ${filter === t ? "on" : ""}`}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <Grid items={shown} onClick={onOpen} />
    </section>
  );*/
  return (<a
        href="https://melisaunlu.smugmug.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="primary"
      >
        <img src= "/photos/screenshot.jpeg?auto=format&fit=crop&w=1200&q=80"/>
        <p>Open Full Photography Gallery</p>
       
      </a>)
}


function Artwork({ onOpen, query }) {
  const [filter, setFilter] = React.useState("All");

  const categories = React.useMemo(() => {
    return ["All", ...Array.from(new Set(SITE.artwork.map(a => a.category)))];
  }, []);

  const q = query?.trim().toLowerCase() || "";

  let filtered =
    filter === "All"
      ? SITE.artwork
      : SITE.artwork.filter(a => a.category === filter);

  if (q) {
    filtered = filtered.filter(a =>
      (a.title || "").toLowerCase().includes(q) ||
      (a.medium || "").toLowerCase().includes(q) ||
      (a.category || "").toLowerCase().includes(q)
    );
  }

  return (
    <section className="page">
      <div className="pageHead">
        <h2>Artwork</h2>

        <div className="filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`chip ${filter === c ? "on" : ""}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
        
      </div>

      <Grid items={filtered} onClick={onOpen} />
    </section>
  );
}


function Videos() {
  return (
    <section className="page">
      <div className="pageHead">
        <h2>Videos</h2>
        <p className="muted">Concert clips, practice videos, and more.</p>
      </div>

      <div className="videoGrid">
        {SITE.videos.map((v) => (
          <div key={v.title} className="videoCard">
            <div className="videoTitle">{v.title}</div>
            {v.type === "youtube" ? (
              <div className="videoWrap">
                <iframe
                  src={v.url}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <video controls className="videoEl">
                <source src={v.url} type="video/mp4" />
                Sorry—your browser can’t play this video.
              </video>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Hobbies() {
  return (
    <section className="page">
      <div className="pageHead">
        <h2>Hobbies</h2>
        <p className="muted">A few things I’m into lately.</p>
      </div>
      <div className="hobbyGrid">
        {SITE.hobbies.map((h) => (
          <div key={h.title} className="hobbyCard">
            <div className="hobbyTitle">{h.title}</div>
            <div className="muted">{h.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="page">
      <div className="pageHead">
        <h2>About Me</h2>
        <p className="muted">
          I don’t see the world the way everyone else does. I see it in more detail.
        </p>
      </div>

      <div className="aboutBox">
        <h3>{SITE.about.headline}</h3>
        <p>{SITE.about.bio}</p>

        <div className="divider" />

        <h4>Quick Facts</h4>
        <ul>
          {SITE.about.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>

        <div className="divider" />

        <h4>Contact</h4>
        <p className="muted">
          Email me
        </p>
        <div className="contactRow">
          <a className="primaryLink" href="mailto:aysenunlu@gmail.com">Email</a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [section, setSection] = useState("Home");
  const [lightboxItem, setLightboxItem] = useState(null);
  const [query, setQuery] = useState("");
  return (
    <div className="app">
      <Nav section={section} setSection={setSection} query={query} setQuery={setQuery} />

      <main className="main">
        {section === "Home" && <Home setSection={setSection} />}
        {section === "Photography" && (
            <Photography onOpen={setLightboxItem} query={query} />
        )}

        {section === "Artwork" && (
               <Artwork onOpen={setLightboxItem} query={query} />
        )}
        {section === "Videos" && <Videos />}
        {section === "Hobbies" && <Hobbies />}
        {section === "About" && <About />}
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {SITE.name}</span>
        <span className="dot">•</span>
        <span className="muted">Made with React</span>
      </footer>

      <Lightbox
        open={!!lightboxItem}
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />
    </div>
  );
}

