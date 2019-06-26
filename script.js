    let _App = {
        img: {}
    };

        
    _App.dropbox = document.getElementById("dropbox");
    _App.dropbox.addEventListener("dragenter", dragenter, false);
    _App.dropbox.addEventListener("dragover", dragover, false);
    _App.dropbox.addEventListener("drop", drop, false);

    function dragenter(e) {
      e.stopPropagation();
      e.preventDefault();
    }

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  _App.handleFiles(files);
}

_App.handleFiles=function(files) {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    
    if (!file.type.startsWith('image/')){ continue }
    
    _App.img = document.getElementById("display");
    
    _App.img.file = file;
    document.getElementById("instructions").setAttribute('hidden', true);
    dropbox.appendChild(_App.img); 
    _App.img.setAttribute('width', dropbox.offsetWidth);
    _App.img.style.position= 'relative';
    _App.img.style.left= '0px';
    _App.img.style.top= '0px';
    
    const reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(_App.img);
    reader.readAsDataURL(file);
  }
  dragElement(_App.img);
}



function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.addEventListener('mousedown', dragMouseDown);
  }

function dragMouseDown(e) {
   // console.log("dragImage");
    
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    // console.log(pos3);
    
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    //   console.log("elementdrag");
      
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // console.log(_App.img.style.left);
    

    
    // _App.img.style.left = (_App.img.offsetLeft - pos1) + "px";
    _App.img.style.top = (_App.img.offsetTop - pos2) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }


