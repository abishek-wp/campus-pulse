function summarizeEmail() {
  const emailText = document.getElementById("emailText").value;

  if (!emailText) {
    alert("Please paste an email first");
    return;
  }

  document.getElementById("summaryBox").innerText = "Summarizing...";

  fetch("https://YOUR_BACKEND_URL/api/summarize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ emailText })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("summaryBox").innerText = data.summary;
  })
  .catch(err => {
    document.getElementById("summaryBox").innerText = "Error summarizing email";
  });
}
