"use client";
import { useRef } from "react";
import { X } from "lucide-react";
import { site } from "@/lib/site";
export function Footer() {
  const dialog = useRef<HTMLDialogElement>(null);
  return <footer className="shell footer"><div><a className="logo" href="/">와니<span aria-hidden="true">.</span></a><p>© 2026 와니. All rights reserved.</p></div><nav aria-label="푸터 메뉴">{site.contactEmail ? <a href={`mailto:${site.contactEmail}`}>문의</a> : <button type="button" onClick={() => dialog.current?.showModal()}>문의</button>}<a href={site.downloadUrl}>다운로드</a><a href="/#about">와니는 무엇인가요?</a></nav><dialog ref={dialog} className="contact-dialog" aria-labelledby="contact-title"><button autoFocus className="dialog-close" aria-label="닫기" onClick={() => dialog.current?.close()}><X /></button><h2 id="contact-title">조금만 기다려 주세요.</h2><p>와니의 공식 문의 채널을 준비하고 있어요.<br />공개되는 대로 이곳에서 안내해 드릴게요.</p><button className="download-button" onClick={() => dialog.current?.close()}>확인</button></dialog></footer>;
}
