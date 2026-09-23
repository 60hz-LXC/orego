import "./globals.css";
import NavGate from "./components/NavGate";
import PageBoot from "./components/PageBoot";

export const metadata = {
  title: "OREGO — Unfallschadenabwicklung",
  description:
    "Komplette Unfallabwicklung für Geschädigte. Kostenfrei, digital und rund um die Uhr erreichbar unter +49 211 9203 9203.",
};

export default function Layout({ children }) {
  return (
    <html lang="de">
      <body>
        <noscript>
          <style>{`.boot-content{visibility:visible}.boot-screen{display:none}`}</style>
        </noscript>
        <PageBoot>
          <NavGate />
          {children}
        </PageBoot>
      </body>
    </html>
  );
}
