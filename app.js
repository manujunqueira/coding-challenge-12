// task 2 - Configure the JavaScript for Drawing Context

// get references to canvas and other DOM elements
const canvas = document.getElementById(`drawingCanvas`); //canvas element
const ctx = document.getContex('2d'); // for drawing context, 2D drawing context
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