import React from "react";
import SecHeading from "../components/SecHeading";
import ServicesItems from "./ServicesItems";

export default function HomeServices() {
  return (
    <section className="container-lg" style={{ marginTop: "200px" }}>
      <SecHeading
        h3Text="خدمات"
        subText="توانایی های قابل ارائه"
        headingPos="text-center"
      />
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-5 gap-md-0 mt-5">
        <ServicesItems
          itemIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          itemTitle="بازگشت وجه"
          itemText="لورم ایپسوم متن ساختگی با تولید سادگی  از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون و مجله در نچنان که لازم است"
        />
        <ServicesItems
          itemIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          }
          itemTitle="7 روز هفته"
          itemText="لورم ایپسوم متن ساختگی با تولید سادگی  از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون و مجله در نچنان که لازم است"
        />
        <ServicesItems
          itemIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          }
          itemTitle="تحویل در محل"
          itemText="لورم ایپسوم متن ساختگی با تولید سادگی  از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون و مجله در نچنان که لازم است"
        />
      </div>
    </section>
  );
}
