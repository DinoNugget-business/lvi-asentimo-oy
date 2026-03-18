"use client";

import { useState, useRef, useEffect, type FormEvent, type KeyboardEvent } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { CONTACT, PRICING } from "@/lib/constants";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME =
  "Hei! Olen Asentimon virtuaaliassistentti. Voin kertoa palveluistamme, hinnoistamme ja yhteystiedoistamme. Miten voin auttaa?";

const QUICK_REPLIES = [
  { label: "Palvelut", value: "Mitä palveluja tarjoatte?" },
  { label: "Hinnat", value: "Paljonko maksaa?" },
  { label: "Yhteystiedot", value: "Miten otan yhteyttä?" },
  { label: "Hätähuolto 24/7", value: "Tarvitsen hätähuoltoa" },
];

function getDemoResponse(input: string): string {
  const q = input.toLowerCase();

  if (/hätä|vuoto|kiireelli|vesivahi|akuutti/.test(q)) {
    return `Hätätilanteessa soita heti päivystysnumeroomme: ${CONTACT.phone2}. Palvelemme 24/7 — vesivahingot, putkivuodot ja lämmitysongelmat.`;
  }

  if (/palvelu|asennu|putki|viemäri|remontti|linja|saneerau/.test(q)) {
    return "Tarjoamme kattavat LVI-palvelut: asennukset ja korjaukset, putkiremontit ja linjasaneeraukset, viemärikuvaukset kameralla, 24h hätähuollon, huoltosopimukset kiinteistöille sekä saaristopalvelut omalla veneellä. Haluatko tietää jostain palvelusta tarkemmin?";
  }

  if (/hinta|maksa|tunti|kustannu|halpa|kallis|veroväh|kotitalous/.test(q)) {
    return `Tuntiveloituksemme on ${PRICING.hourlyExVat} € (ALV 0%) eli ${PRICING.hourlyInclVat} € (sis. ALV ${PRICING.vatRate}%). Minimilaskutus on ${PRICING.minimumHours} tuntia + aluemaksu. Muista kotitalousvähennys — jopa 2400 €/hlö! Tarkemman tarjouksen saat soittamalla: ${CONTACT.phone}.`;
  }

  if (/yhteys|soitta|puhelin|sähköposti|email|tavoi/.test(q)) {
    return `Tavoitat meidät parhaiten puhelimitse: ${CONTACT.phone}. Sähköposti: ${CONTACT.email}. Osoitteemme: ${CONTACT.fullAddress}. Hätätilanteissa 24/7: ${CONTACT.phone2}.`;
  }

  if (/saaristo|saari|vene|mökki/.test(q)) {
    return `Palvelemme saaristossa omalla veneellä — Espoon, Kirkkonummen ja Helsingin saaristot. Saaristokohteet asennus-, huolto- ja korjaustöissä. Soita ja kerro kohteesta: ${CONTACT.phone}.`;
  }

  if (/alue|missä|helsinki|espoo|kirkkonumm|vantaa|toimialue/.test(q)) {
    return "Palvelualueemme kattaa Espoon, Helsingin, Kirkkonummen ja Vantaan sekä näiden saaristot. Aluemaksut: Espoo 20 €, Helsinki/Kirkkonummi/Vantaa 30 € (ALV 0%).";
  }

  if (/huoltosop|sopimus|ylläpito|kiinteistö/.test(q)) {
    return `Tarjoamme huoltosopimuksia kiinteistöille — säännölliset tarkastukset ja nopea reagointi häiriötilanteisiin. Pyydä tarjous: ${CONTACT.phone}.`;
  }

  if (/kuka|yritys|kokemus|vuosi|luotett/.test(q)) {
    return `LVI Asentimo Oy on toiminut vuodesta 2001 — yli 25 vuotta kokemusta LVI-alalta. Olemme toteuttaneet yli 40 suurta projektia taloyhtiöille, kiinteistöyhtiöille ja kunnille pääkaupunkiseudulla.`;
  }

  if (/kiitos|hyvä|selvä|ok/.test(q)) {
    return `Ole hyvä! Jos sinulla tulee muita kysymyksiä, olen täällä. Voit myös soittaa suoraan: ${CONTACT.phone}.`;
  }

  if (/moi|hei|terve|huomenta|iltaa/.test(q)) {
    return "Hei! Miten voin auttaa sinua tänään?";
  }

  return `Hyvä kysymys — en valitettavasti pysty vastaamaan siihen tarkasti. Paras tapa saada vastaus on soittaa suoraan: ${CONTACT.phone}. Vastaamme yleensä saman päivän aikana!`;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  // Escape to close
  useEffect(() => {
    function handleEsc(e: globalThis.KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, [isOpen]);

  function handleOpen() {
    setIsOpen(true);
    if (messages.length === 0) {
      setMessages([{ role: "assistant", content: WELCOME }]);
    }
  }

  function sendMessage(text: string) {
    if (!text.trim()) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setShowQuickReplies(false);
    setIsTyping(true);

    // Simulate thinking delay
    setTimeout(() => {
      const response = getDemoResponse(text);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <>
      {/* Launcher button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="chat-launcher-safe fixed z-50 w-14 h-14 rounded-full bg-copper hover:bg-copper-dark text-dark flex items-center justify-center shadow-lg transition-colors hover:scale-105 active:scale-95"
          aria-label="Avaa chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div
          className="chat-panel-enter chat-panel-safe fixed z-50 w-[380px] h-[520px] max-sm:inset-0 max-sm:w-full max-sm:h-full max-sm:bottom-0 max-sm:right-0 flex flex-col rounded-2xl max-sm:rounded-none overflow-hidden shadow-2xl shadow-black/20 border border-dark-border"
          role="dialog"
          aria-modal="true"
          aria-label="Chat — LVI Asentimo"
        >
          {/* Header */}
          <div className="bg-dark px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-copper flex items-center justify-center">
                <span className="font-display font-bold text-dark text-sm">A</span>
              </div>
              <div>
                <p className="font-display font-bold text-text-light text-sm tracking-tight">
                  LVI Asentimo
                </p>
                <p className="text-[10px] text-text-light-muted flex items-center gap-1.5">
                  <span className="px-1.5 py-px rounded bg-copper/15 text-copper font-semibold uppercase tracking-wider">Demo</span>
                  Virtuaalinen avustaja
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-11 h-11 flex items-center justify-center rounded-md text-text-light-muted hover:text-text-light hover:bg-dark-surface transition-colors"
              aria-label="Sulje chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-3 bg-warm-white"
            aria-live="polite"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-msg-enter flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-copper flex items-center justify-center shrink-0 mr-2 mt-1">
                    <span className="font-display font-bold text-dark text-xs">A</span>
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-copper text-dark rounded-2xl rounded-br-sm"
                      : "bg-white border border-surface-dark text-text rounded-2xl rounded-bl-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Quick replies */}
            {showQuickReplies && messages.length > 0 && (
              <div className="chat-msg-enter flex flex-wrap gap-2 ml-9">
                {QUICK_REPLIES.map((qr) => (
                  <button
                    key={qr.label}
                    onClick={() => sendMessage(qr.value)}
                    className="px-3 py-1.5 text-xs font-medium rounded-full border border-copper text-copper hover:bg-copper hover:text-dark transition-colors"
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            )}

            {/* Typing indicator */}
            {isTyping && (
              <div className="chat-msg-enter flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-copper flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-dark text-xs">A</span>
                </div>
                <div className="bg-white border border-surface-dark rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border-t border-surface-dark px-3 py-2.5 flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Kirjoita viesti..."
              className="chat-input flex-1 py-2 px-3 rounded-lg bg-warm-white border border-surface-dark outline-none focus:border-copper transition-colors font-body text-text placeholder:text-text-dim"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="w-11 h-11 flex items-center justify-center rounded-lg bg-copper text-dark hover:bg-copper-dark disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
              aria-label="Lähetä"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
