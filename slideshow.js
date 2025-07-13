const slides = [
  `What exactly can you get from this epic 6-day event? It all comes down to 4 major benefits.

1. Upgrade your device, and the system will instantly give you a higher-level device — FREE for 365 days!
Your income doubles immediately, withdrawals become fee-free, and you also get lucky draw chances (up to 10 times)!

2. Upgrade your device or invite new users — and you'll earn lucky draw entries!
Each draw gives you 2 gift fragments, which can be redeemed for amazing prizes like iPhone 16, LV bag, Mercedes, Tesla, global travel — your choice, your reward!

3. Enjoy permanent benefits — completely free!
Lifetime zero withdrawal fees, weekend earnings enabled, and instant withdrawals with no approval needed.

4. New users also enjoy the same rewards, and the referrer gets extra draw chances!
Earn together, draw together, win big together!`,

  `LSSC Dallas Headquarters Operation Preview — Mbappé and a lineup of celebrities will be there to support.
On July 25th, we’ll be waiting for you in Dallas.

LSSC National Celebration for 6 Days, Benefits Non-Stop!

During the event, upgrade your device to:
- Get a free device
- Win luxurious prizes through lucky draws
- Lifetime withdrawal fee exemption
- Weekend device benefits!

Event Dates: July 11th - July 16th (Only 5 days left!)
Contact your manager to apply for rewards now!`
];

let currentIndex = 0;
const textDiv = document.getElementById('slide-text');
const synth = window.speechSynthesis;

function removeEmojis(text) {
  return text.replace(/[\p{Emoji_Presentation}\p{Emoji}\uFE0F]/gu, '');
}

function speakAndShowSlide(index) {
  if (index >= slides.length) return; // Done with all slides

  const text = slides[index];
  textDiv.textContent = text;

  const cleanText = removeEmojis(text);
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.rate = 1;
  utterance.volume = 1;
  utterance.onend = () => {
    setTimeout(() => speakAndShowSlide(index + 1), 500); // Wait a bit before next slide
  };

  synth.speak(utterance);
}

speakAndShowSlide(currentIndex);
