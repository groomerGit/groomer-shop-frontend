import React from 'react';
import Swal from 'sweetalert2';

const AvailabilityPopup = () => {
  const stores = [
    {
      id: 1,
      name: 'Amazon',
      logo: 'a',
      price: 330,
      link: '#'
    },
    {
      id: 2,
      name: 'Flipkart',
      logo: 'f',
      price: 355,
      link: '#'
    },
    {
      id: 3,
      name: 'Nykaa',
      logo: 'n',
      price: 420,
      link: '#'
    }
  ];

  React.useEffect(() => {
    const styles = `
      .availability-popup {
        background: rgba(0, 0, 0, 0.9) !important;
        padding: 20px !important;
        color: white !important;
      }

      .availability-content {
        background: transparent !important;
        padding: 0 !important;
      }

      .store-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 20px;
      }

      .store-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 0;
      }

      .store-info {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .store-logo {
        width: 30px;
        height: 30px;
        background: #ffffff;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: black;
      }

      .store-name {
        font-size: 14px;
        color: #999;
      }

      .store-price {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .price-symbol {
        color: #999;
      }

      .buy-now {
        background: #d4c5a9;
        color: black;
        border: none;
        padding: 6px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        transition: opacity 0.3s;
      }

      .buy-now:hover {
        opacity: 0.9;
      }

      .swal2-close {
        color: white !important;
        font-size: 24px !important;
      }

      .swal2-title {
        color: white !important;
        font-size: 20px !important;
        font-weight: normal !important;
        margin-bottom: 20px !important;
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const showAvailability = () => {
    Swal.fire({
      title: 'Availability',
      html: `
        <div class="store-list">
          ${stores.map(store => `
            <div class="store-item">
              <div class="store-info">
                <div class="store-logo">${store.logo}</div>
                <div class="store-name">Shop from ${store.name}</div>
              </div>
              <div class="store-price">
                <span class="price-symbol">₹</span>
                <span>${store.price}</span>
                <button class="buy-now" onclick="window.location.href='${store.link}'">Buy Now</button>
              </div>
            </div>
          `).join('')}
        </div>
      `,
      showConfirmButton: false,
      customClass: {
        popup: 'availability-popup',
        content: 'availability-content'
      },
      showCloseButton: true,
      background: 'transparent'
    });
  };

  return (
    <button onClick={showAvailability} className="trigger-button">
      Check Availability
    </button>
  );
};

export default AvailabilityPopup;