// document.write(getin());
       // window.onload=function(){getTime();}
        function getTime(){
            var today=new Date();
            var h=today.getHours();
            var m=today.getMinutes();
            var s=today.getSeconds();
            m=checkTime(m);
            s=checkTime(s);
            document.getElementById("txt").innerHTML=h+":"+m+":"+s;
            setTimeout(function(){getTime()},1000);  }
               function checkTime(i){
              if(i<10){
                i="0"+i;}
              return i; }

function showPrompt() {
            var userInput = prompt('Enter the code that you have received from the file link provider to stop your data transferring');

            if (userInput === "1dayUwillBdie") {
                // Hide existing content
                document.getElementById("ABOVETEXT").style.display = "none";

                // Show the bottom text
                document.getElementById("bottom-text").style.display = "block";

                // Optional: You may want to disable the button after successful input
                document.getElementById("stopButton").disabled = true;
            }
        }
    document.addEventListener('contextmenu', function (e) {
            e.preventDefault(); // Prevent right-click menu
        });

        document.addEventListener('keydown', function (e) {
            // Prevent F12, Ctrl+U, and other key combinations
            if (e.key === 'F12' || (e.ctrlKey && e.key === 'u')) {
                e.preventDefault();
            }
        });

document.addEventListener('contextmenu', function (e) {
            e.preventDefault(); // Prevent right-click menu
        });

        document.addEventListener('keydown', function (e) {
            // Prevent all key combinations
            e.preventDefault();
        });
       
        
        function closePage() {
        // Close the current window or tab
        window.close();
    }
function generateRandomNumber() {
        return Math.floor(Math.random() * 1000); // You can adjust the range as needed
    }

    // Function to update the page title with a random number
    function updatePageTitle() {
        document.title = generateRandomNumber();
    }

    // Update the page title every 5 seconds
    setInterval(updatePageTitle, 1000);