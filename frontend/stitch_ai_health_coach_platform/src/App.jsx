import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { DashboardPage } from './pages/DashboardPage';
import { SignInPage, SignUpPage } from './pages/AuthPages';
import { OnboardingPage } from './pages/OnboardingPage';
import { FoodPage } from './pages/FoodPage';
import { FitnessPage, WorkoutPage } from './pages/FitnessPages';
import { CoachPage } from './pages/CoachPage';
import { ProfilePage, ProgressPage } from './pages/ProfilePages';

export default function App() {
    return <Routes><Route path="/" element={<Navigate to="/dashboard" replace />} /><Route path="/signin" element={<SignInPage />} /><Route path="/signup" element={<SignUpPage />} /><Route path="/onboarding" element={<OnboardingPage />} /><Route element={<AppLayout />}><Route path="/dashboard" element={<DashboardPage />} /><Route path="/food" element={<FoodPage />} /><Route path="/fitness" element={<FitnessPage />} /><Route path="/fitness/workout" element={<WorkoutPage />} /><Route path="/coach" element={<CoachPage />} /><Route path="/profile" element={<ProfilePage />} /><Route path="/progress" element={<ProgressPage />} /></Route><Route path="*" element={<Navigate to="/dashboard" replace />} /></Routes>;
}
