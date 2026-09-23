"use client";

import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";

function collectAssetUrls() {
  const urls = new Set();

  const add = (raw) => {
    if (!raw || raw.startsWith("data:")) return;
    try {
      const url = new URL(raw, window.location.href);
      if (url.origin !== window.location.origin) return;
      urls.add(url.href);
    } catch {
      /* ignore malformed urls */
    }
  };

  document.querySelectorAll("img[src]").forEach((img) => {
    add(img.currentSrc || img.getAttribute("src"));
  });

  document.querySelectorAll(".hero-media, .serviceBG, .landingBG").forEach((el) => {
    const background = getComputedStyle(el).backgroundImage;
    for (const match of background.matchAll(/url\((['"]?)(.*?)\1\)/g)) {
      add(match[2]);
    }
  });

  return [...urls];
}

function preload(src) {
  return new Promise((resolve) => {
    const image = new Image();
    const done = () => resolve();
    image.onload = done;
    image.onerror = done;
    image.src = src;
    if (image.complete) done();
  });
}

export default function PageBoot({ children }) {
  const pathname = usePathname();
  const [phase, setPhase] = useState("loading");

  useLayoutEffect(() => {
    let cancelled = false;
    let settled = false;
    let exitTimer = 0;

    const finish = () => {
      if (cancelled || settled) return;
      settled = true;
      window.clearTimeout(timeout);
      setPhase("exit");
      exitTimer = window.setTimeout(() => {
        if (!cancelled) setPhase("done");
      }, 280);
    };

    const urls = collectAssetUrls();
    const fontsReady = !document.fonts || document.fonts.status === "loaded";
    const imagesReady = urls.every((src) => {
      const image = new Image();
      image.src = src;
      return image.complete;
    });

    if (fontsReady && imagesReady) {
      setPhase("done");
      return undefined;
    }

    setPhase("loading");

    const timeout = window.setTimeout(finish, 7000);

    const wait = async () => {
      const fonts = document.fonts?.ready ?? Promise.resolve();
      const images = Promise.all(urls.map(preload));
      await Promise.all([fonts, images]);
      finish();
    };

    wait().catch(finish);

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      window.clearTimeout(exitTimer);
    };
  }, [pathname]);

  return (
    <>
      <div className={phase === "loading" ? "boot-content" : "boot-content is-ready"}>{children}</div>
      {phase !== "done" && (
        <div
          className={phase === "exit" ? "boot-screen is-leaving" : "boot-screen"}
          role="status"
          aria-live="polite"
          aria-label="Seite wird geladen"
        >
          <img src="/oregoLogo.svg" alt="" className="boot-logo" />
          <span className="boot-spin" />
        </div>
      )}
    </>
  );
}
