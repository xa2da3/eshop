import React from "react";
import { Hourglass } from "react-loader-spinner";

function Output({ loading, documents }) {
  return (
    <div className="ml-[340px] h-full">
      <div className="flex p-4 flex flex-col justify-between items-center">
        {documents == null && <h1>Search for your query</h1>}
      </div>
      <div className="p-4 h-[calc(100vh-56px)]">
        {loading ? (
          <div className="h-[700px] flex justify-center items-center">
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={["#306cce", "#72a1ed"]}
            />
          </div>
        ) : documents?.length > 0 ? (
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-2xl mb-[20px]">Results</h1>
            {documents.map((doc, key) => (
              <div key={key} className="border-b-2 border-gray-300 pb-6 pt-4">
                <div>
                  <span className="font-bold">Document Name : </span>
                  <span>{doc?.document_name}</span>
                </div>
                <div className="flex gap-[10px]">
                  <span className="font-bold">Content</span>
                  <p>{doc?.content}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          documents != null && (
            <div className="p-4 border-b border-gray-300">
              <h1>No documents found</h1>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Output;
