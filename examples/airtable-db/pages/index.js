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

export default function Home({ records }) {
  return (
    <div className="container">
      {records.map((record, key) => (
        <TinyHouseCommunity key={key} {...record} />
      ))}
    </div>
  );
}

export async function getStaticProps(context) {
  async function retrieveRecords() {
    const { data } = await axios.get("https://eohk5gi3tgxb3xo.m.pipedream.net");

    return data;
  }

  const records = await retrieveRecords();

  return {
    props: { records }, // will be passed to the page component as props
  };
}
