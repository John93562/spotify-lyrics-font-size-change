const slider = document.getElementById("fontSlider");
const label = document.getElementById("fontSizeLabel");

chrome.storage.local.get(["savedFontSize"], (result) => {
  const size = result.savedFontSize || 24;
  slider.value = size;
  label.textContent = size + "px";
});

slider.addEventListener("input", () => {
  label.textContent = slider.value + "px";
});

slider.addEventListener("change", () => {
  const newSize = parseInt(slider.value, 10);
  chrome.storage.local.set({ savedFontSize: newSize });
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "changeFontSize",
      fontSize: newSize,
    });
  });
});
