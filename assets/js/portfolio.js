// async function createPictureElements() {
//     const pictureFolder = '../../images';
//     const pictureExtensions = ['jpg', 'jpeg', 'png', 'gif']; // Allowed picture extensions
  
//     // Get all the files in the picture folder
//     const files = await fetch(pictureFolder)
//       .then(response => response.text())
//       .then(html => {
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, 'text/html');
//         return [...doc.querySelectorAll('a')]
//           .filter(a => pictureExtensions.includes(a.href.split('.').pop()))
//           .map(a => a.href);
//       });
  
//     // Create a new picture element for each file
//     const pictureGrid = document.getElementById('picture-grid');
//     files.forEach(file => {
//       const pictureElement = document.createElement('div');
//       pictureElement.classList.add('picture');
//       pictureElement.innerHTML = `<img src="${file}" alt="${file}" data-fullsize="${file}">`;
//       pictureGrid.appendChild(pictureElement);
  
//       // Bind a click event to the picture element
//       pictureElement.addEventListener('click', e => {
//         // Show the overlay container
//         document.getElementById('overlay').classList.remove('hidden');
  
//         // Update the overlay container with the full-size version of the picture
//         document.getElementById('overlay-image').src = e.target.dataset.fullsize;
//         document.getElementById('overlay-image').alt = e.target.alt;
//       });
//     });
//   }
  
//   // Call the createPictureElements function when you want to create the picture elements
//   createPictureElements();

function showOverlay(e) {
    // Show the overlay container
    document.getElementById('overlay').classList.remove('hidden');

    // Update the overlay container with the full-size version of the picture
    document.getElementById('overlay-image').src = e.target.dataset.fullsize;
    document.getElementById('overlay-image').alt = e.target.alt;
}

// Get a list of all the image elements on the page
const images = document.querySelectorAll('img');

// Loop through the list and add an event listener to each image
images.forEach(image => image.addEventListener('click', showOverlay));

// Bind a click event to the close button
document.getElementById('overlay-close').addEventListener('click', e => {
// Hide the overlay container
document.getElementById('overlay').classList.add('hidden');
  });