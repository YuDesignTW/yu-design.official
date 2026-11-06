"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { MagneticLink } from "./interactions";
import { FooterJourney } from "./footer-journey";

const links = [
  ["/#work", "作品", "Work"],
  ["/#about", "關於", "About"],
  ["/#services", "SERVICES", "Services"],
  ["/#contact", "聯絡", "Contact"],
];
export function SiteNav({ home = false }: { home?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 260);
    window.addEventListener("scroll", scroll, { passive: true });
    scroll();
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  const close = () => {
    dialog.current?.close();
    setOpen(false);
  };
  return (
    <>
      <header className={`yg-nav ${home ? "yg-nav-home" : ""}`}>
        <Link href="/" className="yg-logo" aria-label="Yuga Chen 首頁">
          <img
            src={home ? "/images/logo.png" : "/images/dark_logo.png"}
            alt="YU DESIGN"
            width="1248"
            height="265"
          />
        </Link>
        <nav aria-label="主要導覽">
          {links
            .filter((_, i) => i !== 2)
            .map(([href, zh, en]) => (
              <MagneticLink href={href} key={en}>
                {zh}
                <span className="yg-nav-en"> {en}</span>
              </MagneticLink>
            ))}
        </nav>
      </header>
      <button
        ref={trigger}
        className={`yg-menu ${scrolled ? "is-scrolled" : ""}`}
        aria-label="開啟導覽選單"
        aria-haspopup="dialog"
        aria-controls="yg-navigation"
        aria-expanded={open}
        onClick={() => {
          dialog.current?.showModal();
          setOpen(true);
        }}
      >
        <Menu size={24} />
      </button>
      <dialog
        ref={dialog}
        id="yg-navigation"
        className="yg-drawer"
        aria-labelledby="yg-menu-title"
        onClose={() => {
          setOpen(false);
          trigger.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === dialog.current) {
            const r = e.currentTarget.getBoundingClientRect();
            if (
              e.clientX < r.left ||
              e.clientX > r.right ||
              e.clientY < r.top ||
              e.clientY > r.bottom
            )
              close();
          }
        }}
      >
        <button
          className="yg-drawer-close"
          aria-label="關閉導覽選單"
          onClick={close}
        >
          <X />
        </button>
        <p className="yg-label" id="yg-menu-title">
          NAVIGATION
        </p>
        <nav aria-label="展開導覽">
          {links.map(([href, zh, en]) => (
            <a key={en} href={href} onClick={close}>
              {zh}
              <small>{en}</small>
              <ArrowUpRight />
            </a>
          ))}
        </nav>
        <div className="yg-drawer-bottom">
          <span className="yg-label">LET’S MAKE IT HAPPEN</span>
          <a href="mailto:yu.design.tw@gmail.com">yu.design.tw@gmail.com</a>
        </div>
      </dialog>
    </>
  );
}
/** 以個人品牌、合作邀請與聯絡方式構成頁尾。 */
export function Contact() {
  return (
    <footer className="yg-contact yg-contact-redesign" id="contact">
      <div className="yg-contact-inner">
        <FooterJourney />
        <div className="yg-footer-invitation">
          <div>
            <p className="yg-label">A PARTNER FOR THE LONG RUN</p>
            <h2>一起創造價值！</h2>
            <p className="yg-footer-intro">
              從商業思考、品牌設計到技術實踐，
              <br />
              成為值得長期合作的夥伴。
            </p>
          </div>
          <MagneticLink
            href="mailto:yu.design.tw@gmail.com"
            className="yg-circle yg-circle-accent"
          >
            聊聊合作可能
            <ArrowUpRight size={22} />
          </MagneticLink>
        </div>
        <div className="yg-footer-identity">
          <div className="yg-footer-wordmark">
            <Link href="/" aria-label="YuDesign 首頁">
              <img
                src="/images/logo.png"
                alt="YU DESIGN"
                width={1248}
                height={265}
              />
            </Link>
            <p>懂設計、開發與行銷的產品顧問。</p>
          </div>
          <div className="yg-footer-connect">
            <a className="yg-footer-email" href="mailto:yu.design.tw@gmail.com">
              yu.design.tw@gmail.com <ArrowUpRight size={20} />
            </a>
            <nav className="yg-footer-social" aria-label="社群與聯絡方式">
              <a
                href="https://www.threads.net/@yuga.haha?hl=zh-tw"
                target="_blank"
                rel="noreferrer"
              >
                Threads <ArrowUpRight size={14} />
              </a>
              <a
                href="https://medium.com/@yuga.yg.chen"
                target="_blank"
                rel="noreferrer"
              >
                Medium <ArrowUpRight size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/yuga-chen-570247146/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={14} />
              </a>
              <a href="mailto:yu.design.tw@gmail.com">
                Email <ArrowUpRight size={14} />
              </a>
            </nav>
          </div>
        </div>
        <div className="yg-footer-copyright">
          <small>2026 © YuDesign / Yuga Chen</small>
          <Link href="/#work">
            探索作品 <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
