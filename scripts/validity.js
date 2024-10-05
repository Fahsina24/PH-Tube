function getTime(time) {
  const hr = parseInt(time / 3600);
  let reaminingSeconds = time % 3600;
  const mint = parseInt(reaminingSeconds / 60);
  reaminingSeconds = mint % 60;
  return `${hr} hour ${mint} minutes ${reaminingSeconds} ago`;
}
