import { ArrowDownToLine } from "lucide-react";
import { site } from "@/lib/site";
export function DownloadButton({ children = "와니 다운로드", small = false }: { children?: React.ReactNode; small?: boolean }) {
  return <a className={`download-button ${small ? "small" : ""}`} href={site.downloadUrl}>{children}<ArrowDownToLine size={small ? 16 : 19} aria-hidden="true" /></a>;
}
