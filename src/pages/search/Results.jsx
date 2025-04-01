import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import React from "react";
import { GoLaw } from "react-icons/go";
import { TiDocumentText } from "react-icons/ti";
import { Link } from "react-router-dom";

function Results({ searchResults }) {
  const items = [
    {
      header: "PDF DOC Name",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
    },
    {
      header: "Where does it come from?",
      content: "Quisque eget luctus mi, vehicula mollis lorem...",
    },
    {
      header: "Why do we use it?",
      content: "Suspendisse massa risus, pretium id interdum in...",
    },
  ];

  return (
    <Accordion
      className="flex flex-col gap-[20px] w-full"
      transition
      transitionTimeout={250}
    >
      {searchResults?.map((item, i) => (
        <AccordionItem
          header={
            <div className="w-full bg-sidebar-bg p-4 rounded-t-2xl text-start flex items-center gap-[10px] cursor-pointer font-semibold text-[20px]">
              <span className="rounded-md">
                <TiDocumentText className="text-3xl text-blue-500" />
              </span>
              {item?.document_name}
            </div>
          }
          key={i}
        >
          <div className="bg-sidebar-bg px-4 pb-4 text-black w-full rounded-b-2xl text-start flex flex-col">
            {item?.link != "Unknown" && (
              <Link
                to={item?.link}
                target="_blank"
                className="w-fit text-blue-400 text-[16px] font-normal"
              >
                Dcoument PDF (Page number : {item?.page_number})
              </Link>
            )}
            {item?.content}
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default Results;
