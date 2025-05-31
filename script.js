function formatText(command) {
  document.execCommand(command, false, null);
}

function changeColor(color) {
  document.execCommand("foreColor", false, color);
}

function alignText(alignment) {
  document.execCommand("justify" + alignment);
}

function undo() {
  document.execCommand("undo", false, null);
}

function redo() {
  document.execCommand("redo", false, null);
}
