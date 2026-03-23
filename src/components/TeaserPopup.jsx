import { useState, useEffect } from "react";

export default function TeaserPopup({ storageKey = "teaserPopupSeen" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(storageKey)) {
      setIsOpen(true);
    }
  }, [storageKey]);

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
    <div className="teaser-popup-overlay">
      <div className="teaser-popup">
        <button
          className="teaser-popup__close"
          onClick={handleClose}
        >
          &times;
        </button>

        <h2 className="teaser-popup__heading">Join Kochi Kochu</h2>

        {!submitted ? (
          <>
            <p className="teaser-popup__text">
              Get early access to new pieces and updates.
            </p>

            <form className="teaser-popup__form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="teaser-popup__input"
                placeholder="Enter your email here"
                required
              />
              <button type="submit" className="teaser-popup__btn">
                Sign-up
              </button>
            </form>
          </>
        ) : (
          <p className="teaser-popup__success">
            You’re in. We’ll be in touch.
          </p>
        )}
      </div>
    </div>
  );
}