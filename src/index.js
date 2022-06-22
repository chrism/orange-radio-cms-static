import * as boosted from 'boosted';
import Sortable from 'sortablejs';


const modals = ['streamsModal', 'genresModal', 'locationsModal', 'rssModal', 'deleteConfirmationModal', 'episodeStreamsModal', 'addItemModal', 'addCoverModal']

modals.forEach(modal => {
  const modalEl = document.getElementById(modal)

  if (!modalEl) return
  
  const boostedModal = new boosted.Modal(modalEl)
  boostedModal.show()
})

var sortableEl = document.getElementById('sortableItems')

if (!!sortableEl) {
  Sortable.create(sortableEl, {
    animation: 150
  })
}