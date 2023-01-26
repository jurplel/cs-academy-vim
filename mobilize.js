function setup() {
  ace.require("ace/lib/net").loadScript("https://rawgithub.com/ajaxorg/ace-builds/master/src-min-noconflict/keybinding-vim.js", 
  function() { 
      e = document.querySelector(".ace_editor").env.editor; 
      e.setKeyboardHandler(ace.require("ace/keyboard/vim").handler); 
  })
}

window.addEventListener("load", (event) => {
  console.log("vim mobilized");
  setup();
});
