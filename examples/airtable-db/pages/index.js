import React, { useState, useEffect } from "react";
import axios from "axios";

export function TinyHouseCommunity({ id, fields }) {
  return (
    <div>
      <a href={fields.Homepage}>
        <h2>{fields.Name}</h2>
      </a>
      {fields?.Pictures && <img width="400" src={fields.Pictures[0]?.url} />}
    </div>
  );
}

export default function Home() {
  const [records, setRecords] = useState([]);

  async function retrieveRecords() {
    const { data } = await axios.get("https://eohk5gi3tgxb3xo.m.pipedream.net");

    setRecords(data);
  }

  useEffect(() => {
    retrieveRecords();
  }, []);

  return (
    <div className="container">
      {records.map((record, key) => (
        <TinyHouseCommunity key={key} {...record} />
      ))}
    </div>
  );
}
