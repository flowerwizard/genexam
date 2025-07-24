function generateProblem() {
  const A = (Math.random() * 0.5 + 0.2).toFixed(2);
  const B = (Math.random() * 0.5 + 0.2).toFixed(2);
  const problem = `\\\\( P(A \\\\cup B) = ${A} + ${B} - P(A \\\\cap B) \\\\)`;
  document.getElementById("problem").innerHTML = problem;
  MathJax.typeset();
}

// Register PWA service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(() => {
    console.log('Service Worker Registered');
  });
}