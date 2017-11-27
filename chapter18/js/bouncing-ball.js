// Move the block to the right, all the way to the end of the frame
const moveBlock = () => {
  // Convert the left position of the block (value of the form "XXpx") to a number
  const xBlock = parseFloat(getComputedStyle(blockElement).left);
  const yBlock = parseFloat(getComputedStyle(blockElement).top);

  // Convert the width of the frame (value of the form "XXpx") to a number
  console.log(yBlock);
  const xMax = parseFloat(getComputedStyle(frameElement).width);
  const yMax = parseFloat(getComputedStyle(frameElement).height);

  // If the block isn't already to the end of the frame

  
  if (xBlock + blockWidth <= xMax) {
    // Block movement
    if (yBlock + blockHeight <= yMax) {
      // Block movement
      blockElement.style.top = `${yBlock + bounce}px`;

    } else if (yBlock + blockHeight >= yMax) {
      // Block movement
      blockElement.style.top = `${yBlock - secondBounce}px`;
    }
    blockElement.style.left = `${xBlock + movement}px`;
    animationId = requestAnimationFrame(moveBlock);
  }
  else {
    // Cancel the animation
    cancelAnimationFrame(animationId);
  }
};

const frameElement = document.getElementById("frame");
const blockElement = document.getElementById("ball");

// Convert the block width (value of the form "XXpx") to a number
const blockWidth = parseFloat(getComputedStyle(blockElement).width);
const blockHeight = parseFloat(getComputedStyle(blockElement).height);

// Movement value in pixels
const movement = 7;
const bounce = 50;
const secondBounce = 20;

// Start the animation
let animationId;

document.getElementById("start").addEventListener("click", () => {
  document.getElementById("stop").removeAttribute("disabled");
  animationId = requestAnimationFrame(moveBlock);
});

document.getElementById("stop").addEventListener("click", () => {
  cancelAnimationFrame(animationId);
});