document.addEventListener('DOMContentLoaded', () => {
  // ✨ Typed.js animation
  var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  // 🎵 Music toggle
  const music = document.getElementById("bg-music");
  let isPlaying = false;

 

  // ✉️ Contact form submission
  const form = document.getElementById('contactForm');
  const status = document.getElementById('status');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); // Prevent page reload

      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };

      try {
        // 👇 This is where the backend call happens
        const res = await fetch('http://localhost:8080/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        const result = await res.json();

        if (res.ok) {
          status.textContent = result.message;
          status.style.color = 'lime';
          form.reset();
        } else {
          status.textContent = result.message;
          status.style.color = 'red';
        }
      } catch (err) {
        status.textContent = 'Error sending message.';
        status.style.color = 'red';
        console.error(err);
      }
    });
  }
});
