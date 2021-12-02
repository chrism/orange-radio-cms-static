import * as boosted from 'boosted';

var streamsModalEl = document.getElementById('streamsModal');

if (streamsModalEl) {
  var streamsModal = new boosted.Modal(streamsModalEl);
  streamsModal.show();
}

var genresModalEl = document.getElementById('genresModal');

if (genresModalEl) {
  var genresModal = new boosted.Modal(genresModalEl);
  genresModal.show();
}

var locationsModalEl = document.getElementById('locationsModal');

if (locationsModalEl) {
  var locationsModal = new boosted.Modal(locationsModalEl);
  locationsModal.show();
}