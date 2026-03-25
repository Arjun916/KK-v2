import { useEffect, useState } from "react";

export default function TeaserPopup({ storageKey = "teaserPopupSeen" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!sessionStorage.getItem(storageKey)) {
      setIsOpen(true);
    }
  }, [storageKey]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!submitted) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      handleClose();
    }, 3000);

    return () => window.clearTimeout(timeoutId);
  }, [submitted]);

  const handleClose = () => {
    sessionStorage.setItem(storageKey, "true");
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className="teaser-popup-overlay"
      role="presentation"
      onClick={handleClose}
    >
      <div
        className="teaser-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="teaser-popup-heading"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="teaser-popup__close"
          onClick={handleClose}
          type="button"
          aria-label="Close popup"
        >
          &times;
        </button>

        <h2 className="teaser-popup__heading" id="teaser-popup-heading">
          Join Kochi Kochu
        </h2>

        <p className="teaser-popup__text" style="max-width: 203px;">
          Get early access to new pieces and updates.
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
          <button type="submit" className="teaser-popup__btn" disabled={submitted}>
            Sign-up
          </button>
        </form>

        {submitted && (
          <p className="teaser-popup__success">
            You're in. We'll be in touch.
          </p>
        )}
      </div>
    </div>
  );
}
