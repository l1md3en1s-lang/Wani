"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { DownloadButton } from "./DownloadButton";
const links = [{ href: "/#about", label: "와니는 무엇인가요?" }, { href: "/#features", label: "기능" }, { href: "/#download", label: "다운로드" }];
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function onKey(event: KeyboardEvent) { if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); } }
    function onResize() { if (window.innerWidth >= 768) setOpen(false); }
    document.addEventListener("keydown", onKey); window.addEventListener("resize", onResize);
    return () => { document.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, [open]);
  return <header className="site-header"><div className="shell header-inner flex items-center justify-between gap-6">
    <a href="/" aria-label="와니 홈" className="logo">와니<span aria-hidden="true">.</span></a>
    <nav aria-label="주 메뉴" className="hidden items-center gap-10 md:flex">{links.map(link => <a className="nav-link" key={link.href} href={link.href}>{link.label}</a>)}</nav>
    <div className="flex items-center gap-3"><DownloadButton small>와니 얻기</DownloadButton><button ref={toggle} type="button" className="menu-toggle md:hidden" aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
  </div><nav id="mobile-menu" aria-label="모바일 주 메뉴" className="mobile-menu md:hidden" hidden={!open}>{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}</nav></header>;
}
