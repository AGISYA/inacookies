"use client"

import React, { useEffect, useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BsRobot } from "react-icons/bs";
import { FaUser, FaRobot, FaRegWindowClose } from "react-icons/fa";
import { sendChat } from "@/services/chat";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const ChatBubble: React.FC<{ projectId: number }> = ({ projectId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneEntered, setIsPhoneEntered] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/6282295511591", "_blank");
  };

  interface ChatMessage {
    sender: "user" | "bot";
    text: string;
  }

  // Fungsi untuk menyimpan nomor telepon
  const handleSetPhoneNumber = () => {
    if (!phoneNumber.trim()) return;

    // Validasi nomor telepon hanya berisi angka
    const isValidPhoneNumber = /^\d+$/.test(phoneNumber);
    if (!isValidPhoneNumber) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Nomor telepon hanya boleh berisi angka. Silakan coba lagi.",
        },
      ]);
      return;
    }

    setIsPhoneEntered(true);

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: "Nomor telepon berhasil disimpan. Silakan kirim pesan Anda!",
      },
    ]);
  };

  const handleSendMessage = async () => {
    if (!isPhoneEntered) return; // Memastikan nomor telepon sudah diinput sebelum mengirim pesan
    if (!userInput.trim()) return;

    const userMessage: ChatMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");

    setIsLoading(true);

    try {
      const response = await sendChat(projectId, phoneNumber, userInput);
      const botMessage: ChatMessage = {
        sender: "bot",
        text: response.data.response,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("error :>> ", error);
      const errorMessage: ChatMessage = {
        sender: "bot",
        text: "Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isLoading) {
      if (!isPhoneEntered) {
        handleSetPhoneNumber();
      } else {
        handleSendMessage();
      }
    }
  };

  // Fungsi untuk memblokir karakter yang tidak diinginkan
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Hanya mengizinkan angka
    setPhoneNumber(value);
  };

  return (
    <div className="fixed bottom-6 right-6 flex items-center space-x-4 z-50">
      {/* WhatsApp Bubble */}
      <button
        onClick={openWhatsApp}
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 focus:outline-none transition-all duration-300"
        aria-label="Chat with us on WhatsApp"
      >
        <IoLogoWhatsapp size={24} />
      </button>

      {/* Chat Bubble */}
      <button
        onClick={toggleChat}
        className={`flex items-center justify-center w-14 h-14 bg-[#ED364D] text-white rounded-full shadow-lg hover:bg-[#C62D41] focus:outline-none transition-all duration-300 transform ${
          isOpen ? "rotate-45" : "rotate-0"
        }`}
        aria-label="Open Chat"
      >
        {isOpen ? <FaRegWindowClose size={24} /> : <BsRobot size={24} />}
      </button>

      {/* Chat Pop-up */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 max-h-[70vh] bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col transform transition-all duration-300 ease-in-out translate-y-0 opacity-100">
          <div className="p-3 bg-[#ED364D] text-white rounded-t-lg flex justify-between items-center">
            <h2 className="text-sm font-medium">Minna</h2>
            <button
              onClick={toggleChat}
              className="text-white focus:outline-none"
              aria-label="Close Chat"
            >
              ✕
            </button>
          </div>

          {/* Scroll Area for Messages */}
          <ScrollArea className="flex-grow p-4 space-y-4 overflow-y-auto">
            {/* Greeting Message */}
            {messages.length === 0 && (
              <div className="flex items-start space-x-2">
                <FaRobot size={20} className="text-gray-500 flex-shrink-0" />
                <div className="px-2 py-2 rounded-lg max-w-xs text-sm bg-gray-200 text-gray-900">
                  Halo! Saya Minna. Silakan masukkan nomor telepon
                  Anda terlebih dahulu 📞. 
                </div>
              </div>
            )}

            {/* Chat Messages */}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start space-x-2 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "bot" && (
                  <FaRobot size={20} className="text-gray-500 flex-shrink-0" />
                )}
                <div
                  className={`px-4 py-2 rounded-lg max-w-xs text-sm mb-2 ${
                    message.sender === "user"
                      ? "bg-[#ED364D] text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                >
                  {message.text}
                </div>
                {message.sender === "user" && (
                  <FaUser size={20} className="text-gray-500" />
                )}
              </div>
            ))}
            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start space-x-2">
                <FaRobot size={20} className="text-gray-500" />
                <div className="px-4 py-2 rounded-lg max-w-xs text-sm bg-gray-200 text-gray-900">
                  Sedang memproses...
                </div>
              </div>
            )}
            <div ref={messagesEndRef}></div>
          </ScrollArea>

          {/* Input Phone */}
          {!isPhoneEntered && (
            <form className="p-4 border-t border-gray-300">
              <div className="flex items-center">
                <Input
                  type="text"
                  className="flex-1 px-3 py-2 text-gray-800 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a3818]"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  onKeyDown={handleKeyPress}
                  placeholder="Masukan nomor telepon anda..."
                />
                <Button
                  className="ml-4 px-3 py-2 bg-[#ED364D] text-white text-sm rounded-lg hover:bg-[#C62D41] disabled:bg-gray-300"
                  onClick={handleSetPhoneNumber}
                  disabled={!phoneNumber.trim()}
                  type="submit"
                >
                  Simpan
                </Button>
              </div>
            </form>
          )}

          {/* Input Message */}
          {isPhoneEntered && (
            <form className="p-4 border-t border-gray-300">
              <div className="flex items-center">
                <Input
                  type="text"
                  className="flex-1 px-3 py-2 text-gray-800 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a3818]"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ketik pesan Anda..."
                />
                <Button
                  className="ml-4 px-3 py-2 bg-[#ED364D] text-white text-sm rounded-lg hover:bg-[#C62D41] disabled:bg-gray-300"
                  onClick={handleSendMessage}
                  disabled={isLoading}
                  type="submit"
                >
                  Kirim
                </Button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBubble;