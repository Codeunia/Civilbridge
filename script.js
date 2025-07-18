document.addEventListener("DOMContentLoaded", () => {
  const reportForm = document.getElementById("reportForm");
  const reportList = document.getElementById("reportList");

  // Submit form
  reportForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const location = document.getElementById("location").value.trim();

    if (!title || !description || !location) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, location }),
      });
      const data = await res.json();
      if (data.message) {
        alert(data.message);
        reportForm.reset();
        loadReports();
      } else {
        alert("Error: " + (data.error || "Unknown"));
      }
    } catch (err) {
      alert("Server error. Please try again later.");
    }
  });

  // Load reports
  async function loadReports() {
    reportList.innerHTML = "";
    try {
      const res = await fetch("/reports");
      const reports = await res.json();
      if (Array.isArray(reports)) {
        reports.reverse().forEach((report) => {
          const div = document.createElement("div");
          div.className = "card";
          div.innerHTML = `
            <h3>${report.title}</h3>
            <p>${report.description}</p>
            <span><strong>Location:</strong> ${report.location}</span>
            <span><strong>Date:</strong> ${new Date(report.date).toLocaleString()}</span>
          `;
          reportList.appendChild(div);
        });
      }
    } catch (err) {
      console.error("Failed to fetch reports:", err);
    }
  }

  // Initial load
  loadReports();
});
