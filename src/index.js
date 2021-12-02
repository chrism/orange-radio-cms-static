import * as boosted from 'boosted';

var streamsModalEl = document.getElementById('streamsModal');

if (streamsModalEl) {
  var streamsModal = new boosted.Modal(streamsModalEl);
  streamsModal.show();
}
