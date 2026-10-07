/**
 * Game UI Audio Synthesizer (Modern Game Menu Style)
 * Organic, warm, tactile UI sounds inspired by AAA console & PC game menus
 * (Zelda, Persona, Elden Ring, Death Stranding) using pure Web Audio API.
 */

class GameAudioManager {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem('gd_portfolio_muted') === 'true';
    this.initialized = false;
  }

  init() {
    if (this.initialized && this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
        this.initialized = true;
      }
    } catch (e) {
      console.warn('AudioContext not available', e);
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('gd_portfolio_muted', this.muted);
    if (!this.muted && !this.initialized) {
      this.init();
    }
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  /**
   * Tactile game menu cursor movement sound (warm, subtle, acoustic snap)
   */
  playHover() {
    if (this.muted) return;
    this.init();
    if (!this.ctx || this.ctx.state !== 'running') return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Low-pass filter for warm, non-harsh acoustic texture
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1800, now);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.04);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.045);
    } catch (e) {}
  }

  /**
   * Satisfying game menu confirmation (punchy button press)
   */
  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx || this.ctx.state !== 'running') return;

    try {
      const now = this.ctx.currentTime;

      // Base click oscillator
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(540, now + 0.05);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.065);
    } catch (e) {}
  }

  /**
   * Rewarding game stage select / project open chime
   */
  playSelect() {
    if (this.muted) return;
    this.init();
    if (!this.ctx || this.ctx.state !== 'running') return;

    try {
      const now = this.ctx.currentTime;
      
      // Resonant harmonic triad: warm pentatonic interval (E4, B4, E5)
      const freqs = [329.63, 493.88, 659.25];
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.04);

        const startTime = now + idx * 0.04;
        gain.gain.setValueAtTime(0.035, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.28);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.3);
      });
    } catch (e) {}
  }

  /**
   * Return / Cancel / Back menu sound (gentle downward acoustic release)
   */
  playClose() {
    if (this.muted) return;
    this.init();
    if (!this.ctx || this.ctx.state !== 'running') return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(380, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.08);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.085);
    } catch (e) {}
  }
}

window.GameAudio = new GameAudioManager();
