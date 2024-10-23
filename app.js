// task 2 - Configure the JavaScript for Drawing Context

// get references to canvas and other DOM elements
const canvas = document.getElementById(`drawingCanvas`); //canvas element
const ctx = canvas.getContext('2d'); // for drawing context, 2D drawing context
const clearBtn = document.getElementById(`clearCanvas`); // button to clear the canvas
const colorPicker = document.getElementById(`colorPicker`); // color picker input
const shapeSelector = document.querySelectorAll(`input[name="shape"]`);// radio buttons for shape selection

let drawing = false;  // boolean to track if the user is drawing
let startX, startY; // variables to store the initial mouse position (starting point)
let currentShape = 'line'; // 'line' as default shape
let currentColor = '#000000'; //  black as default color

// event listeners for shape selection
shapeSelector.forEach(shape => {
    shape.addEventListener('change', (e) => { 
      currentShape = e.target.value; // updates the shape based on current selection (line, rectangle, or circle)
    });
  });

  // event listener for color input
colorPicker.addEventListener('input', (e) => {
    currentColor = e.target.value; // updates current drawing color 
  });

  // mouse down event to start drawing
canvas.addEventListener('mousedown', (e) => {
    drawing = true; // when user presses the mouse button, we set drawing flag to "true"
    startX = e.offsetX; 
    startY = e.offsetY;
  });// capture the initial X  and Y position

  // mouse up event to stop drawing
canvas.addEventListener('mouseup', () => {
    drawing = false;  // Stop drawing (when user releases the button)
  });
  
  // mouse move event to draw shapes dynamically (will be expanded in Task 3)
  canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return; // if not drawing, exit the function
  
    const currentX = e.offsetX;
    const currentY = e.offsetY; // Current mouse X and Y positions
  
    // clear the canvas temporarily for dynamic drawing (continue in Task 3)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });


  // task 3 - Implement Shape Drawing Logic

  function drawShape(x1, y1, x2, y2){ //function to draw the selected shape
    ctx.strokeStyle = currentColor;// set the color 
    ctx.beginPath();


    if (currentShape === `line`){ // draw a line
        ctx.moveTo(x1, y1); 
        ctx.lineTo(x2, y2);
    } else if (currentShape === `rectangle`){ // draw a rectangle
        ctx.rect(x1, y1, x2 - x1, y2 - y1);
    } else if (currentShape === `circle`){ // draw a circle
        const radius = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    ctx.arc(x1, y1, radius, 0, Math.PI * 2);
    }
 
    ctx.stroke(); // apply the drawing (stroke)
  }

  // update the mousemove event to call drawShape
canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;
  
    const currentX = e.offsetX;
    const currentY = e.offsetY;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear the canvas 
    drawShape(startX, startY, currentX, currentY);  // draw the shape
  });

  // Task 4 - Add Color Selection and Canvas Clearing

  // Clear canvas when the button is clicked
clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
  