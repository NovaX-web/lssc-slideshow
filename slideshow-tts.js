// Slide texts without emojis (emojis removed for clear speech)
const slides = [
  `LSSC National Celebration
Event Dates: July 11 - July 16
Only 5 days left!`,

  `Upgrade your device and get a higher-level one free for 365 days.
Income doubles, zero withdrawal fees, and lucky draw entries!`,

  `Invite new users or upgrade your device to earn prize fragments.
Redeem for iPhone 16, Tesla, LV bags, Mercedes, and more!`,

  `Enjoy permanent benefits:
Lifetime withdrawal fee exemption
Weekend earnings
Instant withdrawals, no approval needed!`,

  `New users get the same benefits and referrers get extra draw chances.
Win together!`,

  `LSSC Dallas HQ Event on July 25
Special appearance by Mbappé and celebrities!`,

  `Example: Upgrade to A3 – Get S1 device free worth 23,000 yuan, 3 lucky draws, and permanent benefits.`,

  `Free Tasks:
1. Share this message to LSSC groups
2. Check in 5 days = iPhone 16
3. Post event video = 200 dollar reward`,

  `Visit lsscactivity dot com for more details.
Don't miss this opportunity!`
];

const slideEl = document.getElementById('slide-text');
let currentIndex = 0;

function speakText(text, onEnd) {
  if (!('speechSynthesis' in window)) {
    console.warn('TTS not supported');
    onEnd();
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  // Optional: Set voice, pitch, rate, volume
  utterance.volume = 0.5; // Quiet volume
  utterance.rate = 1;
  utterance.pitch = 1;

  utterance.onend = onEnd;
  utterance.onerror = () => {
    console.error('Speech synthesis error');
    onEnd();
  };

  window.speechSynthesis.speak(utterance);
}

function showSlide(index) {
  currentIndex = index % slides.length;
  slideEl.textContent = slides[currentIndex];

  speakText(slides[currentIndex], () => {
    setTimeout(() => {
      showSlide(currentIndex + 1);
    }, 500); // small pause between slides
  });
}

// Start slideshow on load
showSlide(0);
