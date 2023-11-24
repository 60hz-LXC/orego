'use client'

import React, { useState, useEffect, useRef } from "react";
import { Comment } from "react-loader-spinner";

import axios from "axios";
import "../chat/Chat.css";





function Chat() {
  const [chatHistory, setChatHistory] = useState([
    {
      role: "assistant",
      content: "Hallo und herzlich willkommen! Ich bin hier um Ihnen dabei zu helfen die Fragen zur Schuldfrage bei Verkehrsunfällen zu klären. Ich höre aufmerksam Ihre Schilderungen und Fragen zum Unfallhergang und versuche, wichtige Details wie die Position der Fahrzeuge, Verkehrszeiche und Wetterbedingungen zu erfassen. ",
    },
  ]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [abortController, setAbortController] = useState(null);

  useEffect(scrollToBottom, [chatHistory]);
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && abortController) {
        abortController.abort();
        setAbortController(null);
        setIsLoading(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("keydown", handleEsc);
    };
  }, [abortController]);

  const updateChatHistory = (role, content) => {
    setChatHistory((prevHistory) => [...prevHistory, { role, content }]);
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  const deleteMessage = (index) => {
    const newChatHistory = [...chatHistory];
    newChatHistory.splice(index, 1);
    setChatHistory(newChatHistory);
  };

  const handleSubmit = async () => {
    if (!message.trim()) {
      return;
    }
    const inputText = message.trim();
    setMessage("");
    updateChatHistory("user", inputText);
    const requestData = {
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "Du bist ein fortschrittlicher, hilfsbereiter Chatbot, der Nutzern dabei assistiert, Fragen zur Schuldfrage bei Verkehrsunfällen zu klären. Deine Aufgaben umfassen: 1. Aktives Zuhören und Verständnis: Du sollst aufmerksam die Schilderungen und Fragen der Nutzer zum Unfallhergang anhören und verstehen. Achte darauf, wichtige Details wie die Position der Fahrzeuge, Verkehrszeichen, Wetterbedingungen und Aussagen von Zeugen zu erfassen. 2. Empathische Kommunikation: Zeige Empathie und Verständnis für die Situation des Nutzers. Viele sind nach einem Unfall gestresst oder emotional aufgewühlt. Deine Antworten sollten beruhigend wirken und den Nutzer unterstützen. 3. Informative Unterstützung: Biete klare und hilfreiche Informationen zur Klärung der Schuldfrage an. Erkläre, welche Schritte der Nutzer unternehmen kann, um seine Position zu stärken, wie z.B. das Sammeln von Beweisen oder das Kontaktieren eines Anwalts. 4. Rechtliche Hinweis Mache den Nutzer darauf aufmerksam, dass deine Unterstützung informativ ist und keine rechtliche Beratung darstellt. Empfehle bei komplexen Fällen, professionelle rechtliche Hilfe in Anspruch zu nehmen. 5. Vermeidung von Schuldanerkenntnisse Rate den Nutzern, keine voreiligen Schuldanerkenntnisse zu machen, da die endgültige Klärung der Schuldfrage oft komplex ist und von vielen Faktoren abhängt. 6. Datenschutz - Versichere den Nutzern, dass ihre Daten vertraulich behandelt werden und der Dialog mit dir sicher ist. 7. Weiterleitung an Fachkräfte: Wenn die Anfrage des Nutzers über deine Fähigkeiten hinausgeht, leite ihn an entsprechende Fachkräfte oder Institutionen weiter, die professionelle Unterstützung bieten können. Deine Antworten sollten stets sachlich korrekt, verständlich und auf die individuelle Situation des Nutzers zugeschnitten sein. Dein Ziel ist es, den Nutzern eine erste Orientierung zu geben und sie auf dem Weg zur Klärung der Schuldfrage zu unterstützen.",
        },
        ...chatHistory.map((item) => ({
          role: item.role,
          content: item.content,
        })),
        { role: "user", content: inputText },
      ],
      temperature: 0.5,
      max_tokens: 2000,
      top_p: 0.6,
      frequency_penalty: 0,
      presence_penalty: 0,
      stream: true,
    };
    setIsLoading(true);

    const controller = new AbortController();
    setAbortController(controller);

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
          },
          body: JSON.stringify(requestData),
          signal: controller.signal, // add this line
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let fullContent = "";
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { role: "assistant", content: fullContent },
      ]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");
        const parsedLines = lines
          .map((line) => line.replace(/^data: /, "").trim())
          .filter((line) => line !== "" && line !== "[DONE]")
          .map((line) => JSON.parse(line));
        for (const parsedLine of parsedLines) {
          const { choices } = parsedLine;
          const { delta } = choices[0];
          const { content } = delta;
          if (content) {
            fullContent += content;
            setChatHistory((prevHistory) => {
              const newHistory = [...prevHistory];
              newHistory[newHistory.length - 1].content = fullContent;
              return newHistory;
            });
          }
        }
      }
      setIsLoading(false);
    } catch (error) {
      if (error.name === "AbortError") {
        return;
      }
      console.error(error);
      setIsLoading(false);
    }
  };
  return (
    <div
      className="flex flex-col  align-center oregoBG  h-screen w-full 
     overflow-hidden"
    >
      <div className="w-[96%] h-[100%] max-lg:mt-12 mt-8 rounded-2xl mx-auto ">
        <img src='/oregoLogo.svg' alt="" className="h-[3rem] ml-3" />
        <div className="scrollable-wrapper2 mt-4 border-2 border-white90 h-[80dvh] rounded-3xl dropshadow ">
          <div className=" overflow-x-hidden scrollable-content overflow-y-auto  bg-black90  rounded-3xl dropshadow mx-auto h-[100%]">
            {chatHistory.map((item, index) => {
              let formattedContent;
              if (
                (item.role === "user" && item.content.includes("$$")) ||
                (item.role === "assistant" && item.content.includes("```"))
              ) {
                const splitContent = item.content.split(
                  item.role === "user" ? "$$" : "```"
                );
                formattedContent = splitContent.map((text, i) => {
                  if (i % 2 === 1) {
                    return (
                      <pre key={i}>
                        {" "}
                        <code>{text}</code>{" "}
                      </pre>
                    );
                  } else {
                    return text.split("\n\n").map((part, j) => (
                      <p key={j} style={{ marginBottom: "1em" }}>
                        {" "}
                        {part.split("\n").join(" ")}{" "}
                      </p>
                    ));
                  }
                });
              } else {
                formattedContent = item.content.split("\n\n").map((text, i) => (
                  <p key={i} style={{ marginBottom: "1em" }}>
                    {" "}
                    {text.split("\n").join(" ")}{" "}
                  </p>
                ));
              }

              return (
                <div
                  key={index}
                  className={`message ${item.role}-message slide-up`}
                  style={{
                    overflowWrap: "break-word",
                    wordWrap: "break-word",
                    position: "relative",
                  }}
                >
                  {" "}
                  {formattedContent}{" "}
                  <span onClick={() => deleteMessage(index)}>
                    {" "}
                    <svg
                      className="delete-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      {" "}
                      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />{" "}
                    </svg>{" "}
                  </span>{" "}
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <div className="flex flew-row justify-start ">
          <textarea
            className="bg-[#00000099] rounded-2xl max-lg:w-[100%] dropshadow border-2 border-white90 h-22 mt-3 text-white pl-3  text-xs scrollable-content pt-2 w-[90%]"
            value={message}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Ihre Frage oder Anliegen..."
            disabled={isLoading}
            rows="4"
          />
          
                {isLoading ? (
                  <div class="lds-ripple">
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <button
                    className="bg-[#3B9FEE] group rounded-3xl max-lg:-ml-8 w-12 h-12 justify-center align-center mt-4 ml-5 transition duration-500 ease-in-out hover:bg-transparent border-2 border-[#3B9FEE]"
                    onClick={handleSubmit}
                    disabled={isLoading}
                  >
                    <img
                      src='/send-white.svg'
                      alt="Send Icon"
                      className="h-5 mx-auto ml-3 group-hover:scale-[1.1] transition duration-500 ease-in-out"
                    />
                  </button>
                )}
              
           
                    <button className=" max-lg:hidden group border-2 border-primary rounded-3xl w-12 h-12 justify-center align-center mt-4 ml-5 mr-6 hover:bg-primary transition duration-500 ease-in-out">
                      <img
                        src='/refresh-white.svg'
                        alt="Refresh Icon"
                        className="h-5 mx-auto group-hover:scale-[1.1] transition duration-500 ease-in-out "
                      />
                    </button>
                 
                        
                      
         
        
             </div>
      </div>
    </div>
  );
}

export default Chat;
