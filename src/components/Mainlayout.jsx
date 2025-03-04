import React, { useEffect, useState } from "react";
import Input from "./Input";
import Output from "./Output";
import axios from "axios";

function Mainlayout() {
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState(null);
  const getData = async () => {
    const res = await axios.get("http://localhost:8000/");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="relative h-full">
      <Input setLoading={setLoading} setDocuments={setDocuments} />
      <Output loading={loading} documents={documents} />
    </div>
  );
}

export default Mainlayout;
