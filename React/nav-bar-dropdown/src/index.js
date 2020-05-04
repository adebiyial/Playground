import React, {useLayoutEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";
import {items} from "./data";
import Icons from "./Icons";

function NavDropdownItems({items}) {
  return items.map((item, index) => (
    <a href="/" className="nav-item" key={index}>
      {item.title}
    </a>
  ));
}

function App() {
  const [navItems] = React.useState(items);
  const [selectedItem, setSelectedItem] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const ddRef = useRef(null);
  const [height, setHeight] = useState();

  useLayoutEffect(() => {
    if (selectedItem) {
      const child = ddRef.current.children[selectedIndex];

      if (navItems[selectedIndex].hasItems) {
        const els = Array.from(child.children[1].children);
        const totalHeight = els
          .map((el) => el.clientHeight)
          .reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), [0]);

        setHeight(totalHeight);
      }
    }
  }, [selectedItem]);

  function expandDropdown(e, index) {
    e.preventDefault();
    setSelectedIndex(index);
    setSelectedItem(e.target.dataset.navItem);
  }

  return (
    <>
      <div className="nav" ref={ddRef}>
        {navItems.map((navItem, index) => {
          return (
            <div className="nav-items__wrap" key={index}>
              <div className="nav-heading">
                <a
                  href="/"
                  className="nav-item__heading"
                  data-nav-item={navItem.title}
                  onClick={(e) => expandDropdown(e, index)}
                >
                  <Icons {...{name: navItem.title}} />
                  <span className="ref">{navItem.title}</span>
                </a>
              </div>
              {navItem.hasItems && (
                <ul
                  style={{
                    height: (selectedItem === navItem.title && height) || 0,
                  }}
                  className="nav-items"
                >
                  <NavDropdownItems
                    {...{
                      items:
                        (selectedItem === navItem.title && navItem.items) || [],
                    }}
                  />
                </ul>
              )}
            </div>
          );
        })}
      </div>
      <div className="content-wrap">
        <div className="inner-content">
          <div className="content">
            <h1>What's this?</h1>
            <br />
            <br />
            <p>
              This is about Stripe's dashboard. I draw a lot of inspiration from
              there.
              <br />
              <br />
              <br />
              The goal here is to build the navigation bar to the left and
              animate the items with children (e.g Payments)
              <br />
              <br />
              <br />
              This can be done with the HTML input checkbox trick but what makes
              this special is that the dropdown transition in and out.
              <br />
              <br />
              <br />
              This means we have to dynamically calculate the height of each
              dropdown.
              <br />
              <br />
              <br />
              Made with ❤️❤️ by
              <br />
              <a href="https://twitter.com/adebiyial">Adebiyi Adedotun</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
