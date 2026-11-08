import { useEffect, useState } from "react";

const A = "/assets";

type Section = "about" | "uiux" | "art";

const projects = [
  {
    name: "Health Education App",
    cardName: "SEPO",
    description:
      "Sepo is an academic case study project involving the user experience design of a self-directed mobile educational app about osteoarthritis.",
    image: `${A}/182e8.png`,
    primary: "linear-gradient(90deg, #3578dc, #14b9a8)",
    primaryLabel: "#3578DC - #14B9A8",
    secondary: "#00A796",
    secondaryLabel: "#00A796",
    link: "https://www.behance.net/gallery/245829887/Osteoarthritis-Education-App",
  },
  {
    name: "Rumah Ramah",
    cardName: "Rumah Ramah",
    description:
      "This is a learning project featuring a landing page case study for an NGO focused on environmental issues and deforestation.",
    image: `${A}/f63a1.png`,
    primary: "#FFE853",
    primaryLabel: "#FFE853",
    secondary: "#22A257",
    secondaryLabel: "#22A257",
    link: "https://www.behance.net/gallery/247992871/Landing-Page-NGO-Lingkungan",
  },
  {
    name: "Vintero VR",
    cardName: "Vintero",
    description:
      "Vintero VR is the best solution for marketing your property. With 360° virtual tour technology, you can showcase your property in a more interactive and engaging way.",
    image: `${A}/82fcd.png`,
    primary: "#5E93E3",
    primaryLabel: "#5E93E3",
    secondary: "#AA54DB",
    secondaryLabel: "#AA54DB",
    link: "https://www.figma.com/proto/k2asDJNeUPArtjAPtoMpyY/Vintero-Landing-Page?node-id=3001-2882",
  },
  {
    name: "Nayue Cosmetic",
    cardName: "Nayue",
    description:
      "Focusing on OEM & ODM beauty products for private labels in the global market. I worked on this project during my internship as a UI/UX Designer at Sekawan Studio.",
    image: `${A}/5d4c7.png`,
    primary: "#7EDDD3",
    primaryLabel: "#7EDDD3",
    secondary: "#4C857F",
    secondaryLabel: "#4C857F",
    link: "https://www.figma.com/proto/ROjrYdhdsr3Yau44sE8FOJ/Nayue-Kosmetik?node-id=1072-18515",
  },
  {
    name: "Five Project",
    cardName: "GTA V Roleplay",
    description:
      "Five Project Indonesia is a server for the online game GTA V. I worked on this project while freelancing with my friends.",
    image: `${A}/0fc9f.png`,
    primary: "#5E44CB",
    primaryLabel: "#5E44CB",
    secondary: "#ECF9F1",
    secondaryLabel: "#ECF9F1",
    link: "https://www.figma.com/proto/jEEmiY9aAbrhRfWQbSzH8m/GTA-V-PROJECT?node-id=2-6",
  },
  {
    name: "PouchPack",
    cardName: "PouchPack",
    description:
      "Pouchpack is a manufacturer of custom gift sets. I worked on this project while freelancing with my friends.",
    image: `${A}/d3a88.png`,
    primary: "#FDD34D",
    primaryLabel: "#FDD34D",
    secondary: "#738678",
    secondaryLabel: "#738678",
    link: "https://www.figma.com/proto/TS3LhWrcZKwrLgFl4xtQQv/PouchPack-Landing-Page?node-id=167-293",
  },
];

const art = [
  ["5a923.png", "Dream Garden", "rotated"],
  ["fd4bb.png", "Eid Mubarak", ""],
  ["a59e6.png", "Traditional Editorial", "rotated"],
  ["30348.png", "Wira RYTR", ""],
  ["40ef3.png", "Original", "rotated"],
  ["48265.png", "Sky Study", "rotated"],
  ["b96a2.png", "Rumah Yang Tak Lagi Ramah", ""],
  ["5a181.png", "Vision", ""],
];

function Socials() {
  return (
    <div className="socials" aria-label="Social links">
      <a
        href="https://www.linkedin.com/in/arifwiranata/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <img src={`${A}/949cc.png`} alt="" />
      </a>
      <a
        href="https://instagram.com/wiranarip"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <img src={`${A}/e9dd2.png`} alt="" />
      </a>
      <a href="mailto:arifwiranata.wira@gmail.com" aria-label="Email">
        <img src={`${A}/b8971.png`} alt="" />
      </a>
    </div>
  );
}

function Navigation({
  section,
  onChange,
}: {
  section: Section;
  onChange: (section: Section) => void;
}) {
  return (
    <nav className="section-nav" aria-label="Portfolio sections">
      {(["about", "uiux", "art"] as const).map((item) => (
        <button
          className={section === item ? "active" : ""}
          key={item}
          onClick={() => onChange(item)}
          aria-current={section === item ? "page" : undefined}
        >
          <span>{item === "uiux" ? "Ui/Ux" : item[0].toUpperCase() + item.slice(1)}</span>
          {section === item && <img src={`${A}/6895c.png`} alt="" />}
        </button>
      ))}
    </nav>
  );
}

function Intro({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="intro">
      <div className="intro-logo" aria-label="Portfolio">
        P<span>O</span>RTF<span>O</span>LI<span>O</span>
        <i />
      </div>
      <button className="enter-button" onClick={onEnter}>
        <span>Come on in</span>
        <b />
      </button>
    </div>
  );
}

function About() {
  return (
    <section className="about-view view" aria-labelledby="about-title">
      <div className="about-copy">
        <div className="hi-row">
          <h1 id="about-title">Hi</h1>
          <img src={`${A}/6f857.png`} alt="" />
        </div>
        <p>
          I’m Wira. Interested in design and art. Enjoys turning complex problems into simple,
          thoughtful experiences. I combine curiosity, visual design, and user-centered thinking to
          create interfaces that are both intuitive and meaningful.
        </p>
      </div>
      <div className="celestial-divider" aria-hidden="true">
        <i />
        <img src={`${A}/3ec42.png`} alt="" />
        <i />
      </div>
      <div className="portrait-card">
        <img className="portrait-art" src={`${A}/ac081.png`} alt="Illustrated portrait of Wira" />
        <img className="portrait-frame" src={`${A}/671b3.svg`} alt="" />
        <strong>Wira</strong>
      </div>
    </section>
  );
}

function UiUx({ index, setIndex }: { index: number; setIndex: (value: number) => void }) {
  const project = projects[index];
  const move = (delta: number) => setIndex((index + delta + projects.length) % projects.length);

  return (
    <section className="project-view view" aria-label="UI and UX work">
      <div className="project-card">
        <img src={project.image} alt="" />
        <div className="project-shade" />
        <strong>{project.cardName}</strong>
      </div>
      <div className="project-content">
        <div className="carousel-controls">
          <button onClick={() => move(-1)} aria-label="Previous project">
            ‹
          </button>
          <button onClick={() => move(1)} aria-label="Next project">
            ›
          </button>
        </div>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <div className="scheme-title">
          <img src={`${A}/e14b3.png`} alt="" />
          <h2>Color Scheme</h2>
        </div>
        <div className="swatches">
          <div>
            <b>Primary</b>
            <i style={{ background: project.primary }} />
            <small>{project.primaryLabel}</small>
          </div>
          <div>
            <b>Secondary</b>
            <i style={{ background: project.secondary }} />
            <small>{project.secondaryLabel}</small>
          </div>
        </div>
        <a className="prototype-button" href={project.link} target="_blank" rel="noreferrer">
          Prototype
        </a>
        <div className="project-dots" aria-label="Choose project">
          {projects.map((item, i) => (
            <button
              key={item.name}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
            >
              <span className="sr-only">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Art() {
  return (
    <section className="art-view view" aria-label="Art portfolio">
      {art.map(([file, title, orientation]) => (
        <figure key={file} className="art-card">
          <img className={orientation} src={`${A}/${file}`} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      ))}
    </section>
  );
}

export default function App() {
  const [entered, setEntered] = useState(false);
  const [section, setSection] = useState<Section>("about");
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (section !== "uiux") return;
      if (event.key === "ArrowLeft")
        setProjectIndex((value) => (value + projects.length - 1) % projects.length);
      if (event.key === "ArrowRight") setProjectIndex((value) => (value + 1) % projects.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [section]);

  return (
    <main className="site-shell">
      {!entered && <Intro onEnter={() => setEntered(true)} />}
      <div className={`portfolio ${entered ? "revealed" : ""}`}>
        <Socials />
        <Navigation section={section} onChange={setSection} />
        {section === "about" && <About />}
        {section === "uiux" && <UiUx index={projectIndex} setIndex={setProjectIndex} />}
        {section === "art" && <Art />}
      </div>
    </main>
  );
}
