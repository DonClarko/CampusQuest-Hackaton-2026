import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";
import { Sky } from "@/components/Sky";

export default function LoginPage() {
  return (
    <>
      <Sky full />
      <main className="auth-wrap">
        <Link href="/" className="auth-logo">
          <span className="coin-icon" />
          <span className="logo-text">
            MISSION<span className="accent">QUEST</span>
          </span>
        </Link>

        <div className="auth-card">
          <div className="auth-header">
            <h1>► PRESS START</h1>
            <p>Choose your player to log in</p>
          </div>

          <div className="role-grid">
            <button type="button" className="role-card" data-role="student" aria-pressed="true">
              <div className="role-icon">🍄</div>
              <div className="role-name">STUDENT</div>
              <div className="role-desc">Take quests, earn coins, climb ranks.</div>
            </button>
            <button type="button" className="role-card" data-role="admin">
              <div className="role-icon">👑</div>
              <div className="role-name">ADMIN</div>
              <div className="role-desc">Post missions, set rewards, verify proof.</div>
            </button>
          </div>

          <form className="form-grid auth-form">
            <div className="field full">
              <label htmlFor="auth-id">SCHOOL ID / USERNAME</label>
              <input id="auth-id" type="text" placeholder="e.g. 2026-00001" autoComplete="username" />
            </div>
            <div className="field full">
              <label htmlFor="auth-pw">PASSWORD</label>
              <input id="auth-pw" type="password" placeholder="••••••••" autoComplete="current-password" />
            </div>
            <div className="field full auth-options">
              <label className="auth-check">
                <input type="checkbox" defaultChecked /> Remember me
              </label>
              <Link href="#" className="auth-forgot">Forgot password?</Link>
            </div>

            <div className="inline-actions full auth-actions">
              <Link href="/dashboard" className="pixel-btn pixel-btn-green big">
                ▶ ENTER AS STUDENT
              </Link>
              <Link href="/admin" className="pixel-btn pixel-btn-red big">
                👑 ENTER AS ADMIN
              </Link>
            </div>

            <p className="auth-foot full">
              No account yet? <Link href="#" className="auth-link">Sign up</Link> · or
              {" "}<Link href="/" className="auth-link">return to title screen</Link>
            </p>
          </form>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
