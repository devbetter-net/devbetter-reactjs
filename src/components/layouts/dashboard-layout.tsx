import { ReactNode } from "react";

export function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <main>{children}</main>
        </div>
    );
}