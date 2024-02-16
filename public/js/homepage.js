// document.addEventListener('DOMContentLoaded', () => {
//     // Function to handle button clicks
//     const handleButtonClick = (event) => {
//         const buttonId = event.target.id;
//         console.log(`Button ${buttonId} was clicked`);

//         // Example actions based on buttonId
//         switch (buttonId) {
//             case 'workouts':
//                 console.log('Navigating to My Workouts...');
//                 // Navigate to the My Workouts page or load workouts data
//                 window.location.href = '/myworkouts';
//                 break;
//             case 'diets':
//                 console.log('Navigating to My Diets...');
//                 window.location.href = '/mydiet';
//                 break;
//             case 'workout-methods':
//                 console.log('Navigating to Workout Methods...');
//                 window.location.href = '/methods';
//                 break;
//             case 'diet-suggestions':
//                 console.log('Navigating to Diet Suggestions...');
//                 window.location.href = '/dietplans';
//                 break;
//             default:
//                 console.log('Unknown button');
//         }
//     };

//     // Attach click event listeners to the buttons
//     // Wait for the template to be rendered and buttons to be available in the DOM
//     setTimeout(() => {
//         const buttons = document.querySelectorAll('button[type="submit"]');
//         buttons.forEach(button => {
//             button.addEventListener('click', handleButtonClick);
//         });
//     }, 0); // Using setTimeout with 0 delay as a simple way to wait for the dynamic content
// });

function checkSessionAndProceed() {
    fetch('/api/session', { credentials: 'include' }) // Make sure to include credentials for cookies to be sent
      .then(response => response.json())
      .then(data => {
        if (data.loggedIn) {
          console.log('User is logged in. User ID:', data.user_id);
          // Proceed with actions that require authentication
        } else {
          console.log('User is not logged in.');
          // Redirect to login or disable certain actions
        }
      })
      .catch(error => console.error('Error fetching session data:', error));
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    checkSessionAndProceed();
  });