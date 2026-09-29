import { Link } from 'react-router-dom';
import { Header } from '../components/common/Header';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Icon } from '../components/common/Icon';
import { ProgressBar } from '../components/common/ProgressBar';
import { LoadingState, ErrorState } from '../components/common/StatusStates';
import { useAsyncData } from '../hooks/useAsyncData';
import { addWaterGlass, getDashboardData, getUserProfile } from '../services';
import { useState } from 'react';

function percent(value, goal) {
    return goal ? Math.round((value / goal) * 100) : 0;
}

export function DashboardPage() {
    const dash = useAsyncData(getDashboardData, []);
    const user = useAsyncData(getUserProfile, []);
    const [waterFlash, setWaterFlash] = useState(false);

    if (dash.status === 'loading' || user.status === 'loading') {
        return <><Header /><main className="page-width py-5"><LoadingState /></main></>;
    }
    if (dash.status === 'error' || !dash.data) {
        return <><Header /><main className="page-width py-5"><ErrorState onRetry={() => window.location.reload()} /></main></>;
    }

    const data = dash.data;
    const nutrition = data.nutrition;
    const kcalLeft = Math.max(0, nutrition.calories.goal - nutrition.calories.value);

    async function onAddWater() {
        const next = await addWaterGlass();
        dash.setData((current) => ({
            ...current,
            nutrition: { ...current.nutrition, water: { ...current.nutrition.water, value: next } },
        }));
        setWaterFlash(true);
        window.setTimeout(() => setWaterFlash(false), 1000);
    }

    return (
        <>
            <Header title={`Good morning, ${user.data?.name || 'Alex'}`} streak={data.streak} />
            <main className="page-width space-y-4 py-5">
                <Card className="relative overflow-hidden p-5">
                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary-fixed/20 blur-2xl" />
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon className="text-sm">ecg_heart</Icon></span>
                            <span className="section-label">Longevity Core</span>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary-fixed/40 px-2.5 py-0.5 font-body text-xs font-semibold text-primary">
                            <Icon className="text-xs">trending_up</Icon> +{data.scoreDelta} from yesterday
                        </span>
                    </div>
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                        <div className="relative mx-auto flex h-32 w-32 shrink-0 items-center justify-center sm:mx-0">
                            <svg className="h-full w-full -rotate-90" viewBox="0 0 160 160" aria-hidden="true">
                                <circle cx="80" cy="80" r="70" fill="none" stroke="#f2f3ff" strokeWidth="12" />
                                <circle cx="80" cy="80" r="70" fill="none" stroke="#005c55" strokeLinecap="round" strokeWidth="12" strokeDasharray="440" strokeDashoffset={440 - (440 * data.healthScore) / 100} />
                            </svg>
                            <div className="absolute text-center">
                                <strong className="block font-headline text-3xl">{data.healthScore}</strong>
                                <span className="section-label">/ 100</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="font-headline text-xl font-bold">Health Score</h2>
                            <p className="mt-1 font-body text-sm font-semibold text-primary">Optimal range</p>
                            <p className="mt-3 font-body text-sm leading-6 text-on-surface-variant">Rest and recovery look aligned this morning. This score is a wellness snapshot, not a medical diagnosis.</p>
                            <div className="mt-4 flex gap-5 border-t border-outline-variant/20 pt-3">
                                <div><span className="section-label block">Recovery</span><strong className="font-headline text-lg">{data.recovery}%</strong></div>
                                <div><span className="section-label block">Sleep eff</span><strong className="font-headline text-lg">{data.sleepEfficiency}%</strong></div>
                            </div>
                        </div>
                    </div>
                </Card>

                <section>
                    <div className="mb-3 flex items-center justify-between">
                        <span className="section-label">Quick actions</span>
                        <Link to="/settings" className="font-body text-xs font-bold text-primary">Customize</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {[
                            ['photo_camera', 'Scan Food', '/food', 'bg-primary/10 text-primary'],
                            ['restaurant', 'Log Meal', '/food?log=1', 'bg-secondary-container/10 text-secondary-container'],
                            ['water_drop', 'Log Water', '#water', 'bg-tertiary-container/10 text-tertiary'],
                            ['fitness_center', 'Workout', '/fitness/workout', 'bg-primary-container/15 text-primary-container'],
                        ].map(([icon, label, to, tone]) => (
                            to === '#water' ? (
                                <button key={label} type="button" onClick={onAddWater} className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-primary/10 bg-surface-container-lowest p-4 text-center shadow-card">
                                    <span className={`flex h-11 w-11 items-center justify-center rounded-full ${tone}`}><Icon>{icon}</Icon></span>
                                    <span className="font-body text-xs font-semibold">{label}</span>
                                </button>
                            ) : (
                                <Link key={label} to={to} className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-primary/10 bg-surface-container-lowest p-4 text-center shadow-card transition hover:-translate-y-0.5">
                                    <span className={`flex h-11 w-11 items-center justify-center rounded-full ${tone}`}><Icon>{icon}</Icon></span>
                                    <span className="font-body text-xs font-semibold">{label}</span>
                                </Link>
                            )
                        ))}
                    </div>
                </section>

                <Card className="p-5">
                    <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary-fixed/50 text-secondary"><Icon className="text-sm">nutrition</Icon></span>
                            <h2 className="font-headline text-xl font-bold">Nutrition Overview</h2>
                        </div>
                        <span className="rounded-full bg-surface-container-low px-2 py-0.5 font-body text-[11px] font-bold text-outline">DAILY TARGET</span>
                    </div>
                    <div className="mb-1.5 flex items-baseline justify-between">
                        <div>
                            <span className="font-headline text-2xl font-extrabold">{nutrition.calories.value.toLocaleString()}</span>
                            <span className="font-body text-xs text-outline"> / {nutrition.calories.goal.toLocaleString()} kcal</span>
                        </div>
                        <span className="font-body text-xs font-bold text-secondary-container">{kcalLeft} kcal left</span>
                    </div>
                    <div className="mb-4 flex h-3 gap-1 overflow-hidden rounded-full bg-surface-container p-0.5">
                        <div className="h-full rounded-full bg-primary" style={{ width: '45%' }} />
                        <div className="h-full rounded-full bg-secondary-container" style={{ width: '25%' }} />
                        <div className="h-full rounded-full bg-tertiary" style={{ width: '5%' }} />
                    </div>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                        {[
                            ['PROTEIN', nutrition.protein, 'primary', 'bg-primary'],
                            ['CARBS', nutrition.carbs, 'secondary', 'bg-secondary-container'],
                            ['FAT', nutrition.fat, 'tertiary', 'bg-tertiary'],
                        ].map(([label, metric, tone, bar]) => (
                            <div key={label} className="rounded-2xl border border-outline-variant/15 bg-surface-container-low p-2.5">
                                <div className="mb-1 flex justify-between">
                                    <span className={`section-label text-${tone}`}>{label}</span>
                                    <span className={`section-label text-${tone}`}>{percent(metric.value, metric.goal)}%</span>
                                </div>
                                <div className="font-body text-sm font-bold">{metric.value}g <span className="font-normal text-outline">/ {metric.goal}g</span></div>
                                <ProgressBar className="mt-2 h-1.5" value={percent(metric.value, metric.goal)} colorClass={bar} />
                            </div>
                        ))}
                    </div>
                </Card>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Card className="flex flex-col justify-between p-4">
                        <div>
                            <div className="mb-2 flex items-center justify-between">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-tertiary-fixed/60 text-tertiary"><Icon className="text-sm">local_drink</Icon></span>
                                <span className="section-label text-tertiary">Hydration</span>
                            </div>
                            <div className="font-headline text-2xl font-bold">{nutrition.water.value} <span className="font-body text-xs font-normal text-outline">/ {nutrition.water.goal} glasses</span></div>
                            <p className="mt-0.5 font-body text-xs text-on-surface-variant">{nutrition.water.liters}L of {nutrition.water.literGoal}L goal</p>
                            <div className="my-3 grid grid-cols-4 gap-1.5">
                                {Array.from({ length: nutrition.water.goal }).map((_, index) => (
                                    <span key={index} className={`h-4 rounded-full ${index < nutrition.water.value ? 'water-pill-active' : 'bg-surface-container-highest'}`} />
                                ))}
                            </div>
                        </div>
                        <Button onClick={onAddWater} className="w-full bg-tertiary-fixed text-tertiary hover:bg-tertiary-fixed-dim">
                            <Icon>add</Icon> {waterFlash ? 'Added' : '+ Add Glass'}
                        </Button>
                    </Card>
                    <Card className="p-4">
                        <div className="mb-2 flex items-center justify-between">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon className="text-sm">directions_run</Icon></span>
                            <span className="section-label text-primary">Strain</span>
                        </div>
                        <div className="flex items-baseline justify-between">
                            <div>
                                <div className="font-headline text-2xl font-bold">{data.activity.steps.toLocaleString()}</div>
                                <p className="font-body text-xs text-outline">Steps (Goal: {Math.round(data.activity.stepGoal / 1000)}k)</p>
                            </div>
                            <span className="font-body text-[10px] font-extrabold text-primary">{percent(data.activity.steps, data.activity.stepGoal)}%</span>
                        </div>
                        <div className="mt-3 space-y-1.5 border-t border-outline-variant/20 pt-2.5 font-body text-xs">
                            <div className="flex justify-between"><span>Active mins</span><strong>{data.activity.activeMinutes}m</strong></div>
                            <div className="flex justify-between"><span>Burned</span><strong>{data.activity.burned} kcal</strong></div>
                        </div>
                    </Card>
                </div>

                <Card className="border border-primary/20 bg-gradient-to-br from-primary-fixed/30 to-surface-container-lowest p-4">
                    <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-on-primary"><Icon>smart_toy</Icon></span>
                        <div className="flex-1">
                            <div className="mb-2 flex items-center justify-between">
                                <span className="rounded-full bg-primary px-2 py-0.5 font-body text-[11px] font-bold text-on-primary">AI Coach Insight</span>
                                <span className="section-label">{data.insight.time}</span>
                            </div>
                            <p className="rounded-2xl bg-surface/90 p-3 font-body text-sm leading-6">“{data.insight.text}”</p>
                            <div className="mt-2 text-right">
                                <Link to="/coach" className="inline-flex items-center gap-1 font-body text-sm font-bold text-primary">Ask AI Coach <Icon>arrow_forward</Icon></Link>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className="p-5">
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <h2 className="font-headline text-xl font-bold">Today's Schedule</h2>
                            <p className="font-body text-xs text-on-surface-variant">Meal pacing and movement blocks</p>
                        </div>
                        <Link to="/meals" aria-label="View meal plan" className="rounded-full p-1 text-primary hover:bg-primary-fixed/20"><Icon>calendar_month</Icon></Link>
                    </div>
                    <div className="relative space-y-4 pl-6 before:absolute before:bottom-2 before:left-2 before:top-2 before:w-0.5 before:bg-outline-variant/30">
                        {data.schedule.map((item) => (
                            <div key={item.id} className="relative">
                                <div className={`absolute -left-6 top-1 h-4 w-4 rounded-full ring-4 ring-surface-container-lowest ${item.status === 'upcoming' ? 'bg-secondary-container' : item.status === 'logged' ? 'bg-primary' : 'bg-outline-variant'}`} />
                                <div className={`flex items-start justify-between rounded-xl p-3 ${item.status === 'upcoming' ? 'border border-secondary-fixed-dim/40 bg-secondary-fixed/20' : item.status === 'planned' ? 'border border-dashed border-outline-variant/60' : 'bg-surface-container-low/60'}`}>
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="section-label">{item.period} • {item.time}</span>
                                            <span className="rounded px-1.5 font-body text-[10px] font-bold uppercase text-primary">{item.status}</span>
                                        </div>
                                        <h3 className="mt-0.5 font-headline text-base font-bold">{item.title}</h3>
                                        <p className="font-body text-sm text-on-surface-variant">{item.detail}</p>
                                    </div>
                                    {item.action === 'start' ? <Link to="/fitness/workout"><Button className="bg-secondary px-3 py-1 text-on-secondary">Start</Button></Link> : <Icon className="text-on-surface-variant">{item.icon}</Icon>}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </main>
        </>
    );
}
