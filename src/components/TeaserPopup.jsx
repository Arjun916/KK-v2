import { useEffect, useState } from "react";

export default function TeaserPopup({
  storageKey = "teaserPopupSeen",
  forceOpen = false,
  onClose
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  /* 🔥 Auto open after 6s (only first time) */
  useEffect(() => {
    if (forceOpen) {
      setIsOpen(true);
      return;
    }

    if (!sessionStorage.getItem(storageKey)) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 6000); // ⏱️ 6 seconds

      return () => clearTimeout(timer);
    }
  }, [storageKey, forceOpen]);

  /* lock scroll */
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
    };
  }, [isOpen]);

  /* auto close after submit */
  useEffect(() => {
    if (!submitted) return;

    const timeoutId = setTimeout(() => {
      handleClose();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [submitted]);

  const handleClose = () => {
    sessionStorage.setItem(storageKey, "true");
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className="teaser-popup-overlay"
      onClick={handleClose}
    >
      <div
        className="teaser-popup"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="teaser-popup__close"
          onClick={handleClose}
          type="button"
        >
          &times;
        </button>

        <h2 className="teaser-popup__heading">
          Join Kochi Kochu
        </h2>

        <p className="teaser-popup__text">
          Get early access to new pieces and updates
        </p>

        <form className="teaser-popup__form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="teaser-popup__input"
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitted}
            required
          />

          <button
            type="submit"
            className="teaser-popup__btn"
            disabled={submitted}
          >
            Sign Up
          </button>
        </form>

        {/* {submitted && (
          
        )} */}
        <p className={`teaser-popup__success ${submitted ? "show" : ""}`}>
            You're in. We'll be in touch.
        </p>
      </div>
    </div>
  );
}