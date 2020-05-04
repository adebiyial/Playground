import React from "react";

function Icons({name}) {
  if (name === "home") {
    return (
      <svg
        className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--home-svg"
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none">
          <path
            d="M9.5 15.035V11.63a.6.6 0 0 0-.607-.596H7.107a.604.604 0 0 0-.607.596v3.405h-4a.998.998 0 0 1-1-.998V7.032c0-.381.218-.729.56-.896l5.96-4.9 5.896 4.889a.997.997 0 0 1 .584.907v7.005a.998.998 0 0 1-.999.998zM8 8.835a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6z"
            fill="#A3ACB9"
            className="db-SideNav-iconFill--secondary"
          ></path>
          <path
            d="M8.002 1.004a.403.403 0 0 0-.307.085L.552 6.873a.4.4 0 0 0-.06.57l.75.925c.138.17.395.2.568.06l6.192-5.015 6.193 5.015c.173.14.43.11.57-.06l.748-.926a.4.4 0 0 0-.06-.57L8.31 1.09a.403.403 0 0 0-.308-.085z"
            fill="#4F566B"
            className="db-SideNav-iconFill--primary"
          ></path>
        </g>
      </svg>
    );
  }

  if (name === "payments") {
    return (
      <svg
        className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--payments-svg"
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none">
          <path
            d="M11.1 10.002A2.1 2.1 0 1 0 6.9 10H1c-.552 0-1-.413-1-.923V2.923C0 2.413.448 2 1 2h12.002c.553 0 1 .413 1 .923v7.08zM7.006 4A2.003 2.003 0 1 0 7 8.006 2.003 2.003 0 0 0 7.006 4z"
            fill="#A3ACB9"
            className="db-SideNav-iconFill--secondary"
          ></path>
          <path
            d="M15 14H3c-.552 0-1-.413-1-.923V6.923C2 6.413 2.448 6 3 6h12c.552 0 1 .413 1 .923v6.154c0 .51-.448.923-1 .923zM9.006 8A2.003 2.003 0 1 0 9 12.006 2.003 2.003 0 0 0 9.006 8z"
            fill="#4F566B"
            className="db-SideNav-iconFill--primary"
          ></path>
        </g>
      </svg>
    );
  }

  if (name === "balances") {
    return (
      <svg
        className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--payouts-svg"
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none">
          <path
            d="M5.538 3.4v5.64c0 .55-.444.996-1 .996-.552 0-1-.455-1-.995V3.414L1.712 5.241a.999.999 0 0 1-1.417.002.994.994 0 0 1 .002-1.416L3.83.295A.999.999 0 0 1 4.546 0c.259-.002.518.097.717.295l3.53 3.532c.4.4.394 1.026.003 1.416a.999.999 0 0 1-1.416-.002l-1.84-1.84z"
            fill="#A3ACB9"
            className="db-SideNav-iconFill--secondary"
          ></path>
          <path
            d="M12.123 12.722v-5.64a.995.995 0 0 0-1-.995c-.552 0-1 .455-1 .995v5.626l-1.826-1.826a.999.999 0 0 0-1.416-.002.994.994 0 0 0 .002 1.416l3.531 3.531c.198.199.458.297.716.296a1 1 0 0 0 .717-.296l3.531-3.531c.4-.4.393-1.026.002-1.416a.999.999 0 0 0-1.416.002l-1.84 1.84z"
            fill="#4F566B"
            className="db-SideNav-iconFill--primary"
          ></path>
        </g>
      </svg>
    );
  }

  if (name === "customers") {
    return (
      <svg
        className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--customers-svg"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none">
          <path
            d="M13.445 13.861C12.413 12.885 10.362 12.22 8 12.22s-4.413.665-5.445 1.641a8 8 0 1 1 10.89 0zM8 9.231a3.077 3.077 0 1 0 0-6.154 3.077 3.077 0 0 0 0 6.154z"
            fill="#4f566b"
            className="db-SideNav-iconFill--primary"
          ></path>
          <path
            d="M13.944 13.354A7.98 7.98 0 0 1 8 16a7.98 7.98 0 0 1-5.944-2.646C2.76 12.043 5.154 11.077 8 11.077s5.24.966 5.944 2.277z"
            fill="#4f566b"
            className="db-SideNav-iconFill--secondary"
          ></path>
        </g>
      </svg>
    );
  }

  if (name === "connected accounts") {
    return (
      <svg
        className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--connect-svg"
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none">
          <path
            d="M8.002 16.004A8.002 8.002 0 1 1 8.002 0c.455 0 .9.047 1.334.12V5h1.666v1.668h4.882c.073.435.12.88.12 1.334a8.002 8.002 0 0 1-8.002 8.002zm1.992-6.01H6.348a.34.34 0 0 1-.34-.34v-3.64h-2.44a.338.338 0 0 0-.24.1l-2.23 2.23a6.905 6.905 0 0 0 6.57 6.563l2.227-2.228c.063-.063.1-.15.1-.24V9.992z"
            fill="#A3ACB9"
            className="db-SideNav-iconFill--secondary"
          ></path>
          <path
            d="M15.886 6.686L12.68 9.894a.338.338 0 0 1-.24.1H9.994V6.352a.338.338 0 0 0-.338-.338H6.009V3.559a.34.34 0 0 1 .1-.24l3.2-3.203a7.993 7.993 0 0 1 6.577 6.57z"
            fill="#4F566B"
            className="db-SideNav-iconFill--primary"
          ></path>
        </g>
      </svg>
    );
  }

  if (name === "products") {
    return (
      <svg
        className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--products-svg"
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none">
          <path
            d="M13.587 3.164h.33l.342.16c.337.16.741.64.741 1.09v7.066c0 .366-.404.7-.741.861l-5.726 2.77c-.123.058-.258.087-.533.087V9.181H2.66V3.848l7.044-2.593.117-.11L12.3 2.346l-.336.835 1.624-.017z"
            fill="#4F566B"
            className="db-SideNav-iconFill--primary"
          ></path>
          <path
            d="M8 6.914v8.247s-.546.022-.715-.051l-5.752-2.754A.951.951 0 0 1 1 11.495V4.2a.95.95 0 0 1 .533-.86L7.637.458a.883.883 0 0 1 .767 0l1.753.838-6.913 3.307a.467.467 0 0 0-.257.42l.007 2.03 2.008 1.032V5.991a.467.467 0 0 1 .255-.419l6.906-3.313 1.991.953c.188.093.35.268.506.427z"
            fill="#A3ACB9"
            className="db-SideNav-iconFill--secondary"
          ></path>
        </g>
      </svg>
    );
  }

  if (name === "reports") {
    return (
      <svg
        className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--reports-svg"
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none">
          <path
            d="M2 9h1a1 1 0 1 0 0-2H2V5h1a1 1 0 1 0 0-2H2V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1h1a1 1 0 0 0 0-2H2z"
            fill="#a3acb9"
            className="db-SideNav-iconFill--secondary"
          ></path>
          <path
            d="M6 10h2v3H6zm3-3h2v6H9zm3-4h2v10h-2zM0 12a1 1 0 0 1 1-1h1v2H1a1 1 0 0 1-1-1zm0-4a1 1 0 0 1 1-1h1v2H1a1 1 0 0 1-1-1zm0-4a1 1 0 0 1 1-1h1v2H1a1 1 0 0 1-1-1z"
            fill="#4f566b"
            className="db-SideNav-iconFill--primary"
          ></path>
        </g>
      </svg>
    );
  }

  if (name === "atlas") {
    return (
      <svg
        className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--atlas-svg"
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="sidenav-atlas-a" fill="#fff">
          <circle cx="8" cy="8" fillRule="evenodd" r="8"></circle>
        </mask>
        <g fill="none">
          <path
            d="M2.312 13.625A8 8 0 1 0 1.6 12.8L8 0v12z"
            fill="#aab7c4"
            className="db-SideNav-iconFill--secondary"
            mask="url(#sidenav-atlas-a)"
          ></path>
          <path
            d="M8 0l7 14-7-2z"
            fill="#4F566B"
            className="db-SideNav-iconFill--primary"
            mask="url(#sidenav-atlas-a)"
          ></path>
        </g>
      </svg>
    );
  }

  if (name === "developers") {
    return (
      <svg
        className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--api-svg"
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 11.173V3.307A1.31 1.31 0 0 1 1.31 2h13.38c.724 0 1.31.579 1.31 1.307v9.386A1.31 1.31 0 0 1 14.69 14H1.31C.585 14 0 13.421 0 12.693zm2.348-4.006a.594.594 0 0 0-.295.788c.13.294.486.44.783.308l2.576-1.147c.3-.133.83-.53.957-1.06-.127-.53-.657-.927-.957-1.06L2.836 3.849a.601.601 0 0 0-.488 1.096L5.19 6.056l-2.84 1.11z"
          fill="#4F566B"
          className="db-SideNav-iconFill--primary"
          fillRule="evenodd"
        ></path>
      </svg>
    );
  }

  if (name === "settings") {
    return (
      <svg
        className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--settings-svg"
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.197 7.017c-.23 0-1.607 0-2.18-.695 0-.115-.115-.115-.115-.231-.115-.81.918-1.851 1.032-1.967.23-.231.23-.579.115-.694-.115-.116-.574-.579-.688-.81-.115-.232-.46-.116-.689.116-.23.23-1.147 1.157-1.95 1.04-.115 0-.115-.115-.23-.115-.689-.463-.689-1.851-.689-2.082 0-.348-.114-.579-.344-.579H7.311c-.229 0-.344.231-.344.579 0 .23 0 1.62-.688 2.198-.115 0-.115.116-.23.116-.803 0-1.721-.926-1.95-1.157-.23-.232-.574-.232-.69-.116-.114.231-.573.694-.802.81-.115.115-.115.463.114.694.23.231 1.148 1.157 1.033 1.967 0 .116-.115.116-.115.231-.459.695-1.836.695-2.065.695-.344 0-.574.115-.574.347v1.041c0 .231.23.463.574.463.23 0 1.606 0 2.18.694 0 .116.115.116.115.231.115.81-.918 1.852-1.033 1.967-.23.232-.23.579-.115.695.115.115.574.578.689.81.115.115.459.115.688-.116.23-.232 1.148-1.157 1.951-1.042.115 0 .115.116.23.116.688.579.688 1.851.688 2.198 0 .232.23.579.46.579h1.032c.23 0 .459-.231.459-.579 0-.23 0-1.62.689-2.198.114 0 .114-.116.23-.116.802-.115 1.835.926 1.95 1.042.23.231.574.231.688.115l.804-.81c.114-.115.114-.462-.115-.694-.23-.231-1.148-1.157-1.033-1.967 0-.115.115-.115.115-.231.574-.694 1.836-.694 2.18-.694.23 0 .574-.232.574-.463V7.364c-.23-.232-.459-.347-.803-.347zm-6.312 3.47c-1.377 0-2.524-1.156-2.524-2.545 0-1.388 1.147-2.545 2.524-2.545s2.525 1.157 2.525 2.545c0 1.389-1.148 2.546-2.525 2.546z"
          fill="#4F566B"
          className="db-SideNav-iconFill--primary"
          fillRule="evenodd"
        ></path>
      </svg>
    );
  }

  return (
    <svg
      aria-controls="menu155"
      aria-haspopup="menu"
      id="menu155-button"
      aria-hidden="true"
      className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--notifications-svg Icon--hoverable-svg Icon-color-svg Icon-color--gray-svg"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.55 14h4.9a2.5 2.5 0 0 1-4.9 0zM13 9.066l1.216 1.232A1 1 0 0 1 13.504 12H2.496a1 1 0 0 1-.712-1.702L3 9.066V5a5 5 0 1 1 10 0z"
        fillRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icons;
