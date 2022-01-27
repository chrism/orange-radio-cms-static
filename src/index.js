import * as boosted from 'boosted';

const modals = ['streamsModal', 'genresModal', 'locationsModal', 'rssModal', 'deleteConfirmationModal', 'episodeStreamsModal']

modals.forEach(modal => {
  const modalEl = document.getElementById(modal)

  if (!modalEl) return
  
  const boostedModal = new boosted.Modal(modalEl)
  boostedModal.show()
})