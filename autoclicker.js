
let intervalId;
let openedTabs = 0;

document.getElementById('startBtn').addEventListener('click', () => {
    const link = document.getElementById('linkInput').value;
    const clickTime = document.getElementById('clickTimeInput').value;
    const maxTabs = document.getElementById('maxTabsInput').value;
    const closeTime = document.getElementById('closeTimeInput').value;

    

    if (link && clickTime && maxTabs && closeTime) {
        // Set up interval to click the link after a specific time until maxTabs is reached
      document.getElementById("outputMessage").innerText = "Please Wait for : " + clickTime + "+ 5 seconds"
      
      var button = document.getElementById("startBtn");

    // Change the background color
    button.style.backgroundColor = "#FF5733"; 
      
      
      
        intervalId = setInterval(() => {
            if (openedTabs < maxTabs) {
                console.log(`Clicking link: ${link} (Tab ${openedTabs + 1})`);
                openedTabs++;
                // Simulate a click on the link (you may replace this with actual click logic)
                const newTab = window.open(link, `_blank`);

                // Set up timeout to close the opened tab after a specific time
                setTimeout(() => {
                    console.log(`Closing tab: ${openedTabs}`);
                    newTab.close();
                }, closeTime * 1000);
            } else {
                clearInterval(intervalId);
                console.log(`Maximum tabs (${maxTabs}) reached. Stopping.`);
            }
        }, clickTime * 1000);
  
    }
  

  else {
        alert('Please fill in all fields.');
    }
});

        // Function to change the title
        function changeTitle() {
            // Get the current timestamp
            const timestamp = new Date().getTime();

            // Set the title to a dynamic value (e.g., include the timestamp)
            document.title = `Best Soloution - ${timestamp}`;
        }

        // Initial call to changeTitle
        changeTitle();

        // Set an interval to call changeTitle every 20 seconds
        setInterval(changeTitle, 200000);
 
      
        function updatePageVisibility() {
            const pageContent = document.getElementById('pageContent');
            const offlineMessage = document.getElementById('offlineMessage');
            
            if (navigator.onLine) {
                pageContent.style.display = 'block';
                offlineMessage.textContent = '';
            } else {
                pageContent.style.display = 'none';
                offlineMessage.textContent = 'Please enable the internet connection.';
            }
        }

        updatePageVisibility();

        window.addEventListener('online', updatePageVisibility);
        window.addEventListener('offline', updatePageVisibility);
   
        
        function reloadPage() {
              // Reload the page
              location.reload();
          }
          async function pasteURL() {
              try {
                  const text = await navigator.clipboard.readText();
                  const urlInput = document.getElementById('linkInput');
                  urlInput.value = text;
              } catch (err) {
                  console.error('Unable to read clipboard data', err);
  
                  // Handle clipboard read error (e.g., permission denied)
              }
          }
    
    

