import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-center md:py-8 border-t border-gray-200">
          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4" style={{textAlign:"center"}}>© Made by Yugakhan. All rights reserved.</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
