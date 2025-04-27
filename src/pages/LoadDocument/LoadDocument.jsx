import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import config from "../../config/mainConfig";
import axios from "axios";

const LoadDocument = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const iframeRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Location state:", location.state); // Debug state
    console.log("Location search:", location.search); // Debug query params

    const fetchHtmlContent = async () => {
      // Try to get chunk_divs and document_link from location.state
      let { chunk_divs, document_link } = location.state || {};

      // Fallback to query parameters
      if (!chunk_divs || !document_link) {
        const queryParams = new URLSearchParams(location.search);
        document_link = queryParams.get("document_link");
        try {
          chunk_divs = JSON.parse(decodeURIComponent(queryParams.get("chunk_divs") || "[]"));
        } catch (err) {
          console.error("Error parsing chunk_divs from query:", err);
        }
      }

      if (!chunk_divs || !document_link) {
        setError("Missing required data. Please access this page from the search results.");
        setIsLoading(false);
        setTimeout(() => navigate("/"), 3000); // Redirect to home after 3s
        return;
      }

      try {
        const response = await axios.post(
          `${config.apiURL}/html/highlight`,
          {
            chunk_divs,
            document_link,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            responseType: "text",
          }
        );

        const htmlContent = response.data;

        if (iframeRef.current) {
          iframeRef.current.srcdoc = htmlContent;
        }
      } catch (err) {
        console.error("Error fetching HTML:", err);
        setError("Failed to load document. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHtmlContent();
  }, [location.state, location.search, navigate]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {isLoading && <div className="text-center text-gray-500">Loading document...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      <iframe
        ref={iframeRef}
        title="Document Content"
        className={`w-full ${isLoading || error ? "hidden" : "block"}`}
        style={{ height: "600px", border: "none" }}
      />
    </div>
  );
};

export default LoadDocument;