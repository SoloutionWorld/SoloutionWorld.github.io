
        function updateTime() {
            const selectedCountry = document.getElementById('country').value;
            const timeFormat = document.getElementById('time-format-select').value;
            const showDay = document.getElementById('show-day').checked;
            const showMonth = document.getElementById('show-month').checked;
            const showYear = document.getElementById('show-year').checked;

            const options = {
                timeZone: selectedCountry,
                hour12: timeFormat === '12',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                weekday: showDay ? 'long' : undefined,
                day: showDay ? 'numeric' : undefined,
                month: showMonth ? 'long' : undefined,
                year: showYear ? 'numeric' : undefined,
            };

            const formatter = new Intl.DateTimeFormat('en-US', options);
            const currentDateTime = formatter.format(new Date());

            document.getElementById('clock').textContent = currentDateTime;
            document.getElementById('date-info').innerHTML = '';

            // Format additional date information
            if (showDay) document.getElementById('date-info').innerHTML += `<div>${new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date())}</div>`;
            if (showMonth) document.getElementById('date-info').innerHTML += `<div>${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date())}</div>`;
            if (showYear) document.getElementById('date-info').innerHTML += `<div>${new Date().getFullYear()}</div>`;

            // Clear search message
            document.getElementById('search-message').textContent = '';
        }

        // Initial call to set default time
        updateTime();

        // Update time every second
        setInterval(updateTime, 1000);

        // Function to filter countries based on search input
        function filterCountries() {
            const input = document.getElementById('country-search').value.toLowerCase();
            const options = document.getElementById('country').options;

            for (let i = 0; i < options.length; i++) {
                const countryName = options[i].text.toLowerCase();
                const isVisible = countryName.includes(input);
                options[i].style.display = isVisible ? 'block' : 'none';
            }
        }

        // Function to search and update time for the selected country
        function searchCountry() {
            const input = document.getElementById('country-search').value.toLowerCase();
            const options = document.getElementById('country').options;
            let countryFound = false;

            for (let i = 0; i < options.length; i++) {
                const countryName = options[i].text.toLowerCase();
                if (countryName.includes(input)) {
                    document.getElementById('country').value = options[i].value;
                    countryFound = true;
                    break;
                }
            }

            // Display search message
            document.getElementById('search-message').textContent = countryFound ? '' : 'Please check the spelling of your country';
            updateTime();
        }
  