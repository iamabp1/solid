// components/FloatingContact.tsx
import { RiTelegram2Fill } from "react-icons/ri";
import Script from 'next/script';

const FloatingContact = (): JSX.Element => {
  return (
    <>
      <Script id="floating-contact-timer">
        {`
          setTimeout(() => {
            const messageEl = document.querySelector('[data-message]');
            if (messageEl instanceof HTMLElement) {
              messageEl.style.display = 'block';
            }
          }, 5000);

          function closeMessage() {
            const messageEl = document.querySelector('[data-message]');
            if (messageEl instanceof HTMLElement) {
              messageEl.style.display = 'none';
            }
          }
          
          // Make closeMessage available globally
          window.closeMessage = closeMessage;
        `}
      </Script>

      <div className="fixed bottom-4 right-4 z-50 flex items-end space-y-2 max-w-full gap-4">
        <div 
          data-message 
          style={{ display: 'none' }}
          className="relative bg-white dark:bg-zinc-800 text-black dark:text-white p-4 rounded-lg shadow-lg"
        >
          <button
            onClick={() => {
              (window as any).closeMessage();
            }}
            type="button"
            className="absolute top-1 right-1 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <p className="max-w-[300px] text-sm">
            Need help? 😊 Feel free to reach out to us anytime. We're here to assist you!
          </p>
        </div>

        <a 
          href="https://t.me/mike_codeum" 
          target="_blank" 
          rel="noreferrer" 
          className="text-[#45a3f4] hover:text-[#337bb9]"
        >
          <button
            type="button"
            className="bg-[#45a3f4] hover:bg-[#337bb9] text-white rounded-full p-3 shadow-lg flex items-center justify-center transition-all duration-200"
            style={{ width: '56px', height: '56px' }}
          >
            <RiTelegram2Fill style={{ width: '56px', height: '56px' }} />
          </button>
        </a>
      </div>
    </>
  );
};

export default FloatingContact;