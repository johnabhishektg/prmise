"use client";

import { sendWhatsAppMessage } from "@/app/(actions)/twilio";
import { Loader2, MessageSquare } from "lucide-react";
import React from "react";
import { Button } from "react-day-picker";

export function WhatsAppMessage() {
  const [isPending, startTransition] = React.useTransition();
  const handleSendMessage = async () => {
    const result = await sendWhatsAppMessage();
    if (result.success) {
      // Handle success
    } else {
      // Handle error
    }
  };

  return (
    <Button
      onClick={() => {
        startTransition(async () => {
          try {
            handleSendMessage();
          } catch (err) {
            throw err;
          }
        });
      }}
    >
      {isPending && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
      )}
      <MessageSquare className="w-4 h-4" />
    </Button>
  );
}

export default WhatsAppMessage;
