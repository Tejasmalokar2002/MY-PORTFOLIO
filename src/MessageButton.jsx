import { useState } from "react";
import { createPortal } from "react-dom";
import emailjs from "emailjs-com";

export default function MessageButton() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ email: "", number: "", query: "" });
  const [animateOpen, setAnimateOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSending(true);

  //   try {
  //     // Send email via EmailJS
  //     await emailjs.send(
  //       "service_q9ashmf", 
  //       "template_7q8wsfh", 
  //       {
  //         from_email: formData.email,
  //         to_email: "usdreams14@gmail.com", // Your email
  //         number: formData.number,
  //         message: formData.query, // Changed from 'query' to 'message' to match template
  //         reply_to: formData.email // So you can reply directly
  //       }, 
  //       "31xj1w4a5nLY4XzRs"
  //     );

  //     // Show success message
  //     setShowSuccess(true);
  //     launchConfetti();
      
  //     // Clear fields
  //     setFormData({ email: "", number: "", query: "" });
      
  //     // Close modal after delay
  //     setTimeout(() => {
  //       setOpen(false);
  //       setShowSuccess(false);
  //     }, 3000);

  //   } catch (error) {
  //     console.error("❌ Failed to send email:", error);
  //     alert("Failed to send message. Please try again.");
  //   } finally {
  //     setIsSending(false);
  //   }
  // };


  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSending(true);

  const serviceId = "service_q9ashmf"; // Replace with your actual service ID
  const userId = "31xj1w4a5nLY4XzRs"; // Replace with your actual user/public key

  try {
    // 1. Send email to YOU
    await emailjs.send(
      serviceId,
      "template_pnop4wi", // your first template ID
      {
        from_email: formData.email,
        number: formData.number,
        message: formData.query,
      },
      userId
    );

    // 2. Send auto-reply to USER
    await emailjs.send(
      serviceId,
      "template_7q8wsfh", // second template ID
      {
        from_email: formData.email,
      },
      userId
    );

    // 🎉 Show success
    setShowSuccess(true);
    launchConfetti();

    // Reset form
    setFormData({ email: "", number: "", query: "" });

    // Close form after 3s
    setTimeout(() => {
      setOpen(false);
      setShowSuccess(false);
    }, 3000);
  } catch (error) {
    console.error("❌ Email failed:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSending(false);
  }
};



  const openForm = () => {
    setOpen(true);
    setTimeout(() => setAnimateOpen(true), 10);
  };

  const closeForm = () => {
    setAnimateOpen(false);
    setTimeout(() => setOpen(false), 300);
  };

  // Confetti function (unchanged)
  const launchConfetti = () => {
    const colors = ["#ff0a54", "#ff477e", "#ff85a1", "#fbb1bd", "#f9bec7", "#00f5d4", "#00bbf9", "#9b5de5"];
    const body = document.body;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < 500; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = `${centerX}px`;
      confetti.style.top = `${centerY}px`;
      body.appendChild(confetti);

      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 500 + 100;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      confetti.animate(
        [
          { transform: "translate(0,0) scale(1)", opacity: 1 },
          { transform: `translate(${x}px, ${y}px) scale(${Math.random() * 1.5 + 0.5})`, opacity: 0 }
        ],
        {
          duration: 1200 + Math.random() * 800,
          easing: "ease-out",
          fill: "forwards"
        }
      );

      setTimeout(() => confetti.remove(), 2000);
    }
  };

  return (
    <>
      {/* Planet Button */}
      <button
        onClick={openForm}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-transparent group cursor-pointer"
        title="Send a Message"
      >
        {/* Planet */}
        <div className="relative w-8 h-8 rounded-full overflow-hidden z-20 planet-container">
          <div className="absolute inset-0 rounded-full planet-texture" />
          <div className="absolute inset-0 rounded-full planet-light" />
          <div className="absolute inset-0 rounded-full planet-glow" />
        </div>

        {/* Small Mail Indicator */}
        <div className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] px-1.5 py-0.5 rounded-full shadow-md animate-bounce">
          ✉️
        </div>

        {/* Rings */}
        <div className="absolute w-12 h-12 border border-dashed border-indigo-300 rounded-full opacity-60 group-hover:border-pink-400 animate-rotate-horizontal z-10 ring-glow" />
        <div className="absolute w-12 h-12 border border-dashed border-purple-300 rounded-full opacity-50 group-hover:border-pink-300 transform rotate-45 animate-rotate-diagonal z-10 ring-glow" />

        {/* Tooltip */}
        <span className="absolute -bottom-7 text-[10px] text-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Send Transmission
        </span>
      </button>

      {/* Modal using Portal */}
      {open &&
        createPortal(
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-[9999]">
            <div
              className={`relative bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] 
                p-6 rounded-2xl shadow-2xl w-96 text-white border border-indigo-500 
                transform transition-all duration-300 
                ${animateOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
            >
              {/* Success Message */}
              {showSuccess && (
                <div className="absolute inset-0 bg-green-900/90 flex items-center justify-center rounded-2xl z-20">
                  <div className="text-center p-4">
                    <div className="text-4xl mb-2">🎉</div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-sm">We'll get back to you soon!</p>
                  </div>
                </div>
              )}

              {/* Star Background */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-pulse"></div>

              <h2 className="text-xl font-bold mb-4 relative z-10 text-center">Contact 🚀</h2>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                {/* Floating Label Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full px-3 pt-5 pb-2 rounded bg-black/30 border border-indigo-400 text-white placeholder-transparent focus:border-pink-500 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                    placeholder="Your Email"
                    required
                    disabled={isSending}
                  />
                  <label className="absolute left-3 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-400">
                    Your Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className="peer w-full px-3 pt-5 pb-2 rounded bg-black/30 border border-indigo-400 text-white placeholder-transparent focus:border-pink-500 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                    placeholder="Your Number"
                    required
                    disabled={isSending}
                  />
                  <label className="absolute left-3 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-400">
                    Your Number
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="query"
                    rows="3"
                    value={formData.query}
                    onChange={handleChange}
                    className="peer w-full px-3 pt-5 pb-2 rounded bg-black/30 border border-indigo-400 text-white placeholder-transparent focus:border-pink-500 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                    placeholder="Your Query"
                    required
                    disabled={isSending}
                  />
                  <label className="absolute left-3 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-400">
                    Your Query
                  </label>
                </div>

                {/* Futuristic Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 
                           hover:from-pink-500 hover:to-indigo-500 transition-all duration-300 
                           font-semibold shadow-lg shadow-pink-400/30 tracking-wide text-lg
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? "Sending..." : "🚀 Launch Message"}
                </button>
              </form>

              {/* Close Button */}
              <button
                onClick={closeForm}
                className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center 
                         bg-gray-700/50 hover:bg-gray-600 text-white rounded-full shadow-md"
                disabled={isSending}
              >
                ✖
              </button>
            </div>
          </div>,
          document.body
        )}

      {/* Styles remain the same */}
           <style jsx>{`
        @keyframes backgroundScroll {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: -200% 0%;
          }
        }
        @keyframes rotateHorizontal {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
        @keyframes rotateDiagonal {
          0% {
            transform: rotate(45deg) rotateY(0deg);
          }
          100% {
            transform: rotate(45deg) rotateY(360deg);
          }
        }
        .planet-texture {
          background-image: repeating-linear-gradient(
            to right,
            #2c3e50 0%,
            #34495e 20%,
            #3c6382 40%,
            #2c3e50 60%,
            #34495e 80%,
            #3c6382 100%
          );
          background-size: 200% 100%;
          animation: backgroundScroll 20s linear infinite;
        }
        .planet-light {
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), transparent 70%);
          mix-blend-mode: screen;
        }
        .planet-glow {
          box-shadow: 0 0 8px 3px rgba(100, 149, 237, 0.5);
        }
        .planet-container {
          background-color: #1e1b4b;
          box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.05), 0 0 12px rgba(100, 149, 237, 0.3);
        }
        .ring-glow {
          box-shadow: 0 0 6px 2px rgba(100, 149, 237, 0.3), 0 0 10px 4px rgba(173, 216, 230, 0.2);
        }
        .animate-rotate-horizontal {
          animation: rotateHorizontal 12s linear infinite;
        }
        .animate-rotate-diagonal {
          animation: rotateDiagonal 14s linear infinite;
        }

        /* 🎉 Confetti particle */
        .confetti {
          position: fixed;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
        }
      `}</style>
    </>
  );
}