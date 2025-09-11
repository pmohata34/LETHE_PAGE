import { useState, useEffect } from "react";


export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    if (open) setShowHint(false);
  }, [open]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    // Placeholder for AI response
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { from: "bot", text: "Thanks for your message! (AI response coming soon)" }
      ]);
    }, 600);
  };

  return (
    <div>
      {/* Floating button */}
      {!open && (
        <div className="fixed bottom-16 right-16 z-50 flex flex-col items-end">
          {showHint && (
            <div className="mb-2 mr-2 bg-gray-300 text-[#4025aa] px-4 py-2 rounded-lg shadow-lg text-sm font-semibold animate-fade-in-pop backdrop-blur">
              Ask anything to our bot!
            </div>
          )}
          <button
            className="bg-[#4025aa] text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center hover:bg-[#2d1970] transition"
            onClick={() => setOpen(true)}
            aria-label="Open chatbot"
          >
            <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="14" cy="14" r="12" stroke="#fff" strokeWidth="2" fill="#4025aa" />
              <path d="M9 14h6M9 18h4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <circle cx="11" cy="11" r="1" fill="#fff" />
            </svg>
          </button>
        </div>
      )}
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[90vw] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-[#4025aa] text-white px-4 py-3 flex items-center justify-between">
            <span className="font-bold">Lethe AI Chat</span>
            <button
              className="ml-2 text-white hover:text-gray-200"
              onClick={() => setOpen(false)}
              aria-label="Close chatbot"
            >
              <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 6l10 10M6 16L16 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="flex-1 px-4 py-3 bg-gray-50 overflow-y-auto" style={{ maxHeight: 320 }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${
                    msg.from === "user"
                      ? "bg-[#4025aa] text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form
            className="flex border-t border-gray-200 bg-white"
            onSubmit={handleSend}
          >
            <input
              className="flex-1 px-3 py-2 text-sm outline-none bg-transparent"
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter" && !e.shiftKey) handleSend(e);
              }}
            />
            <button
              type="submit"
              className="px-4 py-2 text-[#4025aa] font-bold hover:text-indigo-700 transition"
              disabled={!input.trim()}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

