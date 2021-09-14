import React from 'react';

import Logo from './media/VIDRIALUM.png';

import Facebook from './media/butons/facebook.svg';

import Instagram from './media/butons/instagram.svg';

import Whatsapp from './media/butons/whatsapp.svg';

function Footer(){
    return ( 
      <footer className="footer">
        <div className="company-info">
          <img src={Logo} alt="logo empresa" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            aperiam, fugiat mollitia similique suscipit eveniet nisi architecto
            ullam odit pariatur cumque ad sapiente doloremque blanditiis
            provident quibusdam nihil ex rem?
          </p>
        </div>
        <div className="info-contact">
          <a href="https://www.facebook.com/vidrialum.empresa" target="_blank" rel="noreferrer">
            <img
              src={Facebook}
              alt=" botton facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/vidrialum_empresa/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Instagram}
              alt="botton instagram"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=59895733347"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Whatsapp}
              alt="botton whatsapp"
            />
          </a>
        </div>
        <div className="location">
          <h5>Nos encontramos en:</h5>
          <div className="google-maps-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.1901542569594!2d-56.04897008480124!3d-34.7759879741405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a028f3315a4079%3A0x8a2c35373ede2234!2sVidrialum!5e0!3m2!1ses-419!2suy!4v1619484438581!5m2!1ses-419!2suy"
              allowFullScreen={true}
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
        <h2 className="title-final">
          &copy;
          <script>{new Date().getFullYear()}</script>
          VIDRIALUM
        </h2>
      </footer>
  );
}

export default Footer ;