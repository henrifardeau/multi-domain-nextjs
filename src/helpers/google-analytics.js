const sendPageView = (url) => {
  if (!window.gtag || process.env.NODE_ENV === 'development') return;

  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

const sendEvent = ({ action, params }) => {
  if (!window.gtag || process.env.NODE_ENV === 'development') return;

  window.gtag('event', action, params);
};

export { sendPageView, sendEvent };
