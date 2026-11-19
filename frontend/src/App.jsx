
import "./App.css";

const features = [
  {
    icon: "✓",
    title: "My Tasks",
    description: "Keep your to-do list under control.",
    color: "peach",
    number: "01"
  },
  {
    icon: "✦",
    title: "Assignments",
    description: "Never lose track of a deadline.",
    color: "lavender",
    number: "02"
  },
  {
    icon: "◷",
    title: "Study Sessions",
    description: "Make every study hour count.",
    color: "mint",
    number: "03"
  },
  {
    icon: "▤",
    title: "Exam Planner",
    description: "Stay one step ahead of exam day.",
    color: "yellow",
    number: "04"
  },
  {
    icon: "✎",
    title: "Study Notes",
    description: "All your ideas, neatly organized.",
    color: "blue",
    number: "05"
  },
  {
    icon: "♙",
    title: "My Account",
    description: "Your own personalized study space.",
    color: "pink",
    number: "06"
  }
];

function App() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="dashboard">

      <aside className="sidebar">
        <div className="brand">
          <div className="brand-symbol">✳</div>
          <div>
            <h1 id="project-name">Student Planner</h1>
            <span>YOUR STUDY SPACE</span>
          </div>
        </div>

        <div className="sidebar-heading">WORKSPACE</div>

        <nav className="navigation">
          <a className="nav-link active" href="#home">
            <span>◫</span> Overview
          </a>
          <a className="nav-link" href="#features">
            <span>✓</span> My Planner
          </a>
          <a className="nav-link" href="#week">
            <span>▦</span> This Week
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-illustration">✦</div>
          <p>A little progress every day adds up.</p>
          <span>YOU'VE GOT THIS!</span>
        </div>
      </aside>

      <main className="main-content" id="home">

        <header className="topbar">
          <div className="breadcrumb">
            Workspace <span>/</span> Overview
          </div>
          <div className="topbar-right">
            <span className="today-date">{formattedDate}</span>
            <div className="avatar">SP</div>
          </div>
        </header>

        <div className="page-content">

          <div className="page-heading">
            <div>
              <span className="eyebrow">YOUR ACADEMIC DASHBOARD</span>
              <h2>Make today count<span className="dot">.</span></h2>
              <p>One place for everything on your academic journey.</p>
            </div>
            <div className="heading-decoration">✳</div>
          </div>

          <section className="welcome-banner">
            <div className="welcome-copy">
              <span className="welcome-tag">✦ YOUR STUDY COMPANION</span>
              <h2>Big goals start with<br />small steps.</h2>
              <p>
                Plan your days, organize your deadlines,
                and make room for what matters.
              </p>
              <a href="#features" className="explore-button">
                Explore your workspace <span>↗</span>
              </a>
            </div>

            <div className="welcome-art" aria-hidden="true">
              <div className="art-circle"></div>
              <div className="art-card card-back"></div>
              <div className="art-card card-front">
                <div className="art-line long"></div>
                <div className="art-line short"></div>
                <div className="art-check">✓</div>
                <div className="art-line medium"></div>
              </div>
              <span className="art-star star-one">✦</span>
              <span className="art-star star-two">✳</span>
            </div>
          </section>

          <section className="workspace-section" id="features">
            <div className="section-heading">
              <div>
                <span className="eyebrow">EVERYTHING IN ONE PLACE</span>
                <h2>Your workspace <span>✳</span></h2>
              </div>
              <span className="section-count">06 SPACES</span>
            </div>

            <div className="feature-grid">
              {features.map((feature) => (
                <article
                  className={`feature-card ${feature.color}`}
                  key={feature.title}
                >
                  <div className="card-top">
                    <span className="feature-icon">{feature.icon}</span>
                    <span className="feature-number">{feature.number}</span>
                  </div>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                  <span className="card-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </section>

          <section className="bottom-section" id="week">
            <div className="weekly-card">
              <div className="weekly-header">
                <div>
                  <span className="eyebrow">STAY CONSISTENT</span>
                  <h3>One day at a time.</h3>
                </div>
                <span className="weekly-symbol">✳</span>
              </div>
              <p>
                A fresh week is a fresh opportunity to learn
                something new.
              </p>
              <div className="week-days">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                  <div className="week-day" key={index}>
                    <span>{day}</span>
                    <div className={index === 2 ? "day-dot highlighted" : "day-dot"}>
                      {index === 2 ? "✦" : ""}
                    </div>
                  </div>
                ))}
              </div>
              <span className="preview-note">Weekly planning preview</span>
            </div>

            <div className="quote-card">
              <span className="quote-mark">“</span>
              <h3>Progress, not perfection.</h3>
              <p>
                Your future self will thank you for the
                effort you put in today.
              </p>
              <span className="quote-decoration">✦ ✳ ✦</span>
            </div>
          </section>

          <footer className="footer">
            <span>© 2026 Student Planner</span>
            <span>Made for students, by students. ♡</span>
          </footer>

        </div>
      </main>
    </div>
  );
}

export default App;
