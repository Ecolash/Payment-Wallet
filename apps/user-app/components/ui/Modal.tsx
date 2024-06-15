"use client";

import { PlusIcon } from "lucide-react";
import { useState } from "react";
import Cards, { Focused } from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { addNewCard } from "../../app/lib/actions/addNewCard";

interface CardInfo {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
  focus: Focused;
}

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
    <>
      <button
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center gap-2 mb-2"
        onClick={openModal}
      >
        <PlusIcon size={16} className="inline-block" />
        Add Card
      </button>
      <div
        className={`inset-0 z-[999] grid place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 ${
          modalOpen ? "opacity-100 fixed" : "opacity-0 hidden"
        }`}
      >
        <div className="relative m-4 w-full sm:max-w-xl rounded-lg bg-neutral-900 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
          <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
            Add your card details here
          </div>
          <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed">
            <Cards
              cvc={state.cvc}
              expiry={state.expiry}
              focused={state.focus}
              name={state.name}
              number={state.number}
            />
          </div>

          <div className="w-full py-5 px-2 sm:px-4 flex flex-col justify-between items-center gap-8">
            <div className="flex flex-between w-[95%] sm:gap-10 gap-8 flex-col sm:flex-row">
              <div className="text-gray-200 font-bold text-sm mb-2 block">
                <label>Card Number</label>
                <input
                  type="text"
                  className="flex h-10 mt-2 w-full outline-none rounded-md focus:border-2 border border-white placeholder:text-gray-500 bg-transparent px-4 py-1.5 text-lg focus:border-red-500"
                  value={state.number}
                  name="number"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                ></input>
              </div>
              <div className="text-gray-200 font-bold text-sm mb-2 block">
                <label>Card Name</label>
                <input
                  type="text"
                  className="flex h-10 mt-2 w-full outline-none rounded-md focus:border-2 border border-white placeholder:text-gray-500 bg-transparent px-4 py-1.5 text-lg focus:border-red-500"
                  value={state.name}
                  name="name"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  placeholder="John Doe"
                ></input>
              </div>
            </div>

            <div className="flex flex-between w-[95%] sm:gap-10 gap-8 flex-col sm:flex-row">
              <div className="text-gray-200 font-bold text-sm mb-2 block">
                <label>Expiration Date</label>
                <input
                  type="text"
                  className="flex h-10 mt-2 w-full outline-none rounded-md focus:border-2 border border-white placeholder:text-gray-500 bg-transparent px-4 py-1.5 text-lg focus:border-red-500"
                  name="expiry"
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  placeholder="MM/YY"
                ></input>
              </div>
              <div className="text-gray-200 font-bold text-sm mb-2 block">
                <label>CVV</label>
                <input
                  type="text"
                  className="flex h-10 mt-2 w-full outline-none rounded-md focus:border-2 border border-white placeholder:text-gray-500 bg-transparent px-4 py-1.5 text-lg focus:border-red-500"
                  value={state.cvc}
                  name="cvc"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  placeholder="XXXX"
                ></input>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
            <button
              className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={async () => {
                await addNewCard({ cardData: state });
                closeModal();
                window.location.reload();
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
