import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footnote = () => {
  return (
    <div>
      <footer className="py-24 bg-black text-white">
        <div className="container">
          <div className="md:grid md:grid-cols-[1fr,_1fr,_2fr,_2fr] flex flex-col gap-5">
            <ul className="md:space-y-5 md:text-base text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>TCookie Policy</li>
            </ul>
            <ul className="md:space-y-5 md:text-base text-sm">
              <li>About</li>
              <li>Menu</li>
              <li>Delivery</li>
            </ul>
            <ul className="md:space-y-5 md:text-base text-sm">
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
            <div>
              <ul className="flex gap-5 mb-5">
                <li>
                  <Facebook />
                </li>
                <li>
                  <Twitter />
                </li>
                <li>
                  <Instagram />
                </li>
                <li>
                  <Youtube />
                </li>
              </ul >
              <p className="mb-3">456 545 546</p>
              <p>10 Ave Rizal Street, San Pablo Laguna</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footnote;
