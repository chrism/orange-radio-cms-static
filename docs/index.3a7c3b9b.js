import {Modal as $h0jcB$Modal} from "boosted";
import $h0jcB$sortablejs from "sortablejs";



const $cf838c15c8b009ba$var$modals = [
    "streamsModal",
    "genresModal",
    "locationsModal",
    "rssModal",
    "deleteConfirmationModal",
    "episodeStreamsModal",
    "addItemModal",
    "addCoverModal",
    "countryModal"
];
$cf838c15c8b009ba$var$modals.forEach((modal)=>{
    const modalEl = document.getElementById(modal);
    if (!modalEl) return;
    const boostedModal = new $h0jcB$Modal(modalEl);
    boostedModal.show();
});
var $cf838c15c8b009ba$var$sortableEl = document.getElementById("sortableItems");
if (!!$cf838c15c8b009ba$var$sortableEl) (0, $h0jcB$sortablejs).create($cf838c15c8b009ba$var$sortableEl, {
    animation: 150
});


//# sourceMappingURL=index.3a7c3b9b.js.map
