const panes = document.getElementsByClassName("pane");

const revealPaneContent = function() {
    var attribute = this.getAttribute("data-pane-reveal-key");
    alert(attribute);
};

for (var i = 0; i < panes.length; i++) {
    panes[i].addEventListener('click', revealPaneContent, false);
}