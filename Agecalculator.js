      var form = document.getElementById("form"),
            bdate = document.getElementById("date"),
            bmonth = document.getElementById("month"),
            byear = document.getElementById("year"),
            date = document.getElementById("date2"),
            month = document.getElementById("month2"),
            year = document.getElementById("year2"),
            age = document.getElementById("age"),
            days = document.getElementById("days"),
            months = document.getElementById("months"),
            weeks = document.getElementById("weeks"),
            seconds = document.getElementById("seconds"),
            today = new Date();

        year.value = today.getFullYear();
        month.value = today.getMonth() + 1;
        date.value = today.getDate();

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            var by = Number.parseFloat(byear.value),
                bm = Number.parseFloat(bmonth.value),
                bd = Number.parseFloat(bdate.value),
                ty = Number.parseFloat(year.value),
                tm = Number.parseFloat(month.value),
                td = Number.parseFloat(date.value);

            // Calculate age in seconds
            var birthDate = new Date(by, bm - 1, bd);
            var currentDate = new Date(ty, tm - 1, td);
            var ageInSeconds = Math.floor((currentDate - birthDate) / 1000);

            // Calculate age in days
            var ageInDays = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24));

            // Calculate age in weeks
            var ageInWeeks = Math.floor(ageInDays / 7);

            // Calculate age in months (assuming each month has 30 days)
            var ageInMonths = Math.floor(ageInDays / 30);

            // Calculate age in years
            var ageInYears = Math.floor(ageInDays / 365);

            seconds.innerHTML = "Seconds: " + ageInSeconds + 's';
            days.innerHTML = "Days: " + ageInDays + ' days';
            weeks.innerHTML = "Weeks: " + ageInWeeks + ' weeks';
            months.innerHTML = "Months: " + ageInMonths + ' months';
            age.innerHTML = "Years: " + ageInYears + ' years';
        });