import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/navigation/Sidebar';
import { BottomNavigation } from '../components/navigation/BottomNavigation';

export function AppLayout() {
    return (
        <div className="min-h-screen bg-surface text-on-surface lg:pl-64">
            <Sidebar />
            <div className="min-h-screen pb-20 lg:pb-0">
                <Outlet />
            </div>
            <BottomNavigation />
        </div>
    );
}
