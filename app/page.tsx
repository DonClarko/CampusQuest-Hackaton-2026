import Link from "next/link";

import { MascotGuide } from "@/components/MascotGuide";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { Sky } from "@/components/Sky";

const featureCards = [
  ["/login", "📜", "MISSION POSTING", "Admins post quests with tier, SDG tag, duration, points and rewards."],
  ["/missions", "🎯", "MISSION FEED", "Filter quests by department, tier and SDG. Pick your next adventure."],
  ["/submit-proof", "📸", "PROOF SUBMISSION", "Upload a photo, write a summary, drop the contest event code."],
  ["/verify-queue", "✔️", "VERIFY QUEUE", "Approve or reject submissions with reasons and keep the realm fair."],
  ["/dashboard", "🍄", "STUDENT DASHBOARD", "Total coins, last 5 missions, badges and your current rank."],
  ["/leaderboard", "🏆", "LEADERBOARD", "Seasonal rankings by department and individual with personal relative rank."],
  ["/innovation-wall", "⭐", "INNOVATION WALL", "Live activity ticker plus 17-tile SDG heat map glowing with progress."],
  ["/login", "💡", "PROBLEM BOARD", "Admins post real campus problems — Claude AI splits them into 3 quests."],
] as const;

const tiers = [
  ["tier-bronze", "🪙", "BRONZE", "+10 PTS", "Daily good deeds"],
  ["tier-silver", "⭐", "SILVER", "+50 PTS", "Weekly missions"],
  ["tier-gold", "🌟", "GOLD", "+150 PTS", "Project quests"],
  ["tier-fire", "🔥", "CONTEST", "+500 PTS", "Event-coded battles"],
] as const;

export default function HomePage() {
  return (
    <>
      <Sky full />
      <SiteNav ctaHref="/login" ctaLabel="► LOGIN" items={[]} homeHref="/" />

      <header className="hero">
        <div className="hero-text">
          <p className="world-tag">★ WORLD 1-1 ★</p>
          <h1 className="title-main">
            LEVEL UP
            <br />
            <span className="yellow">YOUR</span>
            <br />
            <span className="red">CAMPUS</span>
          </h1>
          <p className="subtitle">
            Complete quests, earn coins, climb the leaderboard,
            <br />
            and solve real campus problems for the SDGs.
          </p>
          <div className="hero-buttons">
            <Link href="/login" className="pixel-btn pixel-btn-green big">
              ▶ PLAY NOW
            </Link>
          </div>
          <div className="hud">
            <div className="hud-item"><span className="coin-icon" /> COINS <b>×128,420</b></div>
            <div className="hud-item"><span className="star-icon" /> QUESTS <b>×3,217</b></div>
            <div className="hud-item"><span className="mush-icon" /> PLAYERS <b>×1,089</b></div>
          </div>
        </div>

        <div className="hero-art">
          <div className="question-block" title="Hit me!">
            <span>?</span>
          </div>
          <div className="pipe">
            <div className="pipe-top" />
            <div className="pipe-body" />
          </div>
          <div className="ground" />
        </div>
      </header>

      <section className="section features">
        <h2 className="section-title"><span className="yellow">★</span> POWER-UPS <span className="yellow">★</span></h2>
        <p className="section-sub">Eight features to turn campus life into a quest.</p>
        <div className="feature-grid">
          {featureCards.map(([href, icon, title, text]) => (
            <Link href={href} className="feature-card brick" key={title}>
              <div className="card-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section tiers">
        <h2 className="section-title"><span className="red">▲</span> QUEST TIERS <span className="red">▲</span></h2>
        <div className="tier-row">
          {tiers.map(([className, icon, title, points, text]) => (
            <div className={`tier-card ${className}`} key={title}>
              <div className="tier-coin">{icon}</div>
              <h3>{title}</h3>
              <p className="tier-pts">{points}</p>
              <small>{text}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-box">
          <h2>READY PLAYER ONE?</h2>
          <p>Press START to begin your campus quest.</p>
          <Link href="/login" className="pixel-btn pixel-btn-red big">
            ▶ START GAME
          </Link>
        </div>
      </section>

      <SiteFooter extended />
      <MascotGuide />
    </>
  );
}
