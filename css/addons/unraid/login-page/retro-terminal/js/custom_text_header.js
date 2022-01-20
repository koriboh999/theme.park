
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
  ______ ___     __     __ __  __ _   __ ______ ______   
 /_  __//   |   / /    / / \\ \\/ // | / // ____//_  __/   
  / /  / /| |  / /    / /   \\  //  |/ // __/    / /      
 / /  / ___ | / /___ / /___ / // /|  // /___   / /       
/_/  /_/  |_|/_____//_____//_//_/ |_//_____/  /_/        
                                                         </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
