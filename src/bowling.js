function calculateBowlingTotal(frames) {
  let total = 0;
  const rolls = frames.flat();

  for (let i = 0, r = 0; i < frames.length; i++) {
    const frame = frames[i];
    const base = frame.reduce((a, b) => a + b, 0);

    // ✅ Last frame: just add what's there (includes any bonus rolls)
    if (i === frames.length - 1) {
      total += base;
      // no bonus look-ahead for frame 10
    } else if (frame[0] === 10) {
      // Strike: 10 + next two rolls
      total += 10 + (rolls[r + 1] || 0) + (rolls[r + 2] || 0);
    } else if (base === 10) {
      // Spare: 10 + next one roll
      total += 10 + (rolls[r + 2] || 0);
    } else {
      total += base;
    }

    r += frame.length; // advance by the rolls in this frame
  }

  return total;
}

module.exports = { calculateBowlingTotal };

