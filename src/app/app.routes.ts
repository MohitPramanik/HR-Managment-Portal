import { Routes } from '@angular/router';
import { HolidayCalendar } from './holiday-calendar/holiday-calendar';
import { Payslips } from './payslips/payslips';
import { Dashboard } from './dashboard/dashboard';
import { Employees } from './employees/employees';
import { Attendance } from './attendance/attendance';
import { LeaveApply } from './leave-apply/leave-apply';
import { LeaveRequests } from './leave-requests/leave-requests';
import { LeaveBalance } from './leave-balance/leave-balance';
import { AttendanceRecords } from './attendance-records/attendance-records';
import { SalaryStructurePage } from './salary-structure/salary-structure';
import { ProfilePage } from './profile/profile';
import { CompanySettingPage } from './company-setting/company-setting';
import { GeneralSettings, SecuritySettings, Settings } from './settings/settings';
import { Notifications } from './notifications/notifications';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { ForgotPasswordPage } from './forgot-password-page/forgot-password-page';
import { NotFoundPage } from './not-found-page/not-found-page';
import { Jobs } from './jobs/jobs';
import { Candidates } from './candidates/candidates';
import { Departments } from './departments/departments';
import { Reports } from './reports/reports';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    {
        path: "dashboard",
        component: Dashboard
    },
    {
        path: "employees",
        component: Employees
    },
    {
        path: "attendance",
        component: Attendance
    },
    {
        path: "attendance/records",
        component: AttendanceRecords
    },
    {
        path: "payslips",
        component: Payslips
    },
    {
        path: "salary-structure",
        component: SalaryStructurePage
    },
    {
        path: "holiday-list",
        component: HolidayCalendar
    },
    {
        path: "settings",
        component: Settings,
        children: [
            {
                path: "",
                component: GeneralSettings,
                title: "Settings - General"
            },
            {
                path: "security",
                component: SecuritySettings,
                title: "Settings - Security"
            }
        ]
    },
    {
        path: "notifications",
        component: Notifications
    },
    {
        path: "login",
        component: Login
    },
    {
        path: "signup",
        component: Signup
    },
    {
        path: "password/reset",
        component: ForgotPasswordPage
    },
    {
        path: "company-setting",
        component: CompanySettingPage
    },
    {
        path: "profile",
        component: ProfilePage
    },
    {
        path: "leave",
        children: [
            {
                path: "apply",
                component: LeaveApply
            },
            {
                path: "requests",
                component: LeaveRequests
            },
            {
                path: "balance",
                component: LeaveBalance
            },
        ]
    },
    {
        path: "recruitment",
        children: [
            {
                path: "jobs",
                component: Jobs
            },
            {
                path: "candidates",
                component: Candidates
            }
        ]
    },
    {
        path: "departments",
        component: Departments
    },
    {
        path: "reports",
        component: Reports
    },
    {
        path: "**",
        component: NotFoundPage
    }
];
