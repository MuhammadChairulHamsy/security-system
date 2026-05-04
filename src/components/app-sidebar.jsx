import {
  Shield,
  LayoutDashboard,
  CircleGauge,
  BellRing,
  Settings,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

const data = {
  user: {
    name: "admin",
    email: "admin@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Log Aktivitas", url: "/log-aktivitas", icon: CircleGauge },
    { title: "Notifikasi", url: "/notifikasi", icon: BellRing },
    { title: "Pengaturan", url: "/pengaturan", icon: Settings },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className=" hover:bg-transparent"
            >
              <Link to="/dashboard" className="flex items-center gap-3">
                <div className="bg-chart-1 h-9 w-9 rounded-xl flex items-center justify-center shrink-0">
                  <Shield className="text-primary-foreground" size={20} />
                </div>
                <div className="flex flex-col gap-0.5 overflow-hidden">
                  <span className="font-bold text-chart-1 text-base leading-none">
                    SISTEM KEAMANAN
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-medium text-slate-300">
                    Pemantauan Aktif
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
