// De Kees-bloem: een golvende cirkel, het vaste vormelement van de huisstijl.
// Werkt in een viewBox van 0 0 100 100.
export function flowerPath(lobes = 12, amp = 0.085, radius = 42, steps = 360): string {
  const pts: string[] = [];
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    // Licht afgeplatte golf: rondere toppen dan een pure sinus
    const wave = Math.cos(lobes * t);
    const r = radius * (1 + amp * Math.sign(wave) * Math.pow(Math.abs(wave), 0.7));
    const x = 50 + r * Math.cos(t - Math.PI / 2);
    const y = 50 + r * Math.sin(t - Math.PI / 2);
    pts.push(`${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return `M${pts.join('L')}Z`;
}
