import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    {
        path: "dashboard",
        loadComponent: () => import("./pages/dashboard/dashboard").then(m => m.Dashboard),
        title: "HRMS - Dashboard"
    },
    {
        path: "employees",
        loadComponent: () => import("./pages/employees/employees").then(m => m.Employees),
        title: "HRMS - Employees"
    },
    {
        path: "attendance",
        loadComponent: () => import("./pages/attendance/attendance").then(m => m.Attendance),
        title: "HRMS - Attendance",
        children: [
            {
                path: "records",
                loadComponent: () => import("./pages/attendance-records/attendance-records").then(m => m.AttendanceRecords),
                title: "HRMS - Attendance Records"
            },
        ]
    },
    {
        path: "payslips",
        loadComponent: () => import("./pages/payslips/payslips").then(m => m.Payslips),
        title: "HRMS - Payslips"
    },
    {
        path: "salary-structure",
        loadComponent: () => import("./pages/salary-structure/salary-structure").then(m => m.SalaryStructurePage),
        title: "HRMS - Salary Structure"
    },
    {
        path: "holiday-list",
        loadComponent: () => import("./pages/holiday-calendar/holiday-calendar").then(m => m.HolidayCalendar),
        title: "HRMS - Holiday List"
    },
    {
        path: "settings",
        loadComponent: () => import("./pages/settings/settings").then(m => m.Settings),
        title: "HRMS - Settings",
        children: [
            {
                path: "",
                loadComponent: () => import("./pages/settings/settings").then(m => m.GeneralSettings),
            },
            {
                path: "security",
                loadComponent: () => import("./pages/settings/settings").then(m => m.SecuritySettings),
            }
        ]
    },
    {
        path: "notifications",
        loadComponent: () => import("./pages/notifications/notifications").then(m => m.Notifications),
        title: "HRMS - Notifications"
    },
    {
        path: "login",
        loadComponent: () => import("./pages/login/login").then(m => m.Login),
        title: "HRMS - Login"
    },
    {
        path: "signup",
        loadComponent: () => import("./pages/signup/signup").then(m => m.Signup),
        title: "HRMS - Signup"
    },
    {
        path: "password/reset",
        loadComponent: () => import("./pages/forgot-password-page/forgot-password-page").then(m => m.ForgotPasswordPage),
        title: "HRMS - Reset Password"
    },
    {
        path: "company-setting",
        loadComponent: () => import("./pages/company-setting/company-setting").then(m => m.CompanySettingPage),
        title: "HRMS - Organization Settings"
    },
    {
        path: "profile",
        loadComponent: () => import("./pages/profile/profile").then(m => m.ProfilePage),
        title: "HRMS - Profile"
    },
    {
        path: "leave",
        title: "HRMS - Leave",
        children: [
            {
                path: "apply",
                loadComponent: () => import("./pages/leave-apply/leave-apply").then(m => m.LeaveApply),
            },
            {
                path: "requests",
                loadComponent: () => import("./pages/leave-requests/leave-requests").then(m => m.LeaveRequests),
            },
            {
                path: "balance",
                loadComponent: () => import("./pages/leave-balance/leave-balance").then(m => m.LeaveBalance),
            },
        ]
    },
    {
        path: "recruitment",
        data: {role: "manager"},
        children: [
            {
                path: "jobs",
                loadComponent: () => import("./pages/jobs/jobs").then(m => m.Jobs),
                title: "HRMS - Jobs List"
            },
            {
                path: "candidates",
                loadComponent: () => import("./pages/candidates/candidates").then(m => m.Candidates),
                title: "HRMS - Candidates List"
            }
        ]
    },
    {
        path: "departments",
        loadComponent: () => import("./pages/departments/departments").then(m => m.Departments),
        title: "HRMS - Departments",
        data: {role: "manager"}
    },
    {
        path: "reports",
        loadComponent: () => import("./pages/reports/reports").then(m => m.Reports),
        title: "HRMS - Reports"
    },
    {
        path: "**",
        loadComponent: () => import("./pages/not-found-page/not-found-page").then(m => m.NotFoundPage),
        title: "HRMS - 404 Not Found"
    }
];
