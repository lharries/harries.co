"use client";

import { Button } from "@/app/components";
import { useConversation } from "@11labs/react";
import { useCallback, useState } from "react";

export function ConversationalAI() {
  const [isConnected, setIsConnected] = useState(false);
  const conversation = useConversation({
    onConnect: () => {
      setIsConnected(true);
      console.log("Connected");
    },
    onDisconnect: () => {
      setIsConnected(false);
      console.log("Disconnected");
    },
    onMessage: (message) => console.log("Message:", message),
    onError: (error) => console.error("Error:", error),
  });

  const startConversation = useCallback(async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Start the conversation with your agent
      await conversation.startSession({
        agentId: "lWbqR0FqZpT595AfcSve", // Replace with your agent ID
      });
    } catch (error) {
      console.error("Failed to start conversation:", error);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        {isConnected ? (
          <Button onClick={stopConversation}>Stop Conversation</Button>
        ) : (
          <Button onClick={startConversation}>Start Conversation</Button>
        )}
      </div>
    </div>
  );
}
