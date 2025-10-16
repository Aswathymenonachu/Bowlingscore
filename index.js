function calculateBowlingTotal(frames) { 
  let total = 0; 
  const rolls = frames.flat(); 
 
  for (let i = 0, r = 0; i < frames.length; i++) { 
    const frame = frames[i]; 
    let frameScore = frame.reduce((a, b) => a + b, 0); 
 
    // Strike 
    if (frame[0] === 10) { 
      frameScore += (rolls[r + 1] || 0) + (rolls[r + 2] || 0); 
    } 
    // Spare 
    else if (frameScore === 10) { 
      frameScore += (rolls[r + 2] || 0); 
    } 
 
    total += frameScore; 
    r += frame.length; 
  } 
 
  return total; 
}
 
 