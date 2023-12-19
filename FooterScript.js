
        window.onscroll = function() {
            showArrow();
        };

        function showArrow() {
            var arrow = document.querySelector('.arrow-up');
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                arrow.style.display = 'block';
            } else {
                arrow.style.display = 'none';
            }
        }

        function scrollToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
  