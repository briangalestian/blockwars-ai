function generate() {
  const prompt = document.getElementById("prompt").value.trim();
  const result = document.getElementById("result");

  if (!prompt) {
    result.textContent = "Please describe your video first!";
    return;
  }

  result.textContent =
    "Your idea has been saved! AI video generation is coming soon.";
}
