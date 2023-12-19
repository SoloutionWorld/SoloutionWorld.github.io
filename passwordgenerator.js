 function generatePassword() {
            const length = parseInt(document.getElementById("length").value);
            const useUppercase = document.getElementById("uppercase").checked;
            const useLowercase = document.getElementById("lowercase").checked;
            const useNumbers = document.getElementById("numbers").checked;
            const useSpecial = document.getElementById("special").checked;

            const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
            const numberChars = "0123456789";
            const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

            let validChars = "";
            if (useUppercase) validChars += uppercaseChars;
            if (useLowercase) validChars += lowercaseChars;
            if (useNumbers) validChars += numberChars;
            if (useSpecial) validChars += specialChars;

            if (validChars === "") {
                showAlert("Please select at least one character type.");
                return;
            }

            let password = "";
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * validChars.length);
                password += validChars.charAt(randomIndex);
            }

            document.getElementById("password").textContent = password;
        }

        function copyToClipboard() {
            const passwordField = document.getElementById("password");
            const passwordText = passwordField.textContent;

            const textArea = document.createElement("textarea");
            textArea.value = passwordText;
            document.body.appendChild(textArea);

            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);

            showAlert("Password copied to clipboard!");
        }

        function showAlert(message) {
            const alertElement = document.getElementById("alert");
            alertElement.textContent = message;
            alertElement.style.display = "block";
            setTimeout(() => {
                alertElement.style.display = "none";
            }, 3000); // Hide after 3 seconds
        }
