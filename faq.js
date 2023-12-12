<script>
    function toggleAnswer(question) {
      var answer = question.nextElementSibling;
      if (answer.style.display === "none") {
        answer.style.display = "block";
      } else {
        answer.style.display = "none";
      }
    }
  </script>