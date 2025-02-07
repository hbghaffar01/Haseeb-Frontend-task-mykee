"use client"

import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
          <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <img
              src="/not-found.jpg"
              alt="Error"
              className="w-full h-auto mb-6 rounded-lg shadow-md"
            />
            <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
              Something Went Wrong
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Oops! There was an error while loading this page. Please try again later.
            </p>
            <button
              className="bg-blue-500 text-white rounded-full px-6 py-3 transition duration-300 hover:bg-blue-600"
              onClick={() => window.location.reload()}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
