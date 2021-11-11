import Sortable from "sortablejs";

const initSortable = () => {
  console.log("INIT SORTABLE");
  const el = document.getElementById("results");
  console.log(el);
  Sortable.create(el, {
    ghostClass: "ghost",
    animation: 150,
    onEnd: (event) => {
      alert(`${event.oldIndex} moved to ${event.newIndex}`);
    },
  });
};

export { initSortable };
