import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export function TinyHouseCommunity({ id, fields }) {
  return (
    <div>
      {fields?.Pictures && (
        <img width="400" height="400" src={fields.Pictures[0]?.url} />
      )}
      <a href={fields.Homepage}>
        <h2 className="text-lg font-semibold text-slate-500">{fields.Name}</h2>
      </a>
    </div>
  );
}

export default function Home({ records }) {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8 leading-tight">
        Tiny House Communities
      </h1>
      <Link href="/new" className="bg-slate-500 text-white px-5 py-4 shadow-md">
        Add a Community
      </Link>
      <div className="grid grid-cols-3 grid-gap-3">
        {records.map((record, key) => (
          <TinyHouseCommunity key={key} {...record} />
        ))}
      </div>
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
