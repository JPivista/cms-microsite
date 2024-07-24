import React from "react";
import AccordionPage from "./AccordionPage";

const BigBasketContent = () => {
  return (
    <div>
      <style>
        {`
                    .bg-light-green{
                    background-color: #98D5C5;
                    }

                    .text-light-green{
                    color: #00AE8E;
                    }

                    .border-purple{
                    border-color: #9450AE !important;
                    }
                `}
      </style>

      {/* Header */}
      <div className="flex items-center justify-center h-[500px] w-full">
        <div className="relative w-full bg-[url('/big_basket/big_basket_banner.png')] bg-no-repeat bg-center bg-cover h-full">
          <div className="absolute top-4 left-4 lg:top-4 lg:left-36 lg:w-52">
            <img
              className="w-24 lg:w-full"
              src="/big_basket/CMS-logo.png"
              alt="CMS logo"
            />
          </div>

          {/* <div className="absolute top-4 right-4 lg:hidden">
      <div className="w-8 h-8 bg-purple-600"></div>
    </div> */}

          <div className="absolute bottom-28 w-full px-4 text-center lg:text-left lg:bottom-10 lg:left-40 lg:w-auto lg:px-0 lg:transform-none">
            <p className="text-2xl lg:text-4xl font-bold text-white">
              Shoonya & bigbasket initiative
              <br />
              Growing Green Together
            </p>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-4 lg:bottom-10 lg:right-40 lg:left-auto lg:transform-none">
            <img
              className="w-98 lg:w-[500px]"
              src="/big_basket/big_basket_inside_img.png"
              alt="Big basket inside image"
            />
          </div>
        </div>
      </div>

      {/* Shoonya NetZero */}
      <div className="bg-gray-100">
        <div className="lg:w-2/5 container mx-auto ">
          <p className="text-2xl lg:text-4xl font-semibold text-center lg:pt-24 py-10">
            Shoonya NetZero: <br />
            Transforming Tomorrow, One Tree at a Time
          </p>

          <p className="text-lg text-center lg:py-10 p-5">
            Welcome to the heart of sustainability at CMS – the Shoonya
            Initiative. In collaboration with bigbasket, we are excited to share
            how every star you redeem contributes to our mission of a greener
            and more sustainable future.
          </p>

          <img
            className="flex mx-auto lg:w-[650px] w-80 shadow-lg"
            src="/big_basket/big_basket_inside_img.png"
            alt=""
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-16">
            <img
              src="/big_basket/planting_tree.png"
              alt="planting_tree"
              className="w-full"
            />
            <img
              className="bg-light-green p-5 rounded-xl lg:w-[250px] w-60 mx-auto my-auto"
              src="/big_basket/count.png"
              alt="trees_count"
            />
          </div>
        </div>
      </div>

      {/* About Shoonya */}
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold mb-8">About Shoonya</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 lg:w-[1200px] container mx-auto py-10 p-3">
          <div className="relative border border-green-300 p-6 rounded-lg shadow-lg flex flex-col items-center w-full md:w-96 min-h-[300px]">
            <div className="absolute -top-16 p-4 rounded-full">
              <img
                src="/big_basket/shoonya.svg"
                alt="Shoonya"
                className="h-20 w-20"
              />
            </div>
            <div className="pt-16">
              <p>
                Shoonya, meaning zero or void, embodies our pledge to craft a
                carbon-neutral, sustainable, and Net Zero world.
              </p>
            </div>
          </div>
          <div className="relative border border-green-300 p-6 rounded-lg shadow-lg flex flex-col items-center w-full md:w-96 min-h-[300px]">
            <div className="absolute -top-16 p-4 rounded-full">
              <img
                src="/big_basket/tree_growth.svg"
                alt="Tree Growth"
                className="h-20 w-20"
              />
            </div>
            <div className="pt-16">
              <p>
                Explore our Tree Growth Initiative – where we revive ecosystems
                with native trees. We ensure robust sapling survival and growth,
                providing care and benefits for people and the planet.
              </p>
            </div>
          </div>
          <div className="relative border border-green-300 p-6 rounded-lg shadow-lg flex flex-col items-center w-full md:w-96 min-h-[300px]">
            <div className="absolute -top-16 p-4 rounded-full">
              <img
                src="/big_basket/philosophy.svg"
                alt="Philosophy"
                className="h-20 w-20"
              />
            </div>
            <div className="pt-16">
              <p>
                Embracing a triple bottom line philosophy—People, Planet,
                Prosperity—Shoonya ensures a victory for all!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-[923px] container mx-auto">
        {/* Your Impactful Contribution: */}
        <div className="container mx-auto border-b-2 border-dotted border-purple lg:py-5">
          <div className="flex flex-col lg:flex-row items-start h-auto p-3">
            <img
              src="/big_basket/impactful_contribution.png"
              alt="impactful_contribution"
              className="h-24 lg:w-24 mr-0 lg:mr-4 mb-4 lg:mb-0 my-10"
            />
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-bold text-purple mb-4">
                Your Impactful Contribution:
              </h2>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <img
                    src="/big_basket/square_icon.svg"
                    alt="square icon"
                    className="h-4 w-4 mr-2 mt-1"
                  />
                  <p className="text-base text-gray-700">
                    Redeeming your bigbasket stars for trees directly supports
                    our tree-planting efforts through the Shoonya Initiative.
                  </p>
                </div>
                <div className="flex items-start">
                  <img
                    src="/big_basket/square_icon.svg"
                    alt="square icon"
                    className="h-4 w-4 mr-2 mt-1"
                  />
                  <p className="text-base text-gray-700">
                    Every redeemed star transforms into a seed, fostering
                    biodiversity, combating climate change, and contributing to
                    the restoration of local ecologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Harmony: */}

        <div className="container mx-auto border-b-2 border-dotted border-purple lg:py-5">
          <div className="flex flex-col lg:flex-row items-start h-auto p-3">
            <img
              src="/big_basket/environmental_harmony.png"
              alt="Environmental Harmony"
              className="h-24 lg:w-24 mr-0 lg:mr-4 mb-4 lg:mb-0 my-10"
            />
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-bold text-purple mb-4">
                Environmental Harmony:
              </h2>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <img
                    src="/big_basket/square_icon.svg"
                    alt="square icon"
                    className="h-4 w-4 mr-2 mt-1"
                  />
                  <p className="text-base text-gray-700">
                    Forests serve as crucial carbon sinks, cleansing the air,
                    fortifying local flora, aiding regional fauna, and promoting
                    a healthier Earth
                  </p>
                </div>
                <div className="flex items-start">
                  <img
                    src="/big_basket/square_icon.svg"
                    alt="square icon"
                    className="h-4 w-4 mr-2 mt-1"
                  />
                  <p className="text-base text-gray-700">
                    Our strategy goes beyond mere tree planting, emphasizing
                    comprehensive environmental sustainability, restoration, and
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engaging Communities */}

        <div className="container mx-auto border-b-2 border-dotted border-purple lg:py-5">
          <div className="flex flex-col lg:flex-row items-start h-auto p-3">
            <img
              src="/big_basket/engaging_communities.png"
              alt="Engaging Communities"
              className="h-24 lg:w-24 mr-0 lg:mr-4 mb-4 lg:mb-0 my-10"
            />
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-bold text-purple mb-4">
                Engaging Communities:
              </h2>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <img
                    src="/big_basket/square_icon.svg"
                    alt="square icon"
                    className="h-4 w-4 mr-2 mt-1"
                  />
                  <p className="text-base text-gray-700">
                    Shoonya actively involves local communities in tree-planting
                    activities, fostering environmental stewardship.
                  </p>
                </div>
                <div className="flex items-start">
                  <img
                    src="/big_basket/square_icon.svg"
                    alt="square icon"
                    className="h-4 w-4 mr-2 mt-1"
                  />
                  <p className="text-base text-gray-700">
                    Your contribution goes beyond environmental impact; it
                    promotes community development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tracking Progress */}

        <div className="container mx-auto border-b-2 border-dotted border-purple lg:py-5">
          <div className="flex flex-col lg:flex-row items-start h-auto p-3">
            <img
              src="/big_basket/tracking_progress.png"
              alt="Tracking Progress"
              className="h-24 lg:w-24 mr-0 lg:mr-4 mb-4 lg:mb-0 my-10"
            />
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-bold text-purple mb-4">
                Tracking Progress:
              </h2>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <img
                    src="/big_basket/square_icon.svg"
                    alt="square icon"
                    className="h-4 w-4 mr-2 mt-1"
                  />
                  <p className="text-base text-gray-700">
                    Transparency is key. Visit our Impact Tracker to witness the
                    tangible results of your contribution.
                  </p>
                </div>
                <div className="flex items-start">
                  <img
                    src="/big_basket/square_icon.svg"
                    alt="square icon"
                    className="h-4 w-4 mr-2 mt-1"
                  />
                  <p className="text-base text-gray-700">
                    Real-time updates on trees planted, areas impacted, and the
                    positive changes your stars have made.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join the Green Movement */}
      <div className="lg:flex lg:flex-col items-center my-10 min-h-auto text-center">
        <h1 className="text-5xl font-bold">Join the</h1>
        <h1 className="text-5xl font-bold text-light-green">Green Movement</h1>

        <div className="lg:flex items-center space-x-20 my-10">
          <div className="flex flex-col items-center max-w-xs">
            <img
              src="/big_basket/sustainable_future.png"
              alt="sustainable future"
              className="w-28 h-16"
            />
            <p className="mt-4">
              Your decision to redeem stars for trees is part of a collective
              effort towards a sustainable future.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-xs">
            <img
              src="/big_basket/green_community.png"
              alt="green community"
              className="w-16 h-16"
            />
            <p className="mt-4">
              Share your contribution on social media, inspire others, and help
              us grow this green community.
            </p>
          </div>
        </div>
      </div>

      {/* FAQs - Your Questions Answered: */}
      <AccordionPage />

      {/* Photo Gallery */}
      <div className="container mx-auto py-14">
        <h1 className="text-3xl font-bold text-center mb-8">Photo Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:w-9/12 mx-auto">
          <div>
            <img
              src="/big_basket/gallery/gallery_img_1.png"
              alt="gallery_img_1"
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src="/big_basket/gallery/gallery_img_2.png"
              alt=""
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src="/big_basket/gallery/gallery_img_3.png"
              alt=""
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src="/big_basket/gallery/gallery_img_4.png"
              alt=""
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src="/big_basket/gallery/gallery_img_5.png"
              alt=""
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src="/big_basket/gallery/gallery_img_6.png"
              alt=""
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Share on Social Media */}

      <div className="flex justify-center items-center py-10 bg-[#E4EFED]">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="text-center md:text-end">
            <h2 className="text-xl font-semibold">Share on Social Media</h2>
            <p className="text-gray-600 mt-2">
              Encourage users to share their contributions
            </p>
            <p className="text-gray-600 mt-2">on social media.</p>
            <div className="flex justify-center md:justify-end space-x-4 mt-4">
              <img
                src="/big_basket/linkedin.svg"
                alt="LinkedIn"
                className="w-6 h-6"
              />
              <img src="/big_basket/x.svg" alt="X" className="w-6 h-6" />
            </div>
          </div>
          <div className="relative w-48 md:w-96 md:h-96 rounded-full overflow-hidden">
            <img
              src="/big_basket/social_media.png"
              alt="Social Media"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBasketContent;
