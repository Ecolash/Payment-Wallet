"use client";
import React, { useState } from "react";
import Cards, { Focused } from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { addNewCard } from "../app/lib/actions/addNewCard";

interface CardInfo {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
  focus: Focused;
}
export const AddCardForm = () => {
  const [state, setState] = useState<CardInfo>({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  const handleInputChange = (evt: any) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt: any) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };
  return (
    <div>
      <div className="rccs__card rccs__card--unknown">
        <Cards
          cvc={state.cvc}
          expiry={state.expiry}
          focused={state.focus}
          name={state.name}
          number={state.number}
        />
      </div>

      <form>
        <div className="row ">
          <div className="text-gray-200 font-bold text-sm mb-2 block">
            <label>Card Number</label>
            <input
              type="text"
              className="flex h-10 w-full outline-none  rounded-md focus:border-2 bg-neutral-900 px-4 py-1.5 text-lg focus:border-red-500"
              value={state.number}
              name="number"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-11 text-black">
            <label>Card Name</label>
            <input
              type="text"
              className="form-control"
              value={state.name}
              name="name"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-6 text-black">
            <label>Expiration Date</label>
            <input
              type="text"
              name="expiry"
              className="form-control"
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            ></input>
          </div>
          <div className="col-sm-5 text-black">
            <label>CVV</label>
            <input
              type="tel"
              name="cvc"
              className="card"
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            ></input>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="text-black"
            onClick={async () => {
              const json = await addNewCard({ cardData: state });
              window.alert(json.message);
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
