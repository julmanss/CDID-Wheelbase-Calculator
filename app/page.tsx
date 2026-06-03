"use client";

import { useState } from "react";
import Image from "next/image";

export default function WheelbaseCalculator() {
  const [wheelbase, setWheelbase] = useState("");

  const numVal = Number(wheelbase);
  const result =
    wheelbase && !isNaN(numVal) && numVal > 0
      ? (9.85 / 2800) * numVal
      : null;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #f8f8f6 0%, #e8e8e4 40%, #d8d8d2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        fontFamily: "'Bebas Neue', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;500;600;700&family=DM+Mono:wght@300;400;500&display=swap');

        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
        }
        input[type=number] { -moz-appearance: textfield; }

        .wb-input:focus {
          outline: none;
          border-color: #8a8a82 !important;
          background: rgba(255,255,255,0.92) !important;
        }
      `}</style>

      {/* Logo — fixed top-left of page */}
      <div
        style={{
          position: "fixed",
          top: "28px",
          left: "32px",
          zIndex: 10,
          background: "#0e0e0c",
          borderRadius: "14px",
          padding: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
        }}
      >
        <Image
          src="/CDID.png"
          alt="CDID Studios"
          width={120}
          height={120}
          style={{ objectFit: "contain", display: "block" }}
        />
      </div>

      <div style={{ width: "100%", maxWidth: "600px", transform: "scale(1.25)", transformOrigin: "top center" }}>

        {/* Card */}
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          {/* Chrome shimmer bar */}
          <div
            style={{
              height: "4px",
              background:
                "linear-gradient(90deg, #b0b0b0 0%, #f0f0ee 20%, #c8c8c4 40%, #ffffff 55%, #c0c0bc 70%, #e8e8e4 85%, #a0a0a0 100%)",
            }}
          />

          {/* Body */}
          <div style={{ padding: "28px 32px 32px", background: "rgba(248,248,246,0.96)" }}>

            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>

                {/* Title */}
                <div>
                  <h1
                    style={{
                      fontSize: "28px",
                      fontWeight: 400,
                      color: "#1a1a18",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      margin: "0 0 1px 0",
                      lineHeight: 1,
                      fontFamily: "'Bebas Neue', sans-serif",
                    }}
                  >
                    Wheelbase Calculator
                  </h1>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#7a7a72",
                      margin: 0,
                      letterSpacing: "2.5px",
                      textTransform: "uppercase",
                      fontFamily: "'Barlow Condensed', sans-serif",
                    }}
                  >
                    CDID Vehicle Development Tools
                  </p>
                </div>
              </div>

              {/* Version badge */}
              <div
                style={{
                  background: "#1a1a18",
                  color: "#c8c8c4",
                  fontSize: "11px",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  padding: "5px 12px",
                  borderRadius: "4px",
                  textTransform: "uppercase",
                  flexShrink: 0,
                }}
              >
                v1.0
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                height: "0.5px",
                background:
                  "linear-gradient(90deg, transparent, #b0b0a8 20%, #b0b0a8 80%, transparent)",
                marginBottom: "24px",
              }}
            />

            {/* Input */}
            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#5a5a52",
                  marginBottom: "8px",
                  fontFamily: "'Barlow Condensed', sans-serif",
                }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "#8a8a82",
                  }}
                />
                Wheelbase Input
              </div>

              <div style={{ position: "relative" }}>
                <input
                  className="wb-input"
                  type="number"
                  value={wheelbase}
                  onChange={(e) => setWheelbase(e.target.value)}
                  placeholder="INPUT WHEELBASE"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    background: "rgba(255,255,255,0.7)",
                    border: "0.5px solid #c0c0b8",
                    borderRadius: "10px",
                    padding: "14px 72px 14px 18px",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "#1a1a18",
                    letterSpacing: "1px",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    right: "18px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    color: "#9a9a90",
                    textTransform: "uppercase",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    pointerEvents: "none",
                  }}
                >
                  mm
                </span>
              </div>
            </div>

            {/* Info grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              {[
                { label: "Formula", value: "(9.85 ÷ 2800) × WB", mono: true },
                { label: "Measure", value: "FL→RL  /  FR→RR", mono: true },
                { label: "Input Unit", value: "Millimeters", mono: false },
                { label: "Output Unit", value: "Roblox Studs", mono: false },
              ].map(({ label, value, mono }) => (
                <div
                  key={label}
                  style={{
                    background: "rgba(255,255,255,0.55)",
                    border: "0.5px solid #c8c8c0",
                    borderRadius: "12px",
                    padding: "14px 16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "10px",
                      letterSpacing: "2.5px",
                      textTransform: "uppercase",
                      color: "#9a9a90",
                      fontWeight: 700,
                      marginBottom: "5px",
                      fontFamily: "'Barlow Condensed', sans-serif",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: mono ? "'DM Mono', monospace" : "'Bebas Neue', sans-serif",
                      fontSize: mono ? "13px" : "17px",
                      color: "#2a2a24",
                      fontWeight: mono ? 500 : 400,
                      letterSpacing: mono ? "0.5px" : "1.5px",
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>

            {/* Result panel */}
            <div
              style={{
                background: "linear-gradient(135deg, #1e1e1c 0%, #2a2a26 100%)",
                borderRadius: "14px",
                padding: "20px 24px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top gloss line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.25) 30%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.25) 70%, transparent)",
                }}
              />

              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: "3.5px",
                  textTransform: "uppercase",
                  color: "#6a6a62",
                  fontWeight: 700,
                  marginBottom: "8px",
                  fontFamily: "'Barlow Condensed', sans-serif",
                }}
              >
                Result
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "8px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {result !== null ? (
                  <>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "52px",
                        fontWeight: 300,
                        color: "#f0f0ec",
                        lineHeight: 1,
                        letterSpacing: "-1px",
                      }}
                    >
                      {result.toFixed(2)}
                    </span>
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: 400,
                        letterSpacing: "3px",
                        color: "#8a8a82",
                        textTransform: "uppercase",
                        paddingBottom: "6px",
                        fontFamily: "'Bebas Neue', sans-serif",
                      }}
                    >
                      studs
                    </span>
                  </>
                ) : (
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "24px",
                      color: "#4a4a42",
                      letterSpacing: "4px",
                      fontWeight: 400,
                      textTransform: "uppercase",
                      paddingTop: "6px",
                    }}
                  >
                    Wheelbase in studs
                  </span>
                )}
              </div>

              {result !== null && (
                <div
                  style={{
                    fontSize: "11px",
                    color: "#5a5a52",
                    fontFamily: "'DM Mono', monospace",
                    fontWeight: 400,
                    marginTop: "6px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {numVal.toLocaleString()} mm → {result.toFixed(2)} studs
                </div>
              )}
            </div>

            {/* Footer */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "16px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#aaa8a0",
                  fontWeight: 700,
                  fontFamily: "'Barlow Condensed', sans-serif",
                }}
              >
                CDID Studios
              </span>
              <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                {[true, true, false].map((active, i) => (
                  <div
                    key={i}
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: active ? "#7a7a72" : "#c0c0b8",
                    }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}