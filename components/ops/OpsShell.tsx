import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { ops } from "./theme";

export default function OpsShell({
  eyebrow,
  title,
  actions,
  children,
}: {
  eyebrow?: string;
  title: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex" style={{ background: ops.navy }}>
      <Sidebar />
      <div className="flex-1 min-w-0 p-6">
        <div
          className="rounded-2xl min-h-[calc(100vh-3rem)] px-8 py-8"
          style={{ background: "#fff" }}
        >
          <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
            <div>
              {eyebrow && (
                <p
                  className="text-xs font-bold tracking-[0.2em] uppercase mb-1"
                  style={{ color: ops.muted }}
                >
                  {eyebrow}
                </p>
              )}
              <h2
                className="text-3xl font-extrabold tracking-tight"
                style={{ color: ops.ink }}
              >
                {title}
              </h2>
            </div>
            {actions}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
