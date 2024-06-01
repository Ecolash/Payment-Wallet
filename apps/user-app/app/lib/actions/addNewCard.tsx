"use server";

import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { Focused } from "react-credit-cards-2";
import { CardsType } from "@prisma/client";

interface CardInfo {
    number: string;
    expiry: string;
    cvc: string;
    name: string;
    focus: Focused;
}



function getCardType(number: string): CardsType | "" {
    // Visa
    let re = new RegExp("^4");
    if (number.match(re) != null) return CardsType.visa;

    // Mastercard
    // Updated for Mastercard 2017 BINs expansion
    if (
        /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number)
    )
        return CardsType.mastercard;

    // AMEX
    re = new RegExp("^3[47]");
    if (number.match(re) != null) return CardsType.amex;

    // JCB
    re = new RegExp("^35(2[89]|[3-8][0-9])");
    if (number.match(re) != null) return CardsType.jcb;

    // Visa Electron
    re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
    if (number.match(re) != null) return CardsType.visa_electron;
    
    // Rupay
    re = new RegExp("^(60|65|81|82)");
    if (number.match(re) != null) return CardsType.rupay;

    return "";
}

export async function addNewCard({ cardData }: { cardData: CardInfo }) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
        return {
            message: "Unauthorized",
        };
    }

    const cardType = getCardType(cardData.number);
    if (!cardType) {
        return {
            message: "Invalid card type",
        };
    }

    try {
        await prisma.cards.create({
            data: {
                card_number: cardData.number,
                card_expiry: cardData.expiry,
                card_cvc: cardData.cvc,
                card_name: cardData.name,
                card_type: cardType,
                userId: Number(session.user.id),
            },
        });

        return {
            message: "Card added successfully",
        };
    } catch (e) {
        return {
            message: "Error adding card",
        };
    }
}
