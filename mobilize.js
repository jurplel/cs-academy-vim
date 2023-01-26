function setup() {
  ace.require("ace/lib/net").loadScript("https://rawgithub.com/ajaxorg/ace-builds/master/src-min-noconflict/keybinding-vim.js", 
    function() { 
      e = document.querySelector(".ace_editor")
      // this is a hack
      if (e === null) {
        setTimeout(() => {
          setup();
        }, 500);
      } else {
        editor = e.env.editor; 
        editor.setKeyboardHandler(ace.require("ace/keyboard/vim").handler); 
        console.log("vim mobilized");
      }
    })
}

document.readyState === 'loading' ? 
    document.addEventListener("readystatechange", (event) => {
      setup();
    })
  : 
    setup();
