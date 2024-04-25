import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faWhatsapp } from "@fortawesome/free-solid-svg-icons";

function ComboProducts() {
  return (
    <div className="max-w-[1400px] mx-auto mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
        <div class="combo-item ">
          <div class="custom-scale">
            <div className="overflow-hidden relative">
              <img
                src="https://thebrowncurves.com/wp-content/uploads/2021/12/Frame-1-8-2.jpg"
                alt=""
                class="transition-transform duration-300"
              />
              <div className="social-link">
              <a href="mailto:your.email@example.com" >
                  <FontAwesomeIcon icon={faEnvelope} className="social-back" size="2x" color="#25D366" />
                </a>
                <a href="https://wa.me/1234567890">
                  <FontAwesomeIcon icon={faEnvelope} className="social-back" size="2x" color="#25D366" />
                </a>
              </div>
            </div>
            <div class="text-center uppercase py-3 text-[16px]">
              Living room set
            </div>
          </div>
        </div>
        <div class="combo-item ">
          <div class="custom-scale">
            <div className="overflow-hidden relative">
              <img
                src="https://thebrowncurves.com/wp-content/uploads/2021/12/Frame-1-8-2.jpg"
                alt=""
                class="transition-transform duration-300"
              />
              <div className="social-link">
              <a href="mailto:your.email@example.com" >
                  <FontAwesomeIcon icon={faEnvelope} className="social-back" size="2x" color="#25D366" />
                </a>
                <a href="https://wa.me/1234567890">
                  <FontAwesomeIcon icon={faEnvelope} className="social-back" size="2x" color="#25D366" />
                </a>
              </div>
            </div>
            <div class="text-center uppercase py-3 text-[16px]">
              Living room set
            </div>
          </div>
        </div>
        <div class="combo-item ">
          <div class="custom-scale">
            <div className="overflow-hidden relative">
              <img
                src="https://thebrowncurves.com/wp-content/uploads/2021/12/Frame-1-8-2.jpg"
                alt=""
                class="transition-transform duration-300"
              />
              <div className="social-link">
              <a href="mailto:your.email@example.com" >
                  <FontAwesomeIcon icon={faEnvelope} className="social-back" size="2x" color="#25D366" />
                </a>
                <a href="https://wa.me/1234567890">
                  <FontAwesomeIcon icon={faEnvelope} className="social-back" size="2x" color="#25D366" />
                </a>
              </div>
            </div>
            <div class="text-center uppercase py-3 text-[16px]">
              Living room set
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComboProducts;
