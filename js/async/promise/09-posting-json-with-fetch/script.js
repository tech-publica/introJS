const API_URL = "https://jsonplaceholder.typicode.com/posts";
const postForm = document.getElementById("postForm");
const titleInput = document.getElementById("titleInput");
const bodyInput = document.getElementById("bodyInput");
const submitButton = document.getElementById("submitButton");
const status = document.getElementById("status");
const requestOutput = document.getElementById("requestOutput");
const responseOutput = document.getElementById("responseOutput");

postForm.addEventListener("submit", createPost);

function createPost(event) {
  event.preventDefault();

  const post = {
    title: titleInput.value,
    body: bodyInput.value,
    userId: 1,
  };
  const requestBody = JSON.stringify(post);
  const requestHeaders = {
    "Content-Type": "application/json",
  };

  submitButton.disabled = true;
  status.textContent = "Sending...";
  responseOutput.textContent = "Waiting...";
  requestOutput.textContent = [
    "Method: POST",
    `Content-Type request header: ${requestHeaders["Content-Type"]}`,
    `Body type: ${typeof requestBody}`,
    "Body:",
    requestBody,
  ].join("\n");

  fetch(API_URL, {
    method: "POST",
    headers: requestHeaders,
    body: requestBody,
  })
    .then(function (response) {
      const responseContentType =
        response.headers.get("Content-Type") || "Not provided";

      responseOutput.textContent = [
        `Status: ${response.status} ${response.statusText}`,
        `Content-Type response header: ${responseContentType}`,
        "Reading the response body...",
      ].join("\n");

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      return response.json();
    })
    .then(function (createdPost) {
      status.textContent = "Finished";
      responseOutput.textContent += [
        "",
        "Parsed response body:",
        JSON.stringify(createdPost, null, 2),
        "",
        "This resource was simulated, not permanently saved.",
      ].join("\n");
    })
    .catch(function (error) {
      status.textContent = "Failed";
      responseOutput.textContent += `\n\n${error.message}`;
    })
    .finally(function () {
      submitButton.disabled = false;
    });
}
