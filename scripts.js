 $(document).ready(function () {
    $("nav ul li a").click(function () {
      alert("Navigating to: " + $(this).text());
    });
  });
  