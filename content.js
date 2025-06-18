function waitForLyricsAndApplyStyles(fontSize, fontFamily) {
  const fontSizePx = fontSize + "px";

  const applyStyles = () => {
    const lines = document.querySelectorAll('[data-testid="fullscreen-lyric"]');
    if (lines.length > 0) {
      lines.forEach((line) => {
        line.style.fontSize = fontSizePx;
        line.style.fontFamily = fontFamily;
      });
    }
  };

  // Keep observing until at least one lyric shows up
  const waitObserver = new MutationObserver(() => {
    const lines = document.querySelectorAll('[data-testid="fullscreen-lyric"]');
    if (lines.length > 0) {
      applyStyles();

      // Now observe all future updates
      const liveObserver = new MutationObserver(applyStyles);
      liveObserver.observe(document.body, { childList: true, subtree: true });

      // Stop waiting — we’re done
      waitObserver.disconnect();
    }
  });

  waitObserver.observe(document.body, { childList: true, subtree: true });
}

chrome.storage.local.get(["savedFontSize", "savedFontFamily"], (result) => {
  const size = result.savedFontSize || 24;
  const font = result.savedFontFamily || "system-ui";
  waitForLyricsAndApplyStyles(size, font);
});
