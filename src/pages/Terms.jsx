import React, {useState} from 'react';
// import ReactMarkdown from 'react-markdown';
import { html, toc, ReactComponent } from '../images/md/terms.md';
import Header from '../partials/Header';
import Banner from '../partials/Banner';

function Terms() {

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            <ReactComponent />

            </div>
          </div>
        </section>

      </main>

      <Banner />

    </div>
  );
}

export default Terms;