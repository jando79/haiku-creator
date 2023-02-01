

export function Lines(input) {
  function countInstances(string, word) {
    return string.split(word).length - 1;
 }

  if (countInstances(input, "\n") === 2) {
    return 3;
  }
}