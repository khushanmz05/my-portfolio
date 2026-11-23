import type { ReactNode } from "react";
import type { CoverKind } from "@/data/projects";

type ProjectCoverProps = {
  kind: CoverKind;
  title: string;
  className?: string;
};

const shellLine = "text-[10px] leading-5 text-[#A1A1AA] sm:text-[11px]";
const prompt = "text-[#8B7CF6]";

function TerminalFrame({
  title,
  lines,
}: {
  title: string;
  lines: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="w-full overflow-hidden rounded-xl border border-[#2A2A31] bg-[#121214] shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-2 border-b border-[#2A2A31] bg-[#18181B] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#3F3F46]" />
          <span className="h-2 w-2 rounded-full bg-[#3F3F46]" />
          <span className="h-2 w-2 rounded-full bg-[#8B7CF6]/70" />
          <span className="ml-2 truncate text-[10px] text-[#8B8B95]">{title}</span>
        </div>
        <div className="space-y-1 p-4 font-mono">{lines}</div>
      </div>
    </div>
  );
}

function AssistantCover() {
  return (
    <TerminalFrame
      title="sensai — local assistant"
      lines={
        <>
          <p className={shellLine}>
            <span className={prompt}>$</span> sensai --model llama3.2:1b
          </p>
          <p className={shellLine}>
            <span className="text-[#D4D4D8]">you</span> Summarise my project notes
          </p>
          <p className={shellLine}>
            <span className="text-[#A99CFF]">sensai</span> Reading workspace/project_notes.md
          </p>
          <p className={shellLine}>
            <span className="text-[#A99CFF]">sensai</span> Python · SQLite · FastAPI
          </p>
          <div className="flex flex-wrap gap-1.5 pt-3">
            {["OLLAMA", "MCP", "JSON", "GUARDRAILS"].map((tag) => (
              <span
                key={tag}
                className="rounded border border-[#2A2A31] bg-[#18181B] px-2 py-0.5 font-sans text-[9px] tracking-wide text-[#8B7CF6]"
              >
                {tag}
              </span>
            ))}
          </div>
        </>
      }
    />
  );
}

function DashboardCover() {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="w-full overflow-hidden rounded-xl border border-[#2A2A31] bg-[#121214] shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-2 border-b border-[#2A2A31] bg-[#18181B] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#3F3F46]" />
          <span className="h-2 w-2 rounded-full bg-[#3F3F46]" />
          <span className="h-2 w-2 rounded-full bg-[#8B7CF6]/70" />
          <span className="ml-2 text-[10px] text-[#8B8B95]">dashboard / widgets</span>
        </div>
        <div className="grid grid-cols-2 gap-2 p-3">
          <div className="rounded-lg border border-[#2A2A31] bg-[#18181B] p-3">
            <p className="text-[9px] text-[#8B8B95]">Barcelona</p>
            <p className="mt-1 text-lg font-semibold text-white">23°</p>
            <p className="text-[9px] text-[#A1A1AA]">Clear · 5 min refresh</p>
          </div>
          <div className="rounded-lg border border-[#2A2A31] bg-[#18181B] p-3">
            <p className="text-[9px] text-[#8B8B95]">facebook/react</p>
            <p className="mt-1 text-lg font-semibold text-white">231k</p>
            <p className="text-[9px] text-[#A1A1AA]">stars · GitHub API</p>
          </div>
          <div className="col-span-2 rounded-lg border border-[#2A2A31] bg-[#18181B] p-3">
            <p className="text-[9px] text-[#8B8B95]">BBC News · RSS</p>
            <div className="mt-2 space-y-1">
              <p className="truncate text-[10px] text-[#D4D4D8]">Markets close higher as tech leads gains</p>
              <p className="truncate text-[10px] text-[#A1A1AA]">Weekend travel disruptions expected</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropCover() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-full max-w-sm overflow-hidden rounded-xl border border-[#2A2A31] bg-[#121214] shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between border-b border-[#2A2A31] bg-[#18181B] px-3 py-2">
          <span className="text-[10px] text-[#8B8B95]">livedrop / drop-04</span>
          <span className="rounded-full bg-[#8B7CF6]/15 px-2 py-0.5 text-[9px] font-medium text-[#A99CFF]">
            LIVE
          </span>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#8B8B95]">
                Drops in
              </p>
              <p className="mt-1 font-mono text-2xl font-semibold text-white">
                02:14:08
              </p>
            </div>
            <div className="h-12 w-12 rounded-lg border border-[#2A2A31] bg-gradient-to-br from-[#8B7CF6]/60 to-[#18181B]" />
          </div>
          <div className="mt-4 space-y-1.5">
            <div className="flex justify-between text-[9px] text-[#8B8B95]">
              <span>Stock</span>
              <span>42 / 100</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#2A2A31]">
              <div className="h-full w-[42%] rounded-full bg-[#8B7CF6]" />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="rounded-md border border-[#2A2A31] px-2 py-1 font-mono text-[9px] text-[#A1A1AA]">
              Firestore
            </span>
            <span className="text-[9px] text-[#8B7CF6]">real-time updates</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChessCover() {
  const pieces: Record<number, string> = {
    0: "r", 1: "n", 2: "b", 3: "q", 4: "k", 5: "b", 6: "n", 7: "r",
    8: "p", 9: "p", 10: "p", 12: "p", 13: "p", 14: "p", 15: "p",
    24: "P", 25: "P", 26: "P", 28: "P", 29: "P", 30: "P", 31: "P",
    48: "P", 49: "P", 50: "P", 51: "P", 52: "P", 53: "P", 54: "P", 55: "P",
    56: "R", 57: "N", 58: "B", 59: "Q", 60: "K", 61: "B", 62: "N", 63: "R",
  };

  return (
    <div className="flex h-full items-center justify-center gap-5">
      <div className="grid h-[150px] w-[150px] shrink-0 grid-cols-8 overflow-hidden rounded-md border border-[#2A2A31] sm:h-[180px] sm:w-[180px]">
        {Array.from({ length: 64 }).map((_, index) => {
          const row = Math.floor(index / 8);
          const col = index % 8;
          const isDark = (row + col) % 2 === 1;
          const piece = pieces[index];
          return (
            <div
              key={index}
              className={`flex items-center justify-center font-mono text-[9px] sm:text-[11px] ${
                isDark ? "bg-[#2A2A31]" : "bg-[#3F3F46]"
              } ${piece && piece === piece.toUpperCase() ? "text-[#F3F3F5]" : "text-[#A99CFF]"}`}
            >
              {piece}
            </div>
          );
        })}
      </div>

      <div className="min-w-0">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8B8B95]">
          Held-out test
        </p>
        <p className="mt-1 text-3xl font-semibold text-white sm:text-4xl">85.43%</p>
        <p className="mt-2 max-w-[140px] text-[10px] leading-4 text-[#A1A1AA]">
          143,109 positions classified from a 781-value FEN encoding.
        </p>
        <div className="mt-3 h-1.5 w-32 overflow-hidden rounded-full bg-[#2A2A31]">
          <div className="h-full w-[85%] rounded-full bg-[#8B7CF6]" />
        </div>
      </div>
    </div>
  );
}

function CryptoCover() {
  const steps = ["UTF-8", "AES-256", "XOR", "BASE64"];
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-md border border-[#2A2A31] bg-[#18181B] px-3 py-2 font-mono text-[10px] text-[#D4D4D8]">
              {step}
            </span>
            {index < steps.length - 1 && (
              <span className="text-[#8B7CF6]" aria-hidden="true">
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="w-full max-w-sm rounded-lg border border-[#2A2A31] bg-[#121214] p-3 font-mono text-[9px] leading-5 text-[#A1A1AA]">
        <p>
          <span className="text-[#8B7CF6]">key</span> 57696e74657220697320636f6d696e67
        </p>
        <p>
          <span className="text-[#8B7CF6]">out</span> 9f2c1a7e4b8d0f63...
        </p>
        <p className="text-[#8B8B95]">reverse → decrypt → verify</p>
      </div>
    </div>
  );
}

function TerminalCover() {
  return (
    <TerminalFrame
      title="minishell — /bin/bash"
      lines={
        <>
          <p className={shellLine}>
            <span className={prompt}>minishell$</span> ls -la | grep src
          </p>
          <p className={shellLine}>drwxr-xr-x  src/</p>
          <p className={shellLine}>-rw-r--r--  Makefile</p>
          <p className={shellLine}>
            <span className={prompt}>minishell$</span> echo $PATH &gt; out.txt
          </p>
          <p className={shellLine}>
            <span className="text-[#A99CFF]">[exit 0]</span> pipe · redirect · env
          </p>
        </>
      }
    />
  );
}

function ArcadeCover() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex gap-2">
        {["ncurses", "SDL2", "SFML"].map((lib, index) => (
          <span
            key={lib}
            className={`rounded-md border px-3 py-1.5 font-mono text-[10px] ${
              index === 2
                ? "border-[#8B7CF6] bg-[#8B7CF6]/10 text-[#A99CFF]"
                : "border-[#2A2A31] bg-[#18181B] text-[#8B8B95]"
            }`}
          >
            {lib}
          </span>
        ))}
      </div>
      <div className="relative h-28 w-full max-w-xs overflow-hidden rounded-lg border border-[#2A2A31] bg-[#121214]">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#8B7CF6_1px,transparent_1px),linear-gradient(90deg,#8B7CF6_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute left-[18%] top-[24%] h-3 w-3 rounded-sm bg-[#8B7CF6]" />
        <div className="absolute right-[22%] top-[38%] h-3 w-3 rounded-sm bg-[#F3F3F5]" />
        <div className="absolute bottom-[22%] left-[45%] h-3 w-3 rounded-sm bg-[#A99CFF]" />
        <div className="absolute bottom-2 left-2 rounded bg-[#18181B] px-2 py-1 font-mono text-[9px] text-[#D4D4D8]">
          snake · score 20
        </div>
      </div>
      <p className="font-mono text-[9px] text-[#8B8B95]">dlopen · swap at runtime</p>
    </div>
  );
}

function LanderCover() {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="w-full rounded-xl border border-[#2A2A31] bg-[#121214] p-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8B8B95]">
            LunarLander-v3
          </p>
          <span className="rounded border border-[#2A2A31] px-2 py-0.5 font-mono text-[9px] text-[#A99CFF]">
            DQN
          </span>
        </div>
        <svg viewBox="0 0 240 90" className="mt-3 h-24 w-full" role="img" aria-label="Reward curve improving over training episodes">
          <path d="M0 78 L30 70 L60 76 L90 54 L120 58 L150 38 L180 44 L210 24 L240 30" fill="none" stroke="#8B7CF6" strokeWidth="2" />
          <path d="M0 78 L30 70 L60 76 L90 54 L120 58 L150 38 L180 44 L210 24 L240 30 L240 90 L0 90 Z" fill="#8B7CF6" opacity="0.12" />
          <circle cx="240" cy="30" r="3" fill="#A99CFF" />
        </svg>
        <div className="flex items-center justify-between font-mono text-[9px] text-[#8B8B95]">
          <span>random policy</span>
          <span>mean reward -168</span>
        </div>
      </div>
    </div>
  );
}

function RaycastCover() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-full max-h-[190px] w-full overflow-hidden rounded-lg border border-[#2A2A31] bg-[#121214]">
        <svg viewBox="0 0 320 180" className="h-full w-full" role="img" aria-label="Raycasting perspective grid">
          {Array.from({ length: 11 }).map((_, index) => (
            <line
              key={`v-${index}`}
              x1={160}
              y1={90}
              x2={index * 32}
              y2={180}
              stroke="#8B7CF6"
              strokeOpacity="0.22"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 6 }).map((_, index) => (
            <line
              key={`h-${index}`}
              x1={0}
              y1={90 + index * 18}
              x2={320}
              y2={90 + index * 18}
              stroke="#8B7CF6"
              strokeOpacity="0.18"
              strokeWidth="1"
            />
          ))}
          <rect x="70" y="52" width="44" height="58" fill="#8B7CF6" opacity="0.2" stroke="#A99CFF" strokeOpacity="0.5" />
          <rect x="206" y="64" width="52" height="46" fill="#8B7CF6" opacity="0.14" stroke="#A99CFF" strokeOpacity="0.4" />
        </svg>
        <div className="absolute bottom-2 left-2 rounded bg-[#18181B] px-2 py-1 font-mono text-[9px] text-[#A1A1AA]">
          FOV 66° · textured walls
        </div>
      </div>
    </div>
  );
}

function NetworkCover() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <svg viewBox="0 0 320 180" className="h-full w-full" role="img" aria-label="Network of connected clients and a server">
        <line x1="160" y1="90" x2="60" y2="40" stroke="#8B7CF6" strokeOpacity="0.35" />
        <line x1="160" y1="90" x2="260" y2="40" stroke="#8B7CF6" strokeOpacity="0.35" />
        <line x1="160" y1="90" x2="70" y2="140" stroke="#8B7CF6" strokeOpacity="0.35" />
        <line x1="160" y1="90" x2="250" y2="140" stroke="#8B7CF6" strokeOpacity="0.35" />
        <circle cx="160" cy="90" r="20" fill="#18181B" stroke="#8B7CF6" />
        <text x="160" y="94" textAnchor="middle" fill="#F3F3F5" fontSize="9" fontFamily="monospace">srv</text>
        {[
          [60, 40],
          [260, 40],
          [70, 140],
          [250, 140],
        ].map(([cx, cy], index) => (
          <g key={index}>
            <circle cx={cx} cy={cy} r="13" fill="#18181B" stroke="#3F3F46" />
            <text x={cx} y={cy + 3} textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="monospace">
              AI
            </text>
          </g>
        ))}
        <circle cx="48" cy="86" r="2" fill="#A99CFF" />
        <circle cx="272" cy="96" r="2" fill="#A99CFF" />
      </svg>
      <div className="absolute bottom-2 left-2 rounded bg-[#18181B] px-2 py-1 font-mono text-[9px] text-[#A1A1AA]">
        TCP · custom protocol
      </div>
    </div>
  );
}

function FtpCover() {
  return (
    <TerminalFrame
      title="myftp — port 21"
      lines={
        <>
          <p className={shellLine}>
            <span className={prompt}>220</span> myftp ready
          </p>
          <p className={shellLine}>
            <span className={prompt}>USER</span> anonymous
          </p>
          <p className={shellLine}>
            <span className={prompt}>PASS</span> ••••••
          </p>
          <p className={shellLine}>
            <span className={prompt}>230</span> logged in
          </p>
          <p className={shellLine}>
            <span className={prompt}>PASV</span> 227 Entering Passive Mode
          </p>
          <p className={shellLine}>
            <span className={prompt}>RETR</span> notes.txt · 200 OK
          </p>
        </>
      }
    />
  );
}

function PlazzaCover() {
  return (
    <div className="flex h-full items-center justify-center gap-3">
      {[
        { title: "margarita", state: "cooking", time: "2s" },
        { title: "regina", state: "queued", time: "—" },
        { title: "americana", state: "ready", time: "0s" },
      ].map((order, index) => (
        <div
          key={order.title}
          className={`w-24 rounded-lg border p-3 ${
            index === 1
              ? "border-[#2A2A31] bg-[#121214]"
              : "border-[#8B7CF6]/40 bg-[#18181B]"
          }`}
        >
          <p className="truncate font-mono text-[9px] text-[#A1A1AA]">#{index + 1}</p>
          <p className="mt-1 truncate text-[10px] font-medium text-[#F3F3F5]">{order.title}</p>
          <p className="mt-2 text-[9px] text-[#8B8B95]">{order.state}</p>
          <p className="text-[9px] text-[#8B7CF6]">{order.time}</p>
        </div>
      ))}
    </div>
  );
}

function CircuitCover() {
  return (
    <div className="flex h-full items-center justify-center">
      <svg viewBox="0 0 320 180" className="h-full w-full" role="img" aria-label="Logic gate circuit diagram">
        <g stroke="#8B7CF6" strokeWidth="1.5" fill="none" opacity="0.75">
          <path d="M40 70 H90" />
          <path d="M40 110 H90" />
          <path d="M130 90 H180" />
          <path d="M220 90 H280" />
          <path d="M90 70 V110" />
        </g>
        <g fill="#18181B" stroke="#A99CFF">
          <rect x="90" y="58" width="40" height="64" rx="4" />
          <rect x="180" y="70" width="40" height="40" rx="20" />
        </g>
        <text x="110" y="94" textAnchor="middle" fill="#F3F3F5" fontSize="10" fontFamily="monospace">AND</text>
        <text x="200" y="95" textAnchor="middle" fill="#F3F3F5" fontSize="10" fontFamily="monospace">NOT</text>
        <g fill="#8B8B95" fontFamily="monospace" fontSize="9">
          <text x="28" y="74">A</text>
          <text x="28" y="114">B</text>
          <text x="288" y="94">OUT</text>
        </g>
        <circle cx="40" cy="70" r="3" fill="#8B7CF6" />
        <circle cx="40" cy="110" r="3" fill="#8B7CF6" />
        <circle cx="280" cy="90" r="3" fill="#A99CFF" />
      </svg>
    </div>
  );
}

function TodoCover() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-full max-w-xs rounded-xl border border-[#2A2A31] bg-[#121214] p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-white">Today</p>
          <span className="rounded bg-[#8B7CF6]/15 px-2 py-0.5 font-mono text-[9px] text-[#A99CFF]">
            3 / 5
          </span>
        </div>
        <div className="mt-3 space-y-2">
          {[
            ["Ship the API", true],
            ["Write tests", true],
            ["Review pull request", false],
            ["Update docs", false],
          ].map(([label, done]) => (
            <div key={String(label)} className="flex items-center gap-2">
              <span
                className={`flex h-4 w-4 items-center justify-center rounded border text-[9px] ${
                  done
                    ? "border-[#8B7CF6] bg-[#8B7CF6] text-white"
                    : "border-[#3F3F46] text-transparent"
                }`}
              >
                ✓
              </span>
              <span className={`text-[11px] ${done ? "text-[#8B8B95] line-through" : "text-[#D4D4D8]"}`}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrainCover() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-full max-w-sm rounded-xl border border-[#2A2A31] bg-[#121214] p-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8B8B95]">
            Barcelona → Madrid
          </p>
          <span className="font-mono text-[9px] text-[#A99CFF]">AVE 03091</span>
        </div>
        <div className="relative mt-5 h-10">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-[#3F3F46]" />
          <div className="absolute left-0 top-1/2 h-px w-[62%] bg-[#8B7CF6]" />
          {[
            ["Sants", "0%"],
            ["Zaragoza", "38%"],
            ["Madrid", "100%"],
          ].map(([station, left]) => (
            <div key={station} className="absolute top-1/2 -translate-y-1/2" style={{ left }}>
              <span className="block h-2.5 w-2.5 rounded-full border border-[#8B7CF6] bg-[#121214]" />
              <span className="absolute left-1/2 mt-2 -translate-x-1/2 whitespace-nowrap text-[9px] text-[#A1A1AA]">
                {station}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between font-mono text-[9px] text-[#8B8B95]">
          <span>2h 30m</span>
          <span>on time</span>
        </div>
      </div>
    </div>
  );
}

function HunterFallback() {
  return (
    <div className="relative h-full overflow-hidden bg-[#1D2A3A]">
      <div className="absolute left-6 top-8 h-6 w-10 rounded-full bg-[#8B7CF6]/70" />
      <div className="absolute right-12 top-12 h-5 w-8 rounded-full bg-[#A99CFF]/70" />
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#2D3B2A]" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <div className="h-4 w-6 rounded-sm bg-[#8B7CF6]" />
        <div className="mx-auto -mt-1 h-3 w-4 rounded-sm bg-[#A99CFF]" />
      </div>
      <div className="absolute bottom-2 right-3 rounded bg-black/40 px-2 py-1 font-mono text-[9px] text-white">
        SCORE 500
      </div>
    </div>
  );
}

function ShooterFallback() {
  return (
    <div className="relative h-full overflow-hidden bg-[#121214]">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(#8B7CF6_1px,transparent_1px),linear-gradient(90deg,#8B7CF6_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute left-[45%] top-[52%] h-3 w-3 rounded-full bg-[#F3F3F5]" />
      {[
        [22, 26],
        [70, 30],
        [60, 68],
        [30, 70],
      ].map(([left, top], index) => (
        <div
          key={index}
          className="absolute h-2.5 w-2.5 rounded-sm bg-[#8B7CF6]"
          style={{ left: `${left}%`, top: `${top}%` }}
        />
      ))}
      <div className="absolute bottom-2 left-2 rounded bg-[#18181B] px-2 py-1 font-mono text-[9px] text-[#A1A1AA]">
        wave 3 · 4 enemies
      </div>
    </div>
  );
}

export default function ProjectCover({ kind, title, className = "" }: ProjectCoverProps) {
  const content = (() => {
    switch (kind) {
      case "assistant":
        return <AssistantCover />;
      case "dashboard":
        return <DashboardCover />;
      case "drop":
        return <DropCover />;
      case "chess":
        return <ChessCover />;
      case "crypto":
        return <CryptoCover />;
      case "terminal":
        return <TerminalCover />;
      case "arcade":
        return <ArcadeCover />;
      case "lander":
        return <LanderCover />;
      case "raycast":
        return <RaycastCover />;
      case "network":
        return <NetworkCover />;
      case "ftp":
        return <FtpCover />;
      case "plazza":
        return <PlazzaCover />;
      case "circuit":
        return <CircuitCover />;
      case "todo":
        return <TodoCover />;
      case "train":
        return <TrainCover />;
      case "hunter":
        return <HunterFallback />;
      case "shooter":
        return <ShooterFallback />;
      default:
        return (
          <div className="flex h-full items-center justify-center">
            <span className="text-4xl font-semibold tracking-tight text-[#8B7CF6]">
              {title.slice(0, 2)}
            </span>
          </div>
        );
    }
  })();

  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-[#0F0F12] p-4 sm:p-5 ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#A99CFF_1px,transparent_1px),linear-gradient(90deg,#A99CFF_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="relative h-full">{content}</div>
    </div>
  );
}
