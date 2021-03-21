
const logParticipants = () => {
  const spans = document.querySelectorAll("[aria-label='Participants'] > div > div > div > div > span");
  let spansArr = Array.prototype.slice.call(spans);
  const spansText = spansArr.map(el => el.textContent);
  // conMsg(`spansText: ${spansText}`)
  let participants = spansText.filter(text => text != '' && text != 'keep_off' && text != '(You)');
  // conMsg(participants);
}

export default logParticipants
