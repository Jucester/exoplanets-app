import React from "react";
import Router from "next/router";

export const Entry = (props) => {
  return (
    <div className="mt-4 col-sm-4">
      <div className="card">
          <img
          src={props.cont.fields.image?.fields.file.url || "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed97b542-8697-4d5c-a783-0dd8185c89d0/d15sn9h-b91d0d97-8378-4b8c-b943-dd1b39a21a84.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkOTdiNTQyLTg2OTctNGQ1Yy1hNzgzLTBkZDgxODVjODlkMFwvZDE1c245aC1iOTFkMGQ5Ny04Mzc4LTRiOGMtYjk0My1kZDFiMzlhMjFhODQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TbpQRH5usavAhtJl_KJ7Tg7eyJBgiVM7fwz7iddfc_4"}
          alt="Planet"
          class="card-img-top img-fluid"
          style={{ width: 400, height: 240 }}
        />
        <div className="card-header">
          <p>
            <b
              onClick={(e) =>
                Router.push("/planets/[id]", `/planets/${props.cont.sys.id}`)
              }
            >
               <strong> Planet Name: </strong> {props.cont.fields.planetName}
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};
