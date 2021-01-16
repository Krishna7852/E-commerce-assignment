import * as React from 'react';

export interface IFooterProps {}
/**
 * 
 * Static footer with mock data.
 */
export function Footer(props: IFooterProps) {
  return (
    <footer className="bg-gray-800 w-full pt-10">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Getting Started
          </div>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Installation
          </span>

          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Using with Preprocessors
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Optimizing for Production
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Browser Support
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            IntelliSense
          </span>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Core Concepts
          </div>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Utility-First
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Responsive Design
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Hover, Focus, & Other States
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Dark Mode
          </span>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Customization
          </div>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Breakpoints
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Customizing Colors
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Customizing Spacing
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Configuring Variants
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Plugins
          </span>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Community
          </div>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            GitHub
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Discord
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Twitter
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            YouTube
          </span>
        </div>
      </div>
      <div className="pt-2">
        <div
          className="flex pb-5 px-3 pt-5 
            border-t border-gray-500 text-gray-400 text-sm flex-row justify-center"
        >
          <div className="mt-">
            © Copyright 2021. All Rights Reserved by Lead Squared.
          </div>
        </div>
      </div>
    </footer>
  );
}
